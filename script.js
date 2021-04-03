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
    "WWWWWWWWWWWWWWWWWWWWW",
];


const getMapMaze = document.getElementById('maze');

let line;
let column;
let startPositionLine = 9;
let startPositionColumn = 0;

//construir o labirinto

const buildMaze = () => {
    for (let i = 0; i < maze.length; i++) {
        line = maze[i];
        console.log(line)
        for (let j = 0; j < line.length; j++) {
            column = line[j];
            console.log(column);
            if (line[j] === 'W') {
                let addBlock = document.createElement('div');
                getMapMaze.appendChild(addBlock); 
                addBlock.classList.add('wall');
            } else if (line[j] === ' ') {
                let addBlock = document.createElement('div');
                getMapMaze.appendChild(addBlock); 
                addBlock.classList.add('floor');
            } else if (line[j] === 'E') {
                let addBlock = document.createElement('div');
                getMapMaze.appendChild(addBlock); 
                addBlock.classList.add('end');
            } else if (line[j] === 'S') {
                let addBlock = document.createElement('div');
                getMapMaze.appendChild(addBlock); 
                addBlock.classList.add('start');
            }
        }
    }
}

buildMaze();

//construir o player

//construir condição de vitória

//construir condição de movimentação

//construir movimentação