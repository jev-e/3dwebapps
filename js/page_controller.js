$(document).ready(function () {
    $("#home_page").show();
    $("#model_page").hide();
    $("#further_learning_page").hide();
    $("#about_page").hide();
});


toModels = () => {
    $("#home_page").hide();
    $("#model_page").show();
    $("#further_learning_page").hide();
    $("#about_page").hide();

};

toHome = () => {
    $("#home_page").show();
    $("#model_page").hide();
    $("#further_learning_page").hide();
    $("#about_page").hide();
}

toLearning = () => {
    $("#home_page").hide();
    $("#model_page").hide();
    $("#further_learning_page").show();
    $("#about_page").hide();
}

toAbout = () => {
    $("#home_page").hide();
    $("#model_page").hide();
    $("#further_learning_page").hide();
    $("#about_page").show();
}

changeModel = (buttonNum) => {
    let modelSelection = buttonNum;
    setDescription(modelSelection);
    document.getElementById("modelSwitch").setAttribute("whichChoice", modelSelection);
}

setDescription = (choice) => {

    console.log("setDesc" + choice);
    let brand = null;
    switch (choice) {
        case 0:
            brand = "Costa";
            break;
        case 1:
            brand = "Dr Pepper";
            break;
        case 2:
            brand = "Fanta";
            break;
    }

    setVideo(brand);
    getDescription(brand);
}

setVideo = (brand) => {
    if (brand == "Dr Pepper") {
        document.getElementById("brandVideo").setAttribute("src", "https://www.youtube.com/embed/Flh0PQ1eJ28");
    }
    if (brand == "Costa") {
        document.getElementById("brandVideo").setAttribute("src", "https://www.youtube.com/embed/MYSmij0407A");
    }
    if (brand == "Fanta") {
        document.getElementById("brandVideo").setAttribute("src", "https://www.youtube.com/embed/ywbEgyqIkdw");
    }


}

getDescription = (brand) => {
    var URI = "https://users.sussex.ac.uk/~je288/3dapp/assignment/php/DBModel.php?brand=" + brand;
    $.getJSON(URI)
        .done((data) => {
            console.log("data returned");
            document.getElementById("descriptionTitle").textContent = data[0]["brand"];
            document.getElementById("descriptionText").textContent = data[0]["description"];
            console.log(data[0]["brand"]);
        }
        )
        .fail(() => {
            console.log("Error: Server Error");
        })


}

$(document).ready(() => {
    var URI = "https://users.sussex.ac.uk/~je288/3dapp/assignment/php/DBModel.php?brand=Costa";
    $.getJSON(URI)
        .done((data) => {
            console.log("data returned");
            document.getElementById("descriptionTitle").textContent = data[0]["brand"];
            document.getElementById("descriptionText").textContent = data[0]["description"];
            console.log(data[0]["brand"]);
        }
        )
        .fail(() => {
            console.log("Error: Server Error");
        })

});




