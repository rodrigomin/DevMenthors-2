const feedback = {
    enzo: {
        nome: "Enzo Takaku",
        paragrafo: "O DevMenthor pra mim foi uma chave que abriu minha mente, eu não queria trabalhar na área de programação, mas decidi entrar no Dev pra ver como era e me interessei muito em programar e aprender sempre mais, quando ja havia se passado um ano e começamos a dar aulas para outros alunos, vi que o Dev poderia abrir a mente de mais pessoas como eu.",
        img: "./assets/pessoas/enzo.jpeg"
    },
    marcos: {
        nome: "Marcos Gabriel",
        paragrafo: "Para mim, o Dev foi algo que mudou minha perspectiva de como é a dinâmica de estudos voltados a programação. A aprendizagem que tive com todos os envolvidos no projeto me fez desenvolver Hard e Soft skills que hoje fazem parte de quem eu sou e me ajudam a me destacar aonde eu vou.",
        img: "./assets/pessoas/marcos.jpg"
    },
    victor: {
        nome: "Victor Hugo",
        paragrafo: "Durante minha trajetória no DevMenthors, tive a oportunidade de aprender e trabalhar com diversas tecnologias, como Docker, Node.js e Flutter, áreas nas quais hoje tenho mais dedicação e familiaridade. Esse processo de evolução constante me levou a ser promovido a mentor, uma posição que me permitiu colaborar com alunos excepcionais.",
        img: "./assets/pessoas/enzo.jpeg"
    },
    julio: {
        nome: "Julio Gabriel",
        paragrafo: "O Dev foi um verdadeiro divisor de águas para mim, contribuindo não apenas no aprendizado, mas também em muitos outros aspectos da minha vida. Hoje, toda a base que tenho em programação foi construída graças ao Dev",
        img: "./assets/pessoas/julio.jpg"
    }
}


window.onload = () => {
    
    for (let i = 0; i < 2; i++) {
        for (const [nestedKey, value] of Object.entries(feedback)) { // n sei como funciona mas funciona
            const feedbackContainer = document.getElementById("feed-container")
            const feedbackContainer2 = document.getElementById("feed-container2")
            const feedCard = document.createElement("div")
            const img = document.createElement("img")
            const newDiv = document.createElement("div")
            const nome = document.createElement("h3")
            const paragraph = document.createElement("p")
            
            img.src = `${value.img}`
            img.style = "width: 100px; height: 100px; border-radius: 100%; aspect-ratio: 4/4"
            
            nome.innerHTML = `${value.nome}`
            paragraph.innerHTML = `${value.paragrafo}`
            
            feedCard.classList.add("feed-card")
            feedCard.classList.add("flex")
            feedCard.classList.add("flex-row")
            
            if (value.nome === "Julio Gabriel" || value.nome === "Victor Hugo") {
                feedbackContainer2.appendChild(feedCard)
            } else {
                feedbackContainer.appendChild(feedCard)
            }
            
            feedCard.appendChild(img)
            feedCard.appendChild(newDiv)
            newDiv.appendChild(nome)
            newDiv.appendChild(paragraph)
    }
    }


    const arrows = document.querySelectorAll(".arrow")
    const textsDuvidas = document.querySelectorAll(".texto-duvidas")

    arrows.forEach((arrow, index) => {
        arrow.addEventListener("click", () => {
            console.log("clicou na flecha n°", index)
            arrow.classList.toggle("arrow-clicked")
            console.log(textsDuvidas[index])
            textsDuvidas[index].classList.toggle('texto-duvidas-before')
        })
    })

}