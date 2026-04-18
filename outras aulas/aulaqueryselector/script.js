onload = () => {
    const form = document.querySelector('form')

    const aluno = document.getElementById('aluno')
    const mentor = document.getElementById('mentor')

    const dispAluno = document.getElementById('dispaluno')
    const dispMentor = document.getElementById('dispmentor')

    console.log(form)

    aluno.addEventListener('click', (e) => {
        if (!aluno.classList.contains('switch-optn-aluno')) {
            mentor.classList.remove('switch-optn-mentor')
            aluno.classList.add('switch-optn-aluno')
            dispMentor.classList.toggle('noview')

            dispAluno.classList.add('aparecer')
            dispMentor.classList.add('aparecer')

            dispAluno.classList.toggle('noview')
            

        }
    })

    mentor.addEventListener('click', (e) => {
        if (!mentor.classList.contains('switch-optn-mentor')) {
            aluno.classList.remove('switch-optn-aluno')
            mentor.classList.add('switch-optn-mentor')
            dispAluno.classList.toggle('noview')

            dispMentor.classList.add('aparecer')
            dispAluno.classList.add('aparecer')
            
            dispMentor.classList.toggle('noview')


        }
    })

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form)
        const dados = Object.fromEntries(formData)
        
        if (dados.user != 'admistracao@devmenthors.com.br' && dados.senha != 'DevMenthors2026') {
            alert("Credenciais inválidas")
            return false
        } else {
            alert("Logado")
        }
    });
}

