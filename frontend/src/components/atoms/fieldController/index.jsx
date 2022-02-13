 import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';

import Input from '../input';
import Toggle from '../toggle';

export function InputController({ control, defaultValue, name, onBlur, ...rest }) {
  const {
    field: { ref, value, ...inputProps },
  } = useController({
    control,
    defaultValue,
    name,
  });

  const handleOnBlur = (e) => {
    if (onBlur) {
      onBlur(e);
    }
    inputProps?.onBlur(e);
  };

  return <Input inputRef={ref} value={value} {...inputProps} {...rest} onBlur={handleOnBlur} />;
}
InputController.propTypes = {
  children: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  name: PropTypes.string,
  onBlur: PropTypes.func,
};

export function ToggleController({ control, defaultValue, name, ...rest }) {
  const {
    field: { ref, value, ...inputProps },
  } = useController({
    control,
    defaultValue,
    name,
  });

  return <Toggle inputRef={ref} checked={value} {...inputProps} {...rest} />;
}
ToggleController.propTypes = {
  children: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  control: PropTypes.object,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
  name: PropTypes.string,
};
