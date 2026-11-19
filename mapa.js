document.addEventListener('DOMContentLoaded', () => {

    const btnCompartir = document.getElementById('btn-compartir-ubicacion');
    const contenedorMapa = document.getElementById('contenedor-mapa');
    const pinUbicacion = document.getElementById('pin-ubicacion');
    const tarjetasContenedor = document.getElementById('contenedor-tarjetas');

    const sectoresSimulados = ["Sector Magdalena", "Sector Pueblo Libre", "Sector Breña", "Sector Centro", "Sector San Miguel"];
    const horariosSimulados = ["8:00 - 12:00", "14:00 - 18:00", "Todo el día", "Madrugada", "10:00 - 20:00"];

    // FUNCIÓN PARA MOSTRAR Y MOVER EL PIN
    function colocarPin(porcentajeX, porcentajeY) {
        if (!pinUbicacion) return;

        // Quitamos la clase que lo oculta
        pinUbicacion.classList.remove('oculto');
        
        // Asignamos la posición exactas en %
        pinUbicacion.style.left = porcentajeX + '%';
        pinUbicacion.style.top = porcentajeY + '%';

        actualizarCortes();
    }

    function actualizarCortes() {
        if (!tarjetasContenedor) return;

        tarjetasContenedor.classList.remove('animar-tarjeta');
        setTimeout(() => tarjetasContenedor.classList.add('animar-tarjeta'), 10);

        const nombresSectores = document.querySelectorAll('.nombre-sector');
        const horariosCorte = document.querySelectorAll('.horario-corte');

        nombresSectores.forEach((elemento) => {
            const aleatorio = sectoresSimulados[Math.floor(Math.random() * sectoresSimulados.length)];
            elemento.textContent = aleatorio;
        });

        horariosCorte.forEach((elemento) => {
            const aleatorio = horariosSimulados[Math.floor(Math.random() * horariosSimulados.length)];
            elemento.textContent = aleatorio;
        });
    }

    // CLIC EN EL MAPA
    if (contenedorMapa) {
        contenedorMapa.addEventListener('click', (evento) => {
            const rect = contenedorMapa.getBoundingClientRect();
            
            const clickX = evento.clientX - rect.left;
            const clickY = evento.clientY - rect.top;

            const porcentajeX = (clickX / rect.width) * 100;
            const porcentajeY = (clickY / rect.height) * 100;

            colocarPin(porcentajeX, porcentajeY);
            
            if (btnCompartir) {
                btnCompartir.textContent = "📍 Ubicación seleccionada";
            }
        });
    }

    // CLIC EN BOTÓN
    if (btnCompartir) {
        btnCompartir.addEventListener('click', () => {
            colocarPin(50, 45);
            btnCompartir.textContent = "✅ Ubicación compartida";
        });
    }
});