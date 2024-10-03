import { BiShowAlt, BiSolidEdit, BiSolidPlusCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AiTwotoneDelete } from "react-icons/ai";
import "./Etudiants.css"
import { toast } from "react-toastify";
import { ServicesResqueteAPI } from "../../../Services/resquet.api";
import { ADD_ETUDIANTS, UPDATE_ETUDIANTS, ETUDIANTS } from "../../../Services/path";

export default function Etudiants() {
   const [etudiants, setEtudiants] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const fetchData = async () => {
      setIsLoading(true);
      try {
         ServicesResqueteAPI.getAllEtudiant().then((response) => {
            setEtudiants(response.data); // Assuming that the API response is an array of objects with the structure of etudiant interface
            setIsLoading(false);
         })
      } catch (error) {
         setIsLoading(false);
         console.error("Error fetching data:", error);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   const handleDelete = async (id) => {
      try {
         const result = await Swal.fire({
            title: 'Êtes-vous sûr?',
            text: "Vous ne pourrez pas revenir en arrière!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimer!',
            cancelButtonText: 'Annuler'
         });

         if (result.isConfirmed) {
            await ServicesResqueteAPI.deleteEtudiant(id).then(() => {
               toast.success('L\'etudiant a été supprimé.');
               fetchData();
            })
         }
      } catch (error) {
         console.error("Error deleting etudiant:", error);
      }
   };

   return (
      <div>
         <h1>Etudiant</h1>

         <div className="d-flex justify-content-end py-2">
            <Link to={ADD_ETUDIANTS} className="btnAdd">
               <BiSolidPlusCircle /> Ajouter
            </Link>
         </div>

         {isLoading ? <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
            :
            <div className="table-responsive">
               <table className="table table-bordered caption-top">
                  <thead className="table-dark">
                     <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prenom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Classe</th>
                        <th scope="col">Téléphone</th>
                        <th scope="col">Action</th>
                     </tr>
                  </thead>
                  <tbody className="table-group-divider">
                     {etudiants.map((etudiant) => (
                        <tr key={etudiant.id}>
                           <th scope="row">{etudiant.id}</th>
                           <td>{etudiant.nom}</td>
                           <td>{etudiant.prenom}</td>
                           <td>{etudiant.email}</td>
                           <td>{etudiant.classroom}</td>
                           <td>{etudiant.telephone}</td>
                           <td className="d-flex justify-content-center">
                              <div className="d-flex gap-2 action-btn">
                                 <Link to={`${UPDATE_ETUDIANTS}/${etudiant.id}`} className="btn btn-primary"><BiSolidEdit /></Link>
                                 <button
                                    className="btn btn-danger"
                                    onClick={() => etudiant?.id !== undefined ? handleDelete(etudiant.id) : null}
                                 >
                                    <AiTwotoneDelete />
                                 </button>
                                 <Link to={`${ETUDIANTS}/${etudiant.id}`} className="btn btn-info text-white"><BiShowAlt /></Link>
                              </div >
                           </td >
                        </tr >
                     ))}
                  </tbody >
               </table >
            </div >
         }
      </div >)
}
