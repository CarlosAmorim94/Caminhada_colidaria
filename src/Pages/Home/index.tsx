import {
  Button,
  Container,
  Content,
  Image,
  ImageShirt,
  Kits,
  KitTitle,
  Obs,
  SubTitle,
  Title,
} from "./styles";
import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Kit1 from "../../assets/img/kit1.png";
import Kit2 from "../../assets/img/kit2.png";

export const Home = () => {
  return (
    <Container>
      <Content>
        <Image
          src={Logo}
          alt="Simbolo da corrida de rua com pessoas correndo e uma medalha na frente"
        />
        <Title>Primeira corrida e caminhada solidária das crianças</Title>
        <p>"Troque um brinquedo por um sorriso!"</p>
        <nav>
          <Button>
            <Link to="/registro">Participar!</Link>
          </Button>
        </nav>
        <SubTitle>Corrida 6km e caminhada 3km</SubTitle>
        <Kits>
          <div>
            <KitTitle>Kit 1 - R$30,00</KitTitle>
            <p>Numeral e medalha</p>
          </div>
          <ImageShirt src={Kit1} />
        </Kits>
        <Kits>
          <div>
            <KitTitle>Kit 2 - R$60,00</KitTitle>
            <p>Numeral, medalha e camiseta</p>
          </div>
          <ImageShirt src={Kit2} />
        </Kits>
        <Obs>Obs:</Obs>
        <Obs>
          As 50 primeiras pessoas ganharão a personalização atrás da camiseta.
        </Obs>
        <Obs>Delicioso café da manhã após a prova.</Obs>
      </Content>
    </Container>
  );
};
