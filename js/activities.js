"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
    {
        category: "Adventures",
        id: "A101",
        name: "Valley Hot Air Balloons",
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
        location: "121 S. Main Street",
        price: 265.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Float Trip",
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.",
        location: "145 FM 103",
        price: 65.00
    },
    {
        category: "Adventures",
        id: "A102",
        name: "River Runners: Ride the Rapids",
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!",
        location: "145 FM 103",
        price: 145.00
    },
    {
        category: "Arts & Crafts",
        id: "AC101",
        name: "Painting with a Twist : Oils",
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Arts & Crafts",
        id: "AC102",
        name: "Painting with a Twist : Watercolor",
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.",
        location: "1991 Paint Drive",
        price: 40.00
    },
    {
        category: "Museums",
        id: "M101",
        name: "Bravings Airship Museum",
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.",
        location: "101 Airfield Drive",
        price: 10.00
    },
    {
        category: "Museums",
        id: "M102",
        name: "Forks and Spoons Museum",
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!",
        location: "1056 Lost Knives Court",
        price: 3.00
    },
    {
        category: "Museums",
        id: "M103",
        name: "Steenges Computing Museum",
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.",
        location: "103 Technology Way",
        price: 0.00
    },
    {
        category: "Wine Tastings",
        id: "WT-101",
        name: "Hastings Winery Tours and Tastings",
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.",
        location: "10987 FM 1187",
        price: 12.00
    },
    {
        category: "Wine Tastings",
        id: "WT-102",
        name: "Lone Oak Winery",
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.",
        location: "121 Burleson Court",
        price: 0.00
    },
    {
        category: "Other",
        id: "OTH101",
        name: "Fire Department: Ride Along",
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!",
        location: "10 Redline Drive",
        price: 25.00
    },
    {
        category: "Other",
        id: "OTH102",
        name: "Homes For Our Neighbors",
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an our or a week, we would love to have you with us!",
        location: "Call (555) 555-5555",
        price: 0.00
    }
];

let activityItem;
let activityCategory;
let activityName;
let activityId;
let activityPrice;
let activityLocation;
let activityDescription;
let numActivities = activities.length;


function addActivitityCategories(categories) {
    const activityCategorySelect = document.getElementById("categorySelect")
    let numCategories = categories.length;

    //loop to grab each category from the array 
    for (let i = 0; i < numCategories; i++) {
        activityCategory = (categories[i]);

        // add categories to selectbox
        let nextPos = activityCategorySelect.options.length;
        activityCategorySelect.options[nextPos] = new Option(activityCategory)
    }
}

function loadActivityList() {
    //clear div below
    clear();
    const activitySelect = document.getElementById("activitySelect");
    activitySelect.options.length = 0;

    for (let i = 0; i < numActivities; i++) {
        activityItem = (activities[i].name);
        activityCategory = (activities[i].category);
        const categoryPicked = document.getElementById("categorySelect")

        if (categoryPicked.value == activityCategory) {
            ;
            let nextPos = activitySelect.options.length;
            activitySelect.options[nextPos] = new Option(activityItem);
        }
    }
}

// new funciton to display activity details - .onclick - display details in div
function loadActivityDetails() {
    //hide form, and confirmation when they click other categories
    clear();
    const ticketBtn = document.getElementById("buyTicket");
    ticketBtn.style.display = "block";

    //pull where the activity details will be displayed
    const descripitionDiv = document.getElementById("descripitionDiv");
    const activityNameHeader = document.getElementById("activityNameHeader");
    const activityIdHeader = document.getElementById("activityIdHeader");
    const activityDescriptionHeader = document.getElementById("activityDescriptionHeader");
    const activityLocationHeader = document.getElementById("activityLocationHeader");
    const activityCategoryHeader = document.getElementById("activityCategoryHeader");
    const activityPriceHeader = document.getElementById("activityPriceHeader");

    /// pull what they selected in activitySelect listbox
    const activitySelectedField = document.getElementById("activitySelect");
    let activitySelected = activitySelectedField.value;

    // match that with the object in the array and pull out the object items
    for (let i = 0; i < numActivities; i++) {
        activityName = (activities[i].name);
        activityId = (activities[i].id);
        activityLocation = (activities[i].location);
        activityDescription = (activities[i].description);
        activityPrice = Number(activities[i].price);
        activityCategory = (activities[i].category);

        if (activitySelected == activityName) {
            // display the items in the div 
            descripitionDiv.style.display = "block";
            activityNameHeader.innerHTML = activityName;
            activityIdHeader.innerHTML = "Activity ID: " + activityId;
            activityDescriptionHeader.innerHTML = "Description: " + activityDescription;
            activityLocationHeader.innerHTML = "Location: " + activityLocation;
            activityPriceHeader.innerHTML = "Price: $" + activityPrice.toFixed(2);
            activityCategoryHeader.innerHTML = "Category: " + activityCategory;

            if (activityPrice == 0) {
                ticketBtn.style.display = "none";
            }
            break;
        }

    }
}

function openForm() {
    document.getElementById('ticketForm').reset();
    const confirmationHeader = document.getElementById("confirmationHeader");
    confirmationHeader.style.display = "none";

    const activitySelectedField = document.getElementById("activitySelect");
    let activitySelected = activitySelectedField.value;
    const ticketFormDiv = document.getElementById("ticketFormDiv");
    

    for (let i = 0; i < numActivities; i++) {
        activityName = (activities[i].name);
        activityPrice = (activities[i].price);

        if (activityName == activitySelected && activityPrice > 0) {
            ticketFormDiv.style.display = "block";
            break;
        }
       
    }
}

function confirmation() {
    const activitySelectedField = document.getElementById("activitySelect");
    let activitySelected = activitySelectedField.value;
    let confirmationMsg;
    const ticketFormDiv = document.getElementById("ticketFormDiv");
    const confirmationHeader = document.getElementById("confirmationHeader");
    const numTickets = document.getElementById("numTickets").value;
    const email = document.getElementById("email").value;

    for (let i = 0; i < numActivities; i++) {
        activityName = (activities[i].name);
        activityPrice = (activities[i].price);
        activityId = (activities[i].id);

        if (activityName == activitySelected) {
            confirmationMsg = "Your credit card has been charged $" + (numTickets * activityPrice).toFixed(2) + " for " + activityName + "(ID: " + activityId + ")" + ". A confirmation email has been sent to " + email

            confirmationHeader.innerHTML = confirmationMsg;
            ticketFormDiv.style.display = "none";
            confirmationHeader.style.display = "block";
            break;
        }
    }
    return false;
}

function clear() {
    const ticketFormDiv = document.getElementById("ticketFormDiv");
    ticketFormDiv.style.display = "none";
    
    const confirmationHeader = document.getElementById("confirmationHeader");
    confirmationHeader.style.display = "none"

    const descripitionDiv = document.getElementById("descripitionDiv");
    descripitionDiv.style.display = "none";
}

function init() {

    addActivitityCategories(categories)

    const activityCategorySelect = document.getElementById("categorySelect");
    activityCategorySelect.onchange = loadActivityList;

    const activitySelect = document.getElementById("activitySelect");
    activitySelect.onchange = loadActivityDetails;

    const ticketBtn = document.getElementById("buyTicket");
    ticketBtn.onclick = openForm;

    const ticketForm = document.getElementById("ticketForm");
    ticketForm.onsubmit = confirmation;
}

