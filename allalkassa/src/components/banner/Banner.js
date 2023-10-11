import React from "react";

function Banniere({ image, texte, isHomeActive, isAboutActive }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <div className="banner__sombre"></div>
      {texte && (
        <span className={`banner__txt ${isHomeActive ? "active" : ""}`}>
          {texte}
        </span>
      )}
      {texte && (
        <span className={`banner__txt ${isAboutActive ? "active" : ""}`}>
          {texte}
        </span>
      )}
    </div>
  );
}

export default Banniere;
