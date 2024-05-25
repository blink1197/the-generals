class BoardHelper {
    constructor(playerColor) {
        this.playerColor = playerColor;
        this.COLUMNS = 'ABCDEFGHI';
        this.NUM_COLS = this.COLUMNS.length;
        this.ROWS = '87654321';
        this.NUM_ROWS = this.ROWS.length;
    }

    generateCellId = (row, col) => {
        const columnLetters = this.playerColor === 'white' ? this.COLUMNS : this.COLUMNS.split('').reverse().join('');
        const rowNumbers = this.playerColor === 'white' ? this.ROWS : this.ROWS.split('').reverse().join('');
        return `${columnLetters[col]}${rowNumbers[row]}`;
    };

    generateCellsArray = () => {
        const cells = Array.from({ length: this.NUM_ROWS * this.NUM_COLS }, (_, index) => {
            const row = Math.floor(index / this.NUM_COLS);
            const col = index % this.NUM_COLS;
            return this.generateCellId(row, col);
        });
        return cells;
    };

    getAdjacentCells = (cell) => {
        const columns = this.COLUMNS.split('');
        const rows = this.ROWS.split('');
        const column = cell.charAt(0);
        const row = cell.charAt(1);
        const columnIndex = columns.indexOf(column);
        const rowIndex = rows.indexOf(row);
        const directions = [
            { dc: -1, dr: 0 },  // left
            { dc: 1, dr: 0 },   // right
            { dc: 0, dr: -1 },  // above
            { dc: 0, dr: 1 }    // below
        ];

        return directions
            .map(({ dc, dr }) => {
                const newColumnIndex = columnIndex + dc;
                const newRowIndex = rowIndex + dr;
                if (newColumnIndex >= 0 && newColumnIndex < this.NUM_COLS && newRowIndex >= 0 && newRowIndex < this.NUM_ROWS) {
                    return columns[newColumnIndex] + rows[newRowIndex];
                }
                return null;
            })
            .filter(Boolean);
    };

    getPieceColor = (piece) => {
        let pieceColor = '';
        if (piece) {
            if (piece.length > 1) {
                pieceColor = piece.split('-')[1] === 'W' ? 'white' : 'black';
            } else if (piece.length === 1) {
                pieceColor = piece === 'W' ? 'white' : 'black';
            }
        }
        return pieceColor;
    };

    getMoveType = (pieceId) => {
        if (!pieceId) {
            return 'normal';
        } else {
            if (this.playerColor !== this.getPieceColor(pieceId)) {
                return 'capture';
            } else {
                return undefined;
            }
        }
    };

    isValidArrangeCell = (cell) => {
        const row = cell.charAt(1);
        if (this.playerColor === 'white') {
            return ['1', '2', '3'].includes(row);
        } else {
            return ['6', '7', '8'].includes(row);
        }
    };

    getOpponentColor() {
        if (this.playerColor === 'white') {
            return 'black';
        } else {
            return 'white';
        }
    }

    getOpponentPieceCode() {
        if (this.playerColor === 'white') {
            return 'B';
        } else {
            return 'W';
        }
    }
}

export default BoardHelper;
