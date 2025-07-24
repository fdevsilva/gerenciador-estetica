import React, { useState } from "react";

export default function CadastroAgenda({ setPaginaAtual }) {
  const [form, setForm] = useState({
    nome: "teste nome",
    whatsapp: "testse 027 995",
    regiao: "testes cariacica",
    marca: "testes toyota",
    modelo: "testes corolla",
    placa: "testes placa",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Aqui você pode fazer o fetch para API ou PHP
    alert("Cliente cadastrado com sucesso!");
    setForm({
      nome: "",
      whatsapp: "",
      regiao: "",
      marca: "",
      modelo: "",
      placa: "",
    });
  };

  return (
    <div className="form-cadastro-agenda">
      <h2>Cadastrar agendamento</h2>

      <form onSubmit={handleSubmit} className="form-table-cadastro">
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          required
          style={estiloInput}
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />

        <label>WhatsApp:</label>
        <input
          type="text"
          name="whatsapp"
          required
          style={estiloInput}
          value={form.whatsapp}
          onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
        />

        <label>Data:</label>
        <input
          type="text"
          name="data"
          required
          style={estiloInput}
          value={form.data}
          onChange={(e) => setForm({ ...form, data: e.target.value })}
        />

        <label>serviço</label>
        <input
          type="text"
          name="serviço"
          required
          style={estiloInput}
          value={form.serviço}
          onChange={(e) => setForm({ ...form, serviço: e.target.value })}
        />

        <button type="submit" className="cadastrar-agendamento">
          Cadastrar
        </button>
      </form>

      <button onClick={() => setPaginaAtual("home")}>Voltar para Home</button>
    </div>
  );
}

const estiloInput = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "10px",
};
