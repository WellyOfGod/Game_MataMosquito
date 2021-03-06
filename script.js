var width = 0
var height = 0
var life = 1
var time = 15

var newFlyTime = 1500
var level = window.location.search
level = level.replace('?', '')

//Aplicando nível de dificuldade selecionado.
if (level == 'normal') {
    var newFlyTime = 1500
} else if (level == 'dificil') {
    var newFlyTime = 1000
} else if (level == 'chucknorris') {
    var newFlyTime = 750
}


//Ajusta tamanho palco baseado na largura e altura dá janela.
function adjustScreenGame() {
    width = window.innerWidth
    height = window.innerHeight
}
adjustScreenGame()

//Evento de click botão Iniciar Jogo
function StartGame() {
    var level = document.getElementById('level').value

    if (level == '') {
        alert('Selecione um nível para iniciar o jogo')
        return false
    }

    //Após selecionar o nivel e clicar em Jogar, retorna o nível como parametro da url.
    window.location.href = 'app.html?' + level
}

//Cronômetro
var timer = setInterval(function() {
    time -= 1
    if (time < 0) {

        //elimina a função da memória da aplicação.
        clearInterval(timer)

        //Para a criação do elemento fly.
        clearInterval(newFly)

        /*Recupera o objeto window, localiza o atributo href,
        redirecionando para a tela de Victory */
        window.location.href = 'victory.html'
    } else {
        document.getElementById('timer').innerHTML = time
    }
}, 1000)

function positionRandom() {
    //remove o mosquito(fly) anterior, caso exista.
    if (document.getElementById('fly')) {
        document.getElementById('fly').remove()

        //Estrutura de controle dos pontos de vida.
        if (life > 5) {
            /*Recupera o objeto window, localiza o atributo href,
            redirecionando para a tela de Game Over */
            window.location.href = 'game_over.html'
        } else {
            //recupera o elemento pelo id alterando a imagem de exibição.
            document.getElementById('life' + life).src = "imagens/life_empty.png"
            life++
        }
    }

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
    fly.id = 'fly'

    //Evento onclick afim de remover o elemento.
    fly.onclick = function() {
        this.remove()
    }

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