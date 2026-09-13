"use strict";
// Não tira vidas, usa tecnicas para incapacitar inimigos. Podemos pensar nessa ideia, que, caso escolha
//ele não poderá tirar vidas. 
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavaleiro = void 0;
const Auxiliares_1 = require("../auxiliares/Auxiliares");
class Cavaleiro {
    constructor(inventario, equipamento) {
        this.nome = 'Valerian';
        this.classe = 'Cavaleiro';
        this.vida = 120;
        this.ataque = 18;
        this.defesa = 20;
        this.ouro = 15;
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
exports.Cavaleiro = Cavaleiro;
