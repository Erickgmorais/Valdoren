import { logger } from "../auxiliares/Auxiliares";
import { Equipamento } from "../equipamentos/Equipamentos";
import { Inventario } from "../equipamentos/Inventario";
import { Personagem } from "../interfaces/Personagem";

export class Berserker implements Personagem {
    private nome: string;
    private classe: string;
    private vida: number;
    private ataque: number;
    private defesa: number;
    private ouro: number;
    private inventario: Inventario[];
    private equipamento: Equipamento[];

    constructor(inventario: Inventario[], equipamento: Equipamento[]) {
        this.nome = 'Ragnar';
        this.classe = 'Berserker';
        this.vida = 130;
        this.ataque = 35;
        this.defesa = 5;
        this.ouro = 5;
        this.inventario = inventario;
        this.equipamento = equipamento;
    }
    
    public getNome(): string {
        return this.nome
    }

    public getClasse(): string {
        return this.classe
    }

    public getVida(): number {
        return this.vida
    }

    public getAtaque(): number {
        return this.ataque
    }

    public getDefesa(): number {
        return this.defesa
    }

    public getOuro(): number {
        return this.ouro
    }


    public fichaPersonagem(): void {
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

Equipamento(s):`)
    this.equipamento.forEach((e, i) => {
    logger(i + 1 + ' - ' + e.getNome());
    });

    }
}