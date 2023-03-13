import React from 'react';

type FormProps = {
  query: string,
  onSubmit: () => void,
  onChangeQuery: () => void,
}

const Form: React.FC<FormProps> = ({ onSubmit, query, onChangeQuery }) => {

  return (
    <form className="gallery__form" name="search" onSubmit={onSubmit}>
      <input
        className="gallery__input"
        id="name"
        name="name"
        type="text"
        value={query || ''}
        onChange={onChangeQuery}
        required
      />
      <button className="gallery__submit-button" type="submit">Search</button>
    </form>
  );
}
  
export default Form;
