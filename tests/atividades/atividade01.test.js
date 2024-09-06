// 1 - Crie uma função que receba diferentes números em uma lista e retorne apenas os números pares dessa lista. Após realize o teste automatizado para essa função.
const retornaPar = (arr) => {
    const pares = [];
    arr.forEach((num) => {
        if(num%2 == 0){
            pares.push(num)
        }
    })
    return pares
}

test('Verifica retorno de número par', () => {
    expect(retornaPar([1, 2, 3, 4])).toStrictEqual([2, 4])
})

// 2 - Crie um função que receba uma lista de strings e ordene-as de ordem alfabética. Após, crie um teste que verifica o comportamento correto dessa função. 

const retornaEmOrdem = (arr) => {
    return arr.sort()
}

test('Verifica ordenação em ordem alfabetica', () => {
    expect(retornaEmOrdem(["Janeiro", "Fevereiro", "Março"])).toStrictEqual(["Fevereiro", "Janeiro", "Março"])
})

// 3 - Crie uma função que receba uma string e conte quantas vogais ela possui. Após, crie um teste que verifica o comportamento correto dessa função.

const quantasVogais = (str) => {
    str = str.toLowerCase()
    let c = 0
    const letras = str.split('')
    letras.map((letra) => {
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            c++
        }
    })
    return c;
}

test("Verifica quantidade de vogais na palavra", () => {
    expect(quantasVogais("Arte")).toBe(2);
})