var body = document.getElementById("body");
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
// Change Post
var input = document.getElementsByClassName("input");
for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function() {
        ChangeP(this);
    });
};

function ChangeP(obj) {
    var inputs = document.getElementsByClassName("input active")[0];
    var clasRemove = "active";
    var clasAdd = "input";
    inputs.classList.remove(clasRemove);
    var attrs = inputs.getAttribute("attr");
    var posst = document.getElementsByClassName(attrs)[0];
    posst.style.display = "none";
    var inputactive = "input-active";
    var attr = obj.getAttribute("attr");
    obj.classList.add(clasRemove);
    var post = document.getElementsByClassName(attr)[0];
    post.style.display = "-webkit-box";
}