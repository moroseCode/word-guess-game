// Create an array of the alphabet
var alphabet =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wrongGuess = 3
// Create an array of song titles and randomly select them when the game is played
var songs = [
    {
        name: "White And Nerdy",
        url: "https://youtu.be/GWc6QQ9JlMc",
        inPlay: true
    },
    {
        name: "Like A Surgeon",
        url: "https://youtu.be/notKtAgfwDA",
        inPlay: true
    },
    {
        name: "Dare To Be Stupid",
        url: "https://youtu.be/SMhwddNQSWQ",
        inPlay: true
    },
    {
        name: "Living With A Hernia",
        url: "https://youtu.be/SMhwddNQSWQ",
        inPlay: true
    },
    {
        name: "It's All About The Pentiums",
        url: "https://youtu.be/qpMvS1Q1sos",
        inPlay: true
    }
]

// Choose a random song from the array
var songChoice = songs[Math.floor(Math.random() * songs.length)];

// Create an empty string as a placeholder
var question = ""
// Iterate through the song selected and add an underscore and a space if there is a letter and two spaces if there is just a space
for(i = 0; i < songChoice["name"].length; i++){
    if(songChoice["name"][i] === " "){
        question += "  ";
    } else {
    question += ["_ "];
    }
}

document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    if(songChoice["name"].includes(userGuess)){
        letterIndex = [];
        for(var i = 0; i < songChoice["name"]; i++){
            if(songChoice["name"][i] === userGuess){
                letterIndex.push(i);
            }
        }
    
    } else {
        // If incorrect user gets a chance removed
        wrongGuess--;
    }
}
// If correct the user gets to go again
// If user runs out of chances the game ends
if(wrongGuess <= 0){
    // display game over message
}
// If user is correct, a window pops up and a youtube video of the song plays
if(question = // song with spaces added){
    window.open(songChoice.url, Winner, width:40%, height:auto)
    // randomly select another song and start the game over
}