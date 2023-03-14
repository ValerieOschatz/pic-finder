import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../utils/types';

const Card: React.FC<CardProps> = (props) => {
  const { card, link, alt, onCardClick } = props;

  const handleClick = () => {
    onCardClick(card);
  }

  return (
    <li className="gallery__card-item">
      <Link to="/card">
        <img className="gallery__image" src={link} alt={alt} onClick={handleClick} />
      </Link>
    </li>
  );
}
  
export default Card;
