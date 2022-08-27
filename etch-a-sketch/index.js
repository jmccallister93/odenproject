let btnContainer = document.createElement('div');
btnContainer.className = 'btn-container'
document.body.appendChild(btnContainer);

let clearBtn = document.createElement('button');
clearBtn.className = 'clear-btn';
clearBtn.textContent = "Reset Grid";
btnContainer.appendChild(clearBtn);

let gridContainer = document.createElement('div');
gridContainer.className = 'grid-container'
document.body.appendChild(gridContainer);


let row = 256
function createGrid(row){
    for( let i=0; i < row; i++){
        let gridSquare = document.createElement('div');
        gridSquare.className = 'grid-square' 
        gridContainer.append(gridSquare);
        calc = Math.sqrt(row)
        gridContainer.style = `grid-template-columns: repeat(${calc},1fr)`;
        gridSquare.addEventListener("mouseover", (e) => {
            gridSquare.style.backgroundColor = 'black';
        });
    }
}

createGrid(row);

clearBtn.addEventListener('click', (e) => {
    // newRow = prompt("Enter new grid dimensions.");
    // newRow = parseInt(newRow);
    // row = newRow * newRow;
    // createGrid(row);
});

