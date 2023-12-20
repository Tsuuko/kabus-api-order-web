/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  /** 指定した銘柄のプレミアム料を取得するAPI */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.MarginPremiumResponse;
  };
};
