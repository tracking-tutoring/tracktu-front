import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';

export default function ShowTuteur() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [tuteur, setTuteur] = useState(null); // Initialiser avec null
  const navigate = useNavigate();

  const fetchData = async (id) => {
    setIsLoading(true); // Démarre le chargement
    try {
      const response = await ServicesResqueteAPI.getUser("tutor", id);
      setTuteur(response.data.data); // Récupère les données du tuteur
    } catch (error) {
      console.error("Error fetching tuteur data:", error);
    } finally {
      setIsLoading(false); // Arrête le chargement
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      fetchData(id);
    }
  }, [id]);

  if (isLoading) {
    return <div>Chargement...</div>; // Afficher un message de chargement
  }

  if (!tuteur) {
    return <div>Aucun tuteur trouvé</div>; // Afficher un message si les données ne sont pas disponibles
  }

  return (
    <div id='setting'>
      <div className='container-setting'>
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <h5>Informations du tuteur</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <div className="infoUser">
              <span>Profil</span>
              <p>{tuteur.role}</p>
            </div>
            <div className="infoUser">
              <span>Nom</span>
              <p className='text-uppercase'>{tuteur.firstname}</p>
            </div>
            <div className="infoUser">
              <span>Prénom</span>
              <p>{tuteur.lastname}</p>
            </div>
            <div className="infoUser">
              <span>Adresse mail</span>
              <p>{tuteur.email}</p>
            </div>
            <div className="infoUser">
              <span>Téléphone</span>
              <p>{tuteur.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
