var div = document.createElement("div");

div.innerHTML = 
    '<div class="container">\n' +
        '<h1>Enter Your Name</h1>\n' +
        '<div class="game">\n' +
            '<label>Enter player name 1:</label> <br>\n' +
            '<input type="text" id="name1" placeholder="Name Player 1"> <br> <br>\n' +
            '<label>Enter player name 2:</label> <br>\n' +
            '<input type="text" id="name2" placeholder="Name Player 2"> <br><br>\n' +
        '</div>\n' +
        '<h1>Enter The Number Of Columns</h1>\n' +
        '<div class="game">\n' +
            '<input type="text" id="num" placeholder="Number of Columns"> <br> <br>\n' +
            '<button onclick="playGame()" style="margin-top: 10px;">Play Game</button>\n' +
        '</div>\n' +
    '</div>\n';

document.body.appendChild(div);

function playGame() {
    var num = document.getElementById("num").value;

    if(num < 3) {
        alert("You must enter the number greater than 3!");
    }
    else 

        {
            let htmlGame = '';

        let htmlColumn ='';

        let htmlRow = '';

        for(var i=0; i<num; i++) {
            htmlRow += 
            '<button class="btn" id="btn1" value="btn1" onclick="play(this)"></button>\n';
        }

        for(var i=0; i<num; i++) {
            htmlColumn += 
            '<div class="row">\n' + htmlRow + '</div>\n';
        }

        htmlGame = 
            '<div class="container">\n' +
                '<h1>Tic Tac Toe</h1>\n' +
                '<div class="game">\n' + htmlColumn +
                '</div>\n' +
                '<button onclick="resetButton()" style="margin-top: 10px;">Reset</button>\n' +
            '</div>\n';

        div.innerHTML = htmlGame;

        document.body.appendChild(div);
    }
    
}

