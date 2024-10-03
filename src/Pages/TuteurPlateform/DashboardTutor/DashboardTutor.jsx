import React, { useState } from 'react'
import CardStats from '../../../Components/CardStats'
import { FaChalkboardTeacher,  } from 'react-icons/fa';
import { FaUsersRectangle } from 'react-icons/fa6';
import { GiBookmark } from 'react-icons/gi';
import { MdAdminPanelSettings } from 'react-icons/md';

export default function DashboardTutor() {
  const [isLoading, setIsLoading] = useState(false);

  const data = [
    { title: 'Admins', nmbr: 12, icon: MdAdminPanelSettings, color: '#E81E1E' },
    { title: 'Tuteurs', nmbr: 10, icon: FaChalkboardTeacher, color: '#1cc88a' },
    { title: 'Séances', nmbr: 8, icon: FaUsersRectangle, color: '#36b9cc ' },
    { title: 'Modules', nmbr: 5, icon: GiBookmark, color: '#f6c23e' },
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
