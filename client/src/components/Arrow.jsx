import "../styles/Arrow.scss";

function Arrow() {
  return (
    <button
      type="button"
      className="buttonTop"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <img
        className="arrow"
        src="client/src/assets/icons8-fusée-100.png"
        alt="Arrow"
      />
      <p className="returnText">return top</p>
    </button>
  );
}
export default Arrow;
