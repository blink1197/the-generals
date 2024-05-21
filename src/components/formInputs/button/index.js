
function Button({ name, text, onClick }) {
    return (
        <button
            name={name}
            className="w-20 p-1 text-white transition-transform duration-300 rounded-md bg-neutral-700 hover:scale-110"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button