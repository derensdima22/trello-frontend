import { BaseType } from "./core.types";

export interface PomodoroRoundResponseType extends BaseType {
  isCompleted?: boolean;
  totalSeconds: number;
};

export interface PomodoroSessionResponseType extends BaseType {
  isCompleted?: boolean;
  rounds?: PomodoroRoundResponseType[];
}

export type PomodoroSessionFromStateType = Partial<
  Omit<PomodoroSessionResponseType, 'id' | 'createsAt' | 'updatedAt'>>;

export type PomodoroRoundFromStateType = Partial<
  Omit<PomodoroRoundResponseType, 'id' | 'createsAt' | 'updatedAt'>>;  