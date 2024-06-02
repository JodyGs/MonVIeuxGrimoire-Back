const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.bjxbbiq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/books', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Sherlock Holmes',
      description: 'Le chien des Baskerville',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/05/15/02/24/london-8762468_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon ami L\'ours',
      description: 'Livre pour enfant',
      imageUrl: 'https://cdn.pixabay.com/photo/2023/03/17/14/26/bear-7858736_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});

module.exports = app;