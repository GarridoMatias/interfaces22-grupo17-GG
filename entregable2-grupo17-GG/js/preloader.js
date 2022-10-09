"use strict"

function go() {
    let start = Date.now();

    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
        let porcentaje = document.getElementById("id-porcentaje");
        let h2porcentaje = setInterval(function() {
            let porcentajeactual = parseInt(porcentaje.innerHTML.split("%")[0]);
            if (porcentajeactual >= 100) {
                return;
            }
            porcentaje.innerHTML = `${porcentajeactual+1}%`;
        }, 1000);

        if (timePassed > 5000) {
            clearInterval(timer);
            let spiner = document.getElementById("id-spin");
            spiner.classList.replace("loader-div", "loader-none")
            let div = document.getElementById("id-div");
            div.classList.replace("test-preload", "test-preload2");
            return;
        }

    }, 20);
}
go();