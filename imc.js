function calculaImc() {
    var nome = document.getElementById('nome').value
    var altura = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var res = document.getElementById('resultado')

    res.innerHTML = ''
    if(nome == '' || altura == '' || peso == '') {
        alert('Preencha os dados')
    }
    else {
        var imc = (peso / (altura * altura)).toFixed(2)
                
        if(imc < 18.5) {
            res.innerHTML = `${nome} seu IMC é ${imc} sua faixa é magreza`
        }
        else if(imc <= 24.9) {
            res.innerHTML = `${nome} seu IMC é ${imc} sua faixa é normal`
        }
        else if(imc <= 29.9) {
            res.innerHTML = `${nome} seu IMC é ${imc} sua faixa é sobrepeso`
        }
        else if(imc <= 39.9) {
            res.innerHTML = `${nome} seu IMC é ${imc} sua faixa é obesidade`
        }
        else {
            res.innerHTML = `${nome} seu IMC é ${imc} sua faixa é obesidade grave`
        }
    }
}