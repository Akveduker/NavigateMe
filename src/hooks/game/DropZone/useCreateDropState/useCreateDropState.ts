import MistakeContext from '@context/MistakeContext';
import useAppContext from '@hooks/context/useAppContext';
import useIsObjectActive from '@hooks/game/useIsObjectActive/useIsObjectActive';
import {
  removeDraggbleObject,
  setNewActiveObject,
} from '@store/game/game.slice';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import useCreateDropZoneMistake from '../useCreateDropZoneMistake/useCreateDropZoneMistake';

const useCreateDropState = (objectId: number) => {
  const [isDropped, setIsDropped] = useState(false);
  const [, { setIsCorrect }] = useAppContext(MistakeContext);
  const dispatch = useDispatch();
  const onDrop = () => {
    setIsDropped(true);
    dispatch(removeDraggbleObject(objectId));
    dispatch(setNewActiveObject());
  };
  useCreateDropZoneMistake(onDrop, objectId);
  const [, drop] = useDrop(() => ({
    accept: objectId.toString(),
    drop: () => {
      setIsCorrect();
      onDrop();
    },
  }));

  return [isDropped, drop] as const;
};

export default useCreateDropState;
