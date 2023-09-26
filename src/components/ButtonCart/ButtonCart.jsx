import React from "react";

import styles from "./ButtonCart.module.scss";

const ButtonCart = ({ id, onClickAdd, count,  onClickMinus }) => {
  

  return count > 0 && (
    <div onClick={event => event.preventDefault()} className={styles.count}>
      <button
        onClick={event => {
          event.preventDefault();
          onClickMinus(id);
        }}
      >
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
      <button
        onClick={event => {
          event.preventDefault();
          onClickAdd(id);
        }}
      >
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
  ) 
};

export default ButtonCart;
