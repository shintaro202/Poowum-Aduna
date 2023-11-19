let gameStarted = false;
let resolution = 10;
let generation = 0;
let speed = 200;
let lastUpdateTime = 0;
let grid;
let cols;
let rows;

function setup() {
    cols = parseInt(document.getElementById("cols").value);
    rows = parseInt(document.getElementById("rows").value);

    createCanvas(cols * resolution, rows * resolution);
    grid = make2DArray(cols, rows);
    initializeGrid();
    let canvasContainer = document.getElementById("canvasContainer");
    canvasContainer.innerHTML = "";
    canvasContainer.appendChild(canvas);
    drawFirstGeneration();
}

function make2DArray(cols, rows) {
    return new Array(cols).fill(null).map(() => new Array(rows).fill(0));
}

function updateConfiguration() {
    cols = parseInt(document.getElementById("cols").value);
    rows = parseInt(document.getElementById("rows").value);
    
    speed = parseInt(document.getElementById("speedSelect").value);

    resizeCanvas(cols * resolution, rows * resolution);
    grid = make2DArray(cols, rows);
    initializeGrid();
    drawFirstGeneration();
}

document.getElementById("cols").addEventListener("change", updateConfiguration);
document.getElementById("rows").addEventListener("change", updateConfiguration);
document.getElementById("speedSelect").addEventListener("change", updateConfiguration); 
document.addEventListener("DOMContentLoaded", setup);

function initializeGrid() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }
}

function drawFirstGeneration() {
    background(255);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                let randomColor = color(random(255), random(255), random(255));
                fill(randomColor);
                stroke(0);
                rect(x, y, resolution - 1, resolution - 1);
            }
        }
    }
    for (let i = 0; i < cols + 1; i++) {
        let x = i * resolution;
        line(x, 0, x, height);
    }
    for (let j = 0; j < rows + 1; j++) {
        let y = j * resolution;
        line(0, y, width, y);
    }
}

function drawNextGenerations() {
    let next = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];
            let sum = countNeighbors(grid, i, j);

            if (state == 0 && sum == 3) {
                next[i][j] = 1;
            } else if (state == 1 && (sum < 2 || sum > 3)) {
                next[i][j] = 0;
            } else {
                next[i][j] = state;
            }
        }
    }

    grid = next;
    generation++;
    document.getElementById("generationCounter").textContent = "maas : " + generation;
}

function draw() {
    if (!gameStarted) {
        return;
    }
    if (millis() - lastUpdateTime > speed) {
        drawFirstGeneration();
        drawNextGenerations();
        lastUpdateTime = millis();
    }
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}

function mouseClicked(event) {
    event.preventDefault(); // Ajoutez cette ligne
    if (!gameStarted) {
        let i = floor(mouseX / resolution);
        let j = floor(mouseY / resolution);
        if (i >= 0 && i < cols && j >= 0 && j < rows) {
            grid[i][j] = 1 - grid[i][j];
            drawFirstGeneration();
        }
    }
}

function tanduus() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

document.getElementById("tambali").addEventListener("click", function (event) {
    event.preventDefault();
    if (!gameStarted) {
        gameStarted = true;
        generation = 0;
    }
});

document.getElementById("jeexal").addEventListener("click", function (event) {
    event.preventDefault();
    if (gameStarted) {
        gameStarted = false;
    }
});

document.getElementById("agaleii").addEventListener("click", function (event) {
    event.preventDefault();
    if (!gameStarted) {
        gameStarted = true;
    }
});

document.getElementById("tambaliwat").addEventListener("click", function (event) {
    event.preventDefault();
    gameStarted = false;
    generation = 0;
    document.getElementById("generationCounter").textContent = "maas : " + generation;

    initializeGrid();
    drawFirstGeneration();
});

document.getElementById("tanduus").addEventListener("click", function (event) {
    event.preventDefault();
    if (!gameStarted) {
        tanduus();
        drawFirstGeneration();
    }
});

