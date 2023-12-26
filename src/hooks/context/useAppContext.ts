import { useContext } from 'react';

const useAppContext = <T>(context: React.Context<T>) => {
  const currentContext = useContext(context);
  if (!currentContext) {
    throw new Error('Context has to be used within Provider');
  }
  return currentContext;
};

export default useAppContext;
