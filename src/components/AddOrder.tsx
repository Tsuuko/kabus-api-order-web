import { Button } from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { RoundedFrame } from './RoundedFrame';

type FormData = {
  // baseUrl: string;
};
export type AddOrderProps = {
  token?: string;
};
export const AddOrder: React.FC<AddOrderProps> = ({ token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
  });

  return (
    <RoundedFrame>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>{JSON.stringify(token)}</div>
        <Button type="submit">注文</Button>
      </form>
    </RoundedFrame>
  );
};
