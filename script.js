// Countdown
function iniciarCuentaRegresiva(fechaObjetivo) {
    const countdownEl = document.getElementById("countdown");

    function actualizar() {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaObjetivo - ahora;

        if (tiempoRestante <= 0) {
            countdownEl.innerHTML = "¡Hoy es la celebración!";
            clearInterval(intervalo);
            return;
        }

        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `
            <div class="count-box"><span>${dias}</span><small>Días</small></div>
            <div class="count-box"><span>${horas}</span><small>Horas</small></div>
            <div class="count-box"><span>${minutos}</span><small>Min</small></div>
            <div class="count-box"><span>${segundos}</span><small>Seg</small></div>
        `;
    }

    actualizar();
    const intervalo = setInterval(actualizar, 1000);
}

iniciarCuentaRegresiva(new Date("2025-12-27T19:00:00-05:00").getTime());

// FORMULARIO CON WHATSAPP + REDIRECCIÓN
const form = document.getElementById("confirm-form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const acompanantes = document.getElementById("acompanantes").value;
        const asistencia = document.querySelector('input[name="asistencia"]:checked')?.value || '';
        const mensaje = document.getElementById("mensaje").value.trim();

        const telefono = "573212676635";

        const texto = `✨ Confirmación de asistencia ✨%0A%0A` +
                      `👤 Nombre: ${nombre}%0A` +
                      `👫 Acompañantes: ${acompanantes}%0A` +
                      `✅ Asistiré: ${asistencia}%0A` +
                      `💌 Mensaje: ${mensaje}`;

        const url = `https://wa.me/${telefono}?text=${texto}`;

        window.open(url, "_blank");

        setTimeout(() => {
            window.location.href = "confirm.html";
        }, 1500);
    });
}
