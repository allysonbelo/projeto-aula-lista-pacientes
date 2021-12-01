var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    var validacao = true

    if (!pesoEhValido) {
        pesoEhValido = false
        tdImc.textContent = "Peso inválido!"
        paciente.classList.toggle("paciente-invalido")
    }

    if (!alturaEhValido) {
        alturaEhValido = false
        tdImc.textContent = "Altura inválido!"
        paciente.classList.toggle("paciente-invalido")
    }

    if (pesoEhValido && alturaEhValido) {
        var imc = calcularImc(peso, altura)
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >=0 && peso < 1000){
        return true
    } else{
        return false
    }
}

function validaAltura(altura){
    if(altura >=0 && altura < 3){
        return true
    } else {
        return false
    }
}

function calcularImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}


