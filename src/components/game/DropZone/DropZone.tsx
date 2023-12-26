import { IDropZone } from '@customTypes/interface/dropZone';
import React, { FC } from 'react';
import useCreateDropState from '@hooks/game/DropZone/useCreateDropState/useCreateDropState';
import SVG from 'react-inlinesvg';
import useIsObjectActive from '@hooks/game/useIsObjectActive/useIsObjectActive';
import addClearClass from '@utils/helpers/general/addClearClass/addClearClass';
import s from './DropZone.module.scss';

const DropZone: FC<IDropZone> = ({ position, objectId, body }) => {
  const isActive = useIsObjectActive(objectId);
  const [isDropped, drop] = useCreateDropState(objectId);
  const { top, left } = position;
  return (
    <div
      className={s.zone}
      ref={isActive ? drop : null}
      style={{
        top,
        left,
      }}
    >
      <SVG src={body} className={addClearClass(!isDropped, s.hide)} />
    </div>
  );
};

export default DropZone;
