import { axiosData } from "@/api/interceptor";
import { TimeBlockFromStateType, TimeBlockResponseType } from "@/types/time-block.types";


class TimeBlockService {
  private BASE_URL = '/user/time/blocks';

  async getTimeBlocks() {
    const response = await axiosData.get<TimeBlockResponseType[]>(this.BASE_URL);

    return response;
  };

  async createTimeBlock(data: TimeBlockFromStateType) {
    const response = await axiosData.post(this.BASE_URL, data);

    return response;
  };

  async updateOrderTimeBlock(ids: string[]) {
    const response = await axiosData.put(`${this.BASE_URL}/update-order`, {
      ids
    });

    return response;
  };

  async updateTimeBlock(id: string, data: TimeBlockFromStateType) {
    const response = await axiosData.put(`${this.BASE_URL}/${id}`, data);

    return response;
  };

  async deleteTimeBlock(id: string) {
    const response = await axiosData.delete(`${this.BASE_URL}/${id}`);

    return response;
  }
};

export const timeBlockService = new TimeBlockService();