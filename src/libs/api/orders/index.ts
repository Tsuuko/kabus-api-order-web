/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /**
   * 注文一覧を取得します。<br>
   * ※下記Queryパラメータは任意設定となります。
   */
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
           *           <td>すべて </td>
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
          /**
           * 注文番号<br>
           * ※指定された注文番号と一致する注文のみレスポンスします。<br>
           * ※指定された注文番号との比較では大文字小文字を区別しません。<br>
           * ※複数の注文番号を指定することはできません。
           */
          id?: string | undefined;
          /**
           * 更新日時<br>
           * ※形式：yyyyMMddHHmmss （例：20201201123456）<br>
           * ※指定された更新日時以降（指定日時含む）に更新された注文のみレスポンスします。<br>
           * ※複数の更新日時を指定することはできません。
           */
          updtime?: string | undefined;
          /**
           * 注文詳細抑止
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
           *           <td>注文詳細を出力する（デフォルト）</td>
           *       </tr>
           *       <tr>
           *           <td>false</td>
           *           <td>注文詳細の出力しない</td>
           *       </tr>
           *   </tbody>
           * </table>
           */
          details?: string | undefined;
          /** 銘柄コード<br>※指定された銘柄コードと一致する注文のみレスポンスします。<br>※複数の銘柄コードを指定することができません。 */
          symbol?: string | undefined;
          /**
           * 状態<br>
           * ※指定された状態と一致する注文のみレスポンスします。<br>
           * ※フィルタには数字の入力のみ受け付けます。<br>
           * ※複数の状態を指定することはできません。
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
           *           <td>待機（発注待機）</td>
           *       </tr>
           *       <tr>
           *           <td>2</td>
           *           <td>処理中（発注送信中）</td>
           *       </tr>
           *       <tr>
           *           <td>3</td>
           *           <td>処理済（発注済・訂正済）</td>
           *       </tr>
           *       <tr>
           *           <td>4</td>
           *           <td>訂正取消送信中</td>
           *       </tr>
           *       <tr>
           *           <td>5</td>
           *           <td>終了（発注エラー・取消済・全約定・失効・期限切れ）</td>
           *       </tr>
           *   </tbody>
           * </table>
           */
          state?: '1' | '2' | '3' | '4' | '5' | undefined;
          /**
           * 売買区分<br>
           * ※指定された売買区分と一致する注文のみレスポンスします。<br>
           * ※フィルタには数字の入力のみ受け付けます。<br>
           * ※複数の売買区分を指定することができません。
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
           * 取引区分<br>
           * ※指定された取引区分と一致する注文のみレスポンスします。<br>
           * ※フィルタには数字の入力のみ受け付けます。<br>
           * ※複数の取引区分を指定することができません。
           * <table>
           *   <thead>
           *       <tr>
           *           <th>定義値</th>
           *           <th>説明</th>
           *       </tr>
           *   </thead>
           *   <tbody>
           *       <tr>
           *           <td>2</td>
           *           <td>新規</td>
           *       </tr>
           *       <tr>
           *           <td>3</td>
           *           <td>返済</td>
           *       </tr>
           *   </tbody>
           * </table>
           */
          cashmargin?: '2' | '3' | undefined;
        }
      | undefined;

    status: 200;
    /** OK */
    resBody: Types.OrdersSuccess[];
  };
};
