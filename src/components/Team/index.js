import "./Team.css";
import Card from "../Card";

const Team = (props) => {
  return props.collabs.length > 0 ? (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.title}</h3>
      <div className="collab">
        {props.collabs.map((i) => (
          <Card
            key={i.name}
            name={i.name}
            job={i.job}
            image={i.image}
            color={props.primaryColor}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Team;
