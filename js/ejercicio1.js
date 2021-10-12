let boton = document.getElementById("boton");



const info = () =>{
    let namew = prompt("Cual es el nombre del empleado");
    let salary = prompt("Cual es el salario del empleado");
    document.getElementById("nombre").innerHTML= namew;
    document.getElementById("sueldo").innerHTML=salary;

};

boton.onclick = function (){
  info();
};
  