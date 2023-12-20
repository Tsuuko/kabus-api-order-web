import { useMutation } from 'react-query';

import { Methods } from '@/libs/api/token';

import { useClient } from '../libs/aspida';
import { useAppStore } from '../store/appStore';

export const useTokenPost = () => {
  const { setApiKey } = useAppStore();
  const client = useClient();

  return useMutation(
    (body: Methods['post']['reqBody']) =>
      client.token.$post({
        body,
      }),
    {
      onSuccess: (data) => {
        setApiKey(data.Token);
      },
    }
  );
};
