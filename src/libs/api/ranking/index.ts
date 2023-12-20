/* eslint-disable */
import type * as Types from '../@types';

export type Methods = {
  /**
   * 詳細ランキング画面と同様の各種ランキングを返します。
   * <br>ランキングの対象日はkabuステーションが保持している当日のデータとなります。
   * <br>※株価情報ランキング、業種別指数ランキングは、下記の時間帯でデータがクリアされるため、
   * <br>その間の詳細ランキングAPIは空レスポンスとなります。
   * <br>データクリア：平日7:53頃-9:00過ぎ頃
   * <br>※信用情報ランキングは毎週第３営業日の7:55頃にデータが更新されます。
   */
  get: {
    reqHeaders?:
      | {
          /** トークン発行メソッドで取得した文字列 */
          'X-API-KEY': string;
        }
      | undefined;

    query: {
      /**
       * 種別<br>
       * ※信用情報ランキングに「福証」「札証」を指定した場合は、空レスポンスになります
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
       *           <td>値上がり率（デフォルト）</td>
       *       </tr>
       *       <tr>
       *           <td>2</td>
       *           <td>値下がり率</td>
       *       </tr>
       *       <tr>
       *           <td>3</td>
       *           <td>売買高上位</td>
       *       </tr>
       *       <tr>
       *           <td>4</td>
       *           <td>売買代金</td>
       *       </tr>
       *       <tr>
       *           <td>5</td>
       *           <td>TICK回数</td>
       *       </tr>
       *       <tr>
       *           <td>6</td>
       *           <td>売買高急増</td>
       *       </tr>
       *       <tr>
       *           <td>7</td>
       *           <td>売買代金急増</td>
       *       </tr>
       *       <tr>
       *           <td>8</td>
       *           <td>信用売残増</td>
       *       </tr>
       *       <tr>
       *           <td>9</td>
       *           <td>信用売残減</td>
       *       </tr>
       *       <tr>
       *           <td>10</td>
       *           <td>信用買残増</td>
       *       </tr>
       *       <tr>
       *           <td>11</td>
       *           <td>信用買残減</td>
       *       </tr>
       *       <tr>
       *           <td>12</td>
       *           <td>信用高倍率</td>
       *       </tr>
       *       <tr>
       *           <td>13</td>
       *           <td>信用低倍率</td>
       *       </tr>
       *       <tr>
       *           <td>14</td>
       *           <td>業種別値上がり率</td>
       *       </tr>
       *       <tr>
       *           <td>15</td>
       *           <td>業種別値下がり率</td>
       *       </tr>
       *   </tbody>
       * </table>
       */
      Type:
        | '1'
        | '2'
        | '3'
        | '4'
        | '5'
        | '6'
        | '7'
        | '8'
        | '9'
        | '10'
        | '11'
        | '12'
        | '13'
        | '14'
        | '15';
      /**
       * 市場<br>
       * ※業種別値上がり率・値下がり率に市場を指定しても無視されます
       * <table>
       *   <thead>
       *       <tr>
       *           <th>定義値</th>
       *           <th>説明</th>
       *       </tr>
       *   </thead>
       *   <tbody>
       *       <tr>
       *           <td>ALL</td>
       *           <td>全市場（デフォルト）</td>
       *       </tr>
       *       <tr>
       *           <td>T</td>
       *           <td>東証全体</td>
       *       </tr>
       *       <tr>
       *           <td>TP</td>
       *           <td>東証プライム</td>
       *       </tr>
       *       <tr>
       *           <td>TS</td>
       *           <td>東証スタンダード</td>
       *       </tr>
       *       <tr>
       *           <td>TG</td>
       *           <td>東証グロース</td>
       *       </tr>
       *       <tr>
       *           <td>M</td>
       *           <td>名証</td>
       *       </tr>
       *       <tr>
       *           <td>FK</td>
       *           <td>福証</td>
       *       </tr>
       *       <tr>
       *           <td>S</td>
       *           <td>札証</td>
       *       </tr>
       *   </tbody>
       * </table>
       */
      ExchangeDivision: 'ALL' | 'T' | 'TP' | 'TS' | 'TG' | 'M' | 'FK' | 'S';
    };

    status: 200;

    /** OK */
    resBody:
      | Types.RankingDefaultResponse
      | Types.RankingByTickCountResponse
      | Types.RankingByTradeVolumeResponse
      | Types.RankingByTradeValueResponse
      | Types.RankingByMarginResponse
      | Types.RankingByCategoryResponse;
  };
};
