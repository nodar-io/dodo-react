import React, { useEffect, useState } from "react";
import { Cart } from "../Cart";
import Category from "./Category/Category";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  }, []);

  return (
    <div className={scroll ? "content__scroll" : ""}>
      <div className="content__nav">
        <Category scroll={scroll} />
        <Cart />
      </div>
    </div>
  );
};

export default Navigation;
