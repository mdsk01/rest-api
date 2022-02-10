const express=require('express')
const mongoose=require('mongoose')
const url ='mongodb://localhost/AlienDBex'

const app=express()

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open', ()=>{
    console.log('Server is connected')
})
const aliensRouter=require('./routers/aliens')
app.use('/aliens',aliensRouter)

app.use(express.json())

app.listen(9000,()=>{
    console.log('server is listening on port 9000')
})