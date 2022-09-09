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

  const userCollectionRef = collection(firestore, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setOriginalUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  function handleInput1(e: any) {
    const inputValue = "kit1"; // e.target corresponde ao elemento input.
    setUsers(searchTable(inputValue)); // assumindo `user` como propriedade global do
    // estado
  }

  function handleInput2(e: any) {
    const inputValue = "kit2"; // e.target corresponde ao elemento input.
    setUsers(searchTable(inputValue)); // assumindo `user` como propriedade global do
    // estado
  }
  function handleInputAll(e: any) {
    const inputValue = ""; // e.target corresponde ao elemento input.
    setUsers(searchTable(inputValue)); // assumindo `user` como propriedade global do
    // estado
  }

  function searchTable(value: string) {
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

  return (
    <Container>
      {users.length === 0 ? (
        <div>Carregando dados...</div>
      ) : (
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
                  <button
                    onClick={handleInput1}
                    id="input-table"
                    placeholder="Filtre um kit: 'kit2'"
                  >
                    kit1
                  </button>
                  <button
                    onClick={handleInput2}
                    id="input-table"
                    placeholder="Filtre um kit: 'kit2'"
                  >
                    kit2
                  </button>
                  <button
                    onClick={handleInputAll}
                    id="input-table"
                    placeholder="Filtre um kit: 'kit2'"
                  >
                    Todos
                  </button>
                </div>
              </TableHeadColumn>
              <TableHeadColumn>CAMISETA</TableHeadColumn>
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
      )}
    </Container>
  );
};

export default Admin;
