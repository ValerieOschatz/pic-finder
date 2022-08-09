import { Link } from 'react-router-dom';

function CardInfo({ selectedCard }) {
  return (
    <>
      <Link to="/">Go back</Link>
      <div>
        <img src={selectedCard.urls.regular} alt={selectedCard.alt_description} />
        <p>{selectedCard.alt_description}</p>
      </div>
    </>
  );
}
  
export default CardInfo;