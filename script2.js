const container = document.querySelector('#container');


//Button Allows Size & Colour Change
document.querySelector('#btn').addEventListener('click', newGrid);

//Removes Old Grid
function resetContent() {
    document.getElementById('container').innerHTML = "";
}

//Asks User for Grid Size & Colour
function newGrid() {
    resetContent();
    let size = prompt('Please Choose a Grid Size');
    if (size > 100) {
        alert('Please choose a smaller size!')
    } else {
        let colour = prompt('Please Choose a Colour');
        colour.toString; 
        makeCells(size, colour);
    }
}

//Creates Cell Grid
function makeCells(size, e) {
    let cellNum = size * size;
    //Creates Cells
    for (let i = 0; i < cellNum; i++) {
        let cell = document.createElement('div');
        container.append(cell);
        //Styles Cells
        cell.setAttribute('style', 'border-style: solid; border-color: #507b9c; border-width: 1px; width: 100%; height: 100%;');
        //Sets Hover Event
        cell.addEventListener('mouseover', () => hoverColour(e));
        function hoverColour(e) {
            cell.style.backgroundColor = e;
        }
    }
    container.setAttribute(`style`, `grid-template-columns: repeat(${size},1fr)`);        
}
