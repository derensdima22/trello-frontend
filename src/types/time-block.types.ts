import { BaseType } from "./core.types";

export interface TimeBlockResponseType extends BaseType{
  name: string;
  color?: string;
  duration: number;
  order: number;
};

export type TimeBlockFromStateType = Partial<
  Omit<TimeBlockResponseType, 'createsAt' | 'updatedAt'>>;