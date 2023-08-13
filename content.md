# Trabalho 

- Empresa Americana
- Produtos voltados para a área de cosméticos

### Ideia apresentada pelo cliente: 
Eu como cliente gostaria de ter um sistema, capaz de armazenar todas as informações sobre os meus produtos, que possa ser gerenciado cada um dos produtos por categorias, departamentos, e também gostaria de poder controlar estes produtos por seu estoque. Saber quanto de estoque que tenho. Uma parte importante que precisamos é também do desenvolvimento de uma aplicação web capaz de atuar como uma espécie de um marketplace com a nossa marca, para que assim possamos vender os nossos produtos para todo país. (Internacional).

#
### FUNCIONALIDADES ESPERADAS PARA PRIMEIRA ENTREGA:
- Cadastro de produtos no sistema gerencial de loja física.
- Cadastro de estoque do produto no sistema gerencial de loja física.
- Cadastro de clientes para que este por sua vez receba suas notas fiscais futuramente quanto esta for implementada. (Ainda não se torna um requisito das funcionalidades que precisam ser entregues).

## PERGUNTAS
- Quais categorias de produtos a plataforma deverá possuir?
  - deverá ser possivel cadastrar novas categorias?
  - Categorias devem possuir uma imagem

- Quais departamentos a plataforma irá suportar? (Forma de 
realizar os registro pode mudar conforme cada caso)

- Quais as informações necessárias para o registro de novos produtos?
  - Será permitido o cadastro de vários produtos em um anuncio?
  - Será permitido o cadastrado de video?

- Qual deveria ser o comportamento da página dos produtos ao final do estoque? (Permitir reserva ou esconder produto)

- Qual os métodos de pagamento a plataforma deverá possuir suporte? (PIX, boleto, cartão, ...)

- Quais as formas de login serão permitidas para a plataforma? (Login e senha, Login via SSO, ...)

## ESTÓRIAS
**Funcionalidade**: Cadastro de produtos<br>
**Como**: Administrador da aplicação<br>
**Desejo**: cadastrar um novo produto<br>
**Para**: disponibilizar para venda

**Cenário**: Cadastrando produto <br>
**Dado que**: produto não esteja cadastrado anteriormente<br>
**E**: todas as informações necessárias sejam informadas<br>
**Quando**: for realizada um cadastro no estoque<br>
**Então**: deverá ser disponibilizado para venda aos clientes<br>
**Mas**: não deve permitir a finalização do cadastro caso não sejam informados todos os campos obrigatórios

- 

**Funcionalidade**: Acessar sistema<br>
**Como**: Cliente<br>
**Desejo**: Receber acesso a aplicação<br>
**Para**: finalizar o processo de compra  

**Cenário**: Realizar o login na plataforma<br>
**Dado que**: o usuário informe as credenciais <br>
**E**: seja referente a um usuário válido<br>
**Quando**: Informar as credenciais corretamente <br>
**Então**: deverá ser permitido a entrada no sistema<br>
**Mas**: não deve permitir a entrada com credenciais inválidas

- 

**Funcionalidade**: Acessar sistema<br>
**Como**: Administrador da aplicação<br>
**Desejo**: Receber acesso a aplicação com acesso de administrador<br>
**Para**: cadastrar editar informações dos produtos

**Cenário**: Realizar o login na plataforma<br>
**Dado que**: o usuário informe as credenciais de um administrador<br>
**E**: seja referente a um usuário válido<br>
**Quando**: Informar as credenciais corretamente <br>
**Então**: deverá ser apresentada as opções de adminstrador<br>
**Mas**: não deve ser permitida essa visualização para clientes

- 

**Funcionalidade**: Cadastrar Usuário<br>
**Como**: Clientes<br>
**Desejo**: Criar novo acesso para a plataforma <br>
**Para**: receber acesso a plataforma e realizar compras 

**Cenário**: Cadastrar novo usuário<br>
**Dado que**: o usuário informe 
 dados válidos<br>
**E**: não exista outro com informações iguais<br>
**Quando**: Informar os dados corretamente <br>
**Então**: deverá ser realizado o cadastro de um novo acesso<br>
**Mas**: não deve ser permitida o cadastro de usuário iguais

- 

**Funcionalidade**: Cadastrar Categoria<br>
**Como**: Administrador da aplicação <br>
**Desejo**: disponibilizar nova categoria<br>
**Para**: referenciar produto com ela

**Cenário**: <br>
**Dado que**: o usuário informe 
 dados válidos<br>
**E**: não exista outro com informações iguais<br>
**Quando**: Informar os dados corretamente <br>
**Então**: deverá ser realizado o cadastro de um novo acesso<br>
**Mas**: não deve ser permitida o cadastro de usuário iguais

- 

**Funcionalidade**: Realizar compra<br>
**Como**: Cliente <br>
**Desejo**: adicionar ao carrinho <br>
**Para**: Realizar a compra de produtos

