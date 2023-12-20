/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /**
   * APIトークンを発行します。<br>
   * 発行したトークンは有効である限り使用することができ、リクエストごとに発行する必要はありません。<br>
   * 発行されたAPIトークンは以下のタイミングで無効となります。<br>
   * ・kabuステーションを終了した時<br>
   * ・kabuステーションからログアウトした時<br>
   * ・別のトークンが新たに発行された時<br>
   * ※kabuステーションは早朝、強制的にログアウトいたしますのでご留意ください。<br>
   */
  post: {
    status: 200;
    /** OK */
    resBody: Types.TokenSuccess;
    reqBody: Types.RequestToken;
  };
};
