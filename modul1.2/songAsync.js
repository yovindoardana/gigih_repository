const songsList = require('./songsList');

async function printSongListAsyncAwait(songPromise) {
  try {
    const songs = await songPromise;
    console.log('Daftar Lagu:');
    songs.forEach((song) => {
      console.log(`Judul: ${song.title}`);
      console.log(`Artis: ${song.artists[0].name}`);
      console.log(`Durasi: ${song.duration}`);
      console.log('---');
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

printSongListAsyncAwait(songsList);
