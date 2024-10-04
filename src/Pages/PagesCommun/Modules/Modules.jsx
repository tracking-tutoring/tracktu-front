import React, { useEffect, useState } from 'react';
import HeaderListes from '../../../Components/HeaderListes/HeaderListes';
import CardModule from '../../../Components/CardModule/CardModule';
import { ADD_MODULE_ADMIN } from '../../../Services/path';
import { ServicesResqueteAPI } from '../../../Services/resquet.api';

export default function Modules() {
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  // Fonction pour récupérer les modules
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await ServicesResqueteAPI.getModules();
      setModules(response.data.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  // Charger les modules au montage
  useEffect(() => {
    fetchData();
  }, []);

  // Relancer la récupération si un module est supprimé
  useEffect(() => {
    if (isDelete) {
      fetchData();
      setIsDelete(false);
    }
  }, [isDelete]);

  return (
    <div>
      <HeaderListes name={"Modules"} link={ADD_MODULE_ADMIN} />
      <div className="container-fluid">
        <div className="row g-3">
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            modules.map((module, index) => (
              <CardModule
                key={index}
                id={module.id}
                img={module.picture}
                nom={module.name}
                dure={module.weeks_duration}
                description={module.description}
                addBy={module.creator.firstname + " " + module.creator.lastname}
                date={module.created_at}
                setIsDelete={setIsDelete}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
