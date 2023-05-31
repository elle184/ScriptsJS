class List {

    static removeDuplicates(list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] instanceof Sortable) {
                if (list[i].id === list[i + 1]?.id) {
                    delete list[i];
                }
            }
        }
    }
}