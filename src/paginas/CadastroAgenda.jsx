import React, { useState } from "react";

export default function CadastroAgenda({ setPaginaAtual }) {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    data: "",
    servico: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Aqui você pode fazer o fetch para API ou PHP
    alert("Cliente cadastrado com sucesso!");
    setForm({
      nome: "",
      whatsapp: "",
      data: "",
      servico: "",
    });
  };

  return (
    <div className="">
      <h2>Cadastrar agendamento</h2>

      <form onSubmit={handleSubmit} className="form-cadastro">
        <input
          pattern="[A-Za-zÀ-ÿ\s]+"
          placeholder="Digite nome completo"
          type="text"
          name="nome"
          required
          style={estiloInput}
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        <input
          pattern="\d+"
          placeholder="xx999999999 / somente numeros"
          inputmode="numeric"
          type="text"
          name="whatsapp"
          required
          style={estiloInput}
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
        />

        <input
          placeholder="Data do serviço"
          type="text"
          name="data"
          required
          style={estiloInput}
          value={form.data}
          onChange={(e) => setForm({ ...form, data: e.target.value })}
        />

        <textarea
          type="text"
          placeholder="Detalhamento do serviço a ser feito"
          name="serviço"
          required
          style={estiloInput}
          value={form.serviço}
          onChange={(e) => setForm({ ...form, serviço: e.target.value })}
        />

        <button type="submit" className="btcadastro">
          Cadastrar
        </button>
      </form>

      <img
        className="bthome"
        src="/img/bthome.png"
        alt="Botão Home"
        style={{}}
        onClick={() => setPaginaAtual("home")}
      />
    </div>
  );
}

const estiloInput = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "10px",
};
