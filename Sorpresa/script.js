/* 🌷 PALABRAS DE ALIENTO */
function mostrarAliento() {
    document.getElementById("contenido").innerHTML = `
    <div class="caja">
    <h2>Para ti, Divina 🤍</h2>

    <p>
    Si hoy te sientes cansada, quiero que recuerdes esto:
    Dios no te soltó, no te soltará y no se ha olvidado de ti.
    </p>

    <p>
    Cada lágrima que has derramado tiene sentido,
    cada proceso tiene propósito
    y cada silencio también está siendo trabajado por Dios.
    </p>

    <p>
    Tú vales incluso cuando no te sientes fuerte,
    incluso cuando dudas,
    incluso cuando solo sobrevives.
    </p>

    <p>
    Dios sigue escribiendo tu historia con amor.
    </p>

    <h3>📖 Versículos</h3>
    <p><b>Isaías 41:10</b> — No temas, porque yo estoy contigo.</p>
    <p><b>Salmos 34:18</b> — Cercano está Jehová a los quebrantados.</p>
    <p><b>Mateo 11:28</b> — Venid a mí y yo os haré descansar.</p>
    </div>
    `;
}

/* 🌸 FLORES */
function dibujarNombreConFlores() {
    const nombre = prompt("Escribe tu nombre:");
    if (!nombre) return;

    const canvas = document.getElementById("canvasNombre");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth * 0.9;
    canvas.height = 300;

    // Texto base
    ctx.font = "bold 120px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "black";
    ctx.fillText(nombre, canvas.width / 2, 180);

    // Obtener pixeles del texto
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar flores sobre el contorno del texto
    for (let y = 0; y < canvas.height; y += 6) {
        for (let x = 0; x < canvas.width; x += 6) {
            const index = (y * canvas.width + x) * 4;
            if (data[index + 3] > 150) {
                ctx.font = "16px Arial";
                ctx.fillText("🌸", x, y);
            }
        }
    }

    // Lluvia de flores
    for (let i = 0; i < 60; i++) {
        const flor = document.createElement("div");
        flor.className = "flor";
        flor.innerHTML = "🌸";
        flor.style.left = Math.random() * window.innerWidth + "px";
        flor.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(flor);
        setTimeout(() => flor.remove(), 6000);
    }
}



/* 🌅 ATARDECER */
function atardecerReal() {
    const cielo = document.getElementById("cielo");
    const sol = document.getElementById("sol");
    const luna = document.getElementById("luna");
    const mensaje = document.getElementById("mensajeFinal");

    let solY = 80;
    let oscuridad = 0;
    let estrellasCreadas = 0;

    const intervalo = setInterval(() => {

        // ☀️ Sol cae MÁS rápido
        solY += 0.7;
        sol.style.top = solY + "px";

        // 🌅 Oscurecer cielo progresivo
        oscuridad += 0.0015;

        cielo.style.background = `linear-gradient(
            rgb(${255 - oscuridad*140}, ${160 - oscuridad*140}, ${160 - oscuridad*140}),
            rgb(${240 - oscuridad*220}, ${190 - oscuridad*220}, ${180 - oscuridad*220})
        )`;

        // 🌙 Luna aparece MUY lento
        if (oscuridad > 0.45) {
            luna.style.opacity = Math.min((oscuridad - 0.45) * 1.2, 1);
        }

        // ⭐ Estrellas aparecen una por una lentamente
        if (oscuridad > 0.6 && estrellasCreadas < 80) {
            const estrella = document.createElement("div");
            estrella.className = "estrella";
            estrella.innerHTML = "✦";
            estrella.style.left = Math.random() * window.innerWidth + "px";
            estrella.style.top = Math.random() * window.innerHeight + "px";
            cielo.appendChild(estrella);

            setTimeout(() => {
                estrella.style.opacity = 1;
            }, 200);

            estrellasCreadas++;
        }

        // ✝️ Final
        if (solY > window.innerHeight + 50) {
            clearInterval(intervalo);
            setTimeout(() => {
                mensaje.style.display = "block";
            }, 800);
        }

    }, 40);
}


function recibirAbrazo() {
    const texto = document.getElementById("abrazoTexto");
    texto.innerHTML = `
    Imagina un abrazo largo,<br>
    de esos que no preguntan nada,<br>
    solo sostienen 🤍
    `;
}


/* ✨ PROMESAS */
const promesas = [
    ["Dios pelea por ti", "Éxodo 14:14"],
    ["El Señor te sostiene", "Salmos 55:22"],
    ["No estás sola", "Isaías 41:13"],
    ["Dios restaura", "Joel 2:25"],
    ["Él te da descanso", "Mateo 11:28"],
    ["Su amor no falla", "Lamentaciones 3:22-23"]
];

