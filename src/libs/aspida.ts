import aspida from '@aspida/fetch';

import { usePersistStore } from '@/store/persistStore';

import api from './api/$api';

export const useClient = () => {
  const baseURL = usePersistStore((v) => v.baseUrl);
  const client = api(aspida(fetch, { baseURL }));
  return client;
};
