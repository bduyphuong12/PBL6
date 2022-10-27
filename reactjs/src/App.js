import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import AppRoutes from './routes';
import './App.css';
import NavBar from './Components/PageLayout/Header/navbar';
import AboutUs from './Components/PageLayout/Footer/about-us';
import Login from './Components/Popup/Form/login/Login_form';
import LoginIO from './Components/Popup/LoginIO/loginio';
import Register from './Components/Popup/Form/register/Register_form';
import HomePage from './modules/home/index';
function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <div className='App-footer '>
        <AboutUs />
      </div>
    </BrowserRouter>
  );
}

export default App;
