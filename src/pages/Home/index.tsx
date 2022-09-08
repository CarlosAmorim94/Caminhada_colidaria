import Logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Kit1 from "../../assets/img/kit1.png";
import Kit2 from "../../assets/img/kit2.png";
import largada from "../../assets/img/largada.png";
import sponsor from "../../assets/img/sponsor.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {
  Button,
  ButtonPay,
  City,
  Container,
  Content,
  Data,
  Day,
  Dom,
  Help,
  Icons,
  ImageShirt,
  Info,
  Kits,
  KitTitle,
  Local,
  Logotype,
  Obs,
  Out,
  Sponsorship,
  SubTitle,
  Title,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <Content>
        <Logotype
          src={Logo}
          alt="Simbolo da corrida de rua com pessoas correndo e uma medalha na frente"
        />
        <Title>Primeira corrida e caminhada solidária das crianças</Title>
        <p>"Troque um brinquedo por um sorriso!"</p>

        <Info>
          <Data>
            <Dom>Domingo</Dom>
            <Day>09</Day>
            <Out>OUT</Out>
            <City>Botucatu</City>
          </Data>
          <Local src={largada} alt="Largada histórica " />
        </Info>

        <Button>
          <Link to="/registro">Participar!</Link>
        </Button>
        <Help>
          <ButtonPay>
            <Link to="/pagamento">QR Code/Pix</Link>
          </ButtonPay>
          <Icons>
            <a href="https://api.whatsapp.com/send?phone=5514981851114">
              <IoLogoWhatsapp />
            </a>
            <a href="mailto:circuitosolidario@hotmail.com">
              <MdEmail />
            </a>
          </Icons>
        </Help>

        <SubTitle>Corrida 6km e caminhada 3km</SubTitle>
        <Kits>
          <div>
            <KitTitle>Kit 1 - R$ 30,00</KitTitle>
            <p>Numeral e medalha</p>
          </div>
          <ImageShirt src={Kit1} />
        </Kits>
        <Kits>
          <div>
            <KitTitle>Kit 2 - R$ 60,00</KitTitle>
            <p>Numeral, medalha e camiseta</p>
          </div>
          <ImageShirt src={Kit2} />
        </Kits>
        <Obs>Obs:</Obs>
        <Obs>
          As 50 primeiras pessoas ganharão a personalização atrás da camiseta.
        </Obs>
        <Obs>Delicioso café da manhã após a prova.</Obs>
        <SubTitle>Patrocínio:</SubTitle>
        <Sponsorship src={sponsor} />
      </Content>
    </Container>
  );
};
