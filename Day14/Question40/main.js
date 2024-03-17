/*Day 14
Question 40: Album: Create objects for music albums.*/
//Defines a function called make_album which takes three parameters: artist, title, and optional tracks
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title }; //Creates an object named album with properties artist and title
    //Checks if the tracks parameter is provided (i.e., it's not undefined or null)
    if (tracks) {
        album["tracks"] = tracks; //If tracks is provided, add a tracks property to the album object
    }
    return album; //Returns the album object
}
//Calls the function make_album() three times with different arguments and logs the results
console.log(make_album("Taylor Swift", "1989"));
console.log(make_album("Kendrick Lamar", "To Pimp a Butterfly"));
console.log(make_album("Beyoncé", "Lemonade", 12));
