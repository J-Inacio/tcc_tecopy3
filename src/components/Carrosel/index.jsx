import React from 'react';
import './Carrosel.css';
import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <div className="main-container-carrosel">
      <Carousel className="carrosel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrosel;
