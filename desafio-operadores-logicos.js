var nota1 = prompt("Digite a Nota 1:");
nota1 = parseInt(nota1);

var nota2 = prompt("Digite a Nota 2:");
nota2 = parseInt(nota2);

if (nota1 > 0 && nota2 > 0 && (nota1 + nota2 / 2) > 5){
    alert("Aprovado");
} else {
    alert("Reprovado");
}