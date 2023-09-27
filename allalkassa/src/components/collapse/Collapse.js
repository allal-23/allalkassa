import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </p>
      </div>
      <div className="collapse__dropdown__content">
        {isOpen && <p>{content}</p>}
      </div>
    </div>
  );
};

export default Collapse;
