function showMenu() {
    document.getElementById("DropDiv").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('.menuButton')) {
        var dropdowns = document.getElementsByClassName("MenuContent");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}