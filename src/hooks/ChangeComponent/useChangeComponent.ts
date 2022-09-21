import { ReactElement, useState } from 'react';

const useChangeComponent = () => {
  const [component, setComponent] = useState<ReactElement>();

  const chComponent = (c: ReactElement) => {
    setComponent(c);
  };
  return { chComponent, component };
};

export default useChangeComponent;
