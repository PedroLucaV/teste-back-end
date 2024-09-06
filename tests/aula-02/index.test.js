import { divisao } from "./index.js";

test("Verifica se o segundo argumento é 0", () => {
    expect(() => divisao(1, 0).toThrow(Error))
})