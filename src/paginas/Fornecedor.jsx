export default function Fornecedor({ setPaginaAtual }) {
  return (
    <div>
      <h2>Fornecedor</h2>
      <button onClick={() => setPaginaAtual("home")}>Home</button>
    </div>
  );
}
