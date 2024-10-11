import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavAuth from './Components/NavAuth';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Profil from './Components/Profil';
import { PrivateRoot } from './Components/PrivateRoot';
import Errors from './Components/Errors';

function App() {
  return (
    <div>
      <NavAuth/>
      {/* <Errors/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Profil' element={<PrivateRoot><Profil/></PrivateRoot> } />
      </Routes>
    </div>
  );
}

export default App;
