const INITIAL_BOARD_STATE_WHITE = {
    "A1": "1SG-W",
    "B1": "2SG-W",
    "C1": "3SG-W",
    "D1": "4SG-W",
    "E1": "5SG-W",
    "F1": "FLG-W",
    "G1": "PVT-W",
    "H1": "PVT-W",
    "I1": "PVT-W",
    "A2": "PVT-W",
    "B2": "PVT-W",
    "C2": "PVT-W",
    "D2": "SPY-W",
    "E2": "SPY-W",
    "F2": "SGT-W",
    "G2": "1LT-W",
    "H2": "2LT-W",
    "I2": "CAP-W",
    "A3": "MAJ-W",
    "B3": "LCL-W",
    "C3": "COL-W",
    "D3": "",
    "E3": "",
    "F3": "",
    "G3": "",
    "H3": "",
    "I3": "",
    "A4": "",
    "B4": "",
    "C4": "",
    "D4": "",
    "E4": "",
    "F4": "",
    "G4": "",
    "H4": "",
    "I4": "",
}

const INITIAL_BOARD_STATE_BLACK = {
    "A8": "1SG-B",
    "B8": "2SG-B",
    "C8": "3SG-B",
    "D8": "4SG-B",
    "E8": "5SG-B",
    "F8": "FLG-B",
    "G8": "PVT-B",
    "H8": "PVT-B",
    "I8": "PVT-B",
    "A7": "PVT-B",
    "B7": "PVT-B",
    "C7": "PVT-B",
    "D7": "SPY-B",
    "E7": "SPY-B",
    "F7": "SGT-B",
    "G7": "1LT-B",
    "H7": "2LT-B",
    "I7": "CAP-B",
    "A6": "MAJ-B",
    "B6": "LCL-B",
    "C6": "COL-B",
    "D6": "",
    "E6": "",
    "F6": "",
    "G6": "",
    "H6": "",
    "I6": "",
    "A5": "",
    "B5": "",
    "C5": "",
    "D5": "",
    "E5": "",
    "F5": "",
    "G5": "",
    "H5": "",
    "I5": "",
}

function shufflePieces(boardState, rowsToShuffle) {
    const keys = Object.keys(boardState).filter(key => rowsToShuffle.includes(key[1]));
    const pieces = keys
        .filter(key => boardState[key]) // filter out empty keys
        .map(key => boardState[key]);

    // Fisher-Yates shuffle algorithm
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pieces[i], pieces[j]] = [pieces[j], pieces[i]];
    }

    const shuffledBoardState = { ...boardState };
    let pieceIndex = 0;
    keys.forEach(key => {
        if (shuffledBoardState[key]) {
            shuffledBoardState[key] = pieces[pieceIndex++];
        }
    });

    return shuffledBoardState;
}

const SHUFFLED_INITIAL_BOARD_STATE_WHITE = shufflePieces(INITIAL_BOARD_STATE_WHITE, ['1', '2', '3']);
const SHUFFLED_INITIAL_BOARD_STATE_BLACK = shufflePieces(INITIAL_BOARD_STATE_BLACK, ['6', '7', '8']);

export {
    SHUFFLED_INITIAL_BOARD_STATE_WHITE as INITIAL_BOARD_STATE_WHITE,
    SHUFFLED_INITIAL_BOARD_STATE_BLACK as INITIAL_BOARD_STATE_BLACK
};