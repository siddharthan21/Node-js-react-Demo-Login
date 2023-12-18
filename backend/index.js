import express, { json } from 'express'
import mysql from 'mysql'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
const app = express()
app.use(cors())
app.use(json())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "Authen",
    port: 3309
})
app.post("/login", async (req, res) => {
    console.log(req.body.email)
    const email = req.body.email;
    const password = req.body.password;
    const q = "SELECT * FROM User where email = ?"
    db.query(q, [email], async (err, data) => {
        if (err) return res.json(err)
        const user = await bcrypt.compare(password, data[0].password)
        if (user === true) {
             res.status(201).json({
                "result": data[0]
            });
        }
        
    })
})

app.post("/sginup", async (req, res) => {

    const q = "INSERT INTO User (`email`, `name`, `password`, `phonenumber`) VALUES (?)"
    const password = await bcrypt.hash(req.body.password, 10)
    let values = [
        req.body.email,
        req.body.name,
        password,
        req.body.phone
    ];
    db.query(q, [values], (err) => {
        if (err.code) return res.json({
            "satus":406,
            "messgae":"Falied",
            
        })
        res.json({
            "satus":200,
            "message":"Sucessfully Login",
            "data":values
    })
    })


    // password = undefined
    // res.status().send("okeee")
    // console.log(tocken)

})
app.listen(6535, () => {
    console.log("connected")
})
