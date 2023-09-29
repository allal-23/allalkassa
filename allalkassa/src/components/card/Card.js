import React from "react";
import { Link } from "react-router-dom";

function Card({ image, title, id }) {
  return (
    <Link to={`/logement/${id}`}>
      <article className="card">
        <img src={image} alt={title} className="card_img" />
        <div className="card_overlay"></div>

        <h2 className="card_title">{title}</h2>
      </article>
    </Link>
  );
}

export default Card;
