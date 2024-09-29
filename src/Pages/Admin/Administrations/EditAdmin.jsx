import React from 'react'

export default function EditAdmin() {
   return (
      <div id='formulaire'>
         <div className='d-flex justify-content-center'>
            <form action="" className='form bg-white p-3 '>
               <h3 className='text-center'>Modifier l'admin</h3>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Nom de l'admin</label>
                  <input type="text" placeholder='Nom ' className='form-control' />
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Prénom de l'admin</label>
                  <input type="text" placeholder='Prénom ' className='form-control' />
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Adresse mail</label>
                  <input type="text" placeholder='Email' className='form-control' />
               </div>
               <div className='form-group'>
                  <label htmlFor="#" className='form-label'>Numero de téléphone</label>
                  <input type="phone" placeholder='Téléphone' className='form-control' />
               </div>

               <div className='form-group'>
                  <input type="submit" value='Modifier' className='btn btn-secondary' />
               </div>
            </form>
         </div>
      </div>
   )
}
