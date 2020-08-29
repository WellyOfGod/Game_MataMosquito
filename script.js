var width = 0
var height = 0

//Ajusta tamanho palco baseado na largura e altura dá janela.
function adjustStageSize() {
    width = window.innerWidth
    height = window.innerHeight

}
adjustStageSize()

function positionRandom() {
    //Posição x e y gerada randomicamente, cujo limitante é adjustStageSize.
    var positionX = Math.floor(Math.random() * width) - 90
    var positionY = Math.floor(Math.random() * height) - 90

    //Controle para que o elemento não ultrapasse as extremidades da janela.
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    //Elemento html (img) criado dinamicamente
    var fly = document.createElement('img')

    //Passando o atribuido src
    fly.src = 'imagens/fly.png'

    //Setando a classe e lado randômica ao elemento.
    fly.className = randomSize() + ' ' + randomSide()

    //Vinculando o elemento na janela através das coordenadas dinamicas.
    fly.style.left = positionX + 'px'
    fly.style.top = positionY + 'px'
    fly.style.position = 'absolute'

    //Adicionando um filho ao body
    document.body.appendChild(fly)
}

//Criando tamanhos randômicos
function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'fly1'
        case 1:
            return 'fly2'
        case 2:
            return 'fly3'
    }
}

//Lado A e B na exibição do elemento
function randomSide() {
    var side = Math.floor(Math.random() * 2)

    switch (side) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}