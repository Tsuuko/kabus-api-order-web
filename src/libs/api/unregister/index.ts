/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /** API登録銘柄リストに登録されている銘柄を解除します */
  put: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.RegistSuccess;
    /** 登録解除する銘柄のリスト */
    reqBody: Types.RequestUnregister;
  };
};
