import { useState } from "react";

function Form({ onSearch }) {
  const [query, setQuery] = useState('');

  function handleChangeQuery(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    onSearch(query);
  }

  return (
    <form className="gallery__form" name="search" onSubmit={handleSubmit}>
      <input
        className="gallery__input"
        id="name"
        name="name"
        type="text"
        value={query || ''}
        onChange={handleChangeQuery}
      />
      <button className="gallery__submit-button" type="submit">Search</button>
    </form>
  );
}
  
export default Form;