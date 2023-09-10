import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarrosselCircular.css';

const categories = [
  {
    id: 1,
    name: 'Vestimentas',
    image: 'https://via.placeholder.com/150',
    link: '/vestimentas',
  },
  {
    id: 2,
    name: 'Encadernações',
    image: 'https://via.placeholder.com/150',
    link: '/encadernacoes',
  },
  {
    id: 3,
    name: 'Brindes',
    image: 'https://via.placeholder.com/150',
    link: '/brindes',
  },
  {
    id: 4,
    name: 'Banners',
    image: 'https://via.placeholder.com/150',
    link: '/banners',
  },
  {
    id: 5,
    name: 'Outros Serviços',
    image: 'https://via.placeholder.com/150',
    link: '/servicos',
  },
  // Adicione mais categorias conforme necessário
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  focusOnSelect: true,
  centerPadding: '0',
  autoplay: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function CarrosselCircular() {
  return (
    <div className="carrossel-container">
      {/* Mostrar o título apenas em dispositivos desktop */}
      <h2 className="categorias-title desktop-only">
        <span>Categorias,</span>
      </h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="carousel-item">
            <div className="carousel-content">
              <a href={category.link}>
                <img src={category.image} alt={category.name} className="carousel-image" />
                <p className="carousel-text">{category.name}</p>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarrosselCircular;
