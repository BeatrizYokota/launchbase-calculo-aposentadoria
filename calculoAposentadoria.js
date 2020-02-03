const nome = 'Juan';
const sexo = 'F';
const idade = 22;
const contribuicao = 63;
const soma = idade + contribuicao;

// Resolução 1
if(sexo == 'M' && soma >= 95){
    console.log(`${nome}, você pode se aposentar!`)
} else{
    if(soma >= 85){
        console.log(`${nome}, você pode se aposentar!`) 
    }else{
        console.log(`${nome}, você não pode se aposentar!`)
    }
}

// Resolução 2
if ((sexo == 'M' && soma >= 95) || (sexo == 'F' && soma >= 85)) {
    console.log(`${nome}, você pode se aposentar!`)
} else {
    console.log(`${nome}, você não pode se aposentar!`)
}

// Resolução 3
let message = `${nome}, você não pode se aposentar!`

if ((sexo == 'M' && soma >= 95) || (sexo == 'F' && soma >= 85)) {
    message = `${nome}, você pode se aposentar!`
}

console.log(message)


