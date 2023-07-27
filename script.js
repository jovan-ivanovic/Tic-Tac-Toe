let currentPlayer = "x";
let board = document.getElementsByClassName("cell");
let endMessage = document.getElementById("end");

function placeSymbol(cell) {
    if (cell.textContent !== "") {
        return; // Ako je polje već označeno, ne radimo ništa
    }

    // Postavljanje trenutnog simbola (X ili O) u polje igre
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);

    // Provera da li je igra završena i prikazivanje poruke ako jeste
    if (checkGameOver()) {
        endMessage.style.display = "block";
    }

    // Promena igrača na potezu
    currentPlayer = currentPlayer === "x" ? "o" : "x";
}

function checkGameOver() {
    // Provera pobednika
    const winningCombination = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontalne kombinacije
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertikalne kombinacije
        [0, 4, 8], [2, 4, 6] // Dijagonalne kombinacije
    ];

    for (const combination of winningCombination) {
        const [a, b, c] = combination;
        if (board[a].textContent === board[b].textContent &&
            board[a].textContent === board[c].textContent &&
            board[a].textContent !== "") {
            return true; // Pobednik je pronađen
        }
    }

    // Provera da li je nerešeno
    for (const cell of board) {
        if (cell.textContent === "") {
            return false; // Igra nije završena, ima još praznih polja
        }
    }

    return true; // Igra je nerešena
}

function resetBoard() {
    // Resetovanje table za novu igru
    for (const cell of board) {
        cell.textContent = "";
        cell.classList.remove("x", "o");
    }

    endMessage.style.display = "none";
    currentPlayer = "x";
}
