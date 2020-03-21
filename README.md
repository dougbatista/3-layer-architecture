###### src
|
-- index.js  # Entry point
-- server.js # Status do servidor
 ###### app
    |
     -- controller # Pasta para os controllers
     -- index.js   # Exporta a classe app, onde configura os middlewares e declara as rotas
     -- routes.js  # Arquivo de rotas. (Poderia ser uma pasta)
###### core
    |
     -- models  ** Pasta para objetos do banco de dados **
     -- service ** Pasta que contém as classes de consulta ao banco de dados **
     -- utils   ** Pasta que contém lógicas recorrentes para o projeto  ** 
