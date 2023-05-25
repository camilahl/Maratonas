function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    }
    if (document.getElementById('correct7').checked) {
        score++;
    }
    if (document.getElementById('correct8').checked) {
        score++;
    }
    if (document.getElementById('correct9').checked) {
        score++;
    }

    Swal.fire("Your score is: " + score + "/9");
    Swal.timer(8000);
}

function reload() {
    window.location.reload(true);
}

const overlay = document.querySelector("#overlay");
document.querySelector("#show-modal-btn").addEventListener("click", () => {
    overlay.style.display = "block";
})

document.querySelector("#close-modal-btn").addEventListener("click", () => {
    overlay.style.display = "none";
})