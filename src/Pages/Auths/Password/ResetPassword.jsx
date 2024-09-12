import React from 'react'
import "../Auth.css"
import { Link, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../../Services/path'

export default function ResetPassword() {
   const navigate = useNavigate()

   return (
      <div className="login-page">
         <div className="form">
            <form className="login-form">
               <h3 className='pb-3'>Réinitialiser votre mot de passe</h3>
               <input type="password" placeholder="Nouveau mot de passe" />
               <input type="password" placeholder="Confirmer le mot de passe" />
               <button onClick={() => navigate(LOGIN)}>Réinitialiser</button>
               <p className="message d-flex justify-content-end"><Link to={LOGIN}>Se connecter</Link></p>
            </form>
         </div>
      </div>
   )
}
