export default function Cliente({ setPaginaAtual }) {
  const clientes = [
    {
      nome: "Josilene Amélia",
      whatsapp: "027 99581-7515",
      região: "Cariacica",
      marca: "toyota",
      modelo: "corolla 2015",
      placa: "jas1972",
    },
    {
      nome: "FAbricio silva",
      whatsapp: "027 99581-7515",
      região: "vitoria es",
      marca: "honda",
      modelo: "civic 2015",
      placa: "FSP1986",
    },
  ];

  return (
    <div className="cliente-container">
      <h2 className="cliente-titulo">Lista de Clientes</h2>

      <table className="cliente-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>WhatsApp</th>
            <th>Região</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => (
            <tr key={index}>
              <td>{cliente.nome}</td>
              <td>{cliente.whatsapp}</td>
              <td>{cliente.região}</td>
              <td>{cliente.marca}</td>
              <td>{cliente.modelo}</td>
              <td>{cliente.placa}</td>
              <td className="cliente-acoes">
                <button className="btn-editar">Editar</button>
                <button className="btn-excluir">Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => setPaginaAtual("home")}>Voltar para Home</button>
    </div>
  );
}
