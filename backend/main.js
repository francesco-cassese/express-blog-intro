import express from 'express';
import bachecaPost from './bachecaPost.js';
import { messaggiaClaude } from './utils/claudio.js';

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
            immagine: `http://localhost:${SERVER_PORT}/${post.immagine}`
        }
    }));
})

app.get('/claudio', (request, response) => {

    const { msg: messagioUtente } = request.query;

    return messaggiaClaude(messagioUtente).then(aiResponse => {
        const rispostaClaude = aiResponse.content;
        response.json({
            messaggio: rispostaClaude
        });
    })
})

app.listen(SERVER_PORT, () => {

    console.log(`Server in ascolto su ${SERVER_PORT}`);
})
