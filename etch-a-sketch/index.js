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

row = 256
for( let i=0; i < row; i++){
    let gridSquare = document.createElement('div');
    gridSquare.className = 'grid-square' 
    gridContainer.append(gridSquare);
    gridSquare.addEventListener("mouseover", (e) => {
        gridSquare.style.backgroundColor = 'black';
    });
}

// let clearBtn = document.createElement('button');
// clearBtn.className = 'clear-btn';
// document.body.appendChild(clearBtn);