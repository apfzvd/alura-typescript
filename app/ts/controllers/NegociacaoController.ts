import { throttle, domInject } from "../helpers/decorators/index";
import { imprime } from "../helpers/index";
import { Negociacao, NegociacaoParcial, Negociacoes } from "../models/index";
import { NegociacaoService } from "../services/NegociacaoService";
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

    private _service = new NegociacaoService();

    constructor() {
        this._negociacoesView.update(this._negociacoes);
    }

    @throttle()
    adiciona(): void {
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
        this._mensagemView.update('Negociação adicionada!');

        imprime(negociacao, this._negociacoes);
    }

    private _isWeekDay(date: Date):boolean {
        return date.getDay() !== weekDays.Saturday && date.getDay() !== weekDays.Sunday;
    }

    @throttle()
    async importData(): Promise<any> {
        try {
            const imported = await this._service.importData();
            const negociacoesJaImportadas = this._negociacoes.paraArray();

            imported
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada))) // filtrar apenas as que não tem nenhuma igual
                .forEach(neg => this._negociacoes.adiciona(neg));
            
                this._negociacoesView.update(this._negociacoes); 
        } catch (err) {
            this._mensagemView.update(err.message);
        }     
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