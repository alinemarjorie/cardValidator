let chai = require("chai");
let expect = chai.expect;
let creditCard = require("../lib/index.js");

describe('Verificar se o cartão é válido e retorna true se for', () => {
   it('Retornar true para um cartão de crédito válido (5202055631169801)', () => {
       expect(creditCard.cardValidator(5202055631169801)).to.equal(true);
   })
})

describe('Verificar se o cartão é válido e retorna true se não for', () => {
    it('Retornar false para um cartão de crédito inválido (1234214235436693)', () => {
        expect(creditCard.cardValidator(1234214235436693)).to.equal(false);
    })
    it('Retornar false caso todos os números sejam iguais (0000000000000000)', () => {
        expect(creditCard.cardValidator(0000000000000000)).to.equal(false);
    })
})

