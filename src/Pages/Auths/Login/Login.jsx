import React, { useState } from 'react'
import "../Auth.css"
import { Link, useNavigate } from 'react-router-dom'
import { DASHBOARD_ADMIN, FORGET_PASSWORD } from '../../../Services/path'
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export default function Login() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data) => {

    setIsLoading(true);

    ServicesResqueteAPI.login(data)
      .then((response) => {
        reset()
        setIsLoading(false);
        const auth = { token: response.data.token, exp: response.data.exp }
        sessionStorage.setItem('authInfo', JSON.stringify(auth))
        sessionStorage.setItem('userInfos', JSON.stringify(response.data.user))
        toast.success("Votre connexion est un succès");
        navigate(DASHBOARD_ADMIN)
        // window.location.reload();
      })
      .catch(() => {
        setIsLoading(false); // Mettez isLoading à false après la fin de la requête en cas d'erreur.
        toast.error("Echec de la connexion");
      });
  };


  return (
    <div className="login-page auth">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h3 className='pb-3'>Connexion</h3>
          <div>
            <input type="text" placeholder="E-mail"{...register("email", { required: true })} />
            {errors.email && <p className='text-danger'>Ce champs est obligatoire</p>}
          </div>
          <div>
            <input type="password" placeholder="Mot de passe" {...register("password", { required: true, maxLength: 20 })} />
            {errors.password && <p className='text-danger'>Ce champs est obligatoire</p>}
          </div>

          {/* <button onClick={() => navigate(DASHBOARD_ADMIN)}>Connexion</button> */}
          <input type="submit"
            disabled={isLoading ? true : false}
            value={!isLoading ? 'Connexion' : 'Connexion...'} />

          <p className="message d-flex justify-content-end"><Link to={FORGET_PASSWORD}>Mot de passe oublié</Link></p>
        </form>
      </div>
    </div>
  )
}
