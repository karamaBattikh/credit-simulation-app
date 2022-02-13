import PropTypes from 'prop-types';

import styles from './toggle.module.scss';

export default function Toggle({ checked, id, inputRef, label, name, onChange }) {
  return (
    <div className={styles.toggle}>
      <label className={styles.toggle__label}>{label}</label>
      <label htmlFor={id} className={styles.toggle__switch}>
        <input
          id={id}
          name={name}
          type="checkbox"
          ref={inputRef}
          defaultChecked={checked}
          onChange={onChange}
        />
        <span className={styles.toggle__slider} />
      </label>
    </div>
  );
}

Toggle.defaultProps = {
  onChange: () => {},
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  inputRef: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
