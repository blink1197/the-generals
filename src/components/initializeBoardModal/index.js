function InitializeBoardModal({ isInitialBoardSubmitted }) {
    return (
        <div className="absolute z-30 flex flex-col items-center w-2/3 h-32 p-2 mx-auto text-center transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 border border-gray-300 rounded-md top-1/4 left-1/2 justify-evenly dark:text-gray-900 dark:border dark:border-gray-900">
            {!isInitialBoardSubmitted ? (
                <>
                    <h1 className="text-lg font-semibold">
                        Arrange your board
                    </h1>
                    <h3 className="mx-auto text-[10px]">
                        Your board will be submitted automatically after the timer runs out.
                    </h3>
                    <em className="mx-auto text-[8px]">
                        *Note: Pieces are allowed to be placed on the <strong>first 3 rows</strong> from the bottom only.
                    </em>
                </>
            ) : (
                <>
                    <img className="w-8 h-8 bg-gray-100" src='./assets/loading_spinner.gif' alt="loading spinner" />
                    <h1 className="text-sm font-medium">
                        Waiting for the other player
                    </h1>
                </>

            )}
        </div>
    );
}

export default InitializeBoardModal;