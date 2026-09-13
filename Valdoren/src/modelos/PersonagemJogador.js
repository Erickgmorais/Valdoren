"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonagemJogador = void 0;
const Auxiliares_1 = require("../auxiliares/Auxiliares");
class PersonagemJogador {
    constructor(nome, classe, vida, ataque, defesa, ouro, inventario, equipamento) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ouro = ouro;
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
exports.PersonagemJogador = PersonagemJogador;
//Não permitir criar com atributos muito fortes.
