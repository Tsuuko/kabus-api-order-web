/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** 規制情報＋空売り規制情報を取得する */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.RegulationsResponse;
  };
};
