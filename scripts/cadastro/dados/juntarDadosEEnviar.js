import { dadosAluno } from "./capturarDadosPessoais.js";
import { dadosTurma } from "./capturaDadosDaTurma.js";
export async function juntarDadosEEnviar() {
    const dadosCompletos = {
        ...dadosAluno,
        ...dadosTurma
    }; 

    try {
        const resposta = await fetch('http://localhost:3001/alunos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCompletos)
        });
        if (!resposta.ok) {
            throw new Error('Erro ao enviar os dados para o servidor');
        }

            console.log("Dados completos do aluno:", dadosCompletos);
            location.href = "../../../index.html";
        
    } catch (error) {
        console.error("Erro ao enviar os dados:", error);
        location.reload();
        throw error;
    }


}