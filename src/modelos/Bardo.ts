// Ele seria um enganador, caso escolhesse ele teriamos de escolhar continuar com o tesouro ou devolver.

import { logger } from "../auxiliares/Auxiliares";
import { Equipamento } from "../equipamentos/Equipamentos";
import { Inventario } from "../equipamentos/Inventario";
import { Personagem } from "../interfaces/Personagem";

export class Bardo implements Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    private ouro: number;
    private inventario: Inventario[];
    private equipamento: Equipamento[];

    constructor(inventario: Inventario[], equipamento: Equipamento[]) {
        this.nome = 'Bardo';
        this.classe = '';
        this.vida = 100;
        this.ataque = 15;
        this.defesa = 10;
        this.ouro = 25;
        this.inventario = inventario;
        this.equipamento = equipamento;
    }

    getNome(): string {
        return this.nome
    }

    getClasse(): string {
        return this.classe
    }

    getVida(): number {
        return this.vida
    }

    getAtaque(): number {
        return this.ataque
    }

    getDefesa(): number {
        return this.defesa
    }

    getOuro(): number {
        return this.ouro
    }


    fichaPersonagem(): void {
        logger(`
============================
        Personagem
============================

Nome: ${this.nome}
Classe: ${this.classe}

Vida: ${this.vida}/100
Ataque: ${this.ataque}
Defesa: ${this.defesa}
Ouro: ${this.ouro}

Equipamento(s): 
${this.equipamento.forEach((e, i) => {
    logger(i + 1 + ' - ' + e.getNome())
})}`);
    }
}