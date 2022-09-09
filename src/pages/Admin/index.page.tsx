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
  const [originalUsers, setOriginalUsers] = useState<any[]>([]);
  const [size, setSize] = useState("");
  const [kit, setKit] = useState("");

  const userCollectionRef = collection(firestore, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setOriginalUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  function handleKit(e: any) {
    setKit(e.target.value);
  }
  useEffect(() => {
    setUsers(searchKit(kit));
  }, [kit]);

  function searchKit(value: string) {
    const filteredUsers = [];

    if (value.length === 0) {
      return originalUsers; // ESTE RETORNO IRA RESTAURAR OS DADOS ORIGINAIS DO
      // USER
    }

    for (let i = 0; i < users.length; ++i) {
      const newValue = value.toLowerCase(); // nao redeclarar o value.

      const user = users[i].kit.toLowerCase();

      if (user.includes(newValue)) {
        filteredUsers.push(users[i]);
      }
    }
    return filteredUsers;
  }

  function handleFilter(e: any) {
    setSize(e.target.value);
  }

  useEffect(() => {
    setUsers(searchSize(size));
  }, [size]);

  function searchSize(value: string) {
    const filteredUsers = [];

    if (value.length === 0) {
      return originalUsers; // ESTE RETORNO IRA RESTAURAR OS DADOS ORIGINAIS DO
      // USER
    }

    for (let i = 0; i < users.length; ++i) {
      const newValue = value.toLowerCase(); // nao redeclarar o value.

      const user = users[i].camiseta.toLowerCase();

      if (user.includes(newValue)) {
        filteredUsers.push(users[i]);
      }
    }
    return filteredUsers;
  }

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <TableHeadColumn>CPF</TableHeadColumn>
            <TableHeadColumn>NOME</TableHeadColumn>
            <TableHeadColumn>NUMERO</TableHeadColumn>
            <TableHeadColumn>TELEFONE</TableHeadColumn>
            <TableHeadColumn>E-MAIL</TableHeadColumn>
            <TableHeadColumn>EQUIPE</TableHeadColumn>
            <TableHeadColumn>
              <div>
                KIT
                <select onChange={handleKit}>
                  <option>{""}</option>
                  <option>Kit1</option>
                  <option>Kit2</option>
                </select>
              </div>
            </TableHeadColumn>
            <TableHeadColumn>
              <div>
                CAMISETA
                <select onChange={handleFilter}>
                  <option>{""}</option>
                  <option>BL-M</option>
                  <option>PP</option>
                  <option>P</option>
                  <option>M</option>
                  <option>G</option>
                  <option>GG</option>
                  <option>XG</option>
                </select>
              </div>
            </TableHeadColumn>
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
