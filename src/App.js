import './App.css';
import Navigation from './Components/Nav/Navigation';
import Sidebar from './Components/Side/Sidebar';
import Footer from './Components/Footer/Footer';
import Dashboard from './Pages/Dash/Dashboard';
import { useState } from 'react';
import Cashin from './Pages/Cashin/Cashin';
import PatiCash from './Pages/Pati/PatiCash';
import Transfer from './Pages/Transfer/Transfer';
import Reports from './Pages/Report/Reports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/Errors/ErrorPage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Setting from './Pages/Setting/Setting';
import Profile from './Pages/Profile/Profile';

function App() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768); // Sidebar open by default on desktop screens

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
      console.log('Mobile screen');
    } else {
      setIsOpen(true);
      console.log('Computer screen');
    }
  });

  return (
    <BrowserRouter>
      <div className="App">
        <button onClick={toggleSidebar} className={`canv-btn ${!isOpen ? 'open' : 'closed'}`}>
          {isOpen ? 'X' : '☰'}
        </button>
        <div className={`side ${!isOpen ? 'open' : 'closed'}`}>
          <Sidebar />
        </div>
        <div className={`main ${!isOpen ? 'open' : 'closed'}`}>
          <div className='top'>
            <Navigation />
          </div>
          <div className='pages'>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/setting' element={<Setting />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/' element={<Dashboard />} />
              <Route path='/cashin' element={<Cashin />} />
              <Route path='/pati' element={<PatiCash />} />
              <Route path='/transfer' element={<Transfer />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </div>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
