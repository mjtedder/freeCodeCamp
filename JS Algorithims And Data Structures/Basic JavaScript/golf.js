var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) {
        console.log(names[0])
    } else if (strokes <= par - 2) {
        console.log(names[1])
    }
}


// Change these values to test
golfScore(5, 3);