let turn = true;
var clickCount = 0;
var name1="A", name2="B";

function reset() {
    let btns = document.getElementsByClassName('btn');

    for(const btn of btns) {
        btn.innerText = '';
        btn.classList.remove('xbtn');
        btn.classList.remove('obtn');
        btn.removeAttribute('disabled');
        document.getElementById(btn.id).value = btn.id;
        
        turn = true;
        clickCount = 0;
    }
}

function resetButton() {
    var res = confirm("Do you want to reset the game?");
    if(res == true) reset();
}

function play(btn) {
    btn.innerText = turn ? "X" : "O";
    btn.classList.add(turn ? "xbtn" : "obtn");
    document.getElementById(btn.id).value = turn ? "X" : "O";
    btn.setAttribute("disabled", "disabled");

    turn = !turn;
    clickCount++;

    var btn1 = document.getElementById("btn1").value;
    var btn2 = document.getElementById("btn2").value;
    var btn3 = document.getElementById("btn3").value;
    var btn4 = document.getElementById("btn4").value;
    var btn5 = document.getElementById("btn5").value;
    var btn6 = document.getElementById("btn6").value;
    var btn7 = document.getElementById("btn7").value;
    var btn8 = document.getElementById("btn8").value;
    var btn9 = document.getElementById("btn9").value;

    if((btn1 === btn5 && btn5 === btn9) || (btn3 === btn5 && btn5 === btn7)) {
        alert(btn5 + " win!");
        reset();
        return;
    }

    var items = [
        [btn1, btn2, btn3],
        [btn4, btn5, btn6],
        [btn7, btn8, btn9],
    ]

    for (var i=0; i<3; i++) {
        if(items[i][0] === items[i][1] && items[i][1] === items [i][2]) {
            alert(items[i][0] + " win!");
            reset();
            return;
        }
        if(items[0][i] === items[1][i] && items[1][i] === items [2][i]) {
            alert(items[0][i] + " win!");
            reset();
            return;
        }
    }

    if (clickCount == 9) {
        alert("End Game!");
        reset();
    }
}

function getName() {
    name1 = document.getElementById("name1").value;
    name2 = document.getElementById("name2").value;
    location.href = 'game.html';
    alert("Play game!");
}