import { useEffect, useState } from 'react';
import { Second, ConfigButtonInteract, Wrapper, Container, Button, Divider } from './styles';

function Timer() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const minutes = Math.floor(totalTimeInSeconds / 60);
  const second = totalTimeInSeconds % 60;

  // function playSound() {
  //   const audio = new Audio(`https://youtu.be/9b-m4bJ89pI`);
  //   audio.play();
  // }

  function playSound() {
    const song: HTMLAudioElement = new Audio('./song.mp3')

    song.play();
  }

  useEffect(() => {
    let intervalId: any;
    if (isActive) {
      intervalId = setInterval(() => {
        setTotalTimeInSeconds(totalTimeInSeconds - 1);
      }, 1000);
    }
    if (totalTimeInSeconds === 0) {
      clearInterval(intervalId);
      playSound()
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, totalTimeInSeconds]);

  function addMiddleMinute() {
    setTotalTimeInSeconds((currentTotalTime) => currentTotalTime + 30);
    console.log(totalTimeInSeconds);
  }

  function addOneMinute() {
    setTotalTimeInSeconds((currentTotalTime) => currentTotalTime + 1 * 60);
    console.log(totalTimeInSeconds);
  }

  function addFiveMinute() {
    setTotalTimeInSeconds((currentTotalTime) => currentTotalTime + 5 * 60);
    console.log(totalTimeInSeconds);
  }

  return (
    <Wrapper>
      <Second>
        {minutes.toString().padStart(2, "0")}
        :
        {second.toString().padStart(2, "0")}
      </Second>
      <Divider/>
      <Container>
        <ConfigButtonInteract>
          <Button
            onClick={() => {
              setIsActive(true);
            }}
            disabled={isActive}
            >
            START
          </Button>
          <Button
            onClick={() => {
              setIsActive(false);
            }}
            disabled={!isActive}
            >
            STOP
          </Button>
          <Button
            onClick={() => {
              setTotalTimeInSeconds(0);
            }}
            disabled={isActive}
            >
            RESET
          </Button>
        </ConfigButtonInteract>
        <ConfigButtonInteract>
            <Button onClick={addMiddleMinute} disabled={isActive}>  
            +30 SECOND
          </Button>
          <Button onClick={addOneMinute} disabled={isActive}>
            +1 MINUTE
          </Button>
          <Button onClick={addFiveMinute} disabled={isActive}>
            +5 MINUTES
          </Button>
        </ConfigButtonInteract>
      </ Container>
    </Wrapper>
  );
};

export default Timer;