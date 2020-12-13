var valores = [ 5 , 7 , 9 , 12 , 39];

function busca(num) {
    for (i=0; i<6; i++) {
        if (num == valores[i]) {
            return(i)
        }

    }
return -1
}

// usando ferramenta de busca

console.log(busca(12));
console.log(busca(7));
console.log(busca(4));