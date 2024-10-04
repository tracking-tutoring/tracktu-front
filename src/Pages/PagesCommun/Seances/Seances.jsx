import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { ADD_SEANCE_ADMIN } from "../../../Services/path";
import HeaderListes from "../../../Components/HeaderListes/HeaderListes";
import { ServicesResqueteAPI } from "../../../Services/resquet.api";
import { useForm } from "react-hook-form";
import { FaCircleCheck } from "react-icons/fa6";
import { ImCross } from "react-icons/im";

export default function Seances() {

   const [tuteurs, setTuteurs] = useState([]);
   const [tuteur, setTuteur] = useState();
   const [seances, setSeances] = useState([]);
   const [refresh, setSefresh] = useState(false)

   const [isLoading, setIsLoading] = useState(false);

   const userInfoString = JSON.parse(sessionStorage.getItem('userInfos'));

   // Transformer les données pour FullCalendar
   const transformData = (data) => {
      return data.map((session) => ({
         id: session.id, // Utilise l'ID de la séance
         title: session.module.name, // Utilise le nom du module comme titre
         start: session.start_time, // Utilise le start_time pour l'heure de début
         end: session.end_time, // Utilise le end_time pour l'heure de fin
         extendedProps: {
            status: session.status,
         },
         backgroundColor: session.status === 'non_effectuee' ? '#FF0038' : session.status === 'effectuee' ? '#5ACE5A' : '#808080'
      }));
   };


   useEffect(() => {
      const fetchData = async () => {
         setIsLoading(true);
         try {
            ServicesResqueteAPI.getUsers("tutor").then((response) => {
               setTuteurs(response.data.data.data);
               setIsLoading(false);
            });

            if (tuteur) {
               const recupSeances = await ServicesResqueteAPI.getSeancesOfTutors(tuteur)
               const { data } = recupSeances.data
               setSeances(transformData(data))

            }

         } catch (error) {
            setIsLoading(false);
            console.error("Error fetching data:", error);
         }

      };
      fetchData();
   }, [tuteur, refresh]);


   const updateSessionStatus = async (sessionId, status) => {

   const confirmation = status === 'effectuee' ? window.confirm("êtes-vous sur de vouloir marquer comme effectuée ?") : window.confirm("êtes-vous sur de vouloir marquer comme non effectuée ?");
    
    if (!confirmation) {
        return
    }

      try {
         await ServicesResqueteAPI.markSession(sessionId, {
            marked_by: userInfoString.id,
            status
         })
         setSefresh(!refresh)
      } catch (error) {
         console.log(error)
      }

   };

   const renderEventContent = (eventInfo) => {
      const { status } = eventInfo.event.extendedProps;

      return (
         <div>
            <b>{eventInfo.event.title}</b>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
               {
                  status === 'effectuee' ? (
                     <span><ImCross /></span>
                  ) : status === 'non_effectuee' ? (
                     <span><FaCircleCheck /></span>
                  ) : (
                     <>
                        <span className="cursor-pointer" onClick={() => updateSessionStatus(eventInfo.event.id, 'effectuee')}><FaCircleCheck /></span>
                        <span className="cursor-pointer" onClick={() => updateSessionStatus(eventInfo.event.id, 'non_effectuee')}><ImCross /></span>
                     </>
                  )
               }

            </div>
         </div>
      );
   };




   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({

   });

   const onSubmit = (data) => {
      setIsLoading(true);
      setTuteur(data.tutor_id)
   };

   return (
      <div>
         <HeaderListes name={"Séances"} link={ADD_SEANCE_ADMIN} />
         <div className="tutor-choice">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
               <div className="form-group">
                  <label className="form-label">Selectionner un Tuteur</label>
                  <select
                     className="form-control"
                     {...register("tutor_id", { required: true, pattern: /^[0-9]+$/ })}
                  >
                     <option>Selectionner un Tuteur</option>
                     {tuteurs?.map((tuteur) => (
                        <option key={tuteur.id} value={tuteur.id}>
                           {tuteur?.firstname} {tuteur?.lastname}
                        </option>
                     ))}
                  </select>
                  {errors.tutor_id && <p>This field is required</p>}
               </div>
               <div className='form-group'>
                  <input type="submit" value='Voir' className='btn btn-secondary' />
               </div>
            </form>
         </div>
         <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={seances}
            eventContent={renderEventContent}
         />
      </div>
   );
}