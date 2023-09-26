const CartEmpty = () => (
  <div className="empty">
    <section className="empty__section">
      <img
        src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg"
        alt="empty"
      />
      <h2>Ой, пусто!</h2>
      <div className="empty__text">
        Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар.
      </div>
    </section>
  </div>
);

export default CartEmpty;
