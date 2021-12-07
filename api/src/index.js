import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());

app.get('/pessoas', async (req, resp) => {
    try {
        let mensagens = await
            db.tb_lista_negra.findAll({
                where: {
                    id_mensagem: req.params.id
    },
    
    });

        resp.send(mensagens);
    } catch (e) {
        resp.send(e.toString())
    }
 })

 app.get('/pessoa2', async (req, resp) => {
    try {
        let mensagens = await db.tb_lista_negra.findAll(
            {
                where: {
                    id: req.params.pessoas
    }
    
    });

        resp.send(mensagens);
    } catch (e) {
        resp.send(e.toString())
    }
 })

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))