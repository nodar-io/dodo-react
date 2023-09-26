import React, { useContext, useEffect, useState } from "react";
import { SnackService } from "../../services/snacks.service";
import { useDispatch } from "react-redux";
import { addItem, minusItem } from "../../redux/slices/cartSlice.js";

import { ParentContext } from "../../pages/Home";

import FullSnack from "./Snacks/FullSnack";
import Section from "../Section";

const Snacks = () => {
  const { active, setActive } = useContext(ParentContext);

  const [snacks, setSnacks] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPizza() {
      const data = await SnackService.getAllSnacks();

      setSnacks(data);
    }

    fetchPizza();
  }, []);

  const onClickAdd = async id => {
    const { data } = await SnackService.getSnackById(id);

    const item = {
      id: data.id,
      name: data.name,
      price: data.price,
      imageURL: data.imageURL,
      weight: data.weight,
    };

    dispatch(addItem(item));
    const div1 = document.createElement("div");
    div1.className = "product__info-add";
    const div = document.querySelector(".product__info-main");

    const stil = document.createElement("div");
    const stil1 = document.createElement("div");
    stil.className = "stil";
    stil1.className = "stil1";
    const p = document.createElement("p");
    const snacks = document.getElementById("snacks");

    snacks.append(div);
    div.append(div1);
    div1.append(stil);
    stil.append(p);
    p.append(`Добавлено:`);
    div1.append(stil1);
    const p1 = document.createElement("p");
    stil1.append(p1);
    p1.append(`${data.name}`);

    setTimeout(() => {
      div1.remove();
    }, 2000);
  };
  const onClickMinus = async id => {
    const { data } = await SnackService.getSnackById(id);

    const item = {
      id: data.id,
      name: data.name,
      price: data.price,
      imageURL: data.imageURL,
      weight: data.weight,
    };

    dispatch(minusItem(item));
    const div1 = document.createElement("div");
    div1.className = "product__info-add";
    const div = document.querySelector(".product__info-main");

    const stil = document.createElement("div");
    const stil1 = document.createElement("div");
    stil.className = "stil";
    stil1.className = "stil1";
    const p = document.createElement("p");
    const snacks = document.getElementById("snacks");

    snacks.append(div);
    div.append(div1);
    div1.append(stil);
    stil.append(p);
    p.append(`Удалено:`);
    div1.append(stil1);
    const p1 = document.createElement("p");
    stil1.append(p1);
    p1.append(`${data.name}`);

    setTimeout(() => {
      div1.remove();
    }, 2000);
  };

  return (
    <section id="snacks" className="section">
      <Section id="snacks" setActive={setActive} active={active}>
      Закуски
      </Section>
      <div className="contain">
        {snacks.map(elem => (
          <FullSnack
            key={elem.index}
            onClickAdd={onClickAdd}
            onClickMinus={onClickMinus}
            {...elem}
          />
        ))}
      </div>
      <div className="product__info-main">
        {/* <div className={`product__info-add ${show ? "show-info1" : ""}`}>
          <div className="stil"></div>
          <div className="stil1"></div>
        </div> */}
      </div>
    </section>
  );
};

export default Snacks;
