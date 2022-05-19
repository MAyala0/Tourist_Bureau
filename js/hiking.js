"use strict";

let hikes = [
    {
        id: "H101",
        name: "Birding Loop",
        description: "The Birding Loop takes you through cedar forests, open plains, and beautiful spring time creeks.  Along the way, you might see some of out 225 annually recorded bird species, including the beautiful Painted Bunting, the adorable Tufted Titmouse, or even a high-flying Red-Tailed Hawk. The terrain is generally flat and the trail is well marked.",
        scenicImage: "img/birding_loop_1.png",
        trailMapImage: "img/birding_loop_2.png",
        length: "2.3 miles",
        difficulty: 2
    },
    {
        id: "H102",
        name: "Deep Blue Pool Trail",
        description: "This gem features an amazing natural pool surrounded by overhanging cliffs.  A 1-mile trail leads down to the pool from the parking lot. The trail is moderately steep, requiring solid footwork but the destination is worth the walk!",
        scenicImage: "img/deep_blue_1.png",
        trailMapImage: "img/deep_blue_2.png",
        length: "2 miles",
        difficulty: 2
    },
    {
        id: "H103",
        name: "Overlook Trail",
        description: "The Overlook Trail offers a sweeping view of the valley on this quick, but steep, trail. Keep a close eye on small children and do not get too close to exposed edges.",
        scenicImage: "img/overlook_trail_1.png",
        trailMapImage: "img/overlook_trail_2.png",
        length: ".7 miles",
        difficulty: 2
    },
];

let hikeName;

// create function to pull names of objects from array
function addHikingTrails() {
    const hikeSelect = document.getElementById("hikeSelect")
    let numTrails = hikes.length;

    //loop to grab each hike from the array 
    for (let i = 0; i < numTrails; i++) {
        hikeName = (hikes[i].name);

        // add categories to selectbox
        let nextPos = hikeSelect.options.length;
        hikeSelect.options[nextPos] = new Option(hikeName)
    }
}



// create function that displays info below 
function hikeDetails() {
    const descripitionDiv = document.getElementById("descripitionDivHikes");
    const trailNameHeader = document.getElementById("trailNameHeader");
    const trailIdHeader = document.getElementById("trailIdHeader");
    const trailDescriptionHeader = document.getElementById("trailDescriptionHeader");
    const trailLengthHeader = document.getElementById("trailLengthHeader");
    const trailDifficultyHeader = document.getElementById("trailDifficultyHeader");
    const imageholder = document.getElementById("imageholder");
    const imageholder2 = document.getElementById("imageholder2");


    // pull what they selected
    const hikeSelectedField = document.getElementById("hikeSelect");
    let hikeSelected = hikeSelectedField.value;
    const imageDiv = document.getElementById("imageDiv");

    // match what they selected with the object
    let numTrails = hikes.length;
    for (let i = 0; i < numTrails; i++) {
        let trailName = (hikes[i].name);
        let trailId = (hikes[i].id);
        let trailDescription = (hikes[i].description);
        let trailLength = (hikes[i].length);
        let trailDifficulty = (hikes[i].difficulty);
        let trailscenicImage = (hikes[i].scenicImage);
        let trailMapImage = (hikes[i].trailMapImage);

        if (hikeSelected == trailName) {
            // display the items in the div 
            descripitionDiv.style.display = "block";
            imageDiv.style.display = "block";
            trailNameHeader.innerHTML = trailName;
            trailIdHeader.innerHTML = "Trail ID: " + trailId;
            trailDescriptionHeader.innerHTML = "Description: " + trailDescription;
            trailLengthHeader.innerHTML = "Length: " + trailLength;
            trailDifficultyHeader.innerHTML = "Difficulty Level: " + trailDifficulty;
            imageholder.src = trailscenicImage;
            imageholder.style.display = "block";
            imageholder2.src = trailMapImage;
            imageholder2.style.display = "block";
            break;
        }
        else{
            descripitionDiv.style.display = "none";
            imageDiv.style.display = "none";

        }

    }

}


function init() {
    addHikingTrails();

    const hikeSelect = document.getElementById("hikeSelect");
    hikeSelect.onchange = hikeDetails;
}
