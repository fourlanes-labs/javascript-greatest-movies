// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = [];

  moviesArray.forEach((movie) => {
    directors.push(movie.directors);
  });

  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let moviesBySpielBerg = [];

  moviesArray.forEach((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      moviesBySpielBerg.push(movie.title);
    }
  });

  const movieCount = moviesBySpielBerg.length;

  return movieCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const moviesWithScores = moviesArray.filter(
    (movie) => typeof movie.score === "number"
  );

  if (moviesWithScores.length === 0) {
    return 0;
  }

  const totalScore = moviesArray.reduce((accumulator, movie) => {
    const newTotalScore = accumulator + (movie.score || 0);
    return newTotalScore;
  }, 0);

  let scoreArray = [];

  moviesArray.forEach((movie) => {
    scoreArray.push(movie.score);
  });
  const movieScoreAverage = totalScore / scoreArray.length;

  const roundedAverage = parseFloat(movieScoreAverage.toFixed(2));

  return roundedAverage;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }
  const sumOfScores = dramaMovies.reduce(
    (accumulator, movie) => accumulator + (movie.score || 0),
    0
  );

  const averageScore = sumOfScores / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice();

  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice();

  sortedMovies.sort((a, b) => a.localeCompare(b));

  const titles = sortedMovies.map((movie) => movie.title);

  return titles.length > 20 ? titles.slice(0, 20) : titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const modifiedMovies = [];

  for (let movie of moviesArray) {
    const modifiedMovie = Object.assign({}, movie);
    const durationParts = modifiedMovie.duration.split(" ");
    let totalMinutes = 0;
    for (let part of durationParts) {
      if (part.includes("h")) {
        totalMinutes += parseInt(part) * 60;
      } else if (part.includes("min")) {
        totalMinutes += parseInt(part);
      }
    }
    modifiedMovie.duration = totalMinutes;
    modifiedMovies.push(modifiedMovie);
  }
  return modifiedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const years = {};
  moviesArray.forEach((movie) => {
    if (!years[movie.year]) {
      years[movie.year] = { totalScore: 0, movieCount: 0 };
    }
    years[movie.year].totalScore += movie.score;
    years[movie.year].movieCount++;
  });

  let bestYear = null;
  let highestAverage = -Infinity;

  for (const year in years) {
    const averageScore = years[year].totalScore / years[year].movieCount;
    if (
      averageScore > highestAverage ||
      (averageScore === highestAverage && parseInt(year) < parseInt(bestYear))
    ) {
      bestYear = year;
      highestAverage = averageScore;
    }
  }

  return parseInt(bestYear);
}
