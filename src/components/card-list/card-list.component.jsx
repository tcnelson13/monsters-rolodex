import Card from "../card/card.compononent";
import "./card-list.styles.css";

// We can destructure right inside of the parameter
// We also remove the return keyword and use an implicit return
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;
