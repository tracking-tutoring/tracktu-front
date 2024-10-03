import React, { useEffect, useState } from 'react'
import CardStats from '../../../Components/CardStats'
import { FaChalkboardTeacher, } from 'react-icons/fa';
import { FaUsersRectangle } from 'react-icons/fa6';
import { GiBookmark } from 'react-icons/gi';
import { MdAdminPanelSettings } from 'react-icons/md';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';

export default function DashboardAdmin() {
  const [isLoading, setIsLoading] = useState(false);
  const [admins, setAdmins] = useState([])
  const [tuteurs, setTuteurs] = useState([])
  const [modules, setModules] = useState([])
  const [seances, setSeances] = useState([])

  const fetchData = async (id) => {

    setIsLoading(true);
    try {
      const [adminsResponse, tuteursResponse, modulesResponse, seancesResponse] = await Promise.all([
        ServicesResqueteAPI.getUsers("tracking"),
        ServicesResqueteAPI.getUsers("tutor"),
        ServicesResqueteAPI.getModules(),
        ServicesResqueteAPI.getSeances(),
      ]);

      setAdmins(adminsResponse.data.data.data);
      setTuteurs(tuteursResponse.data.data.data);
      setModules(modulesResponse.data.data.data);
      setSeances(seancesResponse.data.data.data);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
 }, []);


  const data = [
    { title: 'Admins', nmbr: admins?.length, icon: MdAdminPanelSettings, color: '#E81E1E' },
    { title: 'Tuteurs', nmbr: tuteurs?.length, icon: FaChalkboardTeacher, color: '#1cc88a' },
    { title: 'Séances', nmbr: seances?.length, icon: FaUsersRectangle, color: '#36b9cc ' },
    { title: 'Modules', nmbr: modules?.length, icon: GiBookmark, color: '#f6c23e' },
  ]

  return (
    <div className='dashboard'>
      <div className="row">
        {
          data.map((items, index) => {
            return <CardStats key={index}
              isLoading={isLoading}
              Icon={items.icon}
              color={items.color}
              title={items.title}
              nmbre={items.nmbr}
            />
          })
        }
      </div>
    </div>
  )
}
