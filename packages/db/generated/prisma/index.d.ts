
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Variant
 * 
 */
export type Variant = $Result.DefaultSelection<Prisma.$VariantPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model LineItem
 * 
 */
export type LineItem = $Result.DefaultSelection<Prisma.$LineItemPayload>
/**
 * Model ShippingLine
 * 
 */
export type ShippingLine = $Result.DefaultSelection<Prisma.$ShippingLinePayload>
/**
 * Model OrderAddress
 * 
 */
export type OrderAddress = $Result.DefaultSelection<Prisma.$OrderAddressPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tenants
 * const tenants = await prisma.tenant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Tenants
   * const tenants = await prisma.tenant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variant`: Exposes CRUD operations for the **Variant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variants
    * const variants = await prisma.variant.findMany()
    * ```
    */
  get variant(): Prisma.VariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lineItem`: Exposes CRUD operations for the **LineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LineItems
    * const lineItems = await prisma.lineItem.findMany()
    * ```
    */
  get lineItem(): Prisma.LineItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shippingLine`: Exposes CRUD operations for the **ShippingLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingLines
    * const shippingLines = await prisma.shippingLine.findMany()
    * ```
    */
  get shippingLine(): Prisma.ShippingLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderAddress`: Exposes CRUD operations for the **OrderAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderAddresses
    * const orderAddresses = await prisma.orderAddress.findMany()
    * ```
    */
  get orderAddress(): Prisma.OrderAddressDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Tenant: 'Tenant',
    User: 'User',
    Customer: 'Customer',
    Address: 'Address',
    Product: 'Product',
    Variant: 'Variant',
    Order: 'Order',
    LineItem: 'LineItem',
    ShippingLine: 'ShippingLine',
    OrderAddress: 'OrderAddress'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tenant" | "user" | "customer" | "address" | "product" | "variant" | "order" | "lineItem" | "shippingLine" | "orderAddress"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Variant: {
        payload: Prisma.$VariantPayload<ExtArgs>
        fields: Prisma.VariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findFirst: {
            args: Prisma.VariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          findMany: {
            args: Prisma.VariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          create: {
            args: Prisma.VariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          createMany: {
            args: Prisma.VariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          delete: {
            args: Prisma.VariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          update: {
            args: Prisma.VariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          deleteMany: {
            args: Prisma.VariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>[]
          }
          upsert: {
            args: Prisma.VariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariantPayload>
          }
          aggregate: {
            args: Prisma.VariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariant>
          }
          groupBy: {
            args: Prisma.VariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariantCountArgs<ExtArgs>
            result: $Utils.Optional<VariantCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      LineItem: {
        payload: Prisma.$LineItemPayload<ExtArgs>
        fields: Prisma.LineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>
          }
          findFirst: {
            args: Prisma.LineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>
          }
          findMany: {
            args: Prisma.LineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>[]
          }
          create: {
            args: Prisma.LineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>
          }
          createMany: {
            args: Prisma.LineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>[]
          }
          delete: {
            args: Prisma.LineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>
          }
          update: {
            args: Prisma.LineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>
          }
          deleteMany: {
            args: Prisma.LineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>[]
          }
          upsert: {
            args: Prisma.LineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LineItemPayload>
          }
          aggregate: {
            args: Prisma.LineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLineItem>
          }
          groupBy: {
            args: Prisma.LineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LineItemCountArgs<ExtArgs>
            result: $Utils.Optional<LineItemCountAggregateOutputType> | number
          }
        }
      }
      ShippingLine: {
        payload: Prisma.$ShippingLinePayload<ExtArgs>
        fields: Prisma.ShippingLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>
          }
          findFirst: {
            args: Prisma.ShippingLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>
          }
          findMany: {
            args: Prisma.ShippingLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>[]
          }
          create: {
            args: Prisma.ShippingLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>
          }
          createMany: {
            args: Prisma.ShippingLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShippingLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>[]
          }
          delete: {
            args: Prisma.ShippingLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>
          }
          update: {
            args: Prisma.ShippingLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>
          }
          deleteMany: {
            args: Prisma.ShippingLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShippingLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>[]
          }
          upsert: {
            args: Prisma.ShippingLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingLinePayload>
          }
          aggregate: {
            args: Prisma.ShippingLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippingLine>
          }
          groupBy: {
            args: Prisma.ShippingLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingLineCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingLineCountAggregateOutputType> | number
          }
        }
      }
      OrderAddress: {
        payload: Prisma.$OrderAddressPayload<ExtArgs>
        fields: Prisma.OrderAddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderAddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderAddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>
          }
          findFirst: {
            args: Prisma.OrderAddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderAddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>
          }
          findMany: {
            args: Prisma.OrderAddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>[]
          }
          create: {
            args: Prisma.OrderAddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>
          }
          createMany: {
            args: Prisma.OrderAddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderAddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>[]
          }
          delete: {
            args: Prisma.OrderAddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>
          }
          update: {
            args: Prisma.OrderAddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>
          }
          deleteMany: {
            args: Prisma.OrderAddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderAddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderAddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>[]
          }
          upsert: {
            args: Prisma.OrderAddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderAddressPayload>
          }
          aggregate: {
            args: Prisma.OrderAddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderAddress>
          }
          groupBy: {
            args: Prisma.OrderAddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderAddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderAddressCountArgs<ExtArgs>
            result: $Utils.Optional<OrderAddressCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    tenant?: TenantOmit
    user?: UserOmit
    customer?: CustomerOmit
    address?: AddressOmit
    product?: ProductOmit
    variant?: VariantOmit
    order?: OrderOmit
    lineItem?: LineItemOmit
    shippingLine?: ShippingLineOmit
    orderAddress?: OrderAddressOmit
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
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    users: number
    customers: number
    products: number
    orders: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | TenantCountOutputTypeCountUsersArgs
    customers?: boolean | TenantCountOutputTypeCountCustomersArgs
    products?: boolean | TenantCountOutputTypeCountProductsArgs
    orders?: boolean | TenantCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    customers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | UserCountOutputTypeCountCustomersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    addresses: number
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | CustomerCountOutputTypeCountAddressesArgs
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    variants: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variants?: boolean | ProductCountOutputTypeCountVariantsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    line_items: number
    shipping_lines: number
    addresses: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    line_items?: boolean | OrderCountOutputTypeCountLine_itemsArgs
    shipping_lines?: boolean | OrderCountOutputTypeCountShipping_linesArgs
    addresses?: boolean | OrderCountOutputTypeCountAddressesArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountLine_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineItemWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountShipping_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingLineWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderAddressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantMinAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    createdAt: Date | null
  }

  export type TenantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    apiKey: string | null
    createdAt: Date | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    name: number
    apiKey: number
    createdAt: number
    _all: number
  }


  export type TenantMinAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    name?: true
    apiKey?: true
    createdAt?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: string
    name: string
    apiKey: string | null
    createdAt: Date
    _count: TenantCountAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
    users?: boolean | Tenant$usersArgs<ExtArgs>
    customers?: boolean | Tenant$customersArgs<ExtArgs>
    products?: boolean | Tenant$productsArgs<ExtArgs>
    orders?: boolean | Tenant$ordersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    name?: boolean
    apiKey?: boolean
    createdAt?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "apiKey" | "createdAt", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Tenant$usersArgs<ExtArgs>
    customers?: boolean | Tenant$customersArgs<ExtArgs>
    products?: boolean | Tenant$productsArgs<ExtArgs>
    orders?: boolean | Tenant$ordersArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      apiKey: string | null
      createdAt: Date
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
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
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
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
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Tenant$usersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends Tenant$customersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Tenant$productsArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Tenant$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'String'>
    readonly name: FieldRef<"Tenant", 'String'>
    readonly apiKey: FieldRef<"Tenant", 'String'>
    readonly createdAt: FieldRef<"Tenant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.users
   */
  export type Tenant$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Tenant.customers
   */
  export type Tenant$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Tenant.products
   */
  export type Tenant$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Tenant.orders
   */
  export type Tenant$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    tenantId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    tenantId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    tenantId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    tenantId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    tenantId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    tenantId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    tenantId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customers?: boolean | User$customersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    tenantId?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    tenantId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "tenantId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customers?: boolean | User$customersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      customers: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      tenantId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customers<T extends User$customersArgs<ExtArgs> = {}>(args?: Subset<T, User$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly tenantId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.customers
   */
  export type User$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    created_at: Date | null
    updated_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    state: string | null
    note: string | null
    verified_email: boolean | null
    tax_exempt: boolean | null
    currency: string | null
    admin_graphql_api_id: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    userId: string | null
    created_at: Date | null
    updated_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    state: string | null
    note: string | null
    verified_email: boolean | null
    tax_exempt: boolean | null
    currency: string | null
    admin_graphql_api_id: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    tenantId: number
    userId: number
    created_at: number
    updated_at: number
    first_name: number
    last_name: number
    email: number
    phone: number
    state: number
    note: number
    verified_email: number
    tax_exempt: number
    currency: number
    admin_graphql_api_id: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    state?: true
    note?: true
    verified_email?: true
    tax_exempt?: true
    currency?: true
    admin_graphql_api_id?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    state?: true
    note?: true
    verified_email?: true
    tax_exempt?: true
    currency?: true
    admin_graphql_api_id?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    tenantId?: true
    userId?: true
    created_at?: true
    updated_at?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    state?: true
    note?: true
    verified_email?: true
    tax_exempt?: true
    currency?: true
    admin_graphql_api_id?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    tenantId: string
    userId: string | null
    created_at: Date
    updated_at: Date
    first_name: string | null
    last_name: string | null
    email: string
    phone: string | null
    state: string | null
    note: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency: string | null
    admin_graphql_api_id: string | null
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    state?: boolean
    note?: boolean
    verified_email?: boolean
    tax_exempt?: boolean
    currency?: boolean
    admin_graphql_api_id?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Customer$userArgs<ExtArgs>
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    state?: boolean
    note?: boolean
    verified_email?: boolean
    tax_exempt?: boolean
    currency?: boolean
    admin_graphql_api_id?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Customer$userArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    state?: boolean
    note?: boolean
    verified_email?: boolean
    tax_exempt?: boolean
    currency?: boolean
    admin_graphql_api_id?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Customer$userArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    tenantId?: boolean
    userId?: boolean
    created_at?: boolean
    updated_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    state?: boolean
    note?: boolean
    verified_email?: boolean
    tax_exempt?: boolean
    currency?: boolean
    admin_graphql_api_id?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "userId" | "created_at" | "updated_at" | "first_name" | "last_name" | "email" | "phone" | "state" | "note" | "verified_email" | "tax_exempt" | "currency" | "admin_graphql_api_id", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Customer$userArgs<ExtArgs>
    addresses?: boolean | Customer$addressesArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Customer$userArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    user?: boolean | Customer$userArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      addresses: Prisma.$AddressPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      userId: string | null
      created_at: Date
      updated_at: Date
      first_name: string | null
      last_name: string | null
      email: string
      phone: string | null
      state: string | null
      note: string | null
      verified_email: boolean
      tax_exempt: boolean
      currency: string | null
      admin_graphql_api_id: string | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends Customer$userArgs<ExtArgs> = {}>(args?: Subset<T, Customer$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addresses<T extends Customer$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly tenantId: FieldRef<"Customer", 'String'>
    readonly userId: FieldRef<"Customer", 'String'>
    readonly created_at: FieldRef<"Customer", 'DateTime'>
    readonly updated_at: FieldRef<"Customer", 'DateTime'>
    readonly first_name: FieldRef<"Customer", 'String'>
    readonly last_name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly state: FieldRef<"Customer", 'String'>
    readonly note: FieldRef<"Customer", 'String'>
    readonly verified_email: FieldRef<"Customer", 'Boolean'>
    readonly tax_exempt: FieldRef<"Customer", 'Boolean'>
    readonly currency: FieldRef<"Customer", 'String'>
    readonly admin_graphql_api_id: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.user
   */
  export type Customer$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Customer.addresses
   */
  export type Customer$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    customer_id: string | null
    first_name: string | null
    last_name: string | null
    company: string | null
    address1: string | null
    address2: string | null
    city: string | null
    province: string | null
    country: string | null
    zip: string | null
    phone: string | null
    name: string | null
    province_code: string | null
    country_code: string | null
    country_name: string | null
    is_default: boolean | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    customer_id: string | null
    first_name: string | null
    last_name: string | null
    company: string | null
    address1: string | null
    address2: string | null
    city: string | null
    province: string | null
    country: string | null
    zip: string | null
    phone: string | null
    name: string | null
    province_code: string | null
    country_code: string | null
    country_name: string | null
    is_default: boolean | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    customer_id: number
    first_name: number
    last_name: number
    company: number
    address1: number
    address2: number
    city: number
    province: number
    country: number
    zip: number
    phone: number
    name: number
    province_code: number
    country_code: number
    country_name: number
    is_default: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    customer_id?: true
    first_name?: true
    last_name?: true
    company?: true
    address1?: true
    address2?: true
    city?: true
    province?: true
    country?: true
    zip?: true
    phone?: true
    name?: true
    province_code?: true
    country_code?: true
    country_name?: true
    is_default?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    customer_id?: true
    first_name?: true
    last_name?: true
    company?: true
    address1?: true
    address2?: true
    city?: true
    province?: true
    country?: true
    zip?: true
    phone?: true
    name?: true
    province_code?: true
    country_code?: true
    country_name?: true
    is_default?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    customer_id?: true
    first_name?: true
    last_name?: true
    company?: true
    address1?: true
    address2?: true
    city?: true
    province?: true
    country?: true
    zip?: true
    phone?: true
    name?: true
    province_code?: true
    country_code?: true
    country_name?: true
    is_default?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    customer_id: string
    first_name: string | null
    last_name: string | null
    company: string | null
    address1: string | null
    address2: string | null
    city: string | null
    province: string | null
    country: string | null
    zip: string | null
    phone: string | null
    name: string | null
    province_code: string | null
    country_code: string | null
    country_name: string | null
    is_default: boolean
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    is_default?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    is_default?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    is_default?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    is_default?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "first_name" | "last_name" | "company" | "address1" | "address2" | "city" | "province" | "country" | "zip" | "phone" | "name" | "province_code" | "country_code" | "country_name" | "is_default", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customer_id: string
      first_name: string | null
      last_name: string | null
      company: string | null
      address1: string | null
      address2: string | null
      city: string | null
      province: string | null
      country: string | null
      zip: string | null
      phone: string | null
      name: string | null
      province_code: string | null
      country_code: string | null
      country_name: string | null
      is_default: boolean
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly customer_id: FieldRef<"Address", 'String'>
    readonly first_name: FieldRef<"Address", 'String'>
    readonly last_name: FieldRef<"Address", 'String'>
    readonly company: FieldRef<"Address", 'String'>
    readonly address1: FieldRef<"Address", 'String'>
    readonly address2: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly province: FieldRef<"Address", 'String'>
    readonly country: FieldRef<"Address", 'String'>
    readonly zip: FieldRef<"Address", 'String'>
    readonly phone: FieldRef<"Address", 'String'>
    readonly name: FieldRef<"Address", 'String'>
    readonly province_code: FieldRef<"Address", 'String'>
    readonly country_code: FieldRef<"Address", 'String'>
    readonly country_name: FieldRef<"Address", 'String'>
    readonly is_default: FieldRef<"Address", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    admin_graphql_api_id: string | null
    title: string | null
    body_html: string | null
    vendor: string | null
    product_type: string | null
    handle: string | null
    status: string | null
    tags: string | null
    published_scope: string | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
    has_variants_that_requires_components: boolean | null
    category: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    admin_graphql_api_id: string | null
    title: string | null
    body_html: string | null
    vendor: string | null
    product_type: string | null
    handle: string | null
    status: string | null
    tags: string | null
    published_scope: string | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
    has_variants_that_requires_components: boolean | null
    category: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    tenantId: number
    admin_graphql_api_id: number
    title: number
    body_html: number
    vendor: number
    product_type: number
    handle: number
    status: number
    tags: number
    published_scope: number
    created_at: number
    updated_at: number
    published_at: number
    has_variants_that_requires_components: number
    category: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    tenantId?: true
    admin_graphql_api_id?: true
    title?: true
    body_html?: true
    vendor?: true
    product_type?: true
    handle?: true
    status?: true
    tags?: true
    published_scope?: true
    created_at?: true
    updated_at?: true
    published_at?: true
    has_variants_that_requires_components?: true
    category?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    tenantId?: true
    admin_graphql_api_id?: true
    title?: true
    body_html?: true
    vendor?: true
    product_type?: true
    handle?: true
    status?: true
    tags?: true
    published_scope?: true
    created_at?: true
    updated_at?: true
    published_at?: true
    has_variants_that_requires_components?: true
    category?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    tenantId?: true
    admin_graphql_api_id?: true
    title?: true
    body_html?: true
    vendor?: true
    product_type?: true
    handle?: true
    status?: true
    tags?: true
    published_scope?: true
    created_at?: true
    updated_at?: true
    published_at?: true
    has_variants_that_requires_components?: true
    category?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    tenantId: string
    admin_graphql_api_id: string
    title: string
    body_html: string | null
    vendor: string | null
    product_type: string | null
    handle: string | null
    status: string | null
    tags: string | null
    published_scope: string | null
    created_at: Date | null
    updated_at: Date | null
    published_at: Date | null
    has_variants_that_requires_components: boolean
    category: string | null
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    body_html?: boolean
    vendor?: boolean
    product_type?: boolean
    handle?: boolean
    status?: boolean
    tags?: boolean
    published_scope?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
    has_variants_that_requires_components?: boolean
    category?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    body_html?: boolean
    vendor?: boolean
    product_type?: boolean
    handle?: boolean
    status?: boolean
    tags?: boolean
    published_scope?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
    has_variants_that_requires_components?: boolean
    category?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    body_html?: boolean
    vendor?: boolean
    product_type?: boolean
    handle?: boolean
    status?: boolean
    tags?: boolean
    published_scope?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
    has_variants_that_requires_components?: boolean
    category?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    tenantId?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    body_html?: boolean
    vendor?: boolean
    product_type?: boolean
    handle?: boolean
    status?: boolean
    tags?: boolean
    published_scope?: boolean
    created_at?: boolean
    updated_at?: boolean
    published_at?: boolean
    has_variants_that_requires_components?: boolean
    category?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "admin_graphql_api_id" | "title" | "body_html" | "vendor" | "product_type" | "handle" | "status" | "tags" | "published_scope" | "created_at" | "updated_at" | "published_at" | "has_variants_that_requires_components" | "category", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    variants?: boolean | Product$variantsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      variants: Prisma.$VariantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      admin_graphql_api_id: string
      title: string
      body_html: string | null
      vendor: string | null
      product_type: string | null
      handle: string | null
      status: string | null
      tags: string | null
      published_scope: string | null
      created_at: Date | null
      updated_at: Date | null
      published_at: Date | null
      has_variants_that_requires_components: boolean
      category: string | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    variants<T extends Product$variantsArgs<ExtArgs> = {}>(args?: Subset<T, Product$variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly tenantId: FieldRef<"Product", 'String'>
    readonly admin_graphql_api_id: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly body_html: FieldRef<"Product", 'String'>
    readonly vendor: FieldRef<"Product", 'String'>
    readonly product_type: FieldRef<"Product", 'String'>
    readonly handle: FieldRef<"Product", 'String'>
    readonly status: FieldRef<"Product", 'String'>
    readonly tags: FieldRef<"Product", 'String'>
    readonly published_scope: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
    readonly published_at: FieldRef<"Product", 'DateTime'>
    readonly has_variants_that_requires_components: FieldRef<"Product", 'Boolean'>
    readonly category: FieldRef<"Product", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.variants
   */
  export type Product$variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    cursor?: VariantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Variant
   */

  export type AggregateVariant = {
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  export type VariantAvgAggregateOutputType = {
    price: Decimal | null
    compare_at_price: Decimal | null
    position: number | null
    inventory_quantity: number | null
    old_inventory_quantity: number | null
  }

  export type VariantSumAggregateOutputType = {
    price: Decimal | null
    compare_at_price: Decimal | null
    position: number | null
    inventory_quantity: number | null
    old_inventory_quantity: number | null
  }

  export type VariantMinAggregateOutputType = {
    id: string | null
    admin_graphql_api_id: string | null
    product_id: string | null
    title: string | null
    price: Decimal | null
    compare_at_price: Decimal | null
    position: number | null
    sku: string | null
    taxable: boolean | null
    option1: string | null
    option2: string | null
    option3: string | null
    inventory_policy: string | null
    inventory_quantity: number | null
    old_inventory_quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VariantMaxAggregateOutputType = {
    id: string | null
    admin_graphql_api_id: string | null
    product_id: string | null
    title: string | null
    price: Decimal | null
    compare_at_price: Decimal | null
    position: number | null
    sku: string | null
    taxable: boolean | null
    option1: string | null
    option2: string | null
    option3: string | null
    inventory_policy: string | null
    inventory_quantity: number | null
    old_inventory_quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VariantCountAggregateOutputType = {
    id: number
    admin_graphql_api_id: number
    product_id: number
    title: number
    price: number
    compare_at_price: number
    position: number
    sku: number
    taxable: number
    option1: number
    option2: number
    option3: number
    inventory_policy: number
    inventory_quantity: number
    old_inventory_quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VariantAvgAggregateInputType = {
    price?: true
    compare_at_price?: true
    position?: true
    inventory_quantity?: true
    old_inventory_quantity?: true
  }

  export type VariantSumAggregateInputType = {
    price?: true
    compare_at_price?: true
    position?: true
    inventory_quantity?: true
    old_inventory_quantity?: true
  }

  export type VariantMinAggregateInputType = {
    id?: true
    admin_graphql_api_id?: true
    product_id?: true
    title?: true
    price?: true
    compare_at_price?: true
    position?: true
    sku?: true
    taxable?: true
    option1?: true
    option2?: true
    option3?: true
    inventory_policy?: true
    inventory_quantity?: true
    old_inventory_quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type VariantMaxAggregateInputType = {
    id?: true
    admin_graphql_api_id?: true
    product_id?: true
    title?: true
    price?: true
    compare_at_price?: true
    position?: true
    sku?: true
    taxable?: true
    option1?: true
    option2?: true
    option3?: true
    inventory_policy?: true
    inventory_quantity?: true
    old_inventory_quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type VariantCountAggregateInputType = {
    id?: true
    admin_graphql_api_id?: true
    product_id?: true
    title?: true
    price?: true
    compare_at_price?: true
    position?: true
    sku?: true
    taxable?: true
    option1?: true
    option2?: true
    option3?: true
    inventory_policy?: true
    inventory_quantity?: true
    old_inventory_quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variant to aggregate.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variants
    **/
    _count?: true | VariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariantMaxAggregateInputType
  }

  export type GetVariantAggregateType<T extends VariantAggregateArgs> = {
        [P in keyof T & keyof AggregateVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariant[P]>
      : GetScalarType<T[P], AggregateVariant[P]>
  }




  export type VariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariantWhereInput
    orderBy?: VariantOrderByWithAggregationInput | VariantOrderByWithAggregationInput[]
    by: VariantScalarFieldEnum[] | VariantScalarFieldEnum
    having?: VariantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariantCountAggregateInputType | true
    _avg?: VariantAvgAggregateInputType
    _sum?: VariantSumAggregateInputType
    _min?: VariantMinAggregateInputType
    _max?: VariantMaxAggregateInputType
  }

  export type VariantGroupByOutputType = {
    id: string
    admin_graphql_api_id: string
    product_id: string
    title: string
    price: Decimal
    compare_at_price: Decimal | null
    position: number | null
    sku: string | null
    taxable: boolean
    option1: string | null
    option2: string | null
    option3: string | null
    inventory_policy: string | null
    inventory_quantity: number | null
    old_inventory_quantity: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: VariantCountAggregateOutputType | null
    _avg: VariantAvgAggregateOutputType | null
    _sum: VariantSumAggregateOutputType | null
    _min: VariantMinAggregateOutputType | null
    _max: VariantMaxAggregateOutputType | null
  }

  type GetVariantGroupByPayload<T extends VariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariantGroupByOutputType[P]>
            : GetScalarType<T[P], VariantGroupByOutputType[P]>
        }
      >
    >


  export type VariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_graphql_api_id?: boolean
    product_id?: boolean
    title?: boolean
    price?: boolean
    compare_at_price?: boolean
    position?: boolean
    sku?: boolean
    taxable?: boolean
    option1?: boolean
    option2?: boolean
    option3?: boolean
    inventory_policy?: boolean
    inventory_quantity?: boolean
    old_inventory_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_graphql_api_id?: boolean
    product_id?: boolean
    title?: boolean
    price?: boolean
    compare_at_price?: boolean
    position?: boolean
    sku?: boolean
    taxable?: boolean
    option1?: boolean
    option2?: boolean
    option3?: boolean
    inventory_policy?: boolean
    inventory_quantity?: boolean
    old_inventory_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    admin_graphql_api_id?: boolean
    product_id?: boolean
    title?: boolean
    price?: boolean
    compare_at_price?: boolean
    position?: boolean
    sku?: boolean
    taxable?: boolean
    option1?: boolean
    option2?: boolean
    option3?: boolean
    inventory_policy?: boolean
    inventory_quantity?: boolean
    old_inventory_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variant"]>

  export type VariantSelectScalar = {
    id?: boolean
    admin_graphql_api_id?: boolean
    product_id?: boolean
    title?: boolean
    price?: boolean
    compare_at_price?: boolean
    position?: boolean
    sku?: boolean
    taxable?: boolean
    option1?: boolean
    option2?: boolean
    option3?: boolean
    inventory_policy?: boolean
    inventory_quantity?: boolean
    old_inventory_quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type VariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "admin_graphql_api_id" | "product_id" | "title" | "price" | "compare_at_price" | "position" | "sku" | "taxable" | "option1" | "option2" | "option3" | "inventory_policy" | "inventory_quantity" | "old_inventory_quantity" | "created_at" | "updated_at", ExtArgs["result"]["variant"]>
  export type VariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type VariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $VariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variant"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      admin_graphql_api_id: string
      product_id: string
      title: string
      price: Prisma.Decimal
      compare_at_price: Prisma.Decimal | null
      position: number | null
      sku: string | null
      taxable: boolean
      option1: string | null
      option2: string | null
      option3: string | null
      inventory_policy: string | null
      inventory_quantity: number | null
      old_inventory_quantity: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["variant"]>
    composites: {}
  }

  type VariantGetPayload<S extends boolean | null | undefined | VariantDefaultArgs> = $Result.GetResult<Prisma.$VariantPayload, S>

  type VariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariantCountAggregateInputType | true
    }

  export interface VariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variant'], meta: { name: 'Variant' } }
    /**
     * Find zero or one Variant that matches the filter.
     * @param {VariantFindUniqueArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariantFindUniqueArgs>(args: SelectSubset<T, VariantFindUniqueArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariantFindUniqueOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariantFindUniqueOrThrowArgs>(args: SelectSubset<T, VariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariantFindFirstArgs>(args?: SelectSubset<T, VariantFindFirstArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindFirstOrThrowArgs} args - Arguments to find a Variant
     * @example
     * // Get one Variant
     * const variant = await prisma.variant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariantFindFirstOrThrowArgs>(args?: SelectSubset<T, VariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variants
     * const variants = await prisma.variant.findMany()
     * 
     * // Get first 10 Variants
     * const variants = await prisma.variant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variantWithIdOnly = await prisma.variant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariantFindManyArgs>(args?: SelectSubset<T, VariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variant.
     * @param {VariantCreateArgs} args - Arguments to create a Variant.
     * @example
     * // Create one Variant
     * const Variant = await prisma.variant.create({
     *   data: {
     *     // ... data to create a Variant
     *   }
     * })
     * 
     */
    create<T extends VariantCreateArgs>(args: SelectSubset<T, VariantCreateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variants.
     * @param {VariantCreateManyArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariantCreateManyArgs>(args?: SelectSubset<T, VariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variants and returns the data saved in the database.
     * @param {VariantCreateManyAndReturnArgs} args - Arguments to create many Variants.
     * @example
     * // Create many Variants
     * const variant = await prisma.variant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariantCreateManyAndReturnArgs>(args?: SelectSubset<T, VariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variant.
     * @param {VariantDeleteArgs} args - Arguments to delete one Variant.
     * @example
     * // Delete one Variant
     * const Variant = await prisma.variant.delete({
     *   where: {
     *     // ... filter to delete one Variant
     *   }
     * })
     * 
     */
    delete<T extends VariantDeleteArgs>(args: SelectSubset<T, VariantDeleteArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variant.
     * @param {VariantUpdateArgs} args - Arguments to update one Variant.
     * @example
     * // Update one Variant
     * const variant = await prisma.variant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariantUpdateArgs>(args: SelectSubset<T, VariantUpdateArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variants.
     * @param {VariantDeleteManyArgs} args - Arguments to filter Variants to delete.
     * @example
     * // Delete a few Variants
     * const { count } = await prisma.variant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariantDeleteManyArgs>(args?: SelectSubset<T, VariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariantUpdateManyArgs>(args: SelectSubset<T, VariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variants and returns the data updated in the database.
     * @param {VariantUpdateManyAndReturnArgs} args - Arguments to update many Variants.
     * @example
     * // Update many Variants
     * const variant = await prisma.variant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variants and only return the `id`
     * const variantWithIdOnly = await prisma.variant.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariantUpdateManyAndReturnArgs>(args: SelectSubset<T, VariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variant.
     * @param {VariantUpsertArgs} args - Arguments to update or create a Variant.
     * @example
     * // Update or create a Variant
     * const variant = await prisma.variant.upsert({
     *   create: {
     *     // ... data to create a Variant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variant we want to update
     *   }
     * })
     */
    upsert<T extends VariantUpsertArgs>(args: SelectSubset<T, VariantUpsertArgs<ExtArgs>>): Prisma__VariantClient<$Result.GetResult<Prisma.$VariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantCountArgs} args - Arguments to filter Variants to count.
     * @example
     * // Count the number of Variants
     * const count = await prisma.variant.count({
     *   where: {
     *     // ... the filter for the Variants we want to count
     *   }
     * })
    **/
    count<T extends VariantCountArgs>(
      args?: Subset<T, VariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariantAggregateArgs>(args: Subset<T, VariantAggregateArgs>): Prisma.PrismaPromise<GetVariantAggregateType<T>>

    /**
     * Group by Variant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariantGroupByArgs} args - Group by arguments.
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
      T extends VariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariantGroupByArgs['orderBy'] }
        : { orderBy?: VariantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variant model
   */
  readonly fields: VariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Variant model
   */
  interface VariantFieldRefs {
    readonly id: FieldRef<"Variant", 'String'>
    readonly admin_graphql_api_id: FieldRef<"Variant", 'String'>
    readonly product_id: FieldRef<"Variant", 'String'>
    readonly title: FieldRef<"Variant", 'String'>
    readonly price: FieldRef<"Variant", 'Decimal'>
    readonly compare_at_price: FieldRef<"Variant", 'Decimal'>
    readonly position: FieldRef<"Variant", 'Int'>
    readonly sku: FieldRef<"Variant", 'String'>
    readonly taxable: FieldRef<"Variant", 'Boolean'>
    readonly option1: FieldRef<"Variant", 'String'>
    readonly option2: FieldRef<"Variant", 'String'>
    readonly option3: FieldRef<"Variant", 'String'>
    readonly inventory_policy: FieldRef<"Variant", 'String'>
    readonly inventory_quantity: FieldRef<"Variant", 'Int'>
    readonly old_inventory_quantity: FieldRef<"Variant", 'Int'>
    readonly created_at: FieldRef<"Variant", 'DateTime'>
    readonly updated_at: FieldRef<"Variant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Variant findUnique
   */
  export type VariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findUniqueOrThrow
   */
  export type VariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant findFirst
   */
  export type VariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findFirstOrThrow
   */
  export type VariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variant to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variants.
     */
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant findMany
   */
  export type VariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter, which Variants to fetch.
     */
    where?: VariantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variants to fetch.
     */
    orderBy?: VariantOrderByWithRelationInput | VariantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variants.
     */
    cursor?: VariantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variants.
     */
    skip?: number
    distinct?: VariantScalarFieldEnum | VariantScalarFieldEnum[]
  }

  /**
   * Variant create
   */
  export type VariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to create a Variant.
     */
    data: XOR<VariantCreateInput, VariantUncheckedCreateInput>
  }

  /**
   * Variant createMany
   */
  export type VariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variant createManyAndReturn
   */
  export type VariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to create many Variants.
     */
    data: VariantCreateManyInput | VariantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant update
   */
  export type VariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The data needed to update a Variant.
     */
    data: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
    /**
     * Choose, which Variant to update.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant updateMany
   */
  export type VariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
  }

  /**
   * Variant updateManyAndReturn
   */
  export type VariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * The data used to update Variants.
     */
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyInput>
    /**
     * Filter which Variants to update
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variant upsert
   */
  export type VariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * The filter to search for the Variant to update in case it exists.
     */
    where: VariantWhereUniqueInput
    /**
     * In case the Variant found by the `where` argument doesn't exist, create a new Variant with this data.
     */
    create: XOR<VariantCreateInput, VariantUncheckedCreateInput>
    /**
     * In case the Variant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariantUpdateInput, VariantUncheckedUpdateInput>
  }

  /**
   * Variant delete
   */
  export type VariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
    /**
     * Filter which Variant to delete.
     */
    where: VariantWhereUniqueInput
  }

  /**
   * Variant deleteMany
   */
  export type VariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variants to delete
     */
    where?: VariantWhereInput
    /**
     * Limit how many Variants to delete.
     */
    limit?: number
  }

  /**
   * Variant without action
   */
  export type VariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variant
     */
    select?: VariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variant
     */
    omit?: VariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariantInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    order_number: number | null
    total_price: Decimal | null
    subtotal_price: Decimal | null
    total_tax: Decimal | null
    total_discounts: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    order_number: number | null
    total_price: Decimal | null
    subtotal_price: Decimal | null
    total_tax: Decimal | null
    total_discounts: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    shopify_id: string | null
    tenantId: string | null
    customer_id: string | null
    admin_graphql_api_id: string | null
    email: string | null
    name: string | null
    note: string | null
    currency: string | null
    financial_status: string | null
    fulfillment_status: string | null
    order_number: number | null
    order_status_url: string | null
    processed_at: Date | null
    cancelled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    tags: string | null
    total_price: Decimal | null
    subtotal_price: Decimal | null
    total_tax: Decimal | null
    total_discounts: Decimal | null
    source_name: string | null
    confirmed: boolean | null
    buyer_accepts_marketing: boolean | null
    test: boolean | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    shopify_id: string | null
    tenantId: string | null
    customer_id: string | null
    admin_graphql_api_id: string | null
    email: string | null
    name: string | null
    note: string | null
    currency: string | null
    financial_status: string | null
    fulfillment_status: string | null
    order_number: number | null
    order_status_url: string | null
    processed_at: Date | null
    cancelled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
    tags: string | null
    total_price: Decimal | null
    subtotal_price: Decimal | null
    total_tax: Decimal | null
    total_discounts: Decimal | null
    source_name: string | null
    confirmed: boolean | null
    buyer_accepts_marketing: boolean | null
    test: boolean | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    shopify_id: number
    tenantId: number
    customer_id: number
    admin_graphql_api_id: number
    email: number
    name: number
    note: number
    currency: number
    financial_status: number
    fulfillment_status: number
    order_number: number
    order_status_url: number
    processed_at: number
    cancelled_at: number
    created_at: number
    updated_at: number
    tags: number
    total_price: number
    subtotal_price: number
    total_tax: number
    total_discounts: number
    source_name: number
    confirmed: number
    buyer_accepts_marketing: number
    test: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    order_number?: true
    total_price?: true
    subtotal_price?: true
    total_tax?: true
    total_discounts?: true
  }

  export type OrderSumAggregateInputType = {
    order_number?: true
    total_price?: true
    subtotal_price?: true
    total_tax?: true
    total_discounts?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    shopify_id?: true
    tenantId?: true
    customer_id?: true
    admin_graphql_api_id?: true
    email?: true
    name?: true
    note?: true
    currency?: true
    financial_status?: true
    fulfillment_status?: true
    order_number?: true
    order_status_url?: true
    processed_at?: true
    cancelled_at?: true
    created_at?: true
    updated_at?: true
    tags?: true
    total_price?: true
    subtotal_price?: true
    total_tax?: true
    total_discounts?: true
    source_name?: true
    confirmed?: true
    buyer_accepts_marketing?: true
    test?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    shopify_id?: true
    tenantId?: true
    customer_id?: true
    admin_graphql_api_id?: true
    email?: true
    name?: true
    note?: true
    currency?: true
    financial_status?: true
    fulfillment_status?: true
    order_number?: true
    order_status_url?: true
    processed_at?: true
    cancelled_at?: true
    created_at?: true
    updated_at?: true
    tags?: true
    total_price?: true
    subtotal_price?: true
    total_tax?: true
    total_discounts?: true
    source_name?: true
    confirmed?: true
    buyer_accepts_marketing?: true
    test?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    shopify_id?: true
    tenantId?: true
    customer_id?: true
    admin_graphql_api_id?: true
    email?: true
    name?: true
    note?: true
    currency?: true
    financial_status?: true
    fulfillment_status?: true
    order_number?: true
    order_status_url?: true
    processed_at?: true
    cancelled_at?: true
    created_at?: true
    updated_at?: true
    tags?: true
    total_price?: true
    subtotal_price?: true
    total_tax?: true
    total_discounts?: true
    source_name?: true
    confirmed?: true
    buyer_accepts_marketing?: true
    test?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    shopify_id: string
    tenantId: string
    customer_id: string | null
    admin_graphql_api_id: string | null
    email: string | null
    name: string | null
    note: string | null
    currency: string | null
    financial_status: string | null
    fulfillment_status: string | null
    order_number: number | null
    order_status_url: string | null
    processed_at: Date | null
    cancelled_at: Date | null
    created_at: Date
    updated_at: Date
    tags: string | null
    total_price: Decimal | null
    subtotal_price: Decimal | null
    total_tax: Decimal | null
    total_discounts: Decimal | null
    source_name: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_id?: boolean
    tenantId?: boolean
    customer_id?: boolean
    admin_graphql_api_id?: boolean
    email?: boolean
    name?: boolean
    note?: boolean
    currency?: boolean
    financial_status?: boolean
    fulfillment_status?: boolean
    order_number?: boolean
    order_status_url?: boolean
    processed_at?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tags?: boolean
    total_price?: boolean
    subtotal_price?: boolean
    total_tax?: boolean
    total_discounts?: boolean
    source_name?: boolean
    confirmed?: boolean
    buyer_accepts_marketing?: boolean
    test?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    line_items?: boolean | Order$line_itemsArgs<ExtArgs>
    shipping_lines?: boolean | Order$shipping_linesArgs<ExtArgs>
    addresses?: boolean | Order$addressesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_id?: boolean
    tenantId?: boolean
    customer_id?: boolean
    admin_graphql_api_id?: boolean
    email?: boolean
    name?: boolean
    note?: boolean
    currency?: boolean
    financial_status?: boolean
    fulfillment_status?: boolean
    order_number?: boolean
    order_status_url?: boolean
    processed_at?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tags?: boolean
    total_price?: boolean
    subtotal_price?: boolean
    total_tax?: boolean
    total_discounts?: boolean
    source_name?: boolean
    confirmed?: boolean
    buyer_accepts_marketing?: boolean
    test?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shopify_id?: boolean
    tenantId?: boolean
    customer_id?: boolean
    admin_graphql_api_id?: boolean
    email?: boolean
    name?: boolean
    note?: boolean
    currency?: boolean
    financial_status?: boolean
    fulfillment_status?: boolean
    order_number?: boolean
    order_status_url?: boolean
    processed_at?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tags?: boolean
    total_price?: boolean
    subtotal_price?: boolean
    total_tax?: boolean
    total_discounts?: boolean
    source_name?: boolean
    confirmed?: boolean
    buyer_accepts_marketing?: boolean
    test?: boolean
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    shopify_id?: boolean
    tenantId?: boolean
    customer_id?: boolean
    admin_graphql_api_id?: boolean
    email?: boolean
    name?: boolean
    note?: boolean
    currency?: boolean
    financial_status?: boolean
    fulfillment_status?: boolean
    order_number?: boolean
    order_status_url?: boolean
    processed_at?: boolean
    cancelled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
    tags?: boolean
    total_price?: boolean
    subtotal_price?: boolean
    total_tax?: boolean
    total_discounts?: boolean
    source_name?: boolean
    confirmed?: boolean
    buyer_accepts_marketing?: boolean
    test?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shopify_id" | "tenantId" | "customer_id" | "admin_graphql_api_id" | "email" | "name" | "note" | "currency" | "financial_status" | "fulfillment_status" | "order_number" | "order_status_url" | "processed_at" | "cancelled_at" | "created_at" | "updated_at" | "tags" | "total_price" | "subtotal_price" | "total_tax" | "total_discounts" | "source_name" | "confirmed" | "buyer_accepts_marketing" | "test", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    line_items?: boolean | Order$line_itemsArgs<ExtArgs>
    shipping_lines?: boolean | Order$shipping_linesArgs<ExtArgs>
    addresses?: boolean | Order$addressesArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      tenant: Prisma.$TenantPayload<ExtArgs>
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      line_items: Prisma.$LineItemPayload<ExtArgs>[]
      shipping_lines: Prisma.$ShippingLinePayload<ExtArgs>[]
      addresses: Prisma.$OrderAddressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shopify_id: string
      tenantId: string
      customer_id: string | null
      admin_graphql_api_id: string | null
      email: string | null
      name: string | null
      note: string | null
      currency: string | null
      financial_status: string | null
      fulfillment_status: string | null
      order_number: number | null
      order_status_url: string | null
      processed_at: Date | null
      cancelled_at: Date | null
      created_at: Date
      updated_at: Date
      tags: string | null
      total_price: Prisma.Decimal | null
      subtotal_price: Prisma.Decimal | null
      total_tax: Prisma.Decimal | null
      total_discounts: Prisma.Decimal | null
      source_name: string | null
      confirmed: boolean
      buyer_accepts_marketing: boolean
      test: boolean
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customer<T extends Order$customerArgs<ExtArgs> = {}>(args?: Subset<T, Order$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    line_items<T extends Order$line_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$line_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipping_lines<T extends Order$shipping_linesArgs<ExtArgs> = {}>(args?: Subset<T, Order$shipping_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses<T extends Order$addressesArgs<ExtArgs> = {}>(args?: Subset<T, Order$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly shopify_id: FieldRef<"Order", 'String'>
    readonly tenantId: FieldRef<"Order", 'String'>
    readonly customer_id: FieldRef<"Order", 'String'>
    readonly admin_graphql_api_id: FieldRef<"Order", 'String'>
    readonly email: FieldRef<"Order", 'String'>
    readonly name: FieldRef<"Order", 'String'>
    readonly note: FieldRef<"Order", 'String'>
    readonly currency: FieldRef<"Order", 'String'>
    readonly financial_status: FieldRef<"Order", 'String'>
    readonly fulfillment_status: FieldRef<"Order", 'String'>
    readonly order_number: FieldRef<"Order", 'Int'>
    readonly order_status_url: FieldRef<"Order", 'String'>
    readonly processed_at: FieldRef<"Order", 'DateTime'>
    readonly cancelled_at: FieldRef<"Order", 'DateTime'>
    readonly created_at: FieldRef<"Order", 'DateTime'>
    readonly updated_at: FieldRef<"Order", 'DateTime'>
    readonly tags: FieldRef<"Order", 'String'>
    readonly total_price: FieldRef<"Order", 'Decimal'>
    readonly subtotal_price: FieldRef<"Order", 'Decimal'>
    readonly total_tax: FieldRef<"Order", 'Decimal'>
    readonly total_discounts: FieldRef<"Order", 'Decimal'>
    readonly source_name: FieldRef<"Order", 'String'>
    readonly confirmed: FieldRef<"Order", 'Boolean'>
    readonly buyer_accepts_marketing: FieldRef<"Order", 'Boolean'>
    readonly test: FieldRef<"Order", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.customer
   */
  export type Order$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Order.line_items
   */
  export type Order$line_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    where?: LineItemWhereInput
    orderBy?: LineItemOrderByWithRelationInput | LineItemOrderByWithRelationInput[]
    cursor?: LineItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LineItemScalarFieldEnum | LineItemScalarFieldEnum[]
  }

  /**
   * Order.shipping_lines
   */
  export type Order$shipping_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    where?: ShippingLineWhereInput
    orderBy?: ShippingLineOrderByWithRelationInput | ShippingLineOrderByWithRelationInput[]
    cursor?: ShippingLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShippingLineScalarFieldEnum | ShippingLineScalarFieldEnum[]
  }

  /**
   * Order.addresses
   */
  export type Order$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    where?: OrderAddressWhereInput
    orderBy?: OrderAddressOrderByWithRelationInput | OrderAddressOrderByWithRelationInput[]
    cursor?: OrderAddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderAddressScalarFieldEnum | OrderAddressScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model LineItem
   */

  export type AggregateLineItem = {
    _count: LineItemCountAggregateOutputType | null
    _avg: LineItemAvgAggregateOutputType | null
    _sum: LineItemSumAggregateOutputType | null
    _min: LineItemMinAggregateOutputType | null
    _max: LineItemMaxAggregateOutputType | null
  }

  export type LineItemAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    grams: number | null
  }

  export type LineItemSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
    grams: number | null
  }

  export type LineItemMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    admin_graphql_api_id: string | null
    title: string | null
    name: string | null
    sku: string | null
    quantity: number | null
    price: Decimal | null
    grams: number | null
    product_id: string | null
    taxable: boolean | null
    fulfillment_service: string | null
    gift_card: boolean | null
  }

  export type LineItemMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    admin_graphql_api_id: string | null
    title: string | null
    name: string | null
    sku: string | null
    quantity: number | null
    price: Decimal | null
    grams: number | null
    product_id: string | null
    taxable: boolean | null
    fulfillment_service: string | null
    gift_card: boolean | null
  }

  export type LineItemCountAggregateOutputType = {
    id: number
    order_id: number
    admin_graphql_api_id: number
    title: number
    name: number
    sku: number
    quantity: number
    price: number
    grams: number
    product_id: number
    taxable: number
    fulfillment_service: number
    gift_card: number
    _all: number
  }


  export type LineItemAvgAggregateInputType = {
    quantity?: true
    price?: true
    grams?: true
  }

  export type LineItemSumAggregateInputType = {
    quantity?: true
    price?: true
    grams?: true
  }

  export type LineItemMinAggregateInputType = {
    id?: true
    order_id?: true
    admin_graphql_api_id?: true
    title?: true
    name?: true
    sku?: true
    quantity?: true
    price?: true
    grams?: true
    product_id?: true
    taxable?: true
    fulfillment_service?: true
    gift_card?: true
  }

  export type LineItemMaxAggregateInputType = {
    id?: true
    order_id?: true
    admin_graphql_api_id?: true
    title?: true
    name?: true
    sku?: true
    quantity?: true
    price?: true
    grams?: true
    product_id?: true
    taxable?: true
    fulfillment_service?: true
    gift_card?: true
  }

  export type LineItemCountAggregateInputType = {
    id?: true
    order_id?: true
    admin_graphql_api_id?: true
    title?: true
    name?: true
    sku?: true
    quantity?: true
    price?: true
    grams?: true
    product_id?: true
    taxable?: true
    fulfillment_service?: true
    gift_card?: true
    _all?: true
  }

  export type LineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineItem to aggregate.
     */
    where?: LineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineItems to fetch.
     */
    orderBy?: LineItemOrderByWithRelationInput | LineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LineItems
    **/
    _count?: true | LineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LineItemMaxAggregateInputType
  }

  export type GetLineItemAggregateType<T extends LineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLineItem[P]>
      : GetScalarType<T[P], AggregateLineItem[P]>
  }




  export type LineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LineItemWhereInput
    orderBy?: LineItemOrderByWithAggregationInput | LineItemOrderByWithAggregationInput[]
    by: LineItemScalarFieldEnum[] | LineItemScalarFieldEnum
    having?: LineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LineItemCountAggregateInputType | true
    _avg?: LineItemAvgAggregateInputType
    _sum?: LineItemSumAggregateInputType
    _min?: LineItemMinAggregateInputType
    _max?: LineItemMaxAggregateInputType
  }

  export type LineItemGroupByOutputType = {
    id: string
    order_id: string
    admin_graphql_api_id: string | null
    title: string | null
    name: string | null
    sku: string | null
    quantity: number
    price: Decimal
    grams: number | null
    product_id: string | null
    taxable: boolean
    fulfillment_service: string | null
    gift_card: boolean
    _count: LineItemCountAggregateOutputType | null
    _avg: LineItemAvgAggregateOutputType | null
    _sum: LineItemSumAggregateOutputType | null
    _min: LineItemMinAggregateOutputType | null
    _max: LineItemMaxAggregateOutputType | null
  }

  type GetLineItemGroupByPayload<T extends LineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LineItemGroupByOutputType[P]>
            : GetScalarType<T[P], LineItemGroupByOutputType[P]>
        }
      >
    >


  export type LineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    grams?: boolean
    product_id?: boolean
    taxable?: boolean
    fulfillment_service?: boolean
    gift_card?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineItem"]>

  export type LineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    grams?: boolean
    product_id?: boolean
    taxable?: boolean
    fulfillment_service?: boolean
    gift_card?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineItem"]>

  export type LineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    grams?: boolean
    product_id?: boolean
    taxable?: boolean
    fulfillment_service?: boolean
    gift_card?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lineItem"]>

  export type LineItemSelectScalar = {
    id?: boolean
    order_id?: boolean
    admin_graphql_api_id?: boolean
    title?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    grams?: boolean
    product_id?: boolean
    taxable?: boolean
    fulfillment_service?: boolean
    gift_card?: boolean
  }

  export type LineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "admin_graphql_api_id" | "title" | "name" | "sku" | "quantity" | "price" | "grams" | "product_id" | "taxable" | "fulfillment_service" | "gift_card", ExtArgs["result"]["lineItem"]>
  export type LineItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type LineItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type LineItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $LineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LineItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      admin_graphql_api_id: string | null
      title: string | null
      name: string | null
      sku: string | null
      quantity: number
      price: Prisma.Decimal
      grams: number | null
      product_id: string | null
      taxable: boolean
      fulfillment_service: string | null
      gift_card: boolean
    }, ExtArgs["result"]["lineItem"]>
    composites: {}
  }

  type LineItemGetPayload<S extends boolean | null | undefined | LineItemDefaultArgs> = $Result.GetResult<Prisma.$LineItemPayload, S>

  type LineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LineItemCountAggregateInputType | true
    }

  export interface LineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LineItem'], meta: { name: 'LineItem' } }
    /**
     * Find zero or one LineItem that matches the filter.
     * @param {LineItemFindUniqueArgs} args - Arguments to find a LineItem
     * @example
     * // Get one LineItem
     * const lineItem = await prisma.lineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LineItemFindUniqueArgs>(args: SelectSubset<T, LineItemFindUniqueArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LineItemFindUniqueOrThrowArgs} args - Arguments to find a LineItem
     * @example
     * // Get one LineItem
     * const lineItem = await prisma.lineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemFindFirstArgs} args - Arguments to find a LineItem
     * @example
     * // Get one LineItem
     * const lineItem = await prisma.lineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LineItemFindFirstArgs>(args?: SelectSubset<T, LineItemFindFirstArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemFindFirstOrThrowArgs} args - Arguments to find a LineItem
     * @example
     * // Get one LineItem
     * const lineItem = await prisma.lineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LineItems
     * const lineItems = await prisma.lineItem.findMany()
     * 
     * // Get first 10 LineItems
     * const lineItems = await prisma.lineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lineItemWithIdOnly = await prisma.lineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LineItemFindManyArgs>(args?: SelectSubset<T, LineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LineItem.
     * @param {LineItemCreateArgs} args - Arguments to create a LineItem.
     * @example
     * // Create one LineItem
     * const LineItem = await prisma.lineItem.create({
     *   data: {
     *     // ... data to create a LineItem
     *   }
     * })
     * 
     */
    create<T extends LineItemCreateArgs>(args: SelectSubset<T, LineItemCreateArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LineItems.
     * @param {LineItemCreateManyArgs} args - Arguments to create many LineItems.
     * @example
     * // Create many LineItems
     * const lineItem = await prisma.lineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LineItemCreateManyArgs>(args?: SelectSubset<T, LineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LineItems and returns the data saved in the database.
     * @param {LineItemCreateManyAndReturnArgs} args - Arguments to create many LineItems.
     * @example
     * // Create many LineItems
     * const lineItem = await prisma.lineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LineItems and only return the `id`
     * const lineItemWithIdOnly = await prisma.lineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, LineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LineItem.
     * @param {LineItemDeleteArgs} args - Arguments to delete one LineItem.
     * @example
     * // Delete one LineItem
     * const LineItem = await prisma.lineItem.delete({
     *   where: {
     *     // ... filter to delete one LineItem
     *   }
     * })
     * 
     */
    delete<T extends LineItemDeleteArgs>(args: SelectSubset<T, LineItemDeleteArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LineItem.
     * @param {LineItemUpdateArgs} args - Arguments to update one LineItem.
     * @example
     * // Update one LineItem
     * const lineItem = await prisma.lineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LineItemUpdateArgs>(args: SelectSubset<T, LineItemUpdateArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LineItems.
     * @param {LineItemDeleteManyArgs} args - Arguments to filter LineItems to delete.
     * @example
     * // Delete a few LineItems
     * const { count } = await prisma.lineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LineItemDeleteManyArgs>(args?: SelectSubset<T, LineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LineItems
     * const lineItem = await prisma.lineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LineItemUpdateManyArgs>(args: SelectSubset<T, LineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LineItems and returns the data updated in the database.
     * @param {LineItemUpdateManyAndReturnArgs} args - Arguments to update many LineItems.
     * @example
     * // Update many LineItems
     * const lineItem = await prisma.lineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LineItems and only return the `id`
     * const lineItemWithIdOnly = await prisma.lineItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends LineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, LineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LineItem.
     * @param {LineItemUpsertArgs} args - Arguments to update or create a LineItem.
     * @example
     * // Update or create a LineItem
     * const lineItem = await prisma.lineItem.upsert({
     *   create: {
     *     // ... data to create a LineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LineItem we want to update
     *   }
     * })
     */
    upsert<T extends LineItemUpsertArgs>(args: SelectSubset<T, LineItemUpsertArgs<ExtArgs>>): Prisma__LineItemClient<$Result.GetResult<Prisma.$LineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemCountArgs} args - Arguments to filter LineItems to count.
     * @example
     * // Count the number of LineItems
     * const count = await prisma.lineItem.count({
     *   where: {
     *     // ... the filter for the LineItems we want to count
     *   }
     * })
    **/
    count<T extends LineItemCountArgs>(
      args?: Subset<T, LineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineItemAggregateArgs>(args: Subset<T, LineItemAggregateArgs>): Prisma.PrismaPromise<GetLineItemAggregateType<T>>

    /**
     * Group by LineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineItemGroupByArgs} args - Group by arguments.
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
      T extends LineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LineItemGroupByArgs['orderBy'] }
        : { orderBy?: LineItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LineItem model
   */
  readonly fields: LineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LineItem model
   */
  interface LineItemFieldRefs {
    readonly id: FieldRef<"LineItem", 'String'>
    readonly order_id: FieldRef<"LineItem", 'String'>
    readonly admin_graphql_api_id: FieldRef<"LineItem", 'String'>
    readonly title: FieldRef<"LineItem", 'String'>
    readonly name: FieldRef<"LineItem", 'String'>
    readonly sku: FieldRef<"LineItem", 'String'>
    readonly quantity: FieldRef<"LineItem", 'Int'>
    readonly price: FieldRef<"LineItem", 'Decimal'>
    readonly grams: FieldRef<"LineItem", 'Int'>
    readonly product_id: FieldRef<"LineItem", 'String'>
    readonly taxable: FieldRef<"LineItem", 'Boolean'>
    readonly fulfillment_service: FieldRef<"LineItem", 'String'>
    readonly gift_card: FieldRef<"LineItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * LineItem findUnique
   */
  export type LineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * Filter, which LineItem to fetch.
     */
    where: LineItemWhereUniqueInput
  }

  /**
   * LineItem findUniqueOrThrow
   */
  export type LineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * Filter, which LineItem to fetch.
     */
    where: LineItemWhereUniqueInput
  }

  /**
   * LineItem findFirst
   */
  export type LineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * Filter, which LineItem to fetch.
     */
    where?: LineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineItems to fetch.
     */
    orderBy?: LineItemOrderByWithRelationInput | LineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineItems.
     */
    cursor?: LineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineItems.
     */
    distinct?: LineItemScalarFieldEnum | LineItemScalarFieldEnum[]
  }

  /**
   * LineItem findFirstOrThrow
   */
  export type LineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * Filter, which LineItem to fetch.
     */
    where?: LineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineItems to fetch.
     */
    orderBy?: LineItemOrderByWithRelationInput | LineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LineItems.
     */
    cursor?: LineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LineItems.
     */
    distinct?: LineItemScalarFieldEnum | LineItemScalarFieldEnum[]
  }

  /**
   * LineItem findMany
   */
  export type LineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * Filter, which LineItems to fetch.
     */
    where?: LineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LineItems to fetch.
     */
    orderBy?: LineItemOrderByWithRelationInput | LineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LineItems.
     */
    cursor?: LineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LineItems.
     */
    skip?: number
    distinct?: LineItemScalarFieldEnum | LineItemScalarFieldEnum[]
  }

  /**
   * LineItem create
   */
  export type LineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * The data needed to create a LineItem.
     */
    data: XOR<LineItemCreateInput, LineItemUncheckedCreateInput>
  }

  /**
   * LineItem createMany
   */
  export type LineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LineItems.
     */
    data: LineItemCreateManyInput | LineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LineItem createManyAndReturn
   */
  export type LineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * The data used to create many LineItems.
     */
    data: LineItemCreateManyInput | LineItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LineItem update
   */
  export type LineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * The data needed to update a LineItem.
     */
    data: XOR<LineItemUpdateInput, LineItemUncheckedUpdateInput>
    /**
     * Choose, which LineItem to update.
     */
    where: LineItemWhereUniqueInput
  }

  /**
   * LineItem updateMany
   */
  export type LineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LineItems.
     */
    data: XOR<LineItemUpdateManyMutationInput, LineItemUncheckedUpdateManyInput>
    /**
     * Filter which LineItems to update
     */
    where?: LineItemWhereInput
    /**
     * Limit how many LineItems to update.
     */
    limit?: number
  }

  /**
   * LineItem updateManyAndReturn
   */
  export type LineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * The data used to update LineItems.
     */
    data: XOR<LineItemUpdateManyMutationInput, LineItemUncheckedUpdateManyInput>
    /**
     * Filter which LineItems to update
     */
    where?: LineItemWhereInput
    /**
     * Limit how many LineItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LineItem upsert
   */
  export type LineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * The filter to search for the LineItem to update in case it exists.
     */
    where: LineItemWhereUniqueInput
    /**
     * In case the LineItem found by the `where` argument doesn't exist, create a new LineItem with this data.
     */
    create: XOR<LineItemCreateInput, LineItemUncheckedCreateInput>
    /**
     * In case the LineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LineItemUpdateInput, LineItemUncheckedUpdateInput>
  }

  /**
   * LineItem delete
   */
  export type LineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
    /**
     * Filter which LineItem to delete.
     */
    where: LineItemWhereUniqueInput
  }

  /**
   * LineItem deleteMany
   */
  export type LineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LineItems to delete
     */
    where?: LineItemWhereInput
    /**
     * Limit how many LineItems to delete.
     */
    limit?: number
  }

  /**
   * LineItem without action
   */
  export type LineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LineItem
     */
    select?: LineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LineItem
     */
    omit?: LineItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LineItemInclude<ExtArgs> | null
  }


  /**
   * Model ShippingLine
   */

  export type AggregateShippingLine = {
    _count: ShippingLineCountAggregateOutputType | null
    _avg: ShippingLineAvgAggregateOutputType | null
    _sum: ShippingLineSumAggregateOutputType | null
    _min: ShippingLineMinAggregateOutputType | null
    _max: ShippingLineMaxAggregateOutputType | null
  }

  export type ShippingLineAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ShippingLineSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ShippingLineMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    title: string | null
    price: Decimal | null
    source: string | null
  }

  export type ShippingLineMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    title: string | null
    price: Decimal | null
    source: string | null
  }

  export type ShippingLineCountAggregateOutputType = {
    id: number
    order_id: number
    title: number
    price: number
    source: number
    _all: number
  }


  export type ShippingLineAvgAggregateInputType = {
    price?: true
  }

  export type ShippingLineSumAggregateInputType = {
    price?: true
  }

  export type ShippingLineMinAggregateInputType = {
    id?: true
    order_id?: true
    title?: true
    price?: true
    source?: true
  }

  export type ShippingLineMaxAggregateInputType = {
    id?: true
    order_id?: true
    title?: true
    price?: true
    source?: true
  }

  export type ShippingLineCountAggregateInputType = {
    id?: true
    order_id?: true
    title?: true
    price?: true
    source?: true
    _all?: true
  }

  export type ShippingLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingLine to aggregate.
     */
    where?: ShippingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingLines to fetch.
     */
    orderBy?: ShippingLineOrderByWithRelationInput | ShippingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingLines
    **/
    _count?: true | ShippingLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingLineMaxAggregateInputType
  }

  export type GetShippingLineAggregateType<T extends ShippingLineAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingLine[P]>
      : GetScalarType<T[P], AggregateShippingLine[P]>
  }




  export type ShippingLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingLineWhereInput
    orderBy?: ShippingLineOrderByWithAggregationInput | ShippingLineOrderByWithAggregationInput[]
    by: ShippingLineScalarFieldEnum[] | ShippingLineScalarFieldEnum
    having?: ShippingLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingLineCountAggregateInputType | true
    _avg?: ShippingLineAvgAggregateInputType
    _sum?: ShippingLineSumAggregateInputType
    _min?: ShippingLineMinAggregateInputType
    _max?: ShippingLineMaxAggregateInputType
  }

  export type ShippingLineGroupByOutputType = {
    id: string
    order_id: string
    title: string | null
    price: Decimal
    source: string | null
    _count: ShippingLineCountAggregateOutputType | null
    _avg: ShippingLineAvgAggregateOutputType | null
    _sum: ShippingLineSumAggregateOutputType | null
    _min: ShippingLineMinAggregateOutputType | null
    _max: ShippingLineMaxAggregateOutputType | null
  }

  type GetShippingLineGroupByPayload<T extends ShippingLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingLineGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingLineGroupByOutputType[P]>
        }
      >
    >


  export type ShippingLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    title?: boolean
    price?: boolean
    source?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingLine"]>

  export type ShippingLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    title?: boolean
    price?: boolean
    source?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingLine"]>

  export type ShippingLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    title?: boolean
    price?: boolean
    source?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shippingLine"]>

  export type ShippingLineSelectScalar = {
    id?: boolean
    order_id?: boolean
    title?: boolean
    price?: boolean
    source?: boolean
  }

  export type ShippingLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "title" | "price" | "source", ExtArgs["result"]["shippingLine"]>
  export type ShippingLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ShippingLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type ShippingLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $ShippingLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingLine"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      title: string | null
      price: Prisma.Decimal
      source: string | null
    }, ExtArgs["result"]["shippingLine"]>
    composites: {}
  }

  type ShippingLineGetPayload<S extends boolean | null | undefined | ShippingLineDefaultArgs> = $Result.GetResult<Prisma.$ShippingLinePayload, S>

  type ShippingLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippingLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingLineCountAggregateInputType | true
    }

  export interface ShippingLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingLine'], meta: { name: 'ShippingLine' } }
    /**
     * Find zero or one ShippingLine that matches the filter.
     * @param {ShippingLineFindUniqueArgs} args - Arguments to find a ShippingLine
     * @example
     * // Get one ShippingLine
     * const shippingLine = await prisma.shippingLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingLineFindUniqueArgs>(args: SelectSubset<T, ShippingLineFindUniqueArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShippingLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippingLineFindUniqueOrThrowArgs} args - Arguments to find a ShippingLine
     * @example
     * // Get one ShippingLine
     * const shippingLine = await prisma.shippingLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingLineFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineFindFirstArgs} args - Arguments to find a ShippingLine
     * @example
     * // Get one ShippingLine
     * const shippingLine = await prisma.shippingLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingLineFindFirstArgs>(args?: SelectSubset<T, ShippingLineFindFirstArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineFindFirstOrThrowArgs} args - Arguments to find a ShippingLine
     * @example
     * // Get one ShippingLine
     * const shippingLine = await prisma.shippingLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingLineFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShippingLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingLines
     * const shippingLines = await prisma.shippingLine.findMany()
     * 
     * // Get first 10 ShippingLines
     * const shippingLines = await prisma.shippingLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingLineWithIdOnly = await prisma.shippingLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingLineFindManyArgs>(args?: SelectSubset<T, ShippingLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShippingLine.
     * @param {ShippingLineCreateArgs} args - Arguments to create a ShippingLine.
     * @example
     * // Create one ShippingLine
     * const ShippingLine = await prisma.shippingLine.create({
     *   data: {
     *     // ... data to create a ShippingLine
     *   }
     * })
     * 
     */
    create<T extends ShippingLineCreateArgs>(args: SelectSubset<T, ShippingLineCreateArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShippingLines.
     * @param {ShippingLineCreateManyArgs} args - Arguments to create many ShippingLines.
     * @example
     * // Create many ShippingLines
     * const shippingLine = await prisma.shippingLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingLineCreateManyArgs>(args?: SelectSubset<T, ShippingLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShippingLines and returns the data saved in the database.
     * @param {ShippingLineCreateManyAndReturnArgs} args - Arguments to create many ShippingLines.
     * @example
     * // Create many ShippingLines
     * const shippingLine = await prisma.shippingLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShippingLines and only return the `id`
     * const shippingLineWithIdOnly = await prisma.shippingLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShippingLineCreateManyAndReturnArgs>(args?: SelectSubset<T, ShippingLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShippingLine.
     * @param {ShippingLineDeleteArgs} args - Arguments to delete one ShippingLine.
     * @example
     * // Delete one ShippingLine
     * const ShippingLine = await prisma.shippingLine.delete({
     *   where: {
     *     // ... filter to delete one ShippingLine
     *   }
     * })
     * 
     */
    delete<T extends ShippingLineDeleteArgs>(args: SelectSubset<T, ShippingLineDeleteArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShippingLine.
     * @param {ShippingLineUpdateArgs} args - Arguments to update one ShippingLine.
     * @example
     * // Update one ShippingLine
     * const shippingLine = await prisma.shippingLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingLineUpdateArgs>(args: SelectSubset<T, ShippingLineUpdateArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShippingLines.
     * @param {ShippingLineDeleteManyArgs} args - Arguments to filter ShippingLines to delete.
     * @example
     * // Delete a few ShippingLines
     * const { count } = await prisma.shippingLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingLineDeleteManyArgs>(args?: SelectSubset<T, ShippingLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingLines
     * const shippingLine = await prisma.shippingLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingLineUpdateManyArgs>(args: SelectSubset<T, ShippingLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingLines and returns the data updated in the database.
     * @param {ShippingLineUpdateManyAndReturnArgs} args - Arguments to update many ShippingLines.
     * @example
     * // Update many ShippingLines
     * const shippingLine = await prisma.shippingLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShippingLines and only return the `id`
     * const shippingLineWithIdOnly = await prisma.shippingLine.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShippingLineUpdateManyAndReturnArgs>(args: SelectSubset<T, ShippingLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShippingLine.
     * @param {ShippingLineUpsertArgs} args - Arguments to update or create a ShippingLine.
     * @example
     * // Update or create a ShippingLine
     * const shippingLine = await prisma.shippingLine.upsert({
     *   create: {
     *     // ... data to create a ShippingLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingLine we want to update
     *   }
     * })
     */
    upsert<T extends ShippingLineUpsertArgs>(args: SelectSubset<T, ShippingLineUpsertArgs<ExtArgs>>): Prisma__ShippingLineClient<$Result.GetResult<Prisma.$ShippingLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShippingLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineCountArgs} args - Arguments to filter ShippingLines to count.
     * @example
     * // Count the number of ShippingLines
     * const count = await prisma.shippingLine.count({
     *   where: {
     *     // ... the filter for the ShippingLines we want to count
     *   }
     * })
    **/
    count<T extends ShippingLineCountArgs>(
      args?: Subset<T, ShippingLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShippingLineAggregateArgs>(args: Subset<T, ShippingLineAggregateArgs>): Prisma.PrismaPromise<GetShippingLineAggregateType<T>>

    /**
     * Group by ShippingLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingLineGroupByArgs} args - Group by arguments.
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
      T extends ShippingLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingLineGroupByArgs['orderBy'] }
        : { orderBy?: ShippingLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShippingLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingLine model
   */
  readonly fields: ShippingLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShippingLine model
   */
  interface ShippingLineFieldRefs {
    readonly id: FieldRef<"ShippingLine", 'String'>
    readonly order_id: FieldRef<"ShippingLine", 'String'>
    readonly title: FieldRef<"ShippingLine", 'String'>
    readonly price: FieldRef<"ShippingLine", 'Decimal'>
    readonly source: FieldRef<"ShippingLine", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShippingLine findUnique
   */
  export type ShippingLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * Filter, which ShippingLine to fetch.
     */
    where: ShippingLineWhereUniqueInput
  }

  /**
   * ShippingLine findUniqueOrThrow
   */
  export type ShippingLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * Filter, which ShippingLine to fetch.
     */
    where: ShippingLineWhereUniqueInput
  }

  /**
   * ShippingLine findFirst
   */
  export type ShippingLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * Filter, which ShippingLine to fetch.
     */
    where?: ShippingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingLines to fetch.
     */
    orderBy?: ShippingLineOrderByWithRelationInput | ShippingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingLines.
     */
    cursor?: ShippingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingLines.
     */
    distinct?: ShippingLineScalarFieldEnum | ShippingLineScalarFieldEnum[]
  }

  /**
   * ShippingLine findFirstOrThrow
   */
  export type ShippingLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * Filter, which ShippingLine to fetch.
     */
    where?: ShippingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingLines to fetch.
     */
    orderBy?: ShippingLineOrderByWithRelationInput | ShippingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingLines.
     */
    cursor?: ShippingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingLines.
     */
    distinct?: ShippingLineScalarFieldEnum | ShippingLineScalarFieldEnum[]
  }

  /**
   * ShippingLine findMany
   */
  export type ShippingLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * Filter, which ShippingLines to fetch.
     */
    where?: ShippingLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingLines to fetch.
     */
    orderBy?: ShippingLineOrderByWithRelationInput | ShippingLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingLines.
     */
    cursor?: ShippingLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingLines.
     */
    skip?: number
    distinct?: ShippingLineScalarFieldEnum | ShippingLineScalarFieldEnum[]
  }

  /**
   * ShippingLine create
   */
  export type ShippingLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * The data needed to create a ShippingLine.
     */
    data: XOR<ShippingLineCreateInput, ShippingLineUncheckedCreateInput>
  }

  /**
   * ShippingLine createMany
   */
  export type ShippingLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingLines.
     */
    data: ShippingLineCreateManyInput | ShippingLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingLine createManyAndReturn
   */
  export type ShippingLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * The data used to create many ShippingLines.
     */
    data: ShippingLineCreateManyInput | ShippingLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShippingLine update
   */
  export type ShippingLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * The data needed to update a ShippingLine.
     */
    data: XOR<ShippingLineUpdateInput, ShippingLineUncheckedUpdateInput>
    /**
     * Choose, which ShippingLine to update.
     */
    where: ShippingLineWhereUniqueInput
  }

  /**
   * ShippingLine updateMany
   */
  export type ShippingLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingLines.
     */
    data: XOR<ShippingLineUpdateManyMutationInput, ShippingLineUncheckedUpdateManyInput>
    /**
     * Filter which ShippingLines to update
     */
    where?: ShippingLineWhereInput
    /**
     * Limit how many ShippingLines to update.
     */
    limit?: number
  }

  /**
   * ShippingLine updateManyAndReturn
   */
  export type ShippingLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * The data used to update ShippingLines.
     */
    data: XOR<ShippingLineUpdateManyMutationInput, ShippingLineUncheckedUpdateManyInput>
    /**
     * Filter which ShippingLines to update
     */
    where?: ShippingLineWhereInput
    /**
     * Limit how many ShippingLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShippingLine upsert
   */
  export type ShippingLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * The filter to search for the ShippingLine to update in case it exists.
     */
    where: ShippingLineWhereUniqueInput
    /**
     * In case the ShippingLine found by the `where` argument doesn't exist, create a new ShippingLine with this data.
     */
    create: XOR<ShippingLineCreateInput, ShippingLineUncheckedCreateInput>
    /**
     * In case the ShippingLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingLineUpdateInput, ShippingLineUncheckedUpdateInput>
  }

  /**
   * ShippingLine delete
   */
  export type ShippingLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
    /**
     * Filter which ShippingLine to delete.
     */
    where: ShippingLineWhereUniqueInput
  }

  /**
   * ShippingLine deleteMany
   */
  export type ShippingLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingLines to delete
     */
    where?: ShippingLineWhereInput
    /**
     * Limit how many ShippingLines to delete.
     */
    limit?: number
  }

  /**
   * ShippingLine without action
   */
  export type ShippingLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingLine
     */
    select?: ShippingLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingLine
     */
    omit?: ShippingLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShippingLineInclude<ExtArgs> | null
  }


  /**
   * Model OrderAddress
   */

  export type AggregateOrderAddress = {
    _count: OrderAddressCountAggregateOutputType | null
    _min: OrderAddressMinAggregateOutputType | null
    _max: OrderAddressMaxAggregateOutputType | null
  }

  export type OrderAddressMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    type: string | null
    first_name: string | null
    last_name: string | null
    company: string | null
    address1: string | null
    address2: string | null
    city: string | null
    province: string | null
    country: string | null
    zip: string | null
    phone: string | null
    name: string | null
    province_code: string | null
    country_code: string | null
    country_name: string | null
  }

  export type OrderAddressMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    type: string | null
    first_name: string | null
    last_name: string | null
    company: string | null
    address1: string | null
    address2: string | null
    city: string | null
    province: string | null
    country: string | null
    zip: string | null
    phone: string | null
    name: string | null
    province_code: string | null
    country_code: string | null
    country_name: string | null
  }

  export type OrderAddressCountAggregateOutputType = {
    id: number
    order_id: number
    type: number
    first_name: number
    last_name: number
    company: number
    address1: number
    address2: number
    city: number
    province: number
    country: number
    zip: number
    phone: number
    name: number
    province_code: number
    country_code: number
    country_name: number
    _all: number
  }


  export type OrderAddressMinAggregateInputType = {
    id?: true
    order_id?: true
    type?: true
    first_name?: true
    last_name?: true
    company?: true
    address1?: true
    address2?: true
    city?: true
    province?: true
    country?: true
    zip?: true
    phone?: true
    name?: true
    province_code?: true
    country_code?: true
    country_name?: true
  }

  export type OrderAddressMaxAggregateInputType = {
    id?: true
    order_id?: true
    type?: true
    first_name?: true
    last_name?: true
    company?: true
    address1?: true
    address2?: true
    city?: true
    province?: true
    country?: true
    zip?: true
    phone?: true
    name?: true
    province_code?: true
    country_code?: true
    country_name?: true
  }

  export type OrderAddressCountAggregateInputType = {
    id?: true
    order_id?: true
    type?: true
    first_name?: true
    last_name?: true
    company?: true
    address1?: true
    address2?: true
    city?: true
    province?: true
    country?: true
    zip?: true
    phone?: true
    name?: true
    province_code?: true
    country_code?: true
    country_name?: true
    _all?: true
  }

  export type OrderAddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderAddress to aggregate.
     */
    where?: OrderAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAddresses to fetch.
     */
    orderBy?: OrderAddressOrderByWithRelationInput | OrderAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderAddresses
    **/
    _count?: true | OrderAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderAddressMaxAggregateInputType
  }

  export type GetOrderAddressAggregateType<T extends OrderAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderAddress[P]>
      : GetScalarType<T[P], AggregateOrderAddress[P]>
  }




  export type OrderAddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderAddressWhereInput
    orderBy?: OrderAddressOrderByWithAggregationInput | OrderAddressOrderByWithAggregationInput[]
    by: OrderAddressScalarFieldEnum[] | OrderAddressScalarFieldEnum
    having?: OrderAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderAddressCountAggregateInputType | true
    _min?: OrderAddressMinAggregateInputType
    _max?: OrderAddressMaxAggregateInputType
  }

  export type OrderAddressGroupByOutputType = {
    id: string
    order_id: string
    type: string
    first_name: string | null
    last_name: string | null
    company: string | null
    address1: string | null
    address2: string | null
    city: string | null
    province: string | null
    country: string | null
    zip: string | null
    phone: string | null
    name: string | null
    province_code: string | null
    country_code: string | null
    country_name: string | null
    _count: OrderAddressCountAggregateOutputType | null
    _min: OrderAddressMinAggregateOutputType | null
    _max: OrderAddressMaxAggregateOutputType | null
  }

  type GetOrderAddressGroupByPayload<T extends OrderAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderAddressGroupByOutputType[P]>
            : GetScalarType<T[P], OrderAddressGroupByOutputType[P]>
        }
      >
    >


  export type OrderAddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    type?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderAddress"]>

  export type OrderAddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    type?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderAddress"]>

  export type OrderAddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    type?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderAddress"]>

  export type OrderAddressSelectScalar = {
    id?: boolean
    order_id?: boolean
    type?: boolean
    first_name?: boolean
    last_name?: boolean
    company?: boolean
    address1?: boolean
    address2?: boolean
    city?: boolean
    province?: boolean
    country?: boolean
    zip?: boolean
    phone?: boolean
    name?: boolean
    province_code?: boolean
    country_code?: boolean
    country_name?: boolean
  }

  export type OrderAddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "type" | "first_name" | "last_name" | "company" | "address1" | "address2" | "city" | "province" | "country" | "zip" | "phone" | "name" | "province_code" | "country_code" | "country_name", ExtArgs["result"]["orderAddress"]>
  export type OrderAddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderAddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type OrderAddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $OrderAddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderAddress"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      type: string
      first_name: string | null
      last_name: string | null
      company: string | null
      address1: string | null
      address2: string | null
      city: string | null
      province: string | null
      country: string | null
      zip: string | null
      phone: string | null
      name: string | null
      province_code: string | null
      country_code: string | null
      country_name: string | null
    }, ExtArgs["result"]["orderAddress"]>
    composites: {}
  }

  type OrderAddressGetPayload<S extends boolean | null | undefined | OrderAddressDefaultArgs> = $Result.GetResult<Prisma.$OrderAddressPayload, S>

  type OrderAddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderAddressCountAggregateInputType | true
    }

  export interface OrderAddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderAddress'], meta: { name: 'OrderAddress' } }
    /**
     * Find zero or one OrderAddress that matches the filter.
     * @param {OrderAddressFindUniqueArgs} args - Arguments to find a OrderAddress
     * @example
     * // Get one OrderAddress
     * const orderAddress = await prisma.orderAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderAddressFindUniqueArgs>(args: SelectSubset<T, OrderAddressFindUniqueArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderAddressFindUniqueOrThrowArgs} args - Arguments to find a OrderAddress
     * @example
     * // Get one OrderAddress
     * const orderAddress = await prisma.orderAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderAddressFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressFindFirstArgs} args - Arguments to find a OrderAddress
     * @example
     * // Get one OrderAddress
     * const orderAddress = await prisma.orderAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderAddressFindFirstArgs>(args?: SelectSubset<T, OrderAddressFindFirstArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressFindFirstOrThrowArgs} args - Arguments to find a OrderAddress
     * @example
     * // Get one OrderAddress
     * const orderAddress = await prisma.orderAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderAddressFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderAddresses
     * const orderAddresses = await prisma.orderAddress.findMany()
     * 
     * // Get first 10 OrderAddresses
     * const orderAddresses = await prisma.orderAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderAddressWithIdOnly = await prisma.orderAddress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderAddressFindManyArgs>(args?: SelectSubset<T, OrderAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderAddress.
     * @param {OrderAddressCreateArgs} args - Arguments to create a OrderAddress.
     * @example
     * // Create one OrderAddress
     * const OrderAddress = await prisma.orderAddress.create({
     *   data: {
     *     // ... data to create a OrderAddress
     *   }
     * })
     * 
     */
    create<T extends OrderAddressCreateArgs>(args: SelectSubset<T, OrderAddressCreateArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderAddresses.
     * @param {OrderAddressCreateManyArgs} args - Arguments to create many OrderAddresses.
     * @example
     * // Create many OrderAddresses
     * const orderAddress = await prisma.orderAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderAddressCreateManyArgs>(args?: SelectSubset<T, OrderAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderAddresses and returns the data saved in the database.
     * @param {OrderAddressCreateManyAndReturnArgs} args - Arguments to create many OrderAddresses.
     * @example
     * // Create many OrderAddresses
     * const orderAddress = await prisma.orderAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderAddresses and only return the `id`
     * const orderAddressWithIdOnly = await prisma.orderAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderAddressCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderAddress.
     * @param {OrderAddressDeleteArgs} args - Arguments to delete one OrderAddress.
     * @example
     * // Delete one OrderAddress
     * const OrderAddress = await prisma.orderAddress.delete({
     *   where: {
     *     // ... filter to delete one OrderAddress
     *   }
     * })
     * 
     */
    delete<T extends OrderAddressDeleteArgs>(args: SelectSubset<T, OrderAddressDeleteArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderAddress.
     * @param {OrderAddressUpdateArgs} args - Arguments to update one OrderAddress.
     * @example
     * // Update one OrderAddress
     * const orderAddress = await prisma.orderAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderAddressUpdateArgs>(args: SelectSubset<T, OrderAddressUpdateArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderAddresses.
     * @param {OrderAddressDeleteManyArgs} args - Arguments to filter OrderAddresses to delete.
     * @example
     * // Delete a few OrderAddresses
     * const { count } = await prisma.orderAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderAddressDeleteManyArgs>(args?: SelectSubset<T, OrderAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderAddresses
     * const orderAddress = await prisma.orderAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderAddressUpdateManyArgs>(args: SelectSubset<T, OrderAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderAddresses and returns the data updated in the database.
     * @param {OrderAddressUpdateManyAndReturnArgs} args - Arguments to update many OrderAddresses.
     * @example
     * // Update many OrderAddresses
     * const orderAddress = await prisma.orderAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderAddresses and only return the `id`
     * const orderAddressWithIdOnly = await prisma.orderAddress.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderAddressUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderAddress.
     * @param {OrderAddressUpsertArgs} args - Arguments to update or create a OrderAddress.
     * @example
     * // Update or create a OrderAddress
     * const orderAddress = await prisma.orderAddress.upsert({
     *   create: {
     *     // ... data to create a OrderAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderAddress we want to update
     *   }
     * })
     */
    upsert<T extends OrderAddressUpsertArgs>(args: SelectSubset<T, OrderAddressUpsertArgs<ExtArgs>>): Prisma__OrderAddressClient<$Result.GetResult<Prisma.$OrderAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressCountArgs} args - Arguments to filter OrderAddresses to count.
     * @example
     * // Count the number of OrderAddresses
     * const count = await prisma.orderAddress.count({
     *   where: {
     *     // ... the filter for the OrderAddresses we want to count
     *   }
     * })
    **/
    count<T extends OrderAddressCountArgs>(
      args?: Subset<T, OrderAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAddressAggregateArgs>(args: Subset<T, OrderAddressAggregateArgs>): Prisma.PrismaPromise<GetOrderAddressAggregateType<T>>

    /**
     * Group by OrderAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAddressGroupByArgs} args - Group by arguments.
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
      T extends OrderAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderAddressGroupByArgs['orderBy'] }
        : { orderBy?: OrderAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderAddress model
   */
  readonly fields: OrderAddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderAddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderAddress model
   */
  interface OrderAddressFieldRefs {
    readonly id: FieldRef<"OrderAddress", 'String'>
    readonly order_id: FieldRef<"OrderAddress", 'String'>
    readonly type: FieldRef<"OrderAddress", 'String'>
    readonly first_name: FieldRef<"OrderAddress", 'String'>
    readonly last_name: FieldRef<"OrderAddress", 'String'>
    readonly company: FieldRef<"OrderAddress", 'String'>
    readonly address1: FieldRef<"OrderAddress", 'String'>
    readonly address2: FieldRef<"OrderAddress", 'String'>
    readonly city: FieldRef<"OrderAddress", 'String'>
    readonly province: FieldRef<"OrderAddress", 'String'>
    readonly country: FieldRef<"OrderAddress", 'String'>
    readonly zip: FieldRef<"OrderAddress", 'String'>
    readonly phone: FieldRef<"OrderAddress", 'String'>
    readonly name: FieldRef<"OrderAddress", 'String'>
    readonly province_code: FieldRef<"OrderAddress", 'String'>
    readonly country_code: FieldRef<"OrderAddress", 'String'>
    readonly country_name: FieldRef<"OrderAddress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderAddress findUnique
   */
  export type OrderAddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * Filter, which OrderAddress to fetch.
     */
    where: OrderAddressWhereUniqueInput
  }

  /**
   * OrderAddress findUniqueOrThrow
   */
  export type OrderAddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * Filter, which OrderAddress to fetch.
     */
    where: OrderAddressWhereUniqueInput
  }

  /**
   * OrderAddress findFirst
   */
  export type OrderAddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * Filter, which OrderAddress to fetch.
     */
    where?: OrderAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAddresses to fetch.
     */
    orderBy?: OrderAddressOrderByWithRelationInput | OrderAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderAddresses.
     */
    cursor?: OrderAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderAddresses.
     */
    distinct?: OrderAddressScalarFieldEnum | OrderAddressScalarFieldEnum[]
  }

  /**
   * OrderAddress findFirstOrThrow
   */
  export type OrderAddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * Filter, which OrderAddress to fetch.
     */
    where?: OrderAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAddresses to fetch.
     */
    orderBy?: OrderAddressOrderByWithRelationInput | OrderAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderAddresses.
     */
    cursor?: OrderAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderAddresses.
     */
    distinct?: OrderAddressScalarFieldEnum | OrderAddressScalarFieldEnum[]
  }

  /**
   * OrderAddress findMany
   */
  export type OrderAddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * Filter, which OrderAddresses to fetch.
     */
    where?: OrderAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderAddresses to fetch.
     */
    orderBy?: OrderAddressOrderByWithRelationInput | OrderAddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderAddresses.
     */
    cursor?: OrderAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderAddresses.
     */
    skip?: number
    distinct?: OrderAddressScalarFieldEnum | OrderAddressScalarFieldEnum[]
  }

  /**
   * OrderAddress create
   */
  export type OrderAddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderAddress.
     */
    data: XOR<OrderAddressCreateInput, OrderAddressUncheckedCreateInput>
  }

  /**
   * OrderAddress createMany
   */
  export type OrderAddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderAddresses.
     */
    data: OrderAddressCreateManyInput | OrderAddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderAddress createManyAndReturn
   */
  export type OrderAddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * The data used to create many OrderAddresses.
     */
    data: OrderAddressCreateManyInput | OrderAddressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderAddress update
   */
  export type OrderAddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderAddress.
     */
    data: XOR<OrderAddressUpdateInput, OrderAddressUncheckedUpdateInput>
    /**
     * Choose, which OrderAddress to update.
     */
    where: OrderAddressWhereUniqueInput
  }

  /**
   * OrderAddress updateMany
   */
  export type OrderAddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderAddresses.
     */
    data: XOR<OrderAddressUpdateManyMutationInput, OrderAddressUncheckedUpdateManyInput>
    /**
     * Filter which OrderAddresses to update
     */
    where?: OrderAddressWhereInput
    /**
     * Limit how many OrderAddresses to update.
     */
    limit?: number
  }

  /**
   * OrderAddress updateManyAndReturn
   */
  export type OrderAddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * The data used to update OrderAddresses.
     */
    data: XOR<OrderAddressUpdateManyMutationInput, OrderAddressUncheckedUpdateManyInput>
    /**
     * Filter which OrderAddresses to update
     */
    where?: OrderAddressWhereInput
    /**
     * Limit how many OrderAddresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderAddress upsert
   */
  export type OrderAddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderAddress to update in case it exists.
     */
    where: OrderAddressWhereUniqueInput
    /**
     * In case the OrderAddress found by the `where` argument doesn't exist, create a new OrderAddress with this data.
     */
    create: XOR<OrderAddressCreateInput, OrderAddressUncheckedCreateInput>
    /**
     * In case the OrderAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderAddressUpdateInput, OrderAddressUncheckedUpdateInput>
  }

  /**
   * OrderAddress delete
   */
  export type OrderAddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
    /**
     * Filter which OrderAddress to delete.
     */
    where: OrderAddressWhereUniqueInput
  }

  /**
   * OrderAddress deleteMany
   */
  export type OrderAddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderAddresses to delete
     */
    where?: OrderAddressWhereInput
    /**
     * Limit how many OrderAddresses to delete.
     */
    limit?: number
  }

  /**
   * OrderAddress without action
   */
  export type OrderAddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderAddress
     */
    select?: OrderAddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderAddress
     */
    omit?: OrderAddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderAddressInclude<ExtArgs> | null
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


  export const TenantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    apiKey: 'apiKey',
    createdAt: 'createdAt'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    tenantId: 'tenantId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    userId: 'userId',
    created_at: 'created_at',
    updated_at: 'updated_at',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    state: 'state',
    note: 'note',
    verified_email: 'verified_email',
    tax_exempt: 'tax_exempt',
    currency: 'currency',
    admin_graphql_api_id: 'admin_graphql_api_id'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    first_name: 'first_name',
    last_name: 'last_name',
    company: 'company',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    province: 'province',
    country: 'country',
    zip: 'zip',
    phone: 'phone',
    name: 'name',
    province_code: 'province_code',
    country_code: 'country_code',
    country_name: 'country_name',
    is_default: 'is_default'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    admin_graphql_api_id: 'admin_graphql_api_id',
    title: 'title',
    body_html: 'body_html',
    vendor: 'vendor',
    product_type: 'product_type',
    handle: 'handle',
    status: 'status',
    tags: 'tags',
    published_scope: 'published_scope',
    created_at: 'created_at',
    updated_at: 'updated_at',
    published_at: 'published_at',
    has_variants_that_requires_components: 'has_variants_that_requires_components',
    category: 'category'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const VariantScalarFieldEnum: {
    id: 'id',
    admin_graphql_api_id: 'admin_graphql_api_id',
    product_id: 'product_id',
    title: 'title',
    price: 'price',
    compare_at_price: 'compare_at_price',
    position: 'position',
    sku: 'sku',
    taxable: 'taxable',
    option1: 'option1',
    option2: 'option2',
    option3: 'option3',
    inventory_policy: 'inventory_policy',
    inventory_quantity: 'inventory_quantity',
    old_inventory_quantity: 'old_inventory_quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VariantScalarFieldEnum = (typeof VariantScalarFieldEnum)[keyof typeof VariantScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    shopify_id: 'shopify_id',
    tenantId: 'tenantId',
    customer_id: 'customer_id',
    admin_graphql_api_id: 'admin_graphql_api_id',
    email: 'email',
    name: 'name',
    note: 'note',
    currency: 'currency',
    financial_status: 'financial_status',
    fulfillment_status: 'fulfillment_status',
    order_number: 'order_number',
    order_status_url: 'order_status_url',
    processed_at: 'processed_at',
    cancelled_at: 'cancelled_at',
    created_at: 'created_at',
    updated_at: 'updated_at',
    tags: 'tags',
    total_price: 'total_price',
    subtotal_price: 'subtotal_price',
    total_tax: 'total_tax',
    total_discounts: 'total_discounts',
    source_name: 'source_name',
    confirmed: 'confirmed',
    buyer_accepts_marketing: 'buyer_accepts_marketing',
    test: 'test'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const LineItemScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    admin_graphql_api_id: 'admin_graphql_api_id',
    title: 'title',
    name: 'name',
    sku: 'sku',
    quantity: 'quantity',
    price: 'price',
    grams: 'grams',
    product_id: 'product_id',
    taxable: 'taxable',
    fulfillment_service: 'fulfillment_service',
    gift_card: 'gift_card'
  };

  export type LineItemScalarFieldEnum = (typeof LineItemScalarFieldEnum)[keyof typeof LineItemScalarFieldEnum]


  export const ShippingLineScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    title: 'title',
    price: 'price',
    source: 'source'
  };

  export type ShippingLineScalarFieldEnum = (typeof ShippingLineScalarFieldEnum)[keyof typeof ShippingLineScalarFieldEnum]


  export const OrderAddressScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    type: 'type',
    first_name: 'first_name',
    last_name: 'last_name',
    company: 'company',
    address1: 'address1',
    address2: 'address2',
    city: 'city',
    province: 'province',
    country: 'country',
    zip: 'zip',
    phone: 'phone',
    name: 'name',
    province_code: 'province_code',
    country_code: 'country_code',
    country_name: 'country_name'
  };

  export type OrderAddressScalarFieldEnum = (typeof OrderAddressScalarFieldEnum)[keyof typeof OrderAddressScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: StringFilter<"Tenant"> | string
    name?: StringFilter<"Tenant"> | string
    apiKey?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    customers?: CustomerListRelationFilter
    products?: ProductListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    customers?: CustomerOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    name?: StringFilter<"Tenant"> | string
    apiKey?: StringNullableFilter<"Tenant"> | string | null
    createdAt?: DateTimeFilter<"Tenant"> | Date | string
    users?: UserListRelationFilter
    customers?: CustomerListRelationFilter
    products?: ProductListRelationFilter
    orders?: OrderListRelationFilter
  }, "id">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenant"> | string
    name?: StringWithAggregatesFilter<"Tenant"> | string
    apiKey?: StringNullableWithAggregatesFilter<"Tenant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Tenant"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    customers?: CustomerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    tenantId?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    customers?: CustomerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    customers?: CustomerListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    tenantId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    tenantId?: StringWithAggregatesFilter<"User"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    tenantId?: StringFilter<"Customer"> | string
    userId?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeFilter<"Customer"> | Date | string
    first_name?: StringNullableFilter<"Customer"> | string | null
    last_name?: StringNullableFilter<"Customer"> | string | null
    email?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    note?: StringNullableFilter<"Customer"> | string | null
    verified_email?: BoolFilter<"Customer"> | boolean
    tax_exempt?: BoolFilter<"Customer"> | boolean
    currency?: StringNullableFilter<"Customer"> | string | null
    admin_graphql_api_id?: StringNullableFilter<"Customer"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    addresses?: AddressListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    verified_email?: SortOrder
    tax_exempt?: SortOrder
    currency?: SortOrderInput | SortOrder
    admin_graphql_api_id?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    addresses?: AddressOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    tenantId?: StringFilter<"Customer"> | string
    userId?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeFilter<"Customer"> | Date | string
    first_name?: StringNullableFilter<"Customer"> | string | null
    last_name?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    note?: StringNullableFilter<"Customer"> | string | null
    verified_email?: BoolFilter<"Customer"> | boolean
    tax_exempt?: BoolFilter<"Customer"> | boolean
    currency?: StringNullableFilter<"Customer"> | string | null
    admin_graphql_api_id?: StringNullableFilter<"Customer"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    addresses?: AddressListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    verified_email?: SortOrder
    tax_exempt?: SortOrder
    currency?: SortOrderInput | SortOrder
    admin_graphql_api_id?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    tenantId?: StringWithAggregatesFilter<"Customer"> | string
    userId?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    first_name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    state?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    note?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    verified_email?: BoolWithAggregatesFilter<"Customer"> | boolean
    tax_exempt?: BoolWithAggregatesFilter<"Customer"> | boolean
    currency?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    admin_graphql_api_id?: StringNullableWithAggregatesFilter<"Customer"> | string | null
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    customer_id?: StringFilter<"Address"> | string
    first_name?: StringNullableFilter<"Address"> | string | null
    last_name?: StringNullableFilter<"Address"> | string | null
    company?: StringNullableFilter<"Address"> | string | null
    address1?: StringNullableFilter<"Address"> | string | null
    address2?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    province?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    zip?: StringNullableFilter<"Address"> | string | null
    phone?: StringNullableFilter<"Address"> | string | null
    name?: StringNullableFilter<"Address"> | string | null
    province_code?: StringNullableFilter<"Address"> | string | null
    country_code?: StringNullableFilter<"Address"> | string | null
    country_name?: StringNullableFilter<"Address"> | string | null
    is_default?: BoolFilter<"Address"> | boolean
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    province_code?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    country_name?: SortOrderInput | SortOrder
    is_default?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    customer_id?: StringFilter<"Address"> | string
    first_name?: StringNullableFilter<"Address"> | string | null
    last_name?: StringNullableFilter<"Address"> | string | null
    company?: StringNullableFilter<"Address"> | string | null
    address1?: StringNullableFilter<"Address"> | string | null
    address2?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    province?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    zip?: StringNullableFilter<"Address"> | string | null
    phone?: StringNullableFilter<"Address"> | string | null
    name?: StringNullableFilter<"Address"> | string | null
    province_code?: StringNullableFilter<"Address"> | string | null
    country_code?: StringNullableFilter<"Address"> | string | null
    country_name?: StringNullableFilter<"Address"> | string | null
    is_default?: BoolFilter<"Address"> | boolean
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    province_code?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    country_name?: SortOrderInput | SortOrder
    is_default?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    customer_id?: StringWithAggregatesFilter<"Address"> | string
    first_name?: StringNullableWithAggregatesFilter<"Address"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Address"> | string | null
    company?: StringNullableWithAggregatesFilter<"Address"> | string | null
    address1?: StringNullableWithAggregatesFilter<"Address"> | string | null
    address2?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    province?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
    zip?: StringNullableWithAggregatesFilter<"Address"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Address"> | string | null
    name?: StringNullableWithAggregatesFilter<"Address"> | string | null
    province_code?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country_code?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country_name?: StringNullableWithAggregatesFilter<"Address"> | string | null
    is_default?: BoolWithAggregatesFilter<"Address"> | boolean
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    tenantId?: StringFilter<"Product"> | string
    admin_graphql_api_id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    body_html?: StringNullableFilter<"Product"> | string | null
    vendor?: StringNullableFilter<"Product"> | string | null
    product_type?: StringNullableFilter<"Product"> | string | null
    handle?: StringNullableFilter<"Product"> | string | null
    status?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableFilter<"Product"> | string | null
    published_scope?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    published_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    has_variants_that_requires_components?: BoolFilter<"Product"> | boolean
    category?: StringNullableFilter<"Product"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    variants?: VariantListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    body_html?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    product_type?: SortOrderInput | SortOrder
    handle?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    published_scope?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    has_variants_that_requires_components?: SortOrder
    category?: SortOrderInput | SortOrder
    tenant?: TenantOrderByWithRelationInput
    variants?: VariantOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    admin_graphql_api_id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    tenantId?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    body_html?: StringNullableFilter<"Product"> | string | null
    vendor?: StringNullableFilter<"Product"> | string | null
    product_type?: StringNullableFilter<"Product"> | string | null
    handle?: StringNullableFilter<"Product"> | string | null
    status?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableFilter<"Product"> | string | null
    published_scope?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    published_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    has_variants_that_requires_components?: BoolFilter<"Product"> | boolean
    category?: StringNullableFilter<"Product"> | string | null
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    variants?: VariantListRelationFilter
  }, "id" | "admin_graphql_api_id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    body_html?: SortOrderInput | SortOrder
    vendor?: SortOrderInput | SortOrder
    product_type?: SortOrderInput | SortOrder
    handle?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    published_scope?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    published_at?: SortOrderInput | SortOrder
    has_variants_that_requires_components?: SortOrder
    category?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    tenantId?: StringWithAggregatesFilter<"Product"> | string
    admin_graphql_api_id?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    body_html?: StringNullableWithAggregatesFilter<"Product"> | string | null
    vendor?: StringNullableWithAggregatesFilter<"Product"> | string | null
    product_type?: StringNullableWithAggregatesFilter<"Product"> | string | null
    handle?: StringNullableWithAggregatesFilter<"Product"> | string | null
    status?: StringNullableWithAggregatesFilter<"Product"> | string | null
    tags?: StringNullableWithAggregatesFilter<"Product"> | string | null
    published_scope?: StringNullableWithAggregatesFilter<"Product"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    published_at?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    has_variants_that_requires_components?: BoolWithAggregatesFilter<"Product"> | boolean
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
  }

  export type VariantWhereInput = {
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    id?: StringFilter<"Variant"> | string
    admin_graphql_api_id?: StringFilter<"Variant"> | string
    product_id?: StringFilter<"Variant"> | string
    title?: StringFilter<"Variant"> | string
    price?: DecimalFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    compare_at_price?: DecimalNullableFilter<"Variant"> | Decimal | DecimalJsLike | number | string | null
    position?: IntNullableFilter<"Variant"> | number | null
    sku?: StringNullableFilter<"Variant"> | string | null
    taxable?: BoolFilter<"Variant"> | boolean
    option1?: StringNullableFilter<"Variant"> | string | null
    option2?: StringNullableFilter<"Variant"> | string | null
    option3?: StringNullableFilter<"Variant"> | string | null
    inventory_policy?: StringNullableFilter<"Variant"> | string | null
    inventory_quantity?: IntNullableFilter<"Variant"> | number | null
    old_inventory_quantity?: IntNullableFilter<"Variant"> | number | null
    created_at?: DateTimeNullableFilter<"Variant"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Variant"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type VariantOrderByWithRelationInput = {
    id?: SortOrder
    admin_graphql_api_id?: SortOrder
    product_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    compare_at_price?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    taxable?: SortOrder
    option1?: SortOrderInput | SortOrder
    option2?: SortOrderInput | SortOrder
    option3?: SortOrderInput | SortOrder
    inventory_policy?: SortOrderInput | SortOrder
    inventory_quantity?: SortOrderInput | SortOrder
    old_inventory_quantity?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type VariantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    admin_graphql_api_id?: string
    AND?: VariantWhereInput | VariantWhereInput[]
    OR?: VariantWhereInput[]
    NOT?: VariantWhereInput | VariantWhereInput[]
    product_id?: StringFilter<"Variant"> | string
    title?: StringFilter<"Variant"> | string
    price?: DecimalFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    compare_at_price?: DecimalNullableFilter<"Variant"> | Decimal | DecimalJsLike | number | string | null
    position?: IntNullableFilter<"Variant"> | number | null
    sku?: StringNullableFilter<"Variant"> | string | null
    taxable?: BoolFilter<"Variant"> | boolean
    option1?: StringNullableFilter<"Variant"> | string | null
    option2?: StringNullableFilter<"Variant"> | string | null
    option3?: StringNullableFilter<"Variant"> | string | null
    inventory_policy?: StringNullableFilter<"Variant"> | string | null
    inventory_quantity?: IntNullableFilter<"Variant"> | number | null
    old_inventory_quantity?: IntNullableFilter<"Variant"> | number | null
    created_at?: DateTimeNullableFilter<"Variant"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Variant"> | Date | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "admin_graphql_api_id">

  export type VariantOrderByWithAggregationInput = {
    id?: SortOrder
    admin_graphql_api_id?: SortOrder
    product_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    compare_at_price?: SortOrderInput | SortOrder
    position?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    taxable?: SortOrder
    option1?: SortOrderInput | SortOrder
    option2?: SortOrderInput | SortOrder
    option3?: SortOrderInput | SortOrder
    inventory_policy?: SortOrderInput | SortOrder
    inventory_quantity?: SortOrderInput | SortOrder
    old_inventory_quantity?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: VariantCountOrderByAggregateInput
    _avg?: VariantAvgOrderByAggregateInput
    _max?: VariantMaxOrderByAggregateInput
    _min?: VariantMinOrderByAggregateInput
    _sum?: VariantSumOrderByAggregateInput
  }

  export type VariantScalarWhereWithAggregatesInput = {
    AND?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    OR?: VariantScalarWhereWithAggregatesInput[]
    NOT?: VariantScalarWhereWithAggregatesInput | VariantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Variant"> | string
    admin_graphql_api_id?: StringWithAggregatesFilter<"Variant"> | string
    product_id?: StringWithAggregatesFilter<"Variant"> | string
    title?: StringWithAggregatesFilter<"Variant"> | string
    price?: DecimalWithAggregatesFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    compare_at_price?: DecimalNullableWithAggregatesFilter<"Variant"> | Decimal | DecimalJsLike | number | string | null
    position?: IntNullableWithAggregatesFilter<"Variant"> | number | null
    sku?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    taxable?: BoolWithAggregatesFilter<"Variant"> | boolean
    option1?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    option2?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    option3?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    inventory_policy?: StringNullableWithAggregatesFilter<"Variant"> | string | null
    inventory_quantity?: IntNullableWithAggregatesFilter<"Variant"> | number | null
    old_inventory_quantity?: IntNullableWithAggregatesFilter<"Variant"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Variant"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Variant"> | Date | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    shopify_id?: StringFilter<"Order"> | string
    tenantId?: StringFilter<"Order"> | string
    customer_id?: StringNullableFilter<"Order"> | string | null
    admin_graphql_api_id?: StringNullableFilter<"Order"> | string | null
    email?: StringNullableFilter<"Order"> | string | null
    name?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    currency?: StringNullableFilter<"Order"> | string | null
    financial_status?: StringNullableFilter<"Order"> | string | null
    fulfillment_status?: StringNullableFilter<"Order"> | string | null
    order_number?: IntNullableFilter<"Order"> | number | null
    order_status_url?: StringNullableFilter<"Order"> | string | null
    processed_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    tags?: StringNullableFilter<"Order"> | string | null
    total_price?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_tax?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_discounts?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    source_name?: StringNullableFilter<"Order"> | string | null
    confirmed?: BoolFilter<"Order"> | boolean
    buyer_accepts_marketing?: BoolFilter<"Order"> | boolean
    test?: BoolFilter<"Order"> | boolean
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    line_items?: LineItemListRelationFilter
    shipping_lines?: ShippingLineListRelationFilter
    addresses?: OrderAddressListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    tenantId?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    admin_graphql_api_id?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    financial_status?: SortOrderInput | SortOrder
    fulfillment_status?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    order_status_url?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tags?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    subtotal_price?: SortOrderInput | SortOrder
    total_tax?: SortOrderInput | SortOrder
    total_discounts?: SortOrderInput | SortOrder
    source_name?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    buyer_accepts_marketing?: SortOrder
    test?: SortOrder
    tenant?: TenantOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    line_items?: LineItemOrderByRelationAggregateInput
    shipping_lines?: ShippingLineOrderByRelationAggregateInput
    addresses?: OrderAddressOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    shopify_id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    tenantId?: StringFilter<"Order"> | string
    customer_id?: StringNullableFilter<"Order"> | string | null
    admin_graphql_api_id?: StringNullableFilter<"Order"> | string | null
    email?: StringNullableFilter<"Order"> | string | null
    name?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    currency?: StringNullableFilter<"Order"> | string | null
    financial_status?: StringNullableFilter<"Order"> | string | null
    fulfillment_status?: StringNullableFilter<"Order"> | string | null
    order_number?: IntNullableFilter<"Order"> | number | null
    order_status_url?: StringNullableFilter<"Order"> | string | null
    processed_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    tags?: StringNullableFilter<"Order"> | string | null
    total_price?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_tax?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_discounts?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    source_name?: StringNullableFilter<"Order"> | string | null
    confirmed?: BoolFilter<"Order"> | boolean
    buyer_accepts_marketing?: BoolFilter<"Order"> | boolean
    test?: BoolFilter<"Order"> | boolean
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    line_items?: LineItemListRelationFilter
    shipping_lines?: ShippingLineListRelationFilter
    addresses?: OrderAddressListRelationFilter
  }, "id" | "shopify_id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    tenantId?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    admin_graphql_api_id?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    currency?: SortOrderInput | SortOrder
    financial_status?: SortOrderInput | SortOrder
    fulfillment_status?: SortOrderInput | SortOrder
    order_number?: SortOrderInput | SortOrder
    order_status_url?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tags?: SortOrderInput | SortOrder
    total_price?: SortOrderInput | SortOrder
    subtotal_price?: SortOrderInput | SortOrder
    total_tax?: SortOrderInput | SortOrder
    total_discounts?: SortOrderInput | SortOrder
    source_name?: SortOrderInput | SortOrder
    confirmed?: SortOrder
    buyer_accepts_marketing?: SortOrder
    test?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    shopify_id?: StringWithAggregatesFilter<"Order"> | string
    tenantId?: StringWithAggregatesFilter<"Order"> | string
    customer_id?: StringNullableWithAggregatesFilter<"Order"> | string | null
    admin_graphql_api_id?: StringNullableWithAggregatesFilter<"Order"> | string | null
    email?: StringNullableWithAggregatesFilter<"Order"> | string | null
    name?: StringNullableWithAggregatesFilter<"Order"> | string | null
    note?: StringNullableWithAggregatesFilter<"Order"> | string | null
    currency?: StringNullableWithAggregatesFilter<"Order"> | string | null
    financial_status?: StringNullableWithAggregatesFilter<"Order"> | string | null
    fulfillment_status?: StringNullableWithAggregatesFilter<"Order"> | string | null
    order_number?: IntNullableWithAggregatesFilter<"Order"> | number | null
    order_status_url?: StringNullableWithAggregatesFilter<"Order"> | string | null
    processed_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    cancelled_at?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    tags?: StringNullableWithAggregatesFilter<"Order"> | string | null
    total_price?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_tax?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_discounts?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    source_name?: StringNullableWithAggregatesFilter<"Order"> | string | null
    confirmed?: BoolWithAggregatesFilter<"Order"> | boolean
    buyer_accepts_marketing?: BoolWithAggregatesFilter<"Order"> | boolean
    test?: BoolWithAggregatesFilter<"Order"> | boolean
  }

  export type LineItemWhereInput = {
    AND?: LineItemWhereInput | LineItemWhereInput[]
    OR?: LineItemWhereInput[]
    NOT?: LineItemWhereInput | LineItemWhereInput[]
    id?: StringFilter<"LineItem"> | string
    order_id?: StringFilter<"LineItem"> | string
    admin_graphql_api_id?: StringNullableFilter<"LineItem"> | string | null
    title?: StringNullableFilter<"LineItem"> | string | null
    name?: StringNullableFilter<"LineItem"> | string | null
    sku?: StringNullableFilter<"LineItem"> | string | null
    quantity?: IntFilter<"LineItem"> | number
    price?: DecimalFilter<"LineItem"> | Decimal | DecimalJsLike | number | string
    grams?: IntNullableFilter<"LineItem"> | number | null
    product_id?: StringNullableFilter<"LineItem"> | string | null
    taxable?: BoolFilter<"LineItem"> | boolean
    fulfillment_service?: StringNullableFilter<"LineItem"> | string | null
    gift_card?: BoolFilter<"LineItem"> | boolean
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type LineItemOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    admin_graphql_api_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    taxable?: SortOrder
    fulfillment_service?: SortOrderInput | SortOrder
    gift_card?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type LineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LineItemWhereInput | LineItemWhereInput[]
    OR?: LineItemWhereInput[]
    NOT?: LineItemWhereInput | LineItemWhereInput[]
    order_id?: StringFilter<"LineItem"> | string
    admin_graphql_api_id?: StringNullableFilter<"LineItem"> | string | null
    title?: StringNullableFilter<"LineItem"> | string | null
    name?: StringNullableFilter<"LineItem"> | string | null
    sku?: StringNullableFilter<"LineItem"> | string | null
    quantity?: IntFilter<"LineItem"> | number
    price?: DecimalFilter<"LineItem"> | Decimal | DecimalJsLike | number | string
    grams?: IntNullableFilter<"LineItem"> | number | null
    product_id?: StringNullableFilter<"LineItem"> | string | null
    taxable?: BoolFilter<"LineItem"> | boolean
    fulfillment_service?: StringNullableFilter<"LineItem"> | string | null
    gift_card?: BoolFilter<"LineItem"> | boolean
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type LineItemOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    admin_graphql_api_id?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    sku?: SortOrderInput | SortOrder
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    taxable?: SortOrder
    fulfillment_service?: SortOrderInput | SortOrder
    gift_card?: SortOrder
    _count?: LineItemCountOrderByAggregateInput
    _avg?: LineItemAvgOrderByAggregateInput
    _max?: LineItemMaxOrderByAggregateInput
    _min?: LineItemMinOrderByAggregateInput
    _sum?: LineItemSumOrderByAggregateInput
  }

  export type LineItemScalarWhereWithAggregatesInput = {
    AND?: LineItemScalarWhereWithAggregatesInput | LineItemScalarWhereWithAggregatesInput[]
    OR?: LineItemScalarWhereWithAggregatesInput[]
    NOT?: LineItemScalarWhereWithAggregatesInput | LineItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LineItem"> | string
    order_id?: StringWithAggregatesFilter<"LineItem"> | string
    admin_graphql_api_id?: StringNullableWithAggregatesFilter<"LineItem"> | string | null
    title?: StringNullableWithAggregatesFilter<"LineItem"> | string | null
    name?: StringNullableWithAggregatesFilter<"LineItem"> | string | null
    sku?: StringNullableWithAggregatesFilter<"LineItem"> | string | null
    quantity?: IntWithAggregatesFilter<"LineItem"> | number
    price?: DecimalWithAggregatesFilter<"LineItem"> | Decimal | DecimalJsLike | number | string
    grams?: IntNullableWithAggregatesFilter<"LineItem"> | number | null
    product_id?: StringNullableWithAggregatesFilter<"LineItem"> | string | null
    taxable?: BoolWithAggregatesFilter<"LineItem"> | boolean
    fulfillment_service?: StringNullableWithAggregatesFilter<"LineItem"> | string | null
    gift_card?: BoolWithAggregatesFilter<"LineItem"> | boolean
  }

  export type ShippingLineWhereInput = {
    AND?: ShippingLineWhereInput | ShippingLineWhereInput[]
    OR?: ShippingLineWhereInput[]
    NOT?: ShippingLineWhereInput | ShippingLineWhereInput[]
    id?: StringFilter<"ShippingLine"> | string
    order_id?: StringFilter<"ShippingLine"> | string
    title?: StringNullableFilter<"ShippingLine"> | string | null
    price?: DecimalFilter<"ShippingLine"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"ShippingLine"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type ShippingLineOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    title?: SortOrderInput | SortOrder
    price?: SortOrder
    source?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type ShippingLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShippingLineWhereInput | ShippingLineWhereInput[]
    OR?: ShippingLineWhereInput[]
    NOT?: ShippingLineWhereInput | ShippingLineWhereInput[]
    order_id?: StringFilter<"ShippingLine"> | string
    title?: StringNullableFilter<"ShippingLine"> | string | null
    price?: DecimalFilter<"ShippingLine"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"ShippingLine"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type ShippingLineOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    title?: SortOrderInput | SortOrder
    price?: SortOrder
    source?: SortOrderInput | SortOrder
    _count?: ShippingLineCountOrderByAggregateInput
    _avg?: ShippingLineAvgOrderByAggregateInput
    _max?: ShippingLineMaxOrderByAggregateInput
    _min?: ShippingLineMinOrderByAggregateInput
    _sum?: ShippingLineSumOrderByAggregateInput
  }

  export type ShippingLineScalarWhereWithAggregatesInput = {
    AND?: ShippingLineScalarWhereWithAggregatesInput | ShippingLineScalarWhereWithAggregatesInput[]
    OR?: ShippingLineScalarWhereWithAggregatesInput[]
    NOT?: ShippingLineScalarWhereWithAggregatesInput | ShippingLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShippingLine"> | string
    order_id?: StringWithAggregatesFilter<"ShippingLine"> | string
    title?: StringNullableWithAggregatesFilter<"ShippingLine"> | string | null
    price?: DecimalWithAggregatesFilter<"ShippingLine"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableWithAggregatesFilter<"ShippingLine"> | string | null
  }

  export type OrderAddressWhereInput = {
    AND?: OrderAddressWhereInput | OrderAddressWhereInput[]
    OR?: OrderAddressWhereInput[]
    NOT?: OrderAddressWhereInput | OrderAddressWhereInput[]
    id?: StringFilter<"OrderAddress"> | string
    order_id?: StringFilter<"OrderAddress"> | string
    type?: StringFilter<"OrderAddress"> | string
    first_name?: StringNullableFilter<"OrderAddress"> | string | null
    last_name?: StringNullableFilter<"OrderAddress"> | string | null
    company?: StringNullableFilter<"OrderAddress"> | string | null
    address1?: StringNullableFilter<"OrderAddress"> | string | null
    address2?: StringNullableFilter<"OrderAddress"> | string | null
    city?: StringNullableFilter<"OrderAddress"> | string | null
    province?: StringNullableFilter<"OrderAddress"> | string | null
    country?: StringNullableFilter<"OrderAddress"> | string | null
    zip?: StringNullableFilter<"OrderAddress"> | string | null
    phone?: StringNullableFilter<"OrderAddress"> | string | null
    name?: StringNullableFilter<"OrderAddress"> | string | null
    province_code?: StringNullableFilter<"OrderAddress"> | string | null
    country_code?: StringNullableFilter<"OrderAddress"> | string | null
    country_name?: StringNullableFilter<"OrderAddress"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type OrderAddressOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    type?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    province_code?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    country_name?: SortOrderInput | SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type OrderAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderAddressWhereInput | OrderAddressWhereInput[]
    OR?: OrderAddressWhereInput[]
    NOT?: OrderAddressWhereInput | OrderAddressWhereInput[]
    order_id?: StringFilter<"OrderAddress"> | string
    type?: StringFilter<"OrderAddress"> | string
    first_name?: StringNullableFilter<"OrderAddress"> | string | null
    last_name?: StringNullableFilter<"OrderAddress"> | string | null
    company?: StringNullableFilter<"OrderAddress"> | string | null
    address1?: StringNullableFilter<"OrderAddress"> | string | null
    address2?: StringNullableFilter<"OrderAddress"> | string | null
    city?: StringNullableFilter<"OrderAddress"> | string | null
    province?: StringNullableFilter<"OrderAddress"> | string | null
    country?: StringNullableFilter<"OrderAddress"> | string | null
    zip?: StringNullableFilter<"OrderAddress"> | string | null
    phone?: StringNullableFilter<"OrderAddress"> | string | null
    name?: StringNullableFilter<"OrderAddress"> | string | null
    province_code?: StringNullableFilter<"OrderAddress"> | string | null
    country_code?: StringNullableFilter<"OrderAddress"> | string | null
    country_name?: StringNullableFilter<"OrderAddress"> | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type OrderAddressOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    type?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address1?: SortOrderInput | SortOrder
    address2?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    province?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    zip?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    province_code?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    country_name?: SortOrderInput | SortOrder
    _count?: OrderAddressCountOrderByAggregateInput
    _max?: OrderAddressMaxOrderByAggregateInput
    _min?: OrderAddressMinOrderByAggregateInput
  }

  export type OrderAddressScalarWhereWithAggregatesInput = {
    AND?: OrderAddressScalarWhereWithAggregatesInput | OrderAddressScalarWhereWithAggregatesInput[]
    OR?: OrderAddressScalarWhereWithAggregatesInput[]
    NOT?: OrderAddressScalarWhereWithAggregatesInput | OrderAddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderAddress"> | string
    order_id?: StringWithAggregatesFilter<"OrderAddress"> | string
    type?: StringWithAggregatesFilter<"OrderAddress"> | string
    first_name?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    company?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    address1?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    address2?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    city?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    province?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    country?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    zip?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    phone?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    name?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    province_code?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    country_code?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
    country_name?: StringNullableWithAggregatesFilter<"OrderAddress"> | string | null
  }

  export type TenantCreateInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    customers?: CustomerCreateNestedManyWithoutTenantInput
    products?: ProductCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    customers?: CustomerUncheckedCreateNestedManyWithoutTenantInput
    products?: ProductUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    customers?: CustomerUpdateManyWithoutTenantNestedInput
    products?: ProductUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutTenantNestedInput
    products?: ProductUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
  }

  export type TenantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    tenant: TenantCreateNestedOneWithoutUsersInput
    customers?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    tenantId: string
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
    customers?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    tenantId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    tenant: TenantCreateNestedOneWithoutCustomersInput
    user?: UserCreateNestedOneWithoutCustomersInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    tenantId: string
    userId?: string | null
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutCustomersNestedInput
    user?: UserUpdateOneWithoutCustomersNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    tenantId: string
    userId?: string | null
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    id?: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    is_default: boolean
    customer: CustomerCreateNestedOneWithoutAddressesInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    customer_id: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    is_default: boolean
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressCreateManyInput = {
    id?: string
    customer_id: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    is_default: boolean
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customer_id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductCreateInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
    tenant: TenantCreateNestedOneWithoutProductsInput
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    tenantId: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutProductsNestedInput
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    tenantId: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VariantCreateInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    position?: number | null
    sku?: string | null
    taxable: boolean
    option1?: string | null
    option2?: string | null
    option3?: string | null
    inventory_policy?: string | null
    inventory_quantity?: number | null
    old_inventory_quantity?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    product: ProductCreateNestedOneWithoutVariantsInput
  }

  export type VariantUncheckedCreateInput = {
    id?: string
    admin_graphql_api_id: string
    product_id: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    position?: number | null
    sku?: string | null
    taxable: boolean
    option1?: string | null
    option2?: string | null
    option3?: string | null
    inventory_policy?: string | null
    inventory_quantity?: number | null
    old_inventory_quantity?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VariantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    product?: ProductUpdateOneRequiredWithoutVariantsNestedInput
  }

  export type VariantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariantCreateManyInput = {
    id?: string
    admin_graphql_api_id: string
    product_id: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    position?: number | null
    sku?: string | null
    taxable: boolean
    option1?: string | null
    option2?: string | null
    option3?: string | null
    inventory_policy?: string | null
    inventory_quantity?: number | null
    old_inventory_quantity?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VariantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateInput = {
    id?: string
    shopify_id: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    tenant: TenantCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    line_items?: LineItemCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    shopify_id: string
    tenantId: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    line_items?: LineItemUncheckedCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineUncheckedCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    line_items?: LineItemUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    line_items?: LineItemUncheckedUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUncheckedUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    shopify_id: string
    tenantId: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineItemCreateInput = {
    id?: string
    admin_graphql_api_id?: string | null
    title?: string | null
    name?: string | null
    sku?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    grams?: number | null
    product_id?: string | null
    taxable: boolean
    fulfillment_service?: string | null
    gift_card: boolean
    order: OrderCreateNestedOneWithoutLine_itemsInput
  }

  export type LineItemUncheckedCreateInput = {
    id?: string
    order_id: string
    admin_graphql_api_id?: string | null
    title?: string | null
    name?: string | null
    sku?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    grams?: number | null
    product_id?: string | null
    taxable: boolean
    fulfillment_service?: string | null
    gift_card: boolean
  }

  export type LineItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
    order?: OrderUpdateOneRequiredWithoutLine_itemsNestedInput
  }

  export type LineItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineItemCreateManyInput = {
    id?: string
    order_id: string
    admin_graphql_api_id?: string | null
    title?: string | null
    name?: string | null
    sku?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    grams?: number | null
    product_id?: string | null
    taxable: boolean
    fulfillment_service?: string | null
    gift_card: boolean
  }

  export type LineItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingLineCreateInput = {
    id?: string
    title?: string | null
    price: Decimal | DecimalJsLike | number | string
    source?: string | null
    order: OrderCreateNestedOneWithoutShipping_linesInput
  }

  export type ShippingLineUncheckedCreateInput = {
    id?: string
    order_id: string
    title?: string | null
    price: Decimal | DecimalJsLike | number | string
    source?: string | null
  }

  export type ShippingLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutShipping_linesNestedInput
  }

  export type ShippingLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippingLineCreateManyInput = {
    id?: string
    order_id: string
    title?: string | null
    price: Decimal | DecimalJsLike | number | string
    source?: string | null
  }

  export type ShippingLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippingLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderAddressCreateInput = {
    id?: string
    type: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    order: OrderCreateNestedOneWithoutAddressesInput
  }

  export type OrderAddressUncheckedCreateInput = {
    id?: string
    order_id: string
    type: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
  }

  export type OrderAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneRequiredWithoutAddressesNestedInput
  }

  export type OrderAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderAddressCreateManyInput = {
    id?: string
    order_id: string
    type: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
  }

  export type OrderAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    apiKey?: SortOrder
    createdAt?: SortOrder
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

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tenantId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    tenantId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
  }

  export type AddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    note?: SortOrder
    verified_email?: SortOrder
    tax_exempt?: SortOrder
    currency?: SortOrder
    admin_graphql_api_id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    note?: SortOrder
    verified_email?: SortOrder
    tax_exempt?: SortOrder
    currency?: SortOrder
    admin_graphql_api_id?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    userId?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    state?: SortOrder
    note?: SortOrder
    verified_email?: SortOrder
    tax_exempt?: SortOrder
    currency?: SortOrder
    admin_graphql_api_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    company?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    province_code?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    is_default?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    company?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    province_code?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    is_default?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    company?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    province_code?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
    is_default?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VariantListRelationFilter = {
    every?: VariantWhereInput
    some?: VariantWhereInput
    none?: VariantWhereInput
  }

  export type VariantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    body_html?: SortOrder
    vendor?: SortOrder
    product_type?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    published_scope?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
    has_variants_that_requires_components?: SortOrder
    category?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    body_html?: SortOrder
    vendor?: SortOrder
    product_type?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    published_scope?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
    has_variants_that_requires_components?: SortOrder
    category?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    body_html?: SortOrder
    vendor?: SortOrder
    product_type?: SortOrder
    handle?: SortOrder
    status?: SortOrder
    tags?: SortOrder
    published_scope?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    published_at?: SortOrder
    has_variants_that_requires_components?: SortOrder
    category?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type VariantCountOrderByAggregateInput = {
    id?: SortOrder
    admin_graphql_api_id?: SortOrder
    product_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    compare_at_price?: SortOrder
    position?: SortOrder
    sku?: SortOrder
    taxable?: SortOrder
    option1?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    inventory_policy?: SortOrder
    inventory_quantity?: SortOrder
    old_inventory_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VariantAvgOrderByAggregateInput = {
    price?: SortOrder
    compare_at_price?: SortOrder
    position?: SortOrder
    inventory_quantity?: SortOrder
    old_inventory_quantity?: SortOrder
  }

  export type VariantMaxOrderByAggregateInput = {
    id?: SortOrder
    admin_graphql_api_id?: SortOrder
    product_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    compare_at_price?: SortOrder
    position?: SortOrder
    sku?: SortOrder
    taxable?: SortOrder
    option1?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    inventory_policy?: SortOrder
    inventory_quantity?: SortOrder
    old_inventory_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VariantMinOrderByAggregateInput = {
    id?: SortOrder
    admin_graphql_api_id?: SortOrder
    product_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    compare_at_price?: SortOrder
    position?: SortOrder
    sku?: SortOrder
    taxable?: SortOrder
    option1?: SortOrder
    option2?: SortOrder
    option3?: SortOrder
    inventory_policy?: SortOrder
    inventory_quantity?: SortOrder
    old_inventory_quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VariantSumOrderByAggregateInput = {
    price?: SortOrder
    compare_at_price?: SortOrder
    position?: SortOrder
    inventory_quantity?: SortOrder
    old_inventory_quantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type LineItemListRelationFilter = {
    every?: LineItemWhereInput
    some?: LineItemWhereInput
    none?: LineItemWhereInput
  }

  export type ShippingLineListRelationFilter = {
    every?: ShippingLineWhereInput
    some?: ShippingLineWhereInput
    none?: ShippingLineWhereInput
  }

  export type OrderAddressListRelationFilter = {
    every?: OrderAddressWhereInput
    some?: OrderAddressWhereInput
    none?: OrderAddressWhereInput
  }

  export type LineItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShippingLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderAddressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    tenantId?: SortOrder
    customer_id?: SortOrder
    admin_graphql_api_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    note?: SortOrder
    currency?: SortOrder
    financial_status?: SortOrder
    fulfillment_status?: SortOrder
    order_number?: SortOrder
    order_status_url?: SortOrder
    processed_at?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tags?: SortOrder
    total_price?: SortOrder
    subtotal_price?: SortOrder
    total_tax?: SortOrder
    total_discounts?: SortOrder
    source_name?: SortOrder
    confirmed?: SortOrder
    buyer_accepts_marketing?: SortOrder
    test?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    order_number?: SortOrder
    total_price?: SortOrder
    subtotal_price?: SortOrder
    total_tax?: SortOrder
    total_discounts?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    tenantId?: SortOrder
    customer_id?: SortOrder
    admin_graphql_api_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    note?: SortOrder
    currency?: SortOrder
    financial_status?: SortOrder
    fulfillment_status?: SortOrder
    order_number?: SortOrder
    order_status_url?: SortOrder
    processed_at?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tags?: SortOrder
    total_price?: SortOrder
    subtotal_price?: SortOrder
    total_tax?: SortOrder
    total_discounts?: SortOrder
    source_name?: SortOrder
    confirmed?: SortOrder
    buyer_accepts_marketing?: SortOrder
    test?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    shopify_id?: SortOrder
    tenantId?: SortOrder
    customer_id?: SortOrder
    admin_graphql_api_id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    note?: SortOrder
    currency?: SortOrder
    financial_status?: SortOrder
    fulfillment_status?: SortOrder
    order_number?: SortOrder
    order_status_url?: SortOrder
    processed_at?: SortOrder
    cancelled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tags?: SortOrder
    total_price?: SortOrder
    subtotal_price?: SortOrder
    total_tax?: SortOrder
    total_discounts?: SortOrder
    source_name?: SortOrder
    confirmed?: SortOrder
    buyer_accepts_marketing?: SortOrder
    test?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    order_number?: SortOrder
    total_price?: SortOrder
    subtotal_price?: SortOrder
    total_tax?: SortOrder
    total_discounts?: SortOrder
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

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type LineItemCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrder
    product_id?: SortOrder
    taxable?: SortOrder
    fulfillment_service?: SortOrder
    gift_card?: SortOrder
  }

  export type LineItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrder
  }

  export type LineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrder
    product_id?: SortOrder
    taxable?: SortOrder
    fulfillment_service?: SortOrder
    gift_card?: SortOrder
  }

  export type LineItemMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    admin_graphql_api_id?: SortOrder
    title?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrder
    product_id?: SortOrder
    taxable?: SortOrder
    fulfillment_service?: SortOrder
    gift_card?: SortOrder
  }

  export type LineItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    grams?: SortOrder
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

  export type ShippingLineCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    source?: SortOrder
  }

  export type ShippingLineAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ShippingLineMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    source?: SortOrder
  }

  export type ShippingLineMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    source?: SortOrder
  }

  export type ShippingLineSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type OrderAddressCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    company?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    province_code?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
  }

  export type OrderAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    company?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    province_code?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
  }

  export type OrderAddressMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    type?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    company?: SortOrder
    address1?: SortOrder
    address2?: SortOrder
    city?: SortOrder
    province?: SortOrder
    country?: SortOrder
    zip?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    province_code?: SortOrder
    country_code?: SortOrder
    country_name?: SortOrder
  }

  export type UserCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerCreateNestedManyWithoutTenantInput = {
    create?: XOR<CustomerCreateWithoutTenantInput, CustomerUncheckedCreateWithoutTenantInput> | CustomerCreateWithoutTenantInput[] | CustomerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput | CustomerCreateOrConnectWithoutTenantInput[]
    createMany?: CustomerCreateManyTenantInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProductCreateWithoutTenantInput, ProductUncheckedCreateWithoutTenantInput> | ProductCreateWithoutTenantInput[] | ProductUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTenantInput | ProductCreateOrConnectWithoutTenantInput[]
    createMany?: ProductCreateManyTenantInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<CustomerCreateWithoutTenantInput, CustomerUncheckedCreateWithoutTenantInput> | CustomerCreateWithoutTenantInput[] | CustomerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput | CustomerCreateOrConnectWithoutTenantInput[]
    createMany?: CustomerCreateManyTenantInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<ProductCreateWithoutTenantInput, ProductUncheckedCreateWithoutTenantInput> | ProductCreateWithoutTenantInput[] | ProductUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTenantInput | ProductCreateOrConnectWithoutTenantInput[]
    createMany?: ProductCreateManyTenantInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CustomerCreateWithoutTenantInput, CustomerUncheckedCreateWithoutTenantInput> | CustomerCreateWithoutTenantInput[] | CustomerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput | CustomerCreateOrConnectWithoutTenantInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutTenantInput | CustomerUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CustomerCreateManyTenantInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutTenantInput | CustomerUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutTenantInput | CustomerUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProductCreateWithoutTenantInput, ProductUncheckedCreateWithoutTenantInput> | ProductCreateWithoutTenantInput[] | ProductUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTenantInput | ProductCreateOrConnectWithoutTenantInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTenantInput | ProductUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProductCreateManyTenantInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTenantInput | ProductUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTenantInput | ProductUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput | OrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput | OrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput | OrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput> | UserCreateWithoutTenantInput[] | UserUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTenantInput | UserCreateOrConnectWithoutTenantInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTenantInput | UserUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: UserCreateManyTenantInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTenantInput | UserUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTenantInput | UserUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<CustomerCreateWithoutTenantInput, CustomerUncheckedCreateWithoutTenantInput> | CustomerCreateWithoutTenantInput[] | CustomerUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutTenantInput | CustomerCreateOrConnectWithoutTenantInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutTenantInput | CustomerUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: CustomerCreateManyTenantInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutTenantInput | CustomerUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutTenantInput | CustomerUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<ProductCreateWithoutTenantInput, ProductUncheckedCreateWithoutTenantInput> | ProductCreateWithoutTenantInput[] | ProductUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutTenantInput | ProductCreateOrConnectWithoutTenantInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutTenantInput | ProductUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: ProductCreateManyTenantInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutTenantInput | ProductUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutTenantInput | ProductUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput> | OrderCreateWithoutTenantInput[] | OrderUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutTenantInput | OrderCreateOrConnectWithoutTenantInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutTenantInput | OrderUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: OrderCreateManyTenantInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutTenantInput | OrderUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutTenantInput | OrderUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutUsersInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    connect?: TenantWhereUniqueInput
  }

  export type CustomerCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUsersInput
    upsert?: TenantUpsertWithoutUsersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUsersInput, TenantUpdateWithoutUsersInput>, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type CustomerUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput> | CustomerCreateWithoutUserInput[] | CustomerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutUserInput | CustomerCreateOrConnectWithoutUserInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutUserInput | CustomerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomerCreateManyUserInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutUserInput | CustomerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutUserInput | CustomerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type TenantCreateNestedOneWithoutCustomersInput = {
    create?: XOR<TenantCreateWithoutCustomersInput, TenantUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCustomersInput
    connect?: TenantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCustomersInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type AddressUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TenantUpdateOneRequiredWithoutCustomersNestedInput = {
    create?: XOR<TenantCreateWithoutCustomersInput, TenantUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutCustomersInput
    upsert?: TenantUpsertWithoutCustomersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutCustomersInput, TenantUpdateWithoutCustomersInput>, TenantUncheckedUpdateWithoutCustomersInput>
  }

  export type UserUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    upsert?: UserUpsertWithoutCustomersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomersInput, UserUpdateWithoutCustomersInput>, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type AddressUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AddressUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput> | AddressCreateWithoutCustomerInput[] | AddressUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: AddressCreateOrConnectWithoutCustomerInput | AddressCreateOrConnectWithoutCustomerInput[]
    upsert?: AddressUpsertWithWhereUniqueWithoutCustomerInput | AddressUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: AddressCreateManyCustomerInputEnvelope
    set?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    disconnect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    delete?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    connect?: AddressWhereUniqueInput | AddressWhereUniqueInput[]
    update?: AddressUpdateWithWhereUniqueWithoutCustomerInput | AddressUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: AddressUpdateManyWithWhereWithoutCustomerInput | AddressUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: AddressScalarWhereInput | AddressScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutAddressesInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutAddressesInput
    upsert?: CustomerUpsertWithoutAddressesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutAddressesInput, CustomerUpdateWithoutAddressesInput>, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type TenantCreateNestedOneWithoutProductsInput = {
    create?: XOR<TenantCreateWithoutProductsInput, TenantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProductsInput
    connect?: TenantWhereUniqueInput
  }

  export type VariantCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type VariantUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TenantUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<TenantCreateWithoutProductsInput, TenantUncheckedCreateWithoutProductsInput>
    connectOrCreate?: TenantCreateOrConnectWithoutProductsInput
    upsert?: TenantUpsertWithoutProductsInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutProductsInput, TenantUpdateWithoutProductsInput>, TenantUncheckedUpdateWithoutProductsInput>
  }

  export type VariantUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type VariantUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput> | VariantCreateWithoutProductInput[] | VariantUncheckedCreateWithoutProductInput[]
    connectOrCreate?: VariantCreateOrConnectWithoutProductInput | VariantCreateOrConnectWithoutProductInput[]
    upsert?: VariantUpsertWithWhereUniqueWithoutProductInput | VariantUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: VariantCreateManyProductInputEnvelope
    set?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    disconnect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    delete?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    connect?: VariantWhereUniqueInput | VariantWhereUniqueInput[]
    update?: VariantUpdateWithWhereUniqueWithoutProductInput | VariantUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: VariantUpdateManyWithWhereWithoutProductInput | VariantUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: VariantScalarWhereInput | VariantScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutVariantsInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    connect?: ProductWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateOneRequiredWithoutVariantsNestedInput = {
    create?: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutVariantsInput
    upsert?: ProductUpsertWithoutVariantsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutVariantsInput, ProductUpdateWithoutVariantsInput>, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type TenantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOrdersInput
    connect?: TenantWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type LineItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<LineItemCreateWithoutOrderInput, LineItemUncheckedCreateWithoutOrderInput> | LineItemCreateWithoutOrderInput[] | LineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LineItemCreateOrConnectWithoutOrderInput | LineItemCreateOrConnectWithoutOrderInput[]
    createMany?: LineItemCreateManyOrderInputEnvelope
    connect?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
  }

  export type ShippingLineCreateNestedManyWithoutOrderInput = {
    create?: XOR<ShippingLineCreateWithoutOrderInput, ShippingLineUncheckedCreateWithoutOrderInput> | ShippingLineCreateWithoutOrderInput[] | ShippingLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingLineCreateOrConnectWithoutOrderInput | ShippingLineCreateOrConnectWithoutOrderInput[]
    createMany?: ShippingLineCreateManyOrderInputEnvelope
    connect?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
  }

  export type OrderAddressCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderAddressCreateWithoutOrderInput, OrderAddressUncheckedCreateWithoutOrderInput> | OrderAddressCreateWithoutOrderInput[] | OrderAddressUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderAddressCreateOrConnectWithoutOrderInput | OrderAddressCreateOrConnectWithoutOrderInput[]
    createMany?: OrderAddressCreateManyOrderInputEnvelope
    connect?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
  }

  export type LineItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<LineItemCreateWithoutOrderInput, LineItemUncheckedCreateWithoutOrderInput> | LineItemCreateWithoutOrderInput[] | LineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LineItemCreateOrConnectWithoutOrderInput | LineItemCreateOrConnectWithoutOrderInput[]
    createMany?: LineItemCreateManyOrderInputEnvelope
    connect?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
  }

  export type ShippingLineUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ShippingLineCreateWithoutOrderInput, ShippingLineUncheckedCreateWithoutOrderInput> | ShippingLineCreateWithoutOrderInput[] | ShippingLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingLineCreateOrConnectWithoutOrderInput | ShippingLineCreateOrConnectWithoutOrderInput[]
    createMany?: ShippingLineCreateManyOrderInputEnvelope
    connect?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
  }

  export type OrderAddressUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderAddressCreateWithoutOrderInput, OrderAddressUncheckedCreateWithoutOrderInput> | OrderAddressCreateWithoutOrderInput[] | OrderAddressUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderAddressCreateOrConnectWithoutOrderInput | OrderAddressCreateOrConnectWithoutOrderInput[]
    createMany?: OrderAddressCreateManyOrderInputEnvelope
    connect?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
  }

  export type TenantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: TenantCreateOrConnectWithoutOrdersInput
    upsert?: TenantUpsertWithoutOrdersInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutOrdersInput, TenantUpdateWithoutOrdersInput>, TenantUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type LineItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LineItemCreateWithoutOrderInput, LineItemUncheckedCreateWithoutOrderInput> | LineItemCreateWithoutOrderInput[] | LineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LineItemCreateOrConnectWithoutOrderInput | LineItemCreateOrConnectWithoutOrderInput[]
    upsert?: LineItemUpsertWithWhereUniqueWithoutOrderInput | LineItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LineItemCreateManyOrderInputEnvelope
    set?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    disconnect?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    delete?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    connect?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    update?: LineItemUpdateWithWhereUniqueWithoutOrderInput | LineItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LineItemUpdateManyWithWhereWithoutOrderInput | LineItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LineItemScalarWhereInput | LineItemScalarWhereInput[]
  }

  export type ShippingLineUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ShippingLineCreateWithoutOrderInput, ShippingLineUncheckedCreateWithoutOrderInput> | ShippingLineCreateWithoutOrderInput[] | ShippingLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingLineCreateOrConnectWithoutOrderInput | ShippingLineCreateOrConnectWithoutOrderInput[]
    upsert?: ShippingLineUpsertWithWhereUniqueWithoutOrderInput | ShippingLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ShippingLineCreateManyOrderInputEnvelope
    set?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    disconnect?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    delete?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    connect?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    update?: ShippingLineUpdateWithWhereUniqueWithoutOrderInput | ShippingLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ShippingLineUpdateManyWithWhereWithoutOrderInput | ShippingLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ShippingLineScalarWhereInput | ShippingLineScalarWhereInput[]
  }

  export type OrderAddressUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderAddressCreateWithoutOrderInput, OrderAddressUncheckedCreateWithoutOrderInput> | OrderAddressCreateWithoutOrderInput[] | OrderAddressUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderAddressCreateOrConnectWithoutOrderInput | OrderAddressCreateOrConnectWithoutOrderInput[]
    upsert?: OrderAddressUpsertWithWhereUniqueWithoutOrderInput | OrderAddressUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderAddressCreateManyOrderInputEnvelope
    set?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    disconnect?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    delete?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    connect?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    update?: OrderAddressUpdateWithWhereUniqueWithoutOrderInput | OrderAddressUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderAddressUpdateManyWithWhereWithoutOrderInput | OrderAddressUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderAddressScalarWhereInput | OrderAddressScalarWhereInput[]
  }

  export type LineItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<LineItemCreateWithoutOrderInput, LineItemUncheckedCreateWithoutOrderInput> | LineItemCreateWithoutOrderInput[] | LineItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: LineItemCreateOrConnectWithoutOrderInput | LineItemCreateOrConnectWithoutOrderInput[]
    upsert?: LineItemUpsertWithWhereUniqueWithoutOrderInput | LineItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: LineItemCreateManyOrderInputEnvelope
    set?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    disconnect?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    delete?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    connect?: LineItemWhereUniqueInput | LineItemWhereUniqueInput[]
    update?: LineItemUpdateWithWhereUniqueWithoutOrderInput | LineItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: LineItemUpdateManyWithWhereWithoutOrderInput | LineItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: LineItemScalarWhereInput | LineItemScalarWhereInput[]
  }

  export type ShippingLineUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ShippingLineCreateWithoutOrderInput, ShippingLineUncheckedCreateWithoutOrderInput> | ShippingLineCreateWithoutOrderInput[] | ShippingLineUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ShippingLineCreateOrConnectWithoutOrderInput | ShippingLineCreateOrConnectWithoutOrderInput[]
    upsert?: ShippingLineUpsertWithWhereUniqueWithoutOrderInput | ShippingLineUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ShippingLineCreateManyOrderInputEnvelope
    set?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    disconnect?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    delete?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    connect?: ShippingLineWhereUniqueInput | ShippingLineWhereUniqueInput[]
    update?: ShippingLineUpdateWithWhereUniqueWithoutOrderInput | ShippingLineUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ShippingLineUpdateManyWithWhereWithoutOrderInput | ShippingLineUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ShippingLineScalarWhereInput | ShippingLineScalarWhereInput[]
  }

  export type OrderAddressUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderAddressCreateWithoutOrderInput, OrderAddressUncheckedCreateWithoutOrderInput> | OrderAddressCreateWithoutOrderInput[] | OrderAddressUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderAddressCreateOrConnectWithoutOrderInput | OrderAddressCreateOrConnectWithoutOrderInput[]
    upsert?: OrderAddressUpsertWithWhereUniqueWithoutOrderInput | OrderAddressUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderAddressCreateManyOrderInputEnvelope
    set?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    disconnect?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    delete?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    connect?: OrderAddressWhereUniqueInput | OrderAddressWhereUniqueInput[]
    update?: OrderAddressUpdateWithWhereUniqueWithoutOrderInput | OrderAddressUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderAddressUpdateManyWithWhereWithoutOrderInput | OrderAddressUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderAddressScalarWhereInput | OrderAddressScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutLine_itemsInput = {
    create?: XOR<OrderCreateWithoutLine_itemsInput, OrderUncheckedCreateWithoutLine_itemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutLine_itemsInput
    connect?: OrderWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateOneRequiredWithoutLine_itemsNestedInput = {
    create?: XOR<OrderCreateWithoutLine_itemsInput, OrderUncheckedCreateWithoutLine_itemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutLine_itemsInput
    upsert?: OrderUpsertWithoutLine_itemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutLine_itemsInput, OrderUpdateWithoutLine_itemsInput>, OrderUncheckedUpdateWithoutLine_itemsInput>
  }

  export type OrderCreateNestedOneWithoutShipping_linesInput = {
    create?: XOR<OrderCreateWithoutShipping_linesInput, OrderUncheckedCreateWithoutShipping_linesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutShipping_linesInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutShipping_linesNestedInput = {
    create?: XOR<OrderCreateWithoutShipping_linesInput, OrderUncheckedCreateWithoutShipping_linesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutShipping_linesInput
    upsert?: OrderUpsertWithoutShipping_linesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutShipping_linesInput, OrderUpdateWithoutShipping_linesInput>, OrderUncheckedUpdateWithoutShipping_linesInput>
  }

  export type OrderCreateNestedOneWithoutAddressesInput = {
    create?: XOR<OrderCreateWithoutAddressesInput, OrderUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAddressesInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutAddressesNestedInput = {
    create?: XOR<OrderCreateWithoutAddressesInput, OrderUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: OrderCreateOrConnectWithoutAddressesInput
    upsert?: OrderUpsertWithoutAddressesInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutAddressesInput, OrderUpdateWithoutAddressesInput>, OrderUncheckedUpdateWithoutAddressesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type UserCreateWithoutTenantInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    customers?: CustomerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    customers?: CustomerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserCreateManyTenantInputEnvelope = {
    data: UserCreateManyTenantInput | UserCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutTenantInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    user?: UserCreateNestedOneWithoutCustomersInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTenantInput = {
    id?: string
    userId?: string | null
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTenantInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTenantInput, CustomerUncheckedCreateWithoutTenantInput>
  }

  export type CustomerCreateManyTenantInputEnvelope = {
    data: CustomerCreateManyTenantInput | CustomerCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutTenantInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
    variants?: VariantCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTenantInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
    variants?: VariantUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTenantInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTenantInput, ProductUncheckedCreateWithoutTenantInput>
  }

  export type ProductCreateManyTenantInputEnvelope = {
    data: ProductCreateManyTenantInput | ProductCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutTenantInput = {
    id?: string
    shopify_id: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    line_items?: LineItemCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutTenantInput = {
    id?: string
    shopify_id: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    line_items?: LineItemUncheckedCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineUncheckedCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutTenantInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput>
  }

  export type OrderCreateManyTenantInputEnvelope = {
    data: OrderCreateManyTenantInput | OrderCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
    create: XOR<UserCreateWithoutTenantInput, UserUncheckedCreateWithoutTenantInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTenantInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTenantInput, UserUncheckedUpdateWithoutTenantInput>
  }

  export type UserUpdateManyWithWhereWithoutTenantInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTenantInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    tenantId?: StringFilter<"User"> | string
  }

  export type CustomerUpsertWithWhereUniqueWithoutTenantInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutTenantInput, CustomerUncheckedUpdateWithoutTenantInput>
    create: XOR<CustomerCreateWithoutTenantInput, CustomerUncheckedCreateWithoutTenantInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutTenantInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutTenantInput, CustomerUncheckedUpdateWithoutTenantInput>
  }

  export type CustomerUpdateManyWithWhereWithoutTenantInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutTenantInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    id?: StringFilter<"Customer"> | string
    tenantId?: StringFilter<"Customer"> | string
    userId?: StringNullableFilter<"Customer"> | string | null
    created_at?: DateTimeFilter<"Customer"> | Date | string
    updated_at?: DateTimeFilter<"Customer"> | Date | string
    first_name?: StringNullableFilter<"Customer"> | string | null
    last_name?: StringNullableFilter<"Customer"> | string | null
    email?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    state?: StringNullableFilter<"Customer"> | string | null
    note?: StringNullableFilter<"Customer"> | string | null
    verified_email?: BoolFilter<"Customer"> | boolean
    tax_exempt?: BoolFilter<"Customer"> | boolean
    currency?: StringNullableFilter<"Customer"> | string | null
    admin_graphql_api_id?: StringNullableFilter<"Customer"> | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutTenantInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutTenantInput, ProductUncheckedUpdateWithoutTenantInput>
    create: XOR<ProductCreateWithoutTenantInput, ProductUncheckedCreateWithoutTenantInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutTenantInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutTenantInput, ProductUncheckedUpdateWithoutTenantInput>
  }

  export type ProductUpdateManyWithWhereWithoutTenantInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutTenantInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    tenantId?: StringFilter<"Product"> | string
    admin_graphql_api_id?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    body_html?: StringNullableFilter<"Product"> | string | null
    vendor?: StringNullableFilter<"Product"> | string | null
    product_type?: StringNullableFilter<"Product"> | string | null
    handle?: StringNullableFilter<"Product"> | string | null
    status?: StringNullableFilter<"Product"> | string | null
    tags?: StringNullableFilter<"Product"> | string | null
    published_scope?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    published_at?: DateTimeNullableFilter<"Product"> | Date | string | null
    has_variants_that_requires_components?: BoolFilter<"Product"> | boolean
    category?: StringNullableFilter<"Product"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutTenantInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutTenantInput, OrderUncheckedUpdateWithoutTenantInput>
    create: XOR<OrderCreateWithoutTenantInput, OrderUncheckedCreateWithoutTenantInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutTenantInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutTenantInput, OrderUncheckedUpdateWithoutTenantInput>
  }

  export type OrderUpdateManyWithWhereWithoutTenantInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutTenantInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    shopify_id?: StringFilter<"Order"> | string
    tenantId?: StringFilter<"Order"> | string
    customer_id?: StringNullableFilter<"Order"> | string | null
    admin_graphql_api_id?: StringNullableFilter<"Order"> | string | null
    email?: StringNullableFilter<"Order"> | string | null
    name?: StringNullableFilter<"Order"> | string | null
    note?: StringNullableFilter<"Order"> | string | null
    currency?: StringNullableFilter<"Order"> | string | null
    financial_status?: StringNullableFilter<"Order"> | string | null
    fulfillment_status?: StringNullableFilter<"Order"> | string | null
    order_number?: IntNullableFilter<"Order"> | number | null
    order_status_url?: StringNullableFilter<"Order"> | string | null
    processed_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"Order"> | Date | string | null
    created_at?: DateTimeFilter<"Order"> | Date | string
    updated_at?: DateTimeFilter<"Order"> | Date | string
    tags?: StringNullableFilter<"Order"> | string | null
    total_price?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_tax?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    total_discounts?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    source_name?: StringNullableFilter<"Order"> | string | null
    confirmed?: BoolFilter<"Order"> | boolean
    buyer_accepts_marketing?: BoolFilter<"Order"> | boolean
    test?: BoolFilter<"Order"> | boolean
  }

  export type TenantCreateWithoutUsersInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    customers?: CustomerCreateNestedManyWithoutTenantInput
    products?: ProductCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    customers?: CustomerUncheckedCreateNestedManyWithoutTenantInput
    products?: ProductUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUsersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
  }

  export type CustomerCreateWithoutUserInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    tenant: TenantCreateNestedOneWithoutCustomersInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string
    tenantId: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutUserInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerCreateManyUserInputEnvelope = {
    data: CustomerCreateManyUserInput | CustomerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutUsersInput = {
    update: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
    create: XOR<TenantCreateWithoutUsersInput, TenantUncheckedCreateWithoutUsersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUsersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUsersInput, TenantUncheckedUpdateWithoutUsersInput>
  }

  export type TenantUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUpdateManyWithoutTenantNestedInput
    products?: ProductUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customers?: CustomerUncheckedUpdateManyWithoutTenantNestedInput
    products?: ProductUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CustomerUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
    create: XOR<CustomerCreateWithoutUserInput, CustomerUncheckedCreateWithoutUserInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutUserInput, CustomerUncheckedUpdateWithoutUserInput>
  }

  export type CustomerUpdateManyWithWhereWithoutUserInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutUserInput>
  }

  export type TenantCreateWithoutCustomersInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    products?: ProductCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutCustomersInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    products?: ProductUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutCustomersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutCustomersInput, TenantUncheckedCreateWithoutCustomersInput>
  }

  export type UserCreateWithoutCustomersInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    tenant: TenantCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCustomersInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    tenantId: string
  }

  export type UserCreateOrConnectWithoutCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type AddressCreateWithoutCustomerInput = {
    id?: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    is_default: boolean
  }

  export type AddressUncheckedCreateWithoutCustomerInput = {
    id?: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    is_default: boolean
  }

  export type AddressCreateOrConnectWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressCreateManyCustomerInputEnvelope = {
    data: AddressCreateManyCustomerInput | AddressCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCustomerInput = {
    id?: string
    shopify_id: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    tenant: TenantCreateNestedOneWithoutOrdersInput
    line_items?: LineItemCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    shopify_id: string
    tenantId: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    line_items?: LineItemUncheckedCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineUncheckedCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutCustomersInput = {
    update: XOR<TenantUpdateWithoutCustomersInput, TenantUncheckedUpdateWithoutCustomersInput>
    create: XOR<TenantCreateWithoutCustomersInput, TenantUncheckedCreateWithoutCustomersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutCustomersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutCustomersInput, TenantUncheckedUpdateWithoutCustomersInput>
  }

  export type TenantUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    products?: ProductUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    products?: ProductUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserUpsertWithoutCustomersInput = {
    update: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type UserUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tenant?: TenantUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUpsertWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
    create: XOR<AddressCreateWithoutCustomerInput, AddressUncheckedCreateWithoutCustomerInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutCustomerInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutCustomerInput, AddressUncheckedUpdateWithoutCustomerInput>
  }

  export type AddressUpdateManyWithWhereWithoutCustomerInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutCustomerInput>
  }

  export type AddressScalarWhereInput = {
    AND?: AddressScalarWhereInput | AddressScalarWhereInput[]
    OR?: AddressScalarWhereInput[]
    NOT?: AddressScalarWhereInput | AddressScalarWhereInput[]
    id?: StringFilter<"Address"> | string
    customer_id?: StringFilter<"Address"> | string
    first_name?: StringNullableFilter<"Address"> | string | null
    last_name?: StringNullableFilter<"Address"> | string | null
    company?: StringNullableFilter<"Address"> | string | null
    address1?: StringNullableFilter<"Address"> | string | null
    address2?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    province?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    zip?: StringNullableFilter<"Address"> | string | null
    phone?: StringNullableFilter<"Address"> | string | null
    name?: StringNullableFilter<"Address"> | string | null
    province_code?: StringNullableFilter<"Address"> | string | null
    country_code?: StringNullableFilter<"Address"> | string | null
    country_name?: StringNullableFilter<"Address"> | string | null
    is_default?: BoolFilter<"Address"> | boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutAddressesInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    tenant: TenantCreateNestedOneWithoutCustomersInput
    user?: UserCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutAddressesInput = {
    id?: string
    tenantId: string
    userId?: string | null
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutAddressesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
  }

  export type CustomerUpsertWithoutAddressesInput = {
    update: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
    create: XOR<CustomerCreateWithoutAddressesInput, CustomerUncheckedCreateWithoutAddressesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutAddressesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutAddressesInput, CustomerUncheckedUpdateWithoutAddressesInput>
  }

  export type CustomerUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutCustomersNestedInput
    user?: UserUpdateOneWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TenantCreateWithoutProductsInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    customers?: CustomerCreateNestedManyWithoutTenantInput
    orders?: OrderCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    customers?: CustomerUncheckedCreateNestedManyWithoutTenantInput
    orders?: OrderUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutProductsInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutProductsInput, TenantUncheckedCreateWithoutProductsInput>
  }

  export type VariantCreateWithoutProductInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    position?: number | null
    sku?: string | null
    taxable: boolean
    option1?: string | null
    option2?: string | null
    option3?: string | null
    inventory_policy?: string | null
    inventory_quantity?: number | null
    old_inventory_quantity?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VariantUncheckedCreateWithoutProductInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    position?: number | null
    sku?: string | null
    taxable: boolean
    option1?: string | null
    option2?: string | null
    option3?: string | null
    inventory_policy?: string | null
    inventory_quantity?: number | null
    old_inventory_quantity?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VariantCreateOrConnectWithoutProductInput = {
    where: VariantWhereUniqueInput
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantCreateManyProductInputEnvelope = {
    data: VariantCreateManyProductInput | VariantCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutProductsInput = {
    update: XOR<TenantUpdateWithoutProductsInput, TenantUncheckedUpdateWithoutProductsInput>
    create: XOR<TenantCreateWithoutProductsInput, TenantUncheckedCreateWithoutProductsInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutProductsInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutProductsInput, TenantUncheckedUpdateWithoutProductsInput>
  }

  export type TenantUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    customers?: CustomerUpdateManyWithoutTenantNestedInput
    orders?: OrderUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutTenantNestedInput
    orders?: OrderUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type VariantUpsertWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    update: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
    create: XOR<VariantCreateWithoutProductInput, VariantUncheckedCreateWithoutProductInput>
  }

  export type VariantUpdateWithWhereUniqueWithoutProductInput = {
    where: VariantWhereUniqueInput
    data: XOR<VariantUpdateWithoutProductInput, VariantUncheckedUpdateWithoutProductInput>
  }

  export type VariantUpdateManyWithWhereWithoutProductInput = {
    where: VariantScalarWhereInput
    data: XOR<VariantUpdateManyMutationInput, VariantUncheckedUpdateManyWithoutProductInput>
  }

  export type VariantScalarWhereInput = {
    AND?: VariantScalarWhereInput | VariantScalarWhereInput[]
    OR?: VariantScalarWhereInput[]
    NOT?: VariantScalarWhereInput | VariantScalarWhereInput[]
    id?: StringFilter<"Variant"> | string
    admin_graphql_api_id?: StringFilter<"Variant"> | string
    product_id?: StringFilter<"Variant"> | string
    title?: StringFilter<"Variant"> | string
    price?: DecimalFilter<"Variant"> | Decimal | DecimalJsLike | number | string
    compare_at_price?: DecimalNullableFilter<"Variant"> | Decimal | DecimalJsLike | number | string | null
    position?: IntNullableFilter<"Variant"> | number | null
    sku?: StringNullableFilter<"Variant"> | string | null
    taxable?: BoolFilter<"Variant"> | boolean
    option1?: StringNullableFilter<"Variant"> | string | null
    option2?: StringNullableFilter<"Variant"> | string | null
    option3?: StringNullableFilter<"Variant"> | string | null
    inventory_policy?: StringNullableFilter<"Variant"> | string | null
    inventory_quantity?: IntNullableFilter<"Variant"> | number | null
    old_inventory_quantity?: IntNullableFilter<"Variant"> | number | null
    created_at?: DateTimeNullableFilter<"Variant"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Variant"> | Date | string | null
  }

  export type ProductCreateWithoutVariantsInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
    tenant: TenantCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutVariantsInput = {
    id?: string
    tenantId: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
  }

  export type ProductCreateOrConnectWithoutVariantsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
  }

  export type ProductUpsertWithoutVariantsInput = {
    update: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
    create: XOR<ProductCreateWithoutVariantsInput, ProductUncheckedCreateWithoutVariantsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutVariantsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutVariantsInput, ProductUncheckedUpdateWithoutVariantsInput>
  }

  export type ProductUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutVariantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TenantCreateWithoutOrdersInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserCreateNestedManyWithoutTenantInput
    customers?: CustomerCreateNestedManyWithoutTenantInput
    products?: ProductCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    apiKey?: string | null
    createdAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutTenantInput
    customers?: CustomerUncheckedCreateNestedManyWithoutTenantInput
    products?: ProductUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutOrdersInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
  }

  export type CustomerCreateWithoutOrdersInput = {
    id?: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    tenant: TenantCreateNestedOneWithoutCustomersInput
    user?: UserCreateNestedOneWithoutCustomersInput
    addresses?: AddressCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: string
    tenantId: string
    userId?: string | null
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
    addresses?: AddressUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type LineItemCreateWithoutOrderInput = {
    id?: string
    admin_graphql_api_id?: string | null
    title?: string | null
    name?: string | null
    sku?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    grams?: number | null
    product_id?: string | null
    taxable: boolean
    fulfillment_service?: string | null
    gift_card: boolean
  }

  export type LineItemUncheckedCreateWithoutOrderInput = {
    id?: string
    admin_graphql_api_id?: string | null
    title?: string | null
    name?: string | null
    sku?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    grams?: number | null
    product_id?: string | null
    taxable: boolean
    fulfillment_service?: string | null
    gift_card: boolean
  }

  export type LineItemCreateOrConnectWithoutOrderInput = {
    where: LineItemWhereUniqueInput
    create: XOR<LineItemCreateWithoutOrderInput, LineItemUncheckedCreateWithoutOrderInput>
  }

  export type LineItemCreateManyOrderInputEnvelope = {
    data: LineItemCreateManyOrderInput | LineItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ShippingLineCreateWithoutOrderInput = {
    id?: string
    title?: string | null
    price: Decimal | DecimalJsLike | number | string
    source?: string | null
  }

  export type ShippingLineUncheckedCreateWithoutOrderInput = {
    id?: string
    title?: string | null
    price: Decimal | DecimalJsLike | number | string
    source?: string | null
  }

  export type ShippingLineCreateOrConnectWithoutOrderInput = {
    where: ShippingLineWhereUniqueInput
    create: XOR<ShippingLineCreateWithoutOrderInput, ShippingLineUncheckedCreateWithoutOrderInput>
  }

  export type ShippingLineCreateManyOrderInputEnvelope = {
    data: ShippingLineCreateManyOrderInput | ShippingLineCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type OrderAddressCreateWithoutOrderInput = {
    id?: string
    type: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
  }

  export type OrderAddressUncheckedCreateWithoutOrderInput = {
    id?: string
    type: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
  }

  export type OrderAddressCreateOrConnectWithoutOrderInput = {
    where: OrderAddressWhereUniqueInput
    create: XOR<OrderAddressCreateWithoutOrderInput, OrderAddressUncheckedCreateWithoutOrderInput>
  }

  export type OrderAddressCreateManyOrderInputEnvelope = {
    data: OrderAddressCreateManyOrderInput | OrderAddressCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type TenantUpsertWithoutOrdersInput = {
    update: XOR<TenantUpdateWithoutOrdersInput, TenantUncheckedUpdateWithoutOrdersInput>
    create: XOR<TenantCreateWithoutOrdersInput, TenantUncheckedCreateWithoutOrdersInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutOrdersInput, TenantUncheckedUpdateWithoutOrdersInput>
  }

  export type TenantUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutTenantNestedInput
    customers?: CustomerUpdateManyWithoutTenantNestedInput
    products?: ProductUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutTenantNestedInput
    customers?: CustomerUncheckedUpdateManyWithoutTenantNestedInput
    products?: ProductUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutCustomersNestedInput
    user?: UserUpdateOneWithoutCustomersNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type LineItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: LineItemWhereUniqueInput
    update: XOR<LineItemUpdateWithoutOrderInput, LineItemUncheckedUpdateWithoutOrderInput>
    create: XOR<LineItemCreateWithoutOrderInput, LineItemUncheckedCreateWithoutOrderInput>
  }

  export type LineItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: LineItemWhereUniqueInput
    data: XOR<LineItemUpdateWithoutOrderInput, LineItemUncheckedUpdateWithoutOrderInput>
  }

  export type LineItemUpdateManyWithWhereWithoutOrderInput = {
    where: LineItemScalarWhereInput
    data: XOR<LineItemUpdateManyMutationInput, LineItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type LineItemScalarWhereInput = {
    AND?: LineItemScalarWhereInput | LineItemScalarWhereInput[]
    OR?: LineItemScalarWhereInput[]
    NOT?: LineItemScalarWhereInput | LineItemScalarWhereInput[]
    id?: StringFilter<"LineItem"> | string
    order_id?: StringFilter<"LineItem"> | string
    admin_graphql_api_id?: StringNullableFilter<"LineItem"> | string | null
    title?: StringNullableFilter<"LineItem"> | string | null
    name?: StringNullableFilter<"LineItem"> | string | null
    sku?: StringNullableFilter<"LineItem"> | string | null
    quantity?: IntFilter<"LineItem"> | number
    price?: DecimalFilter<"LineItem"> | Decimal | DecimalJsLike | number | string
    grams?: IntNullableFilter<"LineItem"> | number | null
    product_id?: StringNullableFilter<"LineItem"> | string | null
    taxable?: BoolFilter<"LineItem"> | boolean
    fulfillment_service?: StringNullableFilter<"LineItem"> | string | null
    gift_card?: BoolFilter<"LineItem"> | boolean
  }

  export type ShippingLineUpsertWithWhereUniqueWithoutOrderInput = {
    where: ShippingLineWhereUniqueInput
    update: XOR<ShippingLineUpdateWithoutOrderInput, ShippingLineUncheckedUpdateWithoutOrderInput>
    create: XOR<ShippingLineCreateWithoutOrderInput, ShippingLineUncheckedCreateWithoutOrderInput>
  }

  export type ShippingLineUpdateWithWhereUniqueWithoutOrderInput = {
    where: ShippingLineWhereUniqueInput
    data: XOR<ShippingLineUpdateWithoutOrderInput, ShippingLineUncheckedUpdateWithoutOrderInput>
  }

  export type ShippingLineUpdateManyWithWhereWithoutOrderInput = {
    where: ShippingLineScalarWhereInput
    data: XOR<ShippingLineUpdateManyMutationInput, ShippingLineUncheckedUpdateManyWithoutOrderInput>
  }

  export type ShippingLineScalarWhereInput = {
    AND?: ShippingLineScalarWhereInput | ShippingLineScalarWhereInput[]
    OR?: ShippingLineScalarWhereInput[]
    NOT?: ShippingLineScalarWhereInput | ShippingLineScalarWhereInput[]
    id?: StringFilter<"ShippingLine"> | string
    order_id?: StringFilter<"ShippingLine"> | string
    title?: StringNullableFilter<"ShippingLine"> | string | null
    price?: DecimalFilter<"ShippingLine"> | Decimal | DecimalJsLike | number | string
    source?: StringNullableFilter<"ShippingLine"> | string | null
  }

  export type OrderAddressUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderAddressWhereUniqueInput
    update: XOR<OrderAddressUpdateWithoutOrderInput, OrderAddressUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderAddressCreateWithoutOrderInput, OrderAddressUncheckedCreateWithoutOrderInput>
  }

  export type OrderAddressUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderAddressWhereUniqueInput
    data: XOR<OrderAddressUpdateWithoutOrderInput, OrderAddressUncheckedUpdateWithoutOrderInput>
  }

  export type OrderAddressUpdateManyWithWhereWithoutOrderInput = {
    where: OrderAddressScalarWhereInput
    data: XOR<OrderAddressUpdateManyMutationInput, OrderAddressUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderAddressScalarWhereInput = {
    AND?: OrderAddressScalarWhereInput | OrderAddressScalarWhereInput[]
    OR?: OrderAddressScalarWhereInput[]
    NOT?: OrderAddressScalarWhereInput | OrderAddressScalarWhereInput[]
    id?: StringFilter<"OrderAddress"> | string
    order_id?: StringFilter<"OrderAddress"> | string
    type?: StringFilter<"OrderAddress"> | string
    first_name?: StringNullableFilter<"OrderAddress"> | string | null
    last_name?: StringNullableFilter<"OrderAddress"> | string | null
    company?: StringNullableFilter<"OrderAddress"> | string | null
    address1?: StringNullableFilter<"OrderAddress"> | string | null
    address2?: StringNullableFilter<"OrderAddress"> | string | null
    city?: StringNullableFilter<"OrderAddress"> | string | null
    province?: StringNullableFilter<"OrderAddress"> | string | null
    country?: StringNullableFilter<"OrderAddress"> | string | null
    zip?: StringNullableFilter<"OrderAddress"> | string | null
    phone?: StringNullableFilter<"OrderAddress"> | string | null
    name?: StringNullableFilter<"OrderAddress"> | string | null
    province_code?: StringNullableFilter<"OrderAddress"> | string | null
    country_code?: StringNullableFilter<"OrderAddress"> | string | null
    country_name?: StringNullableFilter<"OrderAddress"> | string | null
  }

  export type OrderCreateWithoutLine_itemsInput = {
    id?: string
    shopify_id: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    tenant: TenantCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    shipping_lines?: ShippingLineCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutLine_itemsInput = {
    id?: string
    shopify_id: string
    tenantId: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    shipping_lines?: ShippingLineUncheckedCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutLine_itemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutLine_itemsInput, OrderUncheckedCreateWithoutLine_itemsInput>
  }

  export type OrderUpsertWithoutLine_itemsInput = {
    update: XOR<OrderUpdateWithoutLine_itemsInput, OrderUncheckedUpdateWithoutLine_itemsInput>
    create: XOR<OrderCreateWithoutLine_itemsInput, OrderUncheckedCreateWithoutLine_itemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutLine_itemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutLine_itemsInput, OrderUncheckedUpdateWithoutLine_itemsInput>
  }

  export type OrderUpdateWithoutLine_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    shipping_lines?: ShippingLineUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutLine_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    shipping_lines?: ShippingLineUncheckedUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutShipping_linesInput = {
    id?: string
    shopify_id: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    tenant: TenantCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    line_items?: LineItemCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShipping_linesInput = {
    id?: string
    shopify_id: string
    tenantId: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    line_items?: LineItemUncheckedCreateNestedManyWithoutOrderInput
    addresses?: OrderAddressUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShipping_linesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShipping_linesInput, OrderUncheckedCreateWithoutShipping_linesInput>
  }

  export type OrderUpsertWithoutShipping_linesInput = {
    update: XOR<OrderUpdateWithoutShipping_linesInput, OrderUncheckedUpdateWithoutShipping_linesInput>
    create: XOR<OrderCreateWithoutShipping_linesInput, OrderUncheckedCreateWithoutShipping_linesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutShipping_linesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutShipping_linesInput, OrderUncheckedUpdateWithoutShipping_linesInput>
  }

  export type OrderUpdateWithoutShipping_linesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    line_items?: LineItemUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShipping_linesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    line_items?: LineItemUncheckedUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutAddressesInput = {
    id?: string
    shopify_id: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    tenant: TenantCreateNestedOneWithoutOrdersInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    line_items?: LineItemCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAddressesInput = {
    id?: string
    shopify_id: string
    tenantId: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
    line_items?: LineItemUncheckedCreateNestedManyWithoutOrderInput
    shipping_lines?: ShippingLineUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAddressesInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAddressesInput, OrderUncheckedCreateWithoutAddressesInput>
  }

  export type OrderUpsertWithoutAddressesInput = {
    update: XOR<OrderUpdateWithoutAddressesInput, OrderUncheckedUpdateWithoutAddressesInput>
    create: XOR<OrderCreateWithoutAddressesInput, OrderUncheckedCreateWithoutAddressesInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutAddressesInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutAddressesInput, OrderUncheckedUpdateWithoutAddressesInput>
  }

  export type OrderUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    line_items?: LineItemUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAddressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    line_items?: LineItemUncheckedUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type UserCreateManyTenantInput = {
    id?: string
    email: string
    name?: string | null
    password: string
  }

  export type CustomerCreateManyTenantInput = {
    id?: string
    userId?: string | null
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
  }

  export type ProductCreateManyTenantInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    body_html?: string | null
    vendor?: string | null
    product_type?: string | null
    handle?: string | null
    status?: string | null
    tags?: string | null
    published_scope?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    published_at?: Date | string | null
    has_variants_that_requires_components: boolean
    category?: string | null
  }

  export type OrderCreateManyTenantInput = {
    id?: string
    shopify_id: string
    customer_id?: string | null
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
  }

  export type UserUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    customers?: CustomerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutCustomersNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: VariantUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
    variants?: VariantUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body_html?: NullableStringFieldUpdateOperationsInput | string | null
    vendor?: NullableStringFieldUpdateOperationsInput | string | null
    product_type?: NullableStringFieldUpdateOperationsInput | string | null
    handle?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    published_scope?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    published_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    has_variants_that_requires_components?: BoolFieldUpdateOperationsInput | boolean
    category?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    line_items?: LineItemUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    line_items?: LineItemUncheckedUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUncheckedUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CustomerCreateManyUserInput = {
    id?: string
    tenantId: string
    created_at: Date | string
    updated_at: Date | string
    first_name?: string | null
    last_name?: string | null
    email: string
    phone?: string | null
    state?: string | null
    note?: string | null
    verified_email: boolean
    tax_exempt: boolean
    currency?: string | null
    admin_graphql_api_id?: string | null
  }

  export type CustomerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    tenant?: TenantUpdateOneRequiredWithoutCustomersNestedInput
    addresses?: AddressUpdateManyWithoutCustomerNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    addresses?: AddressUncheckedUpdateManyWithoutCustomerNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    verified_email?: BoolFieldUpdateOperationsInput | boolean
    tax_exempt?: BoolFieldUpdateOperationsInput | boolean
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateManyCustomerInput = {
    id?: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
    is_default: boolean
  }

  export type OrderCreateManyCustomerInput = {
    id?: string
    shopify_id: string
    tenantId: string
    admin_graphql_api_id?: string | null
    email?: string | null
    name?: string | null
    note?: string | null
    currency?: string | null
    financial_status?: string | null
    fulfillment_status?: string | null
    order_number?: number | null
    order_status_url?: string | null
    processed_at?: Date | string | null
    cancelled_at?: Date | string | null
    created_at: Date | string
    updated_at: Date | string
    tags?: string | null
    total_price?: Decimal | DecimalJsLike | number | string | null
    subtotal_price?: Decimal | DecimalJsLike | number | string | null
    total_tax?: Decimal | DecimalJsLike | number | string | null
    total_discounts?: Decimal | DecimalJsLike | number | string | null
    source_name?: string | null
    confirmed: boolean
    buyer_accepts_marketing: boolean
    test: boolean
  }

  export type AddressUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_default?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    tenant?: TenantUpdateOneRequiredWithoutOrdersNestedInput
    line_items?: LineItemUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
    line_items?: LineItemUncheckedUpdateManyWithoutOrderNestedInput
    shipping_lines?: ShippingLineUncheckedUpdateManyWithoutOrderNestedInput
    addresses?: OrderAddressUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    shopify_id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    financial_status?: NullableStringFieldUpdateOperationsInput | string | null
    fulfillment_status?: NullableStringFieldUpdateOperationsInput | string | null
    order_number?: NullableIntFieldUpdateOperationsInput | number | null
    order_status_url?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    total_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    subtotal_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_tax?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    total_discounts?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    source_name?: NullableStringFieldUpdateOperationsInput | string | null
    confirmed?: BoolFieldUpdateOperationsInput | boolean
    buyer_accepts_marketing?: BoolFieldUpdateOperationsInput | boolean
    test?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VariantCreateManyProductInput = {
    id?: string
    admin_graphql_api_id: string
    title: string
    price: Decimal | DecimalJsLike | number | string
    compare_at_price?: Decimal | DecimalJsLike | number | string | null
    position?: number | null
    sku?: string | null
    taxable: boolean
    option1?: string | null
    option2?: string | null
    option3?: string | null
    inventory_policy?: string | null
    inventory_quantity?: number | null
    old_inventory_quantity?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type VariantUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariantUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VariantUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    compare_at_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    position?: NullableIntFieldUpdateOperationsInput | number | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    option1?: NullableStringFieldUpdateOperationsInput | string | null
    option2?: NullableStringFieldUpdateOperationsInput | string | null
    option3?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_policy?: NullableStringFieldUpdateOperationsInput | string | null
    inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    old_inventory_quantity?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LineItemCreateManyOrderInput = {
    id?: string
    admin_graphql_api_id?: string | null
    title?: string | null
    name?: string | null
    sku?: string | null
    quantity: number
    price: Decimal | DecimalJsLike | number | string
    grams?: number | null
    product_id?: string | null
    taxable: boolean
    fulfillment_service?: string | null
    gift_card: boolean
  }

  export type ShippingLineCreateManyOrderInput = {
    id?: string
    title?: string | null
    price: Decimal | DecimalJsLike | number | string
    source?: string | null
  }

  export type OrderAddressCreateManyOrderInput = {
    id?: string
    type: string
    first_name?: string | null
    last_name?: string | null
    company?: string | null
    address1?: string | null
    address2?: string | null
    city?: string | null
    province?: string | null
    country?: string | null
    zip?: string | null
    phone?: string | null
    name?: string | null
    province_code?: string | null
    country_code?: string | null
    country_name?: string | null
  }

  export type LineItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LineItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    admin_graphql_api_id?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    grams?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    taxable?: BoolFieldUpdateOperationsInput | boolean
    fulfillment_service?: NullableStringFieldUpdateOperationsInput | string | null
    gift_card?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ShippingLineUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippingLineUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ShippingLineUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    source?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderAddressUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderAddressUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderAddressUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address1?: NullableStringFieldUpdateOperationsInput | string | null
    address2?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    province?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    zip?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    province_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    country_name?: NullableStringFieldUpdateOperationsInput | string | null
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