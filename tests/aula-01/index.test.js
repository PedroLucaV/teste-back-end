import { areaQuadrado, listaFruta } from "./index.js";

test("Verifica area do quadrado", () => {
    expect(areaQuadrado(5, 5)).toBe(25);
})

test("Compara String", () => {
    expect("Pedro").toBe("Pedro")
    expect("Pedro").not.toBe("lucas")
    expect("Pedro").toEqual("Pedro") //analisa mais profundo (Objeto, Array e etc)
})

test("Verifica se tem Umbu", () => {
    expect(listaFruta()).toContain("Umbu")
})