import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

import { usePersistStore } from '@/store/persistStore';

import { GetToken } from '../components/GetToken';
import { Login } from '../components/Login';
import { Settings } from '../components/Settings';
import { useSendorderPost } from '../hooks/useSendorderPost';
import { useTokenPost } from '../hooks/useTokenPost';
import { useAppStore } from '../store/appStore';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage<{ r: Record<string, string> }> = ({ r }) => {
  const { password, setState } = usePersistStore();

  const postTokenMutate = useTokenPost();

  return (
    <Stack>
      <Box m={5}>
        <Settings />
      </Box>
      <Box m={5}>
        <Login />
        <GetToken
          token={postTokenMutate.data?.Token}
          onClickGetToken={async () => {
            if (password) {
              await postTokenMutate.mutateAsync({
                APIPassword: password,
              });
            }
          }}
        />
      </Box>
      <Box m={5}>
        {/* <AddOrder token={postTokenMutate.data?.Token} /> */}
        <OrderForm />
      </Box>
    </Stack>
  );
};

export default Home;

const OrderForm = () => {
  const password = usePersistStore((v) => v.password);
  const apiKey = useAppStore((v) => v.apiKey);
  const [accountPassword, setAccountPassword] = useState<string | undefined>(
    undefined
  );
  const [meigCd, setMeigCd] = useState<string | undefined>(undefined);
  const [amount, setAmount] = useState<number>(100);
  const sendorderMutate = useSendorderPost();

  const [message, setMessage] = useState('');

  const shinyoUrihandler = async () => {
    if (!accountPassword || !meigCd || !amount) {
      throw new Error('meigCd or amount is undefined');
    }
    const r = await sendorderMutate.mutateAsync({
      Password: accountPassword,
      Symbol: meigCd,
      Exchange: 1,
      SecurityType: 1,
      Side: '1',
      CashMargin: 2,
      MarginTradeType: 2,
      DelivType: 0,
      AccountType: 4,
      Qty: Number(amount),
      FrontOrderType: 10,
      Price: 0,
      ExpireDay: 0,
    });
    setMessage(
      (v) => `${new Date().toString()} [信用売]${JSON.stringify(r)}\n${v}`
    );
  };

  const genbutuKaihandler = async () => {
    if (!accountPassword || !meigCd || !amount) {
      throw new Error('meigCd or amount is undefined');
    }
    const r = await sendorderMutate.mutateAsync({
      Password: accountPassword,
      Symbol: meigCd,
      Exchange: 1,
      SecurityType: 1,
      Side: '2',
      CashMargin: 1,
      DelivType: 2,
      FundType: 'AA',
      AccountType: 4,
      Qty: Number(amount),
      FrontOrderType: 10,
      Price: 0,
      ExpireDay: 0,
    });
    setMessage(
      (v) => `${new Date().toString()} [現物買]${JSON.stringify(r)}\n${v}`
    );
  };

  return (
    <Box>
      <Stack>
        <Box>
          <FormControl>
            <FormLabel>アカウントパスワード</FormLabel>
            <Input
              type="password"
              defaultValue={accountPassword}
              onChange={(e) => {
                setAccountPassword(e.currentTarget.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>銘柄</FormLabel>
            <Input
              type="number"
              defaultValue={meigCd}
              onChange={(e) => {
                setMeigCd(e.currentTarget.value);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>数量</FormLabel>
            <Input
              type="number"
              defaultValue={amount}
              onChange={(e) => {
                setAmount(Number(e.currentTarget.value));
              }}
            />
          </FormControl>
        </Box>

        <Button
          size="lg"
          colorScheme="red"
          isDisabled={
            !password || !apiKey || !accountPassword || !meigCd || !amount
          }
          onClick={genbutuKaihandler}
        >
          現物買
        </Button>
        <Button
          size="lg"
          colorScheme="blue"
          isDisabled={
            !password || !apiKey || !accountPassword || !meigCd || !amount
          }
          onClick={shinyoUrihandler}
        >
          信用売
        </Button>
      </Stack>
      <Box whiteSpace="pre-wrap">{message}</Box>
    </Box>
  );
};
