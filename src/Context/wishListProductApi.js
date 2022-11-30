import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishProductApi = createApi({
  reducerPath: "wishProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "wishProducts",
    }),
  }),
});

export const { useGetAllProductsQuery } = wishProductApi;
