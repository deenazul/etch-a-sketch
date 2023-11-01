const containerDiv = document.querySelector('.container');
const blackBtn = document.querySelector('#black');
const colorBtn = document.querySelector('#color');
const clearBtn = document.querySelector('#clear');

let createGrid = () => {
    for (let i=0; i < 256; i++){
        const grid = document.createElement('div');
        grid.addEventListener("mouseover", function() {
            grid.style.backgroundColor = "black"
        });
        containerDiv.appendChild(grid);
        console.log(containerDiv)
    }
}

let resetContainer = () => {
    let container = document.querySelector('.container')
    let divs = container.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}

// let colorGrid = () => {
//     if (color == "pink"){

//         // document.body.querySelectorAll('.container').querySelector('div').style.backgroundColor= 'pink'
//     }
//     else {
//         // document.grid.style.backgroundColor = 'black'
//         document.body.querySelectorAll('.container').querySelectorAll('div').style.backgroundColor = 'black'

//     }
// }

// let setColor = (colorChoice) => {
//     color = colorChoice;
// }

createGrid();
resetContainer();
