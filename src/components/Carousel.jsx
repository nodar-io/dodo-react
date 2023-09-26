import React from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import { getProductPath } from '../utils/getProductPath'; 

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1442 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1441, min: 1281 },
    items: 5,
  },
  medium: {
    breakpoint: { max: 1280, min: 1025 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 686 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 685, min: 0 },
    items: 2,
  },
};

const Carousel1 = ({ goods, title }) => {
  return (
    <section className="container slider">
      <h2 className="carousel__header">{title}</h2>

      <Carousel className="size__slider" responsive={responsive}>
        {goods.map((el) => (
          <Link
            key={el.name}
            to={getProductPath(el)}
            className="prevent"
          >
            <div className="carousel__content">
              <img width={80} src={el.imageURL} alt={el.name} />
              <div className="carousel__info">
                <h3>{el.name}</h3>
                <p>
                   {typeof el.price === "object" ? `от ${el.price[0]}` : el.price}₽
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </section>
  );
};

export default Carousel1;
