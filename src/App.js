import 'bootstrap/dist/css/bootstrap.css';
import './reset.css'
import './global.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    
    <>
    <BrowserRouter>
      <Routes>

        <Route path='/' element= {<HomePage/>} />
        <Route path='/cadastro' element= {<Cadastro/>} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
