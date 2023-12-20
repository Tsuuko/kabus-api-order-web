/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** 指定した銘柄情報を取得します */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    query?:
      | {
          /**
           * 追加情報出力フラグ（未指定時：true）<br>
           * ※追加情報は、「時価総額」、「発行済み株式数」、「決算期日」、「清算値」を意味します。
           * <table>
           *   <thead>
           *       <tr>
           *           <th>定義値</th>
           *           <th>説明</th>
           *       </tr>
           *   </thead>
           *   <tbody>
           *       <tr>
           *           <td>true</td>
           *           <td>追加情報を出力する</td>
           *       </tr>
           *       <tr>
           *           <td>false</td>
           *           <td>追加情報を出力しない</td>
           *       </tr>
           *   </tbody>
           * </table>
           */
          addinfo?: string | undefined;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.SymbolSuccess;
  };
};
