import React from 'react';
import './CardModule.css';
import { LuDot } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import avatar from '../../assets/avatar.png';
import programation from '../../assets/programation.jpg';
import LimiteText from '../LimiteText';
import { UPDATE_MODULE_ADMIN } from '../../Services/path';
import { ServicesResqueteAPI } from '../../Services/resquet.api';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export default function CardModule({ id, img, nom, dure, description, addBy, date, setIsDelete }) {
  const imgModule = img ? programation : programation;
  
  // Fonction pour supprimer un module
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
        cancelButtonText: 'Annuler',
      });

      if (result.isConfirmed) {
        await ServicesResqueteAPI.deleteModule(id);
        setIsDelete(true); // Déclenchement de la mise à jour
        toast.success('Le module a été supprimé.');
      }
    } catch (error) {
      console.error("Error deleting module:", error);
      toast.error("Erreur lors de la suppression du module");
    }
  };

  return (
    <div className="col-lg-6">
      <div id='cardModules' className=''>
        <div className="coursHeader">
          <img src={imgModule} alt="Module" />
        </div>
        <div className="coursBody">
          <div className='coursTexte'>
            <h3>{nom}</h3>
            <LimiteText text={description} maxLength={200} />
          </div>
          <div className='coursMatieres'>
            <span>Nombre de semaines : {dure}</span>
          </div>
          <div className="coursFooter">
            <div className='coursFooterLeft d-flex gap-3 align-items-center'>
              <div className='coursFooterImg'>
                <img src={avatar} alt="Avatar" />
              </div>
              <p>By {addBy} <LuDot /> <span className='fw-normal'>{date}</span></p>
            </div>
            <div className='d-flex gap-2'>
              <Link to={`${UPDATE_MODULE_ADMIN}/${id}`} className='btn btn-info'><FaEdit /></Link>
              <button onClick={() => handleDelete(id)} className='btn btn-danger'><RiDeleteBin6Line /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
