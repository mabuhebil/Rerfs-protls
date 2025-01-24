import { forwardRef, useImperativeHandle , useRef } from "react";

const RusltModal = forwardRef(function ResultModal({ timeRemaining, targetTime  , onReset}, ref) {
   const dialog = useRef();

   const userLost = timeRemaining <= 0;
   const formattimeRemaining = (timeRemaining/1000).toFixed(2);
   const score = Math.round((1 - timeRemaining / (targetTime*1000)) *100)

   useImperativeHandle(ref , () => {
    return{
        open () {
            dialog.current.showModal();
        }
    }

   })
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You Lost</h2>}
            {!userLost && <h2>Your Score : {score}</h2>}
            <p>
                The Target Time was <strong>{targetTime} Seconds.</strong>
            </p>
            <p>
                You Stopped The Timer With <strong>{formattimeRemaining } Seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default RusltModal;
