import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
`;

export const Table = styled.table`
  width: 80%;
  margin: auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  //Se eu tiver Props(width lá no componente), uso a prop, se não uso o auto
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const TableLine = styled.tr`
  color: black;
`;

export const TableColumn = styled.td`
  padding: 10px 0;
  color: black;
  border-bottom: 1px dotted black;
`;
