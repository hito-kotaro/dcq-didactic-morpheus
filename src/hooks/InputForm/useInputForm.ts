import { ChangeEvent, useState } from 'react';

const useInputForm = () => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onChangeNumber = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  const clear = () => {
    setValue('');
  };

  return { value, clear, onChange, onChangeNumber, setValue };
};

export default useInputForm;
