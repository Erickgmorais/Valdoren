import { Equipamento } from "./Equipamentos";

export class Inventario {
    private itens: Equipamento[];

    constructor(itens: Equipamento[]) {
        this.itens = itens
    }

    public getItens(): Equipamento[] {
        return this.itens;
    }
}