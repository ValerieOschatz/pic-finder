import Form from "./Form";
import Card from "./Card";

function Main({ cards, onSearch, onCardClick, onRandomClick }) {
  return (
    <main className="gallery">
      <Form onSearch={onSearch} />
      <ul className="gallery__card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={onCardClick} />
        ))}
      </ul>
      <button className="gallery__button" type="button" onClick={onRandomClick}>Show random picture</button>
    </main>
  );
}
  
export default Main;