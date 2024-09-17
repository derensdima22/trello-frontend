import { BaseType } from "./core.types";

export enum EnumTaskPriority {
  low = 'low',
  medium = 'medium',
  high = 'high'
};

export interface TaskResponseType extends BaseType{
  name: string;
  priority?: EnumTaskPriority;
  isCompleted: boolean;
};

export type TaskFormStateType = Partial<Omit<TaskResponseType, 'id' | 'updatedAt'>>;
