## cardValidator

Esta biblioteca tem a funcionalidade de validar o número de cartões de crédito, para uso em aplicações web.

# Como instalar:
  $  npm install amf-credit-card
  
# Como utilizar:
  const creditCard = require("amf-credit-card");
  console.log(creditCard.cardValidator(00000000000)) 
  
# Funcionalidades:
Checa se um número de cartão de crédito é válido através do algoritmo de Luhn (utilizando regra matemática específica) e retorna true ou false de acordo com o caso.
