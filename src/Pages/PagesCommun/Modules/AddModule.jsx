import React, { useState } from 'react';
import "./Modules.css";
import { toast } from 'react-toastify';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { MODULE_ADMIN } from '../../../Services/path';

export default function AddModules() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const userInfoString = sessionStorage.getItem('userInfos');
  const userId = userInfoString ? JSON.parse(userInfoString).id : null;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_id: userId,
    }
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      // Créer un objet FormData pour envoyer le fichier
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("weeks_duration", data.weeks_duration);
      formData.append("description", data.description);
      formData.append("user_id", userId);

      // Vérifier et ajouter l'image
      if (data.picture && data.picture.length > 0) {
        formData.append("picture", data.picture[0]);  // Ajouter le fichier image
      } else {
        toast.error("Veuillez sélectionner une image valide");
        setIsLoading(false);
        return;
      }

      // Appel API avec FormData
      await ServicesResqueteAPI.createModules(formData);

      reset();
      setIsLoading(false);
      toast.success("Module ajouté avec succès");
      navigate(MODULE_ADMIN);
    } catch (error) {
      setIsLoading(false);
      toast.error("Échec de l'ajout du module");
    }
  };


  return (
    <div id='formulaire'>
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='form bg-white p-3 w-75' encType="multipart/form-data">
          <h3 className='text-center'>Créer un module</h3>

          <div className='form-group'>
            <label className='form-label'>Nom du module</label>
            <input
              type="text"
              placeholder='Nom'
              className='form-control'
              {...register("name", { required: "Le nom du module est requis" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className='form-group'>
            <label className='form-label'>Nombre de semaines</label>
            <input
              type="number"
              placeholder='Durée'
              className='form-control'
              {...register("weeks_duration", { required: "Le nombre de semaines est requis" })}
            />
            {errors.weeks_duration && <p>{errors.weeks_duration.message}</p>}
          </div>

          <div className='form-group'>
            <label className='form-label'>Image du module</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"  // Autoriser uniquement ces types de fichiers
              className='form-control'
              {...register("picture", { required: "L'image du module est requise" })}
            />
            {errors.picture && <p>{errors.picture.message}</p>}
          </div>

          <div className='form-group'>
            <label className='form-label'>Description du module</label>
            <textarea
              className='form-control'
              {...register("description", { required: "La description du module est requise" })}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>

          <div className='form-group'>
            <input
              type="submit"
              value='Ajouter'
              className='btn btn-secondary'
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
