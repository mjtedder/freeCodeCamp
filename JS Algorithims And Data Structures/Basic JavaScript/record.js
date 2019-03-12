var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    // If prop isn't tracks and value isn't empty
    if (prop !== "tracks" && value !== null) {
    // Update or set the value for that record album's property
    collection[id][prop] = value
    console.log(collection)
  }
    // If prop is "tracks" but the album doesn't have a "tracks" property
    else if (prop === "tracks" && "tracks" === null) {
    var tracks = []
    tracks.push(collection.id.prop.value)
     }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
