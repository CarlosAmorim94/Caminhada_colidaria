import type { NextPage } from "next";
import Head from "next/head";
import Logo from "/public/image/logo.png";
import Kit1 from "/public/image/kit1.png";
import Kit2 from "/public/image/kit2.png";
import largada from "/public/image/largada.png";
import sponsor from "/public/image/sponsor.png";
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
} from "../styles/styles";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Caminhada/Corrida Solidária</title>
      </Head>
      <Content>
        <Logotype>
          <Image
            src={Logo}
            alt="Simbolo da corrida de rua com pessoas correndo e uma medalha na frente"
            layout="responsive"
          />
        </Logotype>
        <Title>Primeira corrida e caminhada solidária das crianças</Title>
        <p>Troque um brinquedo por um sorriso!</p>

        <Info>
          <Data>
            <Dom>Domingo</Dom>
            <Day>09</Day>
            <Out>OUT</Out>
            <City>Botucatu</City>
          </Data>
          <Local>
            <Image src={largada} alt="Largada histórica" layout="responsive" />
          </Local>
        </Info>

        <Button>
          <Link href="/Registration">Participar!</Link>
        </Button>
        <Help>
          <ButtonPay>
            <Link href="/Payment">QR Code/Pix</Link>
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
          <ImageShirt>
            <Image
              src={Kit1}
              alt="Kit com numero e medalha"
              layout="responsive"
            />
          </ImageShirt>
        </Kits>
        <Kits>
          <div>
            <KitTitle>Kit 2 - R$ 60,00</KitTitle>
            <p>Numeral, medalha e camiseta</p>
          </div>
          <ImageShirt>
            <Image
              src={Kit2}
              alt="Kit com numero, medalha e camiseta"
              layout="responsive"
            />
          </ImageShirt>
        </Kits>
        <Obs>Obs:</Obs>
        <Obs>
          As 50 primeiras pessoas ganharão a personalização atrás da camiseta.
        </Obs>
        <Obs>Delicioso café da manhã após a prova.</Obs>
        <SubTitle>Patrocínio:</SubTitle>
        <Sponsorship>
          <Image src={sponsor} alt="Patrocinadores" layout="responsive" />
        </Sponsorship>
      </Content>
    </Container>
  );
};

export default Home;
