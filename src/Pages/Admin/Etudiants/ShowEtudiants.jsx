import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Etudiants.css'
import { ServicesResqueteAPI } from "../../../Services/resquet.api";

export default function ShowEtudiants() {
   const { id } = useParams();
   const [etudiant, setEtudiant] = useState();
   const [myCours, setMyCours] = useState();
   const [isLoading, setIsLoading] = useState(false);

   const fetchEtudiant = async (id) => {
      setIsLoading(true)
      try {
         const response = await ServicesResqueteAPI.getEtudiant(id);
         const eleve = response.data.etudiant;
         const cours = response.data.cours;
         setEtudiant(eleve)
         setMyCours(cours)

         setIsLoading(false)
      } catch (error) {
         console.log(error);
         setIsLoading(false)
      }
   };

   useEffect(() => {
      if (id !== undefined) {
         fetchEtudiant(id);
      }
   }, [id]); // Ajoutez "id" dans le tableau des dépendances pour exécuter l'effet lorsque "id" change.


   return <div>
      <h3>INFORMATION ETUDIANT</h3>
      {isLoading ? <div className="spinner-border" role="status">
         <span className="visually-hidden">Loading...</span>
      </div>
         :
         <div className="showElmt">
            <table className="table table-bordered">
               <tbody>


                  <tr>
                     <th>
                        Nom & prénom :
                     </th>
                     <td>
                        {etudiant?.nom}
                     </td>
                  </tr>
                  <tr>
                     <th>
                        Classe :
                     </th>
                     <td>
                        {etudiant?.classroom}
                     </td>
                  </tr>
                  <tr>
                     <th>
                        Email :
                     </th>
                     <td>
                        {etudiant?.email}
                     </td>
                  </tr>
                  <tr>
                     <th>
                        Adresse :
                     </th>
                     <td>
                        {etudiant?.adresse}
                     </td>
                  </tr>
                  <tr>
                     <th>
                        CNI :
                     </th>
                     <td>
                        {etudiant?.cni}
                     </td>
                  </tr>
                  <tr>
                     <th>
                        Téléphone:
                     </th>
                     <td>
                        {etudiant?.telephone}
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      }
   </div>
}
