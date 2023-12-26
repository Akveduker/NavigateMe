import { MistakeContextState } from '@customTypes/interface/MistakeContextState';

type TMistakeContext = [
  MistakeContextState,
  {
    setIsCorrect: () => void;
    setIsWrong: () => void;
  },
];

export default TMistakeContext;
