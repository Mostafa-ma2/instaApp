var body = document.getElementById("body");
// Serch box
var InputSearch = document.getElementById("input-search");
var Serch = document.getElementById("search");
var Tsearch = document.getElementById("search-text");
var IconSearch = document.getElementById("search-icon");
var CloseSearch = document.getElementById("close-Search");
InputSearch.addEventListener("click", SearchBox)

function SearchBox() {
    search.style.justifyContent = "flex-end";
    CloseSearch.style.display = "inline-block";
}
// Serch hide and show
InputSearch.addEventListener("keyup", function() {
    TserchNone(this)
})

function TserchNone(eh) {
    if (eh.value == "") {
        Tsearch.style.display = "inline-block";
    } else {
        Tsearch.style.display = "none";

    }
}
//close serch
CloseSearch.addEventListener("click", closeSerch)

function closeSerch() {
    search.style.justifyContent = "center";
    closeSerch.style.display = "none";
}