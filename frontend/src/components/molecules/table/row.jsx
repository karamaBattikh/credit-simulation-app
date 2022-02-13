import styles from './table.module.scss';

const Row = ({ data }) => (
  <div className={styles.row}>
    <div className={styles.cell}>{data?.id} </div>
    <div className={styles.cell}>{data?.soldDebut}</div>
    <div className={styles.cell}>{data?.monthly}</div>
    <div className={styles.cell}>{data?.rate}</div>
    <div className={styles.cell}>{data?.capital}</div>
    <div className={styles.cell}>{data?.soldFinal}</div>
  </div>
);

export default Row;
