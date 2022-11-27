var n1 = prompt("Digite sua nota do primeiro bimestre:");
n1 = parseFloat(n1);

var n2 = prompt("Digite sua nota do segundo bimestre:");
n2 = parseFloat(n2);

var media = (n1 + n2) / 2;


alert(media > 5);

  if(media < 5) { //se a média for menor que 5 exibe "Reprovado"
    alert("Reprovado")
  }
  else { //"Se não" exibe aprovado
    alert("Aprovado, parabéns")
  }
