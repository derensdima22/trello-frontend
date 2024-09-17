export interface AuthFromType {
  email: string;
  password: string;
};

export interface UserType {
  id: number;
  name?: string;
  email: string;

  workInterval?: number;
  breakInterval?: number;
  intervalsCount?: number;
};

export interface AuthResponseType {
  accessToken: string;
  user: UserType;
};

export type UserFormType = Omit<UserType, 'id'> & { password?: string }