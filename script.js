const calcular = document.getElementById("botao")

function imc() {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const result = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== '') {
        const valor = (peso / (altura * altura)).toFixed(1)
        
        let classificacao = ""

        if (valor < 18.5) {
            classificacao = "abaixo do peso!"
        } else if (valor < 25) {
            classificacao = "com o peso ideal :)"
        } else if (valor < 30) {
            classificacao = "acima do peso!"
        } else if (valor < 35) {
            classificacao = "com obesidade grau I!"
        } else if (valor < 40) {
            classificacao = "com obesidade grau II!"
        } else {
            classificacao = "com obesidade grau III"
        }
    
        result.textContent = `${nome} seu IMC é de ${valor} e você está ${classificacao}`
    
    } else {
        result.textContent = "Preencha todos o campos!"
    }
} 

calcular.addEventListener('click', imc)