function promesaRandom() {
    const r = promesas[Math.floor(Math.random() * promesas.length)];
    document.getElementById("promesa").innerHTML =
        `<div class="caja"><h2>${r[0]}</h2><p>📖 ${r[1]}</p></div>`;
}

/* 🕯️ LUZ */
function encenderLuz() {
    document.body.className = "pantalla-blanca";
    document.body.innerHTML = `
    <h1>🕯️</h1>
    <p>Incluso una pequeña luz vence la oscuridad.</p>
    `;
}

/* 💫 ALGO ESPECIAL */
function escribirMensaje() {
    const texto = "Eres más amada de lo que imaginas 🤍";
    let i = 0;
    const elemento = document.getElementById("mensaje");

    const intervalo = setInterval(() => {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
            lluviaCorazones();
        }
    }, 100);
}

function lluviaCorazones() {
    for (let i = 0; i < 40; i++) {
        const corazon = document.createElement("div");
        corazon.className = "flor";
        corazon.innerHTML = "💖";
        corazon.style.left = Math.random() * window.innerWidth + "px";
        corazon.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(corazon);
        setTimeout(() => corazon.remove(), 6000);
    }
}

function reproducirMusica() {
    const audio = document.getElementById("musicaAliento");
    audio.volume = 0.6; // volumen suave
    audio.play();
}

function pausarMusica() {
    const audio = document.getElementById("musicaAliento");
    audio.pause();
}
const textoCarta = `
Divina 🤍,

Quiero que sepas que escribirte estas palabras no nace de una obligación, sino de una profunda gratitud. Hay personas que llegan a nuestra vida y se vuelven parte del paisaje cotidiano, pero hay otras —como tú— que se vuelven refugio, fuerza y descanso. Tú has sido eso para mí.

Gracias por estar.
Por estar incluso cuando no he sabido explicar lo que me pasa.
Por quedarte cuando otros se van.
Por escuchar cuando las palabras pesan y el silencio habla más fuerte.

Tu presencia ha sido un regalo de Dios en mi vida.

La Biblia dice:
“En todo tiempo ama el amigo, y es como un hermano en tiempo de angustia.”
— Proverbios 17:17

Y tú has sido exactamente eso: una amiga fiel, constante, real.

Hay momentos en los que uno se siente cansado del alma, no del cuerpo. Momentos donde la sonrisa cuesta y donde el corazón parece caminar más lento. Y aun así, tú has sabido llegar con palabras sencillas, con apoyo sincero, con una paciencia que no se improvisa. Eso no es casualidad, eso es reflejo del amor de Dios obrando en ti.

Quiero que recuerdes algo, incluso en los días donde te sientas débil:

“El Señor está cerca de los quebrantados de corazón; y salva a los de espíritu abatido.”
— Salmos 34:18

Dios está cerca de ti.
No lejos.
No distraído.
Cerca.

Cada lágrima que has derramado ha sido vista por Él. Cada oración que has hecho en silencio ha sido escuchada. Nada de tu vida ha pasado desapercibido.

Cuando sientas que el futuro es incierto, cuando la espera se haga larga o cuando el miedo intente hablar más fuerte que la esperanza, recuerda esta promesa:

“Porque yo sé los planes que tengo para vosotros, dice el Señor, planes de bienestar y no de calamidad, para daros un futuro y una esperanza.”
— Jeremías 29:11

Dios no improvisa contigo.
Tu vida no es un error.
Tu historia no está rota.

Eres valiosa. Eres importante. Eres amada.

Y aunque no siempre lo digas, aunque a veces cargues más de lo que muestras, quiero que sepas que no tienes que ser fuerte todo el tiempo. Dios no te pide perfección, te pide confianza.

“Bástate mi gracia; porque mi poder se perfecciona en la debilidad.”
— 2 Corintios 12:9

Está bien descansar.
Está bien llorar.
Está bien pedir ayuda.

Dios camina contigo incluso cuando sientes que avanzas sola.

Gracias, Divina, por ser luz en momentos oscuros, por ser apoyo cuando la fe tiembla, por ser amistad verdadera en un mundo que muchas veces se olvida de amar de verdad. Tu vida tiene propósito, y Dios seguirá obrando en ti de maneras que aún no imaginas.

Que nunca se te olvide:

“El Señor te bendiga y te guarde;
el Señor haga resplandecer su rostro sobre ti;
el Señor alce sobre ti su rostro y ponga en ti paz.”
— Números 6:24–26

Aquí estoy.
Y Dios está contigo.

Con cariño,
🤍
`;

let index = 0;

function escribirCarta() {
    const elemento = document.getElementById("cartaTexto");
    if (index < textoCarta.length) {
        elemento.innerHTML += textoCarta.charAt(index);
        index++;
        setTimeout(escribirCarta, 35);
    }
}
