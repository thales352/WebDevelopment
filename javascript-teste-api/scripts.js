const URL ='https://api.thecatapi.com/v1/images/search'
const imagem = document.getElementById("img")
const botao = document.getElementById("btn")

async function trocarImagem() {
    const response = await fetch(URL)
    const jsonFile = await response.json()
    imagem.src = jsonFile[0].url
}

botao.addEventListener('click',trocarImagem)
trocarImagem()