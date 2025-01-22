import { forwardRef, useImperativeHandle , useRef } from "react";

const RusltModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
   const dialog = useRef();

   useImperativeHandle(ref , () => {
    return{
        open () {
            dialog.current.showModal();
        }
    }

   })
    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>
            <p>
                The Target Time was <strong>{targetTime} Seconds.</strong>
            </p>
            <p>
                You Stopped The Timer With <strong>X Seconds left.</strong>
            </p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default RusltModal;
