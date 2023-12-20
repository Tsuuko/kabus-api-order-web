import create from 'zustand';

type AppStoreState = {
  apiKey?: string;
};
type AppStoreReducer = {
  setApiKey: (apiKey?: string) => void;
};
export const useAppStore = create<AppStoreState & AppStoreReducer>((set) => ({
  apiKey: undefined,
  setApiKey: (apiKey?: string) => set({ apiKey }),
}));
