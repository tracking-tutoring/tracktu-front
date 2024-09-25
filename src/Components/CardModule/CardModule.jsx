import React from 'react'
import "./CardModule.css"
import { LuDot } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import avatar from "../../assets/avatar.png"
import programation from "../../assets/programation.jpg"
import LimiteText from '../LimiteText';
import { UPDATE_MODULE } from '../../Services/path';

export default function CardModule() {
   const text = "Praesent eget leo mauris Morbi ac vulputate nibh  Morbi ac vulputate t eget leo mauris Morbi ac vulputate nibh  Morbi ac vulputatet eget leo mauris Morbi ac vulputate nibh  Morbi ac vulputate nibhIn hac habitasse platea dictumst Praesent eget leo mauris Morbi ac vulputate nibh In hac habitasse platea dictumstPraesent eget leo mauris Morbi ac vulputate nibh In hac habitasse platea dictumstPraesent eget leo mauris Morbi ac vulputate nibh In hac habitasse platea dictumstPraesent eget leo mauris Morbi ac vulputate nibh In hac habitasse platea dictumst  Praesent eget leo mauris Morbi ac vulputate nibh In hac habitasse platea dictumst"

   return (
      <div className="col-lg-6">
         <div id='cardModules' className=''>
            <div className="coursHeader">
               <img src={programation} alt="" />
            </div>
            <div className="coursBody">
               <div className='coursMatieres'>
                  <span>
                     Programmation
                  </span>
               </div>
               {/* <Link to={UPDATE_MODULE} className='btnViewAll text-white bg-info'>Modifer</Link> */}
               <div className='coursTexte'>
                  <h3>
                     Language de Balisage HTML5 & CSS
                  </h3>
                  <LimiteText text={text} maxLength={200} />
               </div>
               <div className="coursFooter">
                  <div className='coursFooterLeft d-flex gap-3 align-items-center'>
                     <div className='coursFooterImg'>
                        <img src={avatar} alt="" />
                     </div>
                     <p>
                        By Aplha Oumar <LuDot /> 23/12/2023
                     </p>
                  </div>
                  <div className='d-flex'>
                     <Link to={'#'} className='btnViewAll'>Voir<FaArrowRightLong /></Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

