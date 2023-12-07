const express = require('express')
const con = require('./connection')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/movies', (req, res) => {
    var query = "select * from movies limit 20"
    db = con.connection()
    db.query(query, function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.send(result)
    })
})

app.get('/api/movies/:id', (req, res) => {
    id = req.params.id
    var query = "select * from movies where id="+id
    db = con.connection()
    db.query(query, function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.send(result)
    })
})

app.get('/api/movies/:id/genres', (req, res) => {
    id = req.params.id
    var query = "select * from genres where id="+id
    db = con.connection()
    .query(query, function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.send(result)
    })
})

app.get('/api/movies/:id/producers', (req, res) => {
    id = req.params.id
    var query = "select * from producers where id="+id
    db = con.connection()
    .query(query, function(err, result) {
        if (err) throw err;
        //console.log(result);
        res.send(result)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})