import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const BASE_URL = 'https://reactnative.dev';
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: builder => ({
    getMovieType: builder.query({
      query: type => `${type}/movies.json`,
    }),
  }),
});

export const {useGetMovieTypeQuery} = movieApi;
