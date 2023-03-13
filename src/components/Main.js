import Form from "./Form.tsx";
import Card from "./Card";

function Main({ cards, onSubmit, onCardClick, onRandomClick, query, onChangeQuery }) {
  return (
    <main className="gallery">
      <Form
        onSubmit={onSubmit}
        query={query}
        onChangeQuery={onChangeQuery} />
      <button className="gallery__button" type="button" onClick={onRandomClick}>Show random picture</button>
      <ul className="gallery__card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}
  
export default Main;
