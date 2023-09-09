import 'bootstrap/dist/css/bootstrap.css';
import './reset.css'
import './global.css';
import './style.css'
import Menu from './components/Menu';
import Cabecalho from './components/Cabecalho';
import CardProduto from './components/CardProduto';
import SideBarTeste from './components/SideBarTeste';
import Header from './components/Header'
import { useState } from 'react';


function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };
  return (
    
    <>
    <Menu/>
    <Cabecalho/>
    <SideBarTeste isOpen={sidebarOpen} toggleSidebar={handleViewSidebar}/>
    {/* <Header onClick={handleViewSidebar} /> */}
    {/* <CardProduto/> */}
    {/* <Carrosel/> */}
    </>
  );
}

export default App;
