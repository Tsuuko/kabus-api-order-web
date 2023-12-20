/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /** 残高一覧を取得します。<br>※下記Queryパラメータは任意設定となります。 */
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
           * 取得する商品
           * <table>
           *   <thead>
           *       <tr>
           *           <th>定義値</th>
           *           <th>説明</th>
           *       </tr>
           *   </thead>
           *   <tbody>
           *       <tr>
           *           <td>0</td>
           *           <td>すべて</td>
           *       </tr>
           *       <tr>
           *           <td>1</td>
           *           <td>現物</td>
           *       </tr>
           *       <tr>
           *           <td>2</td>
           *           <td>信用</td>
           *       </tr>
           *       <tr>
           *           <td>3</td>
           *           <td>先物</td>
           *       </tr>
           *       <tr>
           *           <td>4</td>
           *           <td>OP</td>
           *       </tr>
           *   </tbody>
           * </table>
           */
          product?: '0' | '1' | '2' | '3' | '4' | undefined;
          /** 銘柄コード<br>※指定された銘柄コードと一致するポジションのみレスポンスします。<br>※複数の銘柄コードを指定することはできません。 */
          symbol?: string | undefined;
          /**
           * 売買区分フィルタ<br>
           * 指定された売買区分と一致する注文を返す
           * <table>
           *   <thead>
           *       <tr>
           *           <th>定義値</th>
           *           <th>説明</th>
           *       </tr>
           *   </thead>
           *   <tbody>
           *       <tr>
           *           <td>1</td>
           *           <td>売</td>
           *       </tr>
           *       <tr>
           *           <td>2</td>
           *           <td>買</td>
           *       </tr>
           *   </tbody>
           * </table>
           */
          side?: '1' | '2' | undefined;
          /**
           * 追加情報出力フラグ（未指定時：true）<br>
           * ※追加情報は、「現在値」、「評価金額」、「評価損益額」、「評価損益率」を意味します。
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
    resBody: Types.PositionsSuccess[];
  };
};
