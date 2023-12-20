/* eslint-disable no-underscore-dangle */
import { useMutation } from 'react-query';

import { Methods } from '../libs/api/sendorder';
import { useClient } from '../libs/aspida';
import { useAppStore } from '../store/appStore';

export const useSendorderPost = () => {
  const apiKey = useAppStore((v) => v.apiKey);
  const client = useClient();

  return useMutation(async (body: Methods['post']['reqBody']) => {
    if (!apiKey) {
      throw new Error('apiKey is undefined');
    }
    const premiumResponse = await client.margin.marginpremium
      ._symbol(body.Symbol)
      .$get({
        headers: {
          'X-API-KEY': apiKey,
        },
      });

    const premium = premiumResponse.GeneralMargin?.TickMarginPremium;
    return client.sendorder.$post({
      body: {
        ...body,
        MarginPremiumUnit: premium || undefined,
      },
      headers: {
        'X-API-KEY': apiKey,
      },
    });
  });
};
