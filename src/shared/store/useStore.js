import { create } from 'zustand'
import { createAuthSlice } from '../store/createAuthSlice'

export const useStore = create((...a) => ({
  ...createAuthSlice(...a),
}));
