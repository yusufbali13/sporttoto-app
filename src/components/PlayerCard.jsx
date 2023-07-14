import { useState } from "react";
import Card from "react-bootstrap/Card";
const PlayerCard = ({ name, img, statistics }) => {
  const [showImage, setShowImage] = useState(true);
  const handleClick = () => setShowImage(!showImage);

  return (
    <Card
      onClick={handleClick}
      className="rounded-2 m-auto player-card"
      role="button"
    >
      {showImage ? (
        <Card.Img variant="top" src={img} className="player-logo" />
      ) : (
        <ul className="m-auto card-second">
          {statistics.map((item, i) => {
            return (
              <li key={i} className="h5 text-start list-unstyled text-white">
                ⚽ {item}
              </li>
            );
          })}
        </ul>
      )}
      <Card.Footer>
        <Card.Title className="text-white">{name}</Card.Title>
      </Card.Footer>
    </Card>
  );
};
export default PlayerCard;
