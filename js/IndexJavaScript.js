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
/// img post
var imgpost = document.getElementById("imgPost");
var likepost = document.getElementById("likePost");
var ikebtn = document.getElementById("icon-lefts");
imgpost.addEventListener("dblclick", function() {
    myimgelike(this);
})

function myimgelike(obj) {
    likepost.style.display = "block";
    if (ikebtn.className == "fa fa-heart-o") {
        ikebtn.classList.remove("fa-heart-o");
        ikebtn.classList.add("fa-heart");
        ikebtn.style.color = "#ed4956";
    }
    var s = setTimeout(timeout, 800);

    function timeout() {
        likepost.style.display = "none";

    }
}

//// like butten
function mymarkbt(obj) {
    if (obj.className == "fa fa-bookmark-o") {
        obj.classList.remove("fa-bookmark-o");
        obj.classList.add("fa-bookmark");
        obj.style.color = "#ed4956";

    } else {
        obj.classList.remove("fa-bookmark");
        obj.classList.add("fa-bookmark-o");
        obj.style.color = "black";
    }
}


function mylikebt(obj) {

    if (obj.className == "fa fa-heart-o") {
        obj.classList.remove("fa-heart-o");
        obj.classList.add("fa-heart");
        obj.style.color = "#ed4956";
        likepost.style.display = "block";
        var s = setTimeout(timeout, 800);

        function timeout() {
            likepost.style.display = "none";

        }

    } else {
        obj.classList.remove("fa-heart");
        obj.classList.add("fa-heart-o");
        obj.style.color = "black";
    }
}
////// Modal Stories 
var imgStori = document.getElementById("imgStori");
var PausedStories = document.getElementById("PausedStories");
imgStori.addEventListener("mousedown", PausedStori)
imgStori.addEventListener("mouseup", PausedStorileve)

function PausedStori() {
    PausedStories.style.display = "block";
}

function PausedStorileve() {
    PausedStories.style.display = "none";

}
////Modal inputs
var commentstoris = document.getElementById("commentstoris");
var textinputs = document.getElementById("textinputs");
commentstoris.addEventListener("keyup", function() {
    InputSendmasseg(this)
})

function InputSendmasseg(obj) {
    if (obj.value == "") {
        textinputs.style.display = "block"
    } else {
        textinputs.style.display = "none"
    }
}

//// modal stories close
var closeStori = document.getElementById("closeStori");
var modals = document.getElementById("modals");
closeStori.addEventListener("click", closeStories)

function closeStories() {
    modals.style.display = "none"
}
//// stories open
var storiesOpen = document.getElementById("storiesOpen");
storiesOpen.addEventListener("click", openstories)

function openstories() {
    if (modals.style.display == "none") {
        modals.style.display = "block";
    } else {
        modals.style.display = "none";

    }
}