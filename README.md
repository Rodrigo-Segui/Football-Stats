<h3 align="center">Projeto <strong>Site Esportivo</strong> desenvolvido durante a Quarentena</h3>


## Rodar projeto:

```
npm install
nodemon index.js
```

### PostgreSQL:

<ul>
  <li>Criar DB com o nome de 'bage'</li>
  <li>Ajustar configs no arquivo 'knexfile.js'</li>
</ul>

### Criar migrate:

```
knex migrate:make nome_da_migrate
```

### Rodar migrate:

```
knex migrate:latest
```