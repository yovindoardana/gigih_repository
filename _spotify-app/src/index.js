const express = require('express');
const songsRoute = require('./routes/songs');
const playlistRoute = require('./routes/playlist');

const logMiddleware = require('./middlewares/log');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logMiddleware);

app.use('/songs', songsRoute);
app.use('/playlist', playlistRoute);
// app.use('/artist', artistRoute);

app.get('/', (req, res) => {
  res.status(200).send('Spotify App is Ready');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
