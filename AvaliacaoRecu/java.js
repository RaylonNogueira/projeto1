
        function calcularCalorias() {
            const nome = document.getElementById('Nome').value;
            const idade = parseInt(document.getElementById('idade').value);
            const sexo = document.querySelector('input[name="sexo"]:checked').value;
            const sedentario = document.getElementById('Sedentario').checked;

            let calorias = 0;

            if (sexo === 'Masculino') {
                if (sedentario) {
                    calorias = 1.2 * (88.362 + (13.397 * idade));
                } else {
                    calorias = 1.55 * (88.362 + (13.397 * idade));
                }
            } else if (sexo === 'Feminino') {
                if (sedentario) {
                    calorias = 1.2 * (447.593 + (9.247 * idade));
                } else {
                    calorias = 1.55 * (447.593 + (9.247 * idade));
                }
            }

            const resultado = `Olá ${nome}, você deve consumir ${calorias.toFixed(2)} calorias por dia.`;
            document.getElementById('resultado').innerHTML = resultado;
            document.getElementById('resultado').style.display = 'block';
        }
