const baraja = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54,
];

let curr = 0;

let idioma = "espanol";

const continuarBtn = document.querySelector(".continuarBtn");
const retrocederBtn = document.querySelector(".retrocederBtn");
const audio = document.querySelector("audio");
const iniciar = document.querySelector(".iniciar");
const img = document.querySelector(".loteriaImg");
const espanolBtn = document.querySelector(".espanol");
const englishBtn = document.querySelector(".english");
const rusoBtn = document.querySelector(".ruso");
const title = document.querySelector("h1");
const subtitle = document.querySelector("h2");

function desordena() {
  for (let i = baraja.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = baraja[i];
    baraja[i] = baraja[j];
    baraja[j] = k;
  }
} //desordena()

/*Después de la función desordena, el arreglo baraja va a contener
lo números pero en orden aleatorio, es decir ya no va a ser 1,2,3, sino
al azar, como 54,2,17....*/
//Ahora vamos a mostrar las barajas

espanolBtn.addEventListener("click", () => {
  continuarBtn.disabled = true;
  retrocederBtn.disabled = true;
  title.innerHTML = "La loteria";
  subtitle.innerHTML = "Cartas: ";
  continuarBtn.innerText = "Continuar";
  retrocederBtn.innerText = "Regresar";
  iniciar.innerText = "Iniciar"
  iniciar.style = "display: inline";
  img.style = "display: none";
  idioma = "espanol";
});

englishBtn.addEventListener("click", () => {
  continuarBtn.disabled = true;
  retrocederBtn.disabled = true;
  title.innerHTML = "The Lottery";
  subtitle.innerHTML = "Cards: ";
  continuarBtn.innerText = "Continue";
  retrocederBtn.innerText = "Comeback";
  iniciar.innerText = "Start"
  iniciar.style = "display: inline";
  img.style = "display: none";
  idioma = "english";
});

rusoBtn.addEventListener("click", () => {
  continuarBtn.disabled = true;
  retrocederBtn.disabled = true;
  title.innerHTML = "Лотерея";
  subtitle.innerHTML = "карты: ";
  continuarBtn.innerText = "продолжать";
  retrocederBtn.innerText = "назад";
  iniciar.innerText = "Начинать";
  iniciar.style = "display: inline";
  img.style = "display: none";
  idioma = "ruso";
});

iniciar.addEventListener("click", () => {
  curr = 0;
  desordena();
  audio.src = `./audio/${idioma}/${baraja[curr]}.m4a`;
  img.style = 'display: inline'
  img.src = `./img/${idioma}/${baraja[curr]}.jpg`;
  audio.play();
  console.log(baraja[curr], curr);
  iniciar.style = "display: none";
  continuarBtn.disabled = false;
  retrocederBtn.disabled = false;
});

continuarBtn.addEventListener("click", () => {
  if (curr < 53) {
    curr++;
    img.src = `./img/${idioma}/${baraja[curr]}.jpg`;
    audio.src = `./audio/${idioma}/${baraja[curr]}.m4a`;
    audio.play();
    console.log(baraja[curr], curr, img);
  }
});
retrocederBtn.addEventListener("click", () => {
  if (curr > 0) {
    curr--;
    img.src = `./img/${idioma}/${baraja[curr]}.jpg`;
    audio.src = `./audio/${idioma}/${baraja[curr]}.m4a`;
    audio.play();
    console.log(baraja[curr], curr, img);
  }
});
