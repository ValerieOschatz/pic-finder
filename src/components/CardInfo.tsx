import React from 'react';
import { Link } from 'react-router-dom';
import { CardInfoProps } from '../utils/types';

const CardInfo: React.FC<CardInfoProps> = (props) => {
  const { link, alt, onBack } = props;

  return (
    <div className="cardInfo">
      <Link to="/" className="cardInfo__link" onClick={onBack}>Go back</Link>
      <figure className="cardInfo__figure">
        <img className="cardInfo__image" src={link} alt={alt} />
        <figcaption className="cardInfo__text">{alt}</figcaption>
      </figure>
    </div>
  );
}
  
export default CardInfo;
