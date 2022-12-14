import React, { useEffect, useState, FormEvent } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../Firebase/firebase";
import { Container, Table, TableHeadColumn } from "./styles";
import TableLine from "../../components/TableLine";

export default function Admin() {
  const [users, setUsers] = useState<any[]>([]);
  const [originalUsers, setOriginalUsers] = useState<any[]>([]);
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

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    setKit(e.target.value);
  }

  useEffect(() => {
    setUsers(searchKit(kit));
  }, [kit]);

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
                <select onChange={handleFilter}>
                  <option>{""}</option>
                  <option>kit 1</option>
                  <option>kit 2 - BL-M</option>
                  <option>kit 2 - PP</option>
                  <option>kit 2 - P</option>
                  <option>kit 2 - M</option>
                  <option>kit 2 - G</option>
                  <option>kit 2 - GG</option>
                  <option>kit 2 - XG</option>
                </select>
              </div>
            </TableHeadColumn>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <TableLine user={user} key={user.cpf} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
