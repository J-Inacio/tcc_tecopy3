import 'bootstrap/dist/css/bootstrap.css';
import './reset.css'
import './global.css';
import Cabecalho from './components/Cabecalho';
import Menu from './Menu';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


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
