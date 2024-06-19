const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/User');
const bcrypt = require('bcrypt');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());
app.use(express.json());

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
  try {
    const { username, password } = req.body;
    const userDoc = await UserModel.findOne({ username });
    if (!userDoc) {
      return res.status(400).json({ message: 'User not found' });
    }
    const passOK = bcrypt.compareSync(password, userDoc.password);
    if (!passOK) {
      return res.status(400).json({ message: 'Invalid password' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in user' });
  }
});

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});
