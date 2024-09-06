export const divisao = (a, b) => {
    if(b == 0){
        throw new Error("Não é possivel realizar uma divisão por 0")
    }
    return a/b;
}

export const cursos = ["Eletrotecnica", "Informatica para Web", "Mecanica Automotiva", "Soldagem", "Moda", "Torneiraria"];

export const influencer = {
    nome: "Pedro Orochi",
    idade: 24,
    endereco: {
        cidade: "Maringá",
        estado: "Paraná"
    },
    seguidores: 6360000,
    mitinho: true
}

export const maxAlunos = 30;