let contador = 0;
let contador_tarea = false;
let contador_nota = false;
let contador_recordatorio = false;
let d = document.createElement('div');
let c = document.createElement('div');
let a = document.createElement('div');
let datos_tiempo = {
    Recordatorio:"",
    Fecha:"",
    Hora:""
};



function agregar_nota(){
   
    const nota = [
        "agregar nota",
        "me agregas una nota",
        "me haces una nota",
        "puedes añadir una nota por favor",
        "podrias agregar una nueva nota",
        "me ayudas a guardar una nota",
        "podrias anotar algo para mi",
        "te encargarias de añadir una nota",
        "me puedes escribir una nota",
        "me haces el favor de agregar una nota",
        "puedes registrar una nota para mi",
        "te importaría añadir una nota",
        "podrias crear una nota nueva",
        "agregar una nota"
    ];
    for(let i = 0; i < nota.length;i++){
        if( normalizedInput === nota[i]){
            setTimeout(() => {
                desbloquear = false;
                inputUsuario = "";
                contador = 1;
            },1000);
        }
    }
    if(desbloquear === false && contador === 1){
        let contenedor_7 = document.createElement('div');
        pantalla.appendChild(contenedor_7);
        contenedor_7.className = "contenedor";
        let texto_7 = document.createElement('p');
        texto_7.textContent = inputUsuario;
        contenedor_7.appendChild(texto_7);
        texto_7.className = "estilo_texto";
        let imagen_7 = document.createElement('img');
        imagen_7.src = "imagenes/usuario_3.jpg";
        imagen_7.className = "b";
        contenedor_7.appendChild(imagen_7);
        scrollToBottom();
        setTimeout(()=>{
            let contenedor_8 = document.createElement('div');
            pantalla.appendChild(contenedor_8);
            contenedor_8.className = "contenedor";
            let imagen_8 = document.createElement('img');
            imagen_8.src = "imagenes/bot_new_color.png";
            imagen_8.className = "a";
            contenedor_8.appendChild(imagen_8);
            texto_8 = document.createElement('p');
            texto_8.className = "estilo_texto";
            texto_8.textContent = "Tu nota ha sido registrada con éxito.";
            contenedor_8.appendChild(texto_8);
            scrollToBottom();
            desbloquear = true;
        },1000);
    }
}
    
