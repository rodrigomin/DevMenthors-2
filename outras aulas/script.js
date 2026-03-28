
window.onload = () => {
    const inputs = Array.from(document.querySelectorAll('input'))
    const submit = document.getElementById("submit")

    submit.addEventListener("click", () => {

        let media_ = 0
        let notas = []

        atribuirNotas = () => inputs.map((input, index) => {
                if (input.value == '' || input.value === undefined) {
                    if (input.value > 10 || input.value < 0) {
                        return "ERRO: Nota inválida"
                    } else {

                        notas.push(parseFloat(input.value))
                    
                        media_ += parseFloat(input.value)

                        return media_
                    }
                }
                
      
        })

        let func = atribuirNotas()

        console.log(typeof(func[notas.length - 1]))
        console.log(notas.length)
        console.log(func)

        if (typeof(func[notas.length - 1]) != "number" || notas.length < 3) {
            console.error(func[2])
        } else {
            media_ = media_ / notas.length
            console.log("Media: ", media_)
            console.log("Notas Largura: ", notas.length)
            console.log("Notas: ", notas)
        }
        

    })
    
}


// let nota1 = parseFloat(prompt('Escreva a primeira nota: '))
// let nota2 = parseFloat(prompt('Escreva a segunda nota: '))
// let nota3 = parseFloat(prompt('Escreva a terceira nota: '))
// let media = (nota1 + nota2 + nota3) / 3
// 
// console.log(nota1, nota2, nota3, " e a média de todas as notas é ", media)

