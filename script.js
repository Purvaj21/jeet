const heartButton = document.getElementById("heartButton");
const surprise = document.getElementById("surprise");
const typing = document.getElementById("typing");
const celebrate = document.getElementById("celebrate");

const letter = `My Dearest Jeet ❤️,

Happy Birthday to the most special person in my life.

Every moment with you becomes a beautiful memory that I cherish deeply. Your smile brightens my darkest days, your laughter fills my heart with joy, and your presence makes life so much more meaningful.

On your special day, I wish you endless happiness, success, good health, and all the love you truly deserve.

Thank you for being you.
I love you soo much Jeet ❤️

Yours,
Purva ❤️`;

heartButton.addEventListener("click", () => {
    surprise.style.display = "block";
    heartButton.style.display = "none";

    window.scrollTo({
        top: surprise.offsetTop,
        behavior: "smooth"
    });

    typeLetter();
});

function typeLetter() {
    let i = 0;

    function type() {
        if (i < letter.length) {
            typing.innerHTML += letter.charAt(i);
            i++;
            setTimeout(type, 35);
        }
    }

    typing.innerHTML = "";
    type();
}

celebrate.addEventListener("click", () => {

    confetti({
        particleCount: 300,
        spread: 180,
        origin: { y: 0.6 }
    });

    setInterval(() => {
        confetti({
            particleCount: 80,
            spread: 120,
            origin: {
                x: Math.random(),
                y: Math.random() * 0.5
            }
        });
    }, 1500);

    createHearts();

    alert("🎉 Happy Birthday Jeet ❤️\n\nForever Yours,\nPurva ❤️");
});

function createHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-30px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 6s linear, opacity 6s linear";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-110vh)";
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 6500);

    }, 400);
}
