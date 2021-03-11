export interface Imprimivel {
    paraTexto: () => void;
}

export interface Igualavel<T> {
    ehIgual(objeto: T): boolean
}

export interface ClassUtils<T> extends Imprimivel, Igualavel<T> {

}

export function imprime(...objects: Imprimivel[]) {
    objects.forEach((negociacao) => negociacao.paraTexto());
}