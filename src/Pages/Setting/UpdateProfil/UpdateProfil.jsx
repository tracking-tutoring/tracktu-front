import React from 'react'
import '../Setting.css'

export default function UpdateProfil() {
  return (
    <div id="setting">
      <div className="container-setting">
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <h5>Modifier l'utilisateur</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <form action="">
              <div className='inputForm'>


                <div>
                  <label htmlFor="currentPassword">
                    Nom
                  </label>
                  <input
                    type='text'
                    placeholder="Votre nom"
                    id="currentPassword"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword">
                    Prénom
                  </label>
                  <input
                    type='text'
                    placeholder="Votre prénom"
                    id="newPassword"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword">
                    Adresse email
                  </label>
                  <input
                    type='email'
                    placeholder="Votre adresse email"
                    id="confirmPassword"
                  />
                </div>
              </div>

              <input type="submit" value="Modifier" className="mt-4" />
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

