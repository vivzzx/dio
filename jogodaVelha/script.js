let jogador, vencedor = null
let jogadorSelecionado = document.getElementById('jogador-selecionado')
let vencedorSelecionado = document.getElementById('vencedor-selecionado')

mudarJogador('x')

const escolherQuadrado = (id) => {

    if (vencedor !== null) {
        return
    }


    let quadrado = document.getElementById(id)
    if (quadrado.innerHTML !== '-') {
        return
    } 
    quadrado.innerHTML = jogador
    quadrado.style.color = '#000'

    jogador === 'x' ? jogador = 'o' : jogador = 'x'
    mudarJogador(jogador)
    checaVencedor()
}

function mudarJogador (valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checaVencedor () {
    let q1 = document.getElementById('1')
    let q2 = document.getElementById('2')
    let q3 = document.getElementById('3')
    let q4 = document.getElementById('4')
    let q5 = document.getElementById('5')
    let q6 = document.getElementById('6')
    let q7 = document.getElementById('7')
    let q8 = document.getElementById('8')
    let q9 = document.getElementById('9')

    //horizontais
    if (checaSequencia(q1, q2, q3)) {
        mudarVencedor(q1)
        return
    } 
    if (checaSequencia(q4, q5, q6)) {
        mudarVencedor(q4)
        return
    } 
    if (checaSequencia(q7, q8, q9)) {
        mudarVencedor(q7)
        return
    } 
    //verticais
    if (checaSequencia(q1, q4, q7)) {
        mudarVencedor(q1)
        return
    } 
    if (checaSequencia(q2, q5, q8)) {
        mudarVencedor(q2)
        return
    } 
    if (checaSequencia(q3, q6, q9)) {
        mudarVencedor(q3)
        return
    } 
    //diagonais
    if (checaSequencia(q1, q5, q9)) {
        mudarVencedor(q1)
        return
    } 
    if (checaSequencia(q3, q5, q7)) {
        mudarVencedor(q3)
    } 
}

function checaSequencia(q1, q2, q3) {
    let ehIgual = false
    if (q1.innerHTML !== '-' && q1.innerHTML === q2.innerHTML && q2.innerHTML === q3.innerHTML) {
        q1.style.background = '#FFD124'
        q2.style.background = '#FFD124'
        q3.style.background = '#FFD124'
        ehIgual = true
        console.log('vencedor')
    }
    return ehIgual
}

function mudarVencedor(q) {
    vencedor = q.innerHTML
    vencedorSelecionado.innerHTML = vencedor
}

/* function mudaCorQuadrado(q1, q2, q3) {
    q1.style.color = '#0f0'
    q2.style.color = '#0f0'
    q3.style.color = '#0f0'
} */

function reiniciar() {
    vencedor = null
    vencedorSelecionado.innerHTML = ''

    for (let i = 1; i <= 9; i++) {
        let quadrado = document.getElementById(i)
        quadrado.innerHTML = '-'
        quadrado.style.background = ''
        quadrado.style.color = 'transparent'
    }

    mudarJogador('x')
}
