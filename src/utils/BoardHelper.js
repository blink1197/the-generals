class BoardHelper {
    constructor(playerColor) {
        this.playerColor = playerColor
    }

    getPieceColor = (piece) => {
        let pieceColor = '';
        if (piece) {
            if (piece.length > 1) {
                pieceColor = piece.split('-')[1] === 'W' ? 'white' : 'black'
            } else if (piece.length === 1) {
                pieceColor = piece === 'W' ? 'white' : 'black'
            }
        }
        return pieceColor;
    }

    getMoveType = (pieceId) => {
        if (!pieceId) {
            return 'normal'
        } else {
            if (this.playerColor !== this.getPieceColor(pieceId)) {
                return 'capture'
            } else {
                return undefined
            }
        }
    }

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