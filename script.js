const containerDiv = document.querySelector('.container');
const blackBtn = document.querySelector('#black');
const colorBtn = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');
let color = 'black';

// create 16x16 grid and use css for grid template
let createGrid = (size) => {
    size = prompt("Enter binary number from 16-32");
    containerDiv.style.gridTemplateColumns = `repeat(${size},1fr)`
    containerDiv.style.gridTemplateRows = `repeat(${size},1fr)`

    for (let i=0; i < size*size; i++){
        const grid = document.createElement('div');
        grid.addEventListener("mouseover", colorGrid(color))
        containerDiv.appendChild(grid);
    }
}
// select all grid and turn to white on click
let resetContainer = () => {
    let container = document.querySelector('.container')
    let divs = container.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

let colorGrid = (color) => {
    let divs = document.querySelectorAll('.container > div')
    // go thru each div
    divs.forEach((item) => {
        if (color == 'color'){
            // when 1 item has event, the target event will change backgroundcolor
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'blue';
            })
        }
        else {
            item.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = 'black';
            })
        }
    })
}

createGrid();
resetContainer();
colorGrid(color);
