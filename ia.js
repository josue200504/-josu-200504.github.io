const net = new brain.NeuralNetwork();

let escribir = document.getElementById("escribir");
let boton = document.getElementById("boton");
let pantalla = document.getElementById("pantalla");
let desbloquear = true;
let  respuestaChatbot;
let inputUsuario;
let found;


function normalizeInput(input) {
    return input.toLowerCase().replace(/[¿?¡!.,;:]/g, '').replace(/á/g, 'a')
    .replace(/é/g, 'e') 
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o') 
    .replace(/ú/g, 'u') .trim();
}


function cargarDatosEntrenamiento() {
    
    Promise.all([
        fetch('datas.json').then(response => response.json()),
        fetch('datas_1.json').then(response => response.json()),
        fetch('datas_2.json').then(response => response.json())
        
    ])
    .then(([data1, data2,data3]) => {
        datos = [...data1.entrenamiento,...data2.entrenamiento_1,...data3.entrenamiento_2];
        net.train(datos,{
            iterations: 3000,
            learningRate: 0.3, 
            log: true,
            logPeriod: 100 
        });
    })
    .catch(error => {
        console.error('Error al cargar los datos:', error);
    });
}

// Llamar a la función para cargar los datos y entrenar la red
cargarDatosEntrenamiento();

// Función para obtener la respuesta del chatbot
function obtenerRespuesta(inputUsuario) {
    normalizedInput = normalizeInput(inputUsuario);
    const resultado = net.run({ [normalizedInput]: 1 });
    const mejorRespuesta = Object.keys(resultado).reduce((a, b) => resultado[a] > resultado[b] ? a : b);

    return mejorRespuesta;
}
function scrollToBottom() {
    pantalla.scrollTop = pantalla.scrollHeight;
}
function texto_bot(){
    inputUsuario = escribir.value.trim();
    respuestaChatbot = obtenerRespuesta(inputUsuario);
    if(desbloquear === true){
        if (inputUsuario !== "") {
            // parte 1
            let contenedor_1 = document.createElement('div');
            pantalla.appendChild(contenedor_1);
            contenedor_1.className = "contenedor";
            let texto_1 = document.createElement('p');
            texto_1.textContent = inputUsuario;
            contenedor_1.appendChild(texto_1);
            texto_1.className = "estilo_texto";
            let imagen_1 = document.createElement('img');
            imagen_1.src = "imagenes/usuario_3.jpg";
            imagen_1.className = "b";
            contenedor_1.appendChild(imagen_1);
            scrollToBottom();

            found = false;
             
            for (let i = 0; i < entrada.length; i++) { 
                if ( normalizedInput === entrada[i]) { 
                    setTimeout(() => {
                        // parte 2
                        let contenedor_2 = document.createElement('div');
                        pantalla.appendChild(contenedor_2);
                        contenedor_2.className = "contenedor";
                        let imagen_2 = document.createElement('img');
                        imagen_2.src = "imagenes/bot_new_color.png";
                        imagen_2.className = "a";
                        contenedor_2.appendChild(imagen_2);
                        let texto_2 = document.createElement('p');
                        texto_2.className = "estilo_texto";
                        texto_2.textContent = respuestaChatbot;
                        contenedor_2.appendChild(texto_2);
                        scrollToBottom();
                    }, 1500);
                    found = true; 
                    break; 
                }
            }
            
            if (!found) {
                setTimeout(() => {
                    // parte 3
                    let contenedor_3 = document.createElement('div');
                    pantalla.appendChild(contenedor_3);
                    contenedor_3.className = "contenedor";
                    let imagen_3 = document.createElement('img');
                    imagen_3.src = "imagenes/bot_new_color.png";
                    imagen_3.className = "a";
                    contenedor_3.appendChild(imagen_3);
                    let texto_3 = document.createElement('p');
                    texto_3.className = "estilo_texto";
                    texto_3.textContent = "Lo siento, esa palabra no está en mi vocabulario. A continuación, te proporcionaré algunas instrucciones básicas sobre mi vocabulario";
                    contenedor_3.appendChild(texto_3);
                    scrollToBottom();
                }, 1000);
                setTimeout(() => {
                    // parte 3
                    let contenedor_4 = document.createElement('div');
                    pantalla.appendChild(contenedor_4);
                    contenedor_4.className = "contenedor";
                    let imagen_4 = document.createElement('img');
                    imagen_4.src = "imagenes/bot_new_color.png";
                    imagen_4.className = "a";
                    contenedor_4.appendChild(imagen_4);
                    let texto_4 = document.createElement('p');
                    texto_4.className = "estilo_texto";
                    texto_4.textContent = "Para agregar una nota, tarea o recordatorio, escribe (agregar) seguido de lo que deseas.";
                    contenedor_4.appendChild(texto_4);
                    scrollToBottom();
                }, 1500);
                setTimeout(() => {
                    // parte 3
                    let contenedor_5 = document.createElement('div');
                    pantalla.appendChild(contenedor_5);
                    contenedor_5.className = "contenedor";
                    let imagen_5 = document.createElement('img');
                    imagen_5.src = "imagenes/bot_new_color.png";
                    imagen_5.className = "a";
                    contenedor_5.appendChild(imagen_5);
                    let texto_5 = document.createElement('p');
                    texto_5.className = "estilo_texto";
                    texto_5.textContent = "Para eliminar una tarea, recordatorio o nota, simplemente haz doble clic sobre el contenido que deseas eliminar.";
                    contenedor_5.appendChild(texto_5);
                    scrollToBottom();
                }, 2000);
                setTimeout(() => {
                    // parte 3
                    let contenedor_6 = document.createElement('div');
                    pantalla.appendChild(contenedor_6);
                    contenedor_6.className = "contenedor";
                    let imagen_6 = document.createElement('img');
                    imagen_6.src = "imagenes/bot_new_color.png";
                    imagen_6.className = "a";
                    contenedor_6.appendChild(imagen_6);
                    let texto_6 = document.createElement('p');
                    texto_6.className = "estilo_texto";
                    texto_6.textContent = "Para mostrar tus tareas, notas o recordatorios, escribe (quiero ver mis) y el tipo.";
                    contenedor_6.appendChild(texto_6);
                    scrollToBottom();
                }, 2500);
               
            }
        }
    }
    escribir.value = "";
}
boton.addEventListener("click", function() {
    texto_bot();
    
});
escribir.addEventListener("keypress",(event)=>{
    if (event.key === 'Enter') {
        event.preventDefault();
        texto_bot();
    }
});