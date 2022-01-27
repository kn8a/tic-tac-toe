const log = console.log;

const Gameboard = (()=>{
    // same thing, just easier to type :D
    const board = new Array(9).fill('');
    let player = "x";
    
    
    
    const cells = document.querySelectorAll(".square");
    log(cells);
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            let choice = cell.getAttribute('data-cell');
            log(choice);
            if (board[choice] == "x" || board[choice] == "o") {return} //check if cell already marked
            //continue here checking for who's turn and placing mark
            if (player == 'x') {
                const xMark = document.createElement('img');
                xMark.src = './svg/x.svg';
                document.getElementById(`s${choice}`).appendChild(xMark);
                board[choice] = 'x';
                player = 'o';
            }
            else {
                const yMark = document.createElement('img');
                yMark.src = './svg/o.svg';
                document.getElementById(`s${choice}`).appendChild(yMark);
                board[choice] = 'o';
                player = 'x';
            }
            let winner = checkForWinner(board, player) //winner function call

            log(board);

        })
    }) 
    


    //const checkCell = 
    function checkForWinner(a, player) {
        if (a[0] == a[1] && a[0] == a[2] ||
            a[2] == a[3] && a[2] == a[4] ||
            a[6] == a[7] && a[6] == a[8] ||
            a[0] == a[3] && a[0] == a[6] ||
            a[1] == a[4] && a[1] == a[7] ||
            a[2] == a[5] && a[2] == a[8] ||
            a[2] == a[4] && a[2] == a[6] ||
            a[0] == a[4] && a[0] == a[8]) {
                announceWinner(player);        
        }
    }

    //function checkCell(cell, array)
    
    const setCell = (index, value) => {
      // a function that updates the contents of a given array index
    }
    const resetBoard = () => {
      // a function that resets the board to empty
    }
    const getBoard = () => {
      // a function that returns **a copy** of the board.
    }
    return {
      setCell,
      getBoard,
      resetBoard
    }
  })();

  //on click check whos turn it is, 
  
  //check if mark already exists in cell (X or O). 

  //place mark, update array

  //check if (1=2=3 or 3=4=5 or 7=8=9) or (1=4=7 or 2=5=8 or 3=6=9) or (3=5=7 or 1=5=9)
            //0=1=2    2=3=4    6=7=8      0=3=6    1=4=7    2=5=8      2=4=6    0=4=8
  
  //if above yes, winner is current player
  //if above no, change player