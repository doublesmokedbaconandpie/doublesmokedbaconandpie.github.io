function addStatRow() {
    let table = document.getElementById("stattable");
    let rowCount = table.rows.length;
    let newRow = table.insertRow(rowCount);
    for (var i = 0; i<7; i++) {
        let cell = newRow.insertCell(i);
        cell.innerHTML = "asdf";
        cell.className = "stattable";
    }
}

const mybutton = document.getElementsByClassName('button')[0];
mybutton.addEventListener('click', addStatRow, false);

console.log(1+1);


fetch("https://google.com")
    .then( response=> {
        if (!response.ok) {
            throw new Error('HTTP error ${response.status}')
        };
        return response.text();})