function agregar_tarea(){
    
    const tarea = [
        "agregar una tarea",
        "agregar tarea",
        "me agregas una tarea",
        "puedes añadir una tarea por favor",
        "podrias agregarme una nueva tarea",
        "me ayudas a incluir una tarea",
        "te importaria anotar una tarea para mi",
        "me haces el favor de agregar una tarea",
        "podrias registrar una tarea",
        "me puedes añadir una tarea a la lista",
        "puedes incluir una tarea para mi",
        "te encargarias de agregar una tarea",
        "puedes crear una tarea nueva"
    ];
    for(let i = 0; i < tarea.length;i++){
        if( normalizedInput === tarea[i]){
            setTimeout(() => {
                desbloquear = false;
                inputUsuario = "";
                contador = 2;
            },1000);
        }
    }
    if(desbloquear === false && contador === 2 ){
        let contenedor_9 = document.createElement('div');
        pantalla.appendChild(contenedor_9);
        contenedor_9.className = "contenedor";
        let texto_9 = document.createElement('p');
        texto_9.textContent = inputUsuario;
        contenedor_9.appendChild(texto_9);
        texto_9.className = "estilo_texto";
        let imagen_9 = document.createElement('img');
        imagen_9.src = "imagenes/usuario_3.jpg";
        imagen_9.className = "b";
        contenedor_9.appendChild(imagen_9);
        scrollToBottom();
        setTimeout(()=>{
            let contenedor_10 = document.createElement('div');
            pantalla.appendChild(contenedor_10);
            contenedor_10.className = "contenedor";
            let imagen_10 = document.createElement('img');
            imagen_10.src = "imagenes/bot_new_color.png";
            imagen_10.className = "a";
            contenedor_10.appendChild(imagen_10);
            texto_10 = document.createElement('p');
            texto_10.className = "estilo_texto";
            texto_10.textContent = "Tu tarea ha sido registrada con éxito.";
            contenedor_10.appendChild(texto_10);
            desbloquear = true;
            scrollToBottom();
        },1000);
    }
}
function agregar_recordatorio(){
    const recordatorio = [
        "agregar recordatorio",
        "agregar un recordatorio",
        "me agregas un recordatorio",
        "puedes añadir un recordatorio por favor",
        "podrias agregarme un nuevo recordatorio",
        "te importaria anotar un recordatorio para mi",
        "me haces el favor de agregar un recordatorio",
        "podrias registrar un recordatorio",
        "me puedes añadir un recordatorio a la lista",
        "puedes incluir un recordatorio para mi",
        "te encargarias de agregar un recordatorio",
        "puedes crear un nuevo recordatorio"
    ];
    for(let i = 0; i < recordatorio.length;i++){
        if( normalizedInput === recordatorio[i]){
            setTimeout(() => {
                desbloquear = false;
                inputUsuario = "";
                contador = 3;
            },1000);
        }
    }
    if(desbloquear === false && contador === 3 ){
        let contenedor_11 = document.createElement('div');
        pantalla.appendChild(contenedor_11);
        contenedor_11.className = "contenedor";
        let texto_11 = document.createElement('p');
        texto_11.textContent = inputUsuario;
        contenedor_11.appendChild(texto_11);
        texto_11.className = "estilo_texto";
        let imagen_11 = document.createElement('img');
        imagen_11.src = "imagenes/usuario_3.jpg";
        imagen_11.className = "b";
        contenedor_11.appendChild(imagen_11);
        scrollToBottom();
        setTimeout(()=>{
            let contenedor_12 = document.createElement('div');
            pantalla.appendChild(contenedor_12);
            contenedor_12.className = "contenedor";
            let imagen_12 = document.createElement('img');
            imagen_12.src = "imagenes/bot_new_color.png";
            imagen_12.className = "a";
            contenedor_12.appendChild(imagen_12);
            texto_12 = document.createElement('p');
            texto_12.className = "estilo_texto";
            texto_12.textContent = "Tu recordatorio ha sido registrada con éxito.";
            contenedor_12.appendChild(texto_12);
            desbloquear = true;
            scrollToBottom();
        },1000);
        setTimeout(()=>{
            let contenedor_5 = document.createElement('div');
            pantalla.appendChild(contenedor_5);
            contenedor_5.className = "contenedor";
            let imagen_5 = document.createElement('img');
            imagen_5.src = "imagenes/bot_new_color.png";
            imagen_5.className = "a";
            contenedor_5.appendChild(imagen_5);
            let texto_5 = document.createElement('p');
            texto_5.className = "estilo_texto";
            texto_5.textContent = "Por favor, no cierres el navegador para que la alarma del recordatorio pueda sonar correctamente";
            contenedor_5.appendChild(texto_5);
            scrollToBottom();
        },1500);
        setTimeout(()=>{
            let contenedor_5 = document.createElement('div');
            pantalla.appendChild(contenedor_5);
            contenedor_5.className = "contenedor";
            let imagen_5 = document.createElement('img');
            imagen_5.src = "imagenes/bot_new_color.png";
            imagen_5.className = "a";
            contenedor_5.appendChild(imagen_5);
            let texto_5 = document.createElement('p');
            texto_5.className = "estilo_texto";
            texto_5.textContent = "Nota: si cierras el navegador, la alarma sonará a la hora del recordatorio, pero no se activará si el navegador está cerrado en ese momento.";
            contenedor_5.appendChild(texto_5);
            scrollToBottom();
        },2000);
    }
}
function guardar(x){
    if(desbloquear === false && contador === 1){
        let notasGuardadas = JSON.parse(window.localStorage.getItem('notas')) || [];
        notasGuardadas.push(x);
        window.localStorage.setItem('notas',JSON.stringify(notasGuardadas));
    }
    else if(desbloquear === false && contador === 2){
        let tareasGuardadas = JSON.parse(window.localStorage.getItem('tarea')) || [];
        tareasGuardadas.push({ texto: x, estado: 'pendiente' });
        window.localStorage.setItem('tarea',JSON.stringify(tareasGuardadas));
    
    }
  
}
function guardar_recordatorio(datos){
    if(desbloquear === false && contador === 3){
        let recordatorioGuardadas = JSON.parse(window.localStorage.getItem('recordatorio')) || [];
        let partes = datos.split(',');
        let [re,fe,ho] = partes.map(p => p.trim());
        datos_tiempo.Recordatorio = re;
        datos_tiempo.Fecha = fe;
        datos_tiempo.Hora = ho;
        recordatorioGuardadas.push({...datos_tiempo });
        window.localStorage.setItem('recordatorio',JSON.stringify(recordatorioGuardadas));
     
    }
}

