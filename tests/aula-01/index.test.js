test("Verifica area do quadrado", () => {
    const areaQuadrado = (comprimento, largura) => {
        return comprimento * largura
    }

    expect(areaQuadrado(5, 5)).toBe(25);
})