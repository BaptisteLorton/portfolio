document.getElementById("age").addEventListener("click", function() {
    document.getElementById("age-click").style.display = "block";
    document.getElementById("age").style.display = "none";
});

document.getElementById("age-click").addEventListener("click", function() {
    document.getElementById("age-click").style.display = "none";
    document.getElementById("age").style.display = "block";
});

document.getElementById("but").addEventListener("click", function() {
    document.getElementById("but-click").style.display = "block";
    document.getElementById("but").style.display = "none";
});

document.getElementById("but-click").addEventListener("click", function() {
    document.getElementById("but-click").style.display = "none";
    document.getElementById("but").style.display = "block";
});

document.getElementById("iut").addEventListener("click", function() {
    document.getElementById("iut-click").style.display = "block";
    document.getElementById("iut").style.display = "none";
});

document.getElementById("iut-click").addEventListener("click", function() {
    document.getElementById("iut-click").style.display = "none";
    document.getElementById("iut").style.display = "block";
});

document.getElementById("gauche").addEventListener("click", function() {
    if (document.getElementById("brandub").style.display === "") {
        document.getElementById("brandub").style.display = "none";
        document.getElementById("arvolution").style.width = "78em";
        document.getElementById("fleche-gauche").style.transform = "rotate(180deg)";
        document.getElementById("arvolution-details").style.display = "flex";
        const elements = document.getElementsByClassName("img-arvolution");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
        document.getElementById("arvolution-presentation").style.marginBottom = "1em";
        document.getElementById("afficher-plus-gauche").innerHTML = "Afficher moins";
    } else {
        document.getElementById("brandub").style.display = "";
        document.getElementById("arvolution").style.width = "35em";
        document.getElementById("fleche-gauche").style.transform = "rotate(0deg)";
        document.getElementById("arvolution-details").style.display = "block";
        const elements = document.getElementsByClassName("img-arvolution");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        document.getElementById("arvolution-presentation").style.marginBottom = "3em";
        document.getElementById("afficher-plus-gauche").innerHTML = "Afficher plus";
    }
});

document.getElementById("droite").addEventListener("click", function() {
    if (document.getElementById("arvolution").style.display === "") {
        document.getElementById("arvolution").style.display = "none";
        document.getElementById("brandub").style.width = "78em";
        document.getElementById("fleche-droite").style.transform = "rotate(0deg)";
        document.getElementById("brandub-details").style.display = "flex";
        const elements = document.getElementsByClassName("img-brandub");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
        document.getElementById("brandub-presentation").style.marginBottom = "1em";
        document.getElementById("afficher-plus-droite").innerHTML = "Afficher moins";
    } else {
        document.getElementById("arvolution").style.display = "";
        document.getElementById("brandub").style.width = "35em";
        document.getElementById("fleche-droite").style.transform = "rotate(180deg)";
        document.getElementById("brandub-details").style.display = "block";
        const elements = document.getElementsByClassName("img-brandub");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        document.getElementById("brandub-presentation").style.marginBottom = "3em";
        document.getElementById("afficher-plus-droite").innerHTML = "Afficher plus";
    }
});

function reduireHaut(){
    document.getElementById("led").style.display = "";
    document.getElementById("verif").style.height = "21em";
    document.getElementById("fleche-haut-stage").style.transform = "rotate(90deg)";
    document.getElementById("afficher-plus-haut-stage").innerHTML = "Afficher plus";
    document.getElementById("img-verif").style.display = "none";
    document.getElementById("ex-1").style.display = "none";
    document.getElementById("ex-2").style.display = "none";
}

function reduireBas(){
    document.getElementById("verif").style.display = "";
    document.getElementById("led").style.height = "21em";
    document.getElementById("fleche-bas-stage").style.transform = "rotate(-90deg)";
    document.getElementById("afficher-plus-bas-stage").innerHTML = "Afficher plus";
    document.getElementById("img-led1").style.display = "none";
    document.getElementById("img-led2").style.display = "none";
    document.getElementById("ex-1").style.display = "none";
    document.getElementById("ex-2").style.display = "none";
}

document.getElementById("gauche-stage").addEventListener("click", function() {
    if (document.getElementById("page-configuration").style.width === "35em" || document.getElementById("page-configuration").style.width === ""){
        reduireHaut()
        reduireBas()
        document.getElementById("verif").style.display = "none";
        document.getElementById("led").style.display = "none";
        document.getElementById("page-configuration").style.width = "78em";
        document.getElementById("fleche-gauche-stage").style.transform = "rotate(180deg)";
        document.getElementById("page-configuration-details").style.display = "flex";
        const elements = document.getElementsByClassName("img-page-configuration");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "block";
        }
        document.getElementById("page-configuration-presentation").style.marginBottom = "1em";
        document.getElementById("afficher-plus-gauche-stage").innerHTML = "Afficher moins";
    } else {
        document.getElementById("verif").style.display = "";
        document.getElementById("led").style.display = "";
        document.getElementById("page-configuration").style.width = "35em";
        document.getElementById("fleche-gauche-stage").style.transform = "rotate(0deg)";
        document.getElementById("page-configuration-details").style.display = "block";
        const elements = document.getElementsByClassName("img-page-configuration");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = "none";
        }
        document.getElementById("page-configuration-presentation").style.marginBottom = "3em";
        document.getElementById("afficher-plus-gauche-stage").innerHTML = "Afficher plus";
    }
});

document.getElementById("haut-stage").addEventListener("click", function() {
    if (document.getElementById("led").style.display === ""){
        document.getElementById("led").style.display = "none";
        document.getElementById("verif").style.height = "45em";
        document.getElementById("fleche-haut-stage").style.transform = "rotate(-90deg)";
        document.getElementById("afficher-plus-haut-stage").innerHTML = "Afficher moins";
        document.getElementById("img-verif").style.display = "block";
        document.getElementById("ex-1").style.display = "block";
    } else {
        reduireHaut()
    }
});

document.getElementById("bas-stage").addEventListener("click", function() {
    if (document.getElementById("verif").style.display === ""){
        document.getElementById("verif").style.display = "none";
        document.getElementById("led").style.height = "45em";
        document.getElementById("fleche-bas-stage").style.transform = "rotate(90deg)";
        document.getElementById("afficher-plus-bas-stage").innerHTML = "Afficher moins";
        document.getElementById("img-led1").style.display = "block";
        document.getElementById("img-led2").style.display = "block";
        document.getElementById("ex-2").style.display = "block";
    } else {
        reduireBas()
    }
});