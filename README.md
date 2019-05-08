# cardValidator

Esta biblioteca tem a funcionalidade de validar o número de cartões de crédito, para uso em aplicações web.

## Como instalar:
  `$  npm i amf-card-validator`
    
## Como utilizar:
```
  const creditCard = require("amf-card-validator");
  console.log(creditCard.cardValidator(00000000000)) 
```

## Funcionalidades:
Checa se um número de cartão de crédito é válido através do algoritmo de Luhn (utilizando regra matemática específica) e retorna true ou false de acordo com o caso.
