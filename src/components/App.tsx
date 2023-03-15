import React from 'react';
import { useEffect, useState } from "react";

// @ts-ignore
import Header from "./Header.tsx";
// @ts-ignore
import Main from "./Main.tsx";
// @ts-ignore
import Footer from "./Footer.tsx";
// @ts-ignore
import CardInfo from "./CardInfo.tsx";
// @ts-ignore
import { getPictures, getRandomPicture } from "../utils/api.ts"

import { Card, CardsResponse } from '../utils/types';

const App: React.FC = () => {
  const [cards, setCards] = useState<Array<Card>>([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isfetching, setFetching] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  function handleScroll(e: any) {
    if (e.target.documentElement.scrollTop + e.target.documentElement.clientHeight >= e.target.documentElement.scrollHeight) {
      setFetching(true);
    }
  }

  useEffect(() => {
    if (isfetching && cards.length < totalPages) {
      getPictures({ page, query })
      .then((cardsData: CardsResponse) => {
        setPage(prevValue => prevValue + 1);
        setCards([...cards, ...cardsData.results]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFetching(false);
      })
    }
  }, [isfetching, cards, cards.length, totalPages, page, query]);

  useEffect(() => {
    setPage(1);
    setFetching(false);
  }, [query]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    getPictures({ page, query })
    .then((cardsData: CardsResponse) => {
      setCards([...cardsData.results]);
      setPage(prevValue => prevValue + 1);
      setTotalPages(cardsData.total_pages);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const handleChangeQuery: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  }

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  }

  const handleBack = () => {
    setSelectedCard(null);
  }

  const handleGetRandom = () => {
    getRandomPicture()
    .then((cardData: Card) => {
      setSelectedCard(cardData);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="page">
      <Header />
      <Main
        cards={cards}
        onCardClick={handleCardClick}
        onRandomClick={handleGetRandom}
        query={query}
        onChangeQuery={handleChangeQuery}
        onSubmit={handleSubmit} />
      <Footer />
      <CardInfo
        card={selectedCard}
        link={selectedCard?.urls.regular}
        alt={selectedCard?.alt_description}
        onBack={handleBack}
      />
    </div>
  );
}

export default App;
