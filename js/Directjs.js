// Serch box
var InputSearch = document.getElementById("input-search");
var Serch = document.getElementById("search");
var txtSearchText = document.querySelector('.text-search');
var IconSearch = document.getElementById("search-icon");
var CloseSearch = document.getElementById("close-Search");
InputSearch.addEventListener("click", SearchBox)

function SearchBox() {
    CloseSearch.style.display = "inline-block";
}
// Serch hide and show
InputSearch.addEventListener("keyup", function() {
    TserchNone(this)
})

function TserchNone(eh) {
    if (eh.value == "") {
        txtSearchText.style.Left = "57px;";
        txtSearchText.style.display = "inline-block";
    } else {
        txtSearchText.style.display = "none";

    }
}
//close serch
CloseSearch.addEventListener("click", closeSerch)

function closeSerch(eh) {
    InputSearch.value = "";
    CloseSearch.style.display = "none";
    txtSearchText.style.display = "inline-block";
}
///////////////////// Header icon
var ClassIcon = document.getElementsByClassName("icon");
var ClassIconActive = document.getElementsByClassName("icon active");
for (var i = 0; i < ClassIcon.length; i++) {
    ClassIcon[i].addEventListener("click", function() {
        Cicon(this)
    })
}

function Cicon(obj) {
    for (i = 0; i < ClassIconActive.length; i++) {
        ClassIconActive[i].classList.remove("active");
    }
    obj.classList.add("active");
}