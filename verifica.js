/* Codigo para verificação de email enviado 
        Erasmo Cardoso */

 // readline     
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

//funções  
 function gerarCodigo() {
    const letrasNumeros = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let codigo = '';
    
    for (let i = 0; i < 4; i++) {
      codigo += letrasNumeros.charAt(Math.floor(Math.random() * letrasNumeros.length));
    }
  
    return codigo;
  }
 //variavel recebe codigo gerado aqui devera ser implantado envio do codigo por email para o cliente 
  const codigo = gerarCodigo();
  console.log('Código gerado:', codigo);
 
  //esta entrada da confirmação 
  readline.question('Digite o codigo : ', input => {
    const veri_email = input;
  //Acesso
    if (codigo === veri_email){
      console.log('Acesso Garantido');
    } else {
      console.log('Acesso Negado tente novamente');
    }
  
    readline.close();
  });
  