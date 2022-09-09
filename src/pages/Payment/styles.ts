import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
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

export const Title = styled.h1`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const SubTitle = styled.h2`
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin: 1rem 0;
`;

export const SubTitlePIX = styled(SubTitle)`
  margin: 0;
`;

export const Pix = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  border: 2px solid rgba(255, 255, 1);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
`;

export const QRCode = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    border: 2px solid rgba(255, 255, 1);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
  }
`;

export const QRCodeImage = styled.div``;

export const Button = styled.button`
  width: 70%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  height: 100%;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  border: 2px solid white;
  border-radius: 1rem;
  background: rgba(255, 255, 1, 1);

  &:hover {
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.9);
  }
`;

export const Value = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: rgba(255, 255, 1);
`;

export const Proof = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  border: 2px solid rgba(255, 255, 1);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
`;

export const Icons = styled.div`
  width: 40%;
  display: flex;
  font-size: 2rem;
  justify-content: space-around;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;

    &:visited,
    :link,
    :hover,
    :active {
      text-decoration: none;
      color: inherit;
    }
  }
`;
