import React from 'react'

export default function EditCours() {
  return (
    <div id='formulaire'>
      <div className='d-flex justify-content-center'>
        <form action="" className='form bg-white p-3 '>
          <h3 className='text-center'>Modifier le module</h3>
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
            <input type="submit" value='Modifier' className='btn btn-secondary' />
          </div>
        </form>
      </div>
    </div>
  )
}
