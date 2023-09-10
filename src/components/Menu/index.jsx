import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { PiCaretDownBold } from 'react-icons/pi';

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriasOpen, setCategoriasOpen] = useState(false);
  const [contatoOpen, setContatoOpen] = useState(false);
  const [empresaOpen, setEmpresaOpen] = useState(false);
  const [ajudaOpen, setAjudaOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleState = (stateSetter) => {
    stateSetter((prevState) => !prevState);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`menu-container ${menuOpen ? 'open' : ''}`} ref={menuRef}>
      <button className="menu-button" onClick={() => toggleState(setMenuOpen)}>
        <img src="img/menu.svg" alt="Botão Menu" />
      </button>
      <div className="dropdown-menu">
        <ul>
          {[
            { state: categoriasOpen, toggle: setCategoriasOpen, text: 'Todas Categorias', links: ['Camisetas', 'Jalecos', 'Servicos Gráficos', 'Encadernações'] },
            { state: contatoOpen, toggle: setContatoOpen, text: 'Entre em Contato', links: ['Instagram', 'WhatsApp'] },
            { state: empresaOpen, toggle: setEmpresaOpen, text: 'Sobre a Empresa', links: ['Nossa história', 'Localização'] },
            { state: ajudaOpen, toggle: setAjudaOpen, text: 'Ajuda', links: ['Ajuda'] },
          ].map((item, index) => (
            <li key={index} className={`dropdown ${item.state ? 'open' : ''}`}>
              <div onClick={() => toggleState(item.toggle)}>
                {item.text} <PiCaretDownBold className={item.state ? 'rotate' : ''} />
              </div>
              <ul className={`submenu ${item.state ? 'open' : ''}`}>
                {item.links.map((link, subIndex) => (
                  <li key={subIndex}>
                    <Link to={`/${link}`}>{link}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
