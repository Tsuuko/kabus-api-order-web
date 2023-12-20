/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** API登録銘柄リストに登録されている銘柄をすべて解除します */
  put: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.UnregisterAllSuccess;
  };
};
