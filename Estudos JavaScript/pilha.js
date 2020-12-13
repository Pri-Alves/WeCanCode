var elementos = [];
var topo      = -1;
const max     = 10;

function push (num) {

    if (topo < max) {
        topo = topo + 1
        elementos[topo] = num;
    }
    else {
        console.log("Pilha esta cheia");
    }
}

function estavazia() {
    return topo == -1
}

function pop () {
    if ( topo != -1) {
        let num = elementos[topo]
        topo = topo - 1;
        return num;
    }
    else {
        console.log("Pilha esta vazia");
    }
}

// -- parte do codigo que usa a pilha -- //

//push (10);
//push (20);
//push (30);

//console.log(elementos)

//console.log(pop());
//console.log(pop());
//console.log(pop());

// -- Numero binario a partir de um numero decimal -- //

var numdecimal = 10;
var resto;

console.log("Hora de empilhar ....")
while (numdecimal !=0) {
    resto = parseInt(numdecimal % 2);
    push(resto);
    console.log(resto);
    numdecimal = parseInt(numdecimal/2)
}

console.log ("Desempilhando tudooooo ...")
while (!estavazia()) {
    console.log(pop());

}