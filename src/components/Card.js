import { Link } from 'react-router-dom';

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="gallery__card-item">
      <Link to="/card">
        <img className="gallery__image" src={card.urls.small} alt={card.alt_description} onClick={handleClick} />
      </Link>
    </li>
  );
}
  
export default Card;