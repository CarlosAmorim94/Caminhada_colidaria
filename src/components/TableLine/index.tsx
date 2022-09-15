import React from "react";
import { User } from "../../types/users";

import { Container, TableColumn } from "./styles";

interface Props {
  user: User;
}

export default function TableLine({ user }: Props) {
  return (
    <Container>
      <TableColumn>{user.cpf}</TableColumn>
      <TableColumn>{user.nome}</TableColumn>
      <TableColumn>{user.numero}</TableColumn>
      <TableColumn>{user.telefone}</TableColumn>
      <TableColumn>{user.email}</TableColumn>
      <TableColumn>{user.equipe}</TableColumn>
      <TableColumn>{user.kit}</TableColumn>
    </Container>
  );
}
