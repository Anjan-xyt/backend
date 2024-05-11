const express = require("express");
const app = express();
const path = require('path');
const userModel = require('./Models/usermodel');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render('home');
});

app.get("/profiles", async (req, res) => {
  let allusers = await userModel.find()
  res.render('profiles', {users:allusers});
});

app.post('/register', async (req,res)=>{
  let {name, age, email} = req.body;
  await userModel.create({
    name:name,
    age,            //age -> age:age
    email
  })
  res.redirect('/');
})

app.get('/delete/:profile_id', async (req, res)=>{
  await userModel.findOneAndDelete({_id:req.params.profile_id});
  res.redirect('/profiles');
})

app.listen(port, () => console.log(`Server running on port ${port}`));
