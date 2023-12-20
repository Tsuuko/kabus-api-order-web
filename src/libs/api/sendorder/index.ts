/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /**
   * 注文を発注します。<br>
   * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
   */
  post: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.OrderSuccess;
    reqBody: Types.RequestSendOrder;
  };
};
