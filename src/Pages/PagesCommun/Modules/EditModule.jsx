import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';
import { MODULE_ADMIN } from '../../../Services/path';

export default function EditCours() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [module, setModule] = useState(null); // Initialiser à null pour éviter les erreurs
  const navigate = useNavigate();

  // Fonction pour récupérer les données du module
  const fetchData = async (id) => {
    try {
      const response = await ServicesResqueteAPI.getModule(id);
      setModule(response.data.data);
    } catch (error) {
      toast.error("Erreur lors du chargement des données du module");
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      fetchData(id);
    }
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    if (module) {
      setValue("name", module.name);
      setValue("weeks_duration", module.weeks_duration);
      setValue("description", module.description);
    }
  }, [module, setValue]);

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("weeks_duration", data.weeks_duration);
      formData.append("description", data.description);

      if (data.picture && data.picture.length > 0) {
        formData.append("picture", data.picture[0]); // Ajouter l'image si présente
      }

      await ServicesResqueteAPI.updateModule(id, formData);

      reset();
      setIsLoading(false);
      toast.success("Module modifié avec succès");
      navigate(MODULE_ADMIN);
    } catch (error) {
      setIsLoading(false);
      toast.error("Échec de la modification du module");
    }
  };

  return (
    <div id='formulaire'>
      <div className='d-flex justify-content-center'>
        <form onSubmit={handleSubmit(onSubmit)} className='form bg-white p-3'>
          <h3 className='text-center'>Modifier le module</h3>
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
            <label className='form-label'>Image du module (facultatif)</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              className='form-control'
              {...register("picture")}
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
              value='Modifier'
              className='btn btn-secondary'
              disabled={isLoading}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
