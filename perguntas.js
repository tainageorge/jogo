export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

import { aleatorio } from './aleatorio.js';
import { perguntas } from './perguntas.js';