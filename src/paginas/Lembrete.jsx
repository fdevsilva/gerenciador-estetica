export default function Lembrete({ setPaginaAtual }) {
  return (
    <div>
      <h2>Lembrete</h2>
      <button onClick={() => setPaginaAtual("home")}>Home</button>
    </div>
  );
}
