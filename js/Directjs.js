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
///// Like for massege
var Mymassege = document.getElementsByClassName("My-massege");
var likeMassege = document.getElementsByClassName("Like");
for (i = 0; i < Mymassege.length; i++) {
    Mymassege[i].addEventListener("dblclick", function() {
        myLike(this);
    });

};

function myLike(obj) {

};
///// Image Open

var imageModal = document.getElementsByClassName("imageOpen");
var modal = document.getElementById("modals");
var imageForModal = document.getElementById("imageForModal");
for (i = 0; i < imageModal.length; i++) {
    imageModal[i].addEventListener("click", function() {
        openModal(this);
    });
};

function openModal(obj) {
    modal.style.display = "inline-block";
    imageForModal.src = obj.src;
}
//close modals
var closeModal = document.getElementById("closeModal");
closeModal.addEventListener("click", closeModals);

function closeModals() {
    modal.style.display = "none";
}
///// Change the Main left
var left = document.getElementById("left");
var lefts = document.getElementById("lefts");
var leftBTnChange = document.getElementById("leftBTnChange");
var BtnLeftsChange = document.getElementById("BtnLeftsChange");
leftBTnChange.addEventListener("click", Change);
BtnLeftsChange.addEventListener("click", leftcheng);


function Change() {
    left.style.display = "none";
    lefts.style.display = "block";
}

function leftcheng() {
    lefts.style.display = "none";
    left.style.display = "block";
}