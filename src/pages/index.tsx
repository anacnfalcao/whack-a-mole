import Head from 'next/head'
import { Changa_One } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Background from '@/components/Background'
import Text from '@/components/Text'
import Button from '@/components/Button'
import { useRouter } from 'next/router'

export default function Home() {
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
            <h1>
              <Text className={styles.title} label='Whack-a-mole'></Text>
            </h1>
            <Button label='Start' onClick={startGame} />
          </>
        </Background>
      </main>
    </>
  )
}
