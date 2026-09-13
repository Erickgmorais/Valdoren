"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Equipamento = void 0;
class Equipamento {
    constructor(nome, damage) {
        this.nome = nome;
        this.damage = damage;
    }
    getNome() {
        return this.nome;
    }
}
exports.Equipamento = Equipamento;
