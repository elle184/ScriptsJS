class Sort {
    
    static bubble(list) {
        let bubbleValue = null;

        for (let i = 0; i < list.length; i++) {
            for (let j = list.length; j > 0; j--) {
                try {
                    if (list[i] instanceof Sortable) {
                        if (list[i].id > list[j + 1]?.id) {
                            bubbleValue = list[j + 1];
                        
                            list[j + 1] = list[i];
                            list[i] = bubbleValue;
                        }
                    }
                } catch (exception) {
                    console.log(`${list[i]} is not a Sortable object type.`);
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