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
        let {nome, chamada, curso, turma} = req.body; 

        let r = await db.tb_matricula.create({
            nm_aluno : nome, 
            nr_chamada : chamada, 
            nm_curso : curso,
            nm_turma : turma 
        })

        resp.send(r); 

    }catch (e) {
        resp.send({ erro: e.toString()})

    }

})
