export default function Cadastro({ setPaginaAtual }) {
  return (
    <div className="form-cadastro-cliente">
      <h2>Cadastro de Cliente e Veículo</h2>

      <form action="salvar.php" method="POST" className="form-table-cadastro">
        <label>Nome:</label>
        <input type="text" name="nome" required style={estiloInput} />

        <label>WhatsApp:</label>
        <input type="text" name="whatsapp" required style={estiloInput} />

        <label>Região:</label>
        <input type="text" name="regiao" required style={estiloInput} />

        <label>Marca:</label>
        <input type="text" name="marca" required style={estiloInput} />

        <label>Modelo:</label>
        <input type="text" name="modelo" required style={estiloInput} />

        <label>Placa:</label>
        <input type="text" name="placa" required style={estiloInput} />

        <button type="submit" className="cadastrar-cliente">
          Cadastrar
        </button>
      </form>
      <br />
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
