let word = prompt("Ingrese la palabra que desea traducir (casa, mesa, perro, gato)");
let boton = document.getElementById("boton");

const traductor = () =>{

    switch (word) {
        case "casa":
            document.getElementById("traducido").innerHTML="house";
            break;
        case "mesa":
            document.getElementById("traducido").innerHTML="table";
            break;
        case "perro":
            document.getElementById("traducido").innerHTML="dog";
            break;
        case "gato":
            document.getElementById("traducido").innerHTML="cat";
            break;
                                
        default:
            alert("Ingrese una palabra valida");
            break;
    }
};

boton.onclick = function (){
    traductor();
};
