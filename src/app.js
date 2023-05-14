import express from 'express';
import connectToDatabase from './db/conn.js';
import Register from './models/register.js';

const PORT = 9090;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
connectToDatabase();

// setting view engine
app.set('view engine', 'hbs');

app.get('/', async (req, res) => {
  try {
    const registeredUsers = await Register.find();
    res.render('index', { users: registeredUsers });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.post('/', async (req, res) => {

  try {
    const userData = new Register({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    });

    await userData.save();
    const registeredUsers = await Register.find();
    res.render('index', { users: registeredUsers });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.post('/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Register.findByIdAndDelete(id);
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error);
  }
});


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
