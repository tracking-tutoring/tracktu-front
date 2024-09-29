import React, { useState } from 'react';
import '../Setting.css';

export default function UpdatePassword() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div id="setting">
      <div className="container-setting">
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <h5>Modifier le mot de passe</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <form action="">
              <div className='inputForm'>
                <div>
                  <label htmlFor="currentPassword">
                    Mot de passe actuel
                  </label>
                  <input
                    type={!isChecked ? "password" : "text"}
                    placeholder="Votre mot de passe actuel"
                    id="currentPassword"
                  />
                </div>
                <div>
                  <label htmlFor="newPassword">
                    Nouveau mot de passe
                  </label>
                  <input
                    type={!isChecked ? "password" : "text"}
                    placeholder="Entre le nouveau mot de passe"
                    id="newPassword"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword">
                    Confirmer le mot de passe
                  </label>
                  <input
                    type={!isChecked ? "password" : "text"}
                    placeholder="Confirmer le mot de passe"
                    id="confirmPassword"
                  />
                </div>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  Afficher le mot de passe
                </label>
              </div>
              <input type="submit" value="Modifier" className="mt-4" />
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}
