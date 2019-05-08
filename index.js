function cardValidator(card) {
  const creditCard = card.toString().split('');
  if (creditCard.every((num) => num === creditCard[0])) {
    return false;
  } return testCard(creditCard);
}
function testCard(arrayCard) {
  const validate = arrayCard
    .reverse()
    .map((num) => parseInt(num, 10))
    .map((num, idx) => idx % 2 ? num * 2 : num)
    .map((num) => num > 9 ? (num % 10) + 1 : num)
    .reduce((accum, num) => accum += num) % 10 === 0;
  return validate;
}
module.exports.cardValidator = cardValidator;
