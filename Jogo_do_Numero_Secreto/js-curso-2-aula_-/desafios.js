// Desafios da Aula 02 - Funções

//Exercicio 01 - Criar uma função que exibe "Olá, mundo!" no console.
//function dizerOla (){
//    console.log('Olá, Mundo!')

//};
//dizerOla();

//Exercicio 02 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
//function comprimentar(nome){
//    console.log(`Olá ${nome}`);
//};

//comprimentar('Douglas Passarelli Cardoso');

//Exercicio 03 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
//function dobro(num){
//    num += num;
//    return num;
//};

//console.log(dobro(8));

//Exercicio 04 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
//function media(num1, num2, num3){
//    let mediatotal = (num1 + num2 + num3) / 3;
//    return mediatotal;
//};
//console.log(`Media: ${media(10, 10, 10).toFixed(1)}`);

//Exercicio 05 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
//function maiorNumero(num1, num2){
//    if (num1 > num2){
//       console.log(`O numero ${num1} é maior que ${num2}`);
//    } else {
//       console.log(`O numero ${num2} é maior que ${num1}`);
//    };
//};
//maiorNumero(5, 6);

//Exercicio 06 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
//function multEleMesmo(num){
//    num *= num;
//    return num
//};

//console.log(multEleMesmo(9));

//Aula 03 
//Exercicio 01 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

//function calculoIMC(altura, peso){
//    result = peso / (altura * altura);
//    return result
//};

//let peso = parseInt(prompt('Informe o pese: '))
//let altura = parseFloat(prompt('Informa a altura(em metros com virgula):'))
//let imc = (calculoIMC(altura,peso).toFixed(1));
//if (imc < 18.5){
//    console.log('Abaixo do peso')
//}else if ( imc < 24.9){
//    console.log('Peso ideal')
//} else if (imc < 29.9){
//   console.log('Levemente acima do peso')
//} else if(imc < 34.9){
//    console.log('Obesidade grau 1')
//} else if(imc < 39.9){
//    console.log('Obesidade grau 2')
//} else {
//    console.log('Obesidate grau 3')
//};

//Exercicio 02 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
//function calculoFatorial(num){
//    contador = 1
//    while (num >= 1){
//        if(contador == 1){
//            fatorial = num * (num -1)
//            num -= 2
//           console.log(fatorial)
//        } else{
//            fatorial = fatorial * num;
//            num -= 1
//            console.log(fatorial)
//        };
//        contador += 1
//    };
//    return fatorial;
//};
//
//let numero = parseInt(prompt('Digite o numero para calcular o fatorial: '));
//console.log(`O fatorial de ${numero} é ${calculoFatorial(numero)}!`);

//Exercicio 03 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

//function conversorMoedas(valor){
//    let cotacao = 4.80;
//    result = valor * cotacao;
//    return result;
//};

//let valor = parseFloat(prompt('Digite o valor em dolar U$ que queira converter para real R$'));
//console.log(`O valor de U$${valor.toFixed(2)} dolar convertido para reais ficara em torno de R$${conversorMoedas(valor).toFixed(2)} reais.`);

//Exercicio 04 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

//function calculoAreaPerimetro(alt, larg){
//    area = alt * larg;
//    perimetro = 2 * (alt + larg);
//    console.log(`A sala tem uma area de ${area}m², E um perimetro de ${perimetro}m²`);
//};

//let altura = parseFloat(prompt('Digite a altura de sua sala: '))
//let largura = parseFloat(prompt('Digite a largura de sua sala: '))

//calculoAreaPerimetro(altura,largura);

//Exercicio 05 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

//let pi = 3.14
//function calculoAreaPerimetroCircular(r){
//    perimetro = 2 * pi * r;
//    area = pi * (r ** 2)
//    console.log(`A area da sala circular e de ${area.toFixed(2)}m² e o perimetro e de ${perimetro.toFixed(2)}m²`)
//};

//let raio = parseFloat(prompt('Informe o raio para calcular a area e o perimetro de uma sala circular: '))
//calculoAreaPerimetroCircular(raio);

//Exercicio 06 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

//function tabuada(num){
//    let contador = 1;
//    while(contador <= 10){
//        console.log(`${num} X ${contador} = ${num * contador}`);
//        contador += 1
//    };
//    console.log('Fim');
//};

//let numero = parseInt(prompt('Digite um numero que queira ver a tabuada: '));
//tabuada(numero);

//Desafios Aula 04 - Listas

//Exercicio 01 - Crie uma lista vazia, com o nome listaGenerica.
//let listaGenerica = [];

//Exercicio 02 - Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
//let linguagensDeProgamacao = ['JavsScript', 'C', 'C++', 'Kotlin', 'Python'];

//Exercicio 03 - Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
//let linguagensDeProgamacao = ['JavsScript', 'C', 'C++', 'Kotlin', 'Python'];
//linguagensDeProgamacao.push('Java', 'Ruby', 'GoLang');
//console.log(linguagensDeProgamacao);

//Exercicio 04 - Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
//let listaDeNome = ['Douglas', 'Diego', 'Roselaine'];
//console.log(listaDeNome[0]);

//Exercicio 05 - Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
//let listaDeNome = ['Douglas', 'Diego', 'Roselaine'];
//console.log(listaDeNome[1]);

//Exercicio 06 - Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
//let listaDeNome = ['Douglas', 'Diego', 'Roselaine'];
//console.log(listaDeNome[2]);