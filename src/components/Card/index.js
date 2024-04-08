import "./Card.css";

const Card = ({ name, job, image, color }) => {
  return (
    <div className="card">
      <div className="header" style={{ backgroundColor: color }}>
        <img src={image} alt="Pedro Sobral" />
      </div>
      <div className="c-footer">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  );
};

export default Card;
