import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import sporLogo from "../assets/spor-logo.png";
const Header = () => {
  return (
    <Container>
      <Image className="mb-4" src={sporLogo} width="400px"></Image>
    </Container>
  );
};
export default Header;
