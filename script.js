
let number0fFilms;


function start() {
    number0fFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

// start();

const personalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// МОЙ СПОСОБ
// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('БАЗА - ПРИВАТНАЯ! НЕЛЬЗЯ ПОКАЗЫВАТЬ!');
//     }
// }



// СПОСОБ ИВАНА - МОЙ МОСК НАЧИНАЕТ ЛОМАТЬСЯ :)
function showMyDB(hidden) { //false
    if (!hidden) {  // true
        console.log(personalMovieDB);
    } else {
        console.log('БАЗА - ПРИВАТНАЯ! НЕЛЬЗЯ ПОКАЗЫВАТЬ!222');
    }
}
showMyDB(personalMovieDB.privat);

    
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
              
        if (a != null && b != null && a != '' && b !='' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('DONE!');
        } else {
            console.log('UNdone!');
            i--;
        }    
    }      
}


// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 31) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();


function writeYourGenres() {

    for (let i = 1; i <= 3; i++) {
    
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
    

  

}

writeYourGenres();





