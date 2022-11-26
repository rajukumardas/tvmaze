import "./style.css";

const ResultCard = (props) => {
  const { imageUrl, name, description, rating } = props;

  return (
    <div className="card-wrapper">
      <img className="card-image" src={imageUrl} alt="Card cover" />
      <div className="bottom-container">
        <h6>{name}</h6>
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
        <div>{rating}</div>
      </div>
    </div>
  );
};

export default ResultCard;
