import { Pregunta } from "./Pregunta";


export interface Examen {
    examenID: number;
    titulo: string;
    codigo: number;
    fechaCreacion: Date; //o usa string
    preguntas: Array<Pregunta> | [];
}