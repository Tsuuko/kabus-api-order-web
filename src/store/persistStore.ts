import create from 'zustand';
import { persist } from 'zustand/middleware';

type PersistStoreState = {
  baseUrl: string;
  password?: string;
};
type PersistStoreReducer = {
  setBaseUrl: (baseUrl: string) => void;
  setPassword: (password?: string) => void;
  setState: (state?: Partial<PersistStoreState>) => void;
};
const persistStoreInitialState: PersistStoreState = {
  baseUrl: 'http://localhost:18081/kabusapi',
  password: undefined,
};
export const usePersistStore = create(
  persist<PersistStoreState & PersistStoreReducer>(
    (set) => ({
      ...persistStoreInitialState,
      setBaseUrl: (baseUrl: string) => set({ baseUrl }),
      setPassword: (password?: string) => set({ password }),
      setState: (state?: Partial<PersistStoreState>) => set(state || {}),
    }),
    {
      name: 'kabustation-api-order-web-persist-store',
    }
  )
);
