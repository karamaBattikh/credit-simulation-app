import PropTypes from 'prop-types';

import styles from './input.module.scss';

export default function Input({
  disabled,
  hasError,
  id,
  inputRef,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  type,
  value,
  ...rest
}) {
  const handleBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    e.target.placeholder = placeholder;
  };
  const handleFocus = (e) => {
    if (onFocus) {
      onFocus(e);
    }
    e.target.placeholder = '';
  };

  return (
    <div className={styles.input}>
      <label htmlFor={id} className={styles.input__label}>
        {label}
      </label>

      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
        onFocus={handleFocus}
        disabled={disabled}
        ref={inputRef}
        {...rest}
      />

      {hasError && <div className={styles.input__error}>{hasError}</div>}
    </div>
  );
}

Input.defaultProps = {
  disabled: false,
  hasError: false,
  name: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  disabled: PropTypes.bool,
  hasError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
