export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    // constructor(data: Date, quantidade: number, valor: number) {
    //     this._data = data;
    //     this._quantidade = quantidade;
    //     this._valor = valor;
    // }

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {}
    // corta caminho na definição da prop na classe e o assign do constructor

    get volume(): number {
        return this.valor * this.quantidade;
    }
}