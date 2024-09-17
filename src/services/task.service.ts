import { axiosData } from "@/api/interceptor";
import { TaskFormStateType, TaskResponseType } from "@/types/task.types";


class TaskService {
  private BASE_URL = '/user/tasks';

  async getTasks() {
    const response = await axiosData.get<TaskResponseType[]>(this.BASE_URL);
  
    return response;
  };

  async createTasks(data: TaskFormStateType) {
    const response = await axiosData.post(this.BASE_URL, data);
  
    return response;
  };

  async updateTasks(id: string, data: TaskFormStateType) {
    const response = await axiosData.put(`${this.BASE_URL}/${id}`, data);
  
    return response;
  };

  async deleteTasks(id: string) {
    const response = await axiosData.delete(`${this.BASE_URL}/${id}`  );
  
    return response;
  };
}

export const taskService = new TaskService();