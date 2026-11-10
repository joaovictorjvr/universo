// ==========================================================
// Página Sistema Solar: pop-up com informações do astro
//
// Como funciona:
// - Cada astro do desenho (<g class="astro">) tem um data-info com o id da "ficha" dele.
// - As fichas ficam escondidas no HTML (dentro de <div id="fichas" hidden>).
// - Ao passar o mouse (ou focar com o teclado, ou tocar no celular), copiamos a
//   ficha para dentro do pop-up e o posicionamos perto do astro.
// ==========================================================

const astros = document.querySelectorAll('.astro');
const popup = document.getElementById('popup');
const MARGEM = 8;       // distância mínima entre o pop-up e a borda da tela (px)
let astroAtual = null;  // astro que está com o pop-up aberto

function mostrarPopup(astro) {
    const ficha = document.getElementById(astro.dataset.info);
    if (!ficha || !popup) return;

    astroAtual = astro;
    popup.innerHTML = ficha.innerHTML;                   // copia o conteúdo da ficha
    popup.style.setProperty('--cor', ficha.dataset.cor); // cor do astro na borda do pop-up
    popup.hidden = false;

    posicionarPopup(astro.querySelector('.area'));
}

function posicionarPopup(referencia) {
    const caixa = referencia.getBoundingClientRect();   // posição do astro na tela
    const largura = popup.offsetWidth;
    const altura = popup.offsetHeight;

    // Horizontal: centralizado no astro, sem passar das bordas da tela
    let esquerda = caixa.left + caixa.width / 2 - largura / 2;
    esquerda = Math.max(MARGEM, Math.min(esquerda, window.innerWidth - largura - MARGEM));

    // Vertical: abaixo do astro; se não couber, vai para cima
    let topo = caixa.bottom + 6;
    if (topo + altura > window.innerHeight - MARGEM) {
        topo = caixa.top - altura - 6;
    }
    topo = Math.max(MARGEM, topo);

    popup.style.left = esquerda + 'px';
    popup.style.top = topo + 'px';
}

function esconderPopup() {
    astroAtual = null;
    if (popup) popup.hidden = true;
}

astros.forEach((astro) => {
    astro.addEventListener('mouseenter', () => mostrarPopup(astro));  // mouse entra
    // Mouse sai (no toque do celular o "sair" é simulado, então só vale para o mouse)
    astro.addEventListener('pointerleave', (evento) => {
        if (evento.pointerType === 'mouse') esconderPopup();
    });
    astro.addEventListener('focus', () => mostrarPopup(astro));       // teclado (Tab)
    astro.addEventListener('blur', esconderPopup);
    astro.addEventListener('click', () => mostrarPopup(astro));       // toque no celular
});

// Esc fecha o pop-up
document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape') esconderPopup();
});

// Ao rolar a página (ou o desenho, no celular), o pop-up acompanha o astro
document.addEventListener('scroll', () => {
    if (astroAtual) posicionarPopup(astroAtual.querySelector('.area'));
}, true);
