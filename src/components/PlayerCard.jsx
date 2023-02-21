import Card, { Button } from "react-bootstrap";
const PlayerCard = () => {
  // const {name, surname, statics} = props
  const showImage = true;
  return (
    <Card className="rounded-2 m-auto player-card role=button">
      <Card.Img variant="top" src={img} className="player-logo" />
      <ul>
        {statistics.map((item, i) => {
          return (
            <li>
              {" "}
              key={i}=>{item}
            </li>
          );
        })}
      </ul>
      <Card.Footer>
        <Card.Title>{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};
export default PlayerCard;
