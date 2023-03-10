import React from 'react'
import styles from "./TimerComponent.module.css"
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// import ReactAudioPlayer from 'react-audio-player';

export default
  function TimerComponent() {
  const [hour, setHours] = React.useState(0);
  const [minute, setMinutes] = React.useState(0);
  const [second, setSeconds] = React.useState(0);
  const [timerRunning, setTimerRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const[alarm, setAlarm] = React.useState(false);

  // hours = 0, minutes = 1 , seconds = 2;
  // increase = 1, decrease = 0;

  function handleClick(whose, incr) {
    if (whose == 0) {
      // hours
      if (incr) {
        setHours(hour + 1);
      }
      else {
        if (hour > 0)
          setHours(hour - 1);
      }
    }
    else if (whose == 1) {
      //minutes
      if (incr && minute < 60) {

        setMinutes(minute + 1);
      }
      else {
        if (minute > 0)
          setMinutes(minute - 1);
      }
    }
    else {
      //whoose == 2 seconds
      if (incr && second < 60) {
        setSeconds(second + 1);
      }
      else {
        if (second > 0)
          setSeconds(second - 1);
      }
    }
    
    // console.log(time);
  }
  
  React.useEffect(()=>{
    setTime((parseInt(hour)*60*60 + parseInt(minute)*60 + parseInt(second))*1000);
   
  }, [second])
  React.useEffect(()=>{
    setTime((parseInt(hour)*60*60 + parseInt(minute)*60 + parseInt(second))*1000);
  }, [minute])
  React.useEffect(()=>{
    setTime((parseInt(hour)*60*60 + parseInt(minute)*60 + parseInt(second))*1000);
  }, [hour])

  
  const isPlaying = React.useRef(null);
  React.useEffect(()=>{
    if(alarm)
    isPlaying.current.play();
    else
    isPlaying.current.pause();
  }, [alarm])

  const renderTime = ({ remainingTime }) => {

    if (remainingTime === 0) {
      if(timerRunning){
        setAlarm(true);
        

      }
      console.log("timerRunning" , timerRunning);
      console.log("alarm: ", alarm);
      setTimerRunning(false);
      return <div className={styles.timerBox} 
      >00:00:00</div>;
    }
    const hours = Math.floor(remainingTime / 3600)
    
    const minutes = Math.floor((remainingTime % 3600) / 60)
    const seconds = remainingTime % 60

    return (
      <div className="timer">
        <div className={styles.timerBox}>
          {
          `${hours < 10 ? 0 : ''}${timerRunning ? hours:0}:${minutes < 10 ? 0 : ''}${timerRunning?minutes:0}:${seconds < 10 ? 0 : ''}${timerRunning ?seconds : 0}`}
          </div>
      </div>
    );
  };
  const stopText = (()=>{
    return <span className={styles.stopText}
      onClick = {()=>{
        setAlarm(false);
        isPlaying = true;
        // song.pause();
      }}
    >STOP</span>;
  })
  
  

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.outerCircle}>
          <div className={styles.innerCircle}>
          <CountdownCircleTimer
          isPlaying = {timerRunning ? true : false}
          duration={timerRunning ? time/1000 : 0}
          rotation={'counterclockwise'}
          colors={['#FF6A6A']}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
        
        {alarm ? stopText: renderTime }
        </CountdownCircleTimer>
        
          </div>
          <audio loop ref = {isPlaying} src='../../Audio/alarm.wav'></audio>
        </div>

      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.box1}>
            <div className={styles.col}>Hours</div>
            <div className={styles.col}>Minutes</div>
            <div className={styles.col}>Seconds</div>
          </div>
          <div className={styles.box2}>
            <div className={styles.col}>
              <img src='../../Images/up.png'
                onClick={(e) => handleClick(0, 1)}></img>
            </div>
            <div className={styles.col}>
              <img src='../../Images/up.png'
                onClick={(e) => handleClick(1, 1)}></img>
            </div>
            <div className={styles.col}>
              <img src='../../Images/up.png'
                onClick={(e) => handleClick(2, 1)}></img>
            </div>
          </div>
          <div className={styles.box3}>


            <div className={styles.col1}>
              <ReactScrollWheelHandler
                upHandler={(e) => { handleClick(0, 1) }}
                downHandler={(e) => { handleClick(0, 0) }}
              >
                {hour < 10 && 0}{hour}
              </ReactScrollWheelHandler>
            </div>

            <div className={styles.col2}>:</div>
            <div className={styles.col3}>
              <ReactScrollWheelHandler
                upHandler={(e) => { handleClick(1, 1) }}
                downHandler={(e) => { handleClick(1, 0) }}
              >
                {minute < 10 && 0}{minute}
              </ReactScrollWheelHandler>
            </div>
            <div className={styles.col4}>:</div>
            <div className={styles.col5}>
              <ReactScrollWheelHandler
                upHandler={(e) => { handleClick(2, 1) }}
                downHandler={(e) => { handleClick(2, 0) }}
              >
                {second < 10 && 0}{second}
              </ReactScrollWheelHandler>
            </div>

          </div>
          <div className={styles.box4}>
            <div className={styles.col}>
              <img src='../../Images/down.png'
                onClick={(e) => handleClick(0, 0)}></img>
            </div>
            <div className={styles.col}>
              <img src='../../Images/down.png'
                onClick={(e) => handleClick(1, 0)}></img>
            </div>
            <div className={styles.col}>
              <img src='../../Images/down.png'
                onClick={(e) => handleClick(2, 0)}></img>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.button}
            onClick={(e)=>{
              console.log(time);
              setTimerRunning(true);
              
              
            }}
          >Start</div>
        </div>
      </div>
    </div>
  )
}
