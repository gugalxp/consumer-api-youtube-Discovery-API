# Busca de Bandas e Artistas - Documentação do Projeto

## Contexto do Projeto

A aplicação de busca de bandas e artistas utiliza as APIs do Youtube e TicketMaster para fornecer uma interface simples e interativa. O objetivo principal é permitir que os usuários pesquisem por uma banda ou artista específico, visualizem vídeos relacionados do Youtube e obtenham informações detalhadas sobre a banda através da API do TicketMaster.

### Tecnologias Utilizadas

- **React**: Utilizado para a construção da interface do usuário.
- **Next.js**: Framework React utilizado para renderização no lado do servidor (SSR) e geração de páginas estáticas.
- **Chakra UI**: Biblioteca de design de componentes para React, facilitando a criação de interfaces responsivas.
- **AOS - Animate on Scroll Library**: Biblioteca utilizada para adicionar efeitos de animação nos componentes durante o scroll.
- **npm**: Gerenciador de pacotes utilizado para instalar e gerenciar as dependências do projeto.
- **Youtube API Key**: Chave de API do Youtube para acesso aos dados relacionados a vídeos.
- **TicketMaster API Key**: Chave de API do TicketMaster para obter informações detalhadas sobre a banda.
- **Axios**: Ferramenta de requisição web.

## Instruções para Execução do Projeto

### Pré-requisitos

- Node.js e npm instalados.
- Conta no Youtube API para a chave de API.
- Conta no TicketMaster API para a chave de API.

### Configuração do Ambiente

1. Clone o repositório para o seu ambiente local.
   ```bash
   git clone https://github.com/gugalxp/consumer-api-youtube-Discovery-API.git
   ```

2. Acesse o diretório do projeto.
   ```bash
   cd consumer-api-youtube-Discovery-API
   ```

3. Instale as dependências do projeto.
   ```bash
   npm install
   ```

4. Crie um arquivo `.env.local` na raiz do projeto para armazenar suas chaves de API.
   ```
        NEXT_PUBLIC_BASE_URL_TICKET=https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&keyword=
        NEXT_PUBLIC_KEY_TICKET=<SUA_KEY_TICKER>
    ```
    ```


    NEXT_PUBLIC_BASE_URL_YOUTUBE=https://www.googleapis.com/youtube/v3/search?q=
    NEXT_PUBLIC_KEY_YOUTUBE=AIzaSyCKkUjL9N-LNCWlFiWxSgV2W7oZqf33Nlc

   ```

### Executando o Projeto

1. Inicie o servidor Next.js.
   ```bash
   npm run dev
   ```

2. Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000).

## Estrutura do Projeto

### Componentização

Os componentes são estruturados de forma modular para facilitar a reutilização e manutenção. Os principais componentes incluem:

- **SearchForm**: Componente responsável pela barra de pesquisa central.
- **VideoList**: Componente para exibição da lista de vídeos do Youtube.
- **BandInfo**: Componente que mostra informações detalhadas sobre a banda utilizando a API do TicketMaster.
- **Pagination**: Componente divide as informaçoes para ser exibidas de 5 em 5 items. É completamente editável.
- **Banner**: Componente responsável por montar a primeira sessão do site.
  
### Design e Layout

O Chakra UI é utilizado para manter um design consistente e responsivo em toda a aplicação. A estrutura do layout é otimizada para dispositivos móveis primeiro, garantindo uma experiência amigável em diferentes tamanhos de tela.

### Animações

A biblioteca AOS é incorporada para fornecer animações elegantes durante a rolagem, aumentando a usabilidade e a estética da aplicação.

## Considerações Finais

O projeto foi desenvolvido com foco em boas práticas de codificação, componentização e design responsivo. As chaves de API devem ser mantidas em segredo e nunca compartilhadas publicamente. Certifique-se de seguir as instruções para configuração do ambiente antes de executar o projeto.

Agradecemos por considerar nossa aplicação de busca de bandas e artistas. Em caso de dúvidas ou sugestões, entre em contato conosco. Divirta-se explorando o mundo da música! 🎶