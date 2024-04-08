import "./Form.css";
import Input from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const onSave = (e) => {
    e.preventDefault();
    props.onPost({ name, job, image, team });
  };

  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          required={true}
          value={name}
          onChange={(value) => setName(value)}
        />
        <Input
          label="Cargo"
          placeholder="Digite seu cargo"
          required={true}
          value={job}
          onChange={(value) => setJob(value)}
        />
        <Input
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          value={image}
          onChange={(value) => setImage(value)}
        />
        <Dropdown
          label="Time"
          itemList={props.teams}
          required={true}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
