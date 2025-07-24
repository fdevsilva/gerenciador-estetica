export default function Veiculo({ setPaginaAtual }) {
  return (
    <div>
      <h2>Veiculo</h2>
      <button onClick={() => setPaginaAtual("home")}>Home</button>
    </div>
  );
}
