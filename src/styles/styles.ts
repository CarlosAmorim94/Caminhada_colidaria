import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.article`
  width: 90%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;

  //Glassmorphism
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Info = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Local = styled.div`
  width: 70%;
`;

export const Data = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Dom = styled.p`
  width: 100%;
  text-align: center;
  color: rgb(255, 255, 1);
`;
export const Day = styled.p`
  width: 100%;
  text-align: center;
  font-size: 3rem;
`;
export const Out = styled(Dom)`
  font-size: 2rem;
`;
export const City = styled(Day)`
  font-size: 1rem;
`;

export const Logotype = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

export const SubTitle = styled.h2`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  border: 2px solid white;
  border-radius: 1rem;
  background: rgba(255, 255, 1, 1);
  color: black;

  &:hover {
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.9);
  }

  @media (min-width: 1024px) {
    height: 5rem;
  }
`;

export const Kits = styled.div`
  width: 100%;

  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.2);

  p {
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  @media (min-width: 1024px) {
    height: 7rem;
  }
  @media (min-width: 1500px) {
    height: 10rem;
  }
`;

export const KitTitle = styled.h3`
  font-size: 1rem;
  margin-left: 1rem;
`;

export const ImageShirt = styled.div`
  width: 40%;
  @media (min-width: 1024px) {
    width: 30%;
  }
`;

export const Obs = styled.p`
  width: 100%;
  font-size: 0.8rem;
  text-align: start;
  margin-top: 1rem;
`;

export const Sponsorship = styled.div`
  width: 100%;
`;

export const Help = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonPay = styled(Button)`
  width: 50%;
  margin: 0;
  padding: 0;
`;

export const Icons = styled.div`
  width: 50%;
  display: flex;
  font-size: 3rem;
  justify-content: space-around;
  align-items: center;
  color: rgba(255, 255, 1, 1);

  a {
    text-decoration: none;
    color: rgba(255, 255, 1, 1);

    &:visited,
    :link,
    :hover,
    :active {
      text-decoration: none;
      color: inherit;
    }
  }
`;
