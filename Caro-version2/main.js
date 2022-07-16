let turn = true;
var clickCount = 0;

function reset() {
    let btns = document.getElementsByClassName('btn');

    for(const btn of btns) {
        btn.innerText = '';
        btn.classList.remove('xbtn');
        btn.classList.remove('obtn');
        btn.removeAttribute('disabled');
        
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

    let btns = document.getElementsByClassName('btn');

    let points = [];
    var k=0;
    for(var i=0; i<Math.sqrt(btns.length); i++) {
        points[i] = new Array();
        for(var j=0; j<Math.sqrt(btns.length); j++) {
            points[i].push(btns[k].innerText);
            k++;
        }
    }
    
    let win = false;
    for(var i=0; i<Math.sqrt(btns.length); i++) {
        for(var j=0; j<Math.sqrt(btns.length)-2; j++) {
            if(points[i][j] == points[i][j+1] && points[i][j] == points[i][j+2] && points[i][j] != "") {
                win = true;
            }
        }
    }
    for(var i=0; i<Math.sqrt(btns.length)-2; i++) {
        for(var j=0; j<Math.sqrt(btns.length); j++) {
            if(points[i][j] == points[i+1][j] && points[i][j] == points[i+2][j] && points[i][j] != "") {
                win = true;
            }
        }
    }
    for(var i=0; i<Math.sqrt(btns.length)-2; i++) {
        var j = Math.sqrt(btns.length)-1;
        if((points[i][i] == points[i+1][i+1] && points[i][i] == points[i+2][i+2] && points[i][i] != "")
        || (points[i][j-i] == points[i+1][j-i-1] && points[i][j-i] == points[i+2][j-i-2] && points[i][j-i] != "")) {
            win = true;
        }
    }
    if (win == true) {
        {
            alert("End Game!");
            reset();
        }
    }
    

    if (clickCount == btns.length) {
        alert("End Game!");
        reset();
    }
}