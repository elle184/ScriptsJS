class Sortable {

    constructor(id) {
        this.id = id;
    }

    set id(id) {
        this._id = id;
    }

    get id() {
        return this._id;
    }
}