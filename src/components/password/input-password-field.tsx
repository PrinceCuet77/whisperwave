'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { type InputFieldProps } from '../layout/input-field';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import PasswordValidation from './password-validation';

const InputPasswordField = ({
  id,
  label,
  type,
  invalid,
  className,
  mode,
  value,
  ...restProps
}: InputFieldProps) => {
  const [eyeStatus, setEyeStatus] = useState(true);
  let value1 = value ? value : '';

  const isVisible = value1.length > 0;

  const visibilityHandler = () => {
    setEyeStatus((prev) => !prev);
  };

  return (
    <div className='grid w-full max-w-sm items-center gap-1.5 relative'>
      <Label className='text-base' htmlFor={type}>
        {label}
      </Label>
      {mode ? null : ( // /> //   {...restProps} //   isVisible={isVisible} //   value={value} //   type={eyeStatus ? type : 'text'} // <PasswordValidation
        <Input
          type={eyeStatus ? type : 'text'}
          value={value}
          id={id}
          {...restProps}
        />
      )}
      {isVisible ? (
        eyeStatus ? (
          <EyeOff
            onClick={visibilityHandler}
            className='cursor-pointer opacity-50 absolute top-[38px] right-3'
          />
        ) : (
          <Eye
            onClick={visibilityHandler}
            className='cursor-pointer opacity-50 absolute top-[38px] right-3'
          />
        )
      ) : null}
    </div>
  );
};

export default InputPasswordField;
