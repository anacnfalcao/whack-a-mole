import Head from 'next/head'
import { Changa_One } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Background from '@/components/Background'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Mole from '@/components/Mole'

const inter = Changa_One({  weight: '400', subsets: ['latin'] });

export default function Home() {
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
            <Button label='start' onClick={() => {}} />
            <Text label='hi'></Text>
            <Mole active={false}></Mole>
            <Mole active={true}></Mole>
          </>
        </Background>
      </main>
    </>
  )
}
