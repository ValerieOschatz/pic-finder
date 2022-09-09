import { useEffect, useState } from "react";
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CardInfo from "./CardInfo";
import ProtectedRoute from "./ProtectedRoute";
import { getPictures, getRandomPicture } from "../utils/api"

function App() {
  const [cards, setCards] = useState([]);
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isfetching, setFetching] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const history = useHistory();

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, []);

  function handleScroll(e) {
    if (e.target.documentElement.scrollTop + e.target.documentElement.clientHeight >= e.target.documentElement.scrollHeight) {
      setFetching(true);
    }
  }

  useEffect(() => {
    if (isfetching && cards.length < totalPages) {
      getPictures({ page, query })
      .then((cardsData) => {
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
    setCards([]);
    setPage(1);
    setFetching(false);
  }, [query]);

  function handleSubmit(e){
    e.preventDefault();

    getPictures({ page, query })
    .then((cardsData) => {
      setCards([...cardsData.results]);
      setPage(prevValue => prevValue + 1);
      setTotalPages(cardsData.total_pages);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleBack() {
    setSelectedCard(null);
  }

  function handleGetRandom() {
    getRandomPicture()
    .then((cardData) => {
      setSelectedCard(cardData);
      history.push('/card');
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main
            cards={cards}
            onCardClick={handleCardClick}
            onRandomClick={handleGetRandom}
            query={query}
            onChangeQuery={handleChangeQuery}
            onSubmit={handleSubmit} />
          <Footer />
        </Route>

        <ProtectedRoute
          path="/card"
          selectedCard={selectedCard}
          component={CardInfo}
          onBack={handleBack} />

        <Route>
          {!selectedCard && <Redirect to="/" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