function revisar_tarea(){
   
    const vocabulario_recuperar =[
        "puedes enseñarme mis tareas",
        "me podrias mostrar mis tareas",
        "quiero ver mis tareas",
        "puedes mostrarme la lista de mis tareas",
        "me ayudas a ver mis tareas",
        "puedes darme un vistazo a mis tareas",
        "me gustaria revisar mis tareas",
        "me enseñas las tareas que tengo",
        "puedes compartir mis tareas conmigo",
        "me muestras las tareas pendientes"
    ];
    for(let i = 0;i < vocabulario_recuperar.length;i++){
        if(normalizedInput === vocabulario_recuperar[i]){
            setTimeout(()=>{
                let contenedor_16 = document.createElement('div');
                pantalla.appendChild(contenedor_16);
                contenedor_16.className = "contenedor";
                let imagen_16 = document.createElement('img');
                imagen_16.src = "imagenes/bot_new_color.png";
                imagen_16.className = "a";
                contenedor_16.appendChild(imagen_16);
                let texto_16 = document.createElement('p');
                texto_16.className = "estilo_texto";
                texto_16.textContent = "Nota: para marcar una tarea como pendiente o agregarla a la lista, simplemente haz clic en el contenido de la tarea.";
                contenedor_16.appendChild(texto_16);
                let contenedor_5 = document.createElement('div');
                pantalla.appendChild(contenedor_5);
                contenedor_5.className = "contenedor";
                let imagen_5 = document.createElement('img');
                imagen_5.src = "imagenes/bot_new_color.png";
                imagen_5.className = "a";
                contenedor_5.appendChild(imagen_5);
                let texto_5 = document.createElement('p');
                texto_5.className = "estilo_texto";
                texto_5.textContent = "Para eliminar una tarea, simplemente haz doble clic sobre el contenido que deseas eliminar.";
                contenedor_5.appendChild(texto_5);
                scrollToBottom();
            },1000);
            setTimeout(()=>{
                contador_tarea = true;
                recuperar_tarea();
            },2000);
            break;
        }
    }

}
function recuperar_tarea() {
    if (contador_tarea === true) {
        pantalla.appendChild(d);
        let tareasGuardadas = JSON.parse(window.localStorage.getItem('tarea')) || [];
        d.innerHTML = "";
        tareasGuardadas.forEach((tarea, index) => {
            let contenedor_tarea = document.createElement('div');
            contenedor_tarea.className = "contenedor";
            contenedor_tarea.setAttribute('data-index', index);
            let contenedorTextoTarea = document.createElement('div');
            contenedorTextoTarea.className = "estilo_texto_2";
            let imagen_bot = document.createElement('img');
            imagen_bot.src = "imagenes/bot_new_color.png";
            imagen_bot.className = "a";
            let texto_tarea = document.createElement('p');
            texto_tarea.textContent = tarea.texto + ". ";  
            let texto_datos = document.createElement('p');
            texto_datos.textContent = tarea.estado === 'pendiente' ? " (Pendiente)" : " (Listo)";
            d.appendChild(contenedor_tarea);
            contenedor_tarea.appendChild(imagen_bot);
            contenedor_tarea.appendChild(contenedorTextoTarea);
            contenedorTextoTarea.appendChild(texto_tarea);
            contenedorTextoTarea.appendChild(texto_datos);
            contenedor_tarea.addEventListener("click", () => {
                
                tarea.estado = tarea.estado === 'pendiente' ? 'listo' : 'pendiente';
                texto_datos.textContent = tarea.estado === 'pendiente' ? " (Pendiente)" : " (Listo)";
                tareasGuardadas[index] = tarea;
                window.localStorage.setItem('tarea', JSON.stringify(tareasGuardadas));
               
            });
            contenedor_tarea.addEventListener("dblclick", () => {
               
                eliminar_tarea(index);
             
            });
            scrollToBottom();
        });
    }
}


