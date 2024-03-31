/* Javascript app */

/* default dimensions/colour initially */
document.querySelector("#in-vert-pix").value = '1';
document.querySelector("#in-hori-pix").value = '1';
document.querySelector("#colour").value = "#000000";

/* grid function */
function makeGrid() {
    // set rows & columns
    const rows = document.querySelector("#in-vert-pix").valueAsNumber;
    const columns = document.querySelector("#in-hori-pix").valueAsNumber;

    // capture & empty table (essential to re-build grid)
    const table = document.querySelector("#canvas");
    table.innerHTML = '';

    // insert pixels to table
    for (let r = 1; r <= rows; r++) {
        const newVertElem = document.createElement("tr");
        table.appendChild(newVertElem);
        for (let c = 1; c <= columns; c++) {
            const newHoriElem = document.createElement("td");
            newVertElem.appendChild(newHoriElem)
        };
    };

    // colour grid via event listener (i.e., mouse clicks)
    table.addEventListener("click", function(event) {
        if (event.target.nodeName === "TD") {
            event.target.style.backgroundColor =
            document.querySelector("#colour").value
        };
    });
}

/* make a grid on form submission */
const submit = document.querySelector("#button");
button.addEventListener("click", function(event) {
    event.preventDefault();
    makeGrid()
});