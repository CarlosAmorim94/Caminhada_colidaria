import Image from "next/image";
import Link from "next/link";
import { Sponsor } from "../../types/sponsor";
import { Container, ImageContainer, Strong } from "./styles";

interface SponsorProps {
  item: Sponsor;
}

export const Sponsors = ({ item }: SponsorProps) => {
  return (
    <Link href={item.site}>
      <Container>
        <ImageContainer>
          <Image
            src={`/image/sponsor/${item.img}`}
            alt={item.name}
            width={100}
            height={70}
            layout="intrinsic"
          />
        </ImageContainer>
        <Strong>{item.name}</Strong>
      </Container>
    </Link>
  );
};

export default Sponsors;
