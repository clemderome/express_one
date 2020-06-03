const express = require('express');
const app = express();
const port = 3000;

app.get('/api/movies', (request, response) => {
    const id = request.query.id
    if (request.url === '/api/movies') {
        console.log(request.url)
        response.send('Récupération de tous les films.')
    } else if ('/api/movies/:id') {
        response.json({result: `l'id du film est ${id}`})
    } else {
        console.log(request.url)
        response.end('Ça ne marche pas');
    }
});

app.get('/api/employee', (req, res) => {
    const name = req.query.name
    if ('/api/employee/:name') {
        res.status(404).send(`Impossible de récupérer l'employé ${name}`)
    } else if ('/api/employee') {
        res.sendStatus(304)
    } else {
        res.end('Ça ne marche pas')
    }
  });

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});