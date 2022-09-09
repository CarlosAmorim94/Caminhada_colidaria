import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
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

export const FieldSetInformation = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: column;

  label {
    margin: 0.5rem 0 0 0;
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

export const FieldSetKit = styled.fieldset`
  width: 100%;
  border: none;
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  input[type="radio"] {
    display: none;
  }

  label {
    padding: 0.5rem;
    width: 50%;
    font-size: 1rem;
    text-align: center;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.1);
    margin: 0 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="radio"]:checked + label {
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid white;
    color: white;
    text-shadow: none;
  }
`;

export const FieldSet = styled.fieldset`
  width: 100%;
  border: none;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);

  margin-top: 1rem;
  input[type="radio"] {
    display: none;
  }

  label {
    padding: 0.5rem;
    font-size: 1rem;
    text-align: center;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.1);
  }

  input[type="radio"]:checked + label {
    background: rgba(0, 0, 0, 0.7);
    border: 2px solid white;
    color: white;
    text-shadow: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  border: 2px solid white;
  border-radius: 1rem;
  background: rgba(255, 255, 1, 1);
  cursor: pointer;
`;

export const Legend = styled.legend`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Error = styled.span`
  color: red;
  font-weight: bold;
  background-color: yellow;
  text-align: center;
  padding: 0.5rem;
  text-shadow: none;
  border-radius: 1rem;
`;

export const LoadingForm = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 1rem;
  color: #000;
  background: rgba(255, 255, 1, 1);
  cursor: pointer;

  .lds-dual-ring {
    display: inline-block;
    width: 2rem;
    height: 2rem;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
