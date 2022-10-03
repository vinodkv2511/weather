
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GeoCodingRequest, GeoCodingResponse } from './types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;


export const geoCodingApi = createApi({
  reducerPath: 'geoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/geo/1.0/'}),
  endpoints: (builder) => ({
    getLocation: builder.query<GeoCodingResponse, GeoCodingRequest>({ 
      query: ({q, limit}) => `direct?q=${q}&limit=${limit || ''}&appid=${API_KEY}`
    }),
    getReverseLocation: builder.query({
      query: ({lat, lon}) => `reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
    })
  })
})


export const { useGetLocationQuery, useGetReverseLocationQuery } = geoCodingApi;