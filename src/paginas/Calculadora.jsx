import { useState } from "react";

export default function Calculadora({ setPaginaAtual }) {
  const [volume, setVolume] = useState(1000);
  const [proporcao, setProporcao] = useState("1:10");
  const [resultado, setResultado] = useState("");

  const calcular = () => {
    const partes = proporcao.split(":").map(Number);
    const produtoParte = partes[0];
    const aguaParte = partes[1];

    if (
      isNaN(produtoParte) ||
      isNaN(aguaParte) ||
      produtoParte <= 0 ||
      aguaParte <= 0
    ) {
      setResultado("Proporção inválida. Use o formato 1:10.");
      return;
    }

    const totalPartes = produtoParte + aguaParte;
    const volumeProduto = (volume / totalPartes) * produtoParte;
    const volumeAgua = volume - volumeProduto;

    setResultado(
      `Para um recipiente de ${volume} ml\n\nAdicione:\n\n- ${volumeProduto.toFixed(
        1
      )} ml de produto\n- ${volumeAgua.toFixed(1)} ml de água`
    );
  };

  return (
    <div className="form-cadastro">
      <h2>Calculadora de Diluição</h2>

      <label htmlFor="volume">Volume do Recipiente (ml):</label>
      <input
        type="number"
        id="volume"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        style={estiloInput}
      />

      <label htmlFor="proporcao">Proporção de Diluição (ex. 1:10):</label>
      <input
        type="text"
        id="proporcao"
        value={proporcao}
        onChange={(e) => setProporcao(e.target.value)}
        style={estiloInput}
      />

      <button onClick={calcular} style={{ marginBottom: "15px" }}>
        Calcular
      </button>

      <div className="resultadocalculadora">
        {resultado && <pre>{resultado}</pre>}
      </div>

      <button onClick={() => setPaginaAtual("home")}>Voltar</button>
    </div>
  );
}

const estiloInput = {
  width: "100%",
  padding: "8px",
  marginTop: "5px",
  marginBottom: "10px",
  fontSize: "16px",
};
