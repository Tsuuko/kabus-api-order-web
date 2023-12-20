import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import { usePersistStore } from '../store/persistStore';
import { RoundedFrame } from './RoundedFrame';

export type FormData = {
  baseUrl: string;
  password: string;
  isSave: boolean;
};

export const Settings = () => {
  const { baseUrl, password, setState } = usePersistStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      baseUrl,
      password,
      isSave: !!password,
    },
  });

  return (
    <RoundedFrame
      as="form"
      onSubmit={handleSubmit(
        ({ baseUrl: _baseUrl, isSave, password: _password }) => {
          setState({
            baseUrl: _baseUrl,
            password: isSave ? _password : undefined,
          });
        }
      )}
    >
      <Stack>
        <FormLabel>接続先</FormLabel>
        <FormControl isInvalid={!!errors.baseUrl} flexGrow={1}>
          <Input
            placeholder="例) http://localhost:18081"
            {...register('baseUrl', { required: true })}
          />
        </FormControl>
        <FormLabel>パスワード</FormLabel>
        <HStack>
          <FormControl isInvalid={!!errors.password}>
            <Input
              type="password"
              {...register('password', { required: true })}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.isSave}
            w="min-intrinsic"
            flexShrink={0}
          >
            <Checkbox size="lg" flexShrink={0} {...register('isSave')}>
              保存
            </Checkbox>
          </FormControl>
        </HStack>
        <Button type="submit">保存</Button>
      </Stack>
    </RoundedFrame>
  );
};
