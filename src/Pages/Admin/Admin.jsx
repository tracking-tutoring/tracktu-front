import React from 'react'
import { Route } from 'react-router-dom'
import { ADMIN, DASHBOARD_ADMIN } from '../../Services/path'
import LayoutAdmin from '../../Layouts/LayoutAdmin/LayoutAdmin'
import DashboardAdmin from './DashboardAdmin/DashboardAdmin'

export default function Admin() {
  return (
    <Route path={`${ADMIN}`} element={<LayoutAdmin/>}>
      <Route path={`${DASHBOARD_ADMIN}`} element={ <DashboardAdmin/> }/>
    </Route>
  )
}

