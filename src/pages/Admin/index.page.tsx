import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/firebase";
import {
  Container,
  Table,
  TableColumn,
  TableHeadColumn,
  TableLine,
} from "./styles";

const Admin: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  const userCollectionRef = collection(firestore, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  console.log(users);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeadColumn width={100}>CPF</TableHeadColumn>
            <TableHeadColumn width={100}>NOME</TableHeadColumn>
            <TableHeadColumn width={100}>NUMERO</TableHeadColumn>
            <TableHeadColumn width={100}>TELEFONE</TableHeadColumn>
            <TableHeadColumn width={100}>E-MAIL</TableHeadColumn>
            <TableHeadColumn width={100}>EQUIPE</TableHeadColumn>
            <TableHeadColumn width={100}>KIT</TableHeadColumn>
            <TableHeadColumn width={100}>CAMISETA</TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <TableLine key={index}>
              <TableColumn>{user.cpf}</TableColumn>
              <TableColumn>{user.nome}</TableColumn>
              <TableColumn>{user.numero}</TableColumn>
              <TableColumn>{user.telefone}</TableColumn>
              <TableColumn>{user.email}</TableColumn>
              <TableColumn>{user.equipe}</TableColumn>
              <TableColumn>{user.kit}</TableColumn>
              <TableColumn>{user.camiseta}</TableColumn>
            </TableLine>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
