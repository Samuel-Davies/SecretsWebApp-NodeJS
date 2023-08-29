
const dotenv  = require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const User = require('./models/users');

const PORT = 3000;

const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.listen(PORT, ()=> {
  console.log("Server started on port " + PORT);
});

app.route('/')
    .get((req, res)=>{
        res.render('home');
    });


    
app.route('/login')
    .get((req, res)=>{
        res.render('login');
    })
    .post((req, res)=>{
        const username = req.body.username;
        const password = req.body.password;

        User.findOne({email: username})
            .then((foundUser)=>{
                if(foundUser.password === password){
                    res.render('secrets');
                }
            })
            .catch((err)=>{
                res.send("Wrong credentials" + err);
            })

    });

    // Registeration routes
app.route('/register')
    .get((req, res)=>{
        res.render('register');
    })
    .post(async (req, res)=>{
            await User.create({
                email: req.body.username,
                password: req.body.password
            })
            .then(()=>{
                res.render('secrets')
            })
            .catch((err)=>{
                console.log(err);
            })
    });


 