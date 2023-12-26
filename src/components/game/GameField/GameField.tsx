import React from 'react';
import { useSelector } from 'react-redux';
import gameSelector from '@utils/helpers/selectors/gameSelector';
import SVG from 'react-inlinesvg';
import DropZone from '../DropZone/DropZone';
import s from './GameField.module.scss';

const GameField = () => {
  const { gameBody } = useSelector(gameSelector);
  const { field, dropZones } = gameBody;
  return (
    <div className={s.field}>
      <SVG src={field} />;
      {dropZones.map(({ width, height, position, objectId, body }) => {
        return (
          <DropZone
            key={objectId}
            width={width}
            height={height}
            body={body}
            position={position}
            objectId={objectId}
          />
        );
      })}
    </div>
  );
};

export default GameField;
