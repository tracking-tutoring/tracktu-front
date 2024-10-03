
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ServicesResqueteAPI } from "../../../Services/resquet.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ETUDIANTS } from "../../../Services/path";



export default function EditEtudiants() {
   const { id } = useParams();
   const [etudiant, setEtudiant] = useState();
   const [classrooms, setClassrooms] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate()


   const fetchData = async (id) => {
      setIsLoading(true);
      try {
         const [etudiantResponse, classroomResponse] = await Promise.all([
            ServicesResqueteAPI.getEtudiant(id),
            ServicesResqueteAPI.getAllClassroom()
         ])
         const eleve = etudiantResponse.data.etudiant;
         setEtudiant(eleve)
         setClassrooms(classroomResponse.data);
         setIsLoading(false);

      } catch (error) {
         setIsLoading(false);
         console.error("Error fetching data:", error);
      }
   }

   useEffect(() => {
      if (id !== undefined) {
         fetchData(id);
      }
   }, [id]);

   console.log(etudiant)

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
      setValue,
   } = useForm();

   useEffect(() => {
      if (etudiant) {
         setValue("email", etudiant.email);
         setValue("nom", etudiant.nom);
         setValue("prenom", etudiant.prenom);
         setValue("cni", etudiant.cni);
         setValue("adresse", etudiant.adresse);
         setValue("telephone", etudiant.telephone);
         setValue("classroom_id", etudiant.classroom_id);
      }
   }, [etudiant, setValue]);

   const onSubmit = (data) => {
      setIsLoading(true);

      ServicesResqueteAPI.updatEtudiante(data, id)
         .then(() => {
            reset();
            setIsLoading(false);
            toast.success("Etudiant modifié avec succès");
            navigate(ETUDIANTS)
         })
         .catch(() => {
            setIsLoading(false);
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
            <select {...register("classroom_id", { required: true,pattern: /^[0-9]+$/ })}>
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
