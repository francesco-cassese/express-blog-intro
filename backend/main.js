import express, { request, response } from 'express';
import bachecaPost from './bachecaPost.js';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use(express.static('public', {
    index: false
}));

/* http://localhost:3000 */

app.get('/', (request, response) => {
    response.send('<h1>Server del mio blog</h1>');
})

/* http://localhost:3000/bacheca*/

app.get('/bacheca', (request, response) => {
    response.json(bachecaPost.map(post => {
        return {
            ...post,
            immagine: `http://localhost:3000/${post.immagine}`
        }
    }));
})

app.listen(SERVER_PORT, () => {
    console.log(`Server in ascolto su ${SERVER_PORT}`);
})
