import React, { useState } from 'react';
import './Menu.css';
import { PiCaretDownBold } from 'react-icons/pi';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriasOpen, setCategoriasOpen] = useState(false);
  const [contatoOpen, setContatoOpen] = useState(false);
  const [empresaOpen, setEmpresaOpen] = useState(false);
  const [ajudaOpen, setAjudaOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCategorias = () => {
    setCategoriasOpen(!categoriasOpen);
  };

  const toggleContato = () => {
    setContatoOpen(!contatoOpen);
  };

  const toggleEmpresa = () => {
    setEmpresaOpen(!empresaOpen);
  };

  const toggleAjuda = () => {
    setAjudaOpen(!ajudaOpen);
  };

  return (
    <div className={`menu-container ${menuOpen ? 'open' : ''}`}>
      <button className="menu-button" onClick={toggleMenu}>
        <img src="img/menu.svg" alt="Botão Menu" />
      </button>
      <div className="dropdown-menu">
        <ul>
          <li className={`dropdown ${categoriasOpen ? 'open' : ''}`}>
            <div onClick={toggleCategorias}>
              Todas Categorias <PiCaretDownBold className={categoriasOpen ? 'rotate' : ''} />
            </div>
            <ul className={`submenu ${categoriasOpen ? 'open' : ''}`}>
              <li><a href="#">Camisetas</a></li>
              <li><a href="#">Jalecos</a></li>
              <li><a href="#">Serviços Gráficos</a></li>
              <li><a href="#">Encadernações</a></li>
            </ul>
          </li>

          <li className={`dropdown ${contatoOpen ? 'open' : ''}`}>
            <div onClick={toggleContato}>
              Entre em Contato <PiCaretDownBold className={contatoOpen ? 'rotate' : ''} />
            </div>
            <ul className={`submenu ${contatoOpen ? 'open' : ''}`}>
              <li><a href="#">Intagram</a></li>
              <li><a href="#">WhatsApp</a></li>
            </ul>
          </li>

          <li className={`dropdown ${empresaOpen ? 'open' : ''}`}>
            <div onClick={toggleEmpresa}>
              Sobre a Empresa <PiCaretDownBold className={empresaOpen ? 'rotate' : ''} />
            </div>
            <ul className={`submenu ${empresaOpen ? 'open' : ''}`}>
              <li><a href="#">Nossa história</a></li>
              <li><a href="#">Localização</a></li>
            </ul>
          </li>

          <li className={`dropdown ${ajudaOpen ? 'open' : ''}`}>
            <div onClick={toggleAjuda}>
              Ajuda <PiCaretDownBold className={ajudaOpen ? 'rotate' : ''} />
            </div>
            <ul className={`submenu ${ajudaOpen ? 'open' : ''}`}>
              <li><a href="#">Ajuda</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
