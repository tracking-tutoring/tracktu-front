import React from 'react'
import "../Auth.css"
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN, RESET_PASSWORD } from '../../../Services/path'

export default function ForgetPassword() {
   const navigate = useNavigate()

   return (
      <div className="login-page auth">
         <div className="form">
            <form className="login-form">
               <h3 className='pb-3'>Vous avez oublié votre mot de passe ?</h3>
               <input type="text" placeholder="Entrer votre adresse mail" />
               <button onClick={() => navigate(RESET_PASSWORD)}>Envoyer</button>
               <p className="message d-flex justify-content-end"><Link to={LOGIN}>Se connecter</Link></p>
            </form>
         </div>
      </div>
   )
}
