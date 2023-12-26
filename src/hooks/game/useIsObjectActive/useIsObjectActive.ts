import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useIsObjectActive = (objectId: number) => {
  const { activeObject } = useSelector(gameSelector);
  const isActiveObject = useMemo(() => {
    if (!activeObject) return false;
    return objectId === activeObject.objectId;
  }, [activeObject]);

  return isActiveObject;
};

export default useIsObjectActive;
