import html2canvas from "html2canvas";
import { useRef } from "react";

export default function Financeiro({ setPaginaAtual }) {
  const conteudoRef = useRef();

  const gerarJPG = () => {
    html2canvas(conteudoRef.current, {
      scale: 2, // aumenta a resolução
      useCORS: true, // se tiver imagens externas
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "financeiro.jpg";
      link.click();
    });
  };

  return (
    <div className="financeiro-container" ref={conteudoRef}>
      <img className="topoFinanceiro" src="img/topo-financeiro.jpg"></img>

      {/* Cadastro Cliente */}
      <div className="section-wrapper">
        <div className="section-title">Cadastro cliente</div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" placeholder="Digite o nome" />
          </div>
          <div className="input-group">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" placeholder="(xx) xxxxx-xxxx" />
          </div>
          <div className="input-group">
            <label htmlFor="regiao">Região</label>
            <input type="text" id="regiao" placeholder="Digite a região" />
          </div>
        </div>
      </div>

      {/* Veículo */}
      <div className="section">
        <div className="section-title">Veículo</div>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="marca">Marca</label>
            <input type="text" id="marca" placeholder="Ex: Toyota" />
          </div>
          <div className="input-group">
            <label htmlFor="modelo">Modelo</label>
            <input type="text" id="modelo" placeholder="Ex: Corolla" />
          </div>
          <div className="input-group">
            <label htmlFor="placa">Placa</label>
            <input type="text" id="placa" placeholder="ABC-1234" />
          </div>
        </div>
      </div>

      {/* Detalhamento */}
      <div className="section">
        <h2>Ordem de serviço valores e prazo</h2>
        <div className="detalhamento">
          <div className="box">
            <div
              contentEditable
              placeholder="Digite aqui..."
              style={{
                minHeight: "150px",
                border: "1px solid #ccc",
                padding: "10px",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div>
        <button onClick={gerarJPG}>Gerar JPG</button>
        <button onClick={() => setPaginaAtual("home")}>Home</button>
      </div>
    </div>
  );
}
