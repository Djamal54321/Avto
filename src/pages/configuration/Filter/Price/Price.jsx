import './price.scss';

function Price() {
  return (
    <div className="price">
      <label for="text" className="name">
        Цена:
      </label>
      <input
        type="text"
        id="name"
        className="price-from"
        placeholder=" от"
        required
        minlength="1"
        maxlength="9"
        size="10"
        data-marker="price/from"
      />
      <input
        type="text"
        id="name"
        className="price-for"
        placeholder=" до"
        required
        minlength="1"
        maxlength="9"
        size="10"
        data-marker="price/to"
      />
    </div>
  );
}

export default Price;
