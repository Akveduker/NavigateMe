import DraggableObject from '@components/game/DraggbleObject/DraggableObject';
import getThreeDraggableObjects from '@hooks/game/useGetPartOfObjects/useGetPartOfObjects';
import React from 'react';
import useAppContext from '@hooks/context/useAppContext';
import MistakeContext from '@context/MistakeContext';
import addClearClass from '@utils/helpers/general/addClearClass/addClearClass';
import { useSelector } from 'react-redux';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import s from './GameHeader.module.scss';

const GameHeader = () => {
  const draggableObjects = getThreeDraggableObjects();
  const { activeObject } = useSelector(gameSelector);
  const [{ isCorrect, isWrong }] = useAppContext(MistakeContext);
  if (!activeObject) return null;
  const { task } = activeObject;
  return (
    <div
      className={`
      ${s.container} 
      ${addClearClass(isCorrect, s.correct)} 
      ${addClearClass(isWrong, s.wrong)}
      `}
    >
      <h3>{task}</h3>
      <div className={s.items}>
        {draggableObjects.map(({ objectId, body }) => {
          return (
            <div className={s.item} key={objectId}>
              <DraggableObject objectId={objectId} body={body} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameHeader;
