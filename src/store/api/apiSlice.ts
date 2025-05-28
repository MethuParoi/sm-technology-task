import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://code-commando.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "category",
    }),

    getCategoryById: builder.query({
      query: (id) => `category/${id}`,
    }),

    getProducts: builder.query({
      query: () => "products",
    }),

    /* Fetch a single product by ID
       const { data, isLoading } = useGetProductByIdQuery(id);
    */
    getProductById: builder.query({
      query: (id: string) => `products/${id}`,
    }),

    registerUser: builder.mutation({
      query: (userData) => ({
        url: "users/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: "auth/login",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

/* Export every generated hook you need throughout the app */
export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useGetProductsQuery,
  useGetProductByIdQuery, // ← new
  useRegisterUserMutation,
  useLoginUserMutation,
} = apiSlice;
