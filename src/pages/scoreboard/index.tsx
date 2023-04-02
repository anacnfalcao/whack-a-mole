import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Background from '@/components/Background'
import Text from '@/components/Text'
import Button from '@/components/Button'
import { selectGameLatestScore }from '@/state/game';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

export default function Scoreboard() {
  const score = useSelector(selectGameLatestScore);
  const router = useRouter()
  const startGame = () => {router.push('/game')}

  return (
    <>
      <Background>
          <>
            <Text label={'Your score was: ' + score }></Text>
            <Button label='Play again' onClick={startGame} />
          </>
      </Background>
    </>
  )
}
