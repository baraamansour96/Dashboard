const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "signup"

    }
)

app.post('/signup', (req, res) => {
    const { Name, Email, Password } = req.body;
    console.log(req)
    // Controleren of de e-mail al bestaat in de database
    const checkEmailQuery = "SELECT * FROM login WHERE email = ?";

    db.query(checkEmailQuery, [Email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Database error" });
           
        }

        if (result.length > 0) {
            // Als de e-mail al bestaat, geef een foutmelding terug
            return res.status(400).json({ message: "E-mail already in use" });
        } else {
            // Als de e-mail niet bestaat, voeg de gebruiker toe aan de database
            const insertUserQuery = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
            db.query(insertUserQuery, [Name, Email, Password], (insertErr, data) => {
                if (insertErr) {
                    return res.status(500).json({ message: "Error inserting user" });
                }
                return res.status(200).json({ message: "User registered successfully" });
                
            });
        }
    });
});

    app.post('/login',(req, res) =>{
    const sql =" SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    db.query(sql, [ req.body.email,req.body.password], (err,data) =>{
        if(err){
        }
        if(data.length >0){
            return res.json("Success");
        }else{
            return res.json("Faile");
        }
    })
    })














    app.listen(3002, () => {
    console.log("Listening...");
})


module.exports = {app}