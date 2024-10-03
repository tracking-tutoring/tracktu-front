import React, { useEffect, useState } from 'react';
import '../Setting.css';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';

export default function Profil() {
  const [user, setUser] = useState(null); // Initialisé avec null
  const [isLoading, setIsLoading] = useState(false);
  const userInfo = JSON.parse(sessionStorage.getItem('userInfos') || '{}');

  const getUser = async (userType, id) => {
    setIsLoading(true); // Démarrer le chargement
    try {
      const response = await ServicesResqueteAPI.getUser(userType, id);
      setUser(response.data.data); // Stocker les données de l'utilisateur
    } catch (error) {
      console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
    } finally {
      setIsLoading(false); // Arrêter le chargement
    }
  };

  useEffect(() => {
    if (userInfo.role === "tutor") {
      getUser("tutor", userInfo.id);
    } else {
      getUser("tracking", userInfo.id);
    }
  }, []);

  if (isLoading) {
    return <div>Chargement...</div>; // Afficher un message pendant le chargement
  }

  if (!user) {
    return <div>Aucun utilisateur trouvé</div>; // Afficher un message si l'utilisateur n'est pas encore chargé
  }

  return (
    <div id='setting'>
      <div className='container-setting'>
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <h5>Informations utilisateur</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <div className="infoUser">
              <span>Profil</span>
              <p>{user.role}</p>
            </div>
            <div className="infoUser">
              <span>Nom</span>
              <p className='text-uppercase'>{user.firstname}</p>
            </div>
            <div className="infoUser">
              <span>Prénom</span>
              <p>{user.lastname}</p>
            </div>
            <div className="infoUser">
              <span>Adresse mail</span>
              <p>{user.email}</p>
            </div>
            <div className="infoUser">
              <span>Téléphone</span>
              <p>{user.phone_number}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
