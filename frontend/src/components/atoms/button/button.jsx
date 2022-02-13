import PropTypes from 'prop-types';

import styles from './button.module.scss';

export default function Button({ children, disabled, onClick, type, ...rest }) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
  type: 'button',
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
