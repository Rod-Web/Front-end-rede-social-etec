export function voltarParaAEtapaUm() {
    
const btnVoltar = document.querySelector("#parte2 form .buttons #voltarEtapaAnterior");

btnVoltar.addEventListener('click', ()=> {

  document.getElementById("parte2").style.display = "none";
  document.getElementById("parte1").style.display = "block";

})
}