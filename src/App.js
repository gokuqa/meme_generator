import './App.css';
import { useState } from "react";
import html2canvas from 'html2canvas';
function App() {

  const [primeraLinea, setprimeraLinea] = useState('');
  const [segundaLinea, setsegundaLinea] = useState('');
  const [imagen, setimagen] = useState('abraham');

  const handlePrimera = (event) => {
    setprimeraLinea(event.target.value)

  }
  const handleSegunda = (event) => {
    setsegundaLinea(event.target.value)

  }

  const onChangeImagen = (event) => {
    setimagen(event.target.value)
    if (event.target.value === 'perrito' || event.target.value === 'pollito') {
      const estesi = document.querySelector('#segundo')
      estesi.style.marginTop = "440px"
    } else {
      const estesi = document.querySelector('#segundo')
      estesi.style.marginTop = "600px"
    }
  }
  const descargar = function () {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className='App'>


      <div className="meme">
        <h1> Meme Generator</h1>
        <select onChange={onChangeImagen}>
          <option value="abraham">abraham simpson</option>
          <option value="nono">nono bueno si</option>
          <option value="perrito">perrito</option>
          <option value="pollito">pollito</option>
          <option value="skiper">skiper</option>
        </select> <br />
        <label htmlFor="primerInput">linea arriba: </label>
        <input type="text" id="primerInput" onChange={handlePrimera} />
        <br />
        <label htmlFor="primerInput">linea abajo: </label>
        <input type="text" id="segundoImput" onChange={handleSegunda}></input>
        <br />

        <button onClick={descargar}>descargar</button>
        <div className='meme' id='meme'>

          <span>{primeraLinea}  </span>

          <img src={` memes/${imagen}.jpg`} alt='imagen del meme' />
          <span id={'segundo'}> {segundaLinea}</span>
        </div>

      </div>
    </div>

  );
}

export default App;
