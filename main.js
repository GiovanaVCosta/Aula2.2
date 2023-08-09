'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')


function trocarCor(){
    forma1.classList.toggle('amarelo')
}
function trocarForma(){
    forma2.classList.toggle('circulo')
}
function trocarLugar(){
    forma3.classList.toggle('lugar')
}
function sumir(){
    forma4.classList.toggle('sumir')
}
function rodar(){
    forma5.classList.toggle('rodar')
}
function trocarPosicao(){
    forma6.classList.toggle('pular')
}
function movimento(){
    forma7.classList.toggle('movimentar')
}

forma1.addEventListener('click', trocarCor )
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', trocarLugar)
forma4.addEventListener('click', sumir)
forma5.addEventListener('click', rodar)
forma6.addEventListener('click', trocarPosicao)
forma7.addEventListener('click', movimento)