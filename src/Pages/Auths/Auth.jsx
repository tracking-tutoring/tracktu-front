import React from 'react';
import { Route } from 'react-router-dom';
import { FORGET_PASSWORD, LOGIN, RESET_PASSWORD } from '../../Services/path';
import Login from './Login/Login';
import ResetPassword from './Password/ResetPassword';
import ForgetPassword from './Password/ForgetPassword';

export default function Auth() {
   return (
      <>
         <Route path={LOGIN} element={<Login />} />
         <Route path={FORGET_PASSWORD} element={<ForgetPassword />} />
         <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      </>
   );
}
