import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SnackService } from "../services/snacks.service";

import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { getSize } from "../utils/getSize";
const SnackOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);

  const { id } = useParams();

  const [snack, setSnack] = useState();

  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchSnack() {
      if (!id) return;
      const { data } = await SnackService.getSnackById(id);

      setSnack(data);
    }

    fetchSnack();
  }, [id]);

  useEffect(() => {
    const cleanup = getSize();
    return cleanup;
  }, []);

  const onClickAdd = () => {
    const item = {
      id,
      name: snack.name,
      price: snack.price,
      imageURL: snack.imageURL,
      weight: snack.weight,
    };

    dispatch(addItem(item));
    setShow(true);
    setTimeout(() => setShow(false), 800);
  };

  return snack ? (
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
            className={`modal-item disabled__cursor ${open ? "open" : "close"}`}
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

            <div className="modal__content-item disabled__cursor">
              <div className="modal-item__picture ">
                <div className="modal-item__picture-image">
                  <img
                    width={290}
                    height={290}
                    src={snack.imageURL}
                    alt="snack"
                  />
                </div>
              </div>
              <div className="modal__info-snack">
                <h3>{snack.name}</h3>
                <p>{`${snack.weight} ${
                  typeof snack.weight === "number" ? "г" : ""
                }`}</p>
                <p className="ingredients">{snack.ingredients?.toString()}</p>

                <button disabled={show} onClick={onClickAdd}>
                  Добавить в корзину за {snack.price} ₽
                </button>
                <div className={`modal__info-add1 ${show ? "show-info" : ""}`}>
                  <p className="p-small">{snack.name} добавлен в корзину...</p>
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

export default SnackOrder;
