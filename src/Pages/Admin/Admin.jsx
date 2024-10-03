import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { ADD_ADMIN, ADD_AFFECTATIONS, ADD_ETUDIANTS, ADD_GROUPES, ADD_MODULE_ADMIN, ADD_SEANCE_ADMIN, ADD_TUTEUR, ADMIN, ADMINISTRATION, AFFECTATIONS, DASHBOARD_ADMIN, ETUDIANTS, GROUPES, MODULE_ADMIN, PROFIL_ADMIN, SEANCE_ADMIN, SHOW_ADMIN, SHOW_ETUDIANTS, SHOW_MODULE_ADMIN, SHOW_SEANCE_ADMIN, SHOW_TUTEUR, TUTEURS, UPDATE_ADMIN, UPDATE_AFFECTATIONS, UPDATE_ETUDIANTS, UPDATE_GROUPES, UPDATE_MODULE_ADMIN, UPDATE_PASSWORD_ADMIN, UPDATE_PROFIL_ADMIN, UPDATE_SEANCE_ADMIN, UPDATE_TUTEUR } from '../../Services/path'
import DashboardAdmin from './DashboardAdmin/DashboardAdmin'
import { isAuthenticateAdmin } from '../../Services/secureRoutes'
import LayoutAdmin from '../../Layouts/LayoutAdmin/LayoutAdmin'
import Profil from '../Setting/Profil/Profil'
import UpdateProfil from '../Setting/UpdateProfil/UpdateProfil'
import UpdatePassword from '../Setting/UpdatePassword/UpdatePassword'
import Modules from '../PagesCommun/Modules/Modules'
import AddModule from '../PagesCommun/Modules/AddModule'
import EditModule from '../PagesCommun/Modules/EditModule'
import ShowModule from '../PagesCommun/Modules/ShowModule'
import Tuteurs from './Tuteurs/Tuteurs'
import AddTuteur from './Tuteurs/AddTuteur'
import EditTuteur from './Tuteurs/EditTuteur'
import ShowTuteur from './Tuteurs/ShowTuteur'
import Administrations from './Administrations/Administrations'
import AddAdmin from './Administrations/AddAdmin'
import EditAdmin from './Administrations/EditAdmin'
import ShowAdmin from './Administrations/ShowAdmin'
import Seances from '../PagesCommun/Seances/Seances'
import AddSeance from '../PagesCommun/Seances/AddSeance'
import EditSeance from '../PagesCommun/Seances/EditSeance'
import ShowSeance from '../PagesCommun/Seances/ShowSeance'
import Etudiants from './Etudiants/Etudiants'
import AddEtudiants from './Etudiants/AddEtudiants'
import ShowEtudiants from './Etudiants/ShowEtudiants'
import EditEtudiants from './Etudiants/EditEtudiants'
import Groupes from './Groupes/Groupes'
import AddGroupe from './Groupes/AddGroupe'
import EditGroupe from './Groupes/EditGroupe'
import Affectations from './Affectations/Affectations'
import AddAffectations from './Affectations/AddAffectations'
import EditAffectations from './Affectations/EditAffectations'

export default function Admin() {

  const ProtectedRoute = () => {
    const tokenIsNotValide = isAuthenticateAdmin("tracking");
    const userInfoString = window.sessionStorage.getItem('userInfos');
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

    if (!tokenIsNotValide && userInfo && userInfo.role === "tracking") {
      return <LayoutAdmin />;
    }

    return <Navigate to="/" replace={true} />;
  };

  return (
    <Route path={`${ADMIN}`} element={<ProtectedRoute />}>
      <Route path={`${DASHBOARD_ADMIN}`} element={<DashboardAdmin />} />

      {/* ==========Setting========== */}
      <Route path={PROFIL_ADMIN} element={<Profil />} />
      <Route path={UPDATE_PROFIL_ADMIN} element={<UpdateProfil />} />
      <Route path={UPDATE_PASSWORD_ADMIN} element={<UpdatePassword />} />

      {/* ==========Modules=============== */}
      <Route path={MODULE_ADMIN} element={<Modules />} />
      <Route path={ADD_MODULE_ADMIN} element={<AddModule />} />
      <Route path={`${UPDATE_MODULE_ADMIN}/:id`} element={<EditModule />} />
      <Route path={`${SHOW_MODULE_ADMIN}/:id`} element={<ShowModule />} />

      {/* ==========Tuteurs=============== */}
      <Route path={TUTEURS} element={<Tuteurs />} />
      <Route path={ADD_TUTEUR} element={<AddTuteur />} />
      <Route path={`${UPDATE_TUTEUR}/:id`} element={<EditTuteur />} />
      <Route path={`${SHOW_TUTEUR}/:id`} element={<ShowTuteur />} />

      {/* ==========Administrations=============== */}
      <Route path={ADMINISTRATION} element={<Administrations />} />
      <Route path={ADD_ADMIN} element={<AddAdmin />} />
      <Route path={`${UPDATE_ADMIN}/:id`} element={<EditAdmin />} />
      <Route path={`${SHOW_ADMIN}/:id`} element={<ShowAdmin />} />

      {/* ==========Seances=============== */}
      <Route path={SEANCE_ADMIN} element={<Seances />} />
      <Route path={ADD_SEANCE_ADMIN} element={<AddSeance />} />
      <Route path={`${UPDATE_SEANCE_ADMIN}/:id`} element={<EditSeance />} />
      <Route path={`${SHOW_SEANCE_ADMIN}/:id`} element={<ShowSeance />} />

      {/* =====ETUDIANTS======= */}
      <Route path={ETUDIANTS} element={<Etudiants />} />
      <Route path={ADD_ETUDIANTS} element={<AddEtudiants />} />
      <Route path={SHOW_ETUDIANTS} element={<ShowEtudiants />} />
      <Route path={`${UPDATE_ETUDIANTS}/:id`} element={<EditEtudiants />} />

      {/* =====GROUPES======= */}
      <Route path={GROUPES} element={<Groupes />} />
      <Route path={ADD_GROUPES} element={<AddGroupe />} />
      <Route path={`${UPDATE_GROUPES}/:id`} element={<EditGroupe />} />

      {/* =====AFFECTATIONS======= */}
      <Route path={AFFECTATIONS} element={<Affectations />} />
      <Route path={ADD_AFFECTATIONS} element={<AddAffectations />} />
      <Route path={`${UPDATE_AFFECTATIONS}/:id`} element={<EditAffectations />} />


    </Route>
  )
}

