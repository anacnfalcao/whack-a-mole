import { Changa_One } from 'next/font/google'
import styles from './style.module.css'

const font = Changa_One({  weight: '400', subsets: ['latin'] });

type Props = {
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Text({className, style, label} : Props) : JSX.Element{
  return (
    <p className={[font.className, styles.text, className].join(' ')} style={style}>
        {label}
    </p>
  )
}
