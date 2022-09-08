import { useCallback, useEffect, useState } from "react";
import {
  Button,
  Container,
  Content,
  FieldSet,
  FieldSetInformation,
  FieldSetKit,
  Legend,
  Error,
} from "./styles";
import InputMask from "react-input-mask";
import { firestore } from "../../Firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

export const Registration = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [kit, setKit] = useState("");
  const [chooseShirt, setChooseShirt] = useState(false);
  const [sizeShirt, setSizeShirt] = useState("");
  const [existCPF, setExistCPF] = useState(false);

  const userCollectionRef = collection(firestore, "users");

  const emailResponse = `Olá ${name}, sua inscrição foi efetuada com sucesso! seu ID: ${id} confira os dados: CPF: ${CPF} , Telefone: ${phone}, Equipe: ${team}, Kit escolhido: ${kit} Tamanho da camiseta: ${sizeShirt}`;

  const handleKit1 = (e: any) => {
    setKit(e.target.value);
    setChooseShirt(false);
  };

  const handleKit2 = (e: any) => {
    setKit(e.target.value);
    setChooseShirt(true);
  };

  const cadastro = {
    numero: id,
    cpf: CPF,
    email: email,
    nome: name,
    telefone: phone,
    equipe: team,
    kit: kit,
    camiseta: sizeShirt,
  };
  const handleForm = async () => {
    const user = await addDoc(userCollectionRef, cadastro);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const numeros: any[] = [];
  users.map((user) => {
    numeros.push(user.numero);
  });

  useEffect(() => {
    const fetchData = async () => {
      function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let uuid = getRandomIntInclusive(200, 600);

      const existUuid = numeros.includes(uuid);
      if (!existUuid) {
        setId(uuid);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let cpfList: any[] = [];
    users.map((user) => {
      cpfList.push(user.cpf);
    });

    const duplicateCPF = cpfList.includes(CPF);
    if (duplicateCPF) {
      console.log(duplicateCPF);
      setExistCPF(true);
    } else {
      setExistCPF(false);
    }
  }, [CPF]);
  console.log(CPF);

  return (
    <Container>
      <Content
        action="https://formsubmit.co/circuitosolidario@hotmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://caminhadasolidaria.vercel.app/pagamento"
        />

        <input type="hidden" name="_autoresponse" value={emailResponse} />
        <FieldSetInformation>
          <Legend>Dados para cadastro:</Legend>

          <label htmlFor="id">Numeração: {id}</label>
          <input id="id" value={id} type="hidden" name="id" />

          <label htmlFor="email">E-mail:</label>
          <input
            required
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="name">Nome:</label>
          <input
            required
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="cpf">CPF:</label>
          <InputMask
            mask="99999999999"
            required
            id="cpf"
            name="cpf"
            type="text"
            placeholder="Digite seu CPF"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
          />
          {existCPF ? <Error>CPF já cadastrado!</Error> : ""}

          <label htmlFor="phone">Telefone:</label>
          <InputMask
            mask="(99)99999-9999"
            required
            id="phone"
            name="phone"
            placeholder="Digite seu telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <label htmlFor="team">Equipe:</label>
          <input
            required
            id="team"
            name="team"
            type="text"
            placeholder="Digite o nome da sua Equipe"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          />
        </FieldSetInformation>

        <FieldSetKit>
          <Legend>Escolha seu kit:</Legend>

          <input
            type="radio"
            id="kit1"
            name="kits"
            value="kit1"
            onClick={handleKit1}
          />
          <label htmlFor="kit1">Kit 1 - Numeral e medalha - R$30,00</label>

          <input
            type="radio"
            id="kit2"
            name="kits"
            value="kit2"
            onClick={handleKit2}
          />
          <label htmlFor="kit2">
            Kit 2 - Numeral, medalha + CAMISETA - R$60,00
          </label>
        </FieldSetKit>

        {!chooseShirt ? (
          ""
        ) : (
          <FieldSet>
            <Legend>Escolha o tamanho da sua camiseta:</Legend>
            <input
              type="radio"
              id="BL-M"
              name="sizeShirt"
              value="BL-M"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="BL-M">BL-M</label>
            <input
              type="radio"
              id="PP"
              name="sizeShirt"
              value="PP"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="PP">PP</label>
            <input
              type="radio"
              id="P"
              name="sizeShirt"
              value="P"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="P">P</label>
            <input
              type="radio"
              id="M"
              name="sizeShirt"
              value="M"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="M">M</label>
            <input
              type="radio"
              id="G"
              name="sizeShirt"
              value="G"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="G">G</label>
            <input
              type="radio"
              id="GG"
              name="sizeShirt"
              value="GG"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="GG">GG</label>
            <input
              type="radio"
              id="XG"
              name="sizeShirt"
              value="XG"
              onChange={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="XG">XG</label>
          </FieldSet>
        )}

        {existCPF ? "" : <Button onClick={handleForm}>Cadastrar</Button>}
      </Content>

      {/* <ul>
        {users.map((user: any) => (
          <li key={user.cpf}>
            <div>{user.nome}</div>
            <div>{user.kit}</div>
            <div>{user.camiseta}</div>
            <div>{user.cpf}</div>
            <div>{user.numero}</div>
            <div>{user.equipe}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul> */}
    </Container>
  );
};
