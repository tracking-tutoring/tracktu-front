import React from 'react'
import "../Auth.css"
import { Link, useNavigate } from 'react-router-dom'
import { DASHBOARD_ADMIN, FORGET_PASSWORD } from '../../../Services/path'

export default function Login() {
  const navigate =useNavigate()

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form">
          <h3 className='pb-3'>Connexion</h3>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Mot de passe" />
          <button onClick={()=>navigate(DASHBOARD_ADMIN)}>Connexion</button>
          <p className="message d-flex justify-content-end"><Link to={FORGET_PASSWORD}>Mot de passe oublié</Link></p>
        </form>
      </div>
    </div>
  )
}
