# ISA MANAGEMENT API & Front-End

# Front-end

## Check list

✅ Projeto desenvolvido para gerenciamento de pacientes de Gestores que tenhama cesso à plataforma via login.

✅ React com Next.js 13

✅ Tailwind CSS

✅ Radix

✅ Axios

✅ React Hook Form

✅ Login de Gestor

✅ Dashboard para Listagem, Edição, Deleção/restauro de Pacientes

✅ Criação de novos Pacientes pelo Gestor - em dev

✅ Pesquisa de Pacientes - em dev

✅ Cadastro de Gestor - em dev

## Como executar?

```
npm install
npm run build
```

# Back-end

## Check list

✅ Projeto desenvolvido para API de aplicação de gerenciamento de pacientes em Node.

✅ Framework Express

✅ ORM Sequelize para manipulação do bd

✅ Migrations para criar tabelas

✅ Seeders para alimentar tabela

✅ bd PostGreeSQL (Banco Relacional: permitindo a possibilidade de um crescimento estruturado, já que há possibilidade de inserção de outras diversas funcionalidades para o Gestor)

✅ JWT como autenticação

## Como executar?

1 - Configurar arquivo .env com as credenciais do seu banco.
(Gerenciador utilizado: pgAdmin4)

2 - `npm install`

3 - Criar banco de dados de acordo com as configs do database.js

```
npx sequelize db:create
```

4 - Rodar migrations para contruir as tabelas

```
npx sequelize db:migrate
```

5 - Rodar seeders para alimentação da tabela. Possui apenas uma seeder que irá adicionar um usuário teste para teste de login.

```
npx sequelize db:seed:all
```

(Dados do login do usuário já existente:

```
{ email:'luhadmin@test.com', password: 123 }
```

)

6 - Para desenvolvimento:

```
npx nodemon index.js
```

Para teste/produção:

```
node index.js
```

Não se esqueça de ter um arquivo env conforme especificado no env example.

```
✨ code with 💜 by LuanaLencinaS ✨
```
