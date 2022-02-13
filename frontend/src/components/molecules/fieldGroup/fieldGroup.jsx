import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './fieldGroup.module.scss';

const directionClass = {
  column: styles.column,
  row: styles.row,
};

export default function FieldGroup({ children, direction, gap }) {
  const classNames = clsx(styles['field-group'], direction && directionClass?.[direction]);

  return (
    <div
      style={{
        '--gap': `${gap}px`,
      }}
      className={classNames}
    >
      {children}
    </div>
  );
}

FieldGroup.defaultProps = {
  direction: 'column',
  gap: '10',
};

FieldGroup.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  gap: PropTypes.string,
};
