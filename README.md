# Jogo da Cobrinha 🐍🍎

__Bem-vindo ao Jogo da Cobrinha, uma implementação clássica do jogo Snake desenvolvida em HTML, CSS e JavaScript. Neste jogo, você controla uma cobra que se move em um tabuleiro, comendo alimentos para crescer e aumentar sua pontuação, enquanto evita colidir com as bordas ou com o próprio corpo. O recorde é salvo localmente no navegador.__

#### Este projeto é baseado no tutorial da CodingNepal, com adaptações e traduções para o português. 

## Funcionalidades 👩🏻‍💻

* **Jogabilidade simples**: Controle a cobra usando as teclas de seta ou botões de toque (em dispositivos móveis).

* **Pontuação e recorde**: A pontuação aumenta ao comer alimentos, e o recorde é salvo no localStorage.

* **Design responsivo**: O jogo se adapta a diferentes tamanhos de tela, com controles de toque exibidos em telas menores (< 800px).

* **Estilo visual**: Interface limpa com cores agradáveis, usando a fonte Open Sans e ícones do Font Awesome.

## Estrutura do Projeto 🫱🏼‍🫲🏼🛠️

__O projeto é composto por três arquivos principais:__

* **index.html**: Estrutura da página do jogo.
* **index.css**: Estilos visuais do tabuleiro, cobra, comida e controles.
* **script.js**: Lógica do jogo, incluindo movimentação, colisões e pontuação.


## Pré-requisitos para execução 🙏🏻🖥️

__Para executar o projeto, você precisa de:__

* Um navegador moderno (*Chrome, Firefox, Edge, etc*.).

* Conexão com a internet para carregar o *Font Awesome* e a fonte *Open Sans* (ou arquivos locais, se preferir trabalhar offline).

* Um servidor local para evitar problemas de *CORS* ao carregar os arquivos *CSS* e *JS*.

## Como Executar o Projeto 🏁🏅

1. Clonar o repositório 📖

__Clone este repositório para sua máquina local:__
```
git clone https://github.com/Layxsk/Cobrinha.git
cd Cobrinha
``` 
2. Configurar o Ambiente 💻

__Certifique-se de que os arquivos index.html, estilos.css e script.js estão na mesma pasta. O projeto depende de recursos externos:__

* **Font Awesome**: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css

* **Google Fonts (Open Sans)**: https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap

3. Executar o jogo 🎯

__Você não pode abrir o index.html diretamente no navegador (usando file://), pois isso pode causar erros de carregamento. Use um servidor local:__

* **Instale o Node.js (se ainda não tiver).**
``` 
npm install -g http-server
``` 

* **Inicie o servidor na pasta do projeto:**

``` 
cd jogo-da-cobrinha
http-server
``` 

* Acesse http://localhost:8080 no seu navegador. Ou um dos IPs disponibilizados no terminal.

## O jogo 🎮

* __Use as teclas de seta (cima, baixo, esquerda, direita) para mover a cobra.__
* __Em dispositivos móveis ou telas menores, clique nos botões de controle (setas) que aparecem na tela.__
* __Coma os alimentos (quadrados vermelhos) para aumentar a pontuação.__
* __Evite colidir com as bordas do tabuleiro ou com o corpo da cobra.__
* __Ao fim do jogo, clique em "OK" no alerta para reiniciar.__

