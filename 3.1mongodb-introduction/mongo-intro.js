// Step 1
'use spotify';

// Step 2
db.songs.insertMany([
  {
    title: 'Welcome to the Black Parade',
    artists: ['My Chemical Romance'],
    album: 'The Black Parade',
    releaseYear: 2006,
    genres: ['Alternative Rock', 'Emo']
  },
  {
    title: 'Helena',
    artists: ['My Chemical Romance'],
    album: 'Three Cheers for Sweet Revenge',
    releaseYear: 2004,
    genres: ['Alternative Rock', 'Emo']
  },
  {
    title: "I'm Not Okay (I Promise)",
    artists: ['My Chemical Romance'],
    album: 'Three Cheers for Sweet Revenge',
    releaseYear: 2004,
    genres: ['Alternative Rock', 'Emo']
  },
  {
    title: 'Shadow Moses',
    artists: ['Bring Me the Horizon'],
    album: 'Sempiternal',
    releaseYear: 2013,
    genres: ['Metalcore', 'Alternative Rock']
  },
  {
    title: 'Sleepwalking',
    artists: ['Bring Me the Horizon'],
    album: 'Sempiternal',
    releaseYear: 2013,
    genres: ['Metalcore', 'Alternative Rock']
  },
  {
    title: 'Can You Feel My Heart',
    artists: ['Bring Me the Horizon'],
    album: 'Sempiternal',
    releaseYear: 2013,
    genres: ['Metalcore', 'Alternative Rock']
  },
  {
    title: 'December',
    artists: ['Neck Deep'],
    album: "Life's Not Out to Get You",
    releaseYear: 2015,
    genres: ['Pop Punk']
  },
  {
    title: 'In Bloom',
    artists: ['Neck Deep'],
    album: 'The Peace and the Panic',
    releaseYear: 2017,
    genres: ['Pop Punk']
  },
  {
    title: 'Perfect',
    artists: ['Simple Plan'],
    album: 'No Pads, No Helmets...Just Balls',
    releaseYear: 2002,
    genres: ['Pop Punk', 'Alternative Rock']
  },
  {
    title: 'Welcome to My Life',
    artists: ['Simple Plan'],
    album: 'Still Not Getting Any...',
    releaseYear: 2004,
    genres: ['Pop Punk', 'Alternative Rock']
  },
  {
    title: "I'd Do Anything",
    artists: ['Simple Plan'],
    album: 'No Pads, No Helmets...Just Balls',
    releaseYear: 2002,
    genres: ['Pop Punk', 'Alternative Rock']
  },
  {
    title: 'Numb',
    artists: ['Linkin Park'],
    album: 'Meteora',
    releaseYear: 2003,
    genres: ['Alternative Rock', 'Nu Metal']
  },
  {
    title: 'In the End',
    artists: ['Linkin Park'],
    album: 'Hybrid Theory',
    releaseYear: 2000,
    genres: ['Alternative Rock', 'Nu Metal']
  },
  {
    title: 'Crawling',
    artists: ['Linkin Park'],
    album: 'Hybrid Theory',
    releaseYear: 2001,
    genres: ['Alternative Rock', 'Nu Metal']
  },
  {
    title: 'American Idiot',
    artists: ['Green Day'],
    album: 'American Idiot',
    releaseYear: 2004,
    genres: ['Punk Rock', 'Pop Punk']
  },
  {
    title: 'Boulevard of Broken Dreams',
    artists: ['Green Day'],
    album: 'American Idiot',
    releaseYear: 2004,
    genres: ['Punk Rock', 'Pop Punk']
  },
  {
    title: '21 Guns',
    artists: ['Green Day'],
    album: '21st Century Breakdown',
    releaseYear: 2009,
    genres: ['Punk Rock', 'Pop Punk']
  },
  {
    title: 'Lose Yourself',
    artists: ['Eminem'],
    album: '8 Mile Soundtrack',
    releaseYear: 2002,
    genres: ['Hip Hop', 'Rap']
  },
  {
    title: 'Love the Way You Lie (featuring Rihanna)',
    artists: ['Eminem', 'Rihanna'],
    album: 'Recovery',
    releaseYear: 2010,
    genres: ['Hip Hop', 'Rap']
  },
  {
    title: 'Bat Country',
    artists: ['Avenged Sevenfold'],
    album: 'City of Evil',
    releaseYear: 2005,
    genres: ['Heavy Metal', 'Hard Rock']
  },
  {
    title: 'Afterlife',
    artists: ['Avenged Sevenfold'],
    album: 'Avenged Sevenfold',
    releaseYear: 2007,
    genres: ['Heavy Metal', 'Hard Rock']
  },
  {
    title: 'Nightmare',
    artists: ['Avenged Sevenfold'],
    album: 'Nightmare',
    releaseYear: 2010,
    genres: ['Heavy Metal', 'Hard Rock']
  },
  {
    title: 'Complicated',
    artists: ['Avril Lavigne'],
    album: 'Let Go',
    releaseYear: 2002,
    genres: ['Pop Rock', 'Pop Punk']
  },
  {
    title: 'Sk8er Boi',
    artists: ['Avril Lavigne'],
    album: 'Let Go',
    releaseYear: 2002,
    genres: ['Pop Rock', 'Pop Punk']
  },
  {
    title: 'My Happy Ending',
    artists: ['Avril Lavigne'],
    album: 'Under My Skin',
    releaseYear: 2004,
    genres: ['Pop Rock', 'Pop Punk']
  },
  {
    title: 'Bring Me to Life',
    artists: ['Evanescence'],
    album: 'Fallen',
    releaseYear: 2003,
    genres: ['Alternative Rock', 'Gothic Rock']
  },
  {
    title: 'My Immortal',
    artists: ['Evanescence'],
    album: 'Fallen',
    releaseYear: 2003,
    genres: ['Alternative Rock', 'Gothic Rock']
  },
  {
    title: 'Going Under',
    artists: ['Evanescence'],
    album: 'Fallen',
    releaseYear: 2003,
    genres: ['Alternative Rock', 'Gothic Rock']
  }
]);

