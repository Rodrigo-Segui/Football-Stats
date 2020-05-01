<h3 align="center">Projeto <strong>Site Esportivo</strong> desenvolvido durante a Quarentena</h3>


## Getting started:

```
npm install
nodemon index.js
npm install -g knex
npm install knex pg --save
```

### PostgreSQL:

<ul>
  <li>Criar DB com o nome de 'bage'</li>
  <li>Ajustar configs no arquivo 'knexfile.js'</li>
</ul>

### Criar tabelas:

```
knex migrate:latest
```

### Inserir dados:

```
knex seed:run
```