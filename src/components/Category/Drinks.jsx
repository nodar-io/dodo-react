import React, { useContext } from "react";
import { Link } from "react-router-dom";

import drink from "../../assets/data/drinks.json";
import { ParentContext } from '../../pages/Home'
import Section from '../Section'

const Drinks = () => {
  const { active, setActive } = useContext(ParentContext);
  return (
    <section id="drinks" className="section">
      <Section id="drinks"  setActive={setActive} active={active}>Напитки</Section>
      <div className="contain">
        {drink.map(elem => (
          <article key={elem.id}className="article">
              <Link  to={"drinks/:id"}>
              <main className="main__product">
                <img width={220} src={elem.imageURL} alt={elem.name} />

                <h3>{elem.name}</h3>
                <p>{elem.description}</p>
              </main>
              <footer className="footer__product">
                <div className="footer__product-price">{`${elem.price}₽`}</div>
                <button>В корзину</button>
              </footer>
          </Link>
            </article>
        ))}
      </div>
    </section>
  );
};

export default Drinks;
