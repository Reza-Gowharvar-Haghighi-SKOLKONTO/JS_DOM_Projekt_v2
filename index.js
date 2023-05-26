window.addEventListener("load", function () {

    var msg = document.getElementById("msg");
    var timeText = document.getElementById("timeText");
    var img = document.getElementById("img");
    var header = document.getElementById("header");
    var optHead = document.getElementById("optHead");

})

var currentColor = null;
var message = null;
var nextImg = 0;
var nextHead = 0;
var headHidden = true;
var imageHidden = false;
var msgShown = false;
var timeShown = false

function colorSwap() {

    const color = ["blue", "yellow", "aqua", "green", "red", "purple", "white", "hotpink"];

    /* Kontrollerar att den nuvarande färgen inte finns med i listan. */
    for (let i of color) {

        if (i === currentColor) {

            let clrDelIndex = color.indexOf(currentColor);

            color.splice(clrDelIndex, 1);

        }

    }

    /* Slumpar fram färgen */
    let clrIndex = Math.floor(Math.random() * color.length);

    currentColor = color[clrIndex];

    document.body.style.backgroundColor = currentColor;

}

function goodVibes() {

    /* Visar elementet om inte redan framme */
    if (msg.style.display == "") {
        
        msg.style.display = "block";
        msgShown = true;
    
    } 

    const messages = ["Hur mår du idag?", "Va kul att se dig här!", "Nämen! Här ser man ju på.", 'Visste du att det finns en stad i Japan som heter "Obama"?', "Guldfiskar har en kortare uppmärksamhetstid än människor.", "Honung är den enda maten som inte ruttnar, coolt!", "Bin känner igen ansikten och kan snacka med varandra.", "Katter sover faktiskt i genomsnitt 14 timmar per dag. Det är mycket."];

    /* Ser till att samma meddelande inte dyker upp två gånger i rad */
    for (let i of messages) {
        if (i === message) {

            let msgDelIndex = messages.indexOf(message);

         messages.splice(msgDelIndex, 1);

        }
    }

    /* Slumpar fram en meddelande */
    let msgIndex = Math.floor(Math.random() * messages.length);

    message = messages[msgIndex];

    document.getElementById("msg").innerHTML = message;

    /* Ser till att elementet dyker upp på rätt plats */
    if (nextHead === 1) {

        msg.style.display = "flex";
        msg.style.justifyContent = "center";

    }

    if (nextHead === 2) {

        msg.style.display = "flex";
        msg.style.justifyContent = "end";a

    }
    
}

function timeAndDate() {

    const d = new Date();

    const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

    /* Visar elementet om inte redan framme */
    if (timeText.style.display == "") {

        timeText.style.display = "block";
        timeShown = true;

    }

    /* Ser till att angivna nummer som är mindre än 10 visar alltid som 0x istället för att vara ensam */
    function twoDigit(time) {

        if (time < 10) {

            return `0${time}`;

        }

        else {

            return time;

        }

    }

    document.getElementById("timeText").innerHTML = `Dagens datum är ${weekdays[d.getDay()]} den ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}<br><br>Klockan är ${twoDigit(d.getHours())}:${twoDigit(d.getMinutes())}:${twoDigit(d.getSeconds())}`;

    /* Ser till att elementet dyker upp på rätt plats */
    if (nextHead === 1) {

        timeText.style.display = "flex";
        timeText.style.justifyContent = "center";

    }

    if (nextHead === 2) {

        timeText.style.display = "flex";
        timeText.style.justifyContent = "end";

    }

}

function imgSwap() {

    const images = ["images/cat.png", "images/dog.png", "images/bunny.png", "images/bird.png"];

    /* Växlar genom listan */
    nextImg += 1;
    nextImg = nextImg % images.length;

    document.getElementById("img").src = images[nextImg] || "Jaha, det blir inga kattbilder då :(";

}

function headerSwap() {

    const heads = [0, 1, 2];

    /* Växlar mellan olika lägen */
    nextHead += 1;
    nextHead = nextHead % heads.length;

    /* Default */
    if (nextHead == 0) {

        if (msgShown) {
        
            msg.style.display = "block";
        
        }

        if (timeShown) {
        
            timeText.style.display = "block";

        }
        
        img.style.marginLeft = "0";
        img.style.marginRight = "auto";

    }

    /* Center and grey */
    else if (nextHead == 1) {

        if (msgShown) {

            msg.style.display = "flex";
            msg.style.justifyContent = "center";

        }
        
        if (timeShown) {
           
            timeText.style.display = "flex";
            timeText.style.justifyContent = "center";

        }

        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";

        header.style.backgroundColor = "lightgray";

        if (img.style.display != "none" && header.style.display != "none") {
            
            optHead.style.top = "70%";

        }

        else {

            optHead.style.top = "50%";

        }

    }

    /* Default reversed */
    else if (nextHead == 2) {

        if (msgShown) {

            msg.style.justifyContent = "end";

        }
        
        if (timeShown) {

            timeText.style.justifyContent = "end";

        }

        img.style.marginLeft = "auto";
        img.style.marginRight = "0";

        header.style.backgroundColor = "transparent";

        optHead.style.top = "50%";

    }

}

function showElement(chosenElement) {

    if (chosenElement == "head") {
        
        header.style.display = "block";
        headHidden = false;
        
        if (nextHead === 1 && imageHidden === false) {

            optHead.style.top = "70%";
    
        }
    
        else {
    
            optHead.style.top = "50%";
    
        }    

    }

    if (chosenElement == "image") {

        img.style.display = "block";
        imageHidden = false;

        if (nextHead === 1 && headHidden === false) {

            optHead.style.top = "70%";
    
        }
    
        else {
    
            optHead.style.top = "50%";
    
        }
    
    }

}

function hideElement(chosenElement) {

    if (chosenElement == "head") {
        
        header.style.display = "none";
        headHidden = true;

    }

    if (chosenElement == "image") {

        img.style.display = "none";
        imageHidden = true;

    }

    optHead.style.top = "50%";

}
