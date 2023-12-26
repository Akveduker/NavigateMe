import { MistakeContextState } from '@customTypes/interface/MistakeContextState';
import TMistakeContext from '@customTypes/types/mistakeContext';
import { useState } from 'react';

const useCreateMistakeContext = () => {
  const [state, setState] = useState<MistakeContextState>({
    isCorrect: false,
    isWrong: false,
  });

  const setIsCorrect = () => {
    setState({ isWrong: false, isCorrect: true });
    setTimeout(() => {
      setState(prevState => ({ ...prevState, isCorrect: false }));
    }, 3000);
  };
  const setIsWrong = () => {
    setState({ isCorrect: false, isWrong: true });
    setTimeout(() => {
      setState(prevState => ({ ...prevState, isWrong: false }));
    }, 3000);
  };

  return [
    state,
    {
      setIsCorrect,
      setIsWrong,
    },
  ] as TMistakeContext;
};

export default useCreateMistakeContext;
