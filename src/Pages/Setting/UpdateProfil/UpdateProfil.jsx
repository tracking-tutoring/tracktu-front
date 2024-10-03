import React, { useEffect, useState } from 'react';
import '../Setting.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { PROFIL_ADMIN } from '../../../Services/path';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { toast } from 'react-toastify';

export default function UpdateProfil() {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfos') || '{}');
  const id = userInfo.id; // ID is extracted directly from session storage
  const [isLoading, setIsLoading] = useState(false);
  const [tuteur, setTuteur] = useState(null); // Singular to represent a single tutor
  const navigate = useNavigate();

  // Define the user type based on the role
  const userType = userInfo.role === "tutor" ? "tutor" : "tracking";

  // Fetch user data based on the ID and user type
  const fetchData = async (id) => {
    if (!id) {
      console.error("ID is undefined or null.");
      return;
    }
    console.log("Fetching data with ID:", id); // Debugging log to ensure ID is correct
    try {
      const response = await ServicesResqueteAPI.getUser(userType, id);
      console.log("Response from API:", response); // Log the response for debugging
      setTuteur(response.data.data); // Store the fetched data in state
    } catch (error) {
      console.error("Erreur lors de la récupération du tuteur:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData(id); // Fetch data when the component mounts or ID changes
    }
  }, [id]);

  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm();

  useEffect(() => {
    if (tuteur) {
      // Populate form fields with the fetched data
      setValue("firstname", tuteur.firstname);
      setValue("lastname", tuteur.lastname);
      setValue("email", tuteur.email);
      setValue("phone_number", tuteur.phone_number);
    }
  }, [tuteur, setValue]);

  // Handle form submission
  const onSubmit = (data) => {
    setIsLoading(true);

    if (!tuteur || !tuteur.id) {
      console.error("Tuteur ou ID du tuteur non défini");
      setIsLoading(false);
      return;
    }

    ServicesResqueteAPI.updateUser(userType, tuteur.id ,data)
      .then(() => {
        reset();
        setIsLoading(false);
        toast.success("Utilisateur modifié avec succès");
        navigate(PROFIL_ADMIN); // Navigate to profile page after success
      })
      .catch(() => {
        setIsLoading(false);
        toast.error("Échec de la modification");
      });
  };

  return (
    <div id="setting">
      <div className="container-setting">
        <div className="row">
          <div className="col-lg-3 col-md-5">
            <h5>Modifier l'utilisateur</h5>
          </div>
          <div className="col-lg-9 col-md-7">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='inputForm'>
                <div>
                  <label htmlFor="firstname">Nom</label>
                  <input
                    type='text'
                    placeholder="Votre nom"
                    id="firstname"
                    {...register("firstname", { required: true })} />
                  {errors.firstname && <p>Ce champ est requis</p>}
                </div>
                <div>
                  <label htmlFor="lastname">Prénom</label>
                  <input
                    type='text'
                    placeholder="Votre prénom"
                    id="lastname"
                    {...register("lastname", { required: true })} />
                  {errors.lastname && <p>Ce champ est requis</p>}
                </div>
                <div>
                  <label htmlFor="email">Adresse email</label>
                  <input
                    type='email'
                    placeholder="Votre adresse email"
                    id="email"
                    {...register("email", { required: true })} />
                  {errors.email && <p>Ce champ est requis</p>}
                </div>
                <div>
                  <label htmlFor="phone_number">Numéro de téléphone</label>
                  <input
                    type="phone"
                    placeholder='Téléphone'
                    className='form-control'
                    {...register("phone_number", { required: true })} />
                  {errors.phone_number && <p>Ce champ est requis</p>}
                </div>
              </div>

              <input type="submit" value="Modifier" className="mt-4" disabled={isLoading} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
