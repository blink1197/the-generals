
function Button({ name, text, onClick }) {
    return (
        <button
            name={name}
            className="w-20 p-1 text-white rounded-md bg-neutral-700"
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button