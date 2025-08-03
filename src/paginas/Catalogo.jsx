export default function Catalogo({ setPaginaAtual }) {
  const catalogo = [
    {
      servicos: "Polimento",
      valores: "R$ 450,00",
    },
    {
      servicos: "Tratamento motor",
      valores: "R$ 250,00",
    },
  ];

  return (
    <div className="cliente-container">
      <h2 className="catalogo-titulo">Catalogo de serviços</h2>

      <table className="cliente-tabela">
        <thead>
          <tr>
            <th>Serviços</th>
            <th>Valores</th>
          </tr>
        </thead>
        <tbody>
          {catalogo.map((catalogo, index) => (
            <tr key={index}>
              <td>{catalogo.servicos}</td>
              <td>{catalogo.valores}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img
        className="bthome"
        src="/img/bthome.png"
        alt="Botão Home"
        onClick={() => setPaginaAtual("home")}
      />
    </div>
  );
}
