class View {
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    update(data) {
        this._elemento.html(this.template(data));
    }
}
