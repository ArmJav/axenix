import { AxiosError } from "axios";
import { ApiClient } from "@/api/Client";
import type { IdName } from "@/api/model";

interface ResponseBody {
  data: IdName[] | null;
  code: number;
  message: string;
}

export const getSnippet = async (snippet: string, search?: string): Promise<ResponseBody> => {
  try {
    const { data: response } = await ApiClient({
      method: "GET",
      url: `snippet/${snippet}?search=${search}`,
    });

    const { data, code, message } = response;

    if (code === 200) {
      return { data, code, message };
    } else {
      console.error(`Ошибка при входе. Статус: ${code}`);
      return { data: null, code, message };
    }
  } catch (error: unknown) {
    // Проверяем, является ли ошибка экземпляром AxiosError
    if (error instanceof AxiosError) {
      console.error("Ошибка при отправлении запроса", error.message);
      const errorcode = error.response?.status || 500;
      const errorMessage = error.response?.data?.message || "Неизвестная ошибка";
      return { data: null, code: errorcode, message: errorMessage };
    } else {
      // Обработка неизвестной ошибки
      console.error("Неизвестная ошибка при отправлении запроса:", error);
      return { data: null, code: 500, message: "Неизвестная ошибка" };
    }
  }
};
