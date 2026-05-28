import { Verbo } from './verbo';

export interface Tema {
id: number;
nombre: string;
explicacion: string;

tipo: 'tabla' | 'ejemplos' | 'vocabulario';

tabla?: Verbo[];
ejemplos?: string[];
vocabulario?: string[];


}
