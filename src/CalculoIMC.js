import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculoIMC = () => {
const [altura, setAltura] = useState('');
const [peso, setPeso] = useState('');
const [imc, setIMC] = useState(null);

const calcularIMC = () => {
    const alturaMetros = parseFloat(altura) / 100;
    const calculoIMC = parseFloat(peso) / (alturaMetros * alturaMetros);
    setIMC(calculoIMC.toFixed(2));
};

return (
    <div className="container mt-5">
    <h1>Calculadora de IMC</h1>
    <div className="form-group">
        <label htmlFor="altura">Altura (cm):</label>
        <input
        type="number"
        className="form-control"
        id="altura"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        />
    </div>
    <div className="form-group mt-3">
        <label htmlFor="peso">Peso (kg):</label>
        <input
        type="number"
        className="form-control"
        id="peso"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        />
    </div>
    <button className="btn btn-primary mt-3" onClick={calcularIMC}>
        Calcular IMC
    </button>

    {imc !== null && (
    <div className="mt-3">
        <h2>Resultado:</h2>
        <p>IMC: {imc}</p>
        <p>Classificação: {classificarIMC(imc)}</p>
    </div>
    )}
    </div>
    );
    };

    const classificarIMC = (imc) => {
    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 29.9) {
        return 'Acima do Peso';
    } else {
        return 'Obeso';
    }
    };

export default CalculoIMC;

