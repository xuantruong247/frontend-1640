import React from "react";
import Header from "./../Header/Header";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";

const Layou = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layou;
