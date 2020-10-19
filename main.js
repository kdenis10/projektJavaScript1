// pobieramy nasze selektory z html (DOM)
// i zapisujemy w nasze zmienne w JS:
const btnUp = document.querySelector('.resizeUp')
const btnDown = document.querySelector('.resizeDown')
const textP = document.querySelector('.prgrph')

// zmienna która będzie się zmieniała 
// po kliknięciu(font-size:
let textSize = 16;

// funkcja ktora odpowiada 
// za zwiększenie tekstu (font-size) - textP+:
function textUp(){
    textSize++;
    textP.style.fontSize = textSize + "px";
}

// funkcja ktora odpowiada 
// za zmniejszenie tekstu (font-size) - textP-:
function textDown(){
    textSize--;
    textP.style.fontSize = textSize + "px";
}

//co zrobi się po klicknięciu na przyciski?:
btnUp.addEventListener('click', textUp);
btnDown.addEventListener('click', textDown);

