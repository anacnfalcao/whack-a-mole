import styles from './style.module.css'
import Image from 'next/image'

type Props = {
  active: boolean;
  increaseScore: Function;
};

export default function Mole({active, increaseScore} : Props) : JSX.Element{
  let onMoleClicked = () => {
    if (active) {
      increaseScore();
    }
  }

  const hole = (
    <Image
      src='/hole_inactive.png'
      alt='Hole'
      width={80}
      height={80}>
    </Image>
  )

  const mole = (
    <div key={Math.random()} className={styles.moleContainer}>
      <Image
        className={styles.moleHole}
        src='/hole.png'
        alt='Hole'
        width={80}
        height={80}>
      </Image>
      <div className={styles.moleAnimationContainer}>
        <Image
          className={styles.mole}
          src='/mole.png'
          alt='Mole'
          width={80}
          height={80}>
        </Image>
      </div>
    </div>
  )

  return (
    <div  onClick={onMoleClicked}  className={styles.button}>
      { active ? mole : hole }
    </div>
  )
}
