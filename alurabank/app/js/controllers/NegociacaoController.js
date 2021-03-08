System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, weekDays;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let date = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._isWeekDay(date)) {
                        this._mensagemView.update('Negociações não podem ser feitas no fim de semana!');
                        return;
                    }
                    const negociacao = new index_1.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada!');
                }
                _isWeekDay(date) {
                    return date.getDay() !== weekDays.Saturday && date.getDay() !== weekDays.Sunday;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (weekDays) {
                weekDays[weekDays["Sunday"] = 0] = "Sunday";
                weekDays[weekDays["Monday"] = 1] = "Monday";
                weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
                weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
                weekDays[weekDays["Thursday"] = 4] = "Thursday";
                weekDays[weekDays["Friday"] = 5] = "Friday";
                weekDays[weekDays["Saturday"] = 6] = "Saturday";
            })(weekDays || (weekDays = {}));
            ;
        }
    };
});
