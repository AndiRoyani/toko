
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
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Barang
 * 
 */
export type Barang = $Result.DefaultSelection<Prisma.$BarangPayload>
/**
 * Model Transaksi
 * 
 */
export type Transaksi = $Result.DefaultSelection<Prisma.$TransaksiPayload>
/**
 * Model DetailTransaksi
 * 
 */
export type DetailTransaksi = $Result.DefaultSelection<Prisma.$DetailTransaksiPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Kategoris
 * const kategoris = await prisma.kategori.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Kategoris
   * const kategoris = await prisma.kategori.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barang`: Exposes CRUD operations for the **Barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barangs
    * const barangs = await prisma.barang.findMany()
    * ```
    */
  get barang(): Prisma.BarangDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaksi`: Exposes CRUD operations for the **Transaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transaksis
    * const transaksis = await prisma.transaksi.findMany()
    * ```
    */
  get transaksi(): Prisma.TransaksiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detailTransaksi`: Exposes CRUD operations for the **DetailTransaksi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailTransaksis
    * const detailTransaksis = await prisma.detailTransaksi.findMany()
    * ```
    */
  get detailTransaksi(): Prisma.DetailTransaksiDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Kategori: 'Kategori',
    Barang: 'Barang',
    Transaksi: 'Transaksi',
    DetailTransaksi: 'DetailTransaksi'
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
      modelProps: "kategori" | "barang" | "transaksi" | "detailTransaksi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Barang: {
        payload: Prisma.$BarangPayload<ExtArgs>
        fields: Prisma.BarangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findFirst: {
            args: Prisma.BarangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          findMany: {
            args: Prisma.BarangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          create: {
            args: Prisma.BarangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          createMany: {
            args: Prisma.BarangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          delete: {
            args: Prisma.BarangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          update: {
            args: Prisma.BarangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          deleteMany: {
            args: Prisma.BarangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>[]
          }
          upsert: {
            args: Prisma.BarangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarangPayload>
          }
          aggregate: {
            args: Prisma.BarangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarang>
          }
          groupBy: {
            args: Prisma.BarangGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarangGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarangCountArgs<ExtArgs>
            result: $Utils.Optional<BarangCountAggregateOutputType> | number
          }
        }
      }
      Transaksi: {
        payload: Prisma.$TransaksiPayload<ExtArgs>
        fields: Prisma.TransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findFirst: {
            args: Prisma.TransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          findMany: {
            args: Prisma.TransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          create: {
            args: Prisma.TransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          createMany: {
            args: Prisma.TransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          delete: {
            args: Prisma.TransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          update: {
            args: Prisma.TransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          deleteMany: {
            args: Prisma.TransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>[]
          }
          upsert: {
            args: Prisma.TransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransaksiPayload>
          }
          aggregate: {
            args: Prisma.TransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaksi>
          }
          groupBy: {
            args: Prisma.TransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<TransaksiCountAggregateOutputType> | number
          }
        }
      }
      DetailTransaksi: {
        payload: Prisma.$DetailTransaksiPayload<ExtArgs>
        fields: Prisma.DetailTransaksiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetailTransaksiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetailTransaksiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          findFirst: {
            args: Prisma.DetailTransaksiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetailTransaksiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          findMany: {
            args: Prisma.DetailTransaksiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>[]
          }
          create: {
            args: Prisma.DetailTransaksiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          createMany: {
            args: Prisma.DetailTransaksiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetailTransaksiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>[]
          }
          delete: {
            args: Prisma.DetailTransaksiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          update: {
            args: Prisma.DetailTransaksiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          deleteMany: {
            args: Prisma.DetailTransaksiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetailTransaksiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetailTransaksiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>[]
          }
          upsert: {
            args: Prisma.DetailTransaksiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetailTransaksiPayload>
          }
          aggregate: {
            args: Prisma.DetailTransaksiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetailTransaksi>
          }
          groupBy: {
            args: Prisma.DetailTransaksiGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetailTransaksiGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetailTransaksiCountArgs<ExtArgs>
            result: $Utils.Optional<DetailTransaksiCountAggregateOutputType> | number
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
    kategori?: KategoriOmit
    barang?: BarangOmit
    transaksi?: TransaksiOmit
    detailTransaksi?: DetailTransaksiOmit
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
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    barang: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | KategoriCountOutputTypeCountBarangArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountBarangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
  }


  /**
   * Count Type BarangCountOutputType
   */

  export type BarangCountOutputType = {
    detailTransaksi: number
  }

  export type BarangCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detailTransaksi?: boolean | BarangCountOutputTypeCountDetailTransaksiArgs
  }

  // Custom InputTypes
  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarangCountOutputType
     */
    select?: BarangCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarangCountOutputType without action
   */
  export type BarangCountOutputTypeCountDetailTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransaksiWhereInput
  }


  /**
   * Count Type TransaksiCountOutputType
   */

  export type TransaksiCountOutputType = {
    detail: number
  }

  export type TransaksiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | TransaksiCountOutputTypeCountDetailArgs
  }

  // Custom InputTypes
  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransaksiCountOutputType
     */
    select?: TransaksiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransaksiCountOutputType without action
   */
  export type TransaksiCountOutputTypeCountDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransaksiWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type KategoriMaxAggregateOutputType = {
    id: number | null
    nama: string | null
  }

  export type KategoriCountAggregateOutputType = {
    id: number
    nama: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id?: true
  }

  export type KategoriSumAggregateInputType = {
    id?: true
  }

  export type KategoriMinAggregateInputType = {
    id?: true
    nama?: true
  }

  export type KategoriMaxAggregateInputType = {
    id?: true
    nama?: true
  }

  export type KategoriCountAggregateInputType = {
    id?: true
    nama?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id: number
    nama: string
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    barang?: boolean | Kategori$barangArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id?: boolean
    nama?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barang?: boolean | Kategori$barangArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      barang: Prisma.$BarangPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kategoriWithIdOnly = await prisma.kategori.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id`
     * const kategoriWithIdOnly = await prisma.kategori.updateManyAndReturn({
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
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
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
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barang<T extends Kategori$barangArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$barangArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kategori model
   */
  interface KategoriFieldRefs {
    readonly id: FieldRef<"Kategori", 'Int'>
    readonly nama: FieldRef<"Kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.barang
   */
  export type Kategori$barangArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    cursor?: BarangWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Barang
   */

  export type AggregateBarang = {
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  export type BarangAvgAggregateOutputType = {
    id: number | null
    harga: number | null
    stok: number | null
    kategoriId: number | null
  }

  export type BarangSumAggregateOutputType = {
    id: number | null
    harga: number | null
    stok: number | null
    kategoriId: number | null
  }

  export type BarangMinAggregateOutputType = {
    id: number | null
    nama: string | null
    harga: number | null
    stok: number | null
    kategoriId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    harga: number | null
    stok: number | null
    kategoriId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BarangCountAggregateOutputType = {
    id: number
    nama: number
    harga: number
    stok: number
    kategoriId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BarangAvgAggregateInputType = {
    id?: true
    harga?: true
    stok?: true
    kategoriId?: true
  }

  export type BarangSumAggregateInputType = {
    id?: true
    harga?: true
    stok?: true
    kategoriId?: true
  }

  export type BarangMinAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    stok?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangMaxAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    stok?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BarangCountAggregateInputType = {
    id?: true
    nama?: true
    harga?: true
    stok?: true
    kategoriId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BarangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barang to aggregate.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barangs
    **/
    _count?: true | BarangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarangMaxAggregateInputType
  }

  export type GetBarangAggregateType<T extends BarangAggregateArgs> = {
        [P in keyof T & keyof AggregateBarang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarang[P]>
      : GetScalarType<T[P], AggregateBarang[P]>
  }




  export type BarangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarangWhereInput
    orderBy?: BarangOrderByWithAggregationInput | BarangOrderByWithAggregationInput[]
    by: BarangScalarFieldEnum[] | BarangScalarFieldEnum
    having?: BarangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarangCountAggregateInputType | true
    _avg?: BarangAvgAggregateInputType
    _sum?: BarangSumAggregateInputType
    _min?: BarangMinAggregateInputType
    _max?: BarangMaxAggregateInputType
  }

  export type BarangGroupByOutputType = {
    id: number
    nama: string
    harga: number
    stok: number
    kategoriId: number
    createdAt: Date
    updatedAt: Date
    _count: BarangCountAggregateOutputType | null
    _avg: BarangAvgAggregateOutputType | null
    _sum: BarangSumAggregateOutputType | null
    _min: BarangMinAggregateOutputType | null
    _max: BarangMaxAggregateOutputType | null
  }

  type GetBarangGroupByPayload<T extends BarangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarangGroupByOutputType[P]>
            : GetScalarType<T[P], BarangGroupByOutputType[P]>
        }
      >
    >


  export type BarangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    stok?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    detailTransaksi?: boolean | Barang$detailTransaksiArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    stok?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga?: boolean
    stok?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barang"]>

  export type BarangSelectScalar = {
    id?: boolean
    nama?: boolean
    harga?: boolean
    stok?: boolean
    kategoriId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BarangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "harga" | "stok" | "kategoriId" | "createdAt" | "updatedAt", ExtArgs["result"]["barang"]>
  export type BarangInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    detailTransaksi?: boolean | Barang$detailTransaksiArgs<ExtArgs>
    _count?: boolean | BarangCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarangIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type BarangIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $BarangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barang"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
      detailTransaksi: Prisma.$DetailTransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      harga: number
      stok: number
      kategoriId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["barang"]>
    composites: {}
  }

  type BarangGetPayload<S extends boolean | null | undefined | BarangDefaultArgs> = $Result.GetResult<Prisma.$BarangPayload, S>

  type BarangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarangCountAggregateInputType | true
    }

  export interface BarangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barang'], meta: { name: 'Barang' } }
    /**
     * Find zero or one Barang that matches the filter.
     * @param {BarangFindUniqueArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarangFindUniqueArgs>(args: SelectSubset<T, BarangFindUniqueArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarangFindUniqueOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarangFindUniqueOrThrowArgs>(args: SelectSubset<T, BarangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarangFindFirstArgs>(args?: SelectSubset<T, BarangFindFirstArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindFirstOrThrowArgs} args - Arguments to find a Barang
     * @example
     * // Get one Barang
     * const barang = await prisma.barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarangFindFirstOrThrowArgs>(args?: SelectSubset<T, BarangFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barangs
     * const barangs = await prisma.barang.findMany()
     * 
     * // Get first 10 Barangs
     * const barangs = await prisma.barang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barangWithIdOnly = await prisma.barang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarangFindManyArgs>(args?: SelectSubset<T, BarangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barang.
     * @param {BarangCreateArgs} args - Arguments to create a Barang.
     * @example
     * // Create one Barang
     * const Barang = await prisma.barang.create({
     *   data: {
     *     // ... data to create a Barang
     *   }
     * })
     * 
     */
    create<T extends BarangCreateArgs>(args: SelectSubset<T, BarangCreateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barangs.
     * @param {BarangCreateManyArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarangCreateManyArgs>(args?: SelectSubset<T, BarangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barangs and returns the data saved in the database.
     * @param {BarangCreateManyAndReturnArgs} args - Arguments to create many Barangs.
     * @example
     * // Create many Barangs
     * const barang = await prisma.barang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barangs and only return the `id`
     * const barangWithIdOnly = await prisma.barang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarangCreateManyAndReturnArgs>(args?: SelectSubset<T, BarangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barang.
     * @param {BarangDeleteArgs} args - Arguments to delete one Barang.
     * @example
     * // Delete one Barang
     * const Barang = await prisma.barang.delete({
     *   where: {
     *     // ... filter to delete one Barang
     *   }
     * })
     * 
     */
    delete<T extends BarangDeleteArgs>(args: SelectSubset<T, BarangDeleteArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barang.
     * @param {BarangUpdateArgs} args - Arguments to update one Barang.
     * @example
     * // Update one Barang
     * const barang = await prisma.barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarangUpdateArgs>(args: SelectSubset<T, BarangUpdateArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barangs.
     * @param {BarangDeleteManyArgs} args - Arguments to filter Barangs to delete.
     * @example
     * // Delete a few Barangs
     * const { count } = await prisma.barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarangDeleteManyArgs>(args?: SelectSubset<T, BarangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarangUpdateManyArgs>(args: SelectSubset<T, BarangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barangs and returns the data updated in the database.
     * @param {BarangUpdateManyAndReturnArgs} args - Arguments to update many Barangs.
     * @example
     * // Update many Barangs
     * const barang = await prisma.barang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barangs and only return the `id`
     * const barangWithIdOnly = await prisma.barang.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarangUpdateManyAndReturnArgs>(args: SelectSubset<T, BarangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barang.
     * @param {BarangUpsertArgs} args - Arguments to update or create a Barang.
     * @example
     * // Update or create a Barang
     * const barang = await prisma.barang.upsert({
     *   create: {
     *     // ... data to create a Barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barang we want to update
     *   }
     * })
     */
    upsert<T extends BarangUpsertArgs>(args: SelectSubset<T, BarangUpsertArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangCountArgs} args - Arguments to filter Barangs to count.
     * @example
     * // Count the number of Barangs
     * const count = await prisma.barang.count({
     *   where: {
     *     // ... the filter for the Barangs we want to count
     *   }
     * })
    **/
    count<T extends BarangCountArgs>(
      args?: Subset<T, BarangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarangAggregateArgs>(args: Subset<T, BarangAggregateArgs>): Prisma.PrismaPromise<GetBarangAggregateType<T>>

    /**
     * Group by Barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarangGroupByArgs} args - Group by arguments.
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
      T extends BarangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarangGroupByArgs['orderBy'] }
        : { orderBy?: BarangGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barang model
   */
  readonly fields: BarangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    detailTransaksi<T extends Barang$detailTransaksiArgs<ExtArgs> = {}>(args?: Subset<T, Barang$detailTransaksiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Barang model
   */
  interface BarangFieldRefs {
    readonly id: FieldRef<"Barang", 'Int'>
    readonly nama: FieldRef<"Barang", 'String'>
    readonly harga: FieldRef<"Barang", 'Int'>
    readonly stok: FieldRef<"Barang", 'Int'>
    readonly kategoriId: FieldRef<"Barang", 'Int'>
    readonly createdAt: FieldRef<"Barang", 'DateTime'>
    readonly updatedAt: FieldRef<"Barang", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Barang findUnique
   */
  export type BarangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findUniqueOrThrow
   */
  export type BarangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang findFirst
   */
  export type BarangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findFirstOrThrow
   */
  export type BarangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barang to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang findMany
   */
  export type BarangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter, which Barangs to fetch.
     */
    where?: BarangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barangs to fetch.
     */
    orderBy?: BarangOrderByWithRelationInput | BarangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barangs.
     */
    cursor?: BarangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barangs.
     */
    distinct?: BarangScalarFieldEnum | BarangScalarFieldEnum[]
  }

  /**
   * Barang create
   */
  export type BarangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to create a Barang.
     */
    data: XOR<BarangCreateInput, BarangUncheckedCreateInput>
  }

  /**
   * Barang createMany
   */
  export type BarangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barang createManyAndReturn
   */
  export type BarangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * The data used to create many Barangs.
     */
    data: BarangCreateManyInput | BarangCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barang update
   */
  export type BarangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The data needed to update a Barang.
     */
    data: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
    /**
     * Choose, which Barang to update.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang updateMany
   */
  export type BarangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to update.
     */
    limit?: number
  }

  /**
   * Barang updateManyAndReturn
   */
  export type BarangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * The data used to update Barangs.
     */
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyInput>
    /**
     * Filter which Barangs to update
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barang upsert
   */
  export type BarangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * The filter to search for the Barang to update in case it exists.
     */
    where: BarangWhereUniqueInput
    /**
     * In case the Barang found by the `where` argument doesn't exist, create a new Barang with this data.
     */
    create: XOR<BarangCreateInput, BarangUncheckedCreateInput>
    /**
     * In case the Barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarangUpdateInput, BarangUncheckedUpdateInput>
  }

  /**
   * Barang delete
   */
  export type BarangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
    /**
     * Filter which Barang to delete.
     */
    where: BarangWhereUniqueInput
  }

  /**
   * Barang deleteMany
   */
  export type BarangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barangs to delete
     */
    where?: BarangWhereInput
    /**
     * Limit how many Barangs to delete.
     */
    limit?: number
  }

  /**
   * Barang.detailTransaksi
   */
  export type Barang$detailTransaksiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    where?: DetailTransaksiWhereInput
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    cursor?: DetailTransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * Barang without action
   */
  export type BarangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barang
     */
    select?: BarangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barang
     */
    omit?: BarangOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarangInclude<ExtArgs> | null
  }


  /**
   * Model Transaksi
   */

  export type AggregateTransaksi = {
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  export type TransaksiAvgAggregateOutputType = {
    id: number | null
    total: number | null
    bayar: number | null
    kembalian: number | null
  }

  export type TransaksiSumAggregateOutputType = {
    id: number | null
    total: number | null
    bayar: number | null
    kembalian: number | null
  }

  export type TransaksiMinAggregateOutputType = {
    id: number | null
    total: number | null
    bayar: number | null
    kembalian: number | null
    createdAt: Date | null
  }

  export type TransaksiMaxAggregateOutputType = {
    id: number | null
    total: number | null
    bayar: number | null
    kembalian: number | null
    createdAt: Date | null
  }

  export type TransaksiCountAggregateOutputType = {
    id: number
    total: number
    bayar: number
    kembalian: number
    createdAt: number
    _all: number
  }


  export type TransaksiAvgAggregateInputType = {
    id?: true
    total?: true
    bayar?: true
    kembalian?: true
  }

  export type TransaksiSumAggregateInputType = {
    id?: true
    total?: true
    bayar?: true
    kembalian?: true
  }

  export type TransaksiMinAggregateInputType = {
    id?: true
    total?: true
    bayar?: true
    kembalian?: true
    createdAt?: true
  }

  export type TransaksiMaxAggregateInputType = {
    id?: true
    total?: true
    bayar?: true
    kembalian?: true
    createdAt?: true
  }

  export type TransaksiCountAggregateInputType = {
    id?: true
    total?: true
    bayar?: true
    kembalian?: true
    createdAt?: true
    _all?: true
  }

  export type TransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksi to aggregate.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transaksis
    **/
    _count?: true | TransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransaksiMaxAggregateInputType
  }

  export type GetTransaksiAggregateType<T extends TransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaksi[P]>
      : GetScalarType<T[P], AggregateTransaksi[P]>
  }




  export type TransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransaksiWhereInput
    orderBy?: TransaksiOrderByWithAggregationInput | TransaksiOrderByWithAggregationInput[]
    by: TransaksiScalarFieldEnum[] | TransaksiScalarFieldEnum
    having?: TransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransaksiCountAggregateInputType | true
    _avg?: TransaksiAvgAggregateInputType
    _sum?: TransaksiSumAggregateInputType
    _min?: TransaksiMinAggregateInputType
    _max?: TransaksiMaxAggregateInputType
  }

  export type TransaksiGroupByOutputType = {
    id: number
    total: number
    bayar: number
    kembalian: number
    createdAt: Date
    _count: TransaksiCountAggregateOutputType | null
    _avg: TransaksiAvgAggregateOutputType | null
    _sum: TransaksiSumAggregateOutputType | null
    _min: TransaksiMinAggregateOutputType | null
    _max: TransaksiMaxAggregateOutputType | null
  }

  type GetTransaksiGroupByPayload<T extends TransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], TransaksiGroupByOutputType[P]>
        }
      >
    >


  export type TransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    bayar?: boolean
    kembalian?: boolean
    createdAt?: boolean
    detail?: boolean | Transaksi$detailArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    bayar?: boolean
    kembalian?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total?: boolean
    bayar?: boolean
    kembalian?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["transaksi"]>

  export type TransaksiSelectScalar = {
    id?: boolean
    total?: boolean
    bayar?: boolean
    kembalian?: boolean
    createdAt?: boolean
  }

  export type TransaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total" | "bayar" | "kembalian" | "createdAt", ExtArgs["result"]["transaksi"]>
  export type TransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detail?: boolean | Transaksi$detailArgs<ExtArgs>
    _count?: boolean | TransaksiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TransaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaksi"
    objects: {
      detail: Prisma.$DetailTransaksiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      total: number
      bayar: number
      kembalian: number
      createdAt: Date
    }, ExtArgs["result"]["transaksi"]>
    composites: {}
  }

  type TransaksiGetPayload<S extends boolean | null | undefined | TransaksiDefaultArgs> = $Result.GetResult<Prisma.$TransaksiPayload, S>

  type TransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransaksiCountAggregateInputType | true
    }

  export interface TransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaksi'], meta: { name: 'Transaksi' } }
    /**
     * Find zero or one Transaksi that matches the filter.
     * @param {TransaksiFindUniqueArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransaksiFindUniqueArgs>(args: SelectSubset<T, TransaksiFindUniqueArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransaksiFindUniqueOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, TransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransaksiFindFirstArgs>(args?: SelectSubset<T, TransaksiFindFirstArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindFirstOrThrowArgs} args - Arguments to find a Transaksi
     * @example
     * // Get one Transaksi
     * const transaksi = await prisma.transaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, TransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transaksis
     * const transaksis = await prisma.transaksi.findMany()
     * 
     * // Get first 10 Transaksis
     * const transaksis = await prisma.transaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransaksiFindManyArgs>(args?: SelectSubset<T, TransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaksi.
     * @param {TransaksiCreateArgs} args - Arguments to create a Transaksi.
     * @example
     * // Create one Transaksi
     * const Transaksi = await prisma.transaksi.create({
     *   data: {
     *     // ... data to create a Transaksi
     *   }
     * })
     * 
     */
    create<T extends TransaksiCreateArgs>(args: SelectSubset<T, TransaksiCreateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transaksis.
     * @param {TransaksiCreateManyArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransaksiCreateManyArgs>(args?: SelectSubset<T, TransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transaksis and returns the data saved in the database.
     * @param {TransaksiCreateManyAndReturnArgs} args - Arguments to create many Transaksis.
     * @example
     * // Create many Transaksis
     * const transaksi = await prisma.transaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transaksis and only return the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, TransaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaksi.
     * @param {TransaksiDeleteArgs} args - Arguments to delete one Transaksi.
     * @example
     * // Delete one Transaksi
     * const Transaksi = await prisma.transaksi.delete({
     *   where: {
     *     // ... filter to delete one Transaksi
     *   }
     * })
     * 
     */
    delete<T extends TransaksiDeleteArgs>(args: SelectSubset<T, TransaksiDeleteArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaksi.
     * @param {TransaksiUpdateArgs} args - Arguments to update one Transaksi.
     * @example
     * // Update one Transaksi
     * const transaksi = await prisma.transaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransaksiUpdateArgs>(args: SelectSubset<T, TransaksiUpdateArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transaksis.
     * @param {TransaksiDeleteManyArgs} args - Arguments to filter Transaksis to delete.
     * @example
     * // Delete a few Transaksis
     * const { count } = await prisma.transaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransaksiDeleteManyArgs>(args?: SelectSubset<T, TransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransaksiUpdateManyArgs>(args: SelectSubset<T, TransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transaksis and returns the data updated in the database.
     * @param {TransaksiUpdateManyAndReturnArgs} args - Arguments to update many Transaksis.
     * @example
     * // Update many Transaksis
     * const transaksi = await prisma.transaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transaksis and only return the `id`
     * const transaksiWithIdOnly = await prisma.transaksi.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, TransaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaksi.
     * @param {TransaksiUpsertArgs} args - Arguments to update or create a Transaksi.
     * @example
     * // Update or create a Transaksi
     * const transaksi = await prisma.transaksi.upsert({
     *   create: {
     *     // ... data to create a Transaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaksi we want to update
     *   }
     * })
     */
    upsert<T extends TransaksiUpsertArgs>(args: SelectSubset<T, TransaksiUpsertArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiCountArgs} args - Arguments to filter Transaksis to count.
     * @example
     * // Count the number of Transaksis
     * const count = await prisma.transaksi.count({
     *   where: {
     *     // ... the filter for the Transaksis we want to count
     *   }
     * })
    **/
    count<T extends TransaksiCountArgs>(
      args?: Subset<T, TransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransaksiAggregateArgs>(args: Subset<T, TransaksiAggregateArgs>): Prisma.PrismaPromise<GetTransaksiAggregateType<T>>

    /**
     * Group by Transaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransaksiGroupByArgs} args - Group by arguments.
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
      T extends TransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransaksiGroupByArgs['orderBy'] }
        : { orderBy?: TransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaksi model
   */
  readonly fields: TransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detail<T extends Transaksi$detailArgs<ExtArgs> = {}>(args?: Subset<T, Transaksi$detailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaksi model
   */
  interface TransaksiFieldRefs {
    readonly id: FieldRef<"Transaksi", 'Int'>
    readonly total: FieldRef<"Transaksi", 'Int'>
    readonly bayar: FieldRef<"Transaksi", 'Int'>
    readonly kembalian: FieldRef<"Transaksi", 'Int'>
    readonly createdAt: FieldRef<"Transaksi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaksi findUnique
   */
  export type TransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findUniqueOrThrow
   */
  export type TransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi findFirst
   */
  export type TransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findFirstOrThrow
   */
  export type TransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksi to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi findMany
   */
  export type TransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter, which Transaksis to fetch.
     */
    where?: TransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transaksis to fetch.
     */
    orderBy?: TransaksiOrderByWithRelationInput | TransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transaksis.
     */
    cursor?: TransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transaksis.
     */
    distinct?: TransaksiScalarFieldEnum | TransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi create
   */
  export type TransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaksi.
     */
    data: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
  }

  /**
   * Transaksi createMany
   */
  export type TransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi createManyAndReturn
   */
  export type TransaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * The data used to create many Transaksis.
     */
    data: TransaksiCreateManyInput | TransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaksi update
   */
  export type TransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaksi.
     */
    data: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
    /**
     * Choose, which Transaksi to update.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi updateMany
   */
  export type TransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to update.
     */
    limit?: number
  }

  /**
   * Transaksi updateManyAndReturn
   */
  export type TransaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * The data used to update Transaksis.
     */
    data: XOR<TransaksiUpdateManyMutationInput, TransaksiUncheckedUpdateManyInput>
    /**
     * Filter which Transaksis to update
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to update.
     */
    limit?: number
  }

  /**
   * Transaksi upsert
   */
  export type TransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaksi to update in case it exists.
     */
    where: TransaksiWhereUniqueInput
    /**
     * In case the Transaksi found by the `where` argument doesn't exist, create a new Transaksi with this data.
     */
    create: XOR<TransaksiCreateInput, TransaksiUncheckedCreateInput>
    /**
     * In case the Transaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransaksiUpdateInput, TransaksiUncheckedUpdateInput>
  }

  /**
   * Transaksi delete
   */
  export type TransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
    /**
     * Filter which Transaksi to delete.
     */
    where: TransaksiWhereUniqueInput
  }

  /**
   * Transaksi deleteMany
   */
  export type TransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaksis to delete
     */
    where?: TransaksiWhereInput
    /**
     * Limit how many Transaksis to delete.
     */
    limit?: number
  }

  /**
   * Transaksi.detail
   */
  export type Transaksi$detailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    where?: DetailTransaksiWhereInput
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    cursor?: DetailTransaksiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * Transaksi without action
   */
  export type TransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaksi
     */
    select?: TransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaksi
     */
    omit?: TransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransaksiInclude<ExtArgs> | null
  }


  /**
   * Model DetailTransaksi
   */

  export type AggregateDetailTransaksi = {
    _count: DetailTransaksiCountAggregateOutputType | null
    _avg: DetailTransaksiAvgAggregateOutputType | null
    _sum: DetailTransaksiSumAggregateOutputType | null
    _min: DetailTransaksiMinAggregateOutputType | null
    _max: DetailTransaksiMaxAggregateOutputType | null
  }

  export type DetailTransaksiAvgAggregateOutputType = {
    id: number | null
    transaksiId: number | null
    barangId: number | null
    qty: number | null
    hargaSatuan: number | null
    subtotal: number | null
  }

  export type DetailTransaksiSumAggregateOutputType = {
    id: number | null
    transaksiId: number | null
    barangId: number | null
    qty: number | null
    hargaSatuan: number | null
    subtotal: number | null
  }

  export type DetailTransaksiMinAggregateOutputType = {
    id: number | null
    transaksiId: number | null
    barangId: number | null
    qty: number | null
    hargaSatuan: number | null
    subtotal: number | null
  }

  export type DetailTransaksiMaxAggregateOutputType = {
    id: number | null
    transaksiId: number | null
    barangId: number | null
    qty: number | null
    hargaSatuan: number | null
    subtotal: number | null
  }

  export type DetailTransaksiCountAggregateOutputType = {
    id: number
    transaksiId: number
    barangId: number
    qty: number
    hargaSatuan: number
    subtotal: number
    _all: number
  }


  export type DetailTransaksiAvgAggregateInputType = {
    id?: true
    transaksiId?: true
    barangId?: true
    qty?: true
    hargaSatuan?: true
    subtotal?: true
  }

  export type DetailTransaksiSumAggregateInputType = {
    id?: true
    transaksiId?: true
    barangId?: true
    qty?: true
    hargaSatuan?: true
    subtotal?: true
  }

  export type DetailTransaksiMinAggregateInputType = {
    id?: true
    transaksiId?: true
    barangId?: true
    qty?: true
    hargaSatuan?: true
    subtotal?: true
  }

  export type DetailTransaksiMaxAggregateInputType = {
    id?: true
    transaksiId?: true
    barangId?: true
    qty?: true
    hargaSatuan?: true
    subtotal?: true
  }

  export type DetailTransaksiCountAggregateInputType = {
    id?: true
    transaksiId?: true
    barangId?: true
    qty?: true
    hargaSatuan?: true
    subtotal?: true
    _all?: true
  }

  export type DetailTransaksiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailTransaksi to aggregate.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailTransaksis
    **/
    _count?: true | DetailTransaksiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailTransaksiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailTransaksiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailTransaksiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailTransaksiMaxAggregateInputType
  }

  export type GetDetailTransaksiAggregateType<T extends DetailTransaksiAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailTransaksi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailTransaksi[P]>
      : GetScalarType<T[P], AggregateDetailTransaksi[P]>
  }




  export type DetailTransaksiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetailTransaksiWhereInput
    orderBy?: DetailTransaksiOrderByWithAggregationInput | DetailTransaksiOrderByWithAggregationInput[]
    by: DetailTransaksiScalarFieldEnum[] | DetailTransaksiScalarFieldEnum
    having?: DetailTransaksiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailTransaksiCountAggregateInputType | true
    _avg?: DetailTransaksiAvgAggregateInputType
    _sum?: DetailTransaksiSumAggregateInputType
    _min?: DetailTransaksiMinAggregateInputType
    _max?: DetailTransaksiMaxAggregateInputType
  }

  export type DetailTransaksiGroupByOutputType = {
    id: number
    transaksiId: number
    barangId: number
    qty: number
    hargaSatuan: number
    subtotal: number
    _count: DetailTransaksiCountAggregateOutputType | null
    _avg: DetailTransaksiAvgAggregateOutputType | null
    _sum: DetailTransaksiSumAggregateOutputType | null
    _min: DetailTransaksiMinAggregateOutputType | null
    _max: DetailTransaksiMaxAggregateOutputType | null
  }

  type GetDetailTransaksiGroupByPayload<T extends DetailTransaksiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetailTransaksiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetailTransaksiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetailTransaksiGroupByOutputType[P]>
            : GetScalarType<T[P], DetailTransaksiGroupByOutputType[P]>
        }
      >
    >


  export type DetailTransaksiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaksiId?: boolean
    barangId?: boolean
    qty?: boolean
    hargaSatuan?: boolean
    subtotal?: boolean
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailTransaksi"]>

  export type DetailTransaksiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaksiId?: boolean
    barangId?: boolean
    qty?: boolean
    hargaSatuan?: boolean
    subtotal?: boolean
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailTransaksi"]>

  export type DetailTransaksiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transaksiId?: boolean
    barangId?: boolean
    qty?: boolean
    hargaSatuan?: boolean
    subtotal?: boolean
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detailTransaksi"]>

  export type DetailTransaksiSelectScalar = {
    id?: boolean
    transaksiId?: boolean
    barangId?: boolean
    qty?: boolean
    hargaSatuan?: boolean
    subtotal?: boolean
  }

  export type DetailTransaksiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transaksiId" | "barangId" | "qty" | "hargaSatuan" | "subtotal", ExtArgs["result"]["detailTransaksi"]>
  export type DetailTransaksiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type DetailTransaksiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }
  export type DetailTransaksiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaksi?: boolean | TransaksiDefaultArgs<ExtArgs>
    barang?: boolean | BarangDefaultArgs<ExtArgs>
  }

  export type $DetailTransaksiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DetailTransaksi"
    objects: {
      transaksi: Prisma.$TransaksiPayload<ExtArgs>
      barang: Prisma.$BarangPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      transaksiId: number
      barangId: number
      qty: number
      hargaSatuan: number
      subtotal: number
    }, ExtArgs["result"]["detailTransaksi"]>
    composites: {}
  }

  type DetailTransaksiGetPayload<S extends boolean | null | undefined | DetailTransaksiDefaultArgs> = $Result.GetResult<Prisma.$DetailTransaksiPayload, S>

  type DetailTransaksiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetailTransaksiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetailTransaksiCountAggregateInputType | true
    }

  export interface DetailTransaksiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DetailTransaksi'], meta: { name: 'DetailTransaksi' } }
    /**
     * Find zero or one DetailTransaksi that matches the filter.
     * @param {DetailTransaksiFindUniqueArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetailTransaksiFindUniqueArgs>(args: SelectSubset<T, DetailTransaksiFindUniqueArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DetailTransaksi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetailTransaksiFindUniqueOrThrowArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetailTransaksiFindUniqueOrThrowArgs>(args: SelectSubset<T, DetailTransaksiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailTransaksi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiFindFirstArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetailTransaksiFindFirstArgs>(args?: SelectSubset<T, DetailTransaksiFindFirstArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DetailTransaksi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiFindFirstOrThrowArgs} args - Arguments to find a DetailTransaksi
     * @example
     * // Get one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetailTransaksiFindFirstOrThrowArgs>(args?: SelectSubset<T, DetailTransaksiFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DetailTransaksis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailTransaksis
     * const detailTransaksis = await prisma.detailTransaksi.findMany()
     * 
     * // Get first 10 DetailTransaksis
     * const detailTransaksis = await prisma.detailTransaksi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailTransaksiWithIdOnly = await prisma.detailTransaksi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetailTransaksiFindManyArgs>(args?: SelectSubset<T, DetailTransaksiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DetailTransaksi.
     * @param {DetailTransaksiCreateArgs} args - Arguments to create a DetailTransaksi.
     * @example
     * // Create one DetailTransaksi
     * const DetailTransaksi = await prisma.detailTransaksi.create({
     *   data: {
     *     // ... data to create a DetailTransaksi
     *   }
     * })
     * 
     */
    create<T extends DetailTransaksiCreateArgs>(args: SelectSubset<T, DetailTransaksiCreateArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DetailTransaksis.
     * @param {DetailTransaksiCreateManyArgs} args - Arguments to create many DetailTransaksis.
     * @example
     * // Create many DetailTransaksis
     * const detailTransaksi = await prisma.detailTransaksi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetailTransaksiCreateManyArgs>(args?: SelectSubset<T, DetailTransaksiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DetailTransaksis and returns the data saved in the database.
     * @param {DetailTransaksiCreateManyAndReturnArgs} args - Arguments to create many DetailTransaksis.
     * @example
     * // Create many DetailTransaksis
     * const detailTransaksi = await prisma.detailTransaksi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DetailTransaksis and only return the `id`
     * const detailTransaksiWithIdOnly = await prisma.detailTransaksi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetailTransaksiCreateManyAndReturnArgs>(args?: SelectSubset<T, DetailTransaksiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DetailTransaksi.
     * @param {DetailTransaksiDeleteArgs} args - Arguments to delete one DetailTransaksi.
     * @example
     * // Delete one DetailTransaksi
     * const DetailTransaksi = await prisma.detailTransaksi.delete({
     *   where: {
     *     // ... filter to delete one DetailTransaksi
     *   }
     * })
     * 
     */
    delete<T extends DetailTransaksiDeleteArgs>(args: SelectSubset<T, DetailTransaksiDeleteArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DetailTransaksi.
     * @param {DetailTransaksiUpdateArgs} args - Arguments to update one DetailTransaksi.
     * @example
     * // Update one DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetailTransaksiUpdateArgs>(args: SelectSubset<T, DetailTransaksiUpdateArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DetailTransaksis.
     * @param {DetailTransaksiDeleteManyArgs} args - Arguments to filter DetailTransaksis to delete.
     * @example
     * // Delete a few DetailTransaksis
     * const { count } = await prisma.detailTransaksi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetailTransaksiDeleteManyArgs>(args?: SelectSubset<T, DetailTransaksiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailTransaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailTransaksis
     * const detailTransaksi = await prisma.detailTransaksi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetailTransaksiUpdateManyArgs>(args: SelectSubset<T, DetailTransaksiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailTransaksis and returns the data updated in the database.
     * @param {DetailTransaksiUpdateManyAndReturnArgs} args - Arguments to update many DetailTransaksis.
     * @example
     * // Update many DetailTransaksis
     * const detailTransaksi = await prisma.detailTransaksi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DetailTransaksis and only return the `id`
     * const detailTransaksiWithIdOnly = await prisma.detailTransaksi.updateManyAndReturn({
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
    updateManyAndReturn<T extends DetailTransaksiUpdateManyAndReturnArgs>(args: SelectSubset<T, DetailTransaksiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DetailTransaksi.
     * @param {DetailTransaksiUpsertArgs} args - Arguments to update or create a DetailTransaksi.
     * @example
     * // Update or create a DetailTransaksi
     * const detailTransaksi = await prisma.detailTransaksi.upsert({
     *   create: {
     *     // ... data to create a DetailTransaksi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailTransaksi we want to update
     *   }
     * })
     */
    upsert<T extends DetailTransaksiUpsertArgs>(args: SelectSubset<T, DetailTransaksiUpsertArgs<ExtArgs>>): Prisma__DetailTransaksiClient<$Result.GetResult<Prisma.$DetailTransaksiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DetailTransaksis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiCountArgs} args - Arguments to filter DetailTransaksis to count.
     * @example
     * // Count the number of DetailTransaksis
     * const count = await prisma.detailTransaksi.count({
     *   where: {
     *     // ... the filter for the DetailTransaksis we want to count
     *   }
     * })
    **/
    count<T extends DetailTransaksiCountArgs>(
      args?: Subset<T, DetailTransaksiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailTransaksiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailTransaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailTransaksiAggregateArgs>(args: Subset<T, DetailTransaksiAggregateArgs>): Prisma.PrismaPromise<GetDetailTransaksiAggregateType<T>>

    /**
     * Group by DetailTransaksi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailTransaksiGroupByArgs} args - Group by arguments.
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
      T extends DetailTransaksiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailTransaksiGroupByArgs['orderBy'] }
        : { orderBy?: DetailTransaksiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DetailTransaksiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailTransaksiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DetailTransaksi model
   */
  readonly fields: DetailTransaksiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailTransaksi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetailTransaksiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaksi<T extends TransaksiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransaksiDefaultArgs<ExtArgs>>): Prisma__TransaksiClient<$Result.GetResult<Prisma.$TransaksiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    barang<T extends BarangDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarangDefaultArgs<ExtArgs>>): Prisma__BarangClient<$Result.GetResult<Prisma.$BarangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DetailTransaksi model
   */
  interface DetailTransaksiFieldRefs {
    readonly id: FieldRef<"DetailTransaksi", 'Int'>
    readonly transaksiId: FieldRef<"DetailTransaksi", 'Int'>
    readonly barangId: FieldRef<"DetailTransaksi", 'Int'>
    readonly qty: FieldRef<"DetailTransaksi", 'Int'>
    readonly hargaSatuan: FieldRef<"DetailTransaksi", 'Int'>
    readonly subtotal: FieldRef<"DetailTransaksi", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DetailTransaksi findUnique
   */
  export type DetailTransaksiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi findUniqueOrThrow
   */
  export type DetailTransaksiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi findFirst
   */
  export type DetailTransaksiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailTransaksis.
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransaksis.
     */
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * DetailTransaksi findFirstOrThrow
   */
  export type DetailTransaksiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksi to fetch.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailTransaksis.
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransaksis.
     */
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * DetailTransaksi findMany
   */
  export type DetailTransaksiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter, which DetailTransaksis to fetch.
     */
    where?: DetailTransaksiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailTransaksis to fetch.
     */
    orderBy?: DetailTransaksiOrderByWithRelationInput | DetailTransaksiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailTransaksis.
     */
    cursor?: DetailTransaksiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailTransaksis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailTransaksis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailTransaksis.
     */
    distinct?: DetailTransaksiScalarFieldEnum | DetailTransaksiScalarFieldEnum[]
  }

  /**
   * DetailTransaksi create
   */
  export type DetailTransaksiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * The data needed to create a DetailTransaksi.
     */
    data: XOR<DetailTransaksiCreateInput, DetailTransaksiUncheckedCreateInput>
  }

  /**
   * DetailTransaksi createMany
   */
  export type DetailTransaksiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DetailTransaksis.
     */
    data: DetailTransaksiCreateManyInput | DetailTransaksiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DetailTransaksi createManyAndReturn
   */
  export type DetailTransaksiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * The data used to create many DetailTransaksis.
     */
    data: DetailTransaksiCreateManyInput | DetailTransaksiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailTransaksi update
   */
  export type DetailTransaksiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * The data needed to update a DetailTransaksi.
     */
    data: XOR<DetailTransaksiUpdateInput, DetailTransaksiUncheckedUpdateInput>
    /**
     * Choose, which DetailTransaksi to update.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi updateMany
   */
  export type DetailTransaksiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DetailTransaksis.
     */
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyInput>
    /**
     * Filter which DetailTransaksis to update
     */
    where?: DetailTransaksiWhereInput
    /**
     * Limit how many DetailTransaksis to update.
     */
    limit?: number
  }

  /**
   * DetailTransaksi updateManyAndReturn
   */
  export type DetailTransaksiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * The data used to update DetailTransaksis.
     */
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyInput>
    /**
     * Filter which DetailTransaksis to update
     */
    where?: DetailTransaksiWhereInput
    /**
     * Limit how many DetailTransaksis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DetailTransaksi upsert
   */
  export type DetailTransaksiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * The filter to search for the DetailTransaksi to update in case it exists.
     */
    where: DetailTransaksiWhereUniqueInput
    /**
     * In case the DetailTransaksi found by the `where` argument doesn't exist, create a new DetailTransaksi with this data.
     */
    create: XOR<DetailTransaksiCreateInput, DetailTransaksiUncheckedCreateInput>
    /**
     * In case the DetailTransaksi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetailTransaksiUpdateInput, DetailTransaksiUncheckedUpdateInput>
  }

  /**
   * DetailTransaksi delete
   */
  export type DetailTransaksiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
    /**
     * Filter which DetailTransaksi to delete.
     */
    where: DetailTransaksiWhereUniqueInput
  }

  /**
   * DetailTransaksi deleteMany
   */
  export type DetailTransaksiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DetailTransaksis to delete
     */
    where?: DetailTransaksiWhereInput
    /**
     * Limit how many DetailTransaksis to delete.
     */
    limit?: number
  }

  /**
   * DetailTransaksi without action
   */
  export type DetailTransaksiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetailTransaksi
     */
    select?: DetailTransaksiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DetailTransaksi
     */
    omit?: DetailTransaksiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetailTransaksiInclude<ExtArgs> | null
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


  export const KategoriScalarFieldEnum: {
    id: 'id',
    nama: 'nama'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const BarangScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    harga: 'harga',
    stok: 'stok',
    kategoriId: 'kategoriId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BarangScalarFieldEnum = (typeof BarangScalarFieldEnum)[keyof typeof BarangScalarFieldEnum]


  export const TransaksiScalarFieldEnum: {
    id: 'id',
    total: 'total',
    bayar: 'bayar',
    kembalian: 'kembalian',
    createdAt: 'createdAt'
  };

  export type TransaksiScalarFieldEnum = (typeof TransaksiScalarFieldEnum)[keyof typeof TransaksiScalarFieldEnum]


  export const DetailTransaksiScalarFieldEnum: {
    id: 'id',
    transaksiId: 'transaksiId',
    barangId: 'barangId',
    qty: 'qty',
    hargaSatuan: 'hargaSatuan',
    subtotal: 'subtotal'
  };

  export type DetailTransaksiScalarFieldEnum = (typeof DetailTransaksiScalarFieldEnum)[keyof typeof DetailTransaksiScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id?: IntFilter<"Kategori"> | number
    nama?: StringFilter<"Kategori"> | string
    barang?: BarangListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    barang?: BarangOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    barang?: BarangListRelationFilter
  }, "id" | "nama">

  export type KategoriOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Kategori"> | number
    nama?: StringWithAggregatesFilter<"Kategori"> | string
  }

  export type BarangWhereInput = {
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    id?: IntFilter<"Barang"> | number
    nama?: StringFilter<"Barang"> | string
    harga?: IntFilter<"Barang"> | number
    stok?: IntFilter<"Barang"> | number
    kategoriId?: IntFilter<"Barang"> | number
    createdAt?: DateTimeFilter<"Barang"> | Date | string
    updatedAt?: DateTimeFilter<"Barang"> | Date | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    detailTransaksi?: DetailTransaksiListRelationFilter
  }

  export type BarangOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    kategori?: KategoriOrderByWithRelationInput
    detailTransaksi?: DetailTransaksiOrderByRelationAggregateInput
  }

  export type BarangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BarangWhereInput | BarangWhereInput[]
    OR?: BarangWhereInput[]
    NOT?: BarangWhereInput | BarangWhereInput[]
    nama?: StringFilter<"Barang"> | string
    harga?: IntFilter<"Barang"> | number
    stok?: IntFilter<"Barang"> | number
    kategoriId?: IntFilter<"Barang"> | number
    createdAt?: DateTimeFilter<"Barang"> | Date | string
    updatedAt?: DateTimeFilter<"Barang"> | Date | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    detailTransaksi?: DetailTransaksiListRelationFilter
  }, "id">

  export type BarangOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BarangCountOrderByAggregateInput
    _avg?: BarangAvgOrderByAggregateInput
    _max?: BarangMaxOrderByAggregateInput
    _min?: BarangMinOrderByAggregateInput
    _sum?: BarangSumOrderByAggregateInput
  }

  export type BarangScalarWhereWithAggregatesInput = {
    AND?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    OR?: BarangScalarWhereWithAggregatesInput[]
    NOT?: BarangScalarWhereWithAggregatesInput | BarangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Barang"> | number
    nama?: StringWithAggregatesFilter<"Barang"> | string
    harga?: IntWithAggregatesFilter<"Barang"> | number
    stok?: IntWithAggregatesFilter<"Barang"> | number
    kategoriId?: IntWithAggregatesFilter<"Barang"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Barang"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Barang"> | Date | string
  }

  export type TransaksiWhereInput = {
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    id?: IntFilter<"Transaksi"> | number
    total?: IntFilter<"Transaksi"> | number
    bayar?: IntFilter<"Transaksi"> | number
    kembalian?: IntFilter<"Transaksi"> | number
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    detail?: DetailTransaksiListRelationFilter
  }

  export type TransaksiOrderByWithRelationInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
    createdAt?: SortOrder
    detail?: DetailTransaksiOrderByRelationAggregateInput
  }

  export type TransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransaksiWhereInput | TransaksiWhereInput[]
    OR?: TransaksiWhereInput[]
    NOT?: TransaksiWhereInput | TransaksiWhereInput[]
    total?: IntFilter<"Transaksi"> | number
    bayar?: IntFilter<"Transaksi"> | number
    kembalian?: IntFilter<"Transaksi"> | number
    createdAt?: DateTimeFilter<"Transaksi"> | Date | string
    detail?: DetailTransaksiListRelationFilter
  }, "id">

  export type TransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
    createdAt?: SortOrder
    _count?: TransaksiCountOrderByAggregateInput
    _avg?: TransaksiAvgOrderByAggregateInput
    _max?: TransaksiMaxOrderByAggregateInput
    _min?: TransaksiMinOrderByAggregateInput
    _sum?: TransaksiSumOrderByAggregateInput
  }

  export type TransaksiScalarWhereWithAggregatesInput = {
    AND?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    OR?: TransaksiScalarWhereWithAggregatesInput[]
    NOT?: TransaksiScalarWhereWithAggregatesInput | TransaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaksi"> | number
    total?: IntWithAggregatesFilter<"Transaksi"> | number
    bayar?: IntWithAggregatesFilter<"Transaksi"> | number
    kembalian?: IntWithAggregatesFilter<"Transaksi"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaksi"> | Date | string
  }

  export type DetailTransaksiWhereInput = {
    AND?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    OR?: DetailTransaksiWhereInput[]
    NOT?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    id?: IntFilter<"DetailTransaksi"> | number
    transaksiId?: IntFilter<"DetailTransaksi"> | number
    barangId?: IntFilter<"DetailTransaksi"> | number
    qty?: IntFilter<"DetailTransaksi"> | number
    hargaSatuan?: IntFilter<"DetailTransaksi"> | number
    subtotal?: IntFilter<"DetailTransaksi"> | number
    transaksi?: XOR<TransaksiScalarRelationFilter, TransaksiWhereInput>
    barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }

  export type DetailTransaksiOrderByWithRelationInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
    transaksi?: TransaksiOrderByWithRelationInput
    barang?: BarangOrderByWithRelationInput
  }

  export type DetailTransaksiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    OR?: DetailTransaksiWhereInput[]
    NOT?: DetailTransaksiWhereInput | DetailTransaksiWhereInput[]
    transaksiId?: IntFilter<"DetailTransaksi"> | number
    barangId?: IntFilter<"DetailTransaksi"> | number
    qty?: IntFilter<"DetailTransaksi"> | number
    hargaSatuan?: IntFilter<"DetailTransaksi"> | number
    subtotal?: IntFilter<"DetailTransaksi"> | number
    transaksi?: XOR<TransaksiScalarRelationFilter, TransaksiWhereInput>
    barang?: XOR<BarangScalarRelationFilter, BarangWhereInput>
  }, "id">

  export type DetailTransaksiOrderByWithAggregationInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
    _count?: DetailTransaksiCountOrderByAggregateInput
    _avg?: DetailTransaksiAvgOrderByAggregateInput
    _max?: DetailTransaksiMaxOrderByAggregateInput
    _min?: DetailTransaksiMinOrderByAggregateInput
    _sum?: DetailTransaksiSumOrderByAggregateInput
  }

  export type DetailTransaksiScalarWhereWithAggregatesInput = {
    AND?: DetailTransaksiScalarWhereWithAggregatesInput | DetailTransaksiScalarWhereWithAggregatesInput[]
    OR?: DetailTransaksiScalarWhereWithAggregatesInput[]
    NOT?: DetailTransaksiScalarWhereWithAggregatesInput | DetailTransaksiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    transaksiId?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    barangId?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    qty?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    hargaSatuan?: IntWithAggregatesFilter<"DetailTransaksi"> | number
    subtotal?: IntWithAggregatesFilter<"DetailTransaksi"> | number
  }

  export type KategoriCreateInput = {
    nama: string
    barang?: BarangCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id?: number
    nama: string
    barang?: BarangUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    barang?: BarangUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    barang?: BarangUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id?: number
    nama: string
  }

  export type KategoriUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type BarangCreateInput = {
    nama: string
    harga: number
    stok?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutBarangInput
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateInput = {
    id?: number
    nama: string
    harga: number
    stok?: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutBarangNestedInput
    detailTransaksi?: DetailTransaksiUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangCreateManyInput = {
    id?: number
    nama: string
    harga: number
    stok?: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiCreateInput = {
    total: number
    bayar: number
    kembalian: number
    createdAt?: Date | string
    detail?: DetailTransaksiCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUncheckedCreateInput = {
    id?: number
    total: number
    bayar: number
    kembalian: number
    createdAt?: Date | string
    detail?: DetailTransaksiUncheckedCreateNestedManyWithoutTransaksiInput
  }

  export type TransaksiUpdateInput = {
    total?: IntFieldUpdateOperationsInput | number
    bayar?: IntFieldUpdateOperationsInput | number
    kembalian?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailTransaksiUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    bayar?: IntFieldUpdateOperationsInput | number
    kembalian?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detail?: DetailTransaksiUncheckedUpdateManyWithoutTransaksiNestedInput
  }

  export type TransaksiCreateManyInput = {
    id?: number
    total: number
    bayar: number
    kembalian: number
    createdAt?: Date | string
  }

  export type TransaksiUpdateManyMutationInput = {
    total?: IntFieldUpdateOperationsInput | number
    bayar?: IntFieldUpdateOperationsInput | number
    kembalian?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    bayar?: IntFieldUpdateOperationsInput | number
    kembalian?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailTransaksiCreateInput = {
    qty: number
    hargaSatuan: number
    subtotal: number
    transaksi: TransaksiCreateNestedOneWithoutDetailInput
    barang: BarangCreateNestedOneWithoutDetailTransaksiInput
  }

  export type DetailTransaksiUncheckedCreateInput = {
    id?: number
    transaksiId: number
    barangId: number
    qty: number
    hargaSatuan: number
    subtotal: number
  }

  export type DetailTransaksiUpdateInput = {
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    transaksi?: TransaksiUpdateOneRequiredWithoutDetailNestedInput
    barang?: BarangUpdateOneRequiredWithoutDetailTransaksiNestedInput
  }

  export type DetailTransaksiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaksiId?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransaksiCreateManyInput = {
    id?: number
    transaksiId: number
    barangId: number
    qty: number
    hargaSatuan: number
    subtotal: number
  }

  export type DetailTransaksiUpdateManyMutationInput = {
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransaksiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaksiId?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BarangListRelationFilter = {
    every?: BarangWhereInput
    some?: BarangWhereInput
    none?: BarangWhereInput
  }

  export type BarangOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type DetailTransaksiListRelationFilter = {
    every?: DetailTransaksiWhereInput
    some?: DetailTransaksiWhereInput
    none?: DetailTransaksiWhereInput
  }

  export type DetailTransaksiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarangCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
  }

  export type BarangMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BarangSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
    stok?: SortOrder
    kategoriId?: SortOrder
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

  export type TransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
    createdAt?: SortOrder
  }

  export type TransaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
  }

  export type TransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
    createdAt?: SortOrder
  }

  export type TransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
    createdAt?: SortOrder
  }

  export type TransaksiSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    bayar?: SortOrder
    kembalian?: SortOrder
  }

  export type TransaksiScalarRelationFilter = {
    is?: TransaksiWhereInput
    isNot?: TransaksiWhereInput
  }

  export type BarangScalarRelationFilter = {
    is?: BarangWhereInput
    isNot?: BarangWhereInput
  }

  export type DetailTransaksiCountOrderByAggregateInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiAvgOrderByAggregateInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiMaxOrderByAggregateInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiMinOrderByAggregateInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
  }

  export type DetailTransaksiSumOrderByAggregateInput = {
    id?: SortOrder
    transaksiId?: SortOrder
    barangId?: SortOrder
    qty?: SortOrder
    hargaSatuan?: SortOrder
    subtotal?: SortOrder
  }

  export type BarangCreateNestedManyWithoutKategoriInput = {
    create?: XOR<BarangCreateWithoutKategoriInput, BarangUncheckedCreateWithoutKategoriInput> | BarangCreateWithoutKategoriInput[] | BarangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BarangCreateOrConnectWithoutKategoriInput | BarangCreateOrConnectWithoutKategoriInput[]
    createMany?: BarangCreateManyKategoriInputEnvelope
    connect?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
  }

  export type BarangUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<BarangCreateWithoutKategoriInput, BarangUncheckedCreateWithoutKategoriInput> | BarangCreateWithoutKategoriInput[] | BarangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BarangCreateOrConnectWithoutKategoriInput | BarangCreateOrConnectWithoutKategoriInput[]
    createMany?: BarangCreateManyKategoriInputEnvelope
    connect?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BarangUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<BarangCreateWithoutKategoriInput, BarangUncheckedCreateWithoutKategoriInput> | BarangCreateWithoutKategoriInput[] | BarangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BarangCreateOrConnectWithoutKategoriInput | BarangCreateOrConnectWithoutKategoriInput[]
    upsert?: BarangUpsertWithWhereUniqueWithoutKategoriInput | BarangUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: BarangCreateManyKategoriInputEnvelope
    set?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    disconnect?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    delete?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    connect?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    update?: BarangUpdateWithWhereUniqueWithoutKategoriInput | BarangUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: BarangUpdateManyWithWhereWithoutKategoriInput | BarangUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: BarangScalarWhereInput | BarangScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BarangUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<BarangCreateWithoutKategoriInput, BarangUncheckedCreateWithoutKategoriInput> | BarangCreateWithoutKategoriInput[] | BarangUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: BarangCreateOrConnectWithoutKategoriInput | BarangCreateOrConnectWithoutKategoriInput[]
    upsert?: BarangUpsertWithWhereUniqueWithoutKategoriInput | BarangUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: BarangCreateManyKategoriInputEnvelope
    set?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    disconnect?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    delete?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    connect?: BarangWhereUniqueInput | BarangWhereUniqueInput[]
    update?: BarangUpdateWithWhereUniqueWithoutKategoriInput | BarangUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: BarangUpdateManyWithWhereWithoutKategoriInput | BarangUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: BarangScalarWhereInput | BarangScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutBarangInput = {
    create?: XOR<KategoriCreateWithoutBarangInput, KategoriUncheckedCreateWithoutBarangInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutBarangInput
    connect?: KategoriWhereUniqueInput
  }

  export type DetailTransaksiCreateNestedManyWithoutBarangInput = {
    create?: XOR<DetailTransaksiCreateWithoutBarangInput, DetailTransaksiUncheckedCreateWithoutBarangInput> | DetailTransaksiCreateWithoutBarangInput[] | DetailTransaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutBarangInput | DetailTransaksiCreateOrConnectWithoutBarangInput[]
    createMany?: DetailTransaksiCreateManyBarangInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DetailTransaksiUncheckedCreateNestedManyWithoutBarangInput = {
    create?: XOR<DetailTransaksiCreateWithoutBarangInput, DetailTransaksiUncheckedCreateWithoutBarangInput> | DetailTransaksiCreateWithoutBarangInput[] | DetailTransaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutBarangInput | DetailTransaksiCreateOrConnectWithoutBarangInput[]
    createMany?: DetailTransaksiCreateManyBarangInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type KategoriUpdateOneRequiredWithoutBarangNestedInput = {
    create?: XOR<KategoriCreateWithoutBarangInput, KategoriUncheckedCreateWithoutBarangInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutBarangInput
    upsert?: KategoriUpsertWithoutBarangInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutBarangInput, KategoriUpdateWithoutBarangInput>, KategoriUncheckedUpdateWithoutBarangInput>
  }

  export type DetailTransaksiUpdateManyWithoutBarangNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutBarangInput, DetailTransaksiUncheckedCreateWithoutBarangInput> | DetailTransaksiCreateWithoutBarangInput[] | DetailTransaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutBarangInput | DetailTransaksiCreateOrConnectWithoutBarangInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutBarangInput | DetailTransaksiUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: DetailTransaksiCreateManyBarangInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutBarangInput | DetailTransaksiUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutBarangInput | DetailTransaksiUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutBarangNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutBarangInput, DetailTransaksiUncheckedCreateWithoutBarangInput> | DetailTransaksiCreateWithoutBarangInput[] | DetailTransaksiUncheckedCreateWithoutBarangInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutBarangInput | DetailTransaksiCreateOrConnectWithoutBarangInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutBarangInput | DetailTransaksiUpsertWithWhereUniqueWithoutBarangInput[]
    createMany?: DetailTransaksiCreateManyBarangInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutBarangInput | DetailTransaksiUpdateWithWhereUniqueWithoutBarangInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutBarangInput | DetailTransaksiUpdateManyWithWhereWithoutBarangInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type DetailTransaksiCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DetailTransaksiUncheckedCreateNestedManyWithoutTransaksiInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
  }

  export type DetailTransaksiUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput | DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutTransaksiNestedInput = {
    create?: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput> | DetailTransaksiCreateWithoutTransaksiInput[] | DetailTransaksiUncheckedCreateWithoutTransaksiInput[]
    connectOrCreate?: DetailTransaksiCreateOrConnectWithoutTransaksiInput | DetailTransaksiCreateOrConnectWithoutTransaksiInput[]
    upsert?: DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput[]
    createMany?: DetailTransaksiCreateManyTransaksiInputEnvelope
    set?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    disconnect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    delete?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    connect?: DetailTransaksiWhereUniqueInput | DetailTransaksiWhereUniqueInput[]
    update?: DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput | DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput[]
    updateMany?: DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput | DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput[]
    deleteMany?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
  }

  export type TransaksiCreateNestedOneWithoutDetailInput = {
    create?: XOR<TransaksiCreateWithoutDetailInput, TransaksiUncheckedCreateWithoutDetailInput>
    connectOrCreate?: TransaksiCreateOrConnectWithoutDetailInput
    connect?: TransaksiWhereUniqueInput
  }

  export type BarangCreateNestedOneWithoutDetailTransaksiInput = {
    create?: XOR<BarangCreateWithoutDetailTransaksiInput, BarangUncheckedCreateWithoutDetailTransaksiInput>
    connectOrCreate?: BarangCreateOrConnectWithoutDetailTransaksiInput
    connect?: BarangWhereUniqueInput
  }

  export type TransaksiUpdateOneRequiredWithoutDetailNestedInput = {
    create?: XOR<TransaksiCreateWithoutDetailInput, TransaksiUncheckedCreateWithoutDetailInput>
    connectOrCreate?: TransaksiCreateOrConnectWithoutDetailInput
    upsert?: TransaksiUpsertWithoutDetailInput
    connect?: TransaksiWhereUniqueInput
    update?: XOR<XOR<TransaksiUpdateToOneWithWhereWithoutDetailInput, TransaksiUpdateWithoutDetailInput>, TransaksiUncheckedUpdateWithoutDetailInput>
  }

  export type BarangUpdateOneRequiredWithoutDetailTransaksiNestedInput = {
    create?: XOR<BarangCreateWithoutDetailTransaksiInput, BarangUncheckedCreateWithoutDetailTransaksiInput>
    connectOrCreate?: BarangCreateOrConnectWithoutDetailTransaksiInput
    upsert?: BarangUpsertWithoutDetailTransaksiInput
    connect?: BarangWhereUniqueInput
    update?: XOR<XOR<BarangUpdateToOneWithWhereWithoutDetailTransaksiInput, BarangUpdateWithoutDetailTransaksiInput>, BarangUncheckedUpdateWithoutDetailTransaksiInput>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BarangCreateWithoutKategoriInput = {
    nama: string
    harga: number
    stok?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTransaksi?: DetailTransaksiCreateNestedManyWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutKategoriInput = {
    id?: number
    nama: string
    harga: number
    stok?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    detailTransaksi?: DetailTransaksiUncheckedCreateNestedManyWithoutBarangInput
  }

  export type BarangCreateOrConnectWithoutKategoriInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutKategoriInput, BarangUncheckedCreateWithoutKategoriInput>
  }

  export type BarangCreateManyKategoriInputEnvelope = {
    data: BarangCreateManyKategoriInput | BarangCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type BarangUpsertWithWhereUniqueWithoutKategoriInput = {
    where: BarangWhereUniqueInput
    update: XOR<BarangUpdateWithoutKategoriInput, BarangUncheckedUpdateWithoutKategoriInput>
    create: XOR<BarangCreateWithoutKategoriInput, BarangUncheckedCreateWithoutKategoriInput>
  }

  export type BarangUpdateWithWhereUniqueWithoutKategoriInput = {
    where: BarangWhereUniqueInput
    data: XOR<BarangUpdateWithoutKategoriInput, BarangUncheckedUpdateWithoutKategoriInput>
  }

  export type BarangUpdateManyWithWhereWithoutKategoriInput = {
    where: BarangScalarWhereInput
    data: XOR<BarangUpdateManyMutationInput, BarangUncheckedUpdateManyWithoutKategoriInput>
  }

  export type BarangScalarWhereInput = {
    AND?: BarangScalarWhereInput | BarangScalarWhereInput[]
    OR?: BarangScalarWhereInput[]
    NOT?: BarangScalarWhereInput | BarangScalarWhereInput[]
    id?: IntFilter<"Barang"> | number
    nama?: StringFilter<"Barang"> | string
    harga?: IntFilter<"Barang"> | number
    stok?: IntFilter<"Barang"> | number
    kategoriId?: IntFilter<"Barang"> | number
    createdAt?: DateTimeFilter<"Barang"> | Date | string
    updatedAt?: DateTimeFilter<"Barang"> | Date | string
  }

  export type KategoriCreateWithoutBarangInput = {
    nama: string
  }

  export type KategoriUncheckedCreateWithoutBarangInput = {
    id?: number
    nama: string
  }

  export type KategoriCreateOrConnectWithoutBarangInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutBarangInput, KategoriUncheckedCreateWithoutBarangInput>
  }

  export type DetailTransaksiCreateWithoutBarangInput = {
    qty: number
    hargaSatuan: number
    subtotal: number
    transaksi: TransaksiCreateNestedOneWithoutDetailInput
  }

  export type DetailTransaksiUncheckedCreateWithoutBarangInput = {
    id?: number
    transaksiId: number
    qty: number
    hargaSatuan: number
    subtotal: number
  }

  export type DetailTransaksiCreateOrConnectWithoutBarangInput = {
    where: DetailTransaksiWhereUniqueInput
    create: XOR<DetailTransaksiCreateWithoutBarangInput, DetailTransaksiUncheckedCreateWithoutBarangInput>
  }

  export type DetailTransaksiCreateManyBarangInputEnvelope = {
    data: DetailTransaksiCreateManyBarangInput | DetailTransaksiCreateManyBarangInput[]
    skipDuplicates?: boolean
  }

  export type KategoriUpsertWithoutBarangInput = {
    update: XOR<KategoriUpdateWithoutBarangInput, KategoriUncheckedUpdateWithoutBarangInput>
    create: XOR<KategoriCreateWithoutBarangInput, KategoriUncheckedCreateWithoutBarangInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutBarangInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutBarangInput, KategoriUncheckedUpdateWithoutBarangInput>
  }

  export type KategoriUpdateWithoutBarangInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriUncheckedUpdateWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type DetailTransaksiUpsertWithWhereUniqueWithoutBarangInput = {
    where: DetailTransaksiWhereUniqueInput
    update: XOR<DetailTransaksiUpdateWithoutBarangInput, DetailTransaksiUncheckedUpdateWithoutBarangInput>
    create: XOR<DetailTransaksiCreateWithoutBarangInput, DetailTransaksiUncheckedCreateWithoutBarangInput>
  }

  export type DetailTransaksiUpdateWithWhereUniqueWithoutBarangInput = {
    where: DetailTransaksiWhereUniqueInput
    data: XOR<DetailTransaksiUpdateWithoutBarangInput, DetailTransaksiUncheckedUpdateWithoutBarangInput>
  }

  export type DetailTransaksiUpdateManyWithWhereWithoutBarangInput = {
    where: DetailTransaksiScalarWhereInput
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyWithoutBarangInput>
  }

  export type DetailTransaksiScalarWhereInput = {
    AND?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
    OR?: DetailTransaksiScalarWhereInput[]
    NOT?: DetailTransaksiScalarWhereInput | DetailTransaksiScalarWhereInput[]
    id?: IntFilter<"DetailTransaksi"> | number
    transaksiId?: IntFilter<"DetailTransaksi"> | number
    barangId?: IntFilter<"DetailTransaksi"> | number
    qty?: IntFilter<"DetailTransaksi"> | number
    hargaSatuan?: IntFilter<"DetailTransaksi"> | number
    subtotal?: IntFilter<"DetailTransaksi"> | number
  }

  export type DetailTransaksiCreateWithoutTransaksiInput = {
    qty: number
    hargaSatuan: number
    subtotal: number
    barang: BarangCreateNestedOneWithoutDetailTransaksiInput
  }

  export type DetailTransaksiUncheckedCreateWithoutTransaksiInput = {
    id?: number
    barangId: number
    qty: number
    hargaSatuan: number
    subtotal: number
  }

  export type DetailTransaksiCreateOrConnectWithoutTransaksiInput = {
    where: DetailTransaksiWhereUniqueInput
    create: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailTransaksiCreateManyTransaksiInputEnvelope = {
    data: DetailTransaksiCreateManyTransaksiInput | DetailTransaksiCreateManyTransaksiInput[]
    skipDuplicates?: boolean
  }

  export type DetailTransaksiUpsertWithWhereUniqueWithoutTransaksiInput = {
    where: DetailTransaksiWhereUniqueInput
    update: XOR<DetailTransaksiUpdateWithoutTransaksiInput, DetailTransaksiUncheckedUpdateWithoutTransaksiInput>
    create: XOR<DetailTransaksiCreateWithoutTransaksiInput, DetailTransaksiUncheckedCreateWithoutTransaksiInput>
  }

  export type DetailTransaksiUpdateWithWhereUniqueWithoutTransaksiInput = {
    where: DetailTransaksiWhereUniqueInput
    data: XOR<DetailTransaksiUpdateWithoutTransaksiInput, DetailTransaksiUncheckedUpdateWithoutTransaksiInput>
  }

  export type DetailTransaksiUpdateManyWithWhereWithoutTransaksiInput = {
    where: DetailTransaksiScalarWhereInput
    data: XOR<DetailTransaksiUpdateManyMutationInput, DetailTransaksiUncheckedUpdateManyWithoutTransaksiInput>
  }

  export type TransaksiCreateWithoutDetailInput = {
    total: number
    bayar: number
    kembalian: number
    createdAt?: Date | string
  }

  export type TransaksiUncheckedCreateWithoutDetailInput = {
    id?: number
    total: number
    bayar: number
    kembalian: number
    createdAt?: Date | string
  }

  export type TransaksiCreateOrConnectWithoutDetailInput = {
    where: TransaksiWhereUniqueInput
    create: XOR<TransaksiCreateWithoutDetailInput, TransaksiUncheckedCreateWithoutDetailInput>
  }

  export type BarangCreateWithoutDetailTransaksiInput = {
    nama: string
    harga: number
    stok?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    kategori: KategoriCreateNestedOneWithoutBarangInput
  }

  export type BarangUncheckedCreateWithoutDetailTransaksiInput = {
    id?: number
    nama: string
    harga: number
    stok?: number
    kategoriId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangCreateOrConnectWithoutDetailTransaksiInput = {
    where: BarangWhereUniqueInput
    create: XOR<BarangCreateWithoutDetailTransaksiInput, BarangUncheckedCreateWithoutDetailTransaksiInput>
  }

  export type TransaksiUpsertWithoutDetailInput = {
    update: XOR<TransaksiUpdateWithoutDetailInput, TransaksiUncheckedUpdateWithoutDetailInput>
    create: XOR<TransaksiCreateWithoutDetailInput, TransaksiUncheckedCreateWithoutDetailInput>
    where?: TransaksiWhereInput
  }

  export type TransaksiUpdateToOneWithWhereWithoutDetailInput = {
    where?: TransaksiWhereInput
    data: XOR<TransaksiUpdateWithoutDetailInput, TransaksiUncheckedUpdateWithoutDetailInput>
  }

  export type TransaksiUpdateWithoutDetailInput = {
    total?: IntFieldUpdateOperationsInput | number
    bayar?: IntFieldUpdateOperationsInput | number
    kembalian?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransaksiUncheckedUpdateWithoutDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    bayar?: IntFieldUpdateOperationsInput | number
    kembalian?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangUpsertWithoutDetailTransaksiInput = {
    update: XOR<BarangUpdateWithoutDetailTransaksiInput, BarangUncheckedUpdateWithoutDetailTransaksiInput>
    create: XOR<BarangCreateWithoutDetailTransaksiInput, BarangUncheckedCreateWithoutDetailTransaksiInput>
    where?: BarangWhereInput
  }

  export type BarangUpdateToOneWithWhereWithoutDetailTransaksiInput = {
    where?: BarangWhereInput
    data: XOR<BarangUpdateWithoutDetailTransaksiInput, BarangUncheckedUpdateWithoutDetailTransaksiInput>
  }

  export type BarangUpdateWithoutDetailTransaksiInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutDetailTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    kategoriId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarangCreateManyKategoriInput = {
    id?: number
    nama: string
    harga: number
    stok?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarangUpdateWithoutKategoriInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTransaksi?: DetailTransaksiUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    detailTransaksi?: DetailTransaksiUncheckedUpdateManyWithoutBarangNestedInput
  }

  export type BarangUncheckedUpdateManyWithoutKategoriInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    stok?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailTransaksiCreateManyBarangInput = {
    id?: number
    transaksiId: number
    qty: number
    hargaSatuan: number
    subtotal: number
  }

  export type DetailTransaksiUpdateWithoutBarangInput = {
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    transaksi?: TransaksiUpdateOneRequiredWithoutDetailNestedInput
  }

  export type DetailTransaksiUncheckedUpdateWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaksiId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutBarangInput = {
    id?: IntFieldUpdateOperationsInput | number
    transaksiId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransaksiCreateManyTransaksiInput = {
    id?: number
    barangId: number
    qty: number
    hargaSatuan: number
    subtotal: number
  }

  export type DetailTransaksiUpdateWithoutTransaksiInput = {
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
    barang?: BarangUpdateOneRequiredWithoutDetailTransaksiNestedInput
  }

  export type DetailTransaksiUncheckedUpdateWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
  }

  export type DetailTransaksiUncheckedUpdateManyWithoutTransaksiInput = {
    id?: IntFieldUpdateOperationsInput | number
    barangId?: IntFieldUpdateOperationsInput | number
    qty?: IntFieldUpdateOperationsInput | number
    hargaSatuan?: IntFieldUpdateOperationsInput | number
    subtotal?: IntFieldUpdateOperationsInput | number
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