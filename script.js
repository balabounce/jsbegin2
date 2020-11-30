"use strict";
//first
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', 10 );
//second
let personaMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//third 
let lastMovieName = prompt("Один из последних просмотренных фильмов?", 'Терминатор');
let rateMovie =  prompt("Насколько вы его оцениваете?", '10');

personaMovieDb.movies[lastMovieName] = +rateMovie;

console.log(personaMovieDb);