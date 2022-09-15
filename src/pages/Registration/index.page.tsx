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
import { useForm } from "react-hook-form";
import { FormData } from "../../types/formData";

export default function Registration() {
  const [users, setUsers] = useState<any[]>([]);
  const [id, setId] = useState<number>();
  const [existCPF, setExistCPF] = useState(false);
  const [isValidCPF, setIsValidCPF] = useState(false);
  const [loading, setLoading] = useState(false);

  const userCollectionRef = collection(firestore, "users");

  /*  const emailResponse = `Olá ${data.name}, sua inscrição foi efetuada com sucesso! seu ID: ${data.id} confira os dados: CPF: ${data.CPF} , Telefone: ${data.phone}, Equipe: ${data.team}, Kit escolhido: ${data.kit}`; */

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

  console.log("numero:", id);

  /*   useEffect(() => {
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
  }, [CPF]); */

  /*   useEffect(() => {
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
  }, [loading]); */

  const handleForm = (data: FormData) => {
    data.id = id;
    console.log(data);
    /* setLoading(true);
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
    setLoading(false); */
  };

  const { register, handleSubmit } = useForm();

  return (
    <Container>
      <Head>
        <title>Registro</title>
      </Head>
      <Content
        onSubmit={handleSubmit(handleForm)}
        // action="https://formsubmit.co/circuitosolidario@hotmail.com"
        // method="POST"
      >
        {/* <input
          type="hidden"
          name="_next"
          value="https://caminhadasolidaria.vercel.app/Payment"
        />

        <input type="hidden" name="_autoresponse" value={emailResponse} /> */}
        <FieldSetInformation>
          <Legend>Dados para cadastro:</Legend>

          <label htmlFor="id">Numeração: {id}</label>
          <input id="id" value={id} type="hidden" {...register("id")} />

          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu E-mail"
            {...register("email")}
          />
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            type="text"
            placeholder="Digite seu Nome"
            {...register("name")}
          />

          <label htmlFor="cpf">CPF:</label>
          <InputMask
            mask="99999999999"
            id="cpf"
            type="text"
            placeholder="Digite seu CPF"
            {...register("cpf")}
          />
          {/*   {existCPF ? <Error>CPF já cadastrado!</Error> : ""}
          {isValidCPF ? "" : <Error>CPF inválido!</Error>} */}

          <label htmlFor="phone">Telefone:</label>
          <InputMask
            mask="(99)99999-9999"
            id="phone"
            placeholder="Digite seu telefone"
            {...register("phone")}
          />
          <label htmlFor="team">Equipe:</label>
          <input
            id="team"
            type="text"
            placeholder="Digite o nome da sua Equipe"
            {...register("team")}
          />

          <label htmlFor="kit">Escolha seu kit:</label>
          <Select id="kit" {...register("kit")}>
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
          <Button type="submit" hidden={loading}>
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
}
