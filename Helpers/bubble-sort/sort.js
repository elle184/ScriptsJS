/**
 * Class: Sort
 * Class type: Helper
 * Used for: Handle List
 * 
 * Class whose goal are handle any list of collection in terms of sort the 
 * information inside it.
 */
class Sort {
    
    /**
     * Constant used to identify if the array need to be sorted in alphabetical 
     * order.
     */
    static ALPHABETICALLY = 1;

    /**
     * Constant used to identify if the array need to be sorted in numeric order.
     */
    static NUMERIC = 2;

    /**
     * This map is used when the sort strategy are in alphabetical order. It 
     * that`s the case when the sort algorithm find a phrase that start with 
     * the letter listed in the alphabet, it takes the numeric identifier that
     * verifies what's the first above other.
     */
    ALPHABET = new Map(
        ['A', 0]
        , ['B', 1]
        , ['C', 2]
        , ['D', 3]
        , ['E', 4]
        , ['F', 5]
        , ['G', 6]
        , ['H', 7]
        , ['I', 8]
        , ['J', 9]
        , ['K', 10]
        , ['L', 11]
        , ['M', 12]
        , ['N', 13]
        , ['O', 14]
        , ['P', 15]
        , ['Q', 16]
        , ['R', 17]
        , ['S', 18]
        , ['T', 19]
        , ['U', 20]
        , ['V', 21]
        , ['W', 22]
        , ['X', 23]
        , ['Y', 24]
        , ['Z', 25]
    );

    /**
     * Sort the list with the Bubble Sort algorithm.
     * 
     * @param {*} list 
     * @param {Number} sortingType 
     */
    static bubble(list, sortingType) {
        let bubbleValue = null;

        for (let i = 0; i < list.length; i++) {
            for (let j = list.length; j > 0; j--) {
                if (list[i] instanceof Sortable) {
                    switch (sortingType) {
                        case 1: 
                            let alphabeticalNumber = ALPHABET.get(list[i].name[0]);
                            let alphabeticalNumberNext = ALPHABET.get(list[j + 1]?.name[0]);

                            if (alphabeticalNumber > alphabeticalNumberNext) {
                                bubbleValue = list[j + 1];
                            
                                list[j + 1] = list[i];
                                list[i] = bubbleValue;
                            }

                            break;
                        case 2:
                            if (list[i].id > list[j + 1]?.id) {
                                bubbleValue = list[j + 1];
                            
                                list[j + 1] = list[i];
                                list[i] = bubbleValue;
                            }
                        
                            break;
                        default : break;
                    }
                }
            }
        }

        bubbleValue = null;

        for (let i = (list.length - 1); i > 0; i--) {
            if (list[i].id < list[i - 1]?.id) {
                bubbleValue = list[i];
                list[i] = list[i - 1];
                list[i - 1] = bubbleValue;
            }
                
        }
    }
}