import Header from "./Header";

function App() {
  return (
    <div className="page">
      <Header />
      <main className="gallery">
        <form className="gallery__form">
          <input className="gallery__input" />
          <button className="gallery__submit-button"></button>
        </form>
        <button className="gallery__button"></button>
      </main>
      <footer className="footer">
        <p className="footer__text"></p>
      </footer>
    </div>
  );
}

export default App;
