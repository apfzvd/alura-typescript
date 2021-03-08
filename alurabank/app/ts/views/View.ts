export abstract class View<T> { // asbtract classes are only for inheritance
    private _elemento: JQuery;
    
    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    update(data: T): void {
        this._elemento.html(this.template(data));
    }

    abstract template(model: T): string;
}