import React from "react";
import Desserts from "../Category/Desserts";
import Drinks from "../Category/Drinks";

import Pizzas from "../Category/Pizzas/Pizzas";
import Snacks from '../Category/Snacks'

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main}>
      <Pizzas  />
      <Snacks/>
      <Desserts  />
      <Drinks  />
    </main>
  );
};

export default Main;
