/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** 先物銘柄コード取得 */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    query: {
      /**
       * 先物コード<br>
       * ※大文字小文字は区別しません。
       * <table>
       *   <thead>
       *       <tr>
       *           <th>定義値</th>
       *           <th>説明</th>
       *       </tr>
       *   </thead>
       *   <tbody>
       *       <tr>
       *           <td>NK225</td>
       *           <td>日経平均先物</td>
       *       </tr>
       *       <tr>
       *           <td>NK225mini</td>
       *           <td>日経225mini先物</td>
       *       </tr>
       *       <tr>
       *           <td>TOPIX</td>
       *           <td>TOPIX先物</td>
       *       </tr>
       *       <tr>
       *           <td>TOPIXmini</td>
       *           <td>ミニTOPIX先物</td>
       *       </tr>
       *       <tr>
       *           <td>MOTHERS</td>
       *           <td>東証マザーズ先物</td>
       *       </tr>
       *       <tr>
       *           <td>JPX400</td>
       *           <td>JPX日経400先物</td>
       *       </tr>
       *       <tr>
       *           <td>DOW</td>
       *           <td>NYダウ先物</td>
       *       </tr>
       *       <tr>
       *           <td>VI</td>
       *           <td>日経平均VI先物</td>
       *       </tr>
       *       <tr>
       *           <td>Core30</td>
       *           <td>TOPIX Core30先物</td>
       *       </tr>
       *       <tr>
       *           <td>REIT</td>
       *           <td>東証REIT指数先物</td>
       *       </tr>
       *   </tbody>
       * </table>
       */
      FutureCode?: string | undefined;
      /**
       * 限月<br>
       * ※限月はyyyyMM形式で指定します。0を指定した場合、直近限月となります。<br>
       * ※取引最終日に「0」（直近限月）を指定した場合、日中・夜間の時間帯に関わらず、
       * 取引最終日を迎える限月の銘柄コードを返します。取引最終日を迎える銘柄の取引は日中取引をもって終了となりますので、ご注意ください。
       */
      DerivMonth: number;
    };

    status: 200;
    /** OK */
    resBody: Types.SymbolNameSuccess;
  };
};
