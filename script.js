// ==========================
// ELEMENTOS
// ==========================

const intro = document.querySelector(".intro");
const invitation = document.querySelector(".invitation");
const ending = document.querySelector(".ending");

const openBtn = document.getElementById("open");
const acceptBtn = document.getElementById("accept");
const typewriter = document.getElementById("typewriter");

// Ocultamos el botón hasta que termine el texto
acceptBtn.style.display = "none";

// ==========================
// TEXTO DE LA MISIÓN
// ==========================

const message = `📍 Destino: una sala de cine.

🎯 Objetivo: reír, emocionarnos y volver a ser niños por un rato.

Porque las mejores aventuras siempre se viven con alguien especial.

"Al infinito... y más allá." 🚀`;

let index = 0;

// ==========================
// EFECTO TYPEWRITER
// ==========================

function writeText() {

    if (index < message.length) {

        const character = message.charAt(index);

        if (character === "\n") {
            typewriter.innerHTML += "<br><br>";
        } else {
            typewriter.innerHTML += character;
        }

        index++;

        setTimeout(writeText, 35);

    } else {

        acceptBtn.style.display = "inline-block";

        acceptBtn.animate([
            {
                opacity: 0,
                transform: "translateY(20px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ], {
            duration: 600,
            fill: "forwards"
        });

    }

}

// ==========================
// ABRIR MISIÓN
// ==========================

const envelope = document.querySelector(".envelope");

openBtn.addEventListener("click", () => {

    openBtn.disabled = true;

    envelope.classList.add("open");

    setTimeout(() => {

        intro.style.opacity = "0";

        intro.style.transition = "1s";

    }, 1200);

    setTimeout(() => {

        intro.classList.add("hidden");

        invitation.classList.remove("hidden");

        invitation.animate(
            [
                {
                    opacity: 0,
                    transform: "scale(.94) translateY(40px)"
                },
                {
                    opacity: 1,
                    transform: "scale(1) translateY(0)"
                }
            ],
            {
                duration: 1200,
                easing: "ease-out",
                fill: "forwards"
            }
        );

        writeText();

    }, 2200);

});

// ==========================
// ACEPTAR MISIÓN
// ==========================

acceptBtn.addEventListener("click", () => {

    invitation.classList.add("hidden");

    setTimeout(() => {

        ending.classList.remove("hidden");

    }, 800);

});