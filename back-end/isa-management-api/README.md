# ISA MANAGEMENT API

## Check list

✅ Projeto desenvolvido para API de aplicação de gerenciamento de pacientes em Node.

✅ Framework Express

✅ ORM Sequelize para manipulação do bd

✅ Migrations para criar tabelas

✅ Seeders para alimentar tabela

✅ bd PostGreeSQL

✅ JWT como autenticação

## Como executar?

1 - Configurar arquivo .env com as credenciais do seu banco.
(Gerenciador utilizado: pgAdmin4)

2 - `npm install`

3 - `npm install --save-dev sequelize-cli`

4 - Criar banco de dados de acordo com as configs do database.js
`npx sequelize db:create`

5 - Rodar migrations para contruir as tabelas
`npx sequelize db:migrate`

6 - Rodar seeders para alimentação da tabela. Possui apenas uma seeder que irá adicionar um usuário teste para teste de login.
`npx sequelize db:seed:all`
(Dados do login do usuário já existente: { email:'luhadmin@test.com', password: 123 })

7 - Para desenvolvimento:
`npx nodemon index.js`

Para teste/produção:
`node index.js`

Não se esqueça de ter um arquivo env conforme especificado no env example.
`✨ code with 💜 by LuanaLencinaS ✨`
