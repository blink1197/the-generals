import { PlayIcon } from "./const"

function MatchOption({ name, description, handleChangeMatchType }) {
    return (
        <button
            name={name}
            className="items-center h-40 mx-auto bg-gray-100 border border-gray-200 rounded-lg w-80 hover:bg-neutral-700 hover:text-white group/option text-neutral-700"
            onClick={handleChangeMatchType}
        >
            <PlayIcon />
            <h1 className="text-xl font-bold">{name.toUpperCase()}</h1>
            <h2 className="text-sm">{description}</h2>
        </button>
    )
}

export default MatchOption