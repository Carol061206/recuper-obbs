app.get('/bitchs', async(req, resp) => {
    try{
        let feios = await db.tb_lista_negra.findAll
        
        resp.send(feios); 
    }catch(e){
        resp.send ({erro: e.toString()})
    }

})

app.post('/bitchs', async(req, resp) => {
    try{
        let {id_nome} = req.body; 

        let r = await db.tb_lista_negra.create({
            id_nome 
        })

        resp.send(r); 

    }catch (e) {
        resp.send({ erro: e.toString()})