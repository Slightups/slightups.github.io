//Hides refresh button on load
window.onload = function() {
    document.getElementById("refresh").style.display="none";
};

//Clears all the check boxes
function clearBoxes(){
    var checkedBoxes = document.querySelectorAll('input:checked')
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked')
    var score = 100 - totalChecked.length

    var meaning;
    if (score >= 95) {
        meaning = "Hmm. That's sad."
    } else if (score >= 93) {
        meaning = "Damn, make some more moves."
    } else if (score >= 90) {
        meaning = "You can do better. Way better."
    } else if (score >= 88) {
        meaning = "C'mon dude, step it up"
    } else if (score >= 85) {
        meaning = "Get to it, you can do better."
    } else if (score >= 80) {
        meaning = "You're on your way!"
    } else if (score >= 77) {
        meaning = "Alright, you're getting there."
    } else if (score >= 70) {
        meaning = "You're doing fine, I guess."
    } else if (score >= 63) {
        meaning = "Respectable."
    } else if (score >= 45) {
        meaning = "Atta boy that's what I'm talking about."
    } else if (score >= 9) {
        meaning = "Wow, you whore."
    } else {
        meaning = "DAMN, SLUT."
    }

    var scoreDiv = document.getElementById("score");
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "Your Score: " + score.toString()
    meaningDiv.innerHTML = meaning
    document.getElementById("refresh").style.display="inline"; 
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

//Clears the page (clear page button)
function clearPage() {
    clearBoxes()
    var scoreDiv = document.getElementById("score"); 
    var meaningDiv = document.getElementById("meaning"); 
    scoreDiv.innerHTML = "" 
    meaningDiv.innerHTML = "" 
    document.getElementById("refresh").style.display="none"; //Hides the clear page button button
}
