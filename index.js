// Global variables
homeCnt = 0;
guestCnt = 0;

let homeDisplay = document.getElementsByClassName("homeDisplay");
let guestDisplay = document.getElementsByClassName("guestDisplay");

// Function for incrementing Home Team Score
function homeCntIncrement(val) {

    homeCnt += val;
    homeDisplay[0].innerText = homeCnt;

    if(homeCnt > guestCnt) {
    
        homeDisplay[0].style.color = "lightgreen";
        guestDisplay[0].style.color = "lightcoral";
    } else if (homeCnt < guestCnt) {
        homeDisplay[0].style.color = "lightcoral";
        guestDisplay[0].style.color = "lightgreen";
    } else {
        homeDisplay[0].style.color = "white";
        guestDisplay[0].style.color = "white";
    }

}

// Function for incrementing Guest Team Score
function guestCntIncrement(val) {

    guestCnt += val;
    guestDisplay[0].innerText = guestCnt;

    if(homeCnt < guestCnt) {
        homeDisplay[0].style.color = "lightcoral";
        guestDisplay[0].style.color = "lightgreen";
    } else if (homeCnt > guestCnt) {
        homeDisplay[0].style.color = "lightgreen";
        guestDisplay[0].style.color = "lightcoral";
    } else {
        homeDisplay[0].style.color = "white";
        guestDisplay[0].style.color = "white";
    }
}

// Function for re-setting game
function resetGame() { 

    homeCnt = 0;
    guestCnt = 0;
    
    homeDisplay[0].innerHTML = 0;
    homeDisplay[0].style.color = "white";
    
    guestDisplay[0].innerHTML = 0; 
    guestDisplay[0].style.color = "white";
}
