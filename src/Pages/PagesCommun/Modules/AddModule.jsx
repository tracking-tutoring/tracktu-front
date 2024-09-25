import React from 'react'
import "./Modules.css"

export default function AddModules() {
  return (
    <div id='formulaire'>
      <div className='d-flex justify-content-center'>
        <form action="" className='form bg-white p-3 w-75'>
          <h3 className='text-center'>Créer un module</h3>
          <div className='form-group'>
            <label htmlFor="#" className='form-label'>Nom du module</label>
            <input type="text" placeholder='Nom ' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="#" className='form-label'>Type du module</label>
            <input type="text" placeholder='Type' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="#" className='form-label'>Image du module</label>
            <input type="file" placeholder='Image' className='form-control' />
          </div>
          <div className='form-group'>
            <label htmlFor="#" className='form-label'>Description du module</label>
            <textarea name="Desccription" id="" className='form-control'></textarea>
          </div>
          <div className='form-group'>
            <input type="submit" value='Ajouter' className='btn btn-secondary' />
          </div>
        </form>
      </div>
    </div>
  )
}

