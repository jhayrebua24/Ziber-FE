// //

// import axios, { AxiosResponse } from "axios";
// import { UseMutateAsyncFunction, useMutation, useQuery } from "@tanstack/react-query";
// import { setAuth } from "redux/auth/authSlice";
// import { useAppDispatch } from "redux/hooks";

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

// export const useLogin = (): [UseMutateAsyncFunction<TResponse>, boolean] => {
//   const dispatch = useAppDispatch();
//   const { mutateAsync, isLoading } = useMutation(["AUTH_LOGIN"], async () => {
//     try {
//       const data: AxiosResponse<TResponse> = await axios.post(
//         "https://novadeci-user-dev.yondu.net/api/v1/login",
//         {
//           username: "120107",
//           password: "Yondu@123!",
//         },
//       );

//       dispatch(setAuth(true));
//       return data.data;
//     } catch {
//       return {} as TResponse;
//     }
//   });

//   return [mutateAsync, isLoading];
// };
