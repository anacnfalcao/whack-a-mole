import styles from './style.module.css'
import Mole from '@/components/Mole'
import { ROWS, COLUMNS } from '@/utils'

type Props = {
  molePosition: Array<number>;
  increaseScore: Function;
};


export default function Board({increaseScore, molePosition} : Props)  : JSX.Element{
  let rows = [];
  for (let i = 0; i < ROWS; i++) {
      let columns = [];
      for (let j = 0; j < COLUMNS; j++) {
          columns.push(
              <Mole 
                key={i + ' ' + j} 
                active={molePosition.length === 2 && i === molePosition[0] && j === molePosition[1]}
                increaseScore={increaseScore}
              />
          )
      }
      rows.push(
          <div key={i + ' '} className={styles.row}>
              {columns}
          </div>
      );
  }
  return (
    <div className={styles.board}>
      {rows}
    </div>
  );
}
