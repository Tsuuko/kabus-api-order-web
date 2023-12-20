/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** オプション銘柄コード取得 */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    query: {
      /** 限月<br>※限月はyyyyMM形式で指定します。0を指定した場合、直近限月となります。<br>※取引最終日に「0」（直近限月）を指定した場合、日中・夜間の時間帯に関わらず、取引最終日を迎える限月の銘柄コードを返します。取引最終日を迎える銘柄の取引は日中取引をもって終了となりますので、ご注意ください。 */
      DerivMonth: number;
      /**
       * コール or プット<br>
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
       *           <td>P</td>
       *           <td>PUT</td>
       *       </tr>
       *       <tr>
       *           <td>C</td>
       *           <td>CALL</td>
       *       </tr>
       *   </tbody>
       * </table>
       */
      PutOrCall: string;
      /** 権利行使価格<br>※0を指定した場合、APIを実行した時点でのATMとなります。 */
      StrikePrice: number;
    };

    status: 200;
    /** OK */
    resBody: Types.SymbolNameSuccess;
  };
};
