/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /**
   * PUSH配信する銘柄を登録します。<br>
   * API登録銘柄リストを開くには、kabuステーションAPIインジケーターを右クリックし「API登録銘柄リスト」を選択してください。
   */
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
    /** 登録する銘柄のリスト */
    reqBody: Types.RequestRegister;
  };
};
