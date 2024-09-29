import React from 'react'
import '../Setting.css'
import profil from "../../../assets/profil.jpg"
import { MdAddAPhoto } from "react-icons/md";

export default function Profil() {

  const userInfoString = JSON.parse(sessionStorage.getItem('userInfos'));

  return (
    <div id='setting'>
      <div className='container-setting'>
        <div className="row">
          <div className="col-lg-3 col-md-5" >
            <h5>Informations utilisateur</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <div className="infoUser">
              <span>
                Profil
              </span>
              <p>{userInfoString.role}</p>
            </div>
            <div className="infoUser">
              <span>
                Nom
              </span>
              <p className='text-uppercase'>{userInfoString.firstname}</p>
            </div>
            <div className="infoUser">
              <span>
                Prenom
              </span>
              <p>{userInfoString.lastname}</p>
            </div>
            <div className="infoUser">
              <span>
                Adresse mail
              </span>
              <p>{userInfoString.email}</p>
            </div>
            <div className="infoUser">
              <span>
                Téléphone
              </span>
              <p>{userInfoString.phone_number}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

