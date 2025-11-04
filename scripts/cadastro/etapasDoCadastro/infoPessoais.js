import {capturarDadosAluno} from '../dados/capturarDadosPessoais.js'

export function enviarSegundaEtapaCadastro() {

    const form = document.querySelector("#parte1 form");

    form.addEventListener('submit', (e)=> {
        e.preventDefault();

        if (form.checkValidity()) {
            // Tudo preenchido corretamente
            document.getElementById("parte1").style.display = "none";
            document.getElementById("parte2").style.display = "block";
            capturarDadosAluno()
        } else {
            // Mostra os erros de validação
            form.reportValidity();
      }

    })

}

