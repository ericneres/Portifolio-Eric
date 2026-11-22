# Portfólio do Eric 🚗 🎮

Este é um site simples, feito com **HTML, CSS e JavaScript puro** para estudar desenvolvimento web. Ele tem design responsivo, uma foto, informações sobre o Eric, hobbies, um link para o GitHub e um botão interativo.

## 1. Estrutura das pastas

```text
portfolio-eric/
├── index.html          # Conteúdo e estrutura do site (HTML)
├── css/
│   └── estilo.css      # Cores, tamanhos, layout e responsividade
├── js/
│   └── script.js       # Botão de curiosidade e ano automático
├── imagens/
│   └── eric.jpg        # Foto do perfil
└── README.md           # Estas instruções
```

**Importante:** não altere os nomes das pastas sem atualizar os caminhos no HTML.

## 2. Como abrir o site no computador

1. Extraia o arquivo ZIP.
2. Abra a pasta `portfolio-eric` no VS Code, se quiser editar.
3. Dê dois cliques no arquivo `index.html` para abrir no navegador.
4. Clique em **Mostrar curiosidade** para testar o JavaScript.
5. Para testar a versão mobile, diminua a largura da janela do navegador.

## 3. Como publicar gratuitamente no GitHub Pages

1. Entre em https://github.com e acesse sua conta.
2. Clique em **New repository** (Novo repositório).
3. Use o nome `portfolio-eric`, selecione **Public** e crie o repositório.
4. Envie **o conteúdo de dentro** da pasta `portfolio-eric` (`index.html`, `css`, `js`, `imagens` e `README.md`) ao repositório. Você pode usar **Add file > Upload files**. Confirme com **Commit changes**. Não envie apenas o ZIP.
5. Abra **Settings > Pages** no repositório.
6. Em **Build and deployment**, selecione **Deploy from a branch**.
7. Escolha `main`, a pasta `/(root)` e clique em **Save**.
8. Após a publicação, seu site deverá aparecer em:
   **https://ericneres.github.io/portfolio-eric/**

> Esse endereço funciona se o usuário for `ericneres` e o repositório tiver o nome `portfolio-eric`.
> O GitHub Pages pode precisar de alguns minutos para publicar após a configuração.
> Documentação oficial: https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 4. Entendendo os arquivos

- `index.html`: os textos, links, botões, títulos, seções e a foto. Tags como `<h1>`, `<p>`, `<img>`, `<section>` e `<a>`.
- `css/estilo.css`: controla cores, fontes, espaçamento, cartões, foto e a versão para celular usando `@media`.
- `js/script.js`: controla o clique no botão de curiosidade e mostra o ano atual no rodapé.
- `imagens/eric.jpg`: a foto usada no começo do site.

Todos os códigos têm comentários explicativos em português.

## 5. Exercícios fáceis para praticar

1. No HTML, troque a frase 'Olá, eu sou o Eric!' por outra frase.
2. No CSS, mude a cor `#d57a1c` para outra de sua preferência.
3. No HTML, altere o texto sobre carros ou jogos.
4. No JavaScript, troque a mensagem da curiosidade no HTML e teste o botão.

## Atenção à privacidade

A foto e as informações inseridas neste site ficarão disponíveis publicamente quando você publicar o repositório. Só publique o que você deseja tornar público.
