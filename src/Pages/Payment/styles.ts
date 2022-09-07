import styled from "styled-components";
import Bg from "../../assets/img/background.jpg";

export const Container = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Bg}) no-repeat;
  background-size: cover;
  background-position: center;
`;
