import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';

export default function ShowAdmin() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [admin, setAdmin] = useState(null); // Initialiser avec null
  const navigate = useNavigate();

  const fetchData = async (id) => {
    setIsLoading(true); // Démarre le chargement
    try {
      const response = await ServicesResqueteAPI.getUser("tracking", id);
      setAdmin(response.data.data); // Récupère les données du admin
    } catch (error) {
      console.error("Error fetching admin data:", error);
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

  if (!admin) {
    return <div>Aucun admin trouvé</div>; // Afficher un message si les données ne sont pas disponibles
  }

  return (
    <div id='setting'>
      <div className='container-setting'>
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <h5>Informations du admin</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <div className="infoUser">
              <span>Profil</span>
              <p>{admin.role}</p>
            </div>
            <div className="infoUser">
              <span>Nom</span>
              <p className='text-uppercase'>{admin.firstname}</p>
            </div>
            <div className="infoUser">
              <span>Prénom</span>
              <p>{admin.lastname}</p>
            </div>
            <div className="infoUser">
              <span>Adresse mail</span>
              <p>{admin.email}</p>
            </div>
            <div className="infoUser">
              <span>Téléphone</span>
              <p>{admin.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
