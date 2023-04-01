import Head from 'next/head'
import styles from './style.module.css'
import Background from '@/components/Background'
import Text from '@/components/Text'
import Button from '@/components/Button'
import { useRouter } from 'next/router'
import Mole from '@/components/Mole'


const ROWS = 3;
const COLUMNS = 4;



export default function Game() {
  const router = useRouter()
  const endGame = () => {router.push('/scoreboard')};
  
  function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const board = () => {
    let rows = []
    const activeI = generateRandomIntegerInRange(0, ROWS);
    const activeJ = generateRandomIntegerInRange(0, COLUMNS);
    for (let i = 0; i < ROWS; i++) {
        let columns = [];
        for (let j = 0; j < COLUMNS; j++) {
            columns.push(
                <Mole key={i + ' ' + j} active={i === activeI && j === activeJ}></Mole>
            )
        }
        rows.push(
            <div key={i + ' '} className={styles.row}>
                {columns}
            </div>
        );
    }
    return rows
  }

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
            {board()}
          </>
        </Background>
      </main>
    </>
  )
}
