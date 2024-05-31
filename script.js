var totalCliques = 0;

function fuja() {
  var botaoCliqueAqui = document.getElementById("cliqueAqui");

  var larguraJanela = window.innerWidth;
  var alturaJanela = window.innerHeight;

  var maxX = larguraJanela - botaoCliqueAqui.offsetWidth;
  var maxY = alturaJanela - botaoCliqueAqui.offsetHeight;

  var aleatorioX = Math.floor(Math.random() * maxX);
  var aleatorioY = Math.floor(Math.random() * maxY);

  botaoCliqueAqui.style.left = aleatorioX + "px";
  botaoCliqueAqui.style.top = aleatorioY + "px";

  totalCliques++; // Incrementa o contador de cliques

  if (totalCliques >= 5) {
    // Redireciona após 5 cliques
    window.location.href =
      "https://wa.me//5554981293902?text=Feliz%20Anivers%C3%A1rio%21"; // Link para onde deseja redirecionar
  }
}
