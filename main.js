import express, { response } from 'express';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

/* http://localhost:3000 */

app.get('/', (request, response) => {
    response.send('Server del mio blog');
})

app.listen(SERVER_PORT, () => {
    console.log(`Server in ascolto su ${SERVER_PORT}`);
})
