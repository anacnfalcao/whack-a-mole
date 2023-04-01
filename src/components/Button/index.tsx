import styles from './style.module.css'
import Text from '@/components/Text'

type Props = {
  label: string;
  onClick: (params: any) => any;
  className?: string;
  style?: React.CSSProperties;
  textClassName?: string;
  textStyle?: React.CSSProperties;
};

export default function Button({className, style, label, onClick, textClassName, textStyle} : Props) : JSX.Element{
  return (
    <button  onClick={onClick}  className={[styles.button, className].join('')} style={style}>
      <Text label={label} className={textClassName} style={textStyle}/>
    </button>
  )
}
