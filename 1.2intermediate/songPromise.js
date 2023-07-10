const songsList = require('./songsList');

const printSongListPromise = (songPromise) => {
  new Promise(() =>
    setTimeout(() => {
      console.log('Song Lists :');
      songPromise.forEach((song) => {
        console.log(`Judul: ${song.title}`);
        console.log(`Artis: ${song.artists[0]?.name}`);
        console.log(`Durasi: ${song.duration}`);
        console.log('---');
      });
    }, 3000)
  );
};

// const printSongListPromise = (songPromise) => {
//   new Promise(() =>
//     setTimeout(() => {
//       console.log('Song Lists :');
//       songPromise.forEach((song) => {
//         console.log(`Judul: ${song.title}`);
//         console.log(`Artis: ${song.artists[0]?.name}`);
//         console.log(`Durasi: ${song.duration}`);
//         console.log('---');
//       });
//     }, 3000)
//   );
// };

printSongListPromise(songsList);
