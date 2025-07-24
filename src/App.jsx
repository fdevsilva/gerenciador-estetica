import React, { useState } from "react";
import "./css/estilo.css";
import Agenda from "./paginas/Agenda";
import Cadastro from "./paginas/Cadastro";
import Cliente from "./paginas/Cliente";
import Fornecedor from "./paginas/Fornecedor";
import Orcamento from "./paginas/Orcamento";
import Veiculo from "./paginas/Veiculo";
import Catalogo from "./paginas/Catalogo";
import Lembrete from "./paginas/Lembrete";
import Financeiro from "./paginas/Financeiro";
import CadastroAgenda from "./paginas/CadastroAgenda";

export default function App() {
  const [paginaAtual, setPaginaAtual] = useState("home");

  const renderizarConteudo = () => {
    switch (paginaAtual) {
      case "pagina1":
        return <Agenda setPaginaAtual={setPaginaAtual} />;
      case "pagina2":
        return <Cadastro setPaginaAtual={setPaginaAtual} />;
      case "pagina3":
        return <Cliente setPaginaAtual={setPaginaAtual} />;
      case "pagina4":
        return <Fornecedor setPaginaAtual={setPaginaAtual} />;
      case "pagina5":
        return <Orcamento setPaginaAtual={setPaginaAtual} />;
      case "pagina6":
        return <Veiculo setPaginaAtual={setPaginaAtual} />;
      case "pagina7":
        return <Catalogo setPaginaAtual={setPaginaAtual} />;
      case "pagina8":
        return <Lembrete setPaginaAtual={setPaginaAtual} />;
      case "pagina9":
        return <Financeiro setPaginaAtual={setPaginaAtual} />;
      case "pagina10":
        return <CadastroAgenda setPaginaAtual={setPaginaAtual} />;
      default:
        return <p>Bem-vindo! Selecione uma opção no menu.</p>;
    }
  };

  return (
    <div className="center">
      <div className="titulo">Gerenciador Multitarefas</div>
      {/* Mostrar o menu SOMENTE na página inicial */}
      {paginaAtual === "home" && (
        <nav className="menu-grid">
          {[
            "Agenda",
            "Cadastro cliente e veículo",
            "Lista de Cliente",
            "Fornecedor",
            "Orçamento",
            "Veículo",
            "Catálogo",
            "Lembrete",
            "Financeiro",
          ].map((nome, index) => (
            <button
              key={index}
              onClick={() => setPaginaAtual(`pagina${index + 1}`)}
            >
              {nome}
            </button>
          ))}
        </nav>
      )}
      <div id="conteudo-principal">{renderizarConteudo()}</div>
      {paginaAtual === "home" && (
        <div className="veiculos">
          <div className="moto"></div>
          <div className="logo_sis"></div>
          <div className="carro"></div>
        </div>
      )}
    </div>
  );
}
