function Main() {
  return (
    <main className="gallery">
      <form className="gallery__form" name="search">
        <input
          className="gallery__input"
          id="name"
          name="name"
          type="text"
        />
        <button className="gallery__submit-button" type="submit">Search</button>
      </form>
      <button className="gallery__button" type="button">Show random pictures</button>
    </main>
  );
}
  
export default Main;