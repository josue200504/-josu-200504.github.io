let secuencia_2 = 0;
function solicitarPermisoNotificacion() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then((resultado) => {
            if (resultado === "granted") {
                console.log("Permiso para notificaciones concedido.");
            } else {
                console.log("Permiso para notificaciones denegado.");
            }
        });
    }
}

// Muestra la notificación
function mostrarNotificacion() {
    if (Notification.permission === "granted") {
        const notificacion = new Notification("Recordatorio", {
            body: recordatorio_texto,
            icon: "imagenes/bot_new_color.png"
        });
        notificacion.onclick = () => {
            window.focus();  // Focaliza la ventana si se hace clic en la notificación
        };
    }
    reproducirSonido();  // Reproduce el sonido aunque la notificación no aparezca
}
document.getElementById("boton").addEventListener("click",()=>{
    secuencia_2 += 1;
    if(secuencia_2 === 1){
        solicitarPermisoNotificacion();
    }
});
document.getElementById("escribir").addEventListener("keypress",(event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        secuencia_2 += 1;
        if(secuencia_2 === 1){
            solicitarPermisoNotificacion();
        }
    }
});