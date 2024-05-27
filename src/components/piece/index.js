import {
    Private,
    SergeantWhite,
    SergeantBlack,
    FirstLieutenant,
    SecondLieutenant,
    Captain,
    Major,
    LtColonel,
    Colonel,
    OneStarGeneral,
    TwoStarGeneral,
    ThreeStarGeneral,
    FourStarGeneral,
    FiveStarGeneral,
    SpyWhite,
    SpyBlack,
    FlagBlack,
    FlagWhite
} from './components/pieces';

const Piece = ({ pieceId }) => {
    // Array of objects mapping piece substrings to corresponding components
    const pieces = [
        { id: 'PVT', component: Private },
        { id: 'SGT-W', component: SergeantWhite },
        { id: 'SGT-B', component: SergeantBlack },
        { id: '1LT', component: FirstLieutenant },
        { id: '2LT', component: SecondLieutenant },
        { id: 'CAP', component: Captain },
        { id: 'MAJ', component: Major },
        { id: 'LCL', component: LtColonel },
        { id: 'COL', component: Colonel },
        { id: '1SG', component: OneStarGeneral },
        { id: '2SG', component: TwoStarGeneral },
        { id: '3SG', component: ThreeStarGeneral },
        { id: '4SG', component: FourStarGeneral },
        { id: '5SG', component: FiveStarGeneral },
        { id: 'SPY-W', component: SpyWhite },
        { id: 'SPY-B', component: SpyBlack },
        { id: 'FLG-B', component: FlagBlack },
        { id: 'FLG-W', component: FlagWhite }
    ];

    // Find the matching component based on pieceId includes check
    const matchedPiece = pieces.find(piece => pieceId.includes(piece.id));
    const PieceComponent = matchedPiece ? matchedPiece.component : null;

    return (
        <div
            className={`flex items-center justify-center w-5/6 bg-white border border-gray-400 rounded-md shadow-md h-5/6 ${pieceId.includes('B') ? 'bg-zinc-700' : 'dark:border dark:border-gray-600'}`}
        >
            {PieceComponent ? <PieceComponent /> : null}
        </div>
    );
};

export default Piece;