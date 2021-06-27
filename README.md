# AplicacaoWebTrocaDeElogios-Node.js-Express-SQLite                  

Esta aplicção permite:                       
 - Cadastro de usuarios -> post(/users) -> parametros recebidos: (name,email,password)                              
 - Autenticação de usuarios -> post(/login) -> parametros recebidos: (email,password)                       
 - Cadastro de Tags -> post(/tags) -> parametros recebidos: (name)                  
 - Envio de elogios para outros usuários -> post(/compliments) -> parametros recebidos: (tag_id, user_receiver, message) 
 - Consulta de usuarios e Tags disponiveis -> get(/listusers), get(/listtags) -> parametros recebidos: ()
 - Consulta de elogios enviados ou recebidos ->get(/sentcompliments), get(/receivedcompliments) -> parametros recebidos:()

O código contem apenas o back-end do servidor, use o Insomnia para fazer os requests.
Para acessar as rotas que não sejam "/users" ou "/login", o usuário precisa estar autenticado.(usar o token gerado na criação do usuario para fazer as requests).
Para iniciar o servidor, basta digitar o comando "npm i" para baixar as dependencias e depois digitar "yarn dev".
