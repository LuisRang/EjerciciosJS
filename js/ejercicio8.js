let elemento = document.getElementById("elemento");
let aparece = document.getElementById("aparece");

elemento.style.visibility="visible";

const desaparece = () => {
    elemento.style.visibility="hidden";

};

const aparicion = () => {
    elemento.style.visibility="visible";
}

elemento.onmouseover = function () {
    desaparece ();
};

aparece.onclick = function () {
    aparicion ();
};