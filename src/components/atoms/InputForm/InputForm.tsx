import React, { VFC } from 'react';
import type { inputHandlerType } from '../../../types/inputHandlerType';

type Props = {
  inputHandler: inputHandlerType;
  color: string;
  placeholder: string;
  type: string;
  rounded?: string;
};

const InputForm: VFC<Props> = (props) => {
  const { inputHandler, placeholder, color, rounded, type } = props;
  const { input, onChange, onChangeNumber } = inputHandler;
  return (
    <div className={`${color} ${rounded} w-full h-full`}>
      <input
        type={type}
        value={input}
        onChange={type === 'number' ? onChangeNumber : onChange}
        placeholder={placeholder}
        className={`${color} ${rounded} text-lg w-full h-full focus:outline-none px-2`}
      />
    </div>
  );
};

export default InputForm;
