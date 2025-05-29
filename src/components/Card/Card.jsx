import React from 'react';
import './Card.css';

function Card({ title, description, image }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleClick}>Дізнатися більше</button>
    </div>
  );
}

export default Card;
