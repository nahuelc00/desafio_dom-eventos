function moverCuadrado() {
  const cuadradoEl = document.querySelector(".cuadrado");

  addEventListener("keydown", (event) => {
    console.log("Se ejecuto el evento");
    if (event.key == "ArrowRight") {
      //EL cuadrado tarda medio segundo en moverse y pintarse
      cuadradoEl.style.transition = "all 500ms";
      //EL cuadrado se translada 200px(a la derecha)
      cuadradoEl.style.transform = "translate(200px)";
      cuadradoEl.style.backgroundColor = "blue";
      cuadradoEl.style.border = "solid 5px";
      cuadradoEl.style.borderRadius = " 15px";
      console.log("soy la flecha derecha", "--------------------");
    }
    if (event.key == "ArrowLeft") {
      cuadradoEl.style.transition = "all 500ms";
      //EL cuadrado se translada 200px(a la izquierda)
      cuadradoEl.style.transform = "translate(-200px)";
      cuadradoEl.style.backgroundColor = "green";
      cuadradoEl.style.border = "solid 5px";
      cuadradoEl.style.borderRadius = " 15px";
      console.log("soy la flecha izquierda", "--------------------");
    }
    if (event.key == "ArrowUp") {
      //EL cuadrado se translada al medio
      cuadradoEl.style.transform = "translate(0)";
      cuadradoEl.style.transition = "all 500ms";
      cuadradoEl.style.backgroundColor = "aqua";
      cuadradoEl.style.border = "solid 5px";
      cuadradoEl.style.borderRadius = " 15px";
      console.log("soy la flecha de arriba", "--------------------");
    }
  });
}

function main() {
  moverCuadrado();
}
main();
