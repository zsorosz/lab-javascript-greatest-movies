// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //   const allDirectors = moviesArray.map((movie) => {
  //     return movie.director;
  //   });
  //   return allDirectors;
  let allDirectors = moviesArray.map((movie) => movie.director);
  let uniqueDirectors = allDirectors.filter((element) => {
    return allDirectors.indexOf(element) === allDirectors.lastIndexOf(element);
  });
  return uniqueDirectors;
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
function turnHoursToMinutes(moviesArray) {
  const cloneArray = JSON.parse(JSON.stringify(moviesArray));
  cloneArray.map((movie) => {
    let durationArr = movie.duration
      .replace("h", "")
      .replace("min", "")
      .split(" ");
    let hoursInMinutes = parseInt(durationArr[0]) * 60;
    let minutes = 0;
    if (durationArr.length > 1) {
      minutes = parseInt(durationArr[1]);
    }
    movie.duration = hoursInMinutes + minutes;
    return movie;
  });
  return cloneArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;
  const cloneArray = JSON.parse(JSON.stringify(moviesArray));
  //GROUP MOVIES BY YEAR
  cloneArray.sort((a, b) => a.year - b.year);
  let groupedArr = [];
  while (cloneArray.length > 0) {
    let year = cloneArray[0].year;
    let sameYear = cloneArray.filter((movie) => movie.year === year);
    groupedArr.push(sameYear);
    cloneArray.splice(0, sameYear.length);
  }
  //CALC AVERAGE SCORES PER YEAR
  let averageScores = groupedArr.map((group) => {
    return scoresAverage(group);
  });
  //FIND HIGHEST SCORE
  let highestScore = averageScores[0];
  let indexOfHighest = 0;
  for (let i = 0; i < averageScores.length; i++) {
    if (averageScores[i] > highestScore) {
      highestScore = averageScores[i];
      indexOfHighest = i;
    }
  }
  const bestYear = groupedArr[indexOfHighest][0].year;

  return `The best year was ${bestYear} with an average score of ${highestScore}`;
}
