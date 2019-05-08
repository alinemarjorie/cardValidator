const { expect } = require('chai');
const { cardValidator } = require('../index.js');

describe('Verificar se o cartão é válido e retorna true se for', () => {
   it('Retornar true para um cartão de crédito válido (5202055631169801)', () => {
       expect(cardValidator(5202055631169801)).to.equal(true);
   });
});

describe('Verificar se o cartão é válido e retorna true se não for', () => {
    it('Retornar false para um cartão de crédito inválido (1234214235436693)', () => {
        expect(cardValidator(1234214235436693)).to.equal(false);
    });
    it('Retornar false caso todos os números sejam iguais (3333333333333333)', () => {
        expect(cardValidator(3333333333333333)).to.equal(false);
    });
});

