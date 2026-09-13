export class Equipamento {
    private nome: string;
    private damage?: number;

    constructor(nome: string, damage?: number) {
        this.nome = nome;
        this.damage = damage
    }

    public getNome(): string {
        return this.nome
    }
}