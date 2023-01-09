const container = document.querySelector('#container');

//Creates Cell Grid
function makeCells(col, rows, e) {
        //Creates Cells
        for (i = 0; i < (col * rows); i++) {
            let cell = document.createElement('div');
            container.appendChild(cell);
            //Styles Cells
            cell.setAttribute('style', 'border-style: solid; border-color: #507b9c; border-width: 1px; width: 25px; height: 25px;');
            //Sets Hover Event
            cell.addEventListener('mouseover', () => hoverColour(e));
            function hoverColour(e) {
                cell.style.backgroundColor = e;
            }
        }
}

makeCells(16, 16, '#0000ff');
