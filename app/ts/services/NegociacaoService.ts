import { Negociacao, NegociacaoParcial } from "../models/index";
import { Api } from "./Api";

export class NegociacaoService extends Api {
  importData(): Promise<Negociacao[]> {
    return this.fetch({
      url: 'http://localhost:8080/dados',
      success: (dados: NegociacaoParcial[]) => dados
        .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)),
      error: (err: Error) => {
        console.log(err);
        throw new Error('Não foi possível importar as negociações.')
      },
    })
  }
}