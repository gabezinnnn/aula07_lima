const cadastro = document.getElementById('cadastro')
const cancelar = document.getElementById('cancelar')
const modal = document.getElementById('modalCadastro')
const form = document.getElementById('form')
const games= document.getElementById('lista-games')
const mensagemPaiado = document.getElementById('mensagemPaiado')

cadastro.addEventListener('click', () => {
    modal.showModal()
})

cancelar.addEventListener('click', () => {
    modal.close()
})

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const titulo = document.getElementById('titulo').value.trim()
    const console = document.getElementById('console').value.trim()
    const desen = document.getElementById('desen').value.trim()
    const imagem = document.getElementById('imagem').value.trim()
    const preco = Number(document.getElementById('preco').value)

    criarCard(titulo, console, desen, imagem, preco)
    form.reset()
    modal.close()
})

function criarCard(titulo, console, desen, imagem, preco) {
    mensagemPaiado.hidden = true

    const card = document.createElement('article')
    card.classList.add('card-game')

    const capa = document.createElement('div')
    capa.classList.add('capa')

    const imagemCapa = document.createElement('img')
    imagemCapa.src = imagem
    capa.appendChild(imagemCapa)

    const info = document.createElement('div')
    info.classList.add('info-game')

    const textoTitulo = document.createElement('h3')
    textoTitulo.textContent = titulo

    const nomeconsole = document.createElement('p')
    nomeconsole.textContent = "Console: " + console

    const nomedesen = document.createElement('p')
    nomedesen.textContent = "Gênero: " + desen

    const valor = document.createElement('strong')
    valor.classList.add("preco")
    valor.textContent = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    info.append(textoTitulo, nomeconsole, nomedesen, valor)
    card.append(capa, info)
    games.append(card)
}   