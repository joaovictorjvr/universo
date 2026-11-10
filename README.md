 Universo - Projeto Web

Site com 11 páginas sobre o universo, feito com HTML, CSS e um pouco de JavaScript para a disciplina de desenvolvimento web.

Para ver o site, abra o arquivo `index.html` no navegador.

 Pastas
- `index.html`: página inicial
- `pages/`: as outras 10 páginas (inclui `pages/hospedagem.html`, sobre a hospedagem do site)
- `css/style.css`: estilos de todo o site (tema escuro, responsivo)
- `css/sistema-solar.css`: estilos só da página Sistema Solar (planetas e pop-up)
- `js/script.js`: menu para celular, confirmação do formulário e "Você sabia?"
- `js/sistema-solar.js`: pop-up de informações dos planetas
- `assets/`: vídeo, áudio, ícone do site e página usada no iframe
- `docs/`: diário de bordo e roteiro da apresentação (PDF)

 O que foi feito
- Semântica (header, nav, main, section, footer), menu com página atual destacada e link "Pular para o conteúdo"
- Layout responsivo (computador e celular) e foco visível para teclado
- Formulário com validação HTML5 em `pages/contato.html`
- Multimídia: vídeo e áudio em `pages/multimidia.html`, iframe em `pages/galaxias.html`
- Gráficos em SVG: céu estrelado na página inicial, Sistema Solar interativo, e desenhos da Lua, do Big Bang e do buraco negro
- Botões "Anterior" e "Próxima" no fim de cada página

 Como funciona o Sistema Solar interativo
- Cada planeta é um grupo SVG (`<g class="astro">`) com `circle`, nome e uma área invisível para facilitar o mouse.
- No CSS, `.astro:hover .corpo` aumenta o planeta com `transform: scale(...)`. O valor de cada planeta fica no HTML, em `style="--zoom:..."`.
- As informações ficam em fichas escondidas (`<article id="ficha-terra">`...). O `js/sistema-solar.js` copia a ficha para o pop-up e o posiciona perto do planeta.
- Para mudar um texto do pop-up, edite a ficha do planeta em `pages/sistema-solar.html`.

GRUPO 5.0
