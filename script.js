// if (typeof window!=="undefined") {
//     console.log("in browser");
// }
// else {
//     console.log("in nodejs");
// }

function display_time() {
    let today = new Date();
    let date = today.toDateString();
    let time = today.toLocaleTimeString();
    document.getElementById("today").innerHTML = date;
    document.getElementById('timeNow').innerHTML = time;
    let t = setTimeout(function () { display_time() }, 1000);
    let hour = today.getHours();
    console.log(hour);
    if (hour >= 4 && hour < 12) {
        document.getElementById("greeting").innerHTML = "GOOD MORNING!";
    }
    else if (hour >= 12 && hour < 16) {
        document.getElementById("greeting").innerHTML = "GOOD AFTERNOON!";
    }
    else {
        document.getElementById("greeting").innerHTML = "GOOD EVENING!";
    }
}

display_time();


function change() {
    console.log("running");
    if (document.querySelector("html").classList.toggle("lambBG")==true) {
        document.querySelector("html").classList.add("lambBG");
    }
    else {
        document.querySelector("html").classList.remove("lambBG");
    }
}


document.querySelector("button").addEventListener('click',(change));


