function Card({ card }) {
  return (
    <li className="gallery__card-item">
      <img className="gallery__image" src={card.urls.small} alt={card.alt_description} />
    </li>
  );
}
  
export default Card;