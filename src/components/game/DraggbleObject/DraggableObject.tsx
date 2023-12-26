import React, { FC } from 'react';
import { IDraggbleObject } from '@customTypes/interface/draggbleObject';
import SVG from 'react-inlinesvg';
import useCursorCenterPreview from '@hooks/game/DraggableObject/useCursorCenterPreview/useCursorCenterPreview';
import useDraggableObjState from '@hooks/game/DraggableObject/useDraggableObjState/useDraggableObjState';
import useIsObjectActive from '@hooks/game/useIsObjectActive/useIsObjectActive';
import addClearClass from '@utils/helpers/general/addClearClass/addClearClass';
import s from './DraggableObject.module.scss';

const DraggableObject: FC<Omit<IDraggbleObject, 'task'>> = ({
  objectId,
  body,
}) => {
  const [onMouseDown, previewRef, styles] = useCursorCenterPreview<
    SVGElement,
    HTMLButtonElement
  >();
  const isActive = useIsObjectActive(objectId);
  const [[styleState, setStyleState], [, drag, preview]] =
    useDraggableObjState(objectId);
  return (
    <div className={`${s.container}`}>
      <button
        ref={isActive ? drag : null}
        className={`
        ${s.draggable} 
        ${addClearClass(styleState && isActive, s.active)}
        ${addClearClass(styleState && !isActive, s.notActive)}
        `}
        onMouseDown={e => {
          setStyleState(true);
          onMouseDown(e);
        }}
        onMouseUp={() => setStyleState(false)}
        onMouseLeave={() => setStyleState(false)}
      >
        <SVG
          src={body}
          innerRef={isActive ? preview : null}
          className={`${s.icon} ${s.preview}`}
          style={styles}
        />
        <SVG src={body} className={s.icon} innerRef={previewRef} />
      </button>
    </div>
  );
};

export default DraggableObject;
