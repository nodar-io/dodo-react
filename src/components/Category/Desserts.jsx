import React, { useContext } from "react";
import { Link } from "react-router-dom";

import dessert from "../../assets/data/desserts.json";
import { ParentContext } from "../../pages/Home";
import Section from "../Section";

const Desserts = () => {
  const { active, setActive } = useContext(ParentContext);

  return (
    <section id="desserts" className="section">
      <Section id="desserts" setActive={setActive} active={active}>
        Десерты
      </Section>
      <div className="contain">
        {dessert.map(elem => (
          <article key={elem.id} className="article">
            <Link to={"desserts/:id"}>
              <main className="main__product">
                <img width={220} src={elem.imageURL} alt={elem.name} />

                <h3>{elem.name}</h3>
                <p>{elem.ingredients}</p>
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

export default Desserts;
