let n = 5;
let linha = [];
for (let index = 0; index < n; index +=1) {    
    for (let i = 0; i < n; i++) {
        linha[i] = '*';
    }
    console.log(linha.join(''));
}