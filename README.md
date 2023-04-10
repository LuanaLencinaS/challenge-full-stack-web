# ISA MANAGEMENT API & Front-End

![image](https://user-images.githubusercontent.com/58888952/230472995-fe8e15de-23f3-4d43-bb4d-5e9aacb0a63b.png)

![image](https://user-images.githubusercontent.com/58888952/230472678-c96b4161-4c98-49df-9836-23718754d08a.png)

![image](https://user-images.githubusercontent.com/58888952/230472878-96dd7ea5-3bd7-4aec-ad5a-8292400d2218.png)

# ISA MANAGEMENT DIAGRAMA
![diagrama-completo](https://user-images.githubusercontent.com/58888952/230920134-6aa9743c-7a5f-4b06-bf79-431b61ac5ece.png)

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

## Commits no padrão...
``` bash
#grupos de commit:
    
•feat(escopo)
    #para novas features ou incrementos em features existentes
    #ex: feat(login): create login page

•chore
    #para qualquer alteração de arquitetura. Seja alteração do package.json ou algum arquivo 
    de configuração, ou mesmo alteração da organização de pastas/código do projeto
    #ex: chore: add build script

•fix(escopo)
    #irá indicar o que foi concertado em uma feature.
    #ex: fix(login): add type="email" to login form

•refactor(escopo)
    #usado para indicar que um código sofreu refactoring. Ou seja: o resultado final daquele 
    código refatorado não foi alterado.
    #ex: refactor(style): use sass mixins to handle darken backgrounds

•docs(escopo)
    #usado ao adicionar comentários no código, jsdoc, storyboard e tudo que não interfira no 
    código, porém indique o funcionamento do mesmo.
    #ex: docs(login): add jsdoc to functions

•test(escopo)
    #usado ao commitar código de testes unitários e/ou end-to-end.
    #ex: test(login): add unit test
```

## Mensagens de commit styleguide emojis

Emoji | Code | Commit Type
------------ | ------------- | -------------
:tada: | `:tada:` | initial commit
:art: | `:art:` | quando melhorar a estrutura/formato do código
:racehorse: | `:racehorse:` | quando melhorar a performance
:memo: | `:memo:` | quando escrever alguma documentação
:bug: | `:bug:` | quando corrigir um bug
:fire: | `:fire:` | quando remover códigos ou arquivos
:white_check_mark: | `:white_check_mark:` | quando adicionar testes
:lock: | `:lock:` | quando melhorar a segurança
:arrow_up: | `:arrow_up:` | quando der upgrade em dependências
:arrow_down: | `:arrow_down:` | quando der downgrade em dependências
:poop: | `:poop:` | deprecated
:construction: | `:construction:` | em construção
:rocket: | `:rocket:` | nova feature
:see_no_evil: | `:see_no_evil:` | gambiarra
:gift: | `:gift:` | nova versão

```
✨ code with 💜 by LuanaLencinaS ✨
```
