import { useState , useRef } from "react"
import RusltModal from "./Ruslt-Modal"

export default function TimerChallenge({titile , targetTime}){

    const Timer = useRef()
    const dialog = useRef()

    const [timerStarted , setTimerStarted]=useState(false)
    const [timerExpired , seTimerExpired]=useState(false)

 
    function handelStart() {
        Timer.current = setTimeout(() => {
            seTimerExpired(true);
            dialog.current.open();
        }, targetTime * 1000);
        setTimerStarted(true)
    }

    

    function handelStop(){
        clearTimeout(Timer.current)
    }

    return(
        <>
         {<RusltModal ref={dialog} targetTime={targetTime} result='You Lost' />}
        <section className="challenge">
            <h2>{titile}</h2>
            <p className="challenge-time">
                {targetTime} Second{targetTime > 1 ? 's' :''}
            </p>
            <p>
                <button onClick={timerStarted ? handelStop : handelStart}>
                   {timerStarted? 'Stop' : 'Start'} Challenge
                </button>
            </p>
           
            <p className={timerStarted?'active' : undefined}>
                {timerStarted ? 'Time Is Running...' : 'Timer in Active'}
            </p>
        </section>
        </>
    )

}