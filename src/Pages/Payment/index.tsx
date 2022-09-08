import {
  Button,
  Container,
  Content,
  Icons,
  Pix,
  Proof,
  QRCode,
  SubTitle,
  SubTitlePIX,
  Title,
  Value,
} from "./styles";
import QR30 from "../../assets/img/30.png";
import QR60 from "../../assets/img/60.png";
import D30 from "../../assets/pdf/30.pdf";
import D60 from "../../assets/pdf/60.pdf";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export const Payment = () => {
  return (
    <Container>
      <Content>
        <Title>Pagamento</Title>
        <Pix>
          <SubTitlePIX>Chave PIX:</SubTitlePIX>
          <h3>rpm3311@hotmail.com</h3>
        </Pix>

        <SubTitle>QR Code</SubTitle>
        <QRCode>
          <div>
            <Value>R$ 30,00</Value>
            <img src={QR30} />
            <Button>
              <a href={D30} target="_blank">
                Download PDF - R$ 30,00
              </a>
            </Button>
          </div>
          <div>
            <Value>R$ 60,00</Value>
            <img src={QR60} />
            <Button>
              <a href={D60} target="_blank">
                Download PDF - R$ 60,00
              </a>
            </Button>
          </div>
        </QRCode>
        <Proof>
          <p>Enviar comprovante:</p>
          <Icons>
            <a href="https://api.whatsapp.com/send?phone=5514981851114">
              <IoLogoWhatsapp />
            </a>
            <a href="mailto:circuitosolidario@hotmail.com">
              <MdEmail />
            </a>
          </Icons>
        </Proof>
      </Content>
    </Container>
  );
};