**Cenário**: Realizar checkout do carrinho de compras <br>
**Dado que**: seja informado os produtos<br>
**E**: produto esteja em estoque <br>
**Quando**: iniciar processo de fechamento de carrinho<br>
**Então**: deverá ser realizado o calculo com valor e quantidade dos produtos<br>
**Mas**: não deve adicionar produtos sem estoque

# 

Durante o desenvolvimento da aplicação devem ser verificados diversos pontos de segurança, para não permitir que os usuários sem o acesso de adminstrador possuam acesso a endpoints de manipulação de produto, usuários ou realização de compras, podendo causar grandes prejuizos para a plataforma e para outros usuários. Não deve ser permitido o cadastro de informações de forma incorreta, como valores negativo, senha com baixa segurança, usuários com mesmo email/login. Durante o fechamento do carrinho e realização da compra devem ser realizadas verificações para informar/alertar o usuário sobre o fim do estoque do produto selecionado, os mesmo não deve ser adicionados ao valor de fechamento da compra, pois não seriam entregues ou causariam grandes transtornas para a empresa. A permanencia da página do produto de forma correta após o fim de estoque, poderia aumentar a quantidade de vendas, capturar leads de forma mais efetiva. Deve ser realizada a captura de informações importantes dos usuários durante o fechamento da conta para maior segurança e para posteriormente disponibilizar notas fiscais.

## CRITÉRIOS DE ACEITE

- Os usuários devem ter a permissão de adicionar produtos ao carrinho de forma clara e funcional
- Ao adicionar produtos ao carrinho devem ser removidos do estoque automaticamente
- Ao finalizar a compra os vendedores devem ser notificados
- Ao cadastrar um novo produto, o mesmo deve ser apresentado aos clientes para compra
- Ao cadastrar uma nova categoria, a mesma deve estar disponivel para formulario de cadastro/atualização de novos produtos
- Ao cadastrar um novo departamento, o mesmo deve estar disponivel para filtragem do produtos e durante o formulario de cadastro/atualização de produtos
- Cliente não devem possuir acesso a funcionalidades de adminstrador

## CENÁRIOS DE TESTES

**Categorias**
- Não deve ser permitido o cadastro de categorias pelos clientes
- Não deve ser permitido a atualização de categorias pelos clientes
- Não deve ser permitido a remoção de categorias pelos clientes
- Deve ser permitido a visualização das categorias pelos clientes
- Não deve ser permitido a remoção de categorias com produtos existentes
- Não deve ser permitido o cadastro de categorias com nome repetido
- Todas as informações obrigatórias para o registro de uma nova categoria devem ser informadas

**Produtos**
- Não deve ser permitido o cadastro de produtos pelos clientes
- Não deve ser permitido a atualização de produtos pelos clientes
- Não deve ser permitido a remoção de produtos pelos clientes
- Deve ser permitido a visualização dos produtos pelos clientes
- Não deve ser permitido a remoção de produtos com vendas em aberto
- Durante o cadastro do produto deve ser verificado se existe outro com mesmo nome
- Todas as informações obrigatórias para o registro de um novo produto devem ser informadas
- Deve alertar o adminstrador antes de realizar o cadastro para validar as informações
- Adminstrador deve ser alertado caso as informações cadastradas estejam inválidas 
- A informção sobre o valor do produto não deve possuem valores diferentes de numéricos


**Departamentos**
- Não deve ser permitido o cadastro de departamentos pelos clientes
- Não deve ser permitido a atualização de departamentos pelos clientes
- Não deve ser permitido a remoção de departamentos pelos clientes
- Deve ser permitido a visualização dos departamentos pelos clientes
- Não deve ser permitido a remoção de departamentos com produtos relacionados
- Não deve ser permitido o cadastro de departamentos com nome repetido
- Todas as informações obrigatórias para o registro de um novo departamento devem ser informadas

**Usuários**
- Não deve ser permitido o cadastro novos usuários por usuários com nivel de acesso de clientes
- Não deve ser permitido a atualização de usuários por usuários com nivel de acesso de clientes
- Não deve ser permitido a remoção de usuários por usuários com nivel de acesso de clientes
- Deve ser permitido a visualização das credenciais dos usuários por usuários com nivel de acesso de clientes
- Não deve ser permitido a remoção de usuários com nivel de acesso de clientes com vendas em aberto
- Não deve ser permitido o cadastro de usuários com nome repetido
- Não deve ser permitido o cadastro de usuários com senha fraca
- Todas as informações obrigatórias para o registro de novo usuário devem ser informadas

##  TÉCNICAS DE TESTES

Poderiam ser realizados testes automatizados a nivel de código para auxiliar no desenvolvimento futuro da aplicação, com um ambiente onde exista cobertura completa baseada em testes unitários, aumentaria a qualidade do software de forma geral e auxiliaria na redução dos problemas/bugs gerados ao longo do tempo. Caso o tempo seja reduzidos ou a curva de aprendizado seja muito grande, poderiam ser contruidos testes e2e para testar de forma mais genérica as funcionalidades da aplicação.

