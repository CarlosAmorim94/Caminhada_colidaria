import { useEffect, useState } from "react";
import { Container } from "./styles/AppStyle";
import InputMask from "react-input-mask";
import { firestore } from "./Firebase/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

function App() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState("");
  const [CPF, setCPF] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [kit, setKit] = useState("");
  const [chooseShirt, setChooseShirt] = useState(false);
  const [sizeShirt, setSizeShirt] = useState("");

  const userCollectionRef = collection(firestore, "users");

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

  const emailResponse = `Olá ${name}, sua inscrição foi efetuada com sucesso! seu ID: ${id} confira os dados: CPF: ${CPF} , Telefone: ${phone}, Equipe: ${team}, Kit escolhido: ${kit} Tamanho da camiseta: ${sizeShirt}`;

  const handleKit1 = (e: any) => {
    setKit(e.target.value);
    setChooseShirt(false);
  };

  const handleKit2 = (e: any) => {
    setKit(e.target.value);
    setChooseShirt(true);
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
    numeros.push(...numeros, user.numero);
  });
  console.log(numeros);

  useEffect(() => {
    const fetchData = async () => {
      function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      let uuid = getRandomIntInclusive(200, 600);

      const existUuid = numeros.some((item) => item.numero == uuid);
      if (!existUuid) {
        setId(uuid);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <form
        action="https://formsubmit.co/carlos.av.amorim@gmail.com"
        method="POST"
      >
        <fieldset>
          <legend>Dados para cadastro</legend>
          <input
            type="hidden"
            name="_next"
            value="https://carlosamorim.vercel.app/emailsent"
          />

          <input type="hidden" name="_autoresponse" value={emailResponse} />

          <label htmlFor="email">E-mail:</label>
          <input
            required
            id="email"
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

          <label htmlFor="name">CPF:</label>
          <input
            required
            id="cpf"
            name="cpf"
            type="text"
            placeholder="Digite seu CPF"
            value={CPF}
            onChange={(e) => setCPF(e.target.value)}
          />

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
          <input disabled type="text" name="id" placeholder={`Seu id: ${id}`} />
        </fieldset>

        <fieldset>
          <legend>Escolha seu kit!</legend>
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
        </fieldset>

        {!chooseShirt ? (
          ""
        ) : (
          <fieldset>
            <legend>Escolha o tamanho da sua camiseta</legend>
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
          </fieldset>
        )}

        <button onClick={handleForm}>Cadastrar</button>
      </form>

      <ul>
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
      </ul>
    </Container>
  );
}

export default App;
