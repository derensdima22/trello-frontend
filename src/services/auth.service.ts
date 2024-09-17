import { $api } from "@/api/interceptor";
import { AuthFromType, AuthResponseType } from "@/types/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth-token.service";

export const authService = {
  async main(type: 'login' | 'register', data: AuthFromType) {
    const response = await $api.post<AuthResponseType>(
      `/auth/${type}`,
      data
    );

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken);
    };

    return response;
  },

  async getNewTokens() {
    const response = await $api.post<AuthResponseType>('/auth/login/access-token');

    if (response.data.accessToken) {
      saveTokenStorage(response.data.accessToken);
    };

    return response;
  },

  async logout() {
    const response = await $api.post<boolean>('/auth/logout');

    if (response.data) {
      removeFromStorage();
    }

    return response;
  }
}