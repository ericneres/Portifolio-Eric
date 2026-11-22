// JAVASCRIPT: adiciona interatividade à página.

// 1. Procura os elementos HTML pelo atributo id.
const botao = document.getElementById("botao-curiosidade");
const curiosidade = document.getElementById("curiosidade");

// 2. Executa esta função quando o usuário clicar no botão.
botao.addEventListener("click", function () {
    // hidden vale true quando o texto está escondido.
    const estavaEscondido = curiosidade.hidden;

    // Se estava escondido, mostra; se estava visível, esconde.
    curiosidade.hidden = !estavaEscondido;

    // Altera o texto do botão e informa o estado aos leitores de tela.
    botao.textContent = estavaEscondido ? "Esconder curiosidade" : "Mostrar curiosidade";
    botao.setAttribute("aria-expanded", String(estavaEscondido));
});

// 3. Coloca automaticamente o ano atual no rodapé.
const ano = document.getElementById("ano");
ano.textContent = new Date().getFullYear();
