let fechas_hora = [];
let fecha_actual;
let audio = new Audio('a.mp3');
let alarma_activada = false;
let repetir_audio;
let alarma_igual;
let recordatorio_texto = '';
let desactivar_boton = true;
let secuencia = 0;
let interactuar = false;

// Convierte la fecha de formato DD-MM-AAAA a AAAA-MM-DD
function convertir_fecha(FECHA) {
    let [dia, mes, anio] = FECHA.split('-');
    return `${anio}-${mes}-${dia}`;
}

// Convierte hora de formato 12 horas a 24 horas
function convertirHoraA24Horas(hora12) {
    hora12 = hora12.trim().toUpperCase();
    const espacioIndex = hora12.indexOf(' ');
    let horaMinutos = espacioIndex !== -1 ? hora12.slice(0, espacioIndex) : hora12;
    let periodo = espacioIndex !== -1 ? hora12.slice(espacioIndex + 1) : hora12.slice(-2);

    if (periodo !== 'AM' && periodo !== 'PM') {
        console.error('El formato de periodo debe ser AM o PM');
        return null;
    }

    let [hora, minutos] = horaMinutos.split(':');
    let horas24 = parseInt(hora);

    if (periodo === 'PM' && horas24 !== 12) {
        horas24 += 12;
    }
    if (periodo === 'AM' && horas24 === 12) {
        horas24 = 0;
    }

    let horas24Str = horas24 < 10 ? '0' + horas24 : horas24;
    return `${horas24Str}:${minutos}`;
}

// Recupera fechas y horas de los recordatorios del almacenamiento local
function recuperar_fecha_hora() {
    let recordatorioGuardadas = JSON.parse(window.localStorage.getItem('recordatorio')) || [];
    recordatorioGuardadas.forEach((recordatorio) => {
        let fechaConvertida = convertir_fecha(recordatorio.Fecha);
        let horaConvertida = convertirHoraA24Horas(recordatorio.Hora);
        let contenedor_fe_ho = new Date(`${fechaConvertida}T${horaConvertida}`);
        fechas_hora.push({
            fecha_hora: contenedor_fe_ho,
            texto: recordatorio.Recordatorio
        });
    });
}

// Actualiza la fecha actual
function fecha_actua() {
    fecha_actual = new Date();
}

// Muestra el botón para desactivar la alarma
function boton_desactivar() {
    let contenedor = document.createElement('div');
    document.getElementById("pantalla").appendChild(contenedor);
    contenedor.className = "contenedor";
    let logo = document.createElement('img');
    contenedor.appendChild(logo);
    logo.src = "imagenes/bot_new_color.png";
    logo.className = "a";
    let contenedor_texto = document.createElement('div');
    contenedor.appendChild(contenedor_texto);
    contenedor_texto.className = "contenedor_texto";
    let texto = document.createElement('p');
    texto.textContent = "Es hora de tu recordatorio: " + recordatorio_texto;
    contenedor_texto.appendChild(texto);
    let boton = document.createElement('button');
    contenedor_texto.appendChild(boton);
    boton.className = "estilo_boton";
    boton.textContent = "Desactivar alarma";
    scrollToBottom();
    boton.addEventListener("click", () => {
        desactivar_boton = false;
        alarma_desactivar();
    });
}

// Reproduce el sonido
function reproducirSonido() {
    audio.play().catch((error) => {
        console.error("Error reproduciendo el audio:", error);
    });
}

// Activa la alarma
function alarma_activar() {
    if(interactuar === true){
        if (desactivar_boton === true) {
            if (!alarma_activada) {
                alarma_activada = true;
                mostrarNotificacion();
                boton_desactivar();  // Mostrar el botón de desactivar en la página
                repetir_audio = setInterval(() => {
                    reproducirSonido();  // Llamar a la función de reproducción de sonido
                }, 1000); // Repite el audio cada segundo
            }
        }
    }
    
}

// Desactiva la alarma
function alarma_desactivar() {
    if (alarma_activada) {
        alarma_activada = false;
        clearInterval(repetir_audio);
        audio.pause();
        audio.currentTime = 0;
        setTimeout(()=>{
            desactivar_boton = true;
        },60000);
    }
}

// Compara las fechas y activa la alarma si coincide
function comparar_fechas() {
    alarma_igual = false;
    recordatorio_texto = '';

    fechas_hora.forEach((x) => {
        if (
            x.fecha_hora.getFullYear() === fecha_actual.getFullYear() &&
            x.fecha_hora.getMonth() === fecha_actual.getMonth() &&
            x.fecha_hora.getDate() === fecha_actual.getDate() &&
            x.fecha_hora.getHours() === fecha_actual.getHours() &&
            x.fecha_hora.getMinutes() === fecha_actual.getMinutes()
        ) {
            alarma_igual = true;
            recordatorio_texto = x.texto;
        }
    });

    if (alarma_igual) {
        alarma_activar();
    }
}
document.getElementById("boton").addEventListener("click",()=>{
    secuencia += 1;
    if(secuencia === 1){
        interactuar = true;
    }
});
document.getElementById("escribir").addEventListener("keypress",(event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        secuencia += 1;
        if(secuencia === 1){
            interactuar = true;
        }
    }
});
// Establece un intervalo para comprobar la alarma cada segundo
setInterval(() => {
    recuperar_fecha_hora();  // Recupera recordatorios
    fecha_actua();  // Actualiza la fecha actual
    comparar_fechas();  // Compara fechas y activa alarma si es necesario
}, 1000);  // Verifica cada segundo

