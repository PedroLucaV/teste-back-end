export const divisao = (a, b) => {
    if(b == 0){
        throw new Error("Não é possivel realizar uma divisão por 0")
    }
    return a/b;
}