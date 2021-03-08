export abstract class View<T> { // asbtract classes are only for inheritance
    private _elemento: JQuery;
    private _scape: boolean
    
    constructor(seletor: string, scape: boolean = false) {
        this._elemento = $(seletor);
        this._scape = scape;
    }

    update(data: T): void {
        let template = this.template(data);

        if (this._scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this._elemento.html(template);
    }

    abstract template(model: T): string;
}