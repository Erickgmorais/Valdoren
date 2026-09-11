export interface Personagem {
    getNome(): string;
    getClasse(): string;
    getVida(): number;
    getAtaque(): number;
    getDefesa(): number;
    getOuro(): number;
    fichaPersonagem(): void;
}