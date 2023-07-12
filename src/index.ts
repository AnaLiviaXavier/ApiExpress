import express from 'express';
import {config} from 'dotenv';
config()

const app = express()

const port = process.env.PORT || 3333

app.get('/teste', (request,response) =>{
    response.send('Atenção terráquios')
})

app.listen(port, () => console.log(`Listen on port ${port}!` ))

