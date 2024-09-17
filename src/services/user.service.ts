import { axiosData } from "@/api/interceptor";
import { UserFormType, UserType } from "@/types/auth.types";


export interface ProfileResponseType {
  user: UserType;
  statistics: {
    label: string;
    value: string;
  }[];
};

class UserService {
  private BASE_URL = '/user/profile';

  async getProfile() {
    const response = await axiosData.get<ProfileResponseType>(this.BASE_URL);

    return response.data;
  };

  async update(data: UserFormType) {
    const response = await axiosData.put(this.BASE_URL, data);

    return response.data;
  }


}

export const userService = new UserService();