/**
 * Class: Sortable
 * 
 * This class is used to define when a object need to be sorted. It that's the case,
 * the sort algorithm ask if a child class has Sortable as a parent.
 */
class Sortable {

    /**
     * 
     * @param {Number} id 
     */
    constructor(id) {
        this.id = id;
    }

    /**
     * @param {Number}
     */
    set id(id) {
        this._id = id;
    }

    /**
     * @returns {Number}
     */
    get id() {
        return this._id;
    }
}