import { Button } from '@chakra-ui/react';
import React from 'react';

import { RoundedFrame } from './RoundedFrame';

export type GetTokenProps = {
  token: string | undefined;
  onClickGetToken: React.MouseEventHandler<HTMLButtonElement>;
};
export const GetToken: React.FC<GetTokenProps> = ({
  token,
  onClickGetToken,
}) => (
  <RoundedFrame>
    <div>トークン：{token || '未取得'}</div>
    <Button onClick={onClickGetToken}>getToken</Button>
  </RoundedFrame>
);
