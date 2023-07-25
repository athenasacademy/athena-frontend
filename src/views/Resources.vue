<template>
  <v-container>
    <div>
      <h1>Recursos utilizados no projeto Athenas Academy</h1>
      <v-divider></v-divider>

      <h2>Vue 3</h2>
      <p>
        O Vue 3 é um framework JavaScript progressivo para a construção de
        interfaces de usuário e foi utilizado como a base do projeto Athenas
        Academy. Sua sintaxe simples e sua reatividade facilitam o
        desenvolvimento de aplicações reativas e interativas.
      </p>

      <h2>Vuetify</h2>
      <p>
        O Vuetify é uma biblioteca de componentes Vue.js que segue as diretrizes
        de Material Design. Ele foi utilizado para criar a aparência visual do
        Athenas Academy, fornecendo um conjunto de componentes estilizados e
        responsivos.
      </p>

      <h2>Vite</h2>
      <p>
        O Vite é um construtor de aplicações web rápido e moderno que permite
        desenvolver projetos Vue.js de forma rápida e eficiente. Ele foi
        utilizado para agilizar o processo de desenvolvimento e proporcionar um
        ambiente de desenvolvimento rápido e leve.
      </p>

      <h2>Pinia</h2>
      <p>
        O Pinia é um estado de gerenciamento de estado inspirado no Vuex, mas
        com uma API mais concisa e tipada. Ele foi utilizado para gerenciar o
        estado global do Athenas Academy, facilitando a comunicação e
        compartilhamento de dados entre os componentes.
      </p>

      <h2>Axios</h2>
      <p>
        O Axios é uma biblioteca HTTP baseada em Promises que simplifica o
        processo de realizar requisições HTTP em aplicativos JavaScript. Ele foi
        utilizado no projeto Athenas Academy para fazer chamadas assíncronas
        para a API do servidor e obter dados em tempo real.
      </p>

      <h2>Node.js</h2>
      <p>
        O Node.js é um ambiente de execução JavaScript do lado do servidor que
        permite executar código JavaScript fora do navegador. Ele foi utilizado
        no projeto Athenas Academy para criar o servidor de backend e fornecer
        APIs para o aplicativo front-end se comunicar com o banco de dados e
        realizar outras operações do lado do servidor.
      </p>

      <h2>Git</h2>
      <p>
        O Git é um sistema de controle de versão distribuído amplamente
        utilizado para rastrear mudanças no código-fonte do projeto. Foi
        utilizado para gerenciar o código do Athenas Academy e permitir
        colaboração entre os membros da equipe de desenvolvimento.
      </p>

      <h2>Lint</h2>
      <p>
        O Lint é uma ferramenta de análise de código estática que ajuda a identificar e corrigir problemas no código-fonte
        de forma automática. No projeto Athenas Academy, utilizamos o Lint para garantir que o código JavaScript e Vue.js
        esteja escrito seguindo padrões de estilo e boas práticas de programação. Isso ajuda a manter o código limpo,
        consistente e de fácil leitura, facilitando a colaboração entre os membros da equipe de desenvolvimento e a
        detecção precoce de possíveis erros.
      </p>

      <h2>Vuex</h2>
      <p>

O Vuex é um padrão de gerenciamento de estado e uma biblioteca de gerenciamento de estado centralizada para aplicações Vue.js.
Ele desempenha um papel fundamental ao lidar com a complexidade de comunicação e compartilhamento de dados entre os componentes
de uma aplicação Vue. O Vuex permite criar uma "store" global onde o estado centralizado da aplicação é armazenado, tornando-o
acessível de forma reativa a todos os componentes. Com o Vuex, é possível atualizar o estado de maneira previsível e garantir
que todas as partes da aplicação estejam sincronizadas. Além disso, o Vuex oferece ferramentas para organizar e modularizar o
estado global, facilitando o desenvolvimento, a manutenção e a escalabilidade do projeto. No projeto Athenas Academy, o Vuex foi
adotado para gerenciar o estado global da aplicação, permitindo a interação entre diferentes componentes e proporcionando um fluxo
de dados consistente e confiável em toda a aplicação.
      </p>
    </div>
    <br />
    <br />
    <div>
      <div>
        <h1>Como Rodar o Projeto Localmente</h1>

        <v-divider></v-divider>
        <p>
          Para executar o projeto localmente em seu ambiente de desenvolvimento,
          siga as instruções abaixo:
        </p>

        <h2>Instalação das Dependências</h2>
        <p>
          Antes de iniciar o projeto, é necessário instalar as dependências.
          Você pode escolher usar o gerenciador de pacotes Yarn, npm ou pnpm.
        </p>
        <pre><code># yarn
yarn install

# npm
npm install

# pnpm
pnpm install</code></pre>

        <h2>Compilar e Executar em Ambiente de Desenvolvimento</h2>
        <p>
          Para compilar e executar o projeto com recarregamento ao vivo para
          desenvolvimento, use os seguintes comandos:
        </p>
        <pre><code># yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev</code></pre>

        <h2>Compilar e Minificar para Produção</h2>
        <p>
          Para compilar e minificar o projeto para produção, utilize os
          seguintes comandos:
        </p>
        <pre><code># yarn
yarn build

# npm
npm run build

# pnpm
pnpm build</code></pre>

        <h2>Lint e Correção de Arquivos</h2>
        <p>
          Caso deseje executar o lint e fazer correções nos arquivos, utilize os
          comandos a seguir:
        </p>
        <pre><code># yarn
yarn lint

# npm
npm run lint

# pnpm
pnpm lint</code></pre>

        <p>
          Essas são as principais etapas para rodar o projeto localmente e
          desenvolver suas funcionalidades com o Vue.js 3 e outras tecnologias
          utilizadas.
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Resources",
};
</script>

<style></style>
