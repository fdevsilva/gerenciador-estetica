export default function Financeiro({ setPaginaAtual }) {
  return (
    <div>
      <h2>Orçamento</h2>
      <button onClick={() => setPaginaAtual("home")}>Home</button>
    </div>
  );
}
