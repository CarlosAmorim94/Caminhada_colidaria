import { useEffect, useState } from "react";
import { Container } from "./styles/AppStyle";
import InputMask from "react-input-mask";

function App() {
  const [id, setId] = useState<number>();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [team, setTeam] = useState("");
  const [kit, setKit] = useState();
  const [chooseShirt, setChooseShirt] = useState(false);
  const [sizeShirt, setSizeShirt] = useState();

  useEffect(() => {
    function getRandomIntInclusive(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const uuid = getRandomIntInclusive(200, 600);
    setId(uuid);
  }, []);

  const cadastro = {
    id,
    Email: email,
    nome: name,
    Telefone: phone,
    Equipe: team,
    Kit: kit,
    TamanhoCamisa: sizeShirt,
  };
  const emailResponse = `Olá ${name}, sua inscrição foi efetuada com sucesso! seu ID: ${id} confira os dados: Telefone: ${phone}, Equipe: ${team}, Kit escolhido: ${kit} Tamanho da camiseta: ${sizeShirt}`;

  console.log(emailResponse);

  const handleKit1 = (e: any) => {
    setKit(e.target.value);
    setChooseShirt(false);
  };

  const handleKit2 = (e: any) => {
    setKit(e.target.value);
    setChooseShirt(true);
  };

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
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="BL-M">BL-M</label>
            <input
              type="radio"
              id="PP"
              name="sizeShirt"
              value="PP"
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="PP">PP</label>
            <input
              type="radio"
              id="P"
              name="sizeShirt"
              value="P"
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="P">P</label>
            <input
              type="radio"
              id="M"
              name="sizeShirt"
              value="M"
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="M">M</label>
            <input
              type="radio"
              id="G"
              name="sizeShirt"
              value="G"
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="G">G</label>
            <input
              type="radio"
              id="GG"
              name="sizeShirt"
              value="GG"
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="GG">GG</label>
            <input
              type="radio"
              id="XG"
              name="sizeShirt"
              value="XG"
              onClick={(e) => setSizeShirt(e.target.value)}
            />
            <label htmlFor="XG">XG</label>
          </fieldset>
        )}

        <button>Cadastrar</button>
      </form>
    </Container>
  );
}

export default App;
