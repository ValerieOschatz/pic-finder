import Form from "./Form";
import Card from "./Card";
import Pagination from "./Pagination";

function Main({ cards, onSubmit, onCardClick, onRandomClick, query, onChangeQuery, onNextPage, onPreviousPage }) {
  return (
    <main className="gallery">
      <Form
        onSubmit={onSubmit}
        query={query}
        onChangeQuery={onChangeQuery} />
      <ul className="gallery__card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            onCardClick={onCardClick} />
        ))}
      </ul>
      {cards.length > 0 &&
      <Pagination
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage} />}
      <button className="gallery__button" type="button" onClick={onRandomClick}>Show random picture</button>
    </main>
  );
}
  
export default Main;