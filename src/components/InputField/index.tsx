import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';

export type TextFieldProps = {
    onInputChange?: (value: string) => void;
    initialValue?: string;
  } & InputHTMLAttributes<HTMLInputElement>;
  
const InputField = ({
    name,
    initialValue = '',
    onInputChange,
    ...props
  }: TextFieldProps) => {
    const [value, setValue] = useState(initialValue);
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      setValue(newValue);
      !!onInputChange && onInputChange(newValue);
    };

    return (
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          name={name}
          {...props}
        />
    )
}
  
export default InputField;
  