import { Respuesta } from "./Respuesta";

export interface Pregunta {
    examenID : number;
    preguntaID: number;
    pregunta: string;
    respuestas: Array<Respuesta> | [];
}