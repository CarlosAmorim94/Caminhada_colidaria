import { useEffect, useState } from "react";
import {
  Button,
  Container,
  Content,
  FieldSetInformation,
  Legend,
  Error,
  LoadingForm,
  Select,
} from "./styles";
import InputMask from "react-input-mask";
import { firestore } from "../../Firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Head from "next/head";
import { cpf } from "cpf-cnpj-validator";

export const Registration = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [kit, setKit] = useState("");
  const [existCPF, setExistCPF] = useState(false);
  const [isValidCPF, setIsValidCPF] = useState(false);
  const [loading, setLoading] = useState(false);

  const userCollectionRef = collection(firestore, "users");

  const emailResponse = `Olá ${name}, sua inscrição foi efetuada com sucesso! seu ID: ${id} confira os dados: CPF: ${CPF} , Telefone: ${phone}, Equipe: ${team}, Kit escolhido: ${kit}`;

  const cadastro = {
    numero: id,
    cpf: CPF,
    email: email,
    nome: name,
    telefone: phone,
    equipe: team,
    kit: kit,
  };

  const handleForm = async () => {
    setLoading(true);
    if (
      CPF != "" &&
      email != "" &&
      name != "" &&
      phone != "" &&
      team != "" &&
      kit != ""
    ) {
      await addDoc(userCollectionRef, cadastro);
    }
    setLoading(false);
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

      let uuid = getRandomIntInclusive(200, 999);

      const existUuid = numeros.includes(uuid);
      if (!existUuid) {
        setId(uuid);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let cpfList: string[] = [];
    users.map((user) => {
      cpfList.push(user.cpf);
    });

    const duplicateCPF = cpfList.includes(CPF);
    if (duplicateCPF) {
      setExistCPF(true);
    } else {
      setExistCPF(false);
    }
    if (CPF.length <= 0) {
      setIsValidCPF(true);
    } else {
      setIsValidCPF(cpf.isValid(CPF));
    }
  }, [CPF]);

  useEffect(() => {
    if (
      CPF != "" &&
      email != "" &&
      name != "" &&
      phone != "" &&
      team != "" &&
      kit != ""
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [loading]);

  return (
    <Container>
      <Head>
        <title>Registro</title>
      </Head>
      <Content
        action="https://formsubmit.co/circuitosolidario@hotmail.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="https://caminhadasolidaria.vercel.app/Payment"
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
            type="string"
            placeholder="Digite seu CPF"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
          />
          {existCPF ? <Error>CPF já cadastrado!</Error> : ""}
          {isValidCPF ? "" : <Error>CPF inválido!</Error>}

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

          <label htmlFor="kit">Escolha seu kit:</label>
          <Select
            required
            id="kit"
            name="kit"
            onChange={(e) => setKit(e.target.value)}
          >
            <option></option>
            <option>kit 1</option>
            <option>kit 2 - BL-M</option>
            <option>kit 2 - PP</option>
            <option>kit 2 - P</option>
            <option>kit 2 - M</option>
            <option>kit 2 - G</option>
            <option>kit 2 - GG</option>
            <option>kit 2 - XG</option>
          </Select>
        </FieldSetInformation>

        {existCPF ? (
          ""
        ) : (
          <Button hidden={loading} onClick={handleForm}>
            Cadastrar
          </Button>
        )}
        {loading ? (
          <LoadingForm>
            Aguarde...
            <div className="lds-dual-ring"></div>
          </LoadingForm>
        ) : (
          ""
        )}
      </Content>
    </Container>
  );
};

export default Registration;
