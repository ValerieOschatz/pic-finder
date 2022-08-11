import { useEffect, useState } from "react";
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CardInfo from "./CardInfo";
import ProtectedRoute from "./ProtectedRoute";
import { getPictures, getRandomPicture } from "../utils/api"

function App() {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const history = useHistory();

  function handleSearch(data) {
    getPictures(data)
    .then((cardsData) => {
      setCards(cardsData.results);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    if (cards.length > 1) {
      setPage(page);
      console.log(page);
      handleSearch({ page, query });
    }
  }, [cards.length, page ]);

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

  function handleSubmit(e){
    e.preventDefault();
    setPage(1);
    handleSearch({ page, query });
  }

  function handleNextPage() {
    setPage(page + 1);
  }

  function handlePreviousPage() {
    if (page > 1) {
      setPage(page - 1);
    }
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
            onSubmit={handleSubmit}
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
             />
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
