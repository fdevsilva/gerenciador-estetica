export default function Catalogo({ setPaginaAtual }) {
  return (
    <div>
      <h2>Catalogo</h2>
      <button onClick={() => setPaginaAtual("home")}>Home</button>
    </div>
  );
}
