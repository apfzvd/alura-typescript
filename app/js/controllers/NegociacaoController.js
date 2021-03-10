System.register(["../helpers/decorators/dom-inject", "../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var dom_inject_1, index_1, index_2, NegociacaoController, weekDays;
    return {
        setters: [
            function (dom_inject_1_1) {
                dom_inject_1 = dom_inject_1_1;
            },
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
            __decorate([
                dom_inject_1.domInject('#data')
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                dom_inject_1.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                dom_inject_1.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
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
