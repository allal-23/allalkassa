import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <div className="errorContainer">
            <p className="errorContainer__Number">404</p>
            <p className="errorContainer__Text">
              Oups! La page que vous demandez n'existe pas.
            </p>
            <NavLink to="/" className="errorContainer__Link">
              Retourner sur la page d'accueil
            </NavLink>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
