"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Berserker = void 0;
const Auxiliares_1 = require("../auxiliares/Auxiliares");
class Berserker {
    constructor(inventario, equipamento) {
        this.nome = 'Ragnar';
        this.classe = 'Berserker';
        this.vida = 130;
        this.ataque = 35;
        this.defesa = 5;
        this.ouro = 5;
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
exports.Berserker = Berserker;
