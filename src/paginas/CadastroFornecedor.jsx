import React, { useState } from "react";

export default function CadastroFornecedor({ setPaginaAtual }) {
  const [form, setForm] = useState({
    empresa: "",
    contato: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // Aqui você pode fazer o fetch para API ou PHP
    alert("Cliente cadastrado com sucesso!");
    setForm({
      empresa: "",
      contato: "",
      email: "",
    });
  };

  return (
    <div className="form-cadastro">
      <h2>Cadastrar Fornecedor</h2>

      <form onSubmit={handleSubmit} className="form-table-cadastro">
        <label>Empresa:</label>
        <input
          type="text"
          name="Empresa"
          placeholder="Empresa"
          required
          style={estiloInput}
          value={form.empresa}
          onChange={(e) => setForm({ ...form, empresa: e.target.value })}
        />

        <label>Contato:</label>
        <input
          type="tel"
          pattern="[\d\s\-\(\)]+"
          placeholder="xx000000000"
          name="Contato"
          required
          style={estiloInput}
          value={form.contato}
          onChange={(e) => setForm({ ...form, contato: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="Email"
          required
          style={estiloInput}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <button type="submit" className="cadastrofornecedor">
          Cadastrar
        </button>
      </form>

      <img
        className="bthome"
        src="/img/bthome.png"
        alt="Botão Home"
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
