export default function Fornecedor({ setPaginaAtual }) {
  const fornecedor = [
    { empresa: "Carbloom", contato: "27 99999-9999" },
    { empresa: "Zaplus", contato: "27 88888-8888" },
  ];

  return (
    <div className="cliente-container">
      <h2 className="catalogo-titulo">Lista de fornecedores</h2>

      <table className="cliente-tabela">
        <thead>
          <tr>
            <th>Empresa</th>
            <th>Contato</th>
          </tr>
        </thead>
        <tbody>
          {fornecedor.map((fornecedor, index) => (
            <tr key={index}>
              <td>{fornecedor.empresa}</td>
              <td>{fornecedor.contato}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btcadastro" onClick={() => setPaginaAtual("pagina8")}>
        Cadastrar novo fornecedor
      </button>
      <br />
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
