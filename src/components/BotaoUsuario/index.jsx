import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './BotaoUsuario.css';

function BotaoUsuario() {
    const [barraLateralAberta, setBarraLateralAberta] = useState(false);
    const barraLateralRef = useRef(null);

    const toggleBarraLateral = () => {
        setBarraLateralAberta(!barraLateralAberta);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (barraLateralRef.current && !barraLateralRef.current.contains(event.target)) {
                setBarraLateralAberta(false);
            }
        }

        if (barraLateralAberta) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [barraLateralAberta]);

    return (
        <div className='div-botao-usuario'>
            <button onClick={toggleBarraLateral}>
                <img src="/img/user-icon2.svg" alt="Ícone de usuário" />
            </button>

            <div
                ref={barraLateralRef}
                className={`barra-lateral ${barraLateralAberta ? 'aberta' : ''}`}
            >
                <div className="cabecalho-barra-lateral">
                    <img src="/img/user-icon2.svg" alt="Ícone de usuário" />
                    <p>Bem vindo, Usuário</p>
                </div>

                <Link to="/login" className="div-cadastrar">
                    Login
                </Link>
                
                <Link to="/cadastro" className="div-cadastrar">
                    Cadastrar
                </Link>
            </div>
        </div>
    );
}

export default BotaoUsuario;
