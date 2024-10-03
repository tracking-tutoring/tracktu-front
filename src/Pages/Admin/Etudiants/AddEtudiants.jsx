import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServicesResqueteAPI } from "../../../Services/resquet.api";
import { ETUDIANTS } from "../../../Services/path";



export default function AddEtudiants() {
   const [isLoading, setIsLoading] = useState(false);
   const [classrooms, setClassrooms] = useState([]);
   const navigate = useNavigate()
   const user = JSON.parse(sessionStorage.getItem('userInfos') || '{}');
   const user_id = user.id;

   const fecthClassroom = async () => {
      setIsLoading(true);
      try {
         ServicesResqueteAPI.getAllClassroom().then((response) => {
            setClassrooms(response.data); // Assuming that the API response is an array of objects with the structure of etudiant interface
            setIsLoading(false);
         })
      } catch (error) {
         setIsLoading(false);
         console.error("Error fetching data:", error);
      }
   }

   useEffect(() => {
      fecthClassroom();
   }, []);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors }
   } = useForm({
      defaultValues: {
         user_id: user_id
      }
   });

   const onSubmit = (data) => {

      setIsLoading(true); // Mettez isLoading à true avant de lancer la requête.

      ServicesResqueteAPI.createEtudiant(data)
         .then((response) => {
            reset()
            setIsLoading(false); // Mettez isLoading à false après la fin de la requête avec succès.
            toast.success("Etudiant ajouté avec succès");
            navigate(ETUDIANTS)
         })
         .catch(() => {
            setIsLoading(false); // Mettez isLoading à false après la fin de la requête en cas d'erreur.
            toast.error("Echec de l'ajout");
         });
   };

   return <div className="py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
         <h1>Nouveau Etudiant</h1>
         <div>
            <label>Nom</label>
            <input type="text" {...register("nom", { required: true })} />
            {errors.nom && <p>This field is required</p>}
         </div>
         <div>
            <label>Prénom</label>
            <input type="text" {...register("prenom", { required: true })} />
            {errors.prenom && <p>This field is required</p>}
         </div>
         <div>
            <label>CNI</label>
            <input type="text" {...register("cni", { required: true })} />
            {errors.cni && <p>This field is required</p>}
         </div>
         <div>
            <label>Adresse</label>
            <input type="text" {...register("adresse", { required: true })} />
            {errors.adresse && <p>This field is required</p>}
         </div>
         <div>
            <label>Téléphone</label>
            <input type="telephone" {...register("telephone", { required: true })} />
            {errors.telephone && <p>This field is required</p>}
         </div>
         <div>
            <label>Email</label>
            <input type="email" {...register("email", { required: true })} />
            {errors.email && <p>This field is required</p>}
         </div>
         <div>
            <label>Classe</label>
            <select {...register("classroom_id", { required: true ,pattern: /^[0-9]+$/})}>
               <option >Selectionné une classe</option>
               {classrooms?.map((classroom) => (
                  <option key={classroom.id} value={classroom.id}>
                     {classroom?.nom}
                  </option>
               ))}
            </select>

            {errors.classroom_id && <p>This field is required</p>}
         </div>

         <input
            type="submit"
            disabled={isLoading ? true : false}
            value={!isLoading ? 'Ajouter' : 'Ajout...'}
         />
      </form>
   </div>
}
