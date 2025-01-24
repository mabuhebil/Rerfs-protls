import { useState , useRef } from "react"
import RusltModal from "./Ruslt-Modal"

export default function TimerChallenge({titile , targetTime}){

    const Timer = useRef()
    const dialog = useRef()

   const [timeRemaining ,setTimeRemaining] = useState(targetTime*1000)
   const timerIsActive = timeRemaining >0 && timeRemaining < targetTime*1000
 
   if(timeRemaining <=0){
    clearInterval(Timer.current)
    dialog.current.open();
   }

    function handelStart() {
        Timer.current = setInterval(() => {
            setTimeRemaining(prev => prev -10)
        }, 10);
    }

    function handelReset(){
        setTimeRemaining(targetTime*1000)
    }

    function handelStop(){
        dialog.current.open();
        clearInterval(Timer.current)
    }

    return(
        <>
         <RusltModal
          ref={dialog}
          targetTime={targetTime} 
          timeRemaining={timeRemaining} 
          onReset={handelReset}
          />
        <section className="challenge">
            <h2>{titile}</h2>
            <p className="challenge-time">
                {targetTime} Second{targetTime > 1 ? 's' :''}
            </p>
            <p>
                <button onClick={timerIsActive ? handelStop : handelStart}>
                   {timerIsActive? 'Stop' : 'Start'} Challenge
                </button>
            </p>
           
            <p className={timerIsActive?'active' : undefined}>
                {timerIsActive ? 'Time Is Running...' : 'Timer in Active'}
            </p>
        </section>
        </>
    )

}