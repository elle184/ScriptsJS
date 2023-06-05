window.onload = function () {
    /**
     * Variable to set the tabs.
     */
    var optionsLinks = this.document.getElementsByTagName("a");
    var selectedContainers = document.getElementsByClassName("optionContainerSelected");

    for (var i in optionsLinks) {
        optionsLinks[i].onclick = enableOptionContainer;
    }

    function enableOptionContainer(event) {
        cleanSelected();

        event.srcElement.setAttribute("class", "selected");
        document.getElementById("optionContainer" + event.srcElement.dataset.optionSelected)
            .setAttribute("class", "optionContainerSelected");
    }

    function cleanSelected() {
        let selectedElements = document.getElementsByClassName("selected");

        if (selectedElements.length > 0) {
            for (let i = 0; i < selectedElements.length; i++) {
                selectedElements[i].setAttribute("class", "unselected");
            }
        }

        if (selectedContainers.length > 0) {
            for (let i = 0; i < selectedContainers.length; i++) {
                selectedContainers[i].setAttribute("class", "optionContainerUnselected");
            }
            
        }
    }
}