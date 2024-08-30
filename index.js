const express = require("express");

const app = express ();

app.get("/exercicio1/", (req, res) => {
    //http:http://localhost:3000/exercicio1/?num1=0&num2=3
    const num1 = req.query.num1
    const num2 = req.query.num2
    // http://localhost:3000/exercicio1
    //path param
    const resultado = Number (num1) + Number (num2);
    res.json({ message: resultado })
} )
app.get("/exercicio2/", (req, res) => { 
    const valor = req.query.valor
    const horas = req.query.horas
    const receber = req.query.receber
    const resultado = Number (valor) * Number (horas) * Number (receber);
    res.json({ message: resultado })
} )


app.listen(3000, () => {
    console.log("servidor está rodando na porta 3000")   
})