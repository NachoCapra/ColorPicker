const inputColor = document.querySelector("#inputColor");
const btnVisualizar = document.querySelector("#btn-Visualizar");
const parrafoExa = document.querySelector("#parrafoExa");
const cardColor = document.querySelector("#cardColor");

btnVisualizar.addEventListener("click", () =>{
    console.log(inputColor.value)
    parrafoExa.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value
})




