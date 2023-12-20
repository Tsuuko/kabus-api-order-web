/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /** 注文を取消します */
  put: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.OrderSuccess;
    reqBody: Types.RequestCancelOrder;
  };
};
