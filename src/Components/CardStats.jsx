import React from 'react';
import "./Components.css";
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


const CardStats = ({ Icon, isLoading, color, nmbre, title }) => {

   return (
      <div className="col-xl-3 col-md-6 mb-4">
         <div className="card border-left-primary shadow h-100" style={{ borderLeft: `0.25rem solid ${color}` }}>

            <div className="card-body">
               <div className="d-flex gap-4 align-items-center">
                  <div className="">
                     {Icon && <Icon style={{ color: `${color}` }} />}
                  </div>
                  <div className=" mr-2">
                     <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        <h5>{title}</h5>
                     </div>
                     <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <span> {isLoading ? '...' : nmbre}</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="card-footer d-flex justify-content-end">
               <Link to={'#'} className='btnViewAll'>Voir tout <FaArrowRightLong /></Link>
            </div>
         </div>
      </div>
   );
}

export default CardStats;
