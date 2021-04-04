const maze = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W E",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW", //20
    //14
];

const getMaze = document.getElementById('maze');

let position;
let playerPosition;
let playerLine = 9;
let playerColumn = 0;

const buildMaze = () => {
    for (let i = 0; i < maze.length; i++) {

        let addLine = document.createElement('div');
        getMaze.appendChild(addLine);
        addLine.id = `line${i}`;
        addLine.classList.add('line');
        position = i;

        for (let j = 0; j < maze[i].length; j++) {

            let getLine = document.getElementById(`line${i}`);
            position = `line ${i}, column ${j}`;

            if (maze[i][j] === 'W') {

                let addWall = document.createElement('div');
                getLine.appendChild(addWall);
                addWall.id = `line${i}-column${j}`;
                addWall.classList.add('wall');

            } else if (maze[i][j] === ' ') {

                let addFloor = document.createElement('div');
                getLine.appendChild(addFloor);
                addFloor.id = `line${i}-column${j}`;
                addFloor.classList.add('floor');

            } else if (maze[i][j] === 'E') {

                let addEnd = document.createElement('div');
                getLine.appendChild(addEnd);
                addEnd.id = `line${i}-column${j}`;
                addEnd.classList.add('end');

            } else if (maze[i][j] === 'S') {

                let addStart = document.createElement('div');
                getLine.appendChild(addStart);
                addStart.id = `line${i}-column${j}`;
                addStart.classList.add('start');

            }

            console.log(position);
        }
    }
}

buildMaze();

const buildPlayer = () => {

    let getStart = document.getElementById('line9-column0');
    let addPlayer = document.createElement('div');
    getStart.appendChild(addPlayer);
    addPlayer.id = 'player';
    addPlayer.classList.add('player');

}

buildPlayer();

const moveCondition = (key) => {
    let move = false;

    if (key === 'ArrowUp') {
        if (maze[playerLine - 1][playerColumn] !== 'W' && maze[playerLine - 1][playerColumn] !== undefined) {
            move = true;
        }
    } else if (key === 'ArrowDown') {
        if (maze[playerLine + 1][playerColumn] !== 'W' && maze[playerLine + 1][playerColumn] !== undefined) {
            move = true;
        }
    } else if (key === 'ArrowLeft') {
        if (maze[playerLine][playerColumn - 1] !== 'W' && maze[playerLine - 1][playerColumn - 1] !== undefined) {
            move = true;
        }
    } else if (key === 'ArrowRight') {
        if (maze[playerLine][playerColumn + 1] !== 'W' && maze[playerLine][playerColumn + 1] !== undefined) {
            move = true;
        }
    }

    return move;
}

const winCondition = () => {
    if (playerLine === 8 && playerColumn === 20) {
        console.log('WIN!!!');
        let getContainer = document.getElementById('container');
        let addWinScreen = document.createElement('div');
        addWinScreen.innerText = 'Congratulations!!!\n You Escape';
        getContainer.appendChild(addWinScreen);
        addWinScreen.classList.add('win');
    }
}


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    console.log('keydown event\n\n' + 'key: ' + keyName);
    if (moveCondition(keyName) === true) {
        movePlayer(keyName);
        console.log(playerLine, playerColumn);
        document.getElementById('player').style.transform = `translate(${column}px, ${row}px)`;
        winCondition();
    }
  });

  let row = 0;
  let column = 0;
  
const movePlayer = (key) => {

    if (key === 'ArrowUp') {
        playerLine -= 1;
        return row -= 20;
    } else if (key === 'ArrowDown') {
        playerLine += 1;
        return row += 20;
    } else if (key === 'ArrowLeft') {
        playerColumn -= 1;
        return column -= 20;
    } else if (key === 'ArrowRight') {
        playerColumn += 1;
        return column += 20;
    }
}
  