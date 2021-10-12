let boton = document.getElementById("boton");
let html ="";
let divi = document.getElementById("divi");



const agregar = () => {
    
    html += '<div id="divi" class="divi">';
    html += "</div>";
    document.getElementById("nuevo").innerHTML= html;    
};


boton.onclick = function (){
    agregar ();
};


 const color = () => {   
        document.getElementById("divi").style.backgroundColor="red";
     };
     
document.getElementById("divi").onclick = function (){
         color ();
     };






