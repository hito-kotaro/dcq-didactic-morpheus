import { ChangeEvent, useState } from 'react';

const useInputForm = () => {
  const [value, setValue] = useState('');
  const [valNum, setValNum] = useState(0);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const onChangeNumber = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setValNum(Number(e.target.value));
    }
  };

  const clear = () => {
    setValue('');
  };

  return {
    value,
    valNum,
    clear,
    onChange,
    onChangeNumber,
    setValue,
    setValNum,
  };
};

export default useInputForm;
