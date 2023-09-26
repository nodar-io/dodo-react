import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonCart from "../../ButtonCart/ButtonCart";

const FullSnack = ({
  id,
  name,
  price,
  imageURL,
  ingredients,
  onClickAdd,
  onClickMinus,
}) => {
  const { items } = useSelector(state => state.cart);

  const [hasItem, setHasItem] = useState(false);

  useEffect(() => {
    setHasItem(items.some(item => item.id === id));
  }, [items, id]);
  return (
    <Link className="link" key={id} to={`snack/${id}`}>
      <article className="article">
        <main className="main__product">
          <img width={220} src={imageURL} alt={name} />

          <h3>{name}</h3>
          <p>{ingredients}</p>
        </main>
        <footer className="footer__product">
          <div className="footer__product-price">{`${price}₽`}</div>

          {hasItem ? (
            items
              .filter(item => item.id === id)
              .map(el => (
                <ButtonCart
                  key={el.id}
                  onClickAdd={onClickAdd}
                  onClickMinus={onClickMinus}
                  {...el}
                />
              ))
          ) : (
            <button
              className={`button-add`}
              onClick={event => {
                event.preventDefault();
                onClickAdd(id);
              }}
            >
              В корзину
            </button>
          )}
        </footer>
      </article>
    </Link>
  );
};

export default memo(FullSnack);