// Step 3
db.artists.insertMany([
  {
    name: 'My Chemical Romance',
    genres: ['Alternative Rock', 'Emo'],
    formedYear: 2001
  },
  {
    name: 'Bring Me the Horizon',
    genres: ['Metalcore', 'Alternative Rock'],
    formedYear: 2004
  },
  {
    name: 'Neck Deep',
    genres: ['Pop Punk'],
    formedYear: 2012
  },
  {
    name: 'Simple Plan',
    genres: ['Pop Punk', 'Alternative Rock'],
    formedYear: 1999
  },
  {
    name: 'Linkin Park',
    genres: ['Alternative Rock', 'Nu Metal'],
    formedYear: 1996
  },
  {
    name: 'Green Day',
    genres: ['Punk Rock', 'Pop Punk'],
    formedYear: 1986
  },
  {
    name: 'Eminem',
    genres: ['Hip Hop', 'Rap'],
    birthYear: 1972
  },
  {
    name: 'Avenged Sevenfold',
    genres: ['Heavy Metal', 'Hard Rock'],
    formedYear: 1999
  },
  {
    name: 'Avril Lavigne',
    genres: ['Pop Rock', 'Pop Punk'],
    birthYear: 1984
  },
  {
    name: 'Evanescence',
    genres: ['Alternative Rock', 'Gothic Rock'],
    formedYear: 1995
  },
  {
    name: 'Rihanna',
    genres: ['Pop', 'R&B', 'Hip Hop'],
    formedYear: 1988
  }
]);

// Step 4
db.popularSongs.insertMany([
  {title: 'Welcome to the Black Parade', totalPlay: 100, periodOfTime: '2006 - 2007'},
  {title: 'Helena', totalPlay: 100, periodOfTime: '2004 - 2008'},
  {title: "I'm Not Okay (I Promise)", totalPlay: 100, periodOfTime: '2004 - 2006'},
  {title: 'Shadow Moses', totalPlay: 100, periodOfTime: '2013 - 2014'},
  {title: 'Sleepwalking', totalPlay: 100, periodOfTime: '2013 - 2015'},
  {title: 'Can You Feel My Heart', totalPlay: 100, periodOfTime: '2013 - 2017'},
  {title: 'December', totalPlay: 100, periodOfTime: '2015 - 2019'},
  {title: 'In Bloom', totalPlay: 100, periodOfTime: '2017 - 2018'},
  {title: 'Perfect', totalPlay: 100, periodOfTime: '2002 - 2023'},
  {title: 'Welcome to My Life', totalPlay: 100, periodOfTime: '2004 - 2022'}
]);
