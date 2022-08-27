let gridContainer = document.createElement('div');
gridContainer.className = 'grid-container'
gridContainer.setAttribute( 'style',
    "display: grid; font-size: 24px; grid-template-columns: repeat(16,1fr); width: 100%;"
)

document.body.appendChild(gridContainer);

row = 256
for( let i=0; i < row; i++){
    let gridSquare = document.createElement('div');
    gridSquare.className = 'gird-square' 
    gridSquare.textContent = "X"
    gridSquare.setAttribute('style', 'border: 1px black solid')
    gridContainer.append(gridSquare);
}

