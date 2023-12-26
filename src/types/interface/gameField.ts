import { IDropZone } from './dropZone';
import { IDraggbleObject } from './draggbleObject';

export interface IGameBody {
  field: string;
  dropZones: IDropZone[];
  draggableObjects: IDraggbleObject[];
}
