class Negociacoes {
    // private _negociacoes: Array<Negociacao> = [];
    // mesma coisa que:
    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return [...this._negociacoes];
    }
}