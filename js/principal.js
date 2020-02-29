var titulo = document.querySelector(".titulo");
titulo.textContent= "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");


for (var i = 0; i < pacientes.length; i++){

    var paciente = pacientes [i];

    var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;
    
    var tdImc= paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000){
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00){
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener(click,function(event)){
    event.preventDefault();
}
        var form = document.querySelector ("#form-adiciona");
        var nome = form.nome.value;
        var peso = form.peso.value;
        var altura = form.altura.value;
        var gordura= form.gordura.value;
        var imcTd= document.createElement("td"); 
        
        var pacienteTr = document.createElement("tr");


    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent= altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTD);
    pacienteTr.appendChild(pesTD);
    pacienteTr.appendChild(alturaTD);
    pacienteTr.appendChild(gorduraTD);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);