/**
 * Class: Category
 * 
 * Defines the information structure about a category. Extends Sortable class 
 * in case of sort the information if is necessary.
 */
class Category extends Sortable {

    /**
     * 
     * @param {Number} id 
     * @param {String} name 
     */
    constructor(id, name) {
       super(id);
        this.name = name;
    }

    /**
     * @param {String} name
     */
    set name(name) {
        this._name = name;
    }

    /**
     * @returns {String}
     */
    get name() {
        return this._name;
    }
}