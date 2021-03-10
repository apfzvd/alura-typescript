import { domInject } from "../helpers/decorators/dom-inject";
import { Negociacao, Negociacoes } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";

export class NegociacaoController {
    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes(); // private _negociacoes:Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {
        event.preventDefault();
        let date = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._isWeekDay(date)) {
            this._mensagemView.update('Negociações não podem ser feitas no fim de semana!');
            return;
        }

        const negociacao = new Negociacao(
            date, 
            parseInt(this._inputQuantidade.val()), 
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada!')
    }

    private _isWeekDay(date: Date):boolean {
        return date.getDay() !== weekDays.Saturday && date.getDay() !== weekDays.Sunday;
    }
}

enum weekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
};