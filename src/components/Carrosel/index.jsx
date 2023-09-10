import React from 'react';
import './Carrosel.css';
import Carousel from 'react-bootstrap/Carousel';

function Carrosel() {
  return (
    <div className="main-container-carrosel">
      <Carousel className="carrosel">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.miati.com.br/da/blog/producao-grafica-gerenciamento/Producao-Grafica-Gerenciamento-imgprincipal.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carrosel;
