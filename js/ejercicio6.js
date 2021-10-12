let imagen = document.getElementById("imagen");

const cambio = () =>{
   document.getElementById("imagen").innerHTML= imagen.src="imagenes/Eljuego1.jpg";
  

};

const normal = ()  => {
    document.getElementById("imagen").innerHTML= imagen.src="imagenes/Eljuego2.jpg";
};

imagen.onmouseover = function (){
    cambio();

};

imagen.onmouseout = function () {
    normal ();
};