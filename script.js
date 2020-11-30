"use strict";
//first
let numberOfFilms = false;
for(; numberOfFilms == false || numberOfFilms == null ;) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', 10 );
        // console.log(numberOfFilms[numberOfFilms.length]);
        if(numberOfFilms && numberOfFilms[0]!=' ' && numberOfFilms[numberOfFilms.length-1]!=' ' && numberOfFilms.length < 50) {
            break;
        }
        numberOfFilms = false;

        if (numberOfFilms[0]==' ' && numberOfFilms[numberOfFilms.length-1]==' ') {
            alert("Без пробелов в начале и конце строки");
            continue;
        }
        else {
            alert('Ошибка');
            continue;
        }

} 
console.log(numberOfFilms);

//second
let personaMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//third 
// let lastMovieName = prompt("Один из последних просмотренных фильмов?", 'Терминатор');
// let rateMovie =  prompt("Насколько вы его оцениваете?", '10');

// personaMovieDb.movies[lastMovieName] = +rateMovie;

// console.log(personaMovieDb);