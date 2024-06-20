const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
const secret = 'ad9dsf82sdf82ds82f64g';

app.use(cors({credentials: true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://myBlog:Nisarg@cluster0.lpkt91i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('Failed to connect to MongoDB', err));

app.post('/register', async function (req, res) {
  try {
    const { username, password } = req.body;
    const userDoc = await UserModel.create({
      username,
      password: bcrypt.hashSync(password, salt)
    });
    res.json(userDoc);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

app.post('/login', async function (req, res) {
  const { username, password } = req.body;
  const userDoc = await UserModel.findOne({ username });
  const passOK = bcrypt.compareSync(password, userDoc.password);
  if(passOK){
    jwt.sign({username, id:userDoc.id}, secret, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json('ok');
    });
  }
  else{
    res.status(500).json('Wrong credentials');
  }
});

app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if(err) throw err;
    res.json(info);
  });
  res.json(req.cookies);
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
