import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import useToggleTheme from './hooks/useToggleTheme'
import TopButton from './ui/button/TopButton'

import {
  About,
  BankPage,
  BanksTable,
  Home,
  Error,
  Register,
  Login,
  Verify,
  Dashboard,
  ProtectedRoute,
} from './pages';

const App = () => {
  const toggleTheme = useToggleTheme()
  
  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme}/>
      <TopButton/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route element={<ProtectedRoute />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/bank/:mfo' element={<BankPage />} />
        </Route>
        <Route path='/tables' element={<BanksTable />} />
        <Route path='/user/verify-email' element={<Verify/>}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App