"use strict";
// Sua arma tem um dano maior que os outros, e consegue carregar mais equipamentos.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cacador = void 0;
const Auxiliares_1 = require("../auxiliares/Auxiliares");
class Cacador {
    constructor(inventario, equipamento) {
        this.nome = 'Kaelen';
        this.classe = 'Cacador';
        this.vida = 100;
        this.ataque = 25;
        this.defesa = 12;
        this.ouro = 20;
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
exports.Cacador = Cacador;
