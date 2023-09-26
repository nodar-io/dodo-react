import React, { useState } from "react";

import oftenOrder from '../assets/data/oftenOrder.json'
import news from '../assets/data/news.json'

import { Outlet } from "react-router-dom";
import Carousel1 from "../components/Carousel";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main/Main";
import Navigation from "../components/Navigation/Navigation";

export const ParentContext = React.createContext();
const Home = () => {
  const [active, setActive] = useState(null);

  return (
    <ParentContext.Provider value={{ active, setActive }}>
      <div className="wrapper">
        <Header />

        <div className="navigation">
          <Navigation />
        </div>

        <Carousel1 title='Часто заказывают' goods={oftenOrder}/>
        <Carousel1 title='Новинки' goods={news}/>
        <Main />

        <Outlet />

        <Footer />
      </div>
    </ParentContext.Provider>
  );
};

export default Home;
