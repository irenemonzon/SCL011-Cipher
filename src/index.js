
const mensaje2 = document.getElementById("mensaje1");
mensaje2.addEventListener("click", () => {

    // hacer aparecer la segunda pantalla y desaparecer la primera

    const divHidden = document.getElementById("mensajeria");
    divHidden.style.display = "block";
    const nonepag1 = document.getElementById("welcome");
    nonepag1.style.display = "none";

    // Escribir el nombre del usuario en segunda pantalla
    const name2 = document.getElementById("nombre");
    const name = document.getElementById("name").value;
    name2.innerHTML = name;
  


});

const encriptar = document.getElementById("enviarmensaje");
encriptar.addEventListener("click", () => {


    const divHidden2 = document.getElementById("encriptar");
    divHidden2.style.display = "block";
    const nonepag2 = document.getElementById("mensajeria");
    nonepag2.style.display = "none";

    let escrito = document.getElementById("escrito").value.toUpperCase();
    let mensaje3 = document.getElementById("mensajeoculto");
    let codigo2 = parseInt(document.getElementById("codigo").value);
   
    mensaje3.innerHTML = window.cipher.encode(codigo2, escrito);

});
const descifrado = document.getElementById("descifrar");
descifrado.addEventListener("click", () => {

    document.getElementById("escrito").value = "";

    let escrito2 = document.getElementById("mensajeoculto").value.toUpperCase();
    let mensaje4 = document.getElementById("mensajetraducido");
    let codigo2 = parseInt(document.getElementById("codigo").value);

    mensaje4.innerHTML = window.cipher.decode(codigo2,escrito2);    
});

const responder = document.getElementById("volver");
responder.addEventListener("click", () => {

   
    document.getElementById("codigo").value = "";
   // document.getElementById("mensajetraducido").value = "";

    const divHidden = document.getElementById("mensajeria");
    divHidden.style.display = "block";
    const divHidden2 = document.getElementById("encriptar");
    divHidden2.style.display = "none";

    

});

