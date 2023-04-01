import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Background from '@/components/Background'
import Text from '@/components/Text'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

export default function Scoreboard() {
  const router = useRouter()
  const startGame = () => {router.push('/game')}

  return (
    <>
      <Head>
        <title>Whack-a-mole</title>
        <meta name="description" content="A whack-a-mole game powered by react, redux and nextJS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Background>
          <>
            <Text label='Score board'></Text>
            <Button label='Start' onClick={startGame} />
          </>
        </Background>
      </main>
    </>
  )
}
