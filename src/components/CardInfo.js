import { Link } from 'react-router-dom';

function CardInfo({ selectedCard }) {
  return (
    <div className="cardInfo">
      <Link to="/" className="cardInfo__link">Go back</Link>
      <figure className="cardInfo__figure">
        <img className="cardInfo__image" src={selectedCard.urls.regular} alt={selectedCard.alt_description} />
        <figcaption className="cardInfo__text">{selectedCard.alt_description}</figcaption>
      </figure>
    </div>
  );
}
  
export default CardInfo;