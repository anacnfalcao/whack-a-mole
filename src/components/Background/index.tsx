import styles from './style.module.css'

type Props = {
  children: JSX.Element,
};

export default function Background({children} : Props) : JSX.Element{
  return (
    <div className={styles.background}>
        {children}
    </div>
  )
}
