/*
Desafio 1

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";

*/

//Solução Proposta

let employee: {code: number, name: string} = {
    code: 10,
    name: "John"
}

interface Funcionário {
    name: string,
    code: number
}

console.log(employee);
