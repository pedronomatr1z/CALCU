function soma() {
  var n1 = Number(document.getElementById('n1').value)
  var n2 = Number(document.getElementById('n2').value)
  var conta = n1 + n2

  document.getElementById('resultado').innerHTML = `<p>A soma de ${n1} e ${n2} é igual a ${conta}</p>`
}

function subtrair() {
  var n1 = Number(document.getElementById('n1').value)
  var n2 = Number(document.getElementById('n2').value)
  var conta = n1 - n2

  document.getElementById('resultado').innerHTML = `<p>A subtração de ${n1} e ${n2} é igual a ${conta}</p>`
}

function multiplicacao() {
  var n1 = Number(document.getElementById('n1').value)
  var n2 = Number(document.getElementById('n2').value)
  var conta = n1 * n2

  document.getElementById('resultado').innerHTML = `<p>A multiplicação de ${n1} e ${n2} é igual a ${conta}</p>`
}

function divisao() {
  var n1 = Number(document.getElementById('n1').value)
  var n2 = Number(document.getElementById('n2').value)
  var conta = n1 / n2

  document.getElementById('resultado').innerHTML = `<p>A divisão de ${n1} e ${n2} é igual a ${conta}</p>`
}