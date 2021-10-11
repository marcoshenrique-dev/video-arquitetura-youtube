import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.json({
    message: 'hello devs'
  });
});


app.listen(3000, () => console.log('server started at http://localhost:3000'));