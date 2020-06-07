window.onload = function () {
    /**
     * Variable to set the tabs.
     */
    var optionsLinks = this.document.getElementsByTagName("a");

    for (var i in optionsLinks) {
        optionsLinks[i].onclick = enableOptionContainer;
    }

    function enableOptionContainer(event) {
        console.log(event);
        var element = event.srcElement;
        var dataset = element.dataset;
        var optionContainer = document.getElementById(("option").concat(dataset.optionSelected));

        disableOptionContainer();

        optionContainer.style.display = "inline-block";
    }

    function disableOptionContainer() {
        var optionContainerParent = document.getElementById("options");
        var children = optionContainerParent.children; 

        for (var i in children) {
            if (children[i].style != undefined && children[i].style.display == "inline-block") {
                children[i].style.display = "none";
            }
        }
    }
}