import React, { useState } from "react";
import flecheHaut from "../../assets/images/haut/fleche-haut.png";
import flecheBas from "../../assets/images/haut/fleche-bas.png";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse__dropdown__container">
      <div className="collapse__dropdown__title">
        <h2>{title}</h2>
        <p onClick={toggleCollapse}>
          <img
            src={isOpen ? flecheHaut : flecheBas}
            alt={isOpen ? "Fleche Haut" : "Fleche Bas"}
          />
        </p>
      </div>
      <div className="collapse__dropdown__content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
