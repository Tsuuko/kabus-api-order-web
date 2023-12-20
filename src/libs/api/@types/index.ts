/* eslint-disable */
export type RequestToken = {
  /** APIパスワード */
  APIPassword: string;
};

export type RequestSendOrder = {
  /** 注文パスワード */
  Password: string;
  /** 銘柄コード */
  Symbol: string;
  /**
   * 市場コード
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
   *           <td>東証</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>名証</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>福証</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>札証</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange: number;
  /**
   * 商品種別
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
   *           <td>株式</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  SecurityType: number;
  /**
   * 売買区分
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
  Side: string;
  /**
   * 信用区分
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
   *           <td>現物</td>
   *       </tr>
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
  CashMargin: number;
  /**
   * 信用取引区分<br>※現物取引の場合は指定不要。<br>※信用取引の場合、必須。
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
   *           <td>制度信用</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>一般信用（長期）</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>一般信用（デイトレ）</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  MarginTradeType?: number | undefined;
  /**
   * １株あたりのプレミアム料(円)<br>
   * ※プレミアム料の刻値は、プレミアム料取得APIのレスポンスにある"TickMarginPremium"にてご確認ください。<br>
   * ※入札受付中(19:30～20:30)プレミアム料入札可能銘柄の場合、「MarginPremiumUnit」は必須となります。<br>
   * ※入札受付中(19:30～20:30)のプレミアム料入札可能銘柄以外の場合は、「MarginPremiumUnit」の記載は無視されます。<br>
   * ※入札受付中以外の時間帯では、「MarginPremiumUnit」の記載は無視されます。
   */
  MarginPremiumUnit?: number | undefined;
  /**
   * 受渡区分<br>※現物買は指定必須。<br>※現物売は「0(指定なし)」を設定<br>※信用新規は「0(指定なし)」を設定<br>※信用返済は指定必須
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
   *           <td>指定なし</td>
   *       </tr>
   *       <tr>
   *           <td>1</td>
   *           <td>自動振替</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>お預り金</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  DelivType: number;
  /**
   * 資産区分（預り区分）<br>※現物買は、指定必須。<br>※現物売は、「'  '」 半角スペース2つを指定必須。<br>※信用新規と信用返済は、「11」を指定するか、または指定なしでも可。指定しない場合は「11」が自動的にセットされます。
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>(半角スペース2つ)</td>
   *           <td>現物売の場合</td>
   *       </tr>
   *       <tr>
   *           <td>02</td>
   *           <td>保護</td>
   *       </tr>
   *       <tr>
   *           <td>AA</td>
   *           <td>信用代用</td>
   *       </tr>
   *       <tr>
   *           <td>11</td>
   *           <td>信用取引</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  FundType?: string | undefined;
  /**
   * 口座種別
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
   *           <td>一般</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>特定</td>
   *       </tr>
   *       <tr>
   *           <td>12</td>
   *           <td>法人</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  AccountType: number;
  /** 注文数量<br>※信用一括返済の場合、返済したい合計数量を入力してください。 */
  Qty: number;
  /**
   * 決済順序<br>※信用返済の場合、必須。<br>※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。<br>※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。
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
   *           <td>日付（古い順）、損益（高い順）</td>
   *       </tr>
   *       <tr>
   *           <td>1</td>
   *           <td>日付（古い順）、損益（低い順）</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日付（新しい順）、損益（高い順）</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>日付（新しい順）、損益（低い順）</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>損益（高い順）、日付（古い順）</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>損益（高い順）、日付（新しい順）</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>損益（低い順）、日付（古い順）</td>
   *       </tr>
   *       <tr>
   *           <td>7</td>
   *           <td>損益（低い順）、日付（新しい順）</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  ClosePositionOrder?: number | undefined;
  /** 返済建玉指定<br>※信用返済の場合、必須。<br>※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。<br>※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。<br>※信用一括返済の場合、各建玉IDと返済したい数量を入力してください。<br>※建玉IDは「E」から始まる番号です。 */
  ClosePositions?: Positions[] | undefined;
  /**
   * 執行条件
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *           <th>”Price"の指定</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>10</td>
   *           <td>成行</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>13</td>
   *           <td>寄成（前場）</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>14</td>
   *           <td>寄成（後場）</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>15</td>
   *           <td>引成（前場）</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>16</td>
   *           <td>引成（後場）</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>17</td>
   *           <td>IOC成行</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>20</td>
   *           <td>指値</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>21</td>
   *           <td>寄指（前場）</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>22</td>
   *           <td>寄指（後場）</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>引指（前場）</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>引指（後場）</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>25</td>
   *           <td>不成（前場）</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>26</td>
   *           <td>不成（後場）</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>27</td>
   *           <td>IOC指値</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>30</td>
   *           <td>逆指値</td>
   *           <td>指定なし<br>※AfterHitPriceで指定ください</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  FrontOrderType: number;
  /** 注文価格<br>※FrontOrderTypeで成行を指定した場合、0を指定する。<br>※詳細について、”FrontOrderType”をご確認ください。 */
  Price: number;
  /**
   * 注文有効期限<br>
   * yyyyMMdd形式。<br>
   * 「0」を指定すると、kabuステーション上の発注画面の「本日」に対応する日付として扱います。<br>
   * 「本日」は直近の注文可能日となり、以下のように設定されます。<br>
   * 引けまでの間 : 当日<br>
   * 引け後       : 翌取引所営業日<br>
   * 休前日       : 休日明けの取引所営業日<br>
   * ※ 日替わりはkabuステーションが日付変更通知を受信したタイミングです。
   */
  ExpireDay: number;

  /**
   * 逆指値条件<br>
   * ※FrontOrderTypeで逆指値を指定した場合のみ必須。
   */
  ReverseLimitOrder?:
    | {
        /**
         * トリガ銘柄<br>
         * ※未設定の場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>発注銘柄</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>NK225指数</td>
         *     </tr>
         *     <tr>
         *       <td>3</td>
         *       <td>TOPIX指数</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        TriggerSec: number;
        /**
         * トリガ価格<br>
         * ※未設定の場合はエラーになります。<br>
         * ※数字以外が設定された場合はエラーになります。
         */
        TriggerPrice: number;
        /**
         * 以上／以下<br>
         * ※未設定の場合はエラーになります。<br>
         * ※1、2以外が指定された場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>以下</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>以上</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        UnderOver: number;
        /**
         * ヒット後執行条件<br>
         * ※未設定の場合はエラーになります。<br>
         * ※1、2、3以外が指定された場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>成行</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>指値</td>
         *     </tr>
         *     <tr>
         *       <td>3</td>
         *       <td>不成</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        AfterHitOrderType: number;
        /**
         * ヒット後注文価格<br>
         * ※未設定の場合はエラーになります。<br>
         * ※数字以外が設定された場合はエラーになります。<br><br>
         * ヒット後執行条件に従い、下記のようにヒット後注文価格を設定してください。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>ヒット後執行条件</th>
         *           <th>設定価格</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>成行</td>
         *       <td>0</td>
         *     </tr>
         *     <tr>
         *       <td>指値</td>
         *       <td>指値の単価</td>
         *     </tr>
         *     <tr>
         *       <td>不成</td>
         *       <td>不成の単価</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        AfterHitPrice: number;
      }
    | undefined;
};

export type RequestSendOrderDerivFuture = {
  /** 注文パスワード */
  Password: string;
  /** 銘柄コード<br>※取引最終日に「先物銘柄コード取得」でDerivMonthに0（直近限月）を指定した場合、日中・夜間の時間帯に関わらず、取引最終日を迎える限月の銘柄コードを返します。取引最終日を迎える銘柄の取引は日中取引をもって終了となりますので、ご注意ください。 */
  Symbol: string;
  /**
   * 市場コード
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
   *           <td>日通し</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>日中</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>夜間</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange: number;
  /**
   * 取引区分
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
   *           <td>新規</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>返済</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  TradeType: number;
  /**
   * 有効期間条件
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
   *           <td>FAS<br>※逆指値注文以外の場合、FASを指定した場合、FrontOrderTypeは指値(20)のみ指定可能。</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>FAK<br>※逆指値注文以外の場合、FAKを指定した場合、Exchangeは日中(23)、夜間(24)のみ指定可能。</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>FOK<br>※逆指値注文以外の場合、FOKを指定した場合、Exchangeは日中(23)、夜間(24)のみ指定可能。</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  TimeInForce: number;
  /**
   * 売買区分
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
  Side: string;
  /** 注文数量 */
  Qty: number;
  /**
   * 決済順序<br>※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。<br>※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。
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
   *           <td>日付（古い順）、損益（高い順）</td>
   *       </tr>
   *       <tr>
   *           <td>1</td>
   *           <td>日付（古い順）、損益（低い順）</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日付（新しい順）、損益（高い順）</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>日付（新しい順）、損益（低い順）</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>損益（高い順）、日付（古い順）</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>損益（高い順）、日付（新しい順）</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>損益（低い順）、日付（古い順）</td>
   *       </tr>
   *       <tr>
   *           <td>7</td>
   *           <td>損益（低い順）、日付（新しい順）</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  ClosePositionOrder?: number | undefined;
  /** 返済建玉指定<br>※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。<br>※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。 */
  ClosePositions?: PositionsDeriv[] | undefined;
  /**
   * 執行条件
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *           <th>”Price”の指定</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>18</td>
   *           <td>引成（派生）<br>※TimeInForceは、「FAK」のみ有効</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>20</td>
   *           <td>指値</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>28</td>
   *           <td>引指（派生）<br>※TimeInForceは、「FAS」のみ有効</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>30</td>
   *           <td>逆指値</td>
   *           <td>指定なし<br>※AfterHitPriceで指定ください</td>
   *       </tr>
   *       <tr>
   *           <td>120</td>
   *           <td>成行（マーケットオーダー）</td>
   *           <td>0</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  FrontOrderType: number;
  /** 注文価格<br>※FrontOrderTypeで成行を指定した場合、0を指定する。<br>※詳細について、”FrontOrderType”をご確認ください。 */
  Price: number;
  /**
   * 注文有効期限<br>
   * yyyyMMdd形式。<br>
   * 「0」を指定すると、kabuステーション上の発注画面の「本日」に対応する日付として扱います。<br>
   * 「本日」は直近の注文可能日となり、以下のように設定されます。<br>
   * その市場の引けまでの間 : 当日<br>
   * その市場の引け後       : 翌取引所営業日<br>
   * その市場の休前日       : 休日明けの取引所営業日<br>
   * ※ 日替わりはkabuステーションが日付変更通知を受信したタイミングです。<br>
   * ※ 日通しの場合、夜間取引の引け後に日付が更新されます。
   */
  ExpireDay: number;

  /**
   * 逆指値条件<br>
   * ※FrontOrderTypeで逆指値を指定した場合のみ必須。
   */
  ReverseLimitOrder?:
    | {
        /**
         * トリガ価格<br>
         * ※未設定の場合はエラーになります。<br>
         * ※数字以外が設定された場合はエラーになります。
         */
        TriggerPrice: number;
        /**
         * 以上／以下<br>
         * ※未設定の場合はエラーになります。<br>
         * ※1、2以外が指定された場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>以下</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>以上</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        UnderOver: number;
        /**
         * ヒット後執行条件<br>
         * ※未設定の場合はエラーになります。<br>
         * ※日通の注文で2以外が指定された場合はエラーになります。<br>
         * ※日中、夜間の注文で1、2以外が指定された場合はエラーになります。<br>
         * ※逆指値（成行）で有効期間条件(TimeInForce)にFAK以外を指定された場合はエラーになります。<br>
         * ※逆指値（指値）で有効期間条件(TimeInForce)にFAS以外を指定された場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>成行</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>指値</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        AfterHitOrderType: number;
        /**
         * ヒット後注文価格<br>
         * ※未設定の場合はエラーになります。<br>
         * ※数字以外が設定された場合はエラーになります。<br><br>
         * ヒット後執行条件に従い、下記のようにヒット後注文価格を設定してください。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>ヒット後執行条件</th>
         *           <th>設定価格</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>成行</td>
         *       <td>0</td>
         *     </tr>
         *     <tr>
         *       <td>指値</td>
         *       <td>指値の単価</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        AfterHitPrice: number;
      }
    | undefined;
};

export type RequestSendOrderDerivOption = {
  /** 注文パスワード */
  Password: string;
  /** 銘柄コード<br>※取引最終日に「オプション銘柄コード取得」でDerivMonthに0（直近限月）を指定した場合、日中・夜間の時間帯に関わらず、取引最終日を迎える限月の銘柄コードを返します。取引最終日を迎える銘柄の取引は日中取引をもって終了となりますので、ご注意ください。 */
  Symbol: string;
  /**
   * 市場コード
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
   *           <td>日通し</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>日中</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>夜間</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange: number;
  /**
   * 取引区分
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
   *           <td>新規</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>返済</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  TradeType: number;
  /**
   * 有効期間条件
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
   *           <td>FAS<br>※逆指値注文以外の場合、FASを指定した場合、FrontOrderTypeは指値(20)のみ指定可能。</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>FAK<br>※逆指値注文以外の場合、FAKを指定した場合、Exchangeは日中(23)、夜間(24)のみ指定可能。</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>FOK<br>※逆指値注文以外の場合、FOKを指定した場合、Exchangeは日中(23)、夜間(24)のみ指定可能。</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  TimeInForce: number;
  /**
   * 売買区分
   * <table>
   *   <thead>
   *     <tr>
   *       <th>定義値</th>
   *       <th>説明</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td>1</td>
   *       <td>売</td>
   *     </tr>
   *     <tr>
   *       <td>2</td>
   *       <td>買</td>
   *     </tr>
   *   </tbody>
   * </table>
   */
  Side: string;
  /** 注文数量 */
  Qty: number;
  /**
   * 決済順序<br>※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。<br>※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。
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
   *           <td>日付（古い順）、損益（高い順）</td>
   *       </tr>
   *       <tr>
   *           <td>1</td>
   *           <td>日付（古い順）、損益（低い順）</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日付（新しい順）、損益（高い順）</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>日付（新しい順）、損益（低い順）</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>損益（高い順）、日付（古い順）</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>損益（高い順）、日付（新しい順）</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>損益（低い順）、日付（古い順）</td>
   *       </tr>
   *       <tr>
   *           <td>7</td>
   *           <td>損益（低い順）、日付（新しい順）</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  ClosePositionOrder?: number | undefined;
  /** 返済建玉指定<br>※ClosePositionOrderとClosePositionsはどちらか一方のみ指定可能。<br>※ClosePositionOrderとClosePositionsを両方指定した場合、エラー。 */
  ClosePositions?: PositionsDeriv[] | undefined;
  /**
   * 執行条件
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *           <th>”Price”の指定</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>18</td>
   *           <td>引成（派生）<br>※TimeInForceは、「FAK」のみ有効</td>
   *           <td>0</td>
   *       </tr>
   *       <tr>
   *           <td>20</td>
   *           <td>指値</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>28</td>
   *           <td>引指（派生）<br>※TimeInForceは、「FAS」のみ有効</td>
   *           <td>発注したい金額</td>
   *       </tr>
   *       <tr>
   *           <td>30</td>
   *           <td>逆指値</td>
   *           <td>指定なし<br>※AfterHitPriceで指定ください</td>
   *       </tr>
   *       <tr>
   *           <td>120</td>
   *           <td>成行（マーケットオーダー）</td>
   *           <td>0</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  FrontOrderType: number;
  /** 注文価格<br>※FrontOrderTypeで成行を指定した場合、0を指定する。<br>※詳細について、”FrontOrderType”をご確認ください。 */
  Price: number;
  /**
   * 注文有効期限<br>
   * yyyyMMdd形式。<br>
   * 「0」を指定すると、kabuステーション上の発注画面の「本日」に対応する日付として扱います。<br>
   * 「本日」は直近の注文可能日となり、以下のように設定されます。<br>
   * その市場の引けまでの間 : 当日<br>
   * その市場の引け後       : 翌取引所営業日<br>
   * その市場の休前日       : 休日明けの取引所営業日<br>
   * ※ 日替わりはkabuステーションが日付変更通知を受信したタイミングです。<br>
   * ※ 日通しの場合、夜間取引の引け後に日付が更新されます。
   */
  ExpireDay: number;

  /**
   * 逆指値条件<br>
   * ※FrontOrderTypeで逆指値を指定した場合のみ必須。
   */
  ReverseLimitOrder?:
    | {
        /**
         * トリガ価格<br>
         * ※未設定の場合はエラーになります。<br>
         * ※数字以外が設定された場合はエラーになります。
         */
        TriggerPrice: number;
        /**
         * 以上／以下<br>
         * ※未設定の場合はエラーになります。<br>
         * ※1、2以外が指定された場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>以下</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>以上</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        UnderOver: number;
        /**
         * ヒット後執行条件<br>
         * ※未設定の場合はエラーになります。<br>
         * ※日通の注文で2以外が指定された場合はエラーになります。<br>
         * ※日中、夜間の注文で1、2以外が指定された場合はエラーになります。<br>
         * ※逆指値（成行）で有効期間条件(TimeInForce)にFAK以外を指定された場合はエラーになります。<br>
         * ※逆指値（指値）で有効期間条件(TimeInForce)にFAS以外を指定された場合はエラーになります。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>1</td>
         *       <td>成行</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>指値</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        AfterHitOrderType: number;
        /**
         * ヒット後注文価格<br>
         * ※未設定の場合はエラーになります。<br>
         * ※数字以外が設定された場合はエラーになります。<br><br>
         * ヒット後執行条件に従い、下記のようにヒット後注文価格を設定してください。
         * <table>
         *   <thead>
         *       <tr>
         *           <th>ヒット後執行条件</th>
         *           <th>設定価格</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>成行</td>
         *       <td>0</td>
         *     </tr>
         *     <tr>
         *       <td>指値</td>
         *       <td>指値の単価</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        AfterHitPrice: number;
      }
    | undefined;
};

export type Positions = {
  /** 返済建玉ID */
  HoldID?: string | undefined;
  /** 返済建玉数量 */
  Qty?: number | undefined;
};

export type PositionsDeriv = {
  /** 返済建玉ID */
  HoldID?: string | undefined;
  /** 返済建玉数量 */
  Qty?: number | undefined;
};

export type RequestCancelOrder = {
  /** 注文番号<br>sendorderのレスポンスで受け取るOrderID。 */
  OrderId: string;
  /** 注文パスワード */
  Password: string;
};

export type RequestRegister = {
  Symbols?:
    | {
        /** 銘柄コード */
        Symbol?: string | undefined;
        /**
         * 市場コード
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
         *           <td>東証</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>名証</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>福証</td>
         *       </tr>
         *       <tr>
         *           <td>6</td>
         *           <td>札証</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>日通し</td>
         *       </tr>
         *       <tr>
         *           <td>23</td>
         *           <td>日中</td>
         *       </tr>
         *       <tr>
         *           <td>24</td>
         *           <td>夜間</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        Exchange?: number | undefined;
      }[]
    | undefined;
};

export type RequestUnregister = {
  /**
   * ※為替銘柄を登録する場合、銘柄名は"通貨A" + "/" + "通貨B"、市場コードは"300"で指定してください。
   * 例：'Symbol': 'EUR/USD', "Exchange": 300
   */
  Symbols?:
    | {
        /** 銘柄コード */
        Symbol?: string | undefined;
        /**
         * 市場コード
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
         *           <td>東証</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>名証</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>福証</td>
         *       </tr>
         *       <tr>
         *           <td>6</td>
         *           <td>札証</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>日通し</td>
         *       </tr>
         *       <tr>
         *           <td>23</td>
         *           <td>日中</td>
         *       </tr>
         *       <tr>
         *           <td>24</td>
         *           <td>夜間</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        Exchange?: number | undefined;
      }[]
    | undefined;
};

export type TokenSuccess = {
  /** 結果コード<br>0が成功。それ以外はエラーコード。 */
  ResultCode?: number | undefined;
  /** APIトークン */
  Token?: string | undefined;
};

export type OrderSuccess = {
  /** 結果コード<br>0が成功。それ以外はエラーコード。 */
  Result?: number | undefined;
  /** 受付注文番号 */
  OrderId?: string | undefined;
};

export type WalletCashSuccess = {
  /** 現物買付可能額 */
  StockAccountWallet?: number | undefined;
};

export type WalletMarginSuccess = {
  /** 信用新規可能額 */
  MarginAccountWallet?: number | undefined;
  /** 保証金維持率<br>※銘柄指定の場合のみ<br>※銘柄が指定されなかった場合、0.0を返す。 */
  DepositkeepRate?: number | undefined;
  /** 委託保証金率<br>※銘柄指定の場合のみ。<br>※銘柄が指定されなかった場合、Noneを返す。 */
  ConsignmentDepositRate?: number | undefined;
  /** 現金委託保証金率<br>※銘柄指定の場合のみ。<br>※銘柄が指定されなかった場合、Noneを返す。 */
  CashOfConsignmentDepositRate?: number | undefined;
};

export type WalletFutureSuccess = {
  /** 新規建玉可能額 */
  FutureTradeLimit?: number | undefined;
  /** 必要証拠金額<br>※銘柄指定の場合のみ。<br>※銘柄が指定されなかった場合、空を返す。 */
  MarginRequirement?: number | undefined;
};

export type WalletOptionSuccess = {
  /** 買新規建玉可能額 */
  OptionBuyTradeLimit?: number | undefined;
  /** 売新規建玉可能額 */
  OptionSellTradeLimit?: number | undefined;
  /** 必要証拠金額<br>※銘柄指定の場合のみ。<br>※銘柄が指定されなかった場合、空を返す。 */
  MarginRequirement?: number | undefined;
};

/** 下記にあるBIDとASKとは、トレーダー目線から見た場合の値であるため、BidPrice=Sell1のPrice、AskPrice=Buy1のPriceという数値となります。 */
export type BoardSuccess = {
  /** 銘柄コード */
  Symbol?: string | undefined;
  /** 銘柄名 */
  SymbolName?: string | undefined;
  /**
   * 市場コード<br>※株式・先物・オプション銘柄の場合のみ
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
   *           <td>東証</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>名証</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>福証</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>札証</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日通し</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>日中</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>夜間</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange?: number | undefined;
  /** 市場名称<br>※株式・先物・オプション銘柄の場合のみ */
  ExchangeName?: string | undefined;
  /** 現値 */
  CurrentPrice?: number | undefined;
  /** 現値時刻 */
  CurrentPriceTime?: string | undefined;
  /**
   * 現値前値比較
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>0000</td>
   *           <td>事象なし</td>
   *       </tr>
   *       <tr>
   *           <td>0056</td>
   *           <td>変わらず</td>
   *       </tr>
   *       <tr>
   *           <td>0057</td>
   *           <td>UP</td>
   *       </tr>
   *       <tr>
   *           <td>0058</td>
   *           <td>DOWN</td>
   *       </tr>
   *       <tr>
   *           <td>0059</td>
   *           <td>中断板寄り後の初値</td>
   *       </tr>
   *       <tr>
   *           <td>0060</td>
   *           <td>ザラバ引け</td>
   *       </tr>
   *       <tr>
   *           <td>0061</td>
   *           <td>板寄り引け</td>
   *       </tr>
   *       <tr>
   *           <td>0062</td>
   *           <td>中断引け</td>
   *       </tr>
   *       <tr>
   *           <td>0063</td>
   *           <td>ダウン引け</td>
   *       </tr>
   *       <tr>
   *           <td>0064</td>
   *           <td>逆転終値</td>
   *       </tr>
   *       <tr>
   *           <td>0066</td>
   *           <td>特別気配引け</td>
   *       </tr>
   *       <tr>
   *           <td>0067</td>
   *           <td>一時留保引け</td>
   *       </tr>
   *       <tr>
   *           <td>0068</td>
   *           <td>売買停止引け</td>
   *       </tr>
   *       <tr>
   *           <td>0069</td>
   *           <td>サーキットブレーカ引け</td>
   *       </tr>
   *       <tr>
   *           <td>0431</td>
   *           <td>ダイナミックサーキットブレーカ引け</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  CurrentPriceChangeStatus?: string | undefined;
  /**
   * 現値ステータス
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
   *           <td>現値</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>不連続歩み</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>板寄せ</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>システム障害</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>中断</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>売買停止</td>
   *       </tr>
   *       <tr>
   *           <td>7</td>
   *           <td>売買停止・システム停止解除</td>
   *       </tr>
   *       <tr>
   *           <td>8</td>
   *           <td>終値</td>
   *       </tr>
   *       <tr>
   *           <td>9</td>
   *           <td>システム停止</td>
   *       </tr>
   *       <tr>
   *           <td>10</td>
   *           <td>概算値</td>
   *       </tr>
   *       <tr>
   *           <td>11</td>
   *           <td>参考値</td>
   *       </tr>
   *       <tr>
   *           <td>12</td>
   *           <td>サーキットブレイク実施中</td>
   *       </tr>
   *       <tr>
   *           <td>13</td>
   *           <td>システム障害解除</td>
   *       </tr>
   *       <tr>
   *           <td>14</td>
   *           <td>サーキットブレイク解除</td>
   *       </tr>
   *       <tr>
   *           <td>15</td>
   *           <td>中断解除</td>
   *       </tr>
   *       <tr>
   *           <td>16</td>
   *           <td>一時留保中</td>
   *       </tr>
   *       <tr>
   *           <td>17</td>
   *           <td>一時留保解除</td>
   *       </tr>
   *       <tr>
   *           <td>18</td>
   *           <td>ファイル障害</td>
   *       </tr>
   *       <tr>
   *           <td>19</td>
   *           <td>ファイル障害解除</td>
   *       </tr>
   *       <tr>
   *           <td>20</td>
   *           <td>Spread/Strategy</td>
   *       </tr>
   *       <tr>
   *           <td>21</td>
   *           <td>ダイナミックサーキットブレイク発動</td>
   *       </tr>
   *       <tr>
   *           <td>22</td>
   *           <td>ダイナミックサーキットブレイク解除</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>板寄せ約定</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  CurrentPriceStatus?: number | undefined;
  /** 計算用現値 */
  CalcPrice?: number | undefined;
  /** 前日終値 */
  PreviousClose?: number | undefined;
  /** 前日終値日付 */
  PreviousCloseTime?: string | undefined;
  /** 前日比 */
  ChangePreviousClose?: number | undefined;
  /** 騰落率 */
  ChangePreviousClosePer?: number | undefined;
  /** 始値 */
  OpeningPrice?: number | undefined;
  /** 始値時刻 */
  OpeningPriceTime?: string | undefined;
  /** 高値 */
  HighPrice?: number | undefined;
  /** 高値時刻 */
  HighPriceTime?: string | undefined;
  /** 安値 */
  LowPrice?: number | undefined;
  /** 安値時刻 */
  LowPriceTime?: string | undefined;
  /** 売買高<br>※株式・先物・オプション銘柄の場合のみ */
  TradingVolume?: number | undefined;
  /** 売買高時刻<br>※株式・先物・オプション銘柄の場合のみ */
  TradingVolumeTime?: string | undefined;
  /** 売買高加重平均価格（VWAP）<br>※株式・先物・オプション銘柄の場合のみ */
  VWAP?: number | undefined;
  /** 売買代金<br>※株式・先物・オプション銘柄の場合のみ */
  TradingValue?: number | undefined;
  /** 最良売気配数量 ※①<br>※株式・先物・オプション銘柄の場合のみ */
  BidQty?: number | undefined;
  /** 最良売気配値段 ※①<br>※株式・先物・オプション銘柄の場合のみ */
  BidPrice?: number | undefined;
  /** 最良売気配時刻 ※①<br>※株式銘柄の場合のみ */
  BidTime?: string | undefined;
  /**
   * 最良売気配フラグ ※①<br>※株式・先物・オプション銘柄の場合のみ
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>0000</td>
   *           <td>事象なし</td>
   *       </tr>
   *       <tr>
   *           <td>0101</td>
   *           <td>一般気配</td>
   *       </tr>
   *       <tr>
   *           <td>0102</td>
   *           <td>特別気配</td>
   *       </tr>
   *       <tr>
   *           <td>0103</td>
   *           <td>注意気配</td>
   *       </tr>
   *       <tr>
   *           <td>0107</td>
   *           <td>寄前気配</td>
   *       </tr>
   *       <tr>
   *           <td>0108</td>
   *           <td>停止前特別気配</td>
   *       </tr>
   *       <tr>
   *           <td>0109</td>
   *           <td>引け後気配</td>
   *       </tr>
   *       <tr>
   *           <td>0116</td>
   *           <td>寄前気配約定成立ポイントなし</td>
   *       </tr>
   *       <tr>
   *           <td>0117</td>
   *           <td>寄前気配約定成立ポイントあり</td>
   *       </tr>
   *       <tr>
   *           <td>0118</td>
   *           <td>連続約定気配</td>
   *       </tr>
   *       <tr>
   *           <td>0119</td>
   *           <td>停止前の連続約定気配</td>
   *       </tr>
   *       <tr>
   *           <td>0120</td>
   *           <td>買い上がり売り下がり中</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  BidSign?: string | undefined;
  /** 売成行数量<br>※株式銘柄の場合のみ */
  MarketOrderSellQty?: number | undefined;

  /** 売気配数量1本目 */
  Sell1?:
    | {
        /** 時刻<br>※株式銘柄の場合のみ */
        Time?: string | undefined;
        /**
         * 気配フラグ<br>※株式・先物・オプション銘柄の場合のみ
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *       <tr>
         *           <td>0000</td>
         *           <td>事象なし</td>
         *       </tr>
         *       <tr>
         *           <td>0101</td>
         *           <td>一般気配</td>
         *       </tr>
         *       <tr>
         *           <td>0102</td>
         *           <td>特別気配</td>
         *       </tr>
         *       <tr>
         *           <td>0103</td>
         *           <td>注意気配</td>
         *       </tr>
         *       <tr>
         *           <td>0107</td>
         *           <td>寄前気配</td>
         *       </tr>
         *       <tr>
         *           <td>0108</td>
         *           <td>停止前特別気配</td>
         *       </tr>
         *       <tr>
         *           <td>0109</td>
         *           <td>引け後気配</td>
         *       </tr>
         *       <tr>
         *           <td>0116</td>
         *           <td>寄前気配約定成立ポイントなし</td>
         *       </tr>
         *       <tr>
         *           <td>0117</td>
         *           <td>寄前気配約定成立ポイントあり</td>
         *       </tr>
         *       <tr>
         *           <td>0118</td>
         *           <td>連続約定気配</td>
         *       </tr>
         *       <tr>
         *           <td>0119</td>
         *           <td>停止前の連続約定気配</td>
         *       </tr>
         *       <tr>
         *           <td>0120</td>
         *           <td>買い上がり売り下がり中</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        Sign?: string | undefined;
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量2本目 */
  Sell2?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量3本目 */
  Sell3?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量4本目 */
  Sell4?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量5本目 */
  Sell5?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量6本目 */
  Sell6?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量7本目 */
  Sell7?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量8本目 */
  Sell8?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量9本目 */
  Sell9?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 売気配数量10本目 */
  Sell10?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 最良買気配数量 ※①<br>※株式・先物・オプション銘柄の場合のみ */
  AskQty?: number | undefined;
  /** 最良買気配値段 ※①<br>※株式・先物・オプション銘柄の場合のみ */
  AskPrice?: number | undefined;
  /** 最良買気配時刻 ※①<br>※株式銘柄の場合のみ */
  AskTime?: string | undefined;
  /**
   * 最良買気配フラグ ※①<br>※株式・先物・オプション銘柄の場合のみ
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>0000</td>
   *           <td>事象なし</td>
   *       </tr>
   *       <tr>
   *           <td>0101</td>
   *           <td>一般気配</td>
   *       </tr>
   *       <tr>
   *           <td>0102</td>
   *           <td>特別気配</td>
   *       </tr>
   *       <tr>
   *           <td>0103</td>
   *           <td>注意気配</td>
   *       </tr>
   *       <tr>
   *           <td>0107</td>
   *           <td>寄前気配</td>
   *       </tr>
   *       <tr>
   *           <td>0108</td>
   *           <td>停止前特別気配</td>
   *       </tr>
   *       <tr>
   *           <td>0109</td>
   *           <td>引け後気配</td>
   *       </tr>
   *       <tr>
   *           <td>0116</td>
   *           <td>寄前気配約定成立ポイントなし</td>
   *       </tr>
   *       <tr>
   *           <td>0117</td>
   *           <td>寄前気配約定成立ポイントあり</td>
   *       </tr>
   *       <tr>
   *           <td>0118</td>
   *           <td>連続約定気配</td>
   *       </tr>
   *       <tr>
   *           <td>0119</td>
   *           <td>停止前の連続約定気配</td>
   *       </tr>
   *       <tr>
   *           <td>0120</td>
   *           <td>買い上がり売り下がり中</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  AskSign?: string | undefined;
  /** 買成行数量<br>※株式銘柄の場合のみ */
  MarketOrderBuyQty?: number | undefined;

  /** 買気配数量1本目 */
  Buy1?:
    | {
        /** 時刻<br>※株式銘柄の場合のみ */
        Time?: string | undefined;
        /**
         * 気配フラグ<br>※株式・先物・オプション銘柄の場合のみ
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *       <tr>
         *           <td>0000</td>
         *           <td>事象なし</td>
         *       </tr>
         *       <tr>
         *           <td>0101</td>
         *           <td>一般気配</td>
         *       </tr>
         *       <tr>
         *           <td>0102</td>
         *           <td>特別気配</td>
         *       </tr>
         *       <tr>
         *           <td>0103</td>
         *           <td>注意気配</td>
         *       </tr>
         *       <tr>
         *           <td>0107</td>
         *           <td>寄前気配</td>
         *       </tr>
         *       <tr>
         *           <td>0108</td>
         *           <td>停止前特別気配</td>
         *       </tr>
         *       <tr>
         *           <td>0109</td>
         *           <td>引け後気配</td>
         *       </tr>
         *       <tr>
         *           <td>0116</td>
         *           <td>寄前気配約定成立ポイントなし</td>
         *       </tr>
         *       <tr>
         *           <td>0117</td>
         *           <td>寄前気配約定成立ポイントあり</td>
         *       </tr>
         *       <tr>
         *           <td>0118</td>
         *           <td>連続約定気配</td>
         *       </tr>
         *       <tr>
         *           <td>0119</td>
         *           <td>停止前の連続約定気配</td>
         *       </tr>
         *       <tr>
         *           <td>0120</td>
         *           <td>買い上がり売り下がり中</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        Sign?: string | undefined;
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量2本目 */
  Buy2?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量3本目 */
  Buy3?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量4本目 */
  Buy4?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量5本目 */
  Buy5?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量6本目 */
  Buy6?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量7本目 */
  Buy7?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量8本目 */
  Buy8?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量9本目 */
  Buy9?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** 買気配数量10本目 */
  Buy10?:
    | {
        /** 値段<br>※株式・先物・オプション銘柄の場合のみ */
        Price?: number | undefined;
        /** 数量<br>※株式・先物・オプション銘柄の場合のみ */
        Qty?: number | undefined;
      }
    | undefined;

  /** OVER気配数量<br>※株式銘柄の場合のみ */
  OverSellQty?: number | undefined;
  /** UNDER気配数量<br>※株式銘柄の場合のみ */
  UnderBuyQty?: number | undefined;
  /** 時価総額<br>※株式銘柄の場合のみ */
  TotalMarketValue?: number | undefined;
  /** 清算値<br>※先物銘柄の場合のみ */
  ClearingPrice?: number | undefined;
  /** インプライド・ボラティリティ<br>※オプション銘柄かつ日通しの場合のみ */
  IV?: number | undefined;
  /** ガンマ<br>※オプション銘柄かつ日通しの場合のみ */
  Gamma?: number | undefined;
  /** セータ<br>※オプション銘柄かつ日通しの場合のみ */
  Theta?: number | undefined;
  /** ベガ<br>※オプション銘柄かつ日通しの場合のみ */
  Vega?: number | undefined;
  /** デルタ<br>※オプション銘柄かつ日通しの場合のみ */
  Delta?: number | undefined;
  /**
   * 銘柄種別
   * <table>
   *   <thead>
   *     <tr>
   *       <th>定義値</th>
   *       <th>説明</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td>0</td>
   *       <td>指数</td>
   *     </tr>
   *     <tr>
   *       <td>1</td>
   *       <td>現物</td>
   *     </tr>
   *     <tr>
   *       <td>101</td>
   *       <td>日経225先物</td>
   *     </tr>
   *     <tr>
   *       <td>103</td>
   *       <td>日経225OP</td>
   *     </tr>
   *     <tr>
   *       <td>107</td>
   *       <td>TOPIX先物</td>
   *     </tr>
   *     <tr>
   *       <td>121</td>
   *       <td>JPX400先物</td>
   *     </tr>
   *     <tr>
   *       <td>144</td>
   *       <td>NYダウ</td>
   *     </tr>
   *     <tr>
   *       <td>145</td>
   *       <td>日経平均VI</td>
   *     </tr>
   *     <tr>
   *       <td>154</td>
   *       <td>東証マザーズ指数先物</td>
   *     </tr>
   *     <tr>
   *       <td>155</td>
   *       <td>TOPIX_REIT</td>
   *     </tr>
   *     <tr>
   *       <td>171</td>
   *       <td>TOPIX CORE30</td>
   *     </tr>
   *     <tr>
   *       <td>901</td>
   *       <td>日経平均225ミニ先物</td>
   *     </tr>
   *     <tr>
   *       <td>907</td>
   *       <td>TOPIXミニ先物</td>
   *     </tr>
   *   </tbody>
   * </table>
   */
  SecurityType?: number | undefined;
};

export type RegistSuccess = {
  /** 現在登録されている銘柄のリスト */
  RegistList?:
    | {
        /** 銘柄コード */
        Symbol?: string | undefined;
        /**
         * 市場コード
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
         *           <td>東証</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>名証</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>福証</td>
         *       </tr>
         *       <tr>
         *           <td>6</td>
         *           <td>札証</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>日通し</td>
         *       </tr>
         *       <tr>
         *           <td>23</td>
         *           <td>日中</td>
         *       </tr>
         *       <tr>
         *           <td>24</td>
         *           <td>夜間</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        Exchange?: number | undefined;
      }[]
    | undefined;
};

export type UnregisterAllSuccess = {};

export type SymbolSuccess = {
  /** 銘柄コード */
  Symbol?: string | undefined;
  /** 銘柄名 */
  SymbolName?: string | undefined;
  /** 銘柄略称<br>※株式・先物・オプション銘柄の場合のみ */
  DisplayName?: string | undefined;
  /**
   * 市場コード<br>※株式・先物・オプション銘柄の場合のみ
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
   *           <td>東証</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>名証</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>福証</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>札証</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日通し</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>日中</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>夜間</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange?: number | undefined;
  /** 市場名称<br>※株式・先物・オプション銘柄の場合のみ */
  ExchangeName?: string | undefined;
  /**
   * 業種コード名<br>※株式銘柄の場合のみ
   * <table>
   *   <thead>
   *       <tr>
   *           <th>定義値</th>
   *           <th>説明</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>0050</td>
   *           <td>水産・農林業</td>
   *       </tr>
   *       <tr>
   *           <td>1050</td>
   *           <td>鉱業</td>
   *       </tr>
   *       <tr>
   *           <td>2050</td>
   *           <td>建設業</td>
   *       </tr>
   *       <tr>
   *           <td>3050</td>
   *           <td>食料品</td>
   *       </tr>
   *       <tr>
   *           <td>3100</td>
   *           <td>繊維製品</td>
   *       </tr>
   *       <tr>
   *           <td>3150</td>
   *           <td>パルプ・紙</td>
   *       </tr>
   *       <tr>
   *           <td>3200</td>
   *           <td>化学</td>
   *       </tr>
   *       <tr>
   *           <td>3250</td>
   *           <td>医薬品</td>
   *       </tr>
   *       <tr>
   *           <td>3300</td>
   *           <td>石油・石炭製品</td>
   *       </tr>
   *       <tr>
   *           <td>3350</td>
   *           <td>ゴム製品</td>
   *       </tr>
   *       <tr>
   *           <td>3400</td>
   *           <td>ガラス・土石製品</td>
   *       </tr>
   *       <tr>
   *           <td>3450</td>
   *           <td>鉄鋼</td>
   *       </tr>
   *       <tr>
   *           <td>3500</td>
   *           <td>非鉄金属</td>
   *       </tr>
   *       <tr>
   *           <td>3550</td>
   *           <td>金属製品</td>
   *       </tr>
   *       <tr>
   *           <td>3600</td>
   *           <td>機械</td>
   *       </tr>
   *       <tr>
   *           <td>3650</td>
   *           <td>電気機器</td>
   *       </tr>
   *       <tr>
   *           <td>3700</td>
   *           <td>輸送用機器</td>
   *       </tr>
   *       <tr>
   *           <td>3750</td>
   *           <td>精密機器</td>
   *       </tr>
   *       <tr>
   *           <td>3800</td>
   *           <td>その他製品</td>
   *       </tr>
   *       <tr>
   *           <td>4050</td>
   *           <td>電気・ガス業</td>
   *       </tr>
   *       <tr>
   *           <td>5050</td>
   *           <td>陸運業</td>
   *       </tr>
   *       <tr>
   *           <td>5100</td>
   *           <td>海運業</td>
   *       </tr>
   *       <tr>
   *           <td>5150</td>
   *           <td>空運業</td>
   *       </tr>
   *       <tr>
   *           <td>5200</td>
   *           <td>倉庫・運輸関連業</td>
   *       </tr>
   *       <tr>
   *           <td>5250</td>
   *           <td>情報・通信業</td>
   *       </tr>
   *       <tr>
   *           <td>6050</td>
   *           <td>卸売業</td>
   *       </tr>
   *       <tr>
   *           <td>6100</td>
   *           <td>小売業</td>
   *       </tr>
   *       <tr>
   *           <td>7050</td>
   *           <td>銀行業</td>
   *       </tr>
   *       <tr>
   *           <td>7100</td>
   *           <td>証券、商品先物取引業</td>
   *       </tr>
   *       <tr>
   *           <td>7150</td>
   *           <td>保険業</td>
   *       </tr>
   *       <tr>
   *           <td>7200</td>
   *           <td>その他金融業</td>
   *       </tr>
   *       <tr>
   *           <td>8050</td>
   *           <td>不動産業</td>
   *       </tr>
   *       <tr>
   *           <td>9050</td>
   *           <td>サービス業</td>
   *       </tr>
   *       <tr>
   *           <td>9999</td>
   *           <td>その他</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  BisCategory?: string | undefined;
  /** 時価総額<br>※株式銘柄の場合のみ<br>追加情報出力フラグ：falseの場合、null */
  TotalMarketValue?: number | undefined;
  /** 発行済み株式数（千株）<br>※株式銘柄の場合のみ<br>追加情報出力フラグ：falseの場合、null */
  TotalStocks?: number | undefined;
  /** 売買単位<br>※株式・先物・オプション銘柄の場合のみ */
  TradingUnit?: number | undefined;
  /** 決算期日<br>※株式銘柄の場合のみ<br>追加情報出力フラグ：falseの場合、null */
  FiscalYearEndBasic?: number | undefined;
  /**
   * 呼値グループ<br>
   * ※株式・先物・オプション銘柄の場合のみ<br>
   * ※各呼値コードが対応する商品は以下となります。<BR>
   * 　株式の呼値の単位の詳細は [JPXページ](https://www.jpx.co.jp/equities/trading/domestic/07.html) をご覧ください。<BR>
   * 　10000：株式(TOPIX100採用銘柄以外)　<br>
   * 　10003：株式(TOPIX100採用銘柄)<br>
   * 　10118 : 日経平均先物<br>
   * 　10119 : 日経225mini<br>
   * 　10318 : 日経平均オプション<br>
   * 　10706 : ﾐﾆTOPIX先物<br>
   * 　10718 : TOPIX先物<br>
   * 　12122 : JPX日経400指数先物<br>
   * 　14473 : NYダウ先物<br>
   * 　14515 : 日経平均VI先物<br>
   * 　15411 : 東証マザーズ指数先物<br>
   * 　15569 : 東証REIT指数先物<br>
   * 　17163 : TOPIXCore30指数先物<br>
   * <table>
   *   <thead>
   *       <tr>
   *           <th>呼値コード</th>
   *           <th>値段の水準</th>
   *           <th>呼値単位</th>
   *       </tr>
   *   </thead>
   *   <tbody>
   *       <tr>
   *           <td>10000</td>
   *           <td>3000円以下</td>
   *           <td>1</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>5000円以下</td>
   *           <td>5</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>30000円以下</td>
   *           <td>10</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>50000円以下</td>
   *           <td>50</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>300000円以下</td>
   *           <td>100</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>500000円以下</td>
   *           <td>500</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>3000000円以下</td>
   *           <td>1000</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>5000000円以下</td>
   *           <td>5000</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>30000000円以下</td>
   *           <td>10000</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>50000000円以下</td>
   *           <td>50000</td>
   *       </tr>
   *       <tr>
   *           <td>10000</td>
   *           <td>50000000円超</td>
   *           <td>100000</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>1000円以下</td>
   *           <td>0.1</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>3000円以下</td>
   *           <td>0.5</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>10000円以下</td>
   *           <td>1</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>30000円以下</td>
   *           <td>5</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>100000円以下</td>
   *           <td>10</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>300000円以下</td>
   *           <td>50</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>1000000円以下</td>
   *           <td>100</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>3000000円以下</td>
   *           <td>500</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>10000000円以下</td>
   *           <td>1000</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>30000000円以下</td>
   *           <td>5000</td>
   *       </tr>
   *       <tr>
   *           <td>10003</td>
   *           <td>30000000円超</td>
   *           <td>10000</td>
   *       </tr>
   *       <tr>
   *           <td>10118</td>
   *           <td>-</td>
   *           <td>10</td>
   *       </tr>
   *       <tr>
   *           <td>10119</td>
   *           <td>-</td>
   *           <td>5</td>
   *       </tr>
   *       <tr>
   *           <td>10318</td>
   *           <td>100円以下</td>
   *           <td>1</td>
   *       </tr>
   *       <tr>
   *           <td>10318</td>
   *           <td>1000円以下</td>
   *           <td>5</td>
   *       </tr>
   *       <tr>
   *           <td>10318</td>
   *           <td>1000円超</td>
   *           <td>10</td>
   *       </tr>
   *       <tr>
   *           <td>10706</td>
   *           <td>-</td>
   *           <td>0.25</td>
   *       </tr>
   *       <tr>
   *           <td>10718</td>
   *           <td>-</td>
   *           <td>0.5</td>
   *       </tr>
   *       <tr>
   *           <td>12122</td>
   *           <td>-</td>
   *           <td>5</td>
   *       </tr>
   *       <tr>
   *           <td>14473</td>
   *           <td>-</td>
   *           <td>1</td>
   *       </tr>
   *       <tr>
   *           <td>14515</td>
   *           <td>-</td>
   *           <td>0.05</td>
   *       </tr>
   *       <tr>
   *           <td>15411</td>
   *           <td>-</td>
   *           <td>1</td>
   *       </tr>
   *       <tr>
   *           <td>15569</td>
   *           <td>-</td>
   *           <td>0.5</td>
   *       </tr>
   *       <tr>
   *           <td>17163</td>
   *           <td>-</td>
   *           <td>0.5</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  PriceRangeGroup?: string | undefined;
  /** 一般信用買建フラグ<br>※trueのとき、一般信用(長期)または一般信用(デイトレ)が買建可能<br>※株式銘柄の場合のみ */
  KCMarginBuy?: boolean | undefined;
  /** 一般信用売建フラグ<br>※trueのとき、一般信用(長期)または一般信用(デイトレ)が売建可能<br>※株式銘柄の場合のみ */
  KCMarginSell?: boolean | undefined;
  /** 制度信用買建フラグ<br>※trueのとき制度信用買建可能<br>※株式銘柄の場合のみ */
  MarginBuy?: boolean | undefined;
  /** 制度信用売建フラグ<br>※trueのとき制度信用売建可能<br>※株式銘柄の場合のみ */
  MarginSell?: boolean | undefined;
  /** 値幅上限<br>※株式・先物・オプション銘柄の場合のみ */
  UpperLimit?: number | undefined;
  /** 値幅下限<br>※株式・先物・オプション銘柄の場合のみ */
  LowerLimit?: number | undefined;
  /**
   * 原資産コード<br>※先物・オプション銘柄の場合のみ
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
   *           <td>日経225</td>
   *       </tr>
   *       <tr>
   *           <td>NK300</td>
   *           <td>日経300</td>
   *       </tr>
   *       <tr>
   *           <td>MOTHERS</td>
   *           <td>東証マザーズ</td>
   *       </tr>
   *       <tr>
   *           <td>JPX400</td>
   *           <td>JPX日経400</td>
   *       </tr>
   *       <tr>
   *           <td>TOPIX</td>
   *           <td>TOPIX</td>
   *       </tr>
   *       <tr>
   *           <td>NKVI</td>
   *           <td>日経平均VI</td>
   *       </tr>
   *       <tr>
   *           <td>DJIA</td>
   *           <td>NYダウ</td>
   *       </tr>
   *       <tr>
   *           <td>TSEREITINDEX</td>
   *           <td>東証REIT指数</td>
   *       </tr>
   *       <tr>
   *           <td>TOPIXCORE30</td>
   *           <td>TOPIX Core30</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Underlyer?: string | undefined;
  /** 限月-年月<br>※「限月-年月」は「年(yyyy)/月(MM)」で表示します。<br>※先物・オプション銘柄の場合のみ */
  DerivMonth?: string | undefined;
  /** 取引開始日<br>※先物・オプション銘柄の場合のみ */
  TradeStart?: number | undefined;
  /** 取引終了日<br>※先物・オプション銘柄の場合のみ */
  TradeEnd?: number | undefined;
  /** 権利行使価格<br>※オプション銘柄の場合のみ */
  StrikePrice?: number | undefined;
  /**
   * プット/コール区分<br>※オプション銘柄の場合のみ
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
   *           <td>プット</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>コール</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  PutOrCall?: number | undefined;
  /** 清算値<br>※先物銘柄の場合のみ<br>追加情報出力フラグ：falseの場合、null */
  ClearingPrice?: number | undefined;
};

export type OrdersSuccess = {
  /** 注文番号 */
  ID?: string | undefined;
  /**
   * 状態
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
  State?: number | undefined;
  /**
   * 注文状態
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
  OrderState?: number | undefined;
  /**
   * 執行条件
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
   *           <td>ザラバ</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>寄り</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>引け</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>不成</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>対当指値</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>IOC</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  OrdType?: number | undefined;
  /** 受注日時 */
  RecvTime?: string | undefined;
  /** 銘柄コード */
  Symbol?: string | undefined;
  /** 銘柄名 */
  SymbolName?: string | undefined;
  /**
   * 市場コード
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
   *           <td>東証</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>名証</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>福証</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>札証</td>
   *       </tr>
   *       <tr>
   *           <td>9</td>
   *           <td>SOR</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日通し</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>日中</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>夜間</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange?: number | undefined;
  /** 市場名 */
  ExchangeName?: string | undefined;
  /**
   * 有効期間条件<br>※先物・オプション銘柄の場合のみ
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
   *           <td>FAS</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>FAK</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>FOK</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  TimeInForce?: number | undefined;
  /** 値段 */
  Price?: number | undefined;
  /**
   * 発注数量<br>
   * ※注文期限切れと失効の場合、OrderQtyはゼロになりません。<br>
   * ※期限切れと失効の確認方法としては、DetailsのRecType（3: 期限切れ、7: 失効）にてご確認ください。
   */
  OrderQty?: number | undefined;
  /** 約定数量 */
  CumQty?: number | undefined;
  /**
   * 売買区分
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
  Side?: string | undefined;
  /**
   * 取引区分
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
  CashMargin?: number | undefined;
  /**
   * 口座種別
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
   *           <td>一般</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>特定</td>
   *       </tr>
   *       <tr>
   *           <td>12</td>
   *           <td>法人</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  AccountType?: number | undefined;
  /**
   * 受渡区分
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
   *           <td>自動振替</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>お預り金</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  DelivType?: number | undefined;
  /** 注文有効期限<br>yyyyMMdd形式 */
  ExpireDay?: number | undefined;
  /**
   * 信用取引区分<br>
   * ※信用を注文した際に表示されます。
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
   *           <td>制度信用</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>一般信用（長期）</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>一般信用（デイトレ）</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  MarginTradeType?: number | undefined;
  /**
   * プレミアム料<br>
   * ※（注文中数量＋約定済数量）×１株あたりプレミアム料として計算されます。<br>
   * ※信用を注文した際に表示されます。<br>
   * ※制度信用売/買、一般（長期）買、一般（デイトレ）買の場合は、Noneと返されます。<br>
   * 一般（長期）売、一般（デイトレ）売の場合は、プレミアム料=0の場合、0（ゼロ）と返されます。
   */
  MarginPremium?: number | undefined;
  /** 注文詳細 */
  Details?:
    | {
        /** ※注文明細レコードの生成順序です。<br>※通番であるとは限りませんが、大小による順序は保たれています。 */
        SeqNum?: number | undefined;
        /** 注文詳細番号 */
        ID?: string | undefined;
        /**
         * 明細種別
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
         *           <td>受付</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>繰越</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>期限切れ</td>
         *       </tr>
         *       <tr>
         *           <td>4</td>
         *           <td>発注</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>訂正</td>
         *       </tr>
         *       <tr>
         *           <td>6</td>
         *           <td>取消</td>
         *       </tr>
         *       <tr>
         *           <td>7</td>
         *           <td>失効</td>
         *       </tr>
         *       <tr>
         *           <td>8</td>
         *           <td>約定</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        RecType?: number | undefined;
        /** 取引所番号 */
        ExchangeID?: string | undefined;
        /**
         * 状態
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
         *           <td>処理中（発注送信中・訂正送信中・取消送信中）</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>処理済（発注済・訂正済・取消済・全約定・期限切れ）</td>
         *       </tr>
         *       <tr>
         *           <td>4</td>
         *           <td>エラー</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>削除済み</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        State?: number | undefined;
        /** 処理時刻 */
        TransactTime?: string | undefined;
        /**
         * 執行条件
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
         *           <td>ザラバ</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>寄り</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>引け</td>
         *       </tr>
         *       <tr>
         *           <td>4</td>
         *           <td>不成</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>対当指値</td>
         *       </tr>
         *       <tr>
         *           <td>6</td>
         *           <td>IOC</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        OrdType?: number | undefined;
        /** 値段 */
        Price?: number | undefined;
        /** 数量 */
        Qty?: number | undefined;
        /** 約定番号 */
        ExecutionID?: string | undefined;
        /** 約定日時 */
        ExecutionDay?: string | undefined;
        /** 受渡日 */
        DelivDay?: number | undefined;
        /** 手数料<br>※注文詳細の明細種別が約定（RecType=8)の場合に設定。 */
        Commission?: number | undefined;
        /** 手数料消費税<br>※明細種別は約定（RecType=8）の場合にのみ表示されます。 */
        CommissionTax?: number | undefined;
      }[]
    | undefined;
};

export type PositionsSuccess = {
  /** 約定番号<br>※現物取引では、nullが返ります。 */
  ExecutionID?: string | undefined;
  /**
   * 口座種別
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
   *           <td>一般</td>
   *       </tr>
   *       <tr>
   *           <td>4</td>
   *           <td>特定</td>
   *       </tr>
   *       <tr>
   *           <td>12</td>
   *           <td>法人</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  AccountType?: number | undefined;
  /** 銘柄コード */
  Symbol?: string | undefined;
  /** 銘柄名 */
  SymbolName?: string | undefined;
  /**
   * 市場コード
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
   *           <td>東証</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>名証</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>福証</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>札証</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>日通し</td>
   *       </tr>
   *       <tr>
   *           <td>23</td>
   *           <td>日中</td>
   *       </tr>
   *       <tr>
   *           <td>24</td>
   *           <td>夜間</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  Exchange?: number | undefined;
  /** 市場名 */
  ExchangeName?: string | undefined;
  /** 銘柄種別<br>※先物・オプション銘柄の場合のみ */
  SecurityType?: number | undefined;
  /** 約定日（建玉日）<br>※信用・先物・オプションの場合のみ<br>※現物取引では、nullが返ります。 */
  ExecutionDay?: number | undefined;
  /** 値段 */
  Price?: number | undefined;
  /** 残数量（保有数量） */
  LeavesQty?: number | undefined;
  /** 拘束数量（返済のために拘束されている数量） */
  HoldQty?: number | undefined;
  /**
   * 売買区分
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
  Side?: string | undefined;
  /** 諸経費<br>※信用・先物・オプションの場合のみ */
  Expenses?: number | undefined;
  /** 手数料<br>※信用・先物・オプションの場合のみ */
  Commission?: number | undefined;
  /** 手数料消費税<br>※信用・先物・オプションの場合のみ */
  CommissionTax?: number | undefined;
  /** 返済期日<br>※信用・先物・オプションの場合のみ */
  ExpireDay?: number | undefined;
  /**
   * 信用取引区分<br>※信用の場合のみ
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
   *           <td>制度信用</td>
   *       </tr>
   *       <tr>
   *           <td>2</td>
   *           <td>一般信用（長期）</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>一般信用（デイトレ）</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  MarginTradeType?: number | undefined;
  /** 現在値<br>追加情報出力フラグ：falseの場合、null */
  CurrentPrice?: number | undefined;
  /** 評価金額<br>追加情報出力フラグ：falseの場合、null */
  Valuation?: number | undefined;
  /** 評価損益額<br>追加情報出力フラグ：falseの場合、null */
  ProfitLoss?: number | undefined;
  /** 評価損益率<br>追加情報出力フラグ：falseの場合、null */
  ProfitLossRate?: number | undefined;
};

export type SymbolNameSuccess = {
  /** 銘柄コード */
  Symbol?: string | undefined;
  /** 銘柄名称 */
  SymbolName?: string | undefined;
};

export type RankingDefaultResponse = {
  /** 種別 */
  Type?: string | undefined;
  /** 市場 */
  ExchangeDivision?: string | undefined;
  /** ランキング */
  Ranking?:
    | {
        /** 順位<br>※ランキング内で同じ順位が返却される場合があります（10位が2件など） */
        No?: number | undefined;
        /**
         * トレンド
         * <table>
         *     <thead>
         *         <tr>
         *             <th>定義値</th>
         *             <th>内容</th>
         *         </tr>
         *     </thead>
         *     <tbody>
         *         <tr>
         *             <td>0</td>
         *             <td>対象データ無し</td>
         *         </tr>
         *         <tr>
         *             <td>1</td>
         *             <td>過去10営業日より20位以上上昇</td>
         *         </tr>
         *         <tr>
         *             <td>2</td>
         *             <td>過去10営業日より1～19位上昇</td>
         *         </tr>
         *         <tr>
         *             <td>3</td>
         *             <td>過去10営業日と変わらず</td>
         *         </tr>
         *         <tr>
         *             <td>4</td>
         *             <td>過去10営業日より1～19位下落</td>
         *         </tr>
         *         <tr>
         *             <td>5</td>
         *             <td>過去10営業日より20位以上下落</td>
         *         </tr>
         *     </tbody>
         * </table>
         */
        Trend?: string | undefined;
        /** 平均順位<br>※100位以下は「999」となります */
        AverageRanking?: number | undefined;
        /** 銘柄コード */
        Symbol?: string | undefined;
        /** 銘柄名称 */
        SymbolName?: string | undefined;
        /** 現在値 */
        CurrentPrice?: number | undefined;
        /** 前日比 */
        ChangeRatio?: number | undefined;
        /** 騰落率（%） */
        ChangePercentage?: number | undefined;
        /** 時刻<br>HH:mm<br>※日付は返しません */
        CurrentPriceTime?: string | undefined;
        /** 売買高<br>売買高を千株単位で表示する<br>※百株の位を四捨五入 */
        TradingVolume?: number | undefined;
        /** 売買代金<br>売買代金を百万円単位で表示する<br>※十万円の位を四捨五入 */
        Turnover?: number | undefined;
        /** 市場名 */
        ExchangeName?: string | undefined;
        /** 業種名 */
        CategoryName?: string | undefined;
      }[]
    | undefined;
};

export type RankingByTickCountResponse = {
  /** 種別 */
  Type?: string | undefined;
  /** 市場 */
  ExchangeDivision?: string | undefined;
  /** ランキング */
  Ranking?:
    | {
        /** 順位<br>※ランキング内で同じ順位が返却される場合があります（10位が2件など） */
        No?: number | undefined;
        /**
         * トレンド
         * <table>
         *     <thead>
         *         <tr>
         *             <th>定義値</th>
         *             <th>内容</th>
         *         </tr>
         *     </thead>
         *     <tbody>
         *         <tr>
         *             <td>0</td>
         *             <td>対象データ無し</td>
         *         </tr>
         *         <tr>
         *             <td>1</td>
         *             <td>過去10営業日より20位以上上昇</td>
         *         </tr>
         *         <tr>
         *             <td>2</td>
         *             <td>過去10営業日より1～19位上昇</td>
         *         </tr>
         *         <tr>
         *             <td>3</td>
         *             <td>過去10営業日と変わらず</td>
         *         </tr>
         *         <tr>
         *             <td>4</td>
         *             <td>過去10営業日より1～19位下落</td>
         *         </tr>
         *         <tr>
         *             <td>5</td>
         *             <td>過去10営業日より20位以上下落</td>
         *         </tr>
         *     </tbody>
         * </table>
         */
        Trend?: string | undefined;
        /** 平均順位<br>※100位以下は「999」となります */
        AverageRanking?: number | undefined;
        /** 銘柄コード */
        Symbol?: string | undefined;
        /** 銘柄名称 */
        SymbolName?: string | undefined;
        /** 現在値 */
        CurrentPrice?: number | undefined;
        /** 前日比 */
        ChangeRatio?: number | undefined;
        /** TICK回数 */
        TickCount?: number | undefined;
        /** UP */
        UpCount?: number | undefined;
        /** DOWN */
        DownCount?: number | undefined;
        /** 騰落率（%） */
        ChangePercentage?: number | undefined;
        /** 売買高<br>売買高を千株単位で表示する<br>※百株の位を四捨五入 */
        TradingVolume?: number | undefined;
        /** 売買代金<br>売買代金を百万円単位で表示する<br>※十万円の位を四捨五入 */
        Turnover?: number | undefined;
        /** 市場名 */
        ExchangeName?: string | undefined;
        /** 業種名 */
        CategoryName?: string | undefined;
      }[]
    | undefined;
};

export type RankingByTradeVolumeResponse = {
  /** 種別 */
  Type?: string | undefined;
  /** 市場 */
  ExchangeDivision?: string | undefined;
  /** ランキング */
  Ranking?:
    | {
        /** 順位<br>※ランキング内で同じ順位が返却される場合があります（10位が2件など） */
        No?: number | undefined;
        /**
         * トレンド
         * <table>
         *     <thead>
         *         <tr>
         *             <th>定義値</th>
         *             <th>内容</th>
         *         </tr>
         *     </thead>
         *     <tbody>
         *         <tr>
         *             <td>0</td>
         *             <td>対象データ無し</td>
         *         </tr>
         *         <tr>
         *             <td>1</td>
         *             <td>過去10営業日より20位以上上昇</td>
         *         </tr>
         *         <tr>
         *             <td>2</td>
         *             <td>過去10営業日より1～19位上昇</td>
         *         </tr>
         *         <tr>
         *             <td>3</td>
         *             <td>過去10営業日と変わらず</td>
         *         </tr>
         *         <tr>
         *             <td>4</td>
         *             <td>過去10営業日より1～19位下落</td>
         *         </tr>
         *         <tr>
         *             <td>5</td>
         *             <td>過去10営業日より20位以上下落</td>
         *         </tr>
         *     </tbody>
         * </table>
         */
        Trend?: string | undefined;
        /** 平均順位<br>※100位以下は「999」となります */
        AverageRanking?: number | undefined;
        /** 銘柄コード */
        Symbol?: string | undefined;
        /** 銘柄名称 */
        SymbolName?: string | undefined;
        /** 現在値 */
        CurrentPrice?: number | undefined;
        /** 前日比 */
        ChangeRatio?: number | undefined;
        /** 売買高急増（％） */
        RapidTradePercentage?: number | undefined;
        /** 売買高<br>売買高を千株単位で表示する<br>※百株の位を四捨五入 */
        TradingVolume?: number | undefined;
        /** 時刻<br>HH:mm<br>※日付は返しません */
        CurrentPriceTime?: string | undefined;
        /** 騰落率（%） */
        ChangePercentage?: number | undefined;
        /** 市場名 */
        ExchangeName?: string | undefined;
        /** 業種名 */
        CategoryName?: string | undefined;
      }[]
    | undefined;
};

export type RankingByTradeValueResponse = {
  /** 種別 */
  Type?: string | undefined;
  /** 市場 */
  ExchangeDivision?: string | undefined;
  /** ランキング */
  Ranking?:
    | {
        /** 順位<br>※ランキング内で同じ順位が返却される場合があります（10位が2件など） */
        No?: number | undefined;
        /**
         * トレンド
         * <table>
         *     <thead>
         *         <tr>
         *             <th>定義値</th>
         *             <th>内容</th>
         *         </tr>
         *     </thead>
         *     <tbody>
         *         <tr>
         *             <td>0</td>
         *             <td>対象データ無し</td>
         *         </tr>
         *         <tr>
         *             <td>1</td>
         *             <td>過去10営業日より20位以上上昇</td>
         *         </tr>
         *         <tr>
         *             <td>2</td>
         *             <td>過去10営業日より1～19位上昇</td>
         *         </tr>
         *         <tr>
         *             <td>3</td>
         *             <td>過去10営業日と変わらず</td>
         *         </tr>
         *         <tr>
         *             <td>4</td>
         *             <td>過去10営業日より1～19位下落</td>
         *         </tr>
         *         <tr>
         *             <td>5</td>
         *             <td>過去10営業日より20位以上下落</td>
         *         </tr>
         *     </tbody>
         * </table>
         */
        Trend?: string | undefined;
        /** 平均順位<br>※100位以下は「999」となります */
        AverageRanking?: number | undefined;
        /** 銘柄コード */
        Symbol?: string | undefined;
        /** 銘柄名称 */
        SymbolName?: string | undefined;
        /** 現在値 */
        CurrentPrice?: number | undefined;
        /** 前日比 */
        ChangeRatio?: number | undefined;
        /** 代金急増（％） */
        RapidPaymentPercentage?: number | undefined;
        /** 売買代金<br>売買代金を百万円単位で表示する<br>※十万円の位を四捨五入 */
        Turnover?: number | undefined;
        /** 時刻<br>HH:mm<br>※日付は返しません */
        CurrentPriceTime?: string | undefined;
        /** 騰落率（%） */
        ChangePercentage?: number | undefined;
        /** 市場名 */
        ExchangeName?: string | undefined;
        /** 業種名 */
        CategoryName?: string | undefined;
      }[]
    | undefined;
};

export type RankingByMarginResponse = {
  /** 種別 */
  Type?: string | undefined;
  /** 市場 */
  ExchangeDivision?: string | undefined;
  /** ランキング */
  Ranking?:
    | {
        /** 順位<br>※ランキング内で同じ順位が返却される場合があります（10位が2件など） */
        No?: number | undefined;
        /** 銘柄コード */
        Symbol?: string | undefined;
        /** 銘柄名称 */
        SymbolName?: string | undefined;
        /** 売残（千株） */
        SellRapidPaymentPercentage?: number | undefined;
        /** 売残前週比 */
        SellLastWeekRatio?: number | undefined;
        /** 買残（千株） */
        BuyRapidPaymentPercentage?: number | undefined;
        /** 買残前週比 */
        BuyLastWeekRatio?: number | undefined;
        /** 倍率 */
        Ratio?: number | undefined;
        /** 市場名 */
        ExchangeName?: string | undefined;
        /** 業種名 */
        CategoryName?: string | undefined;
      }[]
    | undefined;
};

export type RankingByCategoryResponse = {
  /** 種別<br> ※業種別値上がり率、業種別値下がり率の場合、市場は「null」になります */
  Type?: string | undefined;
  /** 市場 */
  ExchangeDivision?: string | undefined;
  /** ランキング */
  Ranking?:
    | {
        /** 順位<br>※ランキング内で同じ順位が返却される場合があります（10位が2件など） */
        No?: number | undefined;
        /**
         * トレンド
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>内容</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *       <tr>
         *           <td>0</td>
         *           <td>対象データ無し</td>
         *       </tr>
         *       <tr>
         *           <td>1</td>
         *           <td>過去10営業日より20位以上上昇</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>過去10営業日より1～19位上昇</td>
         *       </tr>
         *       <tr>
         *           <td>3</td>
         *           <td>過去10営業日と変わらず</td>
         *       </tr>
         *       <tr>
         *           <td>4</td>
         *           <td>過去10営業日より1～19位下落</td>
         *       </tr>
         *       <tr>
         *           <td>5</td>
         *           <td>過去10営業日より20位以上下落</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        Trend?: string | undefined;
        /** 平均順位<br>※100位以下は「999」となります */
        AverageRanking?: number | undefined;
        /** 業種コード */
        Category?: string | undefined;
        /** 業種名 */
        CategoryName?: string | undefined;
        /** 現在値 */
        CurrentPrice?: number | undefined;
        /** 前日比 */
        ChangeRatio?: number | undefined;
        /** 時刻<br>HH:mm<br>※日付は返しません */
        CurrentPriceTime?: string | undefined;
        /** 騰落率（%） */
        ChangePercentage?: number | undefined;
      }[]
    | undefined;
};

export type ExchangeResponse = {
  /** 通貨 */
  Symbol?: string | undefined;
  /** BID */
  BidPrice?: number | undefined;
  /** SP */
  Spread?: number | undefined;
  /** ASK */
  AskPrice?: number | undefined;
  /** 前日比 */
  Change?: number | undefined;
  /** 時刻 <br>※HH:mm:ss形式 */
  Time?: string | undefined;
};

export type RegulationsResponse = {
  /**
   * 銘柄コード<br>
   * ※対象商品は、株式のみ
   */
  Symbol?: string | undefined;
  /** 規制情報 */
  RegulationsInfo?:
    | {
        /**
         * 規制市場
         * <table>
         *   <thead>
         *     <tr>
         *       <th>定義値</th>
         *       <th>内容</th>
         *     </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>0</td>
         *       <td>全対象</td>
         *     </tr>
         *     <tr>
         *       <td>1</td>
         *       <td>東証</td>
         *     </tr>
         *     <tr>
         *       <td>3</td>
         *       <td>名証</td>
         *     </tr>
         *     <tr>
         *       <td>5</td>
         *       <td>福証</td>
         *     </tr>
         *     <tr>
         *       <td>6</td>
         *       <td>札証</td>
         *     </tr>
         *     <tr>
         *       <td>9</td>
         *       <td>SOR</td>
         *     </tr>
         *     <tr>
         *       <td>10</td>
         *       <td>CXJ</td>
         *     </tr>
         *     <tr>
         *       <td>21</td>
         *       <td>JNX</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        Exchange?: number | undefined;
        /**
         * 規制取引区分<br>
         * ※空売り規制の場合、「4：新規」
         * <table>
         *   <thead>
         *     <tr>
         *       <th>定義値</th>
         *       <th>内容</th>
         *     </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>0</td>
         *       <td>全対象</td>
         *     </tr>
         *     <tr>
         *       <td>1</td>
         *       <td>現物</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>信用新規（制度）</td>
         *     </tr>
         *     <tr>
         *       <td>3</td>
         *       <td>信用新規（一般）</td>
         *     </tr>
         *     <tr>
         *       <td>4</td>
         *       <td>新規</td>
         *     </tr>
         *     <tr>
         *       <td>5</td>
         *       <td>信用返済（制度）</td>
         *     </tr>
         *     <tr>
         *       <td>6</td>
         *       <td>信用返済（一般）</td>
         *     </tr>
         *     <tr>
         *       <td>7</td>
         *       <td>返済</td>
         *     </tr>
         *     <tr>
         *       <td>8</td>
         *       <td>品受</td>
         *     </tr>
         *     <tr>
         *       <td>9</td>
         *       <td>品渡</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        Product?: number | undefined;
        /**
         * 規制売買<br>
         * ※空売り規制の場合、「1：売」
         * <table>
         *   <thead>
         *     <tr>
         *       <th>定義値</th>
         *       <th>内容</th>
         *     </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>0</td>
         *       <td>全対象</td>
         *     </tr>
         *     <tr>
         *       <td>1</td>
         *       <td>売</td>
         *     </tr>
         *     <tr>
         *       <td>2</td>
         *       <td>買</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        Side?: string | undefined;
        /** 理由<br>※空売り規制の場合、「空売り規制」 */
        Reason?: string | undefined;
        /** 制限開始日<br>yyyy/MM/dd HH:mm形式  <br>※空売り規制の場合、null */
        LimitStartDay?: string | undefined;
        /** 制限終了日<br>yyyy/MM/dd HH:mm形式  <br>※空売り規制の場合、null */
        LimitEndDay?: string | undefined;
        /**
         * コンプライアンスレベル<br>
         * ※空売り規制の場合、null
         * <table>
         *   <thead>
         *     <tr>
         *       <th>定義値</th>
         *       <th>内容</th>
         *     </tr>
         *   </thead>
         *   <tbody>
         *     <tr>
         *       <td>０</td>
         *       <td>規制無し</td>
         *     </tr>
         *     <tr>
         *       <td>１</td>
         *       <td>ワーニング</td>
         *     </tr>
         *     <tr>
         *       <td>２</td>
         *       <td>エラー</td>
         *     </tr>
         *   </tbody>
         * </table>
         */
        Level?: number | undefined;
      }[]
    | undefined;
};

export type PrimaryExchangeResponse = {
  /** 銘柄コード<br>※対象商品は、株式のみ */
  Symbol?: string | undefined;
  /**
   * 優先市場
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
   *           <td>東証</td>
   *       </tr>
   *       <tr>
   *           <td>3</td>
   *           <td>名証</td>
   *       </tr>
   *       <tr>
   *           <td>5</td>
   *           <td>福証</td>
   *       </tr>
   *       <tr>
   *           <td>6</td>
   *           <td>札証</td>
   *       </tr>
   *   </tbody>
   * </table>
   */
  PrimaryExchange?: number | undefined;
};

export type ApiSoftLimitResponse = {
  /** 現物のワンショット上限<br>※単位は万円 */
  Stock?: number | undefined;
  /** 信用のワンショット上限<br>※単位は万円 */
  Margin?: number | undefined;
  /** 先物のワンショット上限<br>※単位は枚 */
  Future?: number | undefined;
  /** 先物ミニのワンショット上限<br>※単位は枚 */
  FutureMini?: number | undefined;
  /** オプションのワンショット上限<br>※単位は枚 */
  Option?: number | undefined;
  /** kabuステーションのバージョン */
  KabuSVersion?: string | undefined;
};

export type MarginPremiumResponse = {
  /** 銘柄コード */
  Symbol?: string | undefined;

  /** 一般信用（長期） */
  GeneralMargin?:
    | {
        /**
         * プレミアム料入力区分
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *       <tr>
         *           <td>null</td>
         *           <td>一般信用（長期）非対応銘柄</td>
         *       </tr>
         *       <tr>
         *           <td>0</td>
         *           <td>プレミアム料がない銘柄</td>
         *       </tr>
         *       <tr>
         *           <td>1</td>
         *           <td>プレミアム料が固定の銘柄</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>プレミアム料が入札で決定する銘柄</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        MarginPremiumType?: number | undefined;
        /**
         * 確定プレミアム料<br>
         * ※入札銘柄の場合、入札受付中は随時更新します。受付時間外は、確定したプレミアム料を返します。<br>
         * ※非入札銘柄の場合、常に固定値を返します。<br>
         * ※信用取引不可の場合、nullを返します。<br>
         * ※19:30~翌営業日のプレミアム料になります。
         */
        MarginPremium?: number | undefined;
        /**
         * 上限プレミアム料<br>
         * ※プレミアム料がない場合は、nullを返します。
         */
        UpperMarginPremium?: number | undefined;
        /**
         * 下限プレミアム料<br>
         * ※プレミアム料がない場合は、nullを返します。
         */
        LowerMarginPremium?: number | undefined;
        /**
         * プレミアム料刻値<br>
         * ※入札可能銘柄以外は、nullを返します。
         */
        TickMarginPremium?: number | undefined;
      }
    | undefined;

  /** 一般信用（デイトレ） */
  DayTrade?:
    | {
        /**
         * プレミアム料入力区分
         * <table>
         *   <thead>
         *       <tr>
         *           <th>定義値</th>
         *           <th>説明</th>
         *       </tr>
         *   </thead>
         *   <tbody>
         *       <tr>
         *           <td>null</td>
         *           <td>一般信用（デイトレ）非対応銘柄</td>
         *       </tr>
         *       <tr>
         *           <td>0</td>
         *           <td>プレミアム料がない銘柄</td>
         *       </tr>
         *       <tr>
         *           <td>1</td>
         *           <td>プレミアム料が固定の銘柄</td>
         *       </tr>
         *       <tr>
         *           <td>2</td>
         *           <td>プレミアム料が入札で決定する銘柄</td>
         *       </tr>
         *   </tbody>
         * </table>
         */
        MarginPremiumType?: number | undefined;
        /**
         * 確定プレミアム料<br>
         * ※入札銘柄の場合、入札受付中は随時更新します。受付時間外は、確定したプレミアム料を返します。<br>
         * ※非入札銘柄の場合、常に固定値を返します。<br>
         * ※信用取引不可の場合、nullを返します。<br>
         * ※19:30~翌営業日のプレミアム料になります。
         */
        MarginPremium?: number | undefined;
        /**
         * 上限プレミアム料<br>
         * ※プレミアム料がない場合は、nullを返します。
         */
        UpperMarginPremium?: number | undefined;
        /**
         * 下限プレミアム料<br>
         * ※プレミアム料がない場合は、nullを返します。
         */
        LowerMarginPremium?: number | undefined;
        /**
         * プレミアム料刻値<br>
         * ※入札可能銘柄以外は、nullを返します。
         */
        TickMarginPremium?: number | undefined;
      }
    | undefined;
};

export type ErrorResponse = {
  /** エラーコード */
  Code?: number | undefined;
  /** [エラーメッセージ](../ptal/error.html#message) */
  Message?: string | undefined;
};
