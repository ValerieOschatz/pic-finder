import React from 'react';

// @ts-ignore
import Form from "./Form.tsx";
// @ts-ignore
import Card from "./Card.tsx";

import { MainProps } from '../utils/types';

const Main: React.FC<MainProps> = (props) => {
  const { cards, onSubmit, onCardClick, onRandomClick, query, onChangeQuery } = props;

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
            link={card.urls.small}
            alt={card.alt_description}
            onCardClick={onCardClick} />
        ))}
      </ul>
    </main>
  );
}
  
export default Main;
