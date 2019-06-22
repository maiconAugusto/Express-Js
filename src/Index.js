const express = require('express')
const app = express()
const port = 8080


app.get('/dir',(req, res)=>{
    res.json([
        {programmer:'ok'}
    ])
})

app.listen(8080,()=>{
    console.log(`backend! port ${port}`)
})