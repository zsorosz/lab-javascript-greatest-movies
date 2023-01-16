const moviesArr = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    director: "Frank Darabont",
    duration: "2h 22min",
    genre: ["Crime", "Drama"],
    score: 9.3,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Godfather: Part II",
    year: 1974,
    director: "Francis Ford Coppola",
    duration: "3h 22min",
    genre: ["Crime", "Drama"],
    score: 9,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Steven Spielberg",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 1957,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: 'Schindler"s List',
    year: 1993,
    director: "Steven Spielberg",
    duration: "3h 15min",
    genre: ["Biography", "Drama", "History"],
    score: 8.9,
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    director: "Steven Spielberg",
    duration: "2h 34min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.9,
  },
  {
    title: "Il buono, il brutto, il cattivo",
    year: 1966,
    director: "Steven Spielberg",
    duration: "3h 2min",
    genre: ["Western"],
    score: 8.9,
  },
  {
    title: "Fight Club",
    year: 1999,
    director: "David Fincher",
    duration: "2h 19min",
    genre: ["Drama"],
    score: 8.8,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.8,
  },
  {
    title: "Forrest Gump",
    year: 1994,
    director: "Robert Zemeckis",
    duration: "2h 22min",
    genre: ["Comedy", "Drama", "Romance"],
    score: 8.8,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
    director: "Irvin Kershner",
    duration: "2h 4min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    score: 8.8,
  },
  {
    title: "Inception",
    year: 2010,
    director: "Christopher Nolan",
    duration: "2h 28min",
    genre: ["Action", "Adventure", "Sci-Fi", "Thriller"],
    score: 8.8,
  },
];

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //   const allDirectors = moviesArray.map((movie) => {
  //     return movie.director;
  //   });
  //   return allDirectors;
  return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //   const spielbergDrama = moviesArray.filter(function (movie) {
  //     return (
  //       movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  //     );
  //   });
  //   return spielbergDrama.length;
  const spielbergDrama = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const sumScore = moviesArray
    .filter((element) => element.score)
    .reduce((acc, cur) => acc + cur.score, 0);
  if (moviesArray.length === 0) {
    return 0;
  } else {
    return Math.round((sumScore / moviesArray.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((el) => el.genre.includes("Drama"));
  const sumScoreDrama = dramaMovies
    .filter((element) => element.score)
    .reduce((acc, cur) => acc + cur.score, 0);
  if (dramaMovies.length === 0) {
    return 0;
  } else {
    return Math.round((sumScoreDrama / dramaMovies.length) * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneArray = moviesArray.map((x) => x);
  const sortedByYear = cloneArray.sort((a, b) => {
    if (a.year === b.year) {
      if (a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return a.year - b.year;
    }
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titlesArr = moviesArray.map((x) => x.title);
  return titlesArr.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
