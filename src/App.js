import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import TableBanks from './pages/TableBanks'
import NotFound from './pages/NotFound'
import BankPage from './pages/BankPage'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tablebanks' element={<TableBanks/>}/>
        <Route path="/bank/:mfo" element={<BankPage/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
