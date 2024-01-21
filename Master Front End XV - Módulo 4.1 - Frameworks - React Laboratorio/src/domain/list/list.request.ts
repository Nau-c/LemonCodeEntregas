import { MembersLemoncode } from "./list.interface";

interface ObjectResponse<T> {
  content: MembersLemoncode[];
  status: number;
  error?: string;
}

export const getStatusMembers = async (): Promise<
  ObjectResponse<MembersLemoncode[]>
> => {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/lemoncode/members`
    );
    const data = await response.json();

    const objectResponse = {
      content: data,
      status: response.status,
      //@ts-ignore
      error: response.error,
    };

    console.log(data);

    return objectResponse;
  } catch (error) {
    throw error;
  }
};
