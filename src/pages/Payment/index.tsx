import {
  Button,
  Container,
  Content,
  Icons,
  Pix,
  Proof,
  QRCode,
  QRCodeImage,
  SubTitle,
  SubTitlePIX,
  Title,
  Value,
} from "./styles";
import QR30 from "/public/image/30.png";
import QR60 from "/public/image/60.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export function Payment() {
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
            <QRCodeImage>
              <Image
                src={QR30}
                alt="QRCode para pagar 30 reais"
                layout="fixed"
                width={225}
                height={225}
              />
            </QRCodeImage>
            <Button>
              <a
                href="https://drive.google.com/file/d/1SpI3EpgFgl0j3sfWCSeahElRFwXTTg8t/view?usp=sharing"
                target="_blank"
              >
                Download PDF - R$ 30,00
              </a>
            </Button>
          </div>
          <div>
            <Value>R$ 60,00</Value>
            <QRCodeImage>
              <Image
                src={QR60}
                alt="QRCode para pagar 60 reais"
                layout="fixed"
                width={225}
                height={225}
              />
            </QRCodeImage>
            <Button>
              <a
                href="https://drive.google.com/file/d/15mLUM_cVsLt0tGp-RfgAawiWxRdnfJad/view?usp=sharing"
                target="_blank"
              >
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
}

export default Payment;
