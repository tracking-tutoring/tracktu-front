import React from 'react'
import LayoutTuteurs from '../../Layouts/LayoutTuteurs/LayoutTuteurs';
import { isAuthenticateAdmin } from '../../Services/secureRoutes';
import { Navigate, Route } from 'react-router-dom';
import DashboardTutor from './DashboardTutor/DashboardTutor';
import { DASHBOARD_TUTEUR, PROFIL_TUTOR, TUTEUR, UPDATE_PASSWORD_TUTOR, UPDATE_PROFIL_TUTOR } from '../../Services/path';
import Profil from '../Setting/Profil/Profil';
import UpdateProfil from '../Setting/UpdateProfil/UpdateProfil';
import UpdatePassword from '../Setting/UpdatePassword/UpdatePassword';

export default function TuteurPlateform() {

   const ProtectedRoute = () => {
      const tokenIsNotValide = isAuthenticateAdmin("tutor");
      const userInfoString = window.sessionStorage.getItem('userInfos');
      const userInfo = userInfoString ? JSON.parse(userInfoString) : null;

      if (!tokenIsNotValide && userInfo && userInfo.role === "tutor") {
         return <LayoutTuteurs />;
      }

      return <Navigate to="/" replace={true} />;
   };

   return (
      <Route path={`${TUTEUR}`} element={<ProtectedRoute />}>
         <Route path={`${DASHBOARD_TUTEUR}`} element={<DashboardTutor />} />

         {/* ==========Setting========== */}
         <Route path={PROFIL_TUTOR} element={<Profil />} />
         <Route path={UPDATE_PROFIL_TUTOR} element={<UpdateProfil />} />
         <Route path={UPDATE_PASSWORD_TUTOR} element={<UpdatePassword />} />
      </Route>
   )
}

