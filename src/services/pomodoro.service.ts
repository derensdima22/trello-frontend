import { axiosData } from "@/api/interceptor";
import { PomodoroRoundFromStateType, PomodoroSessionFromStateType, PomodoroSessionResponseType } from "@/types/pomodoro.types";


class PomodoroService {
  private BASE_URL = '/user/timer';

  async getTodaySession() {
    const response = await axiosData.get<PomodoroSessionResponseType>(
      `${this.BASE_URL}/today`
    );

    return response;
  };

  async createSession() {
    const response = await axiosData.post<PomodoroSessionResponseType>(
      this.BASE_URL
    );

    return response;
  };

  async updateSession(id: string, data: PomodoroSessionFromStateType) {
    const response = await axiosData.put(`${this.BASE_URL}/${id}`, data);

    return response;
  };

  async deleteSession(id: string) {
    const response = await axiosData.delete(`${this.BASE_URL}/${id}`);

    return response;
  };

  async updateRound(id: string, data: PomodoroRoundFromStateType) {
    const response = await axiosData.put(`${this.BASE_URL}/round/${id}`, data);

    return response;
  };
};

export const pomodoroService = new PomodoroService();