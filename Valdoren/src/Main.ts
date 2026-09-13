import { logger } from "./auxiliares/Auxiliares";
import { Equipamento } from "./equipamentos/Equipamentos";
import { Inventario } from "./equipamentos/Inventario";
import { Personagem } from "./interfaces/Personagem";
import { Bardo } from "./modelos/Bardo";
import { Berserker } from "./modelos/Berserker";
import { Clerigo } from "./modelos/Clerigo";


const personagens: Personagem[] = [];
const arrayEquipamentos: Equipamento[] = []; 

const inventario: Inventario[] = [];
const equip: Equipamento = new Equipamento('AK-47', 45);
const equip2: Equipamento = new Equipamento('GLOCK', 25);

arrayEquipamentos.push(equip)
arrayEquipamentos.push(equip2);

const ragnar: Berserker = new Berserker(inventario, arrayEquipamentos);
const lucio: Bardo = new Bardo(inventario, arrayEquipamentos);
const elowen: Clerigo = new Clerigo(inventario, arrayEquipamentos);

personagens.push(ragnar);
personagens.push(lucio);
personagens.push(elowen);

personagens.forEach(p => {
    p.fichaPersonagem();
});

