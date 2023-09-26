import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatePage from "../components/AnimatePage";
import FullCart from "../components/FullCart";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import CartEmpty from "../components/CartEmpty";
import { useRef } from "react";

import { getSize } from "../utils/getSize";
import { getElemWithScroll } from "../utils/getElemWithScroll";
const CartOrder = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    const cleanup = getSize();
    return cleanup;
  }, []);

  useEffect(() => {
    getElemWithScroll(ref, ref1, scroll);
  }, []);


  const { totalPrice, totalCount, items } = useSelector(state => state.cart);
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <div
      className="overlay"
      onClick={() => {
        setOpen(false);
        setTimeout(() => {
          navigate("/");
        }, 250);
      }}
    >
      <AnimatePresence>
        <AnimatePage>
          <div
            className={`modalcart disabled__cursor ${open ? "show" : "hide"}`}
            onClick={event => {
              event.stopPropagation();
              event.preventDefault();
            }}
          >
            <button
              onClick={() => {
                setOpen(false);
                setTimeout(() => {
                  navigate("/");
                }, 250);
              }}
              className="button__close-cart"
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

            {totalCount > 0 ? (
              <div ref={scroll} className="modalcart__content">
                <div>
                  <p>
                    Всего: <b>{totalCount}</b> шт на <b>{totalPrice}</b> ₽
                  </p>
                  {items.map(item => (
                    <FullCart {...item} key={item.id + item.size + item.type} />
                  ))}
                </div>

                <div ref={ref} className="modalcart__footer">
                  <div ref={ref1} className="footer-fixed">
                    <span>{totalPrice} ₽</span>
                    <button className="footer-fixed__button">
                      К оформлению
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button-arrow"
                      >
                        <path
                          d="M10 18l6-6-6-6"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <div className="modalcart__footer-info">
                    Сумма заказа <span>{totalPrice} ₽</span>
                  </div>
                  <button className="button__footer-cart">
                    К оформлению заказа
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button-arrow"
                    >
                      <path
                        d="M10 18l6-6-6-6"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              <CartEmpty />
            )}
          </div>
        </AnimatePage>
      </AnimatePresence>
    </div>
  );
};

export default CartOrder;
