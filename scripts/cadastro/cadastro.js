import { enviarSegundaEtapaCadastro } from "./etapasDoCadastro/infoPessoais.js";
import { ultimaEtapaFormulario } from "./etapasDoCadastro/infoTurma.js";
import { voltarParaAEtapaUm } from "./interface/voltarEtapa.js";

document.addEventListener('DOMContentLoaded', () => {
  enviarSegundaEtapaCadastro()
  voltarParaAEtapaUm()
  ultimaEtapaFormulario()

})
