const retornaPrimo = (x) => {
    const primos = [];
    if(x > 100 && x < 0){
        return "Insira um número de 0 a 100";
    }

    for(let i = 1; i<x; i++){
        let isPr = true
        for(let y = 1; y<i; y++){
            let div = i/y;
            if(div != i && Number.isInteger(div)){
                isPr = false
            }
        }
        
        if(isPr){
            primos.push(i)
        }
    }
    return primos
}


test("Verifica se o número é primo", () => {
    expect(retornaPrimo(4)).toStrictEqual([1, 2, 3])
})

const fibonacci = (n) => {
    let c = 1;
    let x = 0;
    let o;

    for (let i = 0; i < n; i++) {
        o = c+x
        x=c
        c=o
    }

    return o
}

test("Retorno da posição de fibonacci", () => {
    expect(fibonacci(5)).toBe(8);
    expect(fibonacci(6)).toBe(13);
})

const objTrat = (obj) => {
    if(obj.hasOwnProperty("nome") && obj.hasOwnProperty("idade") && obj.hasOwnProperty("pais") && obj.hasOwnProperty("endereco")) return true
    return false
}

test("Verifica se objeto tem propriedade!", () => {
    const pessoa = {
        nome: "Pedro",
        idade: 16,
        pais: "Brasil",
        endereco: "Rua 4"
    }

    const carro = {
        marca: "Chevrolet",
        ano: "2010",
        modelo: "Celta"
    }

    const banda = {
        nome: "Misfits",
        pais: "Estados Unidos"
    }

    expect(objTrat(pessoa)).toBe(true);
    expect(objTrat(banda)).toBe(false);
    expect(objTrat(carro)).toBe(false);
})