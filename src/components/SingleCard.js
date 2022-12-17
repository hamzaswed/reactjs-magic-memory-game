import "./SingleCard.css";

const SingleCard = ({ card, flipped, onChoiceCard, disabled }) => {
  const cardClickHandler = () => {
    if (!disabled) {
      onChoiceCard(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={"img/cover.png"}
          alt="card back"
          onClick={cardClickHandler}
        />
      </div>
    </div>
  );
};

export default SingleCard;
