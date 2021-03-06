import { Imprimivel } from "../helpers/index";
import { Negociacao } from "./Negociacao";

export class Negociacoes implements Imprimivel {
    // private _negociacoes: Array<Negociacao> = [];
    // mesma coisa que:
    private _negociacoes: Negociacao[] = [];
    
    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }
    
    paraArray(): Negociacao[] {
        // return ([] as Negociacao[]).concat(this._negociacoes);
        // return (<Negociacao[]>[]).concat(this._negociacoes);
        return [...this._negociacoes];
    }

    paraTexto(): void {

        console.log('-- paraTexto --');
        console.log(JSON.stringify(this._negociacoes));
    }
}