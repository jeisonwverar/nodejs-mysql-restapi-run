import express from 'express';

const app=express();
app.get('employees',(req,res)=>{
    res.send('obteniendo')
})
app.listen(3000,()=>{
    console.log('listen in port 3000')
});