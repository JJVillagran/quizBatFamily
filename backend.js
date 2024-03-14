console.log("check");

let start = document.querySelector(".startBox");
console.log("start");

let cassandra = document.querySelector(".cassandraBox");
console.log("cassandra");

let jason = document.querySelector(".jasonBox");
console.log("cassandra");

let tim = document.querySelector(".timBox");
console.log("cassandra");

let grayson = document.querySelector(".graysonBox");
console.log("cassandra");

let button = document.querySelector(".enter-user-input");
console.log("button");

button.addEventListener("click", function() {
    let age = document.querySelector(".age").value;
    let personality = document.querySelector(".personality").value;
    let message = document.querySelector(".message");

    if (age <= 17 && personality === "tough") {
        cassandra.style.display = "block";
        start.style.display = "none";
    } 
    else if (age <= 17 && personality === "chill") {
        tim.style.display = "block";
        start.style.display = "none";
    } 
    else if (age >= 18 && personality === "tough") {
        jason.style.display = "block";
        start.style.display = "none";
    } 
    else if (age >= 18 && personality === "chill") {
        grayson.style.display = "block";
        start.style.display = "none";
    }
    else {
        message.innerHTML = "Please input an age and personality that corresponds with the quiz.";
        message.style.color = "red";
    }
});


let cassRestart = document.querySelector(".cassRestart")
console.log("cassRestart");

let jasonRestart = document.querySelector(".jasonRestart")
console.log("jasonRestart");

let timRestart = document.querySelector(".timRestart")
console.log("timRestart");

let graysonRestart = document.querySelector(".graysonRestart")
console.log("graysonRestart");

 cassRestart.addEventListener("click", function() {
    cassandra.style.display = "none";
    start.style.display = "block";
    age.innerHTML = "none";
});

jasonRestart.addEventListener("click", function() {
    jason.style.display = "none";
    start.style.display = "block";
});

timRestart.addEventListener("click", function() {
    tim.style.display = "none";
    start.style.display = "block";
});

graysonRestart.addEventListener("click", function() {
    grayson.style.display = "none";
    start.style.display = "block";
}); 
