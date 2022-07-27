datos = [["HTML", 100], ["CSS", 60], ["JS",75], ["C++", 75], ["PYTHON", 75], ["JAVA", 65], ["SQL",50]];
cards = [["Portfolio", "https://placekitten.com/300/150", "#HTML #CSS #JS", ""],["Portfolio", "https://placekitten.com/300/150", "#HTML #CSS #JS", ""],["Portfolio", "https://placekitten.com/300/150", "#HTML #CSS #JS", ""],["Portfolio", "https://placekitten.com/300/150", "#HTML #CSS #JS", ""],["Portfolio", "https://placekitten.com/300/150", "#HTML #CSS #JS", ""]]


function crearElemento() {
    var skillContainer = document.getElementById("skills");
    for (tuplas of datos) {
        var title = document.createElement("div");
        title.setAttribute("class", "title");
        title.innerText = tuplas[0];
        skillContainer.appendChild(title);
        var barra = document.createElement("div");
        let id = "bar" + tuplas[0];
        barra.setAttribute("class", "bar");
        barra.innerHTML = "<span id="+id+"></span>";
        skillContainer.appendChild(barra);
    }
}
function crearEstilo() {
    for (tuplas of datos) {
        let id = "bar" + tuplas[0];
        let porcentaje = "" + tuplas[1] + "%";
        var barra = document.getElementById(id);
        barra.style.width=porcentaje;
        barra.setAttribute("data-content", porcentaje);

        
    }
}
function crearProyecto(){
    var cardsContainer = document.getElementById("card_container");
    for (card of cards){
        var elemento = document.createElement("div");
        elemento.setAttribute("class", "articulo");
        let content = "<div class=\"card\"><figure> <img src=\"" + card[1] +"\"/></figure> <h3>" + card[0] + "</h3>" + "<p>" + card[2] + "</p>"+ "<a href=\"" + card[3] + "\">Ver Mas</div>";
        elemento.innerHTML = content;
        cardsContainer.appendChild(elemento);
    }
}

