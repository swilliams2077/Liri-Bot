require("dotenv").config();
//reuqire
var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var inquirer = require("inquirer");
var axios = require('axios');
var moment = require("moment");
var fs = require("fs");
//require

//keys
var spotify = new spotify(keys.spotify);
var ombdKeys = keys.ombd.id;
// var bandsInTownKey = keys.bandsInTown.id;
//keys

//API functions to grab info. 
var searchConcerts = function() {


};

var searchSpotifySong = function() {
    var songName = functionData
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        for (var i = 0; i < data.tracks.items.length; i++) {

            let header = "********** SONG **********";
            let track = "NAME:    " + data.tracks.items[i].name;
            let artist = "ARTIST:  " + data.tracks.items[i].artists[0].name;
            let album = "ALBUM:   " + data.tracks.items[i].album.name;
            let release = "RELEASE: " + data.tracks.items[i].album.release_date;
            let preview = "PREVIEW: " + data.tracks.items[i].external_urls.spotify;

            console.log(header);
            console.log(track);
            console.log(artist);
            console.log(album);
            console.log(release);
            console.log(preview);
            console.log("");

            append_log(header);
            append_log(track);
            append_log(artist);
            append_log(album);
            append_log(release);
            append_log(preview);
        }

        console.log("");
        setTimeout(start_liri, 4000);

    });

};

var searchMovie = function(movieInput) {

};

var searchTextFile = function(){

};

var commands = function(caseData, functionData) {
    switch(caseData) {
        case 'concert-this': 
            searchConcerts();
            break;
        case 'spotify-this-song': 
            searchSpotifySong(functionData);
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

function append_log(appendText) {

    fs.appendFileSync("log.txt", appendText + "\n");

};

var runThis = function(argOne, argTwo) {
    commands(argOne, argTwo);

};

runThis(process.argv[2], process.argv[3]);