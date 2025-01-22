import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
      <TimerChallenge titile='Easy' targetTime={1}/>
      <TimerChallenge titile='Not Easy' targetTime={5}/>
      <TimerChallenge titile='Getting tough' targetTime={10}/>
      <TimerChallenge titile='Props only' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
