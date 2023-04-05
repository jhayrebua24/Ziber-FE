// //

import { useState } from "react";
import { useAppDispatch } from "redux/hooks";

import { setAuth } from "./redux/authSlice";

// interface TResponse {
//   message: string;
//   result: {
//     authorization: {
//       access_token: string;
//       token_type: string;
//     };
//     user: {
//       id: number;
//       username: string;
//       status: string;
//     };
//   };
// }

// interface TPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

// export const useFetchPosts = (): [TPost[], boolean] => {
//   const { data, isLoading } = useQuery(["POST"], async () => {
//     try {
//       const data: AxiosResponse<TPost[]> = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts",
//       );

//       return data?.data;
//     } catch {
//       return [] as TPost[];
//     }
//   });

//   return [data ?? [], isLoading];
// };

export const useLogin = (): [() => Promise<void>, boolean] => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const mutateAsync = async () =>
    await new Promise<void>((resolve) => {
      setIsLoading(true);
      setTimeout(() => {
        resolve();
        setIsLoading(false);
        dispatch(setAuth(true));
      }, 3000);
    });

  return [mutateAsync, isLoading];
};
