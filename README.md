# Adonis API application

Não sei se utilizei a API correta, mas da que encontrei essa foi a melhor.

No controller MovieController tem 3 endpoints.

O primeiro (index) seria para listar os filmes

O segundo (store) receberia o titulo do filmes e faria as associações do filmes com usuario

O terceiro (suggest) irá sugerir os filmes de acordo com o parametro genre informado que seria o que estivesse associado com o de usuario

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
