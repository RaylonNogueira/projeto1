function calcularCalorias() {
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const sedentario = document.getElementById('sedentario').checked;

    let calorias = 0;

    if (sexo === 'homem') {
        if (sedentario) {
            calorias = 1.2 * (88.362 + (13.397 * idade));
        } else {
            calorias = 1.55 * (88.362 + (13.397 * idade));
        }
    } else if (sexo === 'mulher') {
        if (sedentario) {
            calorias = 1.2 * (447.593 + (9.247 * idade));
        } else {
            calorias = 1.55 * (447.593 + (9.247 * idade));
        }
    }

    document.getElementById('resultado').innerHTML = `Você deve consumir ${calorias.toFixed(2)} calorias por dia.`;
    document.getElementById('resultado').style.display = 'block';
}

// Adiciona um evento de clique ao botão de calcular
document.getElementById('calcular').addEventListener('click', calcularCalorias);