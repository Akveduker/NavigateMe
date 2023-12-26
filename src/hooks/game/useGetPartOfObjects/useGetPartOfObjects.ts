import gameSelector from '@utils/helpers/selectors/gameSelector';
import { useSelector } from 'react-redux';

const useGetPartOfObjects = (numberOfObjects: number) => {
  const { draggableObjects } = useSelector(gameSelector).gameBody;
  const result = [];
  for (let i = 0; i < numberOfObjects; i++) {
    const element = draggableObjects[i];
    if (element) result.push(element);
  }
  return result;
};
const getThreeDraggableObjects = () => useGetPartOfObjects(3);

export default getThreeDraggableObjects;
