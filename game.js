const log = console.log;

const Gameboard = (()=>{
    // same thing, just easier to type :D
    const board = new Array(9).fill('');
    let player = "x";
    const xMark = '<svg height="66" width="66"><line x1="0" y1="0" x2="66" y2="66" style="stroke:#000; stroke-width:7" /><line x1="66" y1="0" x2="0" y2="66" style="stroke:#000; stroke-width:7" /></svg>';
    const yMark = '<svg height="70" width="70"><circle cx="35" cy="35" r="30" stroke="red" stroke-width="10" fill="transparent"/></svg>'

    const cells = document.querySelectorAll(".square");
    log(cells);
    cells.forEach((cell) => {
        cell.addEventListener('click', () => {
            const choice = cell.getAttribute('data-cell');
            log(choice);
            if (board[choice] = "x" || board[choice] = "o") {return} //check if cell already marked
            

        })
    }) 
    
    //const checkCell = 

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