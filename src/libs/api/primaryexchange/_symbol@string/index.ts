/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** 株式の優先市場を取得する */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.PrimaryExchangeResponse;
  };
};
