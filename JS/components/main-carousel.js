// 1 Acessar a janela (browser) "window"
// 2 Pegar todo o HTML ".document"
// 3 Pegar o botão ".querySelector('Classe do botao no CSS"
// 4 Saber que esta sendo clicado no botão




const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 100;

btnRight.addEventListener('click', function() {
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px);`
})

btnLeft.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px);`
})