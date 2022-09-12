import { ChangeEvent, useState } from 'react';

const useInputForm = () => {
  const [input, setInput] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const onChangeNumber = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  const clear = () => {
    setInput('');
  };

  return { input, clear, onChange, onChangeNumber, setInput };
};

export default useInputForm;
