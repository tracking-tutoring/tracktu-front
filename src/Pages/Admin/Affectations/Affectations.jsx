import React, { useEffect, useState } from 'react'
import { ADD_AFFECTATIONS, ADD_GROUPES, UPDATE_AFFECTATIONS, UPDATE_GROUPES } from '../../../Services/path';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { Link } from 'react-router-dom';
import { BiSolidEdit, BiSolidPlusCircle } from 'react-icons/bi';
import { AiTwotoneDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import HeaderListes from '../../../Components/HeaderListes/HeaderListes';

export default function Affectations() {
  const [affectations, setAffectations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      ServicesResqueteAPI.getAffectations().then((response) => {
        setAffectations(response.data.data.data); // Assuming that the API response is an array of objects with the structure of etudiant interface
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
        await ServicesResqueteAPI.deleteAffectation(id).then(() => {
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
      <HeaderListes name={"Groupes"} link={ADD_AFFECTATIONS} />
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {affectations?.map((affectation) => (
                <tr key={affectation.id}>
                  <th scope="row">{affectation.id}</th>
                  <td>{affectation.name}</td>

                  <td className="d-flex justify-content-center">
                    <div className="d-flex gap-2 action-btn">
                      <Link to={`${UPDATE_AFFECTATIONS}/${affectation.id}`} className="btn btn-primary"><BiSolidEdit /></Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => affectation?.id !== undefined ? handleDelete(affectation.id) : null}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </div >
                  </td >
                </tr >
              ))}
            </tbody >
          </table >
        </div >
      }
    </div>
  )
}

