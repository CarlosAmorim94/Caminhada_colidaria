import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Logo from "/public/image/logo.png";
import Kit1 from "/public/image/kit1.png";
import Kit2 from "/public/image/kit2.png";
import largada from "/public/image/largada.png";
import { sponsorList } from "../components/Sponsors/list";

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
  Icon,
  Icons,
  ImageShirt,
  Info,
  Kits,
  KitTitle,
  Local,
  Logotype,
  Obs,
  ObsText,
  Out,
  Sponsorship,
  SubTitle,
  Title,
} from "../styles/styles";
import Whats from "/public/image/whats.svg";
import Gmail from "/public/image/gmail.svg";
import Sponsors from "../components/Sponsors";

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

        <Link href="/Registration">
          <Button>Participar!</Button>
        </Link>

        <Help>
          <Link href="/Payment">
            <ButtonPay>QR Code/Pix</ButtonPay>
          </Link>

          <Icons>
            <a href="https://api.whatsapp.com/send?phone=5514981851114">
              <Icon>
                <Image src={Whats} alt="Whatsapp logo" layout="intrinsic" />
              </Icon>
            </a>
            <a href="mailto:circuitosolidario@hotmail.com">
              <Icon>
                <Image src={Gmail} alt="Gmail logo" layout="intrinsic" />
              </Icon>
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
        <Obs>
          Obs:
          <ObsText>
            As 50 primeiras pessoas ganharão a personalização atrás da camiseta.
          </ObsText>
          <ObsText>Delicioso café da manhã após a prova.</ObsText>
        </Obs>
        <SubTitle>Patrocínio:</SubTitle>
        <Sponsorship>
          {sponsorList.map((sponsor, index) => (
            <Sponsors item={sponsor} key={index} />
          ))}
        </Sponsorship>
      </Content>
    </Container>
  );
};

export default Home;
