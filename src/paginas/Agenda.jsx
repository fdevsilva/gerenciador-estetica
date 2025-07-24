import React, { useState } from "react";

export default function Agenda({ setPaginaAtual }) {
  const [popupAtivo, setPopupAtivo] = useState(false);
  const [servicoSelecionado, setServicoSelecionado] = useState("");

  const Agenda = [
    {
      nome: "Josilene Agenda",
      whatsapp: "027 99581-7515",
      data: "22/07/2025",
      servicoCompleto:
        "Vitrificação de vidros, verniz, e pneu + lavagem completa com tratamento de motor",
    },
    {
      nome: "João Pedro",
      whatsapp: "027 99888-7777",
      data: "23/08/2025",
      servicoCompleto: "Polimento técnico, vitrificação e espelhamento",
    },
  ];

  const limitarTexto = (texto) => {
    return texto.length > 6 ? texto.slice(0, 6) + "..." : texto;
  };

  const abrirPopup = (texto) => {
    setServicoSelecionado(texto);
    setPopupAtivo(true);
  };

  const fecharPopup = () => {
    setPopupAtivo(false);
    setServicoSelecionado("");
  };

  return (
    <div className="agenda-container">
      <h2>AGENDA</h2>

      <table className="cliente-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>WhatsApp</th>
            <th>Data</th>
            <th>Serviço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Agenda.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>{cliente.whatsapp}</td>
              <td>{cliente.data}</td>
              <td>
                <span
                  onClick={() => abrirPopup(cliente.servicoCompleto)}
                  style={{ cursor: "pointer", color: "#007bff" }}
                  title="Clique para ver mais"
                >
                  {limitarTexto(cliente.servicoCompleto)}
                </span>
              </td>
              <td className="cliente-acoes">
                <button className="btn-editar">Editar</button>
                <button className="btn-excluir">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* POPUP */}
      {popupAtivo && (
        <div className="popup-overlay" onClick={fecharPopup}>
          <div className="popup-caixa" onClick={(e) => e.stopPropagation()}>
            <p>{servicoSelecionado}</p>
            <button onClick={fecharPopup} className="popup-fechar">
              Fechar
            </button>
          </div>
        </div>
      )}
      <br />
      <button onClick={() => setPaginaAtual("home")}>Home</button>
      <br />
      <button onClick={() => setPaginaAtual("pagina10")}>
        Cadastro Agenda
      </button>
    </div>
  );
}
