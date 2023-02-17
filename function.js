function myburger() {
    var element = document.getElementById("menuburger");
    if (element.style.display = "none") {
        element.style.display = "block"
    } 
}

function myburgerclose() {
    var element = document.getElementById("menuburger");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
}

function mycategories() {
    var element = document.getElementById("menucategorie");
    if (element.style.display = "none") {
        element.style.display = "block"
    }
}

function mycategoriesclose() {
    var element = document.getElementById("menucategorie");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
}

function myswipe() {
    window.scrollTo(0, 0);
}

function mycontenaire1() {
    var element = document.getElementById("contenaire1");
    if (element.style.display = "none") {
        element.style.display = "block"
        titrecontenaire1.style.textDecorationColor = "red";
    }
    var element = document.getElementById("contenaire2");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
    var element = document.getElementById("contenaire3");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
}

function mycontenaire2() {
    var element = document.getElementById("contenaire1");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
    var element = document.getElementById("contenaire2");
    if (element.style.display = "none") {
        element.style.display = "block"
    }
    var element = document.getElementById("contenaire3");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
}

function mycontenaire3() {
    var element = document.getElementById("contenaire1");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
    var element = document.getElementById("contenaire2");
    if (element.style.display = "block") {
        element.style.display = "none"
    }
    var element = document.getElementById("contenaire3");
    if (element.style.display = "none") {
        element.style.display = "block"
    }
}

function mycadrelogin() {
    var element= document.getElementById("cadrelogin");
    if (element.style.display = "none") {
        element.style.display = "block"
    }
    else element.style.display = "none"
}