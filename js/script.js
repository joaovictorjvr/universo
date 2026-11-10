// ==========================================================
// Projeto Universo - JavaScript geral (carregado em todas as páginas)
// 1. Menu no celular
// 2. Formulário de contato
// 3. "Você sabia?" (página inicial)
// ==========================================================


// ---------- 1. Menu no celular ----------
const botaoMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');

if (botaoMenu && menu) {
    // Abre e fecha o menu ao clicar no botão
    botaoMenu.addEventListener('click', () => {
        const aberto = menu.classList.toggle('open');
        botaoMenu.setAttribute('aria-expanded', aberto);
    });

    // A tecla Esc fecha o menu
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape') {
            menu.classList.remove('open');
            botaoMenu.setAttribute('aria-expanded', false);
        }
    });
}


// ---------- 2. Formulário de contato ----------
const formulario = document.querySelector('form');
const mensagemStatus = document.getElementById('status');

if (formulario && mensagemStatus) {
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();   // impede a página de recarregar

        const primeiroNome = formulario.nome.value.trim().split(' ')[0];
        mensagemStatus.textContent = 'Mensagem enviada! Obrigado, ' + primeiroNome + '.';
        mensagemStatus.hidden = false;

        formulario.reset();
        mensagemStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
}


// ---------- 3. "Você sabia?" ----------
const textoFato = document.getElementById('fato');
const botaoFato = document.getElementById('novo-fato');

const fatos = [
    'Quando você olha para o Sol, vê a luz como ela era há cerca de 8 minutos e 20 segundos.',
    'A luz de Proxima Centauri, a estrela mais próxima depois do Sol, leva mais de 4 anos para chegar até nós.',
    'Em Vênus, um dia (243 dias terrestres) dura mais que um ano (225 dias terrestres).',
    'A Lua se afasta da Terra cerca de 3,8 centímetros por ano.',
    'Em Netuno, um ano dura cerca de 165 anos terrestres.',
    'O ferro do seu sangue e o cálcio dos seus ossos foram fabricados dentro de estrelas.',
    'Saturno é menos denso que a água: se existisse uma banheira gigante, ele boiaria.',
    'Só cerca de 5% do universo é feito de matéria comum. O resto é matéria escura e energia escura.',
    'A Via Láctea tem centenas de bilhões de estrelas, e o Sol é apenas uma delas.',
    'Existem mais de 6.000 planetas confirmados fora do Sistema Solar, os exoplanetas.',
    'Se o Sol fosse uma bola de basquete, a Terra seria um grão de 2 mm a 26 metros de distância.'
];

if (textoFato && botaoFato) {
    botaoFato.addEventListener('click', () => {
        // Sorteia um fato diferente do que já está na tela
        let novo = textoFato.textContent;
        while (novo === textoFato.textContent) {
            novo = fatos[Math.floor(Math.random() * fatos.length)];
        }
        textoFato.textContent = novo;
    });
}
