import { useState } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import CardInfo from "./CardInfo";
import ProtectedRoute from "./ProtectedRoute";
import { getPictures, getRandomPicture } from "../utils/api"

function App() {
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

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header />
          <Main
            cards={cards}
            onSearch={handleSearch}
            onCardClick={handleCardClick}
            onRandomClick={handleGetRandom} />
          <Footer />
        </Route>
        <ProtectedRoute
          path="/card"
          selectedCard={selectedCard}
          component={CardInfo} />
      </Switch>
    </div>
  );
}

export default App;
