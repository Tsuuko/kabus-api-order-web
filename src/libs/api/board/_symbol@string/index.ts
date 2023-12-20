/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /**
   * 指定した銘柄の時価情報・板情報を取得します<br>
   * レスポンスの一部にnullが発生した場合、該当銘柄を銘柄登録をしてから、
   * <br>再度時価情報・板情報APIを実行してください。
   */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    status: 200;
    /**
     * ※①：レスポンスにある「Bid」と「Ask」は、本来の意味である「買気配」と「売気配」と逆になっております。実際に返却される値は日本語の説明に準じたものになりますので、ご注意いただきますようお願い申し上げます。ご迷惑をおかけしまして、誠に申し訳ございません。<br><br>
     * 影響するキー名：<br>
     * BidQty, BidPrice, BidTime, BidSign<br>
     * AskQty, AskPrice, AskTime, AskSign
     */
    resBody: Types.BoardSuccess;
  };
};
