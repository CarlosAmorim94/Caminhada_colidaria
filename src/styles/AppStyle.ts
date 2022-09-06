import styled from "styled-components";
import Bg from "../assets/img/background.jpg";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${Bg}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Content = styled.form`
  width: 90%;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;

  //Glassmorphism
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`;

export const FieldSet = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;

  legend {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  input {
    border-radius: 1rem;
    margin: 0.5rem 0;
    padding: 0.5rem;
    border: none;

    &:focus {
      outline: 0 none;
      box-shadow: 0 0 0 transparent;
    }
  }
`;
