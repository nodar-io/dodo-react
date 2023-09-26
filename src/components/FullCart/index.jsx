import styles from "./FullCart.module.scss";

import { useDispatch } from "react-redux";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../redux/slices/cartSlice.js";
const FullCart = ({ name, price, size, type, count, imageURL, id, weight }) => {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeItem({ id, size, type }));
  };
  const onCLickIncrease = () => {
    dispatch(addItem({ id, size, type }));
  };
  const onClickDecrease = () => {
    dispatch(minusItem({ id, size, type }));
  };
  return (
    count > 0 && (
      <article className={styles.article}>
        <button className={styles.btn}>
          <svg
            onClick={onClickRemove}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z"
              fill="#000"
            ></path>
          </svg>
        </button>
        <div className={styles.block__top}>
          <img src={imageURL} alt="pizza" />
          <div className={styles.info}>
            <h3>{name}</h3>
            <p>
              {size ? `${size} см,` : ""} {type ? `${type},` : ""}{" "}
              {weight
                ? typeof weight === "number"
                  ? `${weight} г`
                  : `${weight}`
                : ""}
            </p>
          </div>
        </div>
        <div className={styles.block__bottom}>
          <span>{price * count} ₽</span>
          <div className={styles.count}>
            <button onClick={onClickDecrease}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
              </svg>
            </button>
            <span>{count}</span>
            <button onClick={onCLickIncrease}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <g fill="#454B54">
                  <rect x="4" width="2" height="10" ry="1"></rect>
                  <rect y="4" width="10" height="2" rx="1"></rect>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </article>
    )
  );
};

export default FullCart;
