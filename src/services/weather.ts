
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Forecast, ForecastRequest, RequestParams } from './types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/3.0/onecall'}),
  endpoints: (builder) => ({
    getCurrentAndDaily: builder.query<Forecast, ForecastRequest & RequestParams>({ 
      query: ({lat, lon, units}) => `?lat=${lat}&lon=${lon}&units=${units || ''}&exclude=hourly,minutely&appid=${API_KEY}`
    })
  })
})


export const { useGetCurrentAndDailyQuery } = weatherApi;