import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PizzaSort from "../components/Category/Pizzas/PizzaSort";
import { PizzaService } from "../services/pizzas.service.js";
import { motion, AnimatePresence } from "framer-motion";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { getSize } from "../utils/getSize";

const size = [25, 30, 35];

const PizzaOrder = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [activeSize, setActiveSize] = useState(1);
  const [activeType, setActiveType] = useState(0);

  const [pizza, setPizza] = useState();

  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPizza() {
      if (!id) return;
      const { data } = await PizzaService.getPizzaById(id);

      setPizza(data);
    }

    fetchPizza();
  }, [id]);

  const onClickAdd = () => {
    const item = {
      id,
      name: pizza.name,
      price: pizza.price[activeSize],
      imageURL: pizza.imageURL[activeType],
      type: pizza.types[activeType],
      size: pizza.sizes[activeSize] + " " + size[activeSize],
      weight: pizza.weight[activeSize],
    };
    dispatch(addItem(item));
    setShow(true);
    setTimeout(() => setShow(false), 800);
  };

  useEffect(() => {
    const cleanup = getSize();
    return cleanup;
  }, []);

  return pizza ? (
    <div
      className="overlay "
      onClick={() => {
        setOpen(false);
        setTimeout(() => {
          navigate("/");
        }, 200);
      }}
    >
      <AnimatePresence>
        <motion.div
          onClick={e => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{
            opacity: 0,
            scale: 0,
            transition: {
              delay: 0.5,
            },
          }}
          transition={{ duration: 0.2 }}
        >
          <div
            className={`modal disabled__cursor ${open ? "open" : "close"}`}
            onClick={event => event.preventDefault()}
          >
            <button
              className="button__close-pizza"
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  navigate("/");
                }, 200);
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z"
                  fill="#fff"
                ></path>
              </svg>
            </button>

            <div className="modal__content disabled__cursor">
              <div className="modal__picture ">
                <div className="modal__picture-image">
                  <img
                    className={
                      activeSize === 1
                        ? "medium"
                        : activeSize === 2
                        ? "large"
                        : "small"
                    }
                    src={pizza.imageURL[activeType]}
                    alt="pizza"
                  />
                </div>
                <picture>
                  <svg
                    className={
                      activeSize === 0 || activeSize === 1
                        ? "show_svg"
                        : "hide_svg"
                    }
                    width="450"
                    height="450"
                    viewBox="0 0 450 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      opacity="0.6"
                      cx="225"
                      cy="225"
                      rx="224"
                      ry="224"
                      stroke="#6F6E6F"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="2 12.2"
                    ></ellipse>
                  </svg>
                  <svg
                    className={activeSize === 0 ? "show_svg" : "hide_svg"}
                    width="382"
                    height="382"
                    viewBox="0 0 382 382"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="191"
                      cy="191"
                      r="190"
                      stroke="#6F6E6F"
                      strokeWidth="0.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="1 6.1"
                    ></circle>
                  </svg>
                </picture>
              </div>
              <div className="modal__info">
                <h3>{pizza.name}</h3>
                <p>{`${size[activeSize]} см, ${pizza.types[activeType]} тесто, ${pizza.weight[activeSize]} г`}</p>
                <p className="ingredients">{pizza.ingredients?.toString()}</p>
                <PizzaSort
                  setActiveSize={setActiveSize}
                  setActiveType={setActiveType}
                  activeSize={activeSize}
                  activeType={activeType}
                  sizes={pizza.sizes}
                  types={pizza.types}
                />
                <button disabled={show} onClick={onClickAdd}>
                  Добавить в корзину за {pizza.price[activeSize]} ₽
                </button>
                <div className={`modal__info-add ${show ? "show-info" : ""}`}>
                  <p>{pizza.name} добавлена в корзину...</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  ) : (
    <div>Произошла ошибка, попробуйте еще раз</div>
  );
};

export default PizzaOrder;