function eliminar_tarea(index){
    let tareasGuardadas = JSON.parse(window.localStorage.getItem('tarea')) || [];
    tareasGuardadas.splice(index,1);
    window.localStorage.setItem('tarea',JSON.stringify(tareasGuardadas));
    recuperar_tarea();
}

function revisar_nota(){
    const revisar_no = [
        "puedes enseñarme mis notas",
        "me podrias mostrar mis notas",
        "quiero ver mis notas",
        "puedes mostrarme la lista de mis notas",
        "me ayudas a ver mis notas",
        "puedes darme un vistazo a mis notas",
        "me gustaria revisar mis notas",
        "me enseñas las notas que tengo",
        "puedes compartir mis notas conmigo",
        "me muestras las notas guardadas" 
    ];
    for(let i = 0; i < revisar_no.length;i++){
        if(normalizedInput === revisar_no[i]){
            setTimeout(()=>{
                let contenedor_5 = document.createElement('div');
                pantalla.appendChild(contenedor_5);
                contenedor_5.className = "contenedor";
                let imagen_5 = document.createElement('img');
                imagen_5.src = "imagenes/bot_new_color.png";
                imagen_5.className = "a";
                contenedor_5.appendChild(imagen_5);
                let texto_5 = document.createElement('p');
                texto_5.className = "estilo_texto";
                texto_5.textContent = "Nota: para eliminar una nota, simplemente haz doble clic sobre el contenido que deseas eliminar.";
                contenedor_5.appendChild(texto_5);
                scrollToBottom();
            },1000);
            setTimeout(()=>{
                contador_nota = true;
                recuperar_nota();
            },2000);
            break;
        }
    }
}
function recuperar_nota(){
    if(contador_nota === true){
        pantalla.appendChild(c);
        let notasGuardadas = JSON.parse(window.localStorage.getItem('notas')) || [];
        c.innerHTML = ""
        notasGuardadas.forEach((nota,index)=>{
            let contenedor_nota = document.createElement('div');
            contenedor_nota.className = "contenedor";
            contenedor_nota.setAttribute('data-index', index);
            let imagen_logo = document.createElement('img');
            imagen_logo.src = "imagenes/bot_new_color.png";
            imagen_logo.className = "a";
            let texto_nota = document.createElement('p');
            texto_nota.textContent = nota + ".";
            texto_nota.className = "estilo_texto";
            contenedor_nota.addEventListener("dblclick",()=>{
                eliminar_nota(index);
                
            });
            c.appendChild(contenedor_nota);
            contenedor_nota.appendChild(imagen_logo);
            contenedor_nota.appendChild(texto_nota);
            scrollToBottom();



        });
    }
}
function eliminar_nota(index){
    let notasGuardadas = JSON.parse(window.localStorage.getItem('notas')) || [];
    notasGuardadas.splice(index,1);
    window.localStorage.setItem('notas',JSON.stringify(notasGuardadas));
    recuperar_nota();
}
function revisar_recordatorio(){
    const recordatorio_vo = [
        "puedes enseñarme mis recordatorios",
        "me podrias mostrar mis recordatorios",
        "quiero ver mis recordatorios",
        "puedes mostrarme la lista de mis recordatorios",
        "me ayudas a ver mis recordatorios",
        "puedes darme un vistazo a mis recordatorios",
        "me gustaria revisar mis recordatorios",
        "me enseñas los recordatorios que tengo",
        "puedes compartir mis recordatorios conmigo",
        "me muestras los recordatorios pendientes"
    ];
    for(let i = 0; i < recordatorio_vo.length;i++){
        if( normalizedInput === recordatorio_vo[i]){
            setTimeout(()=>{
                contador_nota = true;
                let contenedor_5 = document.createElement('div');
                pantalla.appendChild(contenedor_5);
                contenedor_5.className = "contenedor";
                let imagen_5 = document.createElement('img');
                imagen_5.src = "imagenes/bot_new_color.png";
                imagen_5.className = "a";
                contenedor_5.appendChild(imagen_5);
                let texto_5 = document.createElement('p');
                texto_5.className = "estilo_texto";
                texto_5.textContent = "Nota: para eliminar un recordatorio, simplemente haz doble clic sobre el contenido que deseas eliminar.";
                contenedor_5.appendChild(texto_5);
                scrollToBottom();
            },1000);
            setTimeout(() => {
                contador_recordatorio = true;
                recuperar_recordatorios();
            },2000);
        }
    }
} 
function recuperar_recordatorios(){
    if(contador_recordatorio === true){
        pantalla.appendChild(a);
        let recordatorioGuardadas = JSON.parse(window.localStorage.getItem('recordatorio')) || [];
        a.innerHTML = "";
        recordatorioGuardadas.forEach((recordatorio,index) =>{
            let contenedor_recordatorio = document.createElement('div');
            contenedor_recordatorio.className = "contenedor";
            let imagen_lo = document.createElement('img');
            imagen_lo.src = "imagenes/bot_new_color.png";
            imagen_lo.className = "a";
            let texto_recordatorio = document.createElement('div');
            texto_recordatorio.textContent = JSON.stringify(recordatorio).replace(/[{}"]/g, ' ') 
            .replace(/:/g, ': ')
            texto_recordatorio.className = "estilo_texto";
            contenedor_recordatorio.addEventListener("dblclick",()=>{
                eliminar_recordatorio(index);
            });
            a.appendChild(contenedor_recordatorio);
            contenedor_recordatorio.appendChild(imagen_lo);
            contenedor_recordatorio.appendChild(texto_recordatorio);
            scrollToBottom();


        });

    }
}
function eliminar_recordatorio(index){
    let recordatorioGuardadas = JSON.parse(window.localStorage.getItem('recordatorio')) || [];
    recordatorioGuardadas.splice(index,1);
    window.localStorage.setItem('recordatorio',JSON.stringify(recordatorioGuardadas));
    recuperar_recordatorios();

};
boton.addEventListener("click",() =>{
    agregar_nota();
    agregar_tarea();
    agregar_recordatorio();
    guardar(inputUsuario);
    guardar_recordatorio(inputUsuario);
    revisar_tarea();
    revisar_nota();
    revisar_recordatorio();
});
escribir.addEventListener("keypress",(event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        agregar_nota();
        agregar_tarea();
        agregar_recordatorio();
        guardar(inputUsuario);
        guardar_recordatorio(inputUsuario);
        revisar_tarea();
        revisar_nota();
        revisar_recordatorio();
    }
});
recuperar_tarea();
recuperar_nota();
recuperar_recordatorios();

