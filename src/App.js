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

const App = () => {
  const toggleTheme = useToggleTheme()
  
  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme}/>
      <TopButton/>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/' element={<Home />} />
        <Route path='/tables' element={<BanksTable />} />
        <Route path='/bank/:mfo' element={<BankPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App