import Row from './row';
import styles from './table.module.scss';

const Table = ({ list }) => {
  const tHeaderData = [
    {
      label: 'Période',
    },
    {
      label: 'Solde début',
    },
    {
      label: 'Mensualité',
    },
    {
      label: 'Intérêt',
    },
    {
      label: 'Capital remboursé',
    },
    {
      label: 'Solde fin',
    },
  ];

  return (
    <div className={styles.table}>
      <div className={styles.table__header}>
        {tHeaderData.map(({ label }) => (
          <div key={`header-cell_${label}`} className={styles.cell}>
            {label}
          </div>
        ))}
      </div>

      <div className="table__body">
        {list && list?.map((elt) => <Row key={`row-product_${elt?.id}`} data={elt} />)}
      </div>
    </div>
  );
};

export default Table;
