let opcao = parseInt(prompt("Digite a opção: \n [0] - Contador \n [1] - Somatório Acumulado \n [2] - Caixa de supermercado"))

switch (opcao) {
    /* EXERCICIO 1 */
    case 0:
        for (let index = 0; index <= 10 ; index++) {
            console.log(index)
        }
        break
    /* EXERCICIO 2 */
    case 1:
        soma = 0
        for (let index = 0; index <= 100; index++) {
            console.log(index)
            soma += index
        }
        console.log(soma)
        break
    /* EXERCICIO 3 */
    case 2:
        produto = 1
        soma = 0
        while (produto != 0) {
            produto = parseFloat(prompt("Insira o preço do produto [caso queira sair, digite 0]: "))
            soma += produto
        }
        console.log(soma - 1)
        break
    default:
        console.log("Não existe essa opção")
}

