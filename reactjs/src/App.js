import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/PageLayout/Header/navbar.jsx';
import Login from './components/Popup/Form/login/Login_form';
import Register from './components/Popup/Form/register/Register_form';
import HomePage from './modules/home';
import About from './modules/about/about.jsx';
import Detail from './modules/detail/detail.jsx';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:kanji' element={<Detail />} />
      </Routes>
      {/* <div className='App-footer '>
        <AboutUs />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
