const container = document.querySelector('#container');

//Creates Cell Grid
function makeCells(col, rows) {
        for (i = 0; i < (col * rows); i++) {
            let cell = document.createElement('div');
            container.appendChild(cell);
            cell.setAttribute('style', 'border-style: solid; border-color: black; border-width: 1px; width: 25px; height: 25px;');
            cell.addEventListener('mouseover', () => hoverColour());
            function hoverColour() {
                cell.style.backgroundColor = 'blue';
            }
        }
}

makeCells(16, 16);
