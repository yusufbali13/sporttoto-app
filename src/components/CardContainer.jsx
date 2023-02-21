import Container from "react-bootstrap/Container";
import Container from "react-bootstrap/Row";
import Container from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
const CardContainer = () => {
  return (
    <Container className="card-container rounded-4 my-4 p-3">
      <row className="g-3 justify.content.center">
        {data.map((player, i) => {
          return (
            <Col key={i}>
              <PlayerCard {...player} />
            </Col>
          );
        })}
      </row>
    </Container>
  );
};
export default CardContainer;
