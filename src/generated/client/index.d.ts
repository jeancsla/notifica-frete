
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Carga
 * 
 */
export type Carga = $Result.DefaultSelection<Prisma.$CargaPayload>
/**
 * Model CargaHistorico
 * 
 */
export type CargaHistorico = $Result.DefaultSelection<Prisma.$CargaHistoricoPayload>
/**
 * Model ScraperLog
 * 
 */
export type ScraperLog = $Result.DefaultSelection<Prisma.$ScraperLogPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cargas
 * const cargas = await prisma.carga.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cargas
   * const cargas = await prisma.carga.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.carga`: Exposes CRUD operations for the **Carga** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cargas
    * const cargas = await prisma.carga.findMany()
    * ```
    */
  get carga(): Prisma.CargaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cargaHistorico`: Exposes CRUD operations for the **CargaHistorico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CargaHistoricos
    * const cargaHistoricos = await prisma.cargaHistorico.findMany()
    * ```
    */
  get cargaHistorico(): Prisma.CargaHistoricoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scraperLog`: Exposes CRUD operations for the **ScraperLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScraperLogs
    * const scraperLogs = await prisma.scraperLog.findMany()
    * ```
    */
  get scraperLog(): Prisma.ScraperLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Carga: 'Carga',
    CargaHistorico: 'CargaHistorico',
    ScraperLog: 'ScraperLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "carga" | "cargaHistorico" | "scraperLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Carga: {
        payload: Prisma.$CargaPayload<ExtArgs>
        fields: Prisma.CargaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>
          }
          findFirst: {
            args: Prisma.CargaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>
          }
          findMany: {
            args: Prisma.CargaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>[]
          }
          create: {
            args: Prisma.CargaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>
          }
          createMany: {
            args: Prisma.CargaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>[]
          }
          delete: {
            args: Prisma.CargaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>
          }
          update: {
            args: Prisma.CargaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>
          }
          deleteMany: {
            args: Prisma.CargaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>[]
          }
          upsert: {
            args: Prisma.CargaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaPayload>
          }
          aggregate: {
            args: Prisma.CargaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarga>
          }
          groupBy: {
            args: Prisma.CargaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargaCountArgs<ExtArgs>
            result: $Utils.Optional<CargaCountAggregateOutputType> | number
          }
        }
      }
      CargaHistorico: {
        payload: Prisma.$CargaHistoricoPayload<ExtArgs>
        fields: Prisma.CargaHistoricoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CargaHistoricoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CargaHistoricoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>
          }
          findFirst: {
            args: Prisma.CargaHistoricoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CargaHistoricoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>
          }
          findMany: {
            args: Prisma.CargaHistoricoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>[]
          }
          create: {
            args: Prisma.CargaHistoricoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>
          }
          createMany: {
            args: Prisma.CargaHistoricoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CargaHistoricoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>[]
          }
          delete: {
            args: Prisma.CargaHistoricoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>
          }
          update: {
            args: Prisma.CargaHistoricoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>
          }
          deleteMany: {
            args: Prisma.CargaHistoricoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CargaHistoricoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CargaHistoricoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>[]
          }
          upsert: {
            args: Prisma.CargaHistoricoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CargaHistoricoPayload>
          }
          aggregate: {
            args: Prisma.CargaHistoricoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCargaHistorico>
          }
          groupBy: {
            args: Prisma.CargaHistoricoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CargaHistoricoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CargaHistoricoCountArgs<ExtArgs>
            result: $Utils.Optional<CargaHistoricoCountAggregateOutputType> | number
          }
        }
      }
      ScraperLog: {
        payload: Prisma.$ScraperLogPayload<ExtArgs>
        fields: Prisma.ScraperLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScraperLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScraperLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>
          }
          findFirst: {
            args: Prisma.ScraperLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScraperLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>
          }
          findMany: {
            args: Prisma.ScraperLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>[]
          }
          create: {
            args: Prisma.ScraperLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>
          }
          createMany: {
            args: Prisma.ScraperLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScraperLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>[]
          }
          delete: {
            args: Prisma.ScraperLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>
          }
          update: {
            args: Prisma.ScraperLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>
          }
          deleteMany: {
            args: Prisma.ScraperLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScraperLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScraperLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>[]
          }
          upsert: {
            args: Prisma.ScraperLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScraperLogPayload>
          }
          aggregate: {
            args: Prisma.ScraperLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScraperLog>
          }
          groupBy: {
            args: Prisma.ScraperLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScraperLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScraperLogCountArgs<ExtArgs>
            result: $Utils.Optional<ScraperLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    carga?: CargaOmit
    cargaHistorico?: CargaHistoricoOmit
    scraperLog?: ScraperLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CargaCountOutputType
   */

  export type CargaCountOutputType = {
    historico: number
  }

  export type CargaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | CargaCountOutputTypeCountHistoricoArgs
  }

  // Custom InputTypes
  /**
   * CargaCountOutputType without action
   */
  export type CargaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaCountOutputType
     */
    select?: CargaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CargaCountOutputType without action
   */
  export type CargaCountOutputTypeCountHistoricoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargaHistoricoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Carga
   */

  export type AggregateCarga = {
    _count: CargaCountAggregateOutputType | null
    _min: CargaMinAggregateOutputType | null
    _max: CargaMaxAggregateOutputType | null
  }

  export type CargaMinAggregateOutputType = {
    id: string | null
    viagem: string | null
    tipoTransporte: string | null
    origem: string | null
    destino: string | null
    produto: string | null
    equipamento: string | null
    prevColeta: string | null
    qtdeEntregas: string | null
    vrFrete: string | null
    termino: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CargaMaxAggregateOutputType = {
    id: string | null
    viagem: string | null
    tipoTransporte: string | null
    origem: string | null
    destino: string | null
    produto: string | null
    equipamento: string | null
    prevColeta: string | null
    qtdeEntregas: string | null
    vrFrete: string | null
    termino: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CargaCountAggregateOutputType = {
    id: number
    viagem: number
    tipoTransporte: number
    origem: number
    destino: number
    produto: number
    equipamento: number
    prevColeta: number
    qtdeEntregas: number
    vrFrete: number
    termino: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CargaMinAggregateInputType = {
    id?: true
    viagem?: true
    tipoTransporte?: true
    origem?: true
    destino?: true
    produto?: true
    equipamento?: true
    prevColeta?: true
    qtdeEntregas?: true
    vrFrete?: true
    termino?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CargaMaxAggregateInputType = {
    id?: true
    viagem?: true
    tipoTransporte?: true
    origem?: true
    destino?: true
    produto?: true
    equipamento?: true
    prevColeta?: true
    qtdeEntregas?: true
    vrFrete?: true
    termino?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CargaCountAggregateInputType = {
    id?: true
    viagem?: true
    tipoTransporte?: true
    origem?: true
    destino?: true
    produto?: true
    equipamento?: true
    prevColeta?: true
    qtdeEntregas?: true
    vrFrete?: true
    termino?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CargaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carga to aggregate.
     */
    where?: CargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargas to fetch.
     */
    orderBy?: CargaOrderByWithRelationInput | CargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cargas
    **/
    _count?: true | CargaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargaMaxAggregateInputType
  }

  export type GetCargaAggregateType<T extends CargaAggregateArgs> = {
        [P in keyof T & keyof AggregateCarga]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarga[P]>
      : GetScalarType<T[P], AggregateCarga[P]>
  }




  export type CargaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargaWhereInput
    orderBy?: CargaOrderByWithAggregationInput | CargaOrderByWithAggregationInput[]
    by: CargaScalarFieldEnum[] | CargaScalarFieldEnum
    having?: CargaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargaCountAggregateInputType | true
    _min?: CargaMinAggregateInputType
    _max?: CargaMaxAggregateInputType
  }

  export type CargaGroupByOutputType = {
    id: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    createdAt: Date
    updatedAt: Date
    _count: CargaCountAggregateOutputType | null
    _min: CargaMinAggregateOutputType | null
    _max: CargaMaxAggregateOutputType | null
  }

  type GetCargaGroupByPayload<T extends CargaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargaGroupByOutputType[P]>
            : GetScalarType<T[P], CargaGroupByOutputType[P]>
        }
      >
    >


  export type CargaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    historico?: boolean | Carga$historicoArgs<ExtArgs>
    _count?: boolean | CargaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carga"]>

  export type CargaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carga"]>

  export type CargaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["carga"]>

  export type CargaSelectScalar = {
    id?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CargaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viagem" | "tipoTransporte" | "origem" | "destino" | "produto" | "equipamento" | "prevColeta" | "qtdeEntregas" | "vrFrete" | "termino" | "createdAt" | "updatedAt", ExtArgs["result"]["carga"]>
  export type CargaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historico?: boolean | Carga$historicoArgs<ExtArgs>
    _count?: boolean | CargaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CargaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CargaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CargaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carga"
    objects: {
      historico: Prisma.$CargaHistoricoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      viagem: string
      tipoTransporte: string
      origem: string
      destino: string
      produto: string
      equipamento: string
      prevColeta: string
      qtdeEntregas: string
      vrFrete: string
      termino: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["carga"]>
    composites: {}
  }

  type CargaGetPayload<S extends boolean | null | undefined | CargaDefaultArgs> = $Result.GetResult<Prisma.$CargaPayload, S>

  type CargaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargaCountAggregateInputType | true
    }

  export interface CargaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carga'], meta: { name: 'Carga' } }
    /**
     * Find zero or one Carga that matches the filter.
     * @param {CargaFindUniqueArgs} args - Arguments to find a Carga
     * @example
     * // Get one Carga
     * const carga = await prisma.carga.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargaFindUniqueArgs>(args: SelectSubset<T, CargaFindUniqueArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carga that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargaFindUniqueOrThrowArgs} args - Arguments to find a Carga
     * @example
     * // Get one Carga
     * const carga = await prisma.carga.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargaFindUniqueOrThrowArgs>(args: SelectSubset<T, CargaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carga that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaFindFirstArgs} args - Arguments to find a Carga
     * @example
     * // Get one Carga
     * const carga = await prisma.carga.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargaFindFirstArgs>(args?: SelectSubset<T, CargaFindFirstArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carga that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaFindFirstOrThrowArgs} args - Arguments to find a Carga
     * @example
     * // Get one Carga
     * const carga = await prisma.carga.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargaFindFirstOrThrowArgs>(args?: SelectSubset<T, CargaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cargas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cargas
     * const cargas = await prisma.carga.findMany()
     * 
     * // Get first 10 Cargas
     * const cargas = await prisma.carga.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargaWithIdOnly = await prisma.carga.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargaFindManyArgs>(args?: SelectSubset<T, CargaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carga.
     * @param {CargaCreateArgs} args - Arguments to create a Carga.
     * @example
     * // Create one Carga
     * const Carga = await prisma.carga.create({
     *   data: {
     *     // ... data to create a Carga
     *   }
     * })
     * 
     */
    create<T extends CargaCreateArgs>(args: SelectSubset<T, CargaCreateArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cargas.
     * @param {CargaCreateManyArgs} args - Arguments to create many Cargas.
     * @example
     * // Create many Cargas
     * const carga = await prisma.carga.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargaCreateManyArgs>(args?: SelectSubset<T, CargaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cargas and returns the data saved in the database.
     * @param {CargaCreateManyAndReturnArgs} args - Arguments to create many Cargas.
     * @example
     * // Create many Cargas
     * const carga = await prisma.carga.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cargas and only return the `id`
     * const cargaWithIdOnly = await prisma.carga.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargaCreateManyAndReturnArgs>(args?: SelectSubset<T, CargaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carga.
     * @param {CargaDeleteArgs} args - Arguments to delete one Carga.
     * @example
     * // Delete one Carga
     * const Carga = await prisma.carga.delete({
     *   where: {
     *     // ... filter to delete one Carga
     *   }
     * })
     * 
     */
    delete<T extends CargaDeleteArgs>(args: SelectSubset<T, CargaDeleteArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carga.
     * @param {CargaUpdateArgs} args - Arguments to update one Carga.
     * @example
     * // Update one Carga
     * const carga = await prisma.carga.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargaUpdateArgs>(args: SelectSubset<T, CargaUpdateArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cargas.
     * @param {CargaDeleteManyArgs} args - Arguments to filter Cargas to delete.
     * @example
     * // Delete a few Cargas
     * const { count } = await prisma.carga.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargaDeleteManyArgs>(args?: SelectSubset<T, CargaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cargas
     * const carga = await prisma.carga.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargaUpdateManyArgs>(args: SelectSubset<T, CargaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cargas and returns the data updated in the database.
     * @param {CargaUpdateManyAndReturnArgs} args - Arguments to update many Cargas.
     * @example
     * // Update many Cargas
     * const carga = await prisma.carga.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cargas and only return the `id`
     * const cargaWithIdOnly = await prisma.carga.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CargaUpdateManyAndReturnArgs>(args: SelectSubset<T, CargaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carga.
     * @param {CargaUpsertArgs} args - Arguments to update or create a Carga.
     * @example
     * // Update or create a Carga
     * const carga = await prisma.carga.upsert({
     *   create: {
     *     // ... data to create a Carga
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carga we want to update
     *   }
     * })
     */
    upsert<T extends CargaUpsertArgs>(args: SelectSubset<T, CargaUpsertArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cargas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaCountArgs} args - Arguments to filter Cargas to count.
     * @example
     * // Count the number of Cargas
     * const count = await prisma.carga.count({
     *   where: {
     *     // ... the filter for the Cargas we want to count
     *   }
     * })
    **/
    count<T extends CargaCountArgs>(
      args?: Subset<T, CargaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CargaAggregateArgs>(args: Subset<T, CargaAggregateArgs>): Prisma.PrismaPromise<GetCargaAggregateType<T>>

    /**
     * Group by Carga.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CargaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargaGroupByArgs['orderBy'] }
        : { orderBy?: CargaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CargaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carga model
   */
  readonly fields: CargaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carga.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historico<T extends Carga$historicoArgs<ExtArgs> = {}>(args?: Subset<T, Carga$historicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Carga model
   */
  interface CargaFieldRefs {
    readonly id: FieldRef<"Carga", 'String'>
    readonly viagem: FieldRef<"Carga", 'String'>
    readonly tipoTransporte: FieldRef<"Carga", 'String'>
    readonly origem: FieldRef<"Carga", 'String'>
    readonly destino: FieldRef<"Carga", 'String'>
    readonly produto: FieldRef<"Carga", 'String'>
    readonly equipamento: FieldRef<"Carga", 'String'>
    readonly prevColeta: FieldRef<"Carga", 'String'>
    readonly qtdeEntregas: FieldRef<"Carga", 'String'>
    readonly vrFrete: FieldRef<"Carga", 'String'>
    readonly termino: FieldRef<"Carga", 'String'>
    readonly createdAt: FieldRef<"Carga", 'DateTime'>
    readonly updatedAt: FieldRef<"Carga", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carga findUnique
   */
  export type CargaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * Filter, which Carga to fetch.
     */
    where: CargaWhereUniqueInput
  }

  /**
   * Carga findUniqueOrThrow
   */
  export type CargaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * Filter, which Carga to fetch.
     */
    where: CargaWhereUniqueInput
  }

  /**
   * Carga findFirst
   */
  export type CargaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * Filter, which Carga to fetch.
     */
    where?: CargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargas to fetch.
     */
    orderBy?: CargaOrderByWithRelationInput | CargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargas.
     */
    cursor?: CargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargas.
     */
    distinct?: CargaScalarFieldEnum | CargaScalarFieldEnum[]
  }

  /**
   * Carga findFirstOrThrow
   */
  export type CargaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * Filter, which Carga to fetch.
     */
    where?: CargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargas to fetch.
     */
    orderBy?: CargaOrderByWithRelationInput | CargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cargas.
     */
    cursor?: CargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cargas.
     */
    distinct?: CargaScalarFieldEnum | CargaScalarFieldEnum[]
  }

  /**
   * Carga findMany
   */
  export type CargaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * Filter, which Cargas to fetch.
     */
    where?: CargaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cargas to fetch.
     */
    orderBy?: CargaOrderByWithRelationInput | CargaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cargas.
     */
    cursor?: CargaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cargas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cargas.
     */
    skip?: number
    distinct?: CargaScalarFieldEnum | CargaScalarFieldEnum[]
  }

  /**
   * Carga create
   */
  export type CargaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * The data needed to create a Carga.
     */
    data: XOR<CargaCreateInput, CargaUncheckedCreateInput>
  }

  /**
   * Carga createMany
   */
  export type CargaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cargas.
     */
    data: CargaCreateManyInput | CargaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carga createManyAndReturn
   */
  export type CargaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * The data used to create many Cargas.
     */
    data: CargaCreateManyInput | CargaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carga update
   */
  export type CargaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * The data needed to update a Carga.
     */
    data: XOR<CargaUpdateInput, CargaUncheckedUpdateInput>
    /**
     * Choose, which Carga to update.
     */
    where: CargaWhereUniqueInput
  }

  /**
   * Carga updateMany
   */
  export type CargaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cargas.
     */
    data: XOR<CargaUpdateManyMutationInput, CargaUncheckedUpdateManyInput>
    /**
     * Filter which Cargas to update
     */
    where?: CargaWhereInput
    /**
     * Limit how many Cargas to update.
     */
    limit?: number
  }

  /**
   * Carga updateManyAndReturn
   */
  export type CargaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * The data used to update Cargas.
     */
    data: XOR<CargaUpdateManyMutationInput, CargaUncheckedUpdateManyInput>
    /**
     * Filter which Cargas to update
     */
    where?: CargaWhereInput
    /**
     * Limit how many Cargas to update.
     */
    limit?: number
  }

  /**
   * Carga upsert
   */
  export type CargaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * The filter to search for the Carga to update in case it exists.
     */
    where: CargaWhereUniqueInput
    /**
     * In case the Carga found by the `where` argument doesn't exist, create a new Carga with this data.
     */
    create: XOR<CargaCreateInput, CargaUncheckedCreateInput>
    /**
     * In case the Carga was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargaUpdateInput, CargaUncheckedUpdateInput>
  }

  /**
   * Carga delete
   */
  export type CargaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
    /**
     * Filter which Carga to delete.
     */
    where: CargaWhereUniqueInput
  }

  /**
   * Carga deleteMany
   */
  export type CargaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cargas to delete
     */
    where?: CargaWhereInput
    /**
     * Limit how many Cargas to delete.
     */
    limit?: number
  }

  /**
   * Carga.historico
   */
  export type Carga$historicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    where?: CargaHistoricoWhereInput
    orderBy?: CargaHistoricoOrderByWithRelationInput | CargaHistoricoOrderByWithRelationInput[]
    cursor?: CargaHistoricoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CargaHistoricoScalarFieldEnum | CargaHistoricoScalarFieldEnum[]
  }

  /**
   * Carga without action
   */
  export type CargaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carga
     */
    select?: CargaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carga
     */
    omit?: CargaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaInclude<ExtArgs> | null
  }


  /**
   * Model CargaHistorico
   */

  export type AggregateCargaHistorico = {
    _count: CargaHistoricoCountAggregateOutputType | null
    _min: CargaHistoricoMinAggregateOutputType | null
    _max: CargaHistoricoMaxAggregateOutputType | null
  }

  export type CargaHistoricoMinAggregateOutputType = {
    id: string | null
    cargaId: string | null
    viagem: string | null
    tipoTransporte: string | null
    origem: string | null
    destino: string | null
    produto: string | null
    equipamento: string | null
    prevColeta: string | null
    qtdeEntregas: string | null
    vrFrete: string | null
    termino: string | null
    changeType: string | null
    changedAt: Date | null
  }

  export type CargaHistoricoMaxAggregateOutputType = {
    id: string | null
    cargaId: string | null
    viagem: string | null
    tipoTransporte: string | null
    origem: string | null
    destino: string | null
    produto: string | null
    equipamento: string | null
    prevColeta: string | null
    qtdeEntregas: string | null
    vrFrete: string | null
    termino: string | null
    changeType: string | null
    changedAt: Date | null
  }

  export type CargaHistoricoCountAggregateOutputType = {
    id: number
    cargaId: number
    viagem: number
    tipoTransporte: number
    origem: number
    destino: number
    produto: number
    equipamento: number
    prevColeta: number
    qtdeEntregas: number
    vrFrete: number
    termino: number
    changeType: number
    changedAt: number
    _all: number
  }


  export type CargaHistoricoMinAggregateInputType = {
    id?: true
    cargaId?: true
    viagem?: true
    tipoTransporte?: true
    origem?: true
    destino?: true
    produto?: true
    equipamento?: true
    prevColeta?: true
    qtdeEntregas?: true
    vrFrete?: true
    termino?: true
    changeType?: true
    changedAt?: true
  }

  export type CargaHistoricoMaxAggregateInputType = {
    id?: true
    cargaId?: true
    viagem?: true
    tipoTransporte?: true
    origem?: true
    destino?: true
    produto?: true
    equipamento?: true
    prevColeta?: true
    qtdeEntregas?: true
    vrFrete?: true
    termino?: true
    changeType?: true
    changedAt?: true
  }

  export type CargaHistoricoCountAggregateInputType = {
    id?: true
    cargaId?: true
    viagem?: true
    tipoTransporte?: true
    origem?: true
    destino?: true
    produto?: true
    equipamento?: true
    prevColeta?: true
    qtdeEntregas?: true
    vrFrete?: true
    termino?: true
    changeType?: true
    changedAt?: true
    _all?: true
  }

  export type CargaHistoricoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CargaHistorico to aggregate.
     */
    where?: CargaHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargaHistoricos to fetch.
     */
    orderBy?: CargaHistoricoOrderByWithRelationInput | CargaHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CargaHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargaHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargaHistoricos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CargaHistoricos
    **/
    _count?: true | CargaHistoricoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CargaHistoricoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CargaHistoricoMaxAggregateInputType
  }

  export type GetCargaHistoricoAggregateType<T extends CargaHistoricoAggregateArgs> = {
        [P in keyof T & keyof AggregateCargaHistorico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCargaHistorico[P]>
      : GetScalarType<T[P], AggregateCargaHistorico[P]>
  }




  export type CargaHistoricoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CargaHistoricoWhereInput
    orderBy?: CargaHistoricoOrderByWithAggregationInput | CargaHistoricoOrderByWithAggregationInput[]
    by: CargaHistoricoScalarFieldEnum[] | CargaHistoricoScalarFieldEnum
    having?: CargaHistoricoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CargaHistoricoCountAggregateInputType | true
    _min?: CargaHistoricoMinAggregateInputType
    _max?: CargaHistoricoMaxAggregateInputType
  }

  export type CargaHistoricoGroupByOutputType = {
    id: string
    cargaId: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt: Date
    _count: CargaHistoricoCountAggregateOutputType | null
    _min: CargaHistoricoMinAggregateOutputType | null
    _max: CargaHistoricoMaxAggregateOutputType | null
  }

  type GetCargaHistoricoGroupByPayload<T extends CargaHistoricoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CargaHistoricoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CargaHistoricoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CargaHistoricoGroupByOutputType[P]>
            : GetScalarType<T[P], CargaHistoricoGroupByOutputType[P]>
        }
      >
    >


  export type CargaHistoricoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargaId?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    changeType?: boolean
    changedAt?: boolean
    carga?: boolean | CargaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargaHistorico"]>

  export type CargaHistoricoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargaId?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    changeType?: boolean
    changedAt?: boolean
    carga?: boolean | CargaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargaHistorico"]>

  export type CargaHistoricoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cargaId?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    changeType?: boolean
    changedAt?: boolean
    carga?: boolean | CargaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cargaHistorico"]>

  export type CargaHistoricoSelectScalar = {
    id?: boolean
    cargaId?: boolean
    viagem?: boolean
    tipoTransporte?: boolean
    origem?: boolean
    destino?: boolean
    produto?: boolean
    equipamento?: boolean
    prevColeta?: boolean
    qtdeEntregas?: boolean
    vrFrete?: boolean
    termino?: boolean
    changeType?: boolean
    changedAt?: boolean
  }

  export type CargaHistoricoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cargaId" | "viagem" | "tipoTransporte" | "origem" | "destino" | "produto" | "equipamento" | "prevColeta" | "qtdeEntregas" | "vrFrete" | "termino" | "changeType" | "changedAt", ExtArgs["result"]["cargaHistorico"]>
  export type CargaHistoricoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carga?: boolean | CargaDefaultArgs<ExtArgs>
  }
  export type CargaHistoricoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carga?: boolean | CargaDefaultArgs<ExtArgs>
  }
  export type CargaHistoricoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carga?: boolean | CargaDefaultArgs<ExtArgs>
  }

  export type $CargaHistoricoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CargaHistorico"
    objects: {
      carga: Prisma.$CargaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cargaId: string
      viagem: string
      tipoTransporte: string
      origem: string
      destino: string
      produto: string
      equipamento: string
      prevColeta: string
      qtdeEntregas: string
      vrFrete: string
      termino: string
      changeType: string
      changedAt: Date
    }, ExtArgs["result"]["cargaHistorico"]>
    composites: {}
  }

  type CargaHistoricoGetPayload<S extends boolean | null | undefined | CargaHistoricoDefaultArgs> = $Result.GetResult<Prisma.$CargaHistoricoPayload, S>

  type CargaHistoricoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CargaHistoricoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CargaHistoricoCountAggregateInputType | true
    }

  export interface CargaHistoricoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CargaHistorico'], meta: { name: 'CargaHistorico' } }
    /**
     * Find zero or one CargaHistorico that matches the filter.
     * @param {CargaHistoricoFindUniqueArgs} args - Arguments to find a CargaHistorico
     * @example
     * // Get one CargaHistorico
     * const cargaHistorico = await prisma.cargaHistorico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CargaHistoricoFindUniqueArgs>(args: SelectSubset<T, CargaHistoricoFindUniqueArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CargaHistorico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CargaHistoricoFindUniqueOrThrowArgs} args - Arguments to find a CargaHistorico
     * @example
     * // Get one CargaHistorico
     * const cargaHistorico = await prisma.cargaHistorico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CargaHistoricoFindUniqueOrThrowArgs>(args: SelectSubset<T, CargaHistoricoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CargaHistorico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoFindFirstArgs} args - Arguments to find a CargaHistorico
     * @example
     * // Get one CargaHistorico
     * const cargaHistorico = await prisma.cargaHistorico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CargaHistoricoFindFirstArgs>(args?: SelectSubset<T, CargaHistoricoFindFirstArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CargaHistorico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoFindFirstOrThrowArgs} args - Arguments to find a CargaHistorico
     * @example
     * // Get one CargaHistorico
     * const cargaHistorico = await prisma.cargaHistorico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CargaHistoricoFindFirstOrThrowArgs>(args?: SelectSubset<T, CargaHistoricoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CargaHistoricos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CargaHistoricos
     * const cargaHistoricos = await prisma.cargaHistorico.findMany()
     * 
     * // Get first 10 CargaHistoricos
     * const cargaHistoricos = await prisma.cargaHistorico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cargaHistoricoWithIdOnly = await prisma.cargaHistorico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CargaHistoricoFindManyArgs>(args?: SelectSubset<T, CargaHistoricoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CargaHistorico.
     * @param {CargaHistoricoCreateArgs} args - Arguments to create a CargaHistorico.
     * @example
     * // Create one CargaHistorico
     * const CargaHistorico = await prisma.cargaHistorico.create({
     *   data: {
     *     // ... data to create a CargaHistorico
     *   }
     * })
     * 
     */
    create<T extends CargaHistoricoCreateArgs>(args: SelectSubset<T, CargaHistoricoCreateArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CargaHistoricos.
     * @param {CargaHistoricoCreateManyArgs} args - Arguments to create many CargaHistoricos.
     * @example
     * // Create many CargaHistoricos
     * const cargaHistorico = await prisma.cargaHistorico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CargaHistoricoCreateManyArgs>(args?: SelectSubset<T, CargaHistoricoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CargaHistoricos and returns the data saved in the database.
     * @param {CargaHistoricoCreateManyAndReturnArgs} args - Arguments to create many CargaHistoricos.
     * @example
     * // Create many CargaHistoricos
     * const cargaHistorico = await prisma.cargaHistorico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CargaHistoricos and only return the `id`
     * const cargaHistoricoWithIdOnly = await prisma.cargaHistorico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CargaHistoricoCreateManyAndReturnArgs>(args?: SelectSubset<T, CargaHistoricoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CargaHistorico.
     * @param {CargaHistoricoDeleteArgs} args - Arguments to delete one CargaHistorico.
     * @example
     * // Delete one CargaHistorico
     * const CargaHistorico = await prisma.cargaHistorico.delete({
     *   where: {
     *     // ... filter to delete one CargaHistorico
     *   }
     * })
     * 
     */
    delete<T extends CargaHistoricoDeleteArgs>(args: SelectSubset<T, CargaHistoricoDeleteArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CargaHistorico.
     * @param {CargaHistoricoUpdateArgs} args - Arguments to update one CargaHistorico.
     * @example
     * // Update one CargaHistorico
     * const cargaHistorico = await prisma.cargaHistorico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CargaHistoricoUpdateArgs>(args: SelectSubset<T, CargaHistoricoUpdateArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CargaHistoricos.
     * @param {CargaHistoricoDeleteManyArgs} args - Arguments to filter CargaHistoricos to delete.
     * @example
     * // Delete a few CargaHistoricos
     * const { count } = await prisma.cargaHistorico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CargaHistoricoDeleteManyArgs>(args?: SelectSubset<T, CargaHistoricoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CargaHistoricos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CargaHistoricos
     * const cargaHistorico = await prisma.cargaHistorico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CargaHistoricoUpdateManyArgs>(args: SelectSubset<T, CargaHistoricoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CargaHistoricos and returns the data updated in the database.
     * @param {CargaHistoricoUpdateManyAndReturnArgs} args - Arguments to update many CargaHistoricos.
     * @example
     * // Update many CargaHistoricos
     * const cargaHistorico = await prisma.cargaHistorico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CargaHistoricos and only return the `id`
     * const cargaHistoricoWithIdOnly = await prisma.cargaHistorico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CargaHistoricoUpdateManyAndReturnArgs>(args: SelectSubset<T, CargaHistoricoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CargaHistorico.
     * @param {CargaHistoricoUpsertArgs} args - Arguments to update or create a CargaHistorico.
     * @example
     * // Update or create a CargaHistorico
     * const cargaHistorico = await prisma.cargaHistorico.upsert({
     *   create: {
     *     // ... data to create a CargaHistorico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CargaHistorico we want to update
     *   }
     * })
     */
    upsert<T extends CargaHistoricoUpsertArgs>(args: SelectSubset<T, CargaHistoricoUpsertArgs<ExtArgs>>): Prisma__CargaHistoricoClient<$Result.GetResult<Prisma.$CargaHistoricoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CargaHistoricos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoCountArgs} args - Arguments to filter CargaHistoricos to count.
     * @example
     * // Count the number of CargaHistoricos
     * const count = await prisma.cargaHistorico.count({
     *   where: {
     *     // ... the filter for the CargaHistoricos we want to count
     *   }
     * })
    **/
    count<T extends CargaHistoricoCountArgs>(
      args?: Subset<T, CargaHistoricoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CargaHistoricoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CargaHistorico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CargaHistoricoAggregateArgs>(args: Subset<T, CargaHistoricoAggregateArgs>): Prisma.PrismaPromise<GetCargaHistoricoAggregateType<T>>

    /**
     * Group by CargaHistorico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CargaHistoricoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CargaHistoricoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CargaHistoricoGroupByArgs['orderBy'] }
        : { orderBy?: CargaHistoricoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CargaHistoricoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCargaHistoricoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CargaHistorico model
   */
  readonly fields: CargaHistoricoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CargaHistorico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CargaHistoricoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carga<T extends CargaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CargaDefaultArgs<ExtArgs>>): Prisma__CargaClient<$Result.GetResult<Prisma.$CargaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CargaHistorico model
   */
  interface CargaHistoricoFieldRefs {
    readonly id: FieldRef<"CargaHistorico", 'String'>
    readonly cargaId: FieldRef<"CargaHistorico", 'String'>
    readonly viagem: FieldRef<"CargaHistorico", 'String'>
    readonly tipoTransporte: FieldRef<"CargaHistorico", 'String'>
    readonly origem: FieldRef<"CargaHistorico", 'String'>
    readonly destino: FieldRef<"CargaHistorico", 'String'>
    readonly produto: FieldRef<"CargaHistorico", 'String'>
    readonly equipamento: FieldRef<"CargaHistorico", 'String'>
    readonly prevColeta: FieldRef<"CargaHistorico", 'String'>
    readonly qtdeEntregas: FieldRef<"CargaHistorico", 'String'>
    readonly vrFrete: FieldRef<"CargaHistorico", 'String'>
    readonly termino: FieldRef<"CargaHistorico", 'String'>
    readonly changeType: FieldRef<"CargaHistorico", 'String'>
    readonly changedAt: FieldRef<"CargaHistorico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CargaHistorico findUnique
   */
  export type CargaHistoricoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which CargaHistorico to fetch.
     */
    where: CargaHistoricoWhereUniqueInput
  }

  /**
   * CargaHistorico findUniqueOrThrow
   */
  export type CargaHistoricoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which CargaHistorico to fetch.
     */
    where: CargaHistoricoWhereUniqueInput
  }

  /**
   * CargaHistorico findFirst
   */
  export type CargaHistoricoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which CargaHistorico to fetch.
     */
    where?: CargaHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargaHistoricos to fetch.
     */
    orderBy?: CargaHistoricoOrderByWithRelationInput | CargaHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CargaHistoricos.
     */
    cursor?: CargaHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargaHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargaHistoricos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargaHistoricos.
     */
    distinct?: CargaHistoricoScalarFieldEnum | CargaHistoricoScalarFieldEnum[]
  }

  /**
   * CargaHistorico findFirstOrThrow
   */
  export type CargaHistoricoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which CargaHistorico to fetch.
     */
    where?: CargaHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargaHistoricos to fetch.
     */
    orderBy?: CargaHistoricoOrderByWithRelationInput | CargaHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CargaHistoricos.
     */
    cursor?: CargaHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargaHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargaHistoricos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CargaHistoricos.
     */
    distinct?: CargaHistoricoScalarFieldEnum | CargaHistoricoScalarFieldEnum[]
  }

  /**
   * CargaHistorico findMany
   */
  export type CargaHistoricoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * Filter, which CargaHistoricos to fetch.
     */
    where?: CargaHistoricoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CargaHistoricos to fetch.
     */
    orderBy?: CargaHistoricoOrderByWithRelationInput | CargaHistoricoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CargaHistoricos.
     */
    cursor?: CargaHistoricoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CargaHistoricos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CargaHistoricos.
     */
    skip?: number
    distinct?: CargaHistoricoScalarFieldEnum | CargaHistoricoScalarFieldEnum[]
  }

  /**
   * CargaHistorico create
   */
  export type CargaHistoricoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * The data needed to create a CargaHistorico.
     */
    data: XOR<CargaHistoricoCreateInput, CargaHistoricoUncheckedCreateInput>
  }

  /**
   * CargaHistorico createMany
   */
  export type CargaHistoricoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CargaHistoricos.
     */
    data: CargaHistoricoCreateManyInput | CargaHistoricoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CargaHistorico createManyAndReturn
   */
  export type CargaHistoricoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * The data used to create many CargaHistoricos.
     */
    data: CargaHistoricoCreateManyInput | CargaHistoricoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CargaHistorico update
   */
  export type CargaHistoricoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * The data needed to update a CargaHistorico.
     */
    data: XOR<CargaHistoricoUpdateInput, CargaHistoricoUncheckedUpdateInput>
    /**
     * Choose, which CargaHistorico to update.
     */
    where: CargaHistoricoWhereUniqueInput
  }

  /**
   * CargaHistorico updateMany
   */
  export type CargaHistoricoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CargaHistoricos.
     */
    data: XOR<CargaHistoricoUpdateManyMutationInput, CargaHistoricoUncheckedUpdateManyInput>
    /**
     * Filter which CargaHistoricos to update
     */
    where?: CargaHistoricoWhereInput
    /**
     * Limit how many CargaHistoricos to update.
     */
    limit?: number
  }

  /**
   * CargaHistorico updateManyAndReturn
   */
  export type CargaHistoricoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * The data used to update CargaHistoricos.
     */
    data: XOR<CargaHistoricoUpdateManyMutationInput, CargaHistoricoUncheckedUpdateManyInput>
    /**
     * Filter which CargaHistoricos to update
     */
    where?: CargaHistoricoWhereInput
    /**
     * Limit how many CargaHistoricos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CargaHistorico upsert
   */
  export type CargaHistoricoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * The filter to search for the CargaHistorico to update in case it exists.
     */
    where: CargaHistoricoWhereUniqueInput
    /**
     * In case the CargaHistorico found by the `where` argument doesn't exist, create a new CargaHistorico with this data.
     */
    create: XOR<CargaHistoricoCreateInput, CargaHistoricoUncheckedCreateInput>
    /**
     * In case the CargaHistorico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CargaHistoricoUpdateInput, CargaHistoricoUncheckedUpdateInput>
  }

  /**
   * CargaHistorico delete
   */
  export type CargaHistoricoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
    /**
     * Filter which CargaHistorico to delete.
     */
    where: CargaHistoricoWhereUniqueInput
  }

  /**
   * CargaHistorico deleteMany
   */
  export type CargaHistoricoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CargaHistoricos to delete
     */
    where?: CargaHistoricoWhereInput
    /**
     * Limit how many CargaHistoricos to delete.
     */
    limit?: number
  }

  /**
   * CargaHistorico without action
   */
  export type CargaHistoricoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CargaHistorico
     */
    select?: CargaHistoricoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CargaHistorico
     */
    omit?: CargaHistoricoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CargaHistoricoInclude<ExtArgs> | null
  }


  /**
   * Model ScraperLog
   */

  export type AggregateScraperLog = {
    _count: ScraperLogCountAggregateOutputType | null
    _min: ScraperLogMinAggregateOutputType | null
    _max: ScraperLogMaxAggregateOutputType | null
  }

  export type ScraperLogMinAggregateOutputType = {
    id: string | null
    level: string | null
    message: string | null
    context: string | null
    error: string | null
    executionId: string | null
    timestamp: Date | null
  }

  export type ScraperLogMaxAggregateOutputType = {
    id: string | null
    level: string | null
    message: string | null
    context: string | null
    error: string | null
    executionId: string | null
    timestamp: Date | null
  }

  export type ScraperLogCountAggregateOutputType = {
    id: number
    level: number
    message: number
    context: number
    error: number
    executionId: number
    timestamp: number
    _all: number
  }


  export type ScraperLogMinAggregateInputType = {
    id?: true
    level?: true
    message?: true
    context?: true
    error?: true
    executionId?: true
    timestamp?: true
  }

  export type ScraperLogMaxAggregateInputType = {
    id?: true
    level?: true
    message?: true
    context?: true
    error?: true
    executionId?: true
    timestamp?: true
  }

  export type ScraperLogCountAggregateInputType = {
    id?: true
    level?: true
    message?: true
    context?: true
    error?: true
    executionId?: true
    timestamp?: true
    _all?: true
  }

  export type ScraperLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScraperLog to aggregate.
     */
    where?: ScraperLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScraperLogs to fetch.
     */
    orderBy?: ScraperLogOrderByWithRelationInput | ScraperLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScraperLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScraperLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScraperLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScraperLogs
    **/
    _count?: true | ScraperLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScraperLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScraperLogMaxAggregateInputType
  }

  export type GetScraperLogAggregateType<T extends ScraperLogAggregateArgs> = {
        [P in keyof T & keyof AggregateScraperLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScraperLog[P]>
      : GetScalarType<T[P], AggregateScraperLog[P]>
  }




  export type ScraperLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScraperLogWhereInput
    orderBy?: ScraperLogOrderByWithAggregationInput | ScraperLogOrderByWithAggregationInput[]
    by: ScraperLogScalarFieldEnum[] | ScraperLogScalarFieldEnum
    having?: ScraperLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScraperLogCountAggregateInputType | true
    _min?: ScraperLogMinAggregateInputType
    _max?: ScraperLogMaxAggregateInputType
  }

  export type ScraperLogGroupByOutputType = {
    id: string
    level: string
    message: string
    context: string | null
    error: string | null
    executionId: string | null
    timestamp: Date
    _count: ScraperLogCountAggregateOutputType | null
    _min: ScraperLogMinAggregateOutputType | null
    _max: ScraperLogMaxAggregateOutputType | null
  }

  type GetScraperLogGroupByPayload<T extends ScraperLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScraperLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScraperLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScraperLogGroupByOutputType[P]>
            : GetScalarType<T[P], ScraperLogGroupByOutputType[P]>
        }
      >
    >


  export type ScraperLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    error?: boolean
    executionId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["scraperLog"]>

  export type ScraperLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    error?: boolean
    executionId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["scraperLog"]>

  export type ScraperLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    error?: boolean
    executionId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["scraperLog"]>

  export type ScraperLogSelectScalar = {
    id?: boolean
    level?: boolean
    message?: boolean
    context?: boolean
    error?: boolean
    executionId?: boolean
    timestamp?: boolean
  }

  export type ScraperLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "message" | "context" | "error" | "executionId" | "timestamp", ExtArgs["result"]["scraperLog"]>

  export type $ScraperLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScraperLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      level: string
      message: string
      context: string | null
      error: string | null
      executionId: string | null
      timestamp: Date
    }, ExtArgs["result"]["scraperLog"]>
    composites: {}
  }

  type ScraperLogGetPayload<S extends boolean | null | undefined | ScraperLogDefaultArgs> = $Result.GetResult<Prisma.$ScraperLogPayload, S>

  type ScraperLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScraperLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScraperLogCountAggregateInputType | true
    }

  export interface ScraperLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScraperLog'], meta: { name: 'ScraperLog' } }
    /**
     * Find zero or one ScraperLog that matches the filter.
     * @param {ScraperLogFindUniqueArgs} args - Arguments to find a ScraperLog
     * @example
     * // Get one ScraperLog
     * const scraperLog = await prisma.scraperLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScraperLogFindUniqueArgs>(args: SelectSubset<T, ScraperLogFindUniqueArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScraperLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScraperLogFindUniqueOrThrowArgs} args - Arguments to find a ScraperLog
     * @example
     * // Get one ScraperLog
     * const scraperLog = await prisma.scraperLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScraperLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ScraperLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScraperLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogFindFirstArgs} args - Arguments to find a ScraperLog
     * @example
     * // Get one ScraperLog
     * const scraperLog = await prisma.scraperLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScraperLogFindFirstArgs>(args?: SelectSubset<T, ScraperLogFindFirstArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScraperLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogFindFirstOrThrowArgs} args - Arguments to find a ScraperLog
     * @example
     * // Get one ScraperLog
     * const scraperLog = await prisma.scraperLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScraperLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ScraperLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScraperLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScraperLogs
     * const scraperLogs = await prisma.scraperLog.findMany()
     * 
     * // Get first 10 ScraperLogs
     * const scraperLogs = await prisma.scraperLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scraperLogWithIdOnly = await prisma.scraperLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScraperLogFindManyArgs>(args?: SelectSubset<T, ScraperLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScraperLog.
     * @param {ScraperLogCreateArgs} args - Arguments to create a ScraperLog.
     * @example
     * // Create one ScraperLog
     * const ScraperLog = await prisma.scraperLog.create({
     *   data: {
     *     // ... data to create a ScraperLog
     *   }
     * })
     * 
     */
    create<T extends ScraperLogCreateArgs>(args: SelectSubset<T, ScraperLogCreateArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScraperLogs.
     * @param {ScraperLogCreateManyArgs} args - Arguments to create many ScraperLogs.
     * @example
     * // Create many ScraperLogs
     * const scraperLog = await prisma.scraperLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScraperLogCreateManyArgs>(args?: SelectSubset<T, ScraperLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScraperLogs and returns the data saved in the database.
     * @param {ScraperLogCreateManyAndReturnArgs} args - Arguments to create many ScraperLogs.
     * @example
     * // Create many ScraperLogs
     * const scraperLog = await prisma.scraperLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScraperLogs and only return the `id`
     * const scraperLogWithIdOnly = await prisma.scraperLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScraperLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ScraperLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScraperLog.
     * @param {ScraperLogDeleteArgs} args - Arguments to delete one ScraperLog.
     * @example
     * // Delete one ScraperLog
     * const ScraperLog = await prisma.scraperLog.delete({
     *   where: {
     *     // ... filter to delete one ScraperLog
     *   }
     * })
     * 
     */
    delete<T extends ScraperLogDeleteArgs>(args: SelectSubset<T, ScraperLogDeleteArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScraperLog.
     * @param {ScraperLogUpdateArgs} args - Arguments to update one ScraperLog.
     * @example
     * // Update one ScraperLog
     * const scraperLog = await prisma.scraperLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScraperLogUpdateArgs>(args: SelectSubset<T, ScraperLogUpdateArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScraperLogs.
     * @param {ScraperLogDeleteManyArgs} args - Arguments to filter ScraperLogs to delete.
     * @example
     * // Delete a few ScraperLogs
     * const { count } = await prisma.scraperLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScraperLogDeleteManyArgs>(args?: SelectSubset<T, ScraperLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScraperLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScraperLogs
     * const scraperLog = await prisma.scraperLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScraperLogUpdateManyArgs>(args: SelectSubset<T, ScraperLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScraperLogs and returns the data updated in the database.
     * @param {ScraperLogUpdateManyAndReturnArgs} args - Arguments to update many ScraperLogs.
     * @example
     * // Update many ScraperLogs
     * const scraperLog = await prisma.scraperLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScraperLogs and only return the `id`
     * const scraperLogWithIdOnly = await prisma.scraperLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScraperLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ScraperLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScraperLog.
     * @param {ScraperLogUpsertArgs} args - Arguments to update or create a ScraperLog.
     * @example
     * // Update or create a ScraperLog
     * const scraperLog = await prisma.scraperLog.upsert({
     *   create: {
     *     // ... data to create a ScraperLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScraperLog we want to update
     *   }
     * })
     */
    upsert<T extends ScraperLogUpsertArgs>(args: SelectSubset<T, ScraperLogUpsertArgs<ExtArgs>>): Prisma__ScraperLogClient<$Result.GetResult<Prisma.$ScraperLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScraperLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogCountArgs} args - Arguments to filter ScraperLogs to count.
     * @example
     * // Count the number of ScraperLogs
     * const count = await prisma.scraperLog.count({
     *   where: {
     *     // ... the filter for the ScraperLogs we want to count
     *   }
     * })
    **/
    count<T extends ScraperLogCountArgs>(
      args?: Subset<T, ScraperLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScraperLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScraperLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScraperLogAggregateArgs>(args: Subset<T, ScraperLogAggregateArgs>): Prisma.PrismaPromise<GetScraperLogAggregateType<T>>

    /**
     * Group by ScraperLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScraperLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScraperLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScraperLogGroupByArgs['orderBy'] }
        : { orderBy?: ScraperLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScraperLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScraperLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScraperLog model
   */
  readonly fields: ScraperLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScraperLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScraperLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScraperLog model
   */
  interface ScraperLogFieldRefs {
    readonly id: FieldRef<"ScraperLog", 'String'>
    readonly level: FieldRef<"ScraperLog", 'String'>
    readonly message: FieldRef<"ScraperLog", 'String'>
    readonly context: FieldRef<"ScraperLog", 'String'>
    readonly error: FieldRef<"ScraperLog", 'String'>
    readonly executionId: FieldRef<"ScraperLog", 'String'>
    readonly timestamp: FieldRef<"ScraperLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScraperLog findUnique
   */
  export type ScraperLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * Filter, which ScraperLog to fetch.
     */
    where: ScraperLogWhereUniqueInput
  }

  /**
   * ScraperLog findUniqueOrThrow
   */
  export type ScraperLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * Filter, which ScraperLog to fetch.
     */
    where: ScraperLogWhereUniqueInput
  }

  /**
   * ScraperLog findFirst
   */
  export type ScraperLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * Filter, which ScraperLog to fetch.
     */
    where?: ScraperLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScraperLogs to fetch.
     */
    orderBy?: ScraperLogOrderByWithRelationInput | ScraperLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScraperLogs.
     */
    cursor?: ScraperLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScraperLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScraperLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScraperLogs.
     */
    distinct?: ScraperLogScalarFieldEnum | ScraperLogScalarFieldEnum[]
  }

  /**
   * ScraperLog findFirstOrThrow
   */
  export type ScraperLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * Filter, which ScraperLog to fetch.
     */
    where?: ScraperLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScraperLogs to fetch.
     */
    orderBy?: ScraperLogOrderByWithRelationInput | ScraperLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScraperLogs.
     */
    cursor?: ScraperLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScraperLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScraperLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScraperLogs.
     */
    distinct?: ScraperLogScalarFieldEnum | ScraperLogScalarFieldEnum[]
  }

  /**
   * ScraperLog findMany
   */
  export type ScraperLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * Filter, which ScraperLogs to fetch.
     */
    where?: ScraperLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScraperLogs to fetch.
     */
    orderBy?: ScraperLogOrderByWithRelationInput | ScraperLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScraperLogs.
     */
    cursor?: ScraperLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScraperLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScraperLogs.
     */
    skip?: number
    distinct?: ScraperLogScalarFieldEnum | ScraperLogScalarFieldEnum[]
  }

  /**
   * ScraperLog create
   */
  export type ScraperLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * The data needed to create a ScraperLog.
     */
    data: XOR<ScraperLogCreateInput, ScraperLogUncheckedCreateInput>
  }

  /**
   * ScraperLog createMany
   */
  export type ScraperLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScraperLogs.
     */
    data: ScraperLogCreateManyInput | ScraperLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScraperLog createManyAndReturn
   */
  export type ScraperLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * The data used to create many ScraperLogs.
     */
    data: ScraperLogCreateManyInput | ScraperLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScraperLog update
   */
  export type ScraperLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * The data needed to update a ScraperLog.
     */
    data: XOR<ScraperLogUpdateInput, ScraperLogUncheckedUpdateInput>
    /**
     * Choose, which ScraperLog to update.
     */
    where: ScraperLogWhereUniqueInput
  }

  /**
   * ScraperLog updateMany
   */
  export type ScraperLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScraperLogs.
     */
    data: XOR<ScraperLogUpdateManyMutationInput, ScraperLogUncheckedUpdateManyInput>
    /**
     * Filter which ScraperLogs to update
     */
    where?: ScraperLogWhereInput
    /**
     * Limit how many ScraperLogs to update.
     */
    limit?: number
  }

  /**
   * ScraperLog updateManyAndReturn
   */
  export type ScraperLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * The data used to update ScraperLogs.
     */
    data: XOR<ScraperLogUpdateManyMutationInput, ScraperLogUncheckedUpdateManyInput>
    /**
     * Filter which ScraperLogs to update
     */
    where?: ScraperLogWhereInput
    /**
     * Limit how many ScraperLogs to update.
     */
    limit?: number
  }

  /**
   * ScraperLog upsert
   */
  export type ScraperLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * The filter to search for the ScraperLog to update in case it exists.
     */
    where: ScraperLogWhereUniqueInput
    /**
     * In case the ScraperLog found by the `where` argument doesn't exist, create a new ScraperLog with this data.
     */
    create: XOR<ScraperLogCreateInput, ScraperLogUncheckedCreateInput>
    /**
     * In case the ScraperLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScraperLogUpdateInput, ScraperLogUncheckedUpdateInput>
  }

  /**
   * ScraperLog delete
   */
  export type ScraperLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
    /**
     * Filter which ScraperLog to delete.
     */
    where: ScraperLogWhereUniqueInput
  }

  /**
   * ScraperLog deleteMany
   */
  export type ScraperLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScraperLogs to delete
     */
    where?: ScraperLogWhereInput
    /**
     * Limit how many ScraperLogs to delete.
     */
    limit?: number
  }

  /**
   * ScraperLog without action
   */
  export type ScraperLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScraperLog
     */
    select?: ScraperLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScraperLog
     */
    omit?: ScraperLogOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CargaScalarFieldEnum: {
    id: 'id',
    viagem: 'viagem',
    tipoTransporte: 'tipoTransporte',
    origem: 'origem',
    destino: 'destino',
    produto: 'produto',
    equipamento: 'equipamento',
    prevColeta: 'prevColeta',
    qtdeEntregas: 'qtdeEntregas',
    vrFrete: 'vrFrete',
    termino: 'termino',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CargaScalarFieldEnum = (typeof CargaScalarFieldEnum)[keyof typeof CargaScalarFieldEnum]


  export const CargaHistoricoScalarFieldEnum: {
    id: 'id',
    cargaId: 'cargaId',
    viagem: 'viagem',
    tipoTransporte: 'tipoTransporte',
    origem: 'origem',
    destino: 'destino',
    produto: 'produto',
    equipamento: 'equipamento',
    prevColeta: 'prevColeta',
    qtdeEntregas: 'qtdeEntregas',
    vrFrete: 'vrFrete',
    termino: 'termino',
    changeType: 'changeType',
    changedAt: 'changedAt'
  };

  export type CargaHistoricoScalarFieldEnum = (typeof CargaHistoricoScalarFieldEnum)[keyof typeof CargaHistoricoScalarFieldEnum]


  export const ScraperLogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    message: 'message',
    context: 'context',
    error: 'error',
    executionId: 'executionId',
    timestamp: 'timestamp'
  };

  export type ScraperLogScalarFieldEnum = (typeof ScraperLogScalarFieldEnum)[keyof typeof ScraperLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CargaWhereInput = {
    AND?: CargaWhereInput | CargaWhereInput[]
    OR?: CargaWhereInput[]
    NOT?: CargaWhereInput | CargaWhereInput[]
    id?: StringFilter<"Carga"> | string
    viagem?: StringFilter<"Carga"> | string
    tipoTransporte?: StringFilter<"Carga"> | string
    origem?: StringFilter<"Carga"> | string
    destino?: StringFilter<"Carga"> | string
    produto?: StringFilter<"Carga"> | string
    equipamento?: StringFilter<"Carga"> | string
    prevColeta?: StringFilter<"Carga"> | string
    qtdeEntregas?: StringFilter<"Carga"> | string
    vrFrete?: StringFilter<"Carga"> | string
    termino?: StringFilter<"Carga"> | string
    createdAt?: DateTimeFilter<"Carga"> | Date | string
    updatedAt?: DateTimeFilter<"Carga"> | Date | string
    historico?: CargaHistoricoListRelationFilter
  }

  export type CargaOrderByWithRelationInput = {
    id?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    historico?: CargaHistoricoOrderByRelationAggregateInput
  }

  export type CargaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    viagem?: string
    AND?: CargaWhereInput | CargaWhereInput[]
    OR?: CargaWhereInput[]
    NOT?: CargaWhereInput | CargaWhereInput[]
    tipoTransporte?: StringFilter<"Carga"> | string
    origem?: StringFilter<"Carga"> | string
    destino?: StringFilter<"Carga"> | string
    produto?: StringFilter<"Carga"> | string
    equipamento?: StringFilter<"Carga"> | string
    prevColeta?: StringFilter<"Carga"> | string
    qtdeEntregas?: StringFilter<"Carga"> | string
    vrFrete?: StringFilter<"Carga"> | string
    termino?: StringFilter<"Carga"> | string
    createdAt?: DateTimeFilter<"Carga"> | Date | string
    updatedAt?: DateTimeFilter<"Carga"> | Date | string
    historico?: CargaHistoricoListRelationFilter
  }, "id" | "viagem">

  export type CargaOrderByWithAggregationInput = {
    id?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CargaCountOrderByAggregateInput
    _max?: CargaMaxOrderByAggregateInput
    _min?: CargaMinOrderByAggregateInput
  }

  export type CargaScalarWhereWithAggregatesInput = {
    AND?: CargaScalarWhereWithAggregatesInput | CargaScalarWhereWithAggregatesInput[]
    OR?: CargaScalarWhereWithAggregatesInput[]
    NOT?: CargaScalarWhereWithAggregatesInput | CargaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Carga"> | string
    viagem?: StringWithAggregatesFilter<"Carga"> | string
    tipoTransporte?: StringWithAggregatesFilter<"Carga"> | string
    origem?: StringWithAggregatesFilter<"Carga"> | string
    destino?: StringWithAggregatesFilter<"Carga"> | string
    produto?: StringWithAggregatesFilter<"Carga"> | string
    equipamento?: StringWithAggregatesFilter<"Carga"> | string
    prevColeta?: StringWithAggregatesFilter<"Carga"> | string
    qtdeEntregas?: StringWithAggregatesFilter<"Carga"> | string
    vrFrete?: StringWithAggregatesFilter<"Carga"> | string
    termino?: StringWithAggregatesFilter<"Carga"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Carga"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Carga"> | Date | string
  }

  export type CargaHistoricoWhereInput = {
    AND?: CargaHistoricoWhereInput | CargaHistoricoWhereInput[]
    OR?: CargaHistoricoWhereInput[]
    NOT?: CargaHistoricoWhereInput | CargaHistoricoWhereInput[]
    id?: StringFilter<"CargaHistorico"> | string
    cargaId?: StringFilter<"CargaHistorico"> | string
    viagem?: StringFilter<"CargaHistorico"> | string
    tipoTransporte?: StringFilter<"CargaHistorico"> | string
    origem?: StringFilter<"CargaHistorico"> | string
    destino?: StringFilter<"CargaHistorico"> | string
    produto?: StringFilter<"CargaHistorico"> | string
    equipamento?: StringFilter<"CargaHistorico"> | string
    prevColeta?: StringFilter<"CargaHistorico"> | string
    qtdeEntregas?: StringFilter<"CargaHistorico"> | string
    vrFrete?: StringFilter<"CargaHistorico"> | string
    termino?: StringFilter<"CargaHistorico"> | string
    changeType?: StringFilter<"CargaHistorico"> | string
    changedAt?: DateTimeFilter<"CargaHistorico"> | Date | string
    carga?: XOR<CargaScalarRelationFilter, CargaWhereInput>
  }

  export type CargaHistoricoOrderByWithRelationInput = {
    id?: SortOrder
    cargaId?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    changeType?: SortOrder
    changedAt?: SortOrder
    carga?: CargaOrderByWithRelationInput
  }

  export type CargaHistoricoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CargaHistoricoWhereInput | CargaHistoricoWhereInput[]
    OR?: CargaHistoricoWhereInput[]
    NOT?: CargaHistoricoWhereInput | CargaHistoricoWhereInput[]
    cargaId?: StringFilter<"CargaHistorico"> | string
    viagem?: StringFilter<"CargaHistorico"> | string
    tipoTransporte?: StringFilter<"CargaHistorico"> | string
    origem?: StringFilter<"CargaHistorico"> | string
    destino?: StringFilter<"CargaHistorico"> | string
    produto?: StringFilter<"CargaHistorico"> | string
    equipamento?: StringFilter<"CargaHistorico"> | string
    prevColeta?: StringFilter<"CargaHistorico"> | string
    qtdeEntregas?: StringFilter<"CargaHistorico"> | string
    vrFrete?: StringFilter<"CargaHistorico"> | string
    termino?: StringFilter<"CargaHistorico"> | string
    changeType?: StringFilter<"CargaHistorico"> | string
    changedAt?: DateTimeFilter<"CargaHistorico"> | Date | string
    carga?: XOR<CargaScalarRelationFilter, CargaWhereInput>
  }, "id">

  export type CargaHistoricoOrderByWithAggregationInput = {
    id?: SortOrder
    cargaId?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    changeType?: SortOrder
    changedAt?: SortOrder
    _count?: CargaHistoricoCountOrderByAggregateInput
    _max?: CargaHistoricoMaxOrderByAggregateInput
    _min?: CargaHistoricoMinOrderByAggregateInput
  }

  export type CargaHistoricoScalarWhereWithAggregatesInput = {
    AND?: CargaHistoricoScalarWhereWithAggregatesInput | CargaHistoricoScalarWhereWithAggregatesInput[]
    OR?: CargaHistoricoScalarWhereWithAggregatesInput[]
    NOT?: CargaHistoricoScalarWhereWithAggregatesInput | CargaHistoricoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CargaHistorico"> | string
    cargaId?: StringWithAggregatesFilter<"CargaHistorico"> | string
    viagem?: StringWithAggregatesFilter<"CargaHistorico"> | string
    tipoTransporte?: StringWithAggregatesFilter<"CargaHistorico"> | string
    origem?: StringWithAggregatesFilter<"CargaHistorico"> | string
    destino?: StringWithAggregatesFilter<"CargaHistorico"> | string
    produto?: StringWithAggregatesFilter<"CargaHistorico"> | string
    equipamento?: StringWithAggregatesFilter<"CargaHistorico"> | string
    prevColeta?: StringWithAggregatesFilter<"CargaHistorico"> | string
    qtdeEntregas?: StringWithAggregatesFilter<"CargaHistorico"> | string
    vrFrete?: StringWithAggregatesFilter<"CargaHistorico"> | string
    termino?: StringWithAggregatesFilter<"CargaHistorico"> | string
    changeType?: StringWithAggregatesFilter<"CargaHistorico"> | string
    changedAt?: DateTimeWithAggregatesFilter<"CargaHistorico"> | Date | string
  }

  export type ScraperLogWhereInput = {
    AND?: ScraperLogWhereInput | ScraperLogWhereInput[]
    OR?: ScraperLogWhereInput[]
    NOT?: ScraperLogWhereInput | ScraperLogWhereInput[]
    id?: StringFilter<"ScraperLog"> | string
    level?: StringFilter<"ScraperLog"> | string
    message?: StringFilter<"ScraperLog"> | string
    context?: StringNullableFilter<"ScraperLog"> | string | null
    error?: StringNullableFilter<"ScraperLog"> | string | null
    executionId?: StringNullableFilter<"ScraperLog"> | string | null
    timestamp?: DateTimeFilter<"ScraperLog"> | Date | string
  }

  export type ScraperLogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    executionId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type ScraperLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScraperLogWhereInput | ScraperLogWhereInput[]
    OR?: ScraperLogWhereInput[]
    NOT?: ScraperLogWhereInput | ScraperLogWhereInput[]
    level?: StringFilter<"ScraperLog"> | string
    message?: StringFilter<"ScraperLog"> | string
    context?: StringNullableFilter<"ScraperLog"> | string | null
    error?: StringNullableFilter<"ScraperLog"> | string | null
    executionId?: StringNullableFilter<"ScraperLog"> | string | null
    timestamp?: DateTimeFilter<"ScraperLog"> | Date | string
  }, "id">

  export type ScraperLogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrderInput | SortOrder
    error?: SortOrderInput | SortOrder
    executionId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: ScraperLogCountOrderByAggregateInput
    _max?: ScraperLogMaxOrderByAggregateInput
    _min?: ScraperLogMinOrderByAggregateInput
  }

  export type ScraperLogScalarWhereWithAggregatesInput = {
    AND?: ScraperLogScalarWhereWithAggregatesInput | ScraperLogScalarWhereWithAggregatesInput[]
    OR?: ScraperLogScalarWhereWithAggregatesInput[]
    NOT?: ScraperLogScalarWhereWithAggregatesInput | ScraperLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScraperLog"> | string
    level?: StringWithAggregatesFilter<"ScraperLog"> | string
    message?: StringWithAggregatesFilter<"ScraperLog"> | string
    context?: StringNullableWithAggregatesFilter<"ScraperLog"> | string | null
    error?: StringNullableWithAggregatesFilter<"ScraperLog"> | string | null
    executionId?: StringNullableWithAggregatesFilter<"ScraperLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"ScraperLog"> | Date | string
  }

  export type CargaCreateInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: CargaHistoricoCreateNestedManyWithoutCargaInput
  }

  export type CargaUncheckedCreateInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    createdAt?: Date | string
    updatedAt?: Date | string
    historico?: CargaHistoricoUncheckedCreateNestedManyWithoutCargaInput
  }

  export type CargaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: CargaHistoricoUpdateManyWithoutCargaNestedInput
  }

  export type CargaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historico?: CargaHistoricoUncheckedUpdateManyWithoutCargaNestedInput
  }

  export type CargaCreateManyInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CargaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaHistoricoCreateInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt?: Date | string
    carga: CargaCreateNestedOneWithoutHistoricoInput
  }

  export type CargaHistoricoUncheckedCreateInput = {
    id?: string
    cargaId: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt?: Date | string
  }

  export type CargaHistoricoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    carga?: CargaUpdateOneRequiredWithoutHistoricoNestedInput
  }

  export type CargaHistoricoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargaId?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaHistoricoCreateManyInput = {
    id?: string
    cargaId: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt?: Date | string
  }

  export type CargaHistoricoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaHistoricoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cargaId?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScraperLogCreateInput = {
    id?: string
    level: string
    message: string
    context?: string | null
    error?: string | null
    executionId?: string | null
    timestamp?: Date | string
  }

  export type ScraperLogUncheckedCreateInput = {
    id?: string
    level: string
    message: string
    context?: string | null
    error?: string | null
    executionId?: string | null
    timestamp?: Date | string
  }

  export type ScraperLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    executionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScraperLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    executionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScraperLogCreateManyInput = {
    id?: string
    level: string
    message: string
    context?: string | null
    error?: string | null
    executionId?: string | null
    timestamp?: Date | string
  }

  export type ScraperLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    executionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScraperLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    context?: NullableStringFieldUpdateOperationsInput | string | null
    error?: NullableStringFieldUpdateOperationsInput | string | null
    executionId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CargaHistoricoListRelationFilter = {
    every?: CargaHistoricoWhereInput
    some?: CargaHistoricoWhereInput
    none?: CargaHistoricoWhereInput
  }

  export type CargaHistoricoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CargaCountOrderByAggregateInput = {
    id?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CargaMaxOrderByAggregateInput = {
    id?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CargaMinOrderByAggregateInput = {
    id?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CargaScalarRelationFilter = {
    is?: CargaWhereInput
    isNot?: CargaWhereInput
  }

  export type CargaHistoricoCountOrderByAggregateInput = {
    id?: SortOrder
    cargaId?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    changeType?: SortOrder
    changedAt?: SortOrder
  }

  export type CargaHistoricoMaxOrderByAggregateInput = {
    id?: SortOrder
    cargaId?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    changeType?: SortOrder
    changedAt?: SortOrder
  }

  export type CargaHistoricoMinOrderByAggregateInput = {
    id?: SortOrder
    cargaId?: SortOrder
    viagem?: SortOrder
    tipoTransporte?: SortOrder
    origem?: SortOrder
    destino?: SortOrder
    produto?: SortOrder
    equipamento?: SortOrder
    prevColeta?: SortOrder
    qtdeEntregas?: SortOrder
    vrFrete?: SortOrder
    termino?: SortOrder
    changeType?: SortOrder
    changedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ScraperLogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrder
    error?: SortOrder
    executionId?: SortOrder
    timestamp?: SortOrder
  }

  export type ScraperLogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrder
    error?: SortOrder
    executionId?: SortOrder
    timestamp?: SortOrder
  }

  export type ScraperLogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    message?: SortOrder
    context?: SortOrder
    error?: SortOrder
    executionId?: SortOrder
    timestamp?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CargaHistoricoCreateNestedManyWithoutCargaInput = {
    create?: XOR<CargaHistoricoCreateWithoutCargaInput, CargaHistoricoUncheckedCreateWithoutCargaInput> | CargaHistoricoCreateWithoutCargaInput[] | CargaHistoricoUncheckedCreateWithoutCargaInput[]
    connectOrCreate?: CargaHistoricoCreateOrConnectWithoutCargaInput | CargaHistoricoCreateOrConnectWithoutCargaInput[]
    createMany?: CargaHistoricoCreateManyCargaInputEnvelope
    connect?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
  }

  export type CargaHistoricoUncheckedCreateNestedManyWithoutCargaInput = {
    create?: XOR<CargaHistoricoCreateWithoutCargaInput, CargaHistoricoUncheckedCreateWithoutCargaInput> | CargaHistoricoCreateWithoutCargaInput[] | CargaHistoricoUncheckedCreateWithoutCargaInput[]
    connectOrCreate?: CargaHistoricoCreateOrConnectWithoutCargaInput | CargaHistoricoCreateOrConnectWithoutCargaInput[]
    createMany?: CargaHistoricoCreateManyCargaInputEnvelope
    connect?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CargaHistoricoUpdateManyWithoutCargaNestedInput = {
    create?: XOR<CargaHistoricoCreateWithoutCargaInput, CargaHistoricoUncheckedCreateWithoutCargaInput> | CargaHistoricoCreateWithoutCargaInput[] | CargaHistoricoUncheckedCreateWithoutCargaInput[]
    connectOrCreate?: CargaHistoricoCreateOrConnectWithoutCargaInput | CargaHistoricoCreateOrConnectWithoutCargaInput[]
    upsert?: CargaHistoricoUpsertWithWhereUniqueWithoutCargaInput | CargaHistoricoUpsertWithWhereUniqueWithoutCargaInput[]
    createMany?: CargaHistoricoCreateManyCargaInputEnvelope
    set?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    disconnect?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    delete?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    connect?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    update?: CargaHistoricoUpdateWithWhereUniqueWithoutCargaInput | CargaHistoricoUpdateWithWhereUniqueWithoutCargaInput[]
    updateMany?: CargaHistoricoUpdateManyWithWhereWithoutCargaInput | CargaHistoricoUpdateManyWithWhereWithoutCargaInput[]
    deleteMany?: CargaHistoricoScalarWhereInput | CargaHistoricoScalarWhereInput[]
  }

  export type CargaHistoricoUncheckedUpdateManyWithoutCargaNestedInput = {
    create?: XOR<CargaHistoricoCreateWithoutCargaInput, CargaHistoricoUncheckedCreateWithoutCargaInput> | CargaHistoricoCreateWithoutCargaInput[] | CargaHistoricoUncheckedCreateWithoutCargaInput[]
    connectOrCreate?: CargaHistoricoCreateOrConnectWithoutCargaInput | CargaHistoricoCreateOrConnectWithoutCargaInput[]
    upsert?: CargaHistoricoUpsertWithWhereUniqueWithoutCargaInput | CargaHistoricoUpsertWithWhereUniqueWithoutCargaInput[]
    createMany?: CargaHistoricoCreateManyCargaInputEnvelope
    set?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    disconnect?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    delete?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    connect?: CargaHistoricoWhereUniqueInput | CargaHistoricoWhereUniqueInput[]
    update?: CargaHistoricoUpdateWithWhereUniqueWithoutCargaInput | CargaHistoricoUpdateWithWhereUniqueWithoutCargaInput[]
    updateMany?: CargaHistoricoUpdateManyWithWhereWithoutCargaInput | CargaHistoricoUpdateManyWithWhereWithoutCargaInput[]
    deleteMany?: CargaHistoricoScalarWhereInput | CargaHistoricoScalarWhereInput[]
  }

  export type CargaCreateNestedOneWithoutHistoricoInput = {
    create?: XOR<CargaCreateWithoutHistoricoInput, CargaUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: CargaCreateOrConnectWithoutHistoricoInput
    connect?: CargaWhereUniqueInput
  }

  export type CargaUpdateOneRequiredWithoutHistoricoNestedInput = {
    create?: XOR<CargaCreateWithoutHistoricoInput, CargaUncheckedCreateWithoutHistoricoInput>
    connectOrCreate?: CargaCreateOrConnectWithoutHistoricoInput
    upsert?: CargaUpsertWithoutHistoricoInput
    connect?: CargaWhereUniqueInput
    update?: XOR<XOR<CargaUpdateToOneWithWhereWithoutHistoricoInput, CargaUpdateWithoutHistoricoInput>, CargaUncheckedUpdateWithoutHistoricoInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CargaHistoricoCreateWithoutCargaInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt?: Date | string
  }

  export type CargaHistoricoUncheckedCreateWithoutCargaInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt?: Date | string
  }

  export type CargaHistoricoCreateOrConnectWithoutCargaInput = {
    where: CargaHistoricoWhereUniqueInput
    create: XOR<CargaHistoricoCreateWithoutCargaInput, CargaHistoricoUncheckedCreateWithoutCargaInput>
  }

  export type CargaHistoricoCreateManyCargaInputEnvelope = {
    data: CargaHistoricoCreateManyCargaInput | CargaHistoricoCreateManyCargaInput[]
    skipDuplicates?: boolean
  }

  export type CargaHistoricoUpsertWithWhereUniqueWithoutCargaInput = {
    where: CargaHistoricoWhereUniqueInput
    update: XOR<CargaHistoricoUpdateWithoutCargaInput, CargaHistoricoUncheckedUpdateWithoutCargaInput>
    create: XOR<CargaHistoricoCreateWithoutCargaInput, CargaHistoricoUncheckedCreateWithoutCargaInput>
  }

  export type CargaHistoricoUpdateWithWhereUniqueWithoutCargaInput = {
    where: CargaHistoricoWhereUniqueInput
    data: XOR<CargaHistoricoUpdateWithoutCargaInput, CargaHistoricoUncheckedUpdateWithoutCargaInput>
  }

  export type CargaHistoricoUpdateManyWithWhereWithoutCargaInput = {
    where: CargaHistoricoScalarWhereInput
    data: XOR<CargaHistoricoUpdateManyMutationInput, CargaHistoricoUncheckedUpdateManyWithoutCargaInput>
  }

  export type CargaHistoricoScalarWhereInput = {
    AND?: CargaHistoricoScalarWhereInput | CargaHistoricoScalarWhereInput[]
    OR?: CargaHistoricoScalarWhereInput[]
    NOT?: CargaHistoricoScalarWhereInput | CargaHistoricoScalarWhereInput[]
    id?: StringFilter<"CargaHistorico"> | string
    cargaId?: StringFilter<"CargaHistorico"> | string
    viagem?: StringFilter<"CargaHistorico"> | string
    tipoTransporte?: StringFilter<"CargaHistorico"> | string
    origem?: StringFilter<"CargaHistorico"> | string
    destino?: StringFilter<"CargaHistorico"> | string
    produto?: StringFilter<"CargaHistorico"> | string
    equipamento?: StringFilter<"CargaHistorico"> | string
    prevColeta?: StringFilter<"CargaHistorico"> | string
    qtdeEntregas?: StringFilter<"CargaHistorico"> | string
    vrFrete?: StringFilter<"CargaHistorico"> | string
    termino?: StringFilter<"CargaHistorico"> | string
    changeType?: StringFilter<"CargaHistorico"> | string
    changedAt?: DateTimeFilter<"CargaHistorico"> | Date | string
  }

  export type CargaCreateWithoutHistoricoInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CargaUncheckedCreateWithoutHistoricoInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CargaCreateOrConnectWithoutHistoricoInput = {
    where: CargaWhereUniqueInput
    create: XOR<CargaCreateWithoutHistoricoInput, CargaUncheckedCreateWithoutHistoricoInput>
  }

  export type CargaUpsertWithoutHistoricoInput = {
    update: XOR<CargaUpdateWithoutHistoricoInput, CargaUncheckedUpdateWithoutHistoricoInput>
    create: XOR<CargaCreateWithoutHistoricoInput, CargaUncheckedCreateWithoutHistoricoInput>
    where?: CargaWhereInput
  }

  export type CargaUpdateToOneWithWhereWithoutHistoricoInput = {
    where?: CargaWhereInput
    data: XOR<CargaUpdateWithoutHistoricoInput, CargaUncheckedUpdateWithoutHistoricoInput>
  }

  export type CargaUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaUncheckedUpdateWithoutHistoricoInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaHistoricoCreateManyCargaInput = {
    id?: string
    viagem: string
    tipoTransporte: string
    origem: string
    destino: string
    produto: string
    equipamento: string
    prevColeta: string
    qtdeEntregas: string
    vrFrete: string
    termino: string
    changeType: string
    changedAt?: Date | string
  }

  export type CargaHistoricoUpdateWithoutCargaInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaHistoricoUncheckedUpdateWithoutCargaInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CargaHistoricoUncheckedUpdateManyWithoutCargaInput = {
    id?: StringFieldUpdateOperationsInput | string
    viagem?: StringFieldUpdateOperationsInput | string
    tipoTransporte?: StringFieldUpdateOperationsInput | string
    origem?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    produto?: StringFieldUpdateOperationsInput | string
    equipamento?: StringFieldUpdateOperationsInput | string
    prevColeta?: StringFieldUpdateOperationsInput | string
    qtdeEntregas?: StringFieldUpdateOperationsInput | string
    vrFrete?: StringFieldUpdateOperationsInput | string
    termino?: StringFieldUpdateOperationsInput | string
    changeType?: StringFieldUpdateOperationsInput | string
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}