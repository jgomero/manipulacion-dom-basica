const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const presult = document.querySelector("#result");

//escuchando el evento

//btn.addEventListener("click", btnOnClick); //en este caso no se llama a la funcion con parentesis
form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event){
    //console.log({event}); //para llamar al evento
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    presult.innerHTML = "El resultado es: " + sumaInputs;
}







/* console.log(input.value);
console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerText = "Hola Patito <br> Feo"; */
//console.log(h1.getAttribute("class"));
//h1.setAttribute("class", "rojo");

//h1.classList.add("rojo");
//h1.classList.remove("verde");

//h1.classList.toggle("azul");
//h1.classList.toggle("rojo");
//console.log(h1.classList.contains("amarillo"));

//input.value = "456";
//input.placeholder = "Hola";

//onst img = document.createElement("img");
//img.setAttribute("src","https://indiehoy.com/wp-content/uploads/2020/12/the-office.jpg")

//console.log(img);

//pid.innerHTML = ""; //con esto borramos el P.
//pid.append(img);