<?php

/* Codigo para verificação de email enviado 
Erasmo Cardoso */

// readline     
$readline = readline("Digite o código: ");

//funções  
function gerarCodigo()
{
    $letrasNumeros = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $codigo = '';

    for ($i = 0; $i < 4; $i++) {
        $codigo .= $letrasNumeros[rand(0, strlen($letrasNumeros) - 1)];
    }

    return $codigo;
}
//variavel recebe codigo gerado aqui devera ser implantado envio do codigo por email para o cliente 
$codigo = gerarCodigo();
echo "Código gerado: " . $codigo . PHP_EOL;

//esta entrada da confirmação 
if ($codigo === $readline) {
    echo "Acesso Garantido" . PHP_EOL;
} else {
    echo "Acesso Negado tente novamente" . PHP_EOL;
}