import { MouseEventHandler, useRef, useState } from 'react';

const useCursorCenterPreview = <P extends Element, H extends HTMLElement>() => {
  const ref = useRef<P>(null);
  const [pos, setPos] = useState<{
    x: null | number;
    y: null | number;
  }>({
    x: null,
    y: null,
  });
  const calcPos: MouseEventHandler<H> = e => {
    if (!ref.current) return;
    const { x, y } = e.currentTarget.getBoundingClientRect();
    const { width, height } = ref.current.getBoundingClientRect();
    setPos({
      x: e.clientX - x - width / 2,
      y: e.clientY - y - height / 2,
    });
  };
  const styles = {
    left: pos.x ? pos.x : '',
    top: pos.y ? pos.y : '',
    margin: pos.x ? '0' : '',
    zIndex: '-1',
  };
  return [calcPos, ref, styles] as const;
};

export default useCursorCenterPreview;
