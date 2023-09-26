/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext} from "react";

import { HashLink as Link } from "react-router-hash-link";

import { ParentContext } from "../../../pages/Home";

import logo from "../../../assets/logo.png";

const sections = [
  { id: "pizzas", name: "Пицца", anchor: "pizza" },
  { id: "snacks", name: "Закуски", anchor: "snacks" },
  { id: "desserts", name: "Десерты", anchor: "desserts" },
  { id: "drinks", name: "Напитки", anchor: "drinks" },
  // { id: "others", name: "Другие товары", anchor: "others" },
];

const Category = ({ scroll }) => {
  const { active } = useContext(ParentContext);

 

  return (
    <div className="category">
      <ul className={`category__list ${scroll ? "show" : ""} `}>
        <Link to="#head" smooth>
          <img src={logo} alt="logo" width={36} />
        </Link>
        {sections.map((category, i) => (
          <Link key={category.id}to={`#${category.id}`} smooth>
            <li
              
              className={`anchor ${active === category.id ? "active" : ""}`}
            >
              {category.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;
