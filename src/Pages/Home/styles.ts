import styled from "styled-components";
import Bg from "../../assets/img/background.jpg";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: url(${Bg}) no-repeat;
  background-size: cover;
  background-position: center;
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

  nav {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const Image = styled.img`
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
  height: 100%;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  border: 2px solid white;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.5);

  &:hover {
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const Kits = styled.div`
  width: 100%;
  height: 5rem;
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
`;

export const KitTitle = styled.h3`
  font-size: 1rem;
  margin-left: 1rem;
`;

export const ImageShirt = styled.img`
  width: 40%;
  height: 100%;
`;

export const Obs = styled.p`
  width: 100%;
  font-size: 0.8rem;
  text-align: start;
  margin-top: 1rem;
`;

export const Sponsorship = styled.img`
  width: 100%;
`;