import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import styles from "../Cart/Cart.module.scss";
import { useRef } from "react";

export const Cart = () => {
  const { totalCount, items } = useSelector(state => state.cart);
  const isMounted = useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <Link to="/cart" state={{ open: true }}>
      <button className={styles.btn}>
        Корзина
        {totalCount > 0 && (
          <>
            <div className={styles.line}></div>
            <div className={styles.number}>{totalCount}</div>
            <svg
              className={styles.arrow}
              width="13"
              height="11"
              viewBox="0 0 13 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.483h11m0 0L7.286 1M12 5.483L7.286 10"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </>
        )}
      </button>
    </Link>
  );
};
