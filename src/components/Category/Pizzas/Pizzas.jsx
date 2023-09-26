import React, { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchPizzas } from "../../../redux/slices/pizzaSlice.js";
import Section from "../../Section.jsx";
import { Skeleton } from "./Skeleton.jsx";
import { ParentContext } from "../../../pages/Home";

const Pizzas = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(state => state.pizza);

  const { active, setActive } = useContext(ParentContext);

  useEffect(() => {
    async function getPizza() {
      dispatch(fetchPizzas());
    }

    getPizza();
  }, [dispatch]);

  const skeletons = [...new Array(20)].map((_, index) => (
    <Skeleton key={index} />
  ));
  return (
    <section id="pizzas" className="section">
      <Section id="pizzas" setActive={setActive} active={active}>
        Пицца
      </Section>
      {status === "error" ? (
        <h2>Сервер не отвечает...</h2>
      ) : (
        <div className="contain">
          {status === "loading"
            ? skeletons
            : items.map(elem => (
                <Link key={elem.id} className="link" to={`/pizza/${elem.id}`}>
                  <article className="article">
                    <main className="main__product">
                      <img width={220} src={elem.imageURL[0]} alt={elem.name} />

                      <h3>{elem.name}</h3>
                      <p>{elem.ingredients.toString()}</p>
                    </main>
                    <footer className="footer__product">
                      <div className="footer__product-price">{`от ${elem.price[0]}₽`}</div>
                      <button>Выбрать</button>
                    </footer>
                  </article>
                </Link>
              ))}
        </div>
      )}
    </section>
  );
};

export default Pizzas;
