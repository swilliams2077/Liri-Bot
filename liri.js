require("dotenv").config();

var keys = require("./keys.js");

var spotify = new spotify(keys.spotiy);

var searchConcerts = function() {

};

var searchSpotifySong = function() {

};

var searchMovie = function() {

};

var searchTextFile = function(){

};

var commands = function(caseData, functionData) {
    switch(caseData) {
        case 'concert-this': 
            searchConcerts();
            break;
        case 'spotify-this-song': 
            searchSpotifySong();
            break;
        case 'movie-this': 
            searchMovie();
            break;
        case 'do-what-it-says': 
            searchTextFile();
            break;
        default:
            console.log('Liri is unable to process that request');

    }
}

var runThis = function(argOne, argTwo) {
    command(argOne, argTwo);

};

runthis(process.argv[2], process.argv[3]);