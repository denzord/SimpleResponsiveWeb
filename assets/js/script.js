function greenTheme() {
    document.getElementById('jumbotron').style.backgroundColor='green';
    document.getElementById('jumbotron').style.color='white';
}
function redTheme() {
    document.getElementById('jumbotron').style.backgroundColor='red';
    document.getElementById('jumbotron').style.color='white';
}
function blueTheme() {
    document.getElementById('jumbotron').style.backgroundColor='blue';
    document.getElementById('jumbotron').style.color='white';
}
function orangeTheme() {
    document.getElementById('jumbotron').style.backgroundColor='orange';
    document.getElementById('jumbotron').style.color='black';
}
function yellowTheme() {
    document.getElementById('jumbotron').style.backgroundColor='yellow';
    document.getElementById('jumbotron').style.color='black';
}

const buttons = document.querySelectorAll(".button");
console.log(buttons);
for (let button of buttons) {
    button.addEventListener("click", function(event) {
    
        const target = event.target;
        
        if (target.classList.contains('green')) {
            greenTheme();
            return;
        }

        if (target.classList.contains('red')) {
            redTheme();
            return;
        }

        if (target.classList.contains('blue')) {
            blueTheme();
            return;
        }

        if (target.classList.contains('orange')) {
            orangeTheme();
            return;
        }

        if (target.classList.contains('yellow')) {
            yellowTheme();
            return;
        }
    }
    )
 }