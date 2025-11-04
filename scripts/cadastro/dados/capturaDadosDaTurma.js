
export let dadosTurma = {};

export function capturarDadosDaTurma() {
    console.log("Capturando dados da turma...");
    const selects = document.querySelectorAll("#parte2 select");
    selects.forEach((select) => {
        dadosTurma[select.id] = select.value;
    });
    console.log(dadosTurma);
}