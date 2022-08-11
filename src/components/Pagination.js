function Pagination({ onNextPage, onPreviousPage }) {

  return (
    <div className="gallery__pagination">
      <button className="gallery__pag-btn gallery__pag-btn_type_back" type="button" onClick={onPreviousPage}>&lt;</button>
      <button className="gallery__pag-btn gallery__pag-btn_type_forward" type="button" onClick={onNextPage}>&gt;</button>
    </div>
  );
}
  
export default Pagination;