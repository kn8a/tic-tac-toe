const Gameboard = (()=>{
    const board = new Array(9).fill('');
    let player = "x";    
    const cells = document.querySelectorAll(".square");
    let gameOver = false;
    //displayTurn(player); // <--write function for this ***TODO***
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            let choice = cell.getAttribute('data-cell');
            if (board[choice] == "x" || board[choice] == "o" || gameOver == true) {return} //check if cell already marked
            if (player == 'x') {
                placeMarker(cell, player, choice)
                player = 'o';
            }
            else if (player == 'o') {
                placeMarker(cell, player, choice)
                player = 'x';
            }
        })
    }) 
    
    function checkForWinner(a, player) {
        let p = player;
        if (a[0] == p && a[1] == p && a[2] == p|| a[3] == p && a[4] == p && a[5] == p||
            a[6] == p && a[7] == p && a[8] == p|| a[0] == p && a[3] == p && a[6] == p||
            a[1] == p && a[4] == p && a[7] == p|| a[2] == p && a[5] == p && a[8] == p||
            a[0] == p && a[4] == p && a[8] == p|| a[2] == p && a[4] == p && a[6] == p) 
            {
            announceWinner(player);
        }
        else if (board.find(empty => empty =='') == undefined) { //when array filled with values
            announceWinner("tie");
        }
    }

    function placeMarker(cell,player, choice) {
        const marker = document.createElement('img');
        marker.src = `./svg/${player}.svg`;
        document.getElementById(`s${choice}`).appendChild(marker);
        cell.classList.add('marked');
        board[choice] = player;
        checkForWinner(board, player);
    }

    function announceWinner (player) {
        gameOver = true;
        document.getElementById('gameBoard').style.filter = "blur(6px)";
        switch (player) {
          case "x":
            document.getElementById('xWon').style.display = "flex";
            break;
          case "o":
            document.getElementById('oWon').style.display = "flex"
            break;
          case "tie":
            document.getElementById('tie').style.display = "inline"
            break;
        }
    }
  })();