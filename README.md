# Gui-Burger

Esse projeto foi desenvolvido para a avaliação final do módulo de Framework Front-End I | React.JS e esta hospedado no link [Gui-Burger](https://guilhermeagoncalves.github.io/Gui-Burguer/)

# Tecnologias

1. React.JS
2. React Routes
3. Class Components
4. CSS Module
5. JavaScript
6. CSS

# Iniciar

Para iniciar o projeto:

1. Faça um Git Clone na sua máquina.
2. Acesse a raiz do projeto.
3. Execulte o comando `yarn create` or `yarn` or `npx install`
4. Execulte o comando `yarn start` or `npm start` para iniciar o programa em seu navegador

# Rotas

Nesta aplicação a duas rotas.

1. A padrão `/` que vai renderizar o `./components/Pages/Montagem` onde o usuario vai montar o sanduiche.

2. A pagamento `/pagamento` que vai renderizar o `./components/Pages/Pagamento` onde o usuario vai ultilizar seus dados de cartão de credito para pagar.

# Componentes

1. Assets: Vai conter a lógica de validar os campos de Pagamento, a imagem do logotipo e os ingredientes que existe.

2. Button, Header, Input: Vão ser Componentes genericos para a aplicação.

3. Logo: vai conter a imagem formatada para a aplicação.

4. Modal: vai conter a base do modal para feito diferentes Modais.

5. TitleForm para usar a font diferent preferi usar um component `<p/>` para formatar o texto de acordo com o que é passado.

6. SelectedsIngredients: Component usado pela Page de montagem para renderizar os ingredientes selecionados.

7. Pages: Componente mais importante da aplicação, pois é onde vai conter a logica e as telas renderizadas.

# Pages

## Mongagem:

Nessa pagina criei um State de Array com os tipos de Ingredientes, um State para ser o index da pagina, um State que vai conter o index da pagina final, alguns states vazio que vai conter os ingredientes selecionados, um State que vai conter o preço total dos items e dois states que vai ser usado para a logica para quando um item não tiver selecionado ele não passar para a proxima ou passar para a pagina de pagamento.

Nas funções `proximaPage()` e `redirecionarToPagamento()` vão ser as funções que vão verificar os States(`redirectProxPage` e `redirecionarPagamento` ) para então passar para o proxima tipo de ingredient ou a pagina de pagamento

Na função `setIngredient($event)` vai receber o botao onde ele vai ser setado no state e quando um tiver escolhido vai ser liberado para passar para o proximo tipo de ingrediente ou passar para a pagina de pagamento.

No `render()` fiz a destruturação de uma parte do meu state que depois vai ser usado para mudar o tipo de ingrediente

Um filter que vai filtrar de acordo com o index do state que contem os tipos de ingredientes ex: [bread, beef...]
se o index for 1 ele vai retornar todos as opção de ingredientes que forem do tipo bread.

O redirect que dependendo do state `redirecionarPagamento` se for verdadeiro ele vai redirecionar para a pagina de pagamento e enquanto a função não vai ser usada.

Depois disso eu faço o return de `JSX` de forma semantica e ultilizando os components `<Ingredient/>` passando como propriedade `Ingredient` que vai ser o tipo de ingrediente atual e `onClick` passando a funcao `setIngredient()`, o component `<SelectedIngredient/>` que vou passar como propriedade todo o state da pagina de montagem e algumas funções para fazer a logica de pegar os item selecionados, o preco total dos items.

## Pagamento

Nessa pagina criei dois States vazios que vão ser ultilizados no modal se o pagamento der aprovado, o state do modal para verificar se ele esta aberto ou não e as verificações que vão ser usados no input se eles forem alterados e se possuir os erros.

Vou ter a função `pagar()` que vai ser uma funçao de clique usada posteriomente e nela eu verifico se todos os meus inputs foram alterados, verifico se eles possuem erros e se tiver tudo certo eu valido o formulario e o modal de sucesso do pagamento aparece, se não o modal de pagamento negado aparece.

A função `validateComponent($event)` que vai ser um event onBlur nos input que quando acontece ele verifica o valor do input e pega os erros do arquivo validate
se passar nas validações ele altera o state de validações informando que ele foi alterado e dizendo se possui erros ou não

No render eu pego todos ingredientes selecionados e o preço total deles atraves de props location e faço a destruturação de alguns states que vão ser mais ultilizados

depois também faço um retur de um `JSX` de forma mais semantica.

Para mostrar os erros eu pego o primeiro erro que o item apresenta obs:Ele pode ter mais de um erro mas eu so apresento o primeiro para não ficar uma lista enorme dependendo da quantidade de erros.

No input de data eu fiz de acordo de como os operadores de cartão usa, MM/YYYY sendo obrigatorio passar a `/`

Se todos os campos forem preenchidos de acordo com o as regras, no modal concluido com sucesso vai aparecer o modal uma mensagem de sucesso com o nome do usuario, os 3 ultimos digitos do cartão e um botão com ok

Se der negado vai aparecer so uma mensagem de erro.

# Futuras Atualizações

Adicionar mais formas de pagamento, como por exemplo o PIX com um qr-code que vai ser cobrado o valor total do lanche, essa forma de pagamento poderia esta localizada abaixo do botão de pagamento podendo ter também outras formas de pagamento e seria botãos que vai trocar o formulario de Inputs, se a forma for cartão vai aparecer o formulario padrão se for pix vai ser um qr-code, se for pra pagar no dinheiro ser um form com cpf e nome.

No lugar de ja entrar na pagina padrão iniciar em uma pagina onde a lanchonete poderia mostrar mais tipos de lanche como por exemplo monte sua tapioca ou monte seu pastel, ou mostrar uma lista com lanches pronto que quando clicar vai direto para a pagina de pagamento.

Poderia também ter uma tela para o cliente escolher se ele vai querer refrigerante ou suco.

# Considerações Finais

Quero agradecer a Let´s Code e princiapalmente aos professores [João Paulo](https://github.com/UXJPMN) e [Dannyel Kayke](https://github.com/dkayke) por motivarem e me ajudarem a desenvolver esse projeto.

Se por acaso você gostou do código e esta precisando de um Desenvolvedor Front-End Junior estou em busca da minha primeira oportunidade, entre em contato comigo [Guilherme Araújo](https://www.linkedin.com/in/guilhermeagoncalves/)
