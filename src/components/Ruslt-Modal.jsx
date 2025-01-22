export default function ResultModal({result , targetTime}){
    return(
        <dialog className="result-modal" open>
            <h2> Yoy {result}</h2>
            <p>
                The Target Time was <strong>{targetTime} Seconds.</strong>
            </p>
            <p>
                You Stopped The Timer With ,<strong> X Seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
}