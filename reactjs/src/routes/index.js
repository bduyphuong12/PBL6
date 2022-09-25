import React from 'react'
import {
    Routes,
    Route,} from "react-router-dom";

import { HomeScreen} from '../modules';

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomeScreen/>} />
  </Routes>
  )
}

export default AppRoutes