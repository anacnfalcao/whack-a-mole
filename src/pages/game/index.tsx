import { useState, useEffect } from "react";
import Background from '@/components/Background'
import Text from '@/components/Text'
import { useRouter } from 'next/router'
import Board from '@/components/Board'
import { useDispatch } from "react-redux";
import { setLatestScore }from '@/state/game';
import { generateMolePosition } from '@/utils'

export default function Game() {
	const dispatch = useDispatch()
  const router = useRouter()

  const [ score, setScore ] = useState<number>(0);
  const [ positionTimeoutID, setPositionTimeoutID] = useState<NodeJS.Timeout>();
  const [ molePosition, setMolePosition ] = useState<Array<number>>([]);

  const increaseScore = () => {
    setScore(score + 1)
    dispatch(setLatestScore(score + 1))
  }

  useEffect(() => {
    
    dispatch(setLatestScore(0))

    // end game in 2 min
    setTimeout(() => {
      router.push('/scoreboard')
    }, 120000);
    return () => {
      if (positionTimeoutID) {
        clearTimeout(positionTimeoutID);
      };
    }
  }, []);

  useEffect(() => {
    const continueGeneratingMolePosition = () => {
      if (positionTimeoutID) {
        clearTimeout(positionTimeoutID);
      };
      const newTimeout = setTimeout(() => {
        setMolePosition(generateMolePosition())
        continueGeneratingMolePosition();
      }, 2000);
      setPositionTimeoutID(newTimeout)
    }

    setMolePosition(generateMolePosition())
    continueGeneratingMolePosition()
  }, [score]);

  return (
    <Background>
      <>
        <h1>
          <Text label={'Score: ' + score} />
        </h1>
        <Board increaseScore={increaseScore} molePosition={molePosition} />
      </>
    </Background>
  )
}
