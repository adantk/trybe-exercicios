/* O fatorial é representado pelo sinal ! */
/*  Ex: 4! = 4 x 3 x 2 x 1 = 24
 */
/* 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = */

/* const n = 5
let resultado = 0;
for (let i = 0; i <= n; i += 1) {
    resultado =+i;
}
console.log(resultado); */
 /* Exercicio 1  */
/* let fatorial = 10;
let resultado = fatorial;
for (let i = 1; i < fatorial; i++) {
    resultado *= i;
}
console.log(resultado); */




/* Exercicio 2 */ 
/* function reverse(s){
    return s.split("").reverse().join("");
}

var sss = reverse("trybe")
console.log(sss)
 */

Exercicio 3 
let array = ['java', 'javascript', 'python', 'html', 'css'];
let menorPalavra = array.split('');
console.log( typeof(menorPalavra))
Array.min = function ( menorPalavra) {
    return Math.min.apply(Math, menorPalavra);
    console.log(Array.min(menorPalavra))
};
console.log(Array.min(menorPalavra))

