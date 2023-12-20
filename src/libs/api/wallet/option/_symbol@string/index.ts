/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** 指定した銘柄の取引余力（オプション）を取得します */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.WalletOptionSuccess;
  };
};