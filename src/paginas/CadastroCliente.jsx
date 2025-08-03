export default function Cadastro({ setPaginaAtual }) {
  return (
    <div className="">
      <h2>Cadastro de Cliente e Veículo</h2>

      <form action="salvar.php" method="POST" className="form-cadastro">
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          required
          style={estiloInput}
        />

        <input
          type="text"
          name="whatsapp"
          placeholder="WhatsApp - somente numeros"
          required
          style={estiloInput}
        />

        <input
          type="text"
          name="regiao"
          placeholder="Região - Cariacica / Vitória-ES / Vila velha..."
          required
          style={estiloInput}
        />

        <input
          type="text"
          name="marca"
          placeholder="Marca - Fiat, GM, BYD e Hyundai..."
          required
          style={estiloInput}
        />

        <input
          type="text"
          name="modelo"
          placeholder="Modelo - Argo, Cronos, Pulse..."
          required
          style={estiloInput}
        />

        <input
          type="text"
          name="placa"
          placeholder="Placa"
          required
          style={estiloInput}
        />

        <button type="submit" className="btcadastro">
          Cadastrar
        </button>
      </form>
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

const estiloInput = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "10px",
};
