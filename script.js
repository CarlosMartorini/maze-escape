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

//construir o labirinto

const buildMaze = () => {
    for (let i = 0; i < maze.length; i++) {
        
        line = maze[i];
        let addLine = document.createElement('div');
        getMapMaze.appendChild(addLine);
        addLine.classList.add('line');
        console.log(line)
        
        for (let j = 0; j < line.length; j++) {
        
            column = line[j];
            console.log(column);
            
            if (line[j] === 'W') {
                let addBlock = document.createElement('div');
                addLine.appendChild(addBlock); 
                addBlock.classList.add('wall');
            } else if (line[j] === ' ') {
                let addBlock = document.createElement('div');
                addLine.appendChild(addBlock); 
                addBlock.classList.add('floor');
            } else if (line[j] === 'E') {
                let addBlock = document.createElement('div');
                addLine.appendChild(addBlock); 
                addBlock.id = 'end';
                addBlock.classList.add('end');
            } else if (line[j] === 'S') {
                let addBlock = document.createElement('div');
                addLine.appendChild(addBlock);
                addBlock.id = 'start'; 
                addBlock.classList.add('start');
            }
        }
    }
}

buildMaze();

//construir o player

const buildPlayer = () => {
    let getStart = document.getElementById('start');
    let addPlayer = document.createElement('div');
    getStart.appendChild(addPlayer);
    addPlayer.classList.add('player');
}

buildPlayer();

//construir condição de vitória

//construir condição de movimentação

//construir movimentação