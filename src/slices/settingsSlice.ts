import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { GeoCodingLocation, Units } from '../services/types'

interface SettingsState {
  location?: GeoCodingLocation,
  units: Units,
}

// Define the initial state using that type
const initialState: SettingsState = {
  units: Units.Metric
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<GeoCodingLocation>) => {
      state.location = action.payload
    },
    setUnits: (state, action: PayloadAction<Units>) => {
      state.units = action.payload
    }
  },
})

export const { setLocation, setUnits } = settingsSlice.actions

export const selectLocation = (state: RootState) => state.settings.location
export const selectUnits = (state: RootState) => state.settings.units

export default settingsSlice.reducer