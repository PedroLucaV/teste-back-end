import { divisao, cursos, influencer, maxAlunos } from "./index.js";

test("Verifica se o segundo argumento é 0", () => {
    expect(() => divisao(1, 0)).toThrow(Error)
    expect(() => divisao(1, 0)).toThrow("Não é possivel realizar uma divisão por 0")
})

test("Verifica se o curso de soldagem está ativo", () => {
    expect(cursos).toContain("Soldagem")
})

//verifica propriedade de objeto
test("Verifica se a propriedade tigrinho existe", () => {
    expect(influencer).not.toHaveProperty("tigrinho")
    expect(influencer).toHaveProperty("mitinho")
    expect(influencer).toHaveProperty("endereco.cidade")
})

test("Verifica se está no máximo", () => {
    expect(maxAlunos).toBeGreaterThan(10)
    expect(maxAlunos).toBeLessThan(50)
})