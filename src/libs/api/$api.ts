import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './apisoftlimit';
import type { Methods as Methods1 } from './board/_symbol@string';
import type { Methods as Methods2 } from './cancelorder';
import type { Methods as Methods3 } from './exchange/_symbol';
import type { Methods as Methods4 } from './margin/marginpremium/_symbol@string';
import type { Methods as Methods5 } from './orders';
import type { Methods as Methods6 } from './positions';
import type { Methods as Methods7 } from './primaryexchange/_symbol@string';
import type { Methods as Methods8 } from './ranking';
import type { Methods as Methods9 } from './register';
import type { Methods as Methods10 } from './regulations/_symbol@string';
import type { Methods as Methods11 } from './sendorder';
import type { Methods as Methods12 } from './sendorder/future';
import type { Methods as Methods13 } from './sendorder/option';
import type { Methods as Methods14 } from './symbol/_symbol@string';
import type { Methods as Methods15 } from './symbolname/future';
import type { Methods as Methods16 } from './symbolname/option';
import type { Methods as Methods17 } from './token';
import type { Methods as Methods18 } from './unregister';
import type { Methods as Methods19 } from './unregister/all';
import type { Methods as Methods20 } from './wallet/cash';
import type { Methods as Methods21 } from './wallet/cash/_symbol@string';
import type { Methods as Methods22 } from './wallet/future';
import type { Methods as Methods23 } from './wallet/future/_symbol@string';
import type { Methods as Methods24 } from './wallet/margin';
import type { Methods as Methods25 } from './wallet/margin/_symbol@string';
import type { Methods as Methods26 } from './wallet/option';
import type { Methods as Methods27 } from './wallet/option/_symbol@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (
    baseURL === undefined ? 'http://localhost:18080/kabusapi' : baseURL
  ).replace(/\/$/, '');
  const PATH0 = '/apisoftlimit';
  const PATH1 = '/board';
  const PATH2 = '/cancelorder';
  const PATH3 = '/exchange';
  const PATH4 = '/margin/marginpremium';
  const PATH5 = '/orders';
  const PATH6 = '/positions';
  const PATH7 = '/primaryexchange';
  const PATH8 = '/ranking';
  const PATH9 = '/register';
  const PATH10 = '/regulations';
  const PATH11 = '/sendorder';
  const PATH12 = '/sendorder/future';
  const PATH13 = '/sendorder/option';
  const PATH14 = '/symbol';
  const PATH15 = '/symbolname/future';
  const PATH16 = '/symbolname/option';
  const PATH17 = '/token';
  const PATH18 = '/unregister';
  const PATH19 = '/unregister/all';
  const PATH20 = '/wallet/cash';
  const PATH21 = '/wallet/future';
  const PATH22 = '/wallet/margin';
  const PATH23 = '/wallet/option';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    apisoftlimit: {
      /**
       * kabuステーションAPIのソフトリミット値を取得する
       * @returns OK
       */
      get: (
        option?:
          | {
              headers?: Methods0['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods0['get']['resBody'],
          BasicHeaders,
          Methods0['get']['status']
        >(prefix, PATH0, GET, option).json(),
      /**
       * kabuステーションAPIのソフトリミット値を取得する
       * @returns OK
       */
      $get: (
        option?:
          | {
              headers?: Methods0['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods0['get']['resBody'],
          BasicHeaders,
          Methods0['get']['status']
        >(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    board: {
      _symbol: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`;

        return {
          /**
           * 指定した銘柄の時価情報・板情報を取得します<br>
           * レスポンスの一部にnullが発生した場合、該当銘柄を銘柄登録をしてから、
           * <br>再度時価情報・板情報APIを実行してください。
           * @returns ※①：レスポンスにある「Bid」と「Ask」は、本来の意味である「買気配」と「売気配」と逆になっております。実際に返却される値は日本語の説明に準じたものになりますので、ご注意いただきますようお願い申し上げます。ご迷惑をおかけしまして、誠に申し訳ございません。<br><br>
           * 影響するキー名：<br>
           * BidQty, BidPrice, BidTime, BidSign<br>
           * AskQty, AskPrice, AskTime, AskSign
           */
          get: (
            option?:
              | {
                  headers?: Methods1['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods1['get']['resBody'],
              BasicHeaders,
              Methods1['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * 指定した銘柄の時価情報・板情報を取得します<br>
           * レスポンスの一部にnullが発生した場合、該当銘柄を銘柄登録をしてから、
           * <br>再度時価情報・板情報APIを実行してください。
           * @returns ※①：レスポンスにある「Bid」と「Ask」は、本来の意味である「買気配」と「売気配」と逆になっております。実際に返却される値は日本語の説明に準じたものになりますので、ご注意いただきますようお願い申し上げます。ご迷惑をおかけしまして、誠に申し訳ございません。<br><br>
           * 影響するキー名：<br>
           * BidQty, BidPrice, BidTime, BidSign<br>
           * AskQty, AskPrice, AskTime, AskSign
           */
          $get: (
            option?:
              | {
                  headers?: Methods1['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods1['get']['resBody'],
              BasicHeaders,
              Methods1['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    cancelorder: {
      /**
       * 注文を取消します
       * @returns OK
       */
      put: (option: {
        body: Methods2['put']['reqBody'];
        headers?: Methods2['put']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods2['put']['resBody'],
          BasicHeaders,
          Methods2['put']['status']
        >(prefix, PATH2, PUT, option).json(),
      /**
       * 注文を取消します
       * @returns OK
       */
      $put: (option: {
        body: Methods2['put']['reqBody'];
        headers?: Methods2['put']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods2['put']['resBody'],
          BasicHeaders,
          Methods2['put']['status']
        >(prefix, PATH2, PUT, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH2}`,
    },
    exchange: {
      _symbol: (val1: number | string) => {
        const prefix1 = `${PATH3}/${val1}`;

        return {
          /**
           * マネービューの情報を取得する
           * @returns OK
           */
          get: (
            option?:
              | {
                  headers?: Methods3['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods3['get']['resBody'],
              BasicHeaders,
              Methods3['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * マネービューの情報を取得する
           * @returns OK
           */
          $get: (
            option?:
              | {
                  headers?: Methods3['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods3['get']['resBody'],
              BasicHeaders,
              Methods3['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    margin: {
      marginpremium: {
        _symbol: (val2: string) => {
          const prefix2 = `${PATH4}/${val2}`;

          return {
            /**
             * 指定した銘柄のプレミアム料を取得するAPI
             * @returns OK
             */
            get: (
              option?:
                | {
                    headers?: Methods4['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods4['get']['resBody'],
                BasicHeaders,
                Methods4['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * 指定した銘柄のプレミアム料を取得するAPI
             * @returns OK
             */
            $get: (
              option?:
                | {
                    headers?: Methods4['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods4['get']['resBody'],
                BasicHeaders,
                Methods4['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
      },
    },
    orders: {
      /**
       * 注文一覧を取得します。<br>
       * ※下記Queryパラメータは任意設定となります。
       * @returns OK
       */
      get: (
        option?:
          | {
              query?: Methods5['get']['query'] | undefined;
              headers?: Methods5['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods5['get']['resBody'],
          BasicHeaders,
          Methods5['get']['status']
        >(prefix, PATH5, GET, option).json(),
      /**
       * 注文一覧を取得します。<br>
       * ※下記Queryパラメータは任意設定となります。
       * @returns OK
       */
      $get: (
        option?:
          | {
              query?: Methods5['get']['query'] | undefined;
              headers?: Methods5['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods5['get']['resBody'],
          BasicHeaders,
          Methods5['get']['status']
        >(prefix, PATH5, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods5['get']['query'] }
          | undefined
      ) =>
        `${prefix}${PATH5}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    positions: {
      /**
       * 残高一覧を取得します。<br>※下記Queryパラメータは任意設定となります。
       * @returns OK
       */
      get: (
        option?:
          | {
              query?: Methods6['get']['query'] | undefined;
              headers?: Methods6['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods6['get']['resBody'],
          BasicHeaders,
          Methods6['get']['status']
        >(prefix, PATH6, GET, option).json(),
      /**
       * 残高一覧を取得します。<br>※下記Queryパラメータは任意設定となります。
       * @returns OK
       */
      $get: (
        option?:
          | {
              query?: Methods6['get']['query'] | undefined;
              headers?: Methods6['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<
          Methods6['get']['resBody'],
          BasicHeaders,
          Methods6['get']['status']
        >(prefix, PATH6, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods6['get']['query'] }
          | undefined
      ) =>
        `${prefix}${PATH6}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    primaryexchange: {
      _symbol: (val1: string) => {
        const prefix1 = `${PATH7}/${val1}`;

        return {
          /**
           * 株式の優先市場を取得する
           * @returns OK
           */
          get: (
            option?:
              | {
                  headers?: Methods7['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods7['get']['resBody'],
              BasicHeaders,
              Methods7['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * 株式の優先市場を取得する
           * @returns OK
           */
          $get: (
            option?:
              | {
                  headers?: Methods7['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods7['get']['resBody'],
              BasicHeaders,
              Methods7['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    ranking: {
      /**
       * 詳細ランキング画面と同様の各種ランキングを返します。
       * <br>ランキングの対象日はkabuステーションが保持している当日のデータとなります。
       * <br>※株価情報ランキング、業種別指数ランキングは、下記の時間帯でデータがクリアされるため、
       * <br>その間の詳細ランキングAPIは空レスポンスとなります。
       * <br>データクリア：平日7:53頃-9:00過ぎ頃
       * <br>※信用情報ランキングは毎週第３営業日の7:55頃にデータが更新されます。
       * @returns OK
       */
      get: (option: {
        query: Methods8['get']['query'];
        headers?: Methods8['get']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods8['get']['resBody'],
          BasicHeaders,
          Methods8['get']['status']
        >(prefix, PATH8, GET, option).json(),
      /**
       * 詳細ランキング画面と同様の各種ランキングを返します。
       * <br>ランキングの対象日はkabuステーションが保持している当日のデータとなります。
       * <br>※株価情報ランキング、業種別指数ランキングは、下記の時間帯でデータがクリアされるため、
       * <br>その間の詳細ランキングAPIは空レスポンスとなります。
       * <br>データクリア：平日7:53頃-9:00過ぎ頃
       * <br>※信用情報ランキングは毎週第３営業日の7:55頃にデータが更新されます。
       * @returns OK
       */
      $get: (option: {
        query: Methods8['get']['query'];
        headers?: Methods8['get']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods8['get']['resBody'],
          BasicHeaders,
          Methods8['get']['status']
        >(prefix, PATH8, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods8['get']['query'] }
          | undefined
      ) =>
        `${prefix}${PATH8}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    register: {
      /**
       * PUSH配信する銘柄を登録します。<br>
       * API登録銘柄リストを開くには、kabuステーションAPIインジケーターを右クリックし「API登録銘柄リスト」を選択してください。
       * @param option.body - 登録する銘柄のリスト
       * @returns OK
       */
      put: (option: {
        body: Methods9['put']['reqBody'];
        headers?: Methods9['put']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods9['put']['resBody'],
          BasicHeaders,
          Methods9['put']['status']
        >(prefix, PATH9, PUT, option).json(),
      /**
       * PUSH配信する銘柄を登録します。<br>
       * API登録銘柄リストを開くには、kabuステーションAPIインジケーターを右クリックし「API登録銘柄リスト」を選択してください。
       * @param option.body - 登録する銘柄のリスト
       * @returns OK
       */
      $put: (option: {
        body: Methods9['put']['reqBody'];
        headers?: Methods9['put']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods9['put']['resBody'],
          BasicHeaders,
          Methods9['put']['status']
        >(prefix, PATH9, PUT, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH9}`,
    },
    regulations: {
      _symbol: (val1: string) => {
        const prefix1 = `${PATH10}/${val1}`;

        return {
          /**
           * 規制情報＋空売り規制情報を取得する
           * @returns OK
           */
          get: (
            option?:
              | {
                  headers?: Methods10['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods10['get']['resBody'],
              BasicHeaders,
              Methods10['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * 規制情報＋空売り規制情報を取得する
           * @returns OK
           */
          $get: (
            option?:
              | {
                  headers?: Methods10['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods10['get']['resBody'],
              BasicHeaders,
              Methods10['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
    },
    sendorder: {
      future: {
        /**
         * 先物銘柄の注文を発注します。<br>
         * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
         * @returns OK
         */
        post: (option: {
          body: Methods12['post']['reqBody'];
          headers?: Methods12['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods12['post']['resBody'],
            BasicHeaders,
            Methods12['post']['status']
          >(prefix, PATH12, POST, option).json(),
        /**
         * 先物銘柄の注文を発注します。<br>
         * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
         * @returns OK
         */
        $post: (option: {
          body: Methods12['post']['reqBody'];
          headers?: Methods12['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods12['post']['resBody'],
            BasicHeaders,
            Methods12['post']['status']
          >(prefix, PATH12, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH12}`,
      },
      option: {
        /**
         * オプション銘柄の注文を発注します。<br>
         * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
         * @returns OK
         */
        post: (option: {
          body: Methods13['post']['reqBody'];
          headers?: Methods13['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods13['post']['resBody'],
            BasicHeaders,
            Methods13['post']['status']
          >(prefix, PATH13, POST, option).json(),
        /**
         * オプション銘柄の注文を発注します。<br>
         * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
         * @returns OK
         */
        $post: (option: {
          body: Methods13['post']['reqBody'];
          headers?: Methods13['post']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods13['post']['resBody'],
            BasicHeaders,
            Methods13['post']['status']
          >(prefix, PATH13, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH13}`,
      },
      /**
       * 注文を発注します。<br>
       * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
       * @returns OK
       */
      post: (option: {
        body: Methods11['post']['reqBody'];
        headers?: Methods11['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods11['post']['resBody'],
          BasicHeaders,
          Methods11['post']['status']
        >(prefix, PATH11, POST, option).json(),
      /**
       * 注文を発注します。<br>
       * 同一の銘柄に対しての注文は同時に5件ほどを上限としてご利用ください。
       * @returns OK
       */
      $post: (option: {
        body: Methods11['post']['reqBody'];
        headers?: Methods11['post']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods11['post']['resBody'],
          BasicHeaders,
          Methods11['post']['status']
        >(prefix, PATH11, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
    symbol: {
      _symbol: (val1: string) => {
        const prefix1 = `${PATH14}/${val1}`;

        return {
          /**
           * 指定した銘柄情報を取得します
           * @returns OK
           */
          get: (
            option?:
              | {
                  query?: Methods14['get']['query'] | undefined;
                  headers?: Methods14['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods14['get']['resBody'],
              BasicHeaders,
              Methods14['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * 指定した銘柄情報を取得します
           * @returns OK
           */
          $get: (
            option?:
              | {
                  query?: Methods14['get']['query'] | undefined;
                  headers?: Methods14['get']['reqHeaders'] | undefined;
                  config?: T | undefined;
                }
              | undefined
          ) =>
            fetch<
              Methods14['get']['resBody'],
              BasicHeaders,
              Methods14['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          $path: (
            option?:
              | { method?: 'get' | undefined; query: Methods14['get']['query'] }
              | undefined
          ) =>
            `${prefix}${prefix1}${
              option && option.query ? `?${dataToURLString(option.query)}` : ''
            }`,
        };
      },
    },
    symbolname: {
      future: {
        /**
         * 先物銘柄コード取得
         * @returns OK
         */
        get: (option: {
          query: Methods15['get']['query'];
          headers?: Methods15['get']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods15['get']['resBody'],
            BasicHeaders,
            Methods15['get']['status']
          >(prefix, PATH15, GET, option).json(),
        /**
         * 先物銘柄コード取得
         * @returns OK
         */
        $get: (option: {
          query: Methods15['get']['query'];
          headers?: Methods15['get']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods15['get']['resBody'],
            BasicHeaders,
            Methods15['get']['status']
          >(prefix, PATH15, GET, option)
            .json()
            .then((r) => r.body),
        $path: (
          option?:
            | { method?: 'get' | undefined; query: Methods15['get']['query'] }
            | undefined
        ) =>
          `${prefix}${PATH15}${
            option && option.query ? `?${dataToURLString(option.query)}` : ''
          }`,
      },
      option: {
        /**
         * オプション銘柄コード取得
         * @returns OK
         */
        get: (option: {
          query: Methods16['get']['query'];
          headers?: Methods16['get']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods16['get']['resBody'],
            BasicHeaders,
            Methods16['get']['status']
          >(prefix, PATH16, GET, option).json(),
        /**
         * オプション銘柄コード取得
         * @returns OK
         */
        $get: (option: {
          query: Methods16['get']['query'];
          headers?: Methods16['get']['reqHeaders'] | undefined;
          config?: T | undefined;
        }) =>
          fetch<
            Methods16['get']['resBody'],
            BasicHeaders,
            Methods16['get']['status']
          >(prefix, PATH16, GET, option)
            .json()
            .then((r) => r.body),
        $path: (
          option?:
            | { method?: 'get' | undefined; query: Methods16['get']['query'] }
            | undefined
        ) =>
          `${prefix}${PATH16}${
            option && option.query ? `?${dataToURLString(option.query)}` : ''
          }`,
      },
    },
    token: {
      /**
       * APIトークンを発行します。<br>
       * 発行したトークンは有効である限り使用することができ、リクエストごとに発行する必要はありません。<br>
       * 発行されたAPIトークンは以下のタイミングで無効となります。<br>
       * ・kabuステーションを終了した時<br>
       * ・kabuステーションからログアウトした時<br>
       * ・別のトークンが新たに発行された時<br>
       * ※kabuステーションは早朝、強制的にログアウトいたしますのでご留意ください。<br>
       * @returns OK
       */
      post: (option: {
        body: Methods17['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods17['post']['resBody'],
          BasicHeaders,
          Methods17['post']['status']
        >(prefix, PATH17, POST, option).json(),
      /**
       * APIトークンを発行します。<br>
       * 発行したトークンは有効である限り使用することができ、リクエストごとに発行する必要はありません。<br>
       * 発行されたAPIトークンは以下のタイミングで無効となります。<br>
       * ・kabuステーションを終了した時<br>
       * ・kabuステーションからログアウトした時<br>
       * ・別のトークンが新たに発行された時<br>
       * ※kabuステーションは早朝、強制的にログアウトいたしますのでご留意ください。<br>
       * @returns OK
       */
      $post: (option: {
        body: Methods17['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<
          Methods17['post']['resBody'],
          BasicHeaders,
          Methods17['post']['status']
        >(prefix, PATH17, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH17}`,
    },
    unregister: {
      all: {
        /**
         * API登録銘柄リストに登録されている銘柄をすべて解除します
         * @returns OK
         */
        put: (
          option?:
            | {
                headers?: Methods19['put']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods19['put']['resBody'],
            BasicHeaders,
            Methods19['put']['status']
          >(prefix, PATH19, PUT, option).json(),
        /**
         * API登録銘柄リストに登録されている銘柄をすべて解除します
         * @returns OK
         */
        $put: (
          option?:
            | {
                headers?: Methods19['put']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods19['put']['resBody'],
            BasicHeaders,
            Methods19['put']['status']
          >(prefix, PATH19, PUT, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH19}`,
      },
      /**
       * API登録銘柄リストに登録されている銘柄を解除します
       * @param option.body - 登録解除する銘柄のリスト
       * @returns OK
       */
      put: (option: {
        body: Methods18['put']['reqBody'];
        headers?: Methods18['put']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods18['put']['resBody'],
          BasicHeaders,
          Methods18['put']['status']
        >(prefix, PATH18, PUT, option).json(),
      /**
       * API登録銘柄リストに登録されている銘柄を解除します
       * @param option.body - 登録解除する銘柄のリスト
       * @returns OK
       */
      $put: (option: {
        body: Methods18['put']['reqBody'];
        headers?: Methods18['put']['reqHeaders'] | undefined;
        config?: T | undefined;
      }) =>
        fetch<
          Methods18['put']['resBody'],
          BasicHeaders,
          Methods18['put']['status']
        >(prefix, PATH18, PUT, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH18}`,
    },
    wallet: {
      cash: {
        _symbol: (val2: string) => {
          const prefix2 = `${PATH20}/${val2}`;

          return {
            /**
             * 指定した銘柄の取引余力（現物）を取得します
             * @returns OK
             */
            get: (
              option?:
                | {
                    headers?: Methods21['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods21['get']['resBody'],
                BasicHeaders,
                Methods21['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * 指定した銘柄の取引余力（現物）を取得します
             * @returns OK
             */
            $get: (
              option?:
                | {
                    headers?: Methods21['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods21['get']['resBody'],
                BasicHeaders,
                Methods21['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * 口座の取引余力（現物）を取得します
         * @returns OK
         */
        get: (
          option?:
            | {
                headers?: Methods20['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods20['get']['resBody'],
            BasicHeaders,
            Methods20['get']['status']
          >(prefix, PATH20, GET, option).json(),
        /**
         * 口座の取引余力（現物）を取得します
         * @returns OK
         */
        $get: (
          option?:
            | {
                headers?: Methods20['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods20['get']['resBody'],
            BasicHeaders,
            Methods20['get']['status']
          >(prefix, PATH20, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH20}`,
      },
      future: {
        _symbol: (val2: string) => {
          const prefix2 = `${PATH21}/${val2}`;

          return {
            /**
             * 指定した銘柄の取引余力（先物）を取得します
             * @returns OK
             */
            get: (
              option?:
                | {
                    headers?: Methods23['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods23['get']['resBody'],
                BasicHeaders,
                Methods23['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * 指定した銘柄の取引余力（先物）を取得します
             * @returns OK
             */
            $get: (
              option?:
                | {
                    headers?: Methods23['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods23['get']['resBody'],
                BasicHeaders,
                Methods23['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * 口座の取引余力（先物）を取得します
         * @returns OK
         */
        get: (
          option?:
            | {
                headers?: Methods22['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods22['get']['resBody'],
            BasicHeaders,
            Methods22['get']['status']
          >(prefix, PATH21, GET, option).json(),
        /**
         * 口座の取引余力（先物）を取得します
         * @returns OK
         */
        $get: (
          option?:
            | {
                headers?: Methods22['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods22['get']['resBody'],
            BasicHeaders,
            Methods22['get']['status']
          >(prefix, PATH21, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH21}`,
      },
      margin: {
        _symbol: (val2: string) => {
          const prefix2 = `${PATH22}/${val2}`;

          return {
            /**
             * 指定した銘柄の取引余力（信用）を取得します
             * @returns OK
             */
            get: (
              option?:
                | {
                    headers?: Methods25['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods25['get']['resBody'],
                BasicHeaders,
                Methods25['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * 指定した銘柄の取引余力（信用）を取得します
             * @returns OK
             */
            $get: (
              option?:
                | {
                    headers?: Methods25['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods25['get']['resBody'],
                BasicHeaders,
                Methods25['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * 口座の取引余力（信用）を取得します
         * @returns OK
         */
        get: (
          option?:
            | {
                headers?: Methods24['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods24['get']['resBody'],
            BasicHeaders,
            Methods24['get']['status']
          >(prefix, PATH22, GET, option).json(),
        /**
         * 口座の取引余力（信用）を取得します
         * @returns OK
         */
        $get: (
          option?:
            | {
                headers?: Methods24['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods24['get']['resBody'],
            BasicHeaders,
            Methods24['get']['status']
          >(prefix, PATH22, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH22}`,
      },
      option: {
        _symbol: (val2: string) => {
          const prefix2 = `${PATH23}/${val2}`;

          return {
            /**
             * 指定した銘柄の取引余力（オプション）を取得します
             * @returns OK
             */
            get: (
              option?:
                | {
                    headers?: Methods27['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods27['get']['resBody'],
                BasicHeaders,
                Methods27['get']['status']
              >(prefix, prefix2, GET, option).json(),
            /**
             * 指定した銘柄の取引余力（オプション）を取得します
             * @returns OK
             */
            $get: (
              option?:
                | {
                    headers?: Methods27['get']['reqHeaders'] | undefined;
                    config?: T | undefined;
                  }
                | undefined
            ) =>
              fetch<
                Methods27['get']['resBody'],
                BasicHeaders,
                Methods27['get']['status']
              >(prefix, prefix2, GET, option)
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        /**
         * 口座の取引余力（オプション）を取得します
         * @returns OK
         */
        get: (
          option?:
            | {
                headers?: Methods26['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods26['get']['resBody'],
            BasicHeaders,
            Methods26['get']['status']
          >(prefix, PATH23, GET, option).json(),
        /**
         * 口座の取引余力（オプション）を取得します
         * @returns OK
         */
        $get: (
          option?:
            | {
                headers?: Methods26['get']['reqHeaders'] | undefined;
                config?: T | undefined;
              }
            | undefined
        ) =>
          fetch<
            Methods26['get']['resBody'],
            BasicHeaders,
            Methods26['get']['status']
          >(prefix, PATH23, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH23}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
