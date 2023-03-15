import React from 'react';
import { Link } from 'react-router-dom';
import { CardProps } from '../utils/types';

const CardInfo: React.FC<CardProps> = (props) => {
  const { card, link, alt, onBack } = props;

  return (
    <div className={`card-info ${card && 'cardInfo_opened'}`}>
      <div className='card-info__container'>
        <Link to="/" className="cardInfo__link" onClick={onBack}>Go back</Link>
        <figure className="cardInfo__figure">
          <img className="cardInfo__image" src={link} alt={alt} />
          <figcaption className="cardInfo__text">{alt}</figcaption>
        </figure>
      </div>
    </div>
  );
}
  
export default CardInfo;
