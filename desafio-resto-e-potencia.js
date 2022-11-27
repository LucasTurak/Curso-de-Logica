var n1 = prompt("Digite um número:")
n1 = parseFloat(n1);

var n2 = prompt("Digite outro número:")
n2 = parseFloat(n2);

var resto = (n1 % n2)
var elevado = (n1 ** n2)

alert("O resto da divisão de " + n1 + " e " + n2 + " é: " + resto)

alert("O número " + n1 + " elevado a " + n2 + " é: " + elevado)