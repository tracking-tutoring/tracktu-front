import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { ADD_ADMIN, ADD_MODULE_ADMIN, ADD_SEANCE_ADMIN, ADD_TUTEUR, ADMIN, ADMINISTRATION, DASHBOARD_ADMIN, MODULE_ADMIN, PROFIL_ADMIN, SEANCE_ADMIN, SHOW_ADMIN, SHOW_MODULE_ADMIN, SHOW_SEANCE_ADMIN, SHOW_TUTEUR, TUTEURS, UPDATE_ADMIN, UPDATE_MODULE_ADMIN, UPDATE_PASSWORD_ADMIN, UPDATE_PROFIL_ADMIN, UPDATE_SEANCE_ADMIN, UPDATE_TUTEUR } from '../../Services/path'
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

export default function Admin() {

  const ProtectedRoute = () => {

    const tokenIsNotValide = isAuthenticateAdmin("tracking")


    if (tokenIsNotValide == false) {
      return <LayoutAdmin />;
    }
    return <Navigate to="/" replace={true} />
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
      <Route path={UPDATE_MODULE_ADMIN} element={<EditModule />} />
      <Route path={SHOW_MODULE_ADMIN} element={<ShowModule />} />

      {/* ==========Tuteurs=============== */}
      <Route path={TUTEURS} element={<Tuteurs />} />
      <Route path={ADD_TUTEUR} element={<AddTuteur />} />
      <Route path={UPDATE_TUTEUR} element={<EditTuteur />} />
      <Route path={SHOW_TUTEUR} element={<ShowTuteur />} />

      {/* ==========Administrations=============== */}
      <Route path={ADMINISTRATION} element={<Administrations />} />
      <Route path={ADD_ADMIN} element={<AddAdmin />} />
      <Route path={UPDATE_ADMIN} element={<EditAdmin />} />
      <Route path={SHOW_ADMIN} element={<ShowAdmin />} />

      {/* ==========Seances=============== */}
      <Route path={SEANCE_ADMIN} element={<Seances />} />
      <Route path={ADD_SEANCE_ADMIN} element={<AddSeance />} />
      <Route path={UPDATE_SEANCE_ADMIN} element={<EditSeance />} />
      <Route path={SHOW_SEANCE_ADMIN} element={<ShowSeance />} />

    </Route>
  )
}

