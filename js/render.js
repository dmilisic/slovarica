export function render(letters) {
    // create a table, with 4 rows and 4 columns
    var table = document.createElement('table');
    for (var i = 0; i < 4; i++) {
        var row = document.createElement('tr');
        for (var j = 0; j < 4; j++) {
            var cell = document.createElement('td');
            cell.textContent = letters[i * 4 + j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    return table;
}