import MistakeContext from '@context/MistakeContext';
import useAppContext from '@hooks/context/useAppContext';
import useUpdateStats from '@hooks/game/useUpdateStats/useUpdateStats';
import { useState } from 'react';
import { useDrag } from 'react-dnd';

const useDraggableObjState = (objectId: number) => {
  const [styleState, setStyleState] = useState(false);
  const [, { setIsWrong }] = useAppContext(MistakeContext);
  const updateStats = useUpdateStats();

  const dragState = useDrag(
    () => ({
      type: objectId.toString(),
      collect: monitor => ({
        isDragging: monitor.isDragging(),
        isDroped: monitor.didDrop(),
      }),
      end: (_s, monitor) => {
        setStyleState(false);
        if (!monitor.didDrop()) {
          setIsWrong();
          updateStats(state => ({
            gameMistakePerActiveItem: state.gameMistakePerActiveItem + 1,
          }));
        }
      },
    }),
    [updateStats],
  );
  return [[styleState, setStyleState], dragState] as const;
};

export default useDraggableObjState;
