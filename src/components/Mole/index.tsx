import styles from './style.module.css'
import Image from 'next/image'

type Props = {
  active: boolean;
};

export default function Mole({active} : Props) : JSX.Element{
  const hole = (
    <Image
      src='/hole_inactive.png'
      alt='Hole'
      width={80}
      height={80}>
    </Image>
  );
  const mole = (
    <div className={styles.moleContainer}>
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
    <button  onClick={() => {}}  className={styles.button}>
      { active ? hole : mole }
    </button>
  )
}
