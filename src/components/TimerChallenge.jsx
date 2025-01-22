import { useState , useRef } from "react"
import ResultModal from "./Ruslt-Modal"

export default function TimerChallenge({titile , targetTime}){

    const Timer = useRef()

    const [timerStarted , setTimerStarted]=useState(false)
    const [timerExpired , settimerExpired]=useState(false)

    function handelStart(){
    Timer.current = setTimeout( () => {
            settimerExpired(true)
        },targetTime * 1000)
        setTimerStarted(true)
    }

    function handelStop(){
        clearTimeout(Timer.current)
    }

    return(
        <>
        {timerExpired && <ResultModal targetTime={targetTime} result='You Lost' />}
        <section className="challenge">
            {timerExpired && <p>You lost!</p>}
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