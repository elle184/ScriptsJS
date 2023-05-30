class Category extends Sortable {

    constructor(id, name) {
       super(id);
        this.name = name;
    }

    set name(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}