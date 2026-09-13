"use strict";
// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bardo = void 0;
const Auxiliares_1 = require("../auxiliares/Auxiliares");
class Bardo {
    constructor(inventario, equipamento) {
        this.nome = 'Lucio Harmonia';
        this.classe = 'Bardo';
        this.vida = 90;
        this.ataque = 12;
        this.defesa = 8;
        this.ouro = 50;
        this.inventario = inventario;
        this.equipamento = equipamento;
    }
    getNome() {
        return this.nome;
    }
    getClasse() {
        return this.classe;
    }
    getVida() {
        return this.vida;
    }
    getAtaque() {
        return this.ataque;
    }
    getDefesa() {
        return this.defesa;
    }
    getOuro() {
        return this.ouro;
    }
    fichaPersonagem() {
        (0, Auxiliares_1.logger)(`
============================
        Personagem
============================

Nome: ${this.nome}
Classe: ${this.classe}

Vida: ${this.vida}/100
Ataque: ${this.ataque}
Defesa: ${this.defesa}
Ouro: ${this.ouro}

Equipamento(s):`);
        this.equipamento.forEach((e, i) => {
            (0, Auxiliares_1.logger)(i + 1 + ' - ' + e.getNome());
        });
    }
}
exports.Bardo = Bardo;
