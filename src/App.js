import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import useToggleTheme from './hooks/useToggleTheme'
import TopButton from './ui/button/TopButton'

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import BanksTable from './pages/BanksTable'
import BankPage from './pages/BankPage'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoute from './pages/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Verify from './pages/Verify'

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
        <Route path='/user/verify-email' exact>
          <Verify />
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App