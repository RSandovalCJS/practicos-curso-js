/******************************************************* */
/*                                                       */   
/*            SCRIPT JS PAGINA PATITAS FELICES           */
/*                                                       */
/* Estudiante: Rodrigo Sandoval Sandoval                 */
/* Curso: Desarrollo Aplicaciones en JS 2026             */
/******************************************************* */

const btnArriba = document.getElementById("btn-arriba");                    // creamos una constante de nombre btnArriba que guarda la referencia al elemento con id "btn-arriba"

btnArriba.addEventListener("click", function () {                           // btnArriba, escucha evento "click" (sobre el boton) y ejecuta la función..
    window.scrollTo({                                                       // sobre el objeto window (ventana del navegador) ejecuta el metodo scrollTo .. 
        top: 0,                                                             // parametro top = 0 (al inicio de la pagina)
        behavior: "smooth"                                                  // parametro behavior = "smooth" (movimiento suave) 
    });
});