import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { getPictures, getRandomPicture } from "../utils/api"

function App() {
  const [cards, setCards] = useState([]);
  const [isLoading, setLoading] = useState(false);

  function handleSearch(data) {
    setLoading(true);
    getPictures(data)
    .then((cardsData) => {
      setCards(cardsData.results);
      console.log(cardsData);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className="page">
      <Header />
      <Main
        cards={cards}
        onSearch={handleSearch} />
      <Footer />
    </div>
  );
}

export default App;
