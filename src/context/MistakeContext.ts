import TMistakeContext from '@customTypes/types/mistakeContext';
import { createContext } from 'react';

const MistakeContext = createContext<TMistakeContext | null>(null);

export default MistakeContext;
