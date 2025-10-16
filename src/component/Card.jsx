import "./Card.css";

export default function Card({
  title,
  image,
  description,
  oldPrice,
  newPrice,
}) {
  return (
    <>
      <div className="card">
        <div className="cardInfo">
          <p className="title">{title}</p>
          <img src={image} className="image" />
          <ul className="descriptionList">
            {Array.isArray(description) ? (
              description.map((point, index) => <li key={index}>{point}</li>)
            ) : (
              <li>{description}</li>
            )}
          </ul>
        </div>
        <div className="priceSection">
          <span className="oldPrice">₹{oldPrice}</span>
          <span className="newPrice">₹{newPrice}</span>
        </div>
      </div>
    </>
  );
}
