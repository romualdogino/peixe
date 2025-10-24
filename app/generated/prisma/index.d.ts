
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tanque
 * 
 */
export type Tanque = $Result.DefaultSelection<Prisma.$TanquePayload>
/**
 * Model CicloProducao
 * 
 */
export type CicloProducao = $Result.DefaultSelection<Prisma.$CicloProducaoPayload>
/**
 * Model RegistroDiario
 * 
 */
export type RegistroDiario = $Result.DefaultSelection<Prisma.$RegistroDiarioPayload>
/**
 * Model Biometria
 * 
 */
export type Biometria = $Result.DefaultSelection<Prisma.$BiometriaPayload>
/**
 * Model QualidadeAgua
 * 
 */
export type QualidadeAgua = $Result.DefaultSelection<Prisma.$QualidadeAguaPayload>
/**
 * Model RegistroSaude
 * 
 */
export type RegistroSaude = $Result.DefaultSelection<Prisma.$RegistroSaudePayload>
/**
 * Model ProdutoEstoque
 * 
 */
export type ProdutoEstoque = $Result.DefaultSelection<Prisma.$ProdutoEstoquePayload>
/**
 * Model MovimentacaoTanque
 * 
 */
export type MovimentacaoTanque = $Result.DefaultSelection<Prisma.$MovimentacaoTanquePayload>
/**
 * Model MovimentacaoRacao
 * 
 */
export type MovimentacaoRacao = $Result.DefaultSelection<Prisma.$MovimentacaoRacaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  OPERADOR: 'OPERADOR',
  VETERINARIO: 'VETERINARIO',
  GESTOR: 'GESTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TipoTanque: {
  CIRCULAR: 'CIRCULAR',
  ESCAVADO: 'ESCAVADO',
  RACETRACK: 'RACETRACK',
  QUADRADO: 'QUADRADO'
};

export type TipoTanque = (typeof TipoTanque)[keyof typeof TipoTanque]


export const StatusTanque: {
  ATIVO: 'ATIVO',
  MANUTENCAO: 'MANUTENCAO',
  VAZIO: 'VAZIO',
  INATIVO: 'INATIVO'
};

export type StatusTanque = (typeof StatusTanque)[keyof typeof StatusTanque]


export const Turno: {
  MANHA: 'MANHA',
  TARDE: 'TARDE',
  NOITE: 'NOITE'
};

export type Turno = (typeof Turno)[keyof typeof Turno]


export const MovTanqueTipo: {
  ENTRADA_LOTE: 'ENTRADA_LOTE',
  SAIDA_VENDA: 'SAIDA_VENDA',
  TRANSFERENCIA_SAIDA: 'TRANSFERENCIA_SAIDA',
  TRANSFERENCIA_ENTRADA: 'TRANSFERENCIA_ENTRADA'
};

export type MovTanqueTipo = (typeof MovTanqueTipo)[keyof typeof MovTanqueTipo]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TipoTanque = $Enums.TipoTanque

export const TipoTanque: typeof $Enums.TipoTanque

export type StatusTanque = $Enums.StatusTanque

export const StatusTanque: typeof $Enums.StatusTanque

export type Turno = $Enums.Turno

export const Turno: typeof $Enums.Turno

export type MovTanqueTipo = $Enums.MovTanqueTipo

export const MovTanqueTipo: typeof $Enums.MovTanqueTipo

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tanque`: Exposes CRUD operations for the **Tanque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tanques
    * const tanques = await prisma.tanque.findMany()
    * ```
    */
  get tanque(): Prisma.TanqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cicloProducao`: Exposes CRUD operations for the **CicloProducao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CicloProducaos
    * const cicloProducaos = await prisma.cicloProducao.findMany()
    * ```
    */
  get cicloProducao(): Prisma.CicloProducaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroDiario`: Exposes CRUD operations for the **RegistroDiario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroDiarios
    * const registroDiarios = await prisma.registroDiario.findMany()
    * ```
    */
  get registroDiario(): Prisma.RegistroDiarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.biometria`: Exposes CRUD operations for the **Biometria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Biometrias
    * const biometrias = await prisma.biometria.findMany()
    * ```
    */
  get biometria(): Prisma.BiometriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qualidadeAgua`: Exposes CRUD operations for the **QualidadeAgua** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QualidadeAguas
    * const qualidadeAguas = await prisma.qualidadeAgua.findMany()
    * ```
    */
  get qualidadeAgua(): Prisma.QualidadeAguaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registroSaude`: Exposes CRUD operations for the **RegistroSaude** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegistroSaudes
    * const registroSaudes = await prisma.registroSaude.findMany()
    * ```
    */
  get registroSaude(): Prisma.RegistroSaudeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produtoEstoque`: Exposes CRUD operations for the **ProdutoEstoque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProdutoEstoques
    * const produtoEstoques = await prisma.produtoEstoque.findMany()
    * ```
    */
  get produtoEstoque(): Prisma.ProdutoEstoqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacaoTanque`: Exposes CRUD operations for the **MovimentacaoTanque** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimentacaoTanques
    * const movimentacaoTanques = await prisma.movimentacaoTanque.findMany()
    * ```
    */
  get movimentacaoTanque(): Prisma.MovimentacaoTanqueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movimentacaoRacao`: Exposes CRUD operations for the **MovimentacaoRacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovimentacaoRacaos
    * const movimentacaoRacaos = await prisma.movimentacaoRacao.findMany()
    * ```
    */
  get movimentacaoRacao(): Prisma.MovimentacaoRacaoDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Tanque: 'Tanque',
    CicloProducao: 'CicloProducao',
    RegistroDiario: 'RegistroDiario',
    Biometria: 'Biometria',
    QualidadeAgua: 'QualidadeAgua',
    RegistroSaude: 'RegistroSaude',
    ProdutoEstoque: 'ProdutoEstoque',
    MovimentacaoTanque: 'MovimentacaoTanque',
    MovimentacaoRacao: 'MovimentacaoRacao'
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
      modelProps: "user" | "tanque" | "cicloProducao" | "registroDiario" | "biometria" | "qualidadeAgua" | "registroSaude" | "produtoEstoque" | "movimentacaoTanque" | "movimentacaoRacao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      Tanque: {
        payload: Prisma.$TanquePayload<ExtArgs>
        fields: Prisma.TanqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TanqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TanqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          findFirst: {
            args: Prisma.TanqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TanqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          findMany: {
            args: Prisma.TanqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>[]
          }
          create: {
            args: Prisma.TanqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          createMany: {
            args: Prisma.TanqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TanqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>[]
          }
          delete: {
            args: Prisma.TanqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          update: {
            args: Prisma.TanqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          deleteMany: {
            args: Prisma.TanqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TanqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TanqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>[]
          }
          upsert: {
            args: Prisma.TanqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TanquePayload>
          }
          aggregate: {
            args: Prisma.TanqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTanque>
          }
          groupBy: {
            args: Prisma.TanqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<TanqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.TanqueCountArgs<ExtArgs>
            result: $Utils.Optional<TanqueCountAggregateOutputType> | number
          }
        }
      }
      CicloProducao: {
        payload: Prisma.$CicloProducaoPayload<ExtArgs>
        fields: Prisma.CicloProducaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CicloProducaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CicloProducaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>
          }
          findFirst: {
            args: Prisma.CicloProducaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CicloProducaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>
          }
          findMany: {
            args: Prisma.CicloProducaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>[]
          }
          create: {
            args: Prisma.CicloProducaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>
          }
          createMany: {
            args: Prisma.CicloProducaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CicloProducaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>[]
          }
          delete: {
            args: Prisma.CicloProducaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>
          }
          update: {
            args: Prisma.CicloProducaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>
          }
          deleteMany: {
            args: Prisma.CicloProducaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CicloProducaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CicloProducaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>[]
          }
          upsert: {
            args: Prisma.CicloProducaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CicloProducaoPayload>
          }
          aggregate: {
            args: Prisma.CicloProducaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCicloProducao>
          }
          groupBy: {
            args: Prisma.CicloProducaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<CicloProducaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.CicloProducaoCountArgs<ExtArgs>
            result: $Utils.Optional<CicloProducaoCountAggregateOutputType> | number
          }
        }
      }
      RegistroDiario: {
        payload: Prisma.$RegistroDiarioPayload<ExtArgs>
        fields: Prisma.RegistroDiarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroDiarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroDiarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>
          }
          findFirst: {
            args: Prisma.RegistroDiarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroDiarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>
          }
          findMany: {
            args: Prisma.RegistroDiarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>[]
          }
          create: {
            args: Prisma.RegistroDiarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>
          }
          createMany: {
            args: Prisma.RegistroDiarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroDiarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>[]
          }
          delete: {
            args: Prisma.RegistroDiarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>
          }
          update: {
            args: Prisma.RegistroDiarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>
          }
          deleteMany: {
            args: Prisma.RegistroDiarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroDiarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroDiarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>[]
          }
          upsert: {
            args: Prisma.RegistroDiarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroDiarioPayload>
          }
          aggregate: {
            args: Prisma.RegistroDiarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroDiario>
          }
          groupBy: {
            args: Prisma.RegistroDiarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroDiarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroDiarioCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroDiarioCountAggregateOutputType> | number
          }
        }
      }
      Biometria: {
        payload: Prisma.$BiometriaPayload<ExtArgs>
        fields: Prisma.BiometriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BiometriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BiometriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>
          }
          findFirst: {
            args: Prisma.BiometriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BiometriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>
          }
          findMany: {
            args: Prisma.BiometriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>[]
          }
          create: {
            args: Prisma.BiometriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>
          }
          createMany: {
            args: Prisma.BiometriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BiometriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>[]
          }
          delete: {
            args: Prisma.BiometriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>
          }
          update: {
            args: Prisma.BiometriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>
          }
          deleteMany: {
            args: Prisma.BiometriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BiometriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BiometriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>[]
          }
          upsert: {
            args: Prisma.BiometriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BiometriaPayload>
          }
          aggregate: {
            args: Prisma.BiometriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiometria>
          }
          groupBy: {
            args: Prisma.BiometriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiometriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BiometriaCountArgs<ExtArgs>
            result: $Utils.Optional<BiometriaCountAggregateOutputType> | number
          }
        }
      }
      QualidadeAgua: {
        payload: Prisma.$QualidadeAguaPayload<ExtArgs>
        fields: Prisma.QualidadeAguaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QualidadeAguaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QualidadeAguaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>
          }
          findFirst: {
            args: Prisma.QualidadeAguaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QualidadeAguaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>
          }
          findMany: {
            args: Prisma.QualidadeAguaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>[]
          }
          create: {
            args: Prisma.QualidadeAguaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>
          }
          createMany: {
            args: Prisma.QualidadeAguaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QualidadeAguaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>[]
          }
          delete: {
            args: Prisma.QualidadeAguaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>
          }
          update: {
            args: Prisma.QualidadeAguaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>
          }
          deleteMany: {
            args: Prisma.QualidadeAguaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QualidadeAguaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QualidadeAguaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>[]
          }
          upsert: {
            args: Prisma.QualidadeAguaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QualidadeAguaPayload>
          }
          aggregate: {
            args: Prisma.QualidadeAguaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQualidadeAgua>
          }
          groupBy: {
            args: Prisma.QualidadeAguaGroupByArgs<ExtArgs>
            result: $Utils.Optional<QualidadeAguaGroupByOutputType>[]
          }
          count: {
            args: Prisma.QualidadeAguaCountArgs<ExtArgs>
            result: $Utils.Optional<QualidadeAguaCountAggregateOutputType> | number
          }
        }
      }
      RegistroSaude: {
        payload: Prisma.$RegistroSaudePayload<ExtArgs>
        fields: Prisma.RegistroSaudeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegistroSaudeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegistroSaudeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>
          }
          findFirst: {
            args: Prisma.RegistroSaudeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegistroSaudeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>
          }
          findMany: {
            args: Prisma.RegistroSaudeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>[]
          }
          create: {
            args: Prisma.RegistroSaudeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>
          }
          createMany: {
            args: Prisma.RegistroSaudeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegistroSaudeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>[]
          }
          delete: {
            args: Prisma.RegistroSaudeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>
          }
          update: {
            args: Prisma.RegistroSaudeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>
          }
          deleteMany: {
            args: Prisma.RegistroSaudeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegistroSaudeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegistroSaudeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>[]
          }
          upsert: {
            args: Prisma.RegistroSaudeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegistroSaudePayload>
          }
          aggregate: {
            args: Prisma.RegistroSaudeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistroSaude>
          }
          groupBy: {
            args: Prisma.RegistroSaudeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegistroSaudeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegistroSaudeCountArgs<ExtArgs>
            result: $Utils.Optional<RegistroSaudeCountAggregateOutputType> | number
          }
        }
      }
      ProdutoEstoque: {
        payload: Prisma.$ProdutoEstoquePayload<ExtArgs>
        fields: Prisma.ProdutoEstoqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdutoEstoqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdutoEstoqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>
          }
          findFirst: {
            args: Prisma.ProdutoEstoqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdutoEstoqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>
          }
          findMany: {
            args: Prisma.ProdutoEstoqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>[]
          }
          create: {
            args: Prisma.ProdutoEstoqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>
          }
          createMany: {
            args: Prisma.ProdutoEstoqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdutoEstoqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>[]
          }
          delete: {
            args: Prisma.ProdutoEstoqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>
          }
          update: {
            args: Prisma.ProdutoEstoqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>
          }
          deleteMany: {
            args: Prisma.ProdutoEstoqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdutoEstoqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdutoEstoqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>[]
          }
          upsert: {
            args: Prisma.ProdutoEstoqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdutoEstoquePayload>
          }
          aggregate: {
            args: Prisma.ProdutoEstoqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdutoEstoque>
          }
          groupBy: {
            args: Prisma.ProdutoEstoqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdutoEstoqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdutoEstoqueCountArgs<ExtArgs>
            result: $Utils.Optional<ProdutoEstoqueCountAggregateOutputType> | number
          }
        }
      }
      MovimentacaoTanque: {
        payload: Prisma.$MovimentacaoTanquePayload<ExtArgs>
        fields: Prisma.MovimentacaoTanqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoTanqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoTanqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoTanqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoTanqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>
          }
          findMany: {
            args: Prisma.MovimentacaoTanqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>[]
          }
          create: {
            args: Prisma.MovimentacaoTanqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>
          }
          createMany: {
            args: Prisma.MovimentacaoTanqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoTanqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoTanqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>
          }
          update: {
            args: Prisma.MovimentacaoTanqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoTanqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoTanqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoTanqueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoTanqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoTanquePayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoTanqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacaoTanque>
          }
          groupBy: {
            args: Prisma.MovimentacaoTanqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoTanqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoTanqueCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoTanqueCountAggregateOutputType> | number
          }
        }
      }
      MovimentacaoRacao: {
        payload: Prisma.$MovimentacaoRacaoPayload<ExtArgs>
        fields: Prisma.MovimentacaoRacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovimentacaoRacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovimentacaoRacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>
          }
          findFirst: {
            args: Prisma.MovimentacaoRacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovimentacaoRacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>
          }
          findMany: {
            args: Prisma.MovimentacaoRacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>[]
          }
          create: {
            args: Prisma.MovimentacaoRacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>
          }
          createMany: {
            args: Prisma.MovimentacaoRacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovimentacaoRacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>[]
          }
          delete: {
            args: Prisma.MovimentacaoRacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>
          }
          update: {
            args: Prisma.MovimentacaoRacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>
          }
          deleteMany: {
            args: Prisma.MovimentacaoRacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovimentacaoRacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovimentacaoRacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>[]
          }
          upsert: {
            args: Prisma.MovimentacaoRacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovimentacaoRacaoPayload>
          }
          aggregate: {
            args: Prisma.MovimentacaoRacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovimentacaoRacao>
          }
          groupBy: {
            args: Prisma.MovimentacaoRacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoRacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovimentacaoRacaoCountArgs<ExtArgs>
            result: $Utils.Optional<MovimentacaoRacaoCountAggregateOutputType> | number
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
    user?: UserOmit
    tanque?: TanqueOmit
    cicloProducao?: CicloProducaoOmit
    registroDiario?: RegistroDiarioOmit
    biometria?: BiometriaOmit
    qualidadeAgua?: QualidadeAguaOmit
    registroSaude?: RegistroSaudeOmit
    produtoEstoque?: ProdutoEstoqueOmit
    movimentacaoTanque?: MovimentacaoTanqueOmit
    movimentacaoRacao?: MovimentacaoRacaoOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    responsavel_biometrias: number
    responsavel_qualidadeagua: number
    responsavel_registrodiario: number
    responsavel_movtanque: number
    responsavel_movracao: number
    responsavel_regsaude: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel_biometrias?: boolean | UserCountOutputTypeCountResponsavel_biometriasArgs
    responsavel_qualidadeagua?: boolean | UserCountOutputTypeCountResponsavel_qualidadeaguaArgs
    responsavel_registrodiario?: boolean | UserCountOutputTypeCountResponsavel_registrodiarioArgs
    responsavel_movtanque?: boolean | UserCountOutputTypeCountResponsavel_movtanqueArgs
    responsavel_movracao?: boolean | UserCountOutputTypeCountResponsavel_movracaoArgs
    responsavel_regsaude?: boolean | UserCountOutputTypeCountResponsavel_regsaudeArgs
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
  export type UserCountOutputTypeCountResponsavel_biometriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometriaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsavel_qualidadeaguaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualidadeAguaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsavel_registrodiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroDiarioWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsavel_movtanqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoTanqueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsavel_movracaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoRacaoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResponsavel_regsaudeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSaudeWhereInput
  }


  /**
   * Count Type TanqueCountOutputType
   */

  export type TanqueCountOutputType = {
    ciclos: number
    registros_diarios: number
    biometrias: number
    qualidade_agua: number
    registros_saude: number
    movimentacoes: number
  }

  export type TanqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclos?: boolean | TanqueCountOutputTypeCountCiclosArgs
    registros_diarios?: boolean | TanqueCountOutputTypeCountRegistros_diariosArgs
    biometrias?: boolean | TanqueCountOutputTypeCountBiometriasArgs
    qualidade_agua?: boolean | TanqueCountOutputTypeCountQualidade_aguaArgs
    registros_saude?: boolean | TanqueCountOutputTypeCountRegistros_saudeArgs
    movimentacoes?: boolean | TanqueCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TanqueCountOutputType
     */
    select?: TanqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountCiclosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloProducaoWhereInput
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountRegistros_diariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroDiarioWhereInput
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountBiometriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometriaWhereInput
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountQualidade_aguaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualidadeAguaWhereInput
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountRegistros_saudeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSaudeWhereInput
  }

  /**
   * TanqueCountOutputType without action
   */
  export type TanqueCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoTanqueWhereInput
  }


  /**
   * Count Type ProdutoEstoqueCountOutputType
   */

  export type ProdutoEstoqueCountOutputType = {
    movimentacoes: number
  }

  export type ProdutoEstoqueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | ProdutoEstoqueCountOutputTypeCountMovimentacoesArgs
  }

  // Custom InputTypes
  /**
   * ProdutoEstoqueCountOutputType without action
   */
  export type ProdutoEstoqueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoqueCountOutputType
     */
    select?: ProdutoEstoqueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdutoEstoqueCountOutputType without action
   */
  export type ProdutoEstoqueCountOutputTypeCountMovimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoRacaoWhereInput
  }


  /**
   * Models
   */

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
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    image: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    image: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    lastLogin: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    image: number
    isActive: number
    createdAt: number
    updatedAt: number
    lastLogin: number
    permissions: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    image?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    image?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    image?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    lastLogin?: true
    permissions?: true
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
    name: string
    email: string
    password: string
    role: $Enums.Role | null
    image: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    lastLogin: Date | null
    permissions: string[]
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    permissions?: boolean
    responsavel_biometrias?: boolean | User$responsavel_biometriasArgs<ExtArgs>
    responsavel_qualidadeagua?: boolean | User$responsavel_qualidadeaguaArgs<ExtArgs>
    responsavel_registrodiario?: boolean | User$responsavel_registrodiarioArgs<ExtArgs>
    responsavel_movtanque?: boolean | User$responsavel_movtanqueArgs<ExtArgs>
    responsavel_movracao?: boolean | User$responsavel_movracaoArgs<ExtArgs>
    responsavel_regsaude?: boolean | User$responsavel_regsaudeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    permissions?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    image?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastLogin?: boolean
    permissions?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "image" | "isActive" | "createdAt" | "updatedAt" | "lastLogin" | "permissions", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responsavel_biometrias?: boolean | User$responsavel_biometriasArgs<ExtArgs>
    responsavel_qualidadeagua?: boolean | User$responsavel_qualidadeaguaArgs<ExtArgs>
    responsavel_registrodiario?: boolean | User$responsavel_registrodiarioArgs<ExtArgs>
    responsavel_movtanque?: boolean | User$responsavel_movtanqueArgs<ExtArgs>
    responsavel_movracao?: boolean | User$responsavel_movracaoArgs<ExtArgs>
    responsavel_regsaude?: boolean | User$responsavel_regsaudeArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      responsavel_biometrias: Prisma.$BiometriaPayload<ExtArgs>[]
      responsavel_qualidadeagua: Prisma.$QualidadeAguaPayload<ExtArgs>[]
      responsavel_registrodiario: Prisma.$RegistroDiarioPayload<ExtArgs>[]
      responsavel_movtanque: Prisma.$MovimentacaoTanquePayload<ExtArgs>[]
      responsavel_movracao: Prisma.$MovimentacaoRacaoPayload<ExtArgs>[]
      responsavel_regsaude: Prisma.$RegistroSaudePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role | null
      image: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      lastLogin: Date | null
      permissions: string[]
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
    responsavel_biometrias<T extends User$responsavel_biometriasArgs<ExtArgs> = {}>(args?: Subset<T, User$responsavel_biometriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsavel_qualidadeagua<T extends User$responsavel_qualidadeaguaArgs<ExtArgs> = {}>(args?: Subset<T, User$responsavel_qualidadeaguaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsavel_registrodiario<T extends User$responsavel_registrodiarioArgs<ExtArgs> = {}>(args?: Subset<T, User$responsavel_registrodiarioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsavel_movtanque<T extends User$responsavel_movtanqueArgs<ExtArgs> = {}>(args?: Subset<T, User$responsavel_movtanqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsavel_movracao<T extends User$responsavel_movracaoArgs<ExtArgs> = {}>(args?: Subset<T, User$responsavel_movracaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responsavel_regsaude<T extends User$responsavel_regsaudeArgs<ExtArgs> = {}>(args?: Subset<T, User$responsavel_regsaudeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly image: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly permissions: FieldRef<"User", 'String[]'>
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
   * User.responsavel_biometrias
   */
  export type User$responsavel_biometriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    where?: BiometriaWhereInput
    orderBy?: BiometriaOrderByWithRelationInput | BiometriaOrderByWithRelationInput[]
    cursor?: BiometriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BiometriaScalarFieldEnum | BiometriaScalarFieldEnum[]
  }

  /**
   * User.responsavel_qualidadeagua
   */
  export type User$responsavel_qualidadeaguaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    where?: QualidadeAguaWhereInput
    orderBy?: QualidadeAguaOrderByWithRelationInput | QualidadeAguaOrderByWithRelationInput[]
    cursor?: QualidadeAguaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualidadeAguaScalarFieldEnum | QualidadeAguaScalarFieldEnum[]
  }

  /**
   * User.responsavel_registrodiario
   */
  export type User$responsavel_registrodiarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    where?: RegistroDiarioWhereInput
    orderBy?: RegistroDiarioOrderByWithRelationInput | RegistroDiarioOrderByWithRelationInput[]
    cursor?: RegistroDiarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroDiarioScalarFieldEnum | RegistroDiarioScalarFieldEnum[]
  }

  /**
   * User.responsavel_movtanque
   */
  export type User$responsavel_movtanqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    where?: MovimentacaoTanqueWhereInput
    orderBy?: MovimentacaoTanqueOrderByWithRelationInput | MovimentacaoTanqueOrderByWithRelationInput[]
    cursor?: MovimentacaoTanqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoTanqueScalarFieldEnum | MovimentacaoTanqueScalarFieldEnum[]
  }

  /**
   * User.responsavel_movracao
   */
  export type User$responsavel_movracaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    where?: MovimentacaoRacaoWhereInput
    orderBy?: MovimentacaoRacaoOrderByWithRelationInput | MovimentacaoRacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoRacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoRacaoScalarFieldEnum | MovimentacaoRacaoScalarFieldEnum[]
  }

  /**
   * User.responsavel_regsaude
   */
  export type User$responsavel_regsaudeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    where?: RegistroSaudeWhereInput
    orderBy?: RegistroSaudeOrderByWithRelationInput | RegistroSaudeOrderByWithRelationInput[]
    cursor?: RegistroSaudeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroSaudeScalarFieldEnum | RegistroSaudeScalarFieldEnum[]
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
   * Model Tanque
   */

  export type AggregateTanque = {
    _count: TanqueCountAggregateOutputType | null
    _avg: TanqueAvgAggregateOutputType | null
    _sum: TanqueSumAggregateOutputType | null
    _min: TanqueMinAggregateOutputType | null
    _max: TanqueMaxAggregateOutputType | null
  }

  export type TanqueAvgAggregateOutputType = {
    volume_m3: number | null
    area_m2: number | null
    nivel_agua_cm: number | null
  }

  export type TanqueSumAggregateOutputType = {
    volume_m3: number | null
    area_m2: number | null
    nivel_agua_cm: number | null
  }

  export type TanqueMinAggregateOutputType = {
    id: string | null
    nome: string | null
    codigo_interno: string | null
    volume_m3: number | null
    area_m2: number | null
    tipo: $Enums.TipoTanque | null
    tipo_material: string | null
    status: $Enums.StatusTanque | null
    localizacao: string | null
    data_instalacao: Date | null
    nivel_agua_cm: number | null
    isActive: boolean | null
    ciclo_atual_id: string | null
  }

  export type TanqueMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    codigo_interno: string | null
    volume_m3: number | null
    area_m2: number | null
    tipo: $Enums.TipoTanque | null
    tipo_material: string | null
    status: $Enums.StatusTanque | null
    localizacao: string | null
    data_instalacao: Date | null
    nivel_agua_cm: number | null
    isActive: boolean | null
    ciclo_atual_id: string | null
  }

  export type TanqueCountAggregateOutputType = {
    id: number
    nome: number
    codigo_interno: number
    volume_m3: number
    area_m2: number
    tipo: number
    tipo_material: number
    status: number
    localizacao: number
    data_instalacao: number
    nivel_agua_cm: number
    isActive: number
    ciclo_atual_id: number
    _all: number
  }


  export type TanqueAvgAggregateInputType = {
    volume_m3?: true
    area_m2?: true
    nivel_agua_cm?: true
  }

  export type TanqueSumAggregateInputType = {
    volume_m3?: true
    area_m2?: true
    nivel_agua_cm?: true
  }

  export type TanqueMinAggregateInputType = {
    id?: true
    nome?: true
    codigo_interno?: true
    volume_m3?: true
    area_m2?: true
    tipo?: true
    tipo_material?: true
    status?: true
    localizacao?: true
    data_instalacao?: true
    nivel_agua_cm?: true
    isActive?: true
    ciclo_atual_id?: true
  }

  export type TanqueMaxAggregateInputType = {
    id?: true
    nome?: true
    codigo_interno?: true
    volume_m3?: true
    area_m2?: true
    tipo?: true
    tipo_material?: true
    status?: true
    localizacao?: true
    data_instalacao?: true
    nivel_agua_cm?: true
    isActive?: true
    ciclo_atual_id?: true
  }

  export type TanqueCountAggregateInputType = {
    id?: true
    nome?: true
    codigo_interno?: true
    volume_m3?: true
    area_m2?: true
    tipo?: true
    tipo_material?: true
    status?: true
    localizacao?: true
    data_instalacao?: true
    nivel_agua_cm?: true
    isActive?: true
    ciclo_atual_id?: true
    _all?: true
  }

  export type TanqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanque to aggregate.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tanques
    **/
    _count?: true | TanqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TanqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TanqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TanqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TanqueMaxAggregateInputType
  }

  export type GetTanqueAggregateType<T extends TanqueAggregateArgs> = {
        [P in keyof T & keyof AggregateTanque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTanque[P]>
      : GetScalarType<T[P], AggregateTanque[P]>
  }




  export type TanqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TanqueWhereInput
    orderBy?: TanqueOrderByWithAggregationInput | TanqueOrderByWithAggregationInput[]
    by: TanqueScalarFieldEnum[] | TanqueScalarFieldEnum
    having?: TanqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TanqueCountAggregateInputType | true
    _avg?: TanqueAvgAggregateInputType
    _sum?: TanqueSumAggregateInputType
    _min?: TanqueMinAggregateInputType
    _max?: TanqueMaxAggregateInputType
  }

  export type TanqueGroupByOutputType = {
    id: string
    nome: string
    codigo_interno: string | null
    volume_m3: number
    area_m2: number | null
    tipo: $Enums.TipoTanque
    tipo_material: string | null
    status: $Enums.StatusTanque
    localizacao: string | null
    data_instalacao: Date | null
    nivel_agua_cm: number | null
    isActive: boolean
    ciclo_atual_id: string | null
    _count: TanqueCountAggregateOutputType | null
    _avg: TanqueAvgAggregateOutputType | null
    _sum: TanqueSumAggregateOutputType | null
    _min: TanqueMinAggregateOutputType | null
    _max: TanqueMaxAggregateOutputType | null
  }

  type GetTanqueGroupByPayload<T extends TanqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TanqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TanqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TanqueGroupByOutputType[P]>
            : GetScalarType<T[P], TanqueGroupByOutputType[P]>
        }
      >
    >


  export type TanqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo_interno?: boolean
    volume_m3?: boolean
    area_m2?: boolean
    tipo?: boolean
    tipo_material?: boolean
    status?: boolean
    localizacao?: boolean
    data_instalacao?: boolean
    nivel_agua_cm?: boolean
    isActive?: boolean
    ciclo_atual_id?: boolean
    ciclo_atual?: boolean | Tanque$ciclo_atualArgs<ExtArgs>
    ciclos?: boolean | Tanque$ciclosArgs<ExtArgs>
    registros_diarios?: boolean | Tanque$registros_diariosArgs<ExtArgs>
    biometrias?: boolean | Tanque$biometriasArgs<ExtArgs>
    qualidade_agua?: boolean | Tanque$qualidade_aguaArgs<ExtArgs>
    registros_saude?: boolean | Tanque$registros_saudeArgs<ExtArgs>
    movimentacoes?: boolean | Tanque$movimentacoesArgs<ExtArgs>
    _count?: boolean | TanqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tanque"]>

  export type TanqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo_interno?: boolean
    volume_m3?: boolean
    area_m2?: boolean
    tipo?: boolean
    tipo_material?: boolean
    status?: boolean
    localizacao?: boolean
    data_instalacao?: boolean
    nivel_agua_cm?: boolean
    isActive?: boolean
    ciclo_atual_id?: boolean
    ciclo_atual?: boolean | Tanque$ciclo_atualArgs<ExtArgs>
  }, ExtArgs["result"]["tanque"]>

  export type TanqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    codigo_interno?: boolean
    volume_m3?: boolean
    area_m2?: boolean
    tipo?: boolean
    tipo_material?: boolean
    status?: boolean
    localizacao?: boolean
    data_instalacao?: boolean
    nivel_agua_cm?: boolean
    isActive?: boolean
    ciclo_atual_id?: boolean
    ciclo_atual?: boolean | Tanque$ciclo_atualArgs<ExtArgs>
  }, ExtArgs["result"]["tanque"]>

  export type TanqueSelectScalar = {
    id?: boolean
    nome?: boolean
    codigo_interno?: boolean
    volume_m3?: boolean
    area_m2?: boolean
    tipo?: boolean
    tipo_material?: boolean
    status?: boolean
    localizacao?: boolean
    data_instalacao?: boolean
    nivel_agua_cm?: boolean
    isActive?: boolean
    ciclo_atual_id?: boolean
  }

  export type TanqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "codigo_interno" | "volume_m3" | "area_m2" | "tipo" | "tipo_material" | "status" | "localizacao" | "data_instalacao" | "nivel_agua_cm" | "isActive" | "ciclo_atual_id", ExtArgs["result"]["tanque"]>
  export type TanqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclo_atual?: boolean | Tanque$ciclo_atualArgs<ExtArgs>
    ciclos?: boolean | Tanque$ciclosArgs<ExtArgs>
    registros_diarios?: boolean | Tanque$registros_diariosArgs<ExtArgs>
    biometrias?: boolean | Tanque$biometriasArgs<ExtArgs>
    qualidade_agua?: boolean | Tanque$qualidade_aguaArgs<ExtArgs>
    registros_saude?: boolean | Tanque$registros_saudeArgs<ExtArgs>
    movimentacoes?: boolean | Tanque$movimentacoesArgs<ExtArgs>
    _count?: boolean | TanqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TanqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclo_atual?: boolean | Tanque$ciclo_atualArgs<ExtArgs>
  }
  export type TanqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ciclo_atual?: boolean | Tanque$ciclo_atualArgs<ExtArgs>
  }

  export type $TanquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tanque"
    objects: {
      ciclo_atual: Prisma.$CicloProducaoPayload<ExtArgs> | null
      ciclos: Prisma.$CicloProducaoPayload<ExtArgs>[]
      registros_diarios: Prisma.$RegistroDiarioPayload<ExtArgs>[]
      biometrias: Prisma.$BiometriaPayload<ExtArgs>[]
      qualidade_agua: Prisma.$QualidadeAguaPayload<ExtArgs>[]
      registros_saude: Prisma.$RegistroSaudePayload<ExtArgs>[]
      movimentacoes: Prisma.$MovimentacaoTanquePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      codigo_interno: string | null
      volume_m3: number
      area_m2: number | null
      tipo: $Enums.TipoTanque
      tipo_material: string | null
      status: $Enums.StatusTanque
      localizacao: string | null
      data_instalacao: Date | null
      nivel_agua_cm: number | null
      isActive: boolean
      ciclo_atual_id: string | null
    }, ExtArgs["result"]["tanque"]>
    composites: {}
  }

  type TanqueGetPayload<S extends boolean | null | undefined | TanqueDefaultArgs> = $Result.GetResult<Prisma.$TanquePayload, S>

  type TanqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TanqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TanqueCountAggregateInputType | true
    }

  export interface TanqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tanque'], meta: { name: 'Tanque' } }
    /**
     * Find zero or one Tanque that matches the filter.
     * @param {TanqueFindUniqueArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TanqueFindUniqueArgs>(args: SelectSubset<T, TanqueFindUniqueArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tanque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TanqueFindUniqueOrThrowArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TanqueFindUniqueOrThrowArgs>(args: SelectSubset<T, TanqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueFindFirstArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TanqueFindFirstArgs>(args?: SelectSubset<T, TanqueFindFirstArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tanque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueFindFirstOrThrowArgs} args - Arguments to find a Tanque
     * @example
     * // Get one Tanque
     * const tanque = await prisma.tanque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TanqueFindFirstOrThrowArgs>(args?: SelectSubset<T, TanqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tanques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tanques
     * const tanques = await prisma.tanque.findMany()
     * 
     * // Get first 10 Tanques
     * const tanques = await prisma.tanque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tanqueWithIdOnly = await prisma.tanque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TanqueFindManyArgs>(args?: SelectSubset<T, TanqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tanque.
     * @param {TanqueCreateArgs} args - Arguments to create a Tanque.
     * @example
     * // Create one Tanque
     * const Tanque = await prisma.tanque.create({
     *   data: {
     *     // ... data to create a Tanque
     *   }
     * })
     * 
     */
    create<T extends TanqueCreateArgs>(args: SelectSubset<T, TanqueCreateArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tanques.
     * @param {TanqueCreateManyArgs} args - Arguments to create many Tanques.
     * @example
     * // Create many Tanques
     * const tanque = await prisma.tanque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TanqueCreateManyArgs>(args?: SelectSubset<T, TanqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tanques and returns the data saved in the database.
     * @param {TanqueCreateManyAndReturnArgs} args - Arguments to create many Tanques.
     * @example
     * // Create many Tanques
     * const tanque = await prisma.tanque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tanques and only return the `id`
     * const tanqueWithIdOnly = await prisma.tanque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TanqueCreateManyAndReturnArgs>(args?: SelectSubset<T, TanqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tanque.
     * @param {TanqueDeleteArgs} args - Arguments to delete one Tanque.
     * @example
     * // Delete one Tanque
     * const Tanque = await prisma.tanque.delete({
     *   where: {
     *     // ... filter to delete one Tanque
     *   }
     * })
     * 
     */
    delete<T extends TanqueDeleteArgs>(args: SelectSubset<T, TanqueDeleteArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tanque.
     * @param {TanqueUpdateArgs} args - Arguments to update one Tanque.
     * @example
     * // Update one Tanque
     * const tanque = await prisma.tanque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TanqueUpdateArgs>(args: SelectSubset<T, TanqueUpdateArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tanques.
     * @param {TanqueDeleteManyArgs} args - Arguments to filter Tanques to delete.
     * @example
     * // Delete a few Tanques
     * const { count } = await prisma.tanque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TanqueDeleteManyArgs>(args?: SelectSubset<T, TanqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tanques
     * const tanque = await prisma.tanque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TanqueUpdateManyArgs>(args: SelectSubset<T, TanqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tanques and returns the data updated in the database.
     * @param {TanqueUpdateManyAndReturnArgs} args - Arguments to update many Tanques.
     * @example
     * // Update many Tanques
     * const tanque = await prisma.tanque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tanques and only return the `id`
     * const tanqueWithIdOnly = await prisma.tanque.updateManyAndReturn({
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
    updateManyAndReturn<T extends TanqueUpdateManyAndReturnArgs>(args: SelectSubset<T, TanqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tanque.
     * @param {TanqueUpsertArgs} args - Arguments to update or create a Tanque.
     * @example
     * // Update or create a Tanque
     * const tanque = await prisma.tanque.upsert({
     *   create: {
     *     // ... data to create a Tanque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tanque we want to update
     *   }
     * })
     */
    upsert<T extends TanqueUpsertArgs>(args: SelectSubset<T, TanqueUpsertArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tanques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueCountArgs} args - Arguments to filter Tanques to count.
     * @example
     * // Count the number of Tanques
     * const count = await prisma.tanque.count({
     *   where: {
     *     // ... the filter for the Tanques we want to count
     *   }
     * })
    **/
    count<T extends TanqueCountArgs>(
      args?: Subset<T, TanqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TanqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tanque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TanqueAggregateArgs>(args: Subset<T, TanqueAggregateArgs>): Prisma.PrismaPromise<GetTanqueAggregateType<T>>

    /**
     * Group by Tanque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TanqueGroupByArgs} args - Group by arguments.
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
      T extends TanqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TanqueGroupByArgs['orderBy'] }
        : { orderBy?: TanqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TanqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTanqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tanque model
   */
  readonly fields: TanqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tanque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TanqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ciclo_atual<T extends Tanque$ciclo_atualArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$ciclo_atualArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ciclos<T extends Tanque$ciclosArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$ciclosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros_diarios<T extends Tanque$registros_diariosArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$registros_diariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    biometrias<T extends Tanque$biometriasArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$biometriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    qualidade_agua<T extends Tanque$qualidade_aguaArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$qualidade_aguaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registros_saude<T extends Tanque$registros_saudeArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$registros_saudeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movimentacoes<T extends Tanque$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, Tanque$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tanque model
   */
  interface TanqueFieldRefs {
    readonly id: FieldRef<"Tanque", 'String'>
    readonly nome: FieldRef<"Tanque", 'String'>
    readonly codigo_interno: FieldRef<"Tanque", 'String'>
    readonly volume_m3: FieldRef<"Tanque", 'Float'>
    readonly area_m2: FieldRef<"Tanque", 'Float'>
    readonly tipo: FieldRef<"Tanque", 'TipoTanque'>
    readonly tipo_material: FieldRef<"Tanque", 'String'>
    readonly status: FieldRef<"Tanque", 'StatusTanque'>
    readonly localizacao: FieldRef<"Tanque", 'String'>
    readonly data_instalacao: FieldRef<"Tanque", 'DateTime'>
    readonly nivel_agua_cm: FieldRef<"Tanque", 'Float'>
    readonly isActive: FieldRef<"Tanque", 'Boolean'>
    readonly ciclo_atual_id: FieldRef<"Tanque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tanque findUnique
   */
  export type TanqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque findUniqueOrThrow
   */
  export type TanqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque findFirst
   */
  export type TanqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanques.
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanques.
     */
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Tanque findFirstOrThrow
   */
  export type TanqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanque to fetch.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tanques.
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tanques.
     */
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Tanque findMany
   */
  export type TanqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter, which Tanques to fetch.
     */
    where?: TanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tanques to fetch.
     */
    orderBy?: TanqueOrderByWithRelationInput | TanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tanques.
     */
    cursor?: TanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tanques.
     */
    skip?: number
    distinct?: TanqueScalarFieldEnum | TanqueScalarFieldEnum[]
  }

  /**
   * Tanque create
   */
  export type TanqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * The data needed to create a Tanque.
     */
    data: XOR<TanqueCreateInput, TanqueUncheckedCreateInput>
  }

  /**
   * Tanque createMany
   */
  export type TanqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tanques.
     */
    data: TanqueCreateManyInput | TanqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tanque createManyAndReturn
   */
  export type TanqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * The data used to create many Tanques.
     */
    data: TanqueCreateManyInput | TanqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanque update
   */
  export type TanqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * The data needed to update a Tanque.
     */
    data: XOR<TanqueUpdateInput, TanqueUncheckedUpdateInput>
    /**
     * Choose, which Tanque to update.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque updateMany
   */
  export type TanqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tanques.
     */
    data: XOR<TanqueUpdateManyMutationInput, TanqueUncheckedUpdateManyInput>
    /**
     * Filter which Tanques to update
     */
    where?: TanqueWhereInput
    /**
     * Limit how many Tanques to update.
     */
    limit?: number
  }

  /**
   * Tanque updateManyAndReturn
   */
  export type TanqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * The data used to update Tanques.
     */
    data: XOR<TanqueUpdateManyMutationInput, TanqueUncheckedUpdateManyInput>
    /**
     * Filter which Tanques to update
     */
    where?: TanqueWhereInput
    /**
     * Limit how many Tanques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tanque upsert
   */
  export type TanqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * The filter to search for the Tanque to update in case it exists.
     */
    where: TanqueWhereUniqueInput
    /**
     * In case the Tanque found by the `where` argument doesn't exist, create a new Tanque with this data.
     */
    create: XOR<TanqueCreateInput, TanqueUncheckedCreateInput>
    /**
     * In case the Tanque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TanqueUpdateInput, TanqueUncheckedUpdateInput>
  }

  /**
   * Tanque delete
   */
  export type TanqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    /**
     * Filter which Tanque to delete.
     */
    where: TanqueWhereUniqueInput
  }

  /**
   * Tanque deleteMany
   */
  export type TanqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tanques to delete
     */
    where?: TanqueWhereInput
    /**
     * Limit how many Tanques to delete.
     */
    limit?: number
  }

  /**
   * Tanque.ciclo_atual
   */
  export type Tanque$ciclo_atualArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    where?: CicloProducaoWhereInput
  }

  /**
   * Tanque.ciclos
   */
  export type Tanque$ciclosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    where?: CicloProducaoWhereInput
    orderBy?: CicloProducaoOrderByWithRelationInput | CicloProducaoOrderByWithRelationInput[]
    cursor?: CicloProducaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CicloProducaoScalarFieldEnum | CicloProducaoScalarFieldEnum[]
  }

  /**
   * Tanque.registros_diarios
   */
  export type Tanque$registros_diariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    where?: RegistroDiarioWhereInput
    orderBy?: RegistroDiarioOrderByWithRelationInput | RegistroDiarioOrderByWithRelationInput[]
    cursor?: RegistroDiarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroDiarioScalarFieldEnum | RegistroDiarioScalarFieldEnum[]
  }

  /**
   * Tanque.biometrias
   */
  export type Tanque$biometriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    where?: BiometriaWhereInput
    orderBy?: BiometriaOrderByWithRelationInput | BiometriaOrderByWithRelationInput[]
    cursor?: BiometriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BiometriaScalarFieldEnum | BiometriaScalarFieldEnum[]
  }

  /**
   * Tanque.qualidade_agua
   */
  export type Tanque$qualidade_aguaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    where?: QualidadeAguaWhereInput
    orderBy?: QualidadeAguaOrderByWithRelationInput | QualidadeAguaOrderByWithRelationInput[]
    cursor?: QualidadeAguaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QualidadeAguaScalarFieldEnum | QualidadeAguaScalarFieldEnum[]
  }

  /**
   * Tanque.registros_saude
   */
  export type Tanque$registros_saudeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    where?: RegistroSaudeWhereInput
    orderBy?: RegistroSaudeOrderByWithRelationInput | RegistroSaudeOrderByWithRelationInput[]
    cursor?: RegistroSaudeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegistroSaudeScalarFieldEnum | RegistroSaudeScalarFieldEnum[]
  }

  /**
   * Tanque.movimentacoes
   */
  export type Tanque$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    where?: MovimentacaoTanqueWhereInput
    orderBy?: MovimentacaoTanqueOrderByWithRelationInput | MovimentacaoTanqueOrderByWithRelationInput[]
    cursor?: MovimentacaoTanqueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoTanqueScalarFieldEnum | MovimentacaoTanqueScalarFieldEnum[]
  }

  /**
   * Tanque without action
   */
  export type TanqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
  }


  /**
   * Model CicloProducao
   */

  export type AggregateCicloProducao = {
    _count: CicloProducaoCountAggregateOutputType | null
    _avg: CicloProducaoAvgAggregateOutputType | null
    _sum: CicloProducaoSumAggregateOutputType | null
    _min: CicloProducaoMinAggregateOutputType | null
    _max: CicloProducaoMaxAggregateOutputType | null
  }

  export type CicloProducaoAvgAggregateOutputType = {
    quantidade_inicial: number | null
    quantidade_atual: number | null
    peso_inicial_g: number | null
    peso_atual: number | null
    mortes: number | null
    alimentacao_total_kg: number | null
    custo_total: number | null
  }

  export type CicloProducaoSumAggregateOutputType = {
    quantidade_inicial: number | null
    quantidade_atual: number | null
    peso_inicial_g: number | null
    peso_atual: number | null
    mortes: number | null
    alimentacao_total_kg: number | null
    custo_total: number | null
  }

  export type CicloProducaoMinAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    especie: string | null
    origem_lote: string | null
    data_inicio: Date | null
    data_fim: Date | null
    quantidade_inicial: number | null
    quantidade_atual: number | null
    peso_inicial_g: number | null
    peso_atual: number | null
    mortes: number | null
    alimentacao_total_kg: number | null
    custo_total: number | null
    data_prevista_saida: Date | null
    status: string | null
  }

  export type CicloProducaoMaxAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    especie: string | null
    origem_lote: string | null
    data_inicio: Date | null
    data_fim: Date | null
    quantidade_inicial: number | null
    quantidade_atual: number | null
    peso_inicial_g: number | null
    peso_atual: number | null
    mortes: number | null
    alimentacao_total_kg: number | null
    custo_total: number | null
    data_prevista_saida: Date | null
    status: string | null
  }

  export type CicloProducaoCountAggregateOutputType = {
    id: number
    tanque_id: number
    especie: number
    origem_lote: number
    data_inicio: number
    data_fim: number
    quantidade_inicial: number
    quantidade_atual: number
    peso_inicial_g: number
    peso_atual: number
    mortes: number
    alimentacao_total_kg: number
    custo_total: number
    data_prevista_saida: number
    status: number
    _all: number
  }


  export type CicloProducaoAvgAggregateInputType = {
    quantidade_inicial?: true
    quantidade_atual?: true
    peso_inicial_g?: true
    peso_atual?: true
    mortes?: true
    alimentacao_total_kg?: true
    custo_total?: true
  }

  export type CicloProducaoSumAggregateInputType = {
    quantidade_inicial?: true
    quantidade_atual?: true
    peso_inicial_g?: true
    peso_atual?: true
    mortes?: true
    alimentacao_total_kg?: true
    custo_total?: true
  }

  export type CicloProducaoMinAggregateInputType = {
    id?: true
    tanque_id?: true
    especie?: true
    origem_lote?: true
    data_inicio?: true
    data_fim?: true
    quantidade_inicial?: true
    quantidade_atual?: true
    peso_inicial_g?: true
    peso_atual?: true
    mortes?: true
    alimentacao_total_kg?: true
    custo_total?: true
    data_prevista_saida?: true
    status?: true
  }

  export type CicloProducaoMaxAggregateInputType = {
    id?: true
    tanque_id?: true
    especie?: true
    origem_lote?: true
    data_inicio?: true
    data_fim?: true
    quantidade_inicial?: true
    quantidade_atual?: true
    peso_inicial_g?: true
    peso_atual?: true
    mortes?: true
    alimentacao_total_kg?: true
    custo_total?: true
    data_prevista_saida?: true
    status?: true
  }

  export type CicloProducaoCountAggregateInputType = {
    id?: true
    tanque_id?: true
    especie?: true
    origem_lote?: true
    data_inicio?: true
    data_fim?: true
    quantidade_inicial?: true
    quantidade_atual?: true
    peso_inicial_g?: true
    peso_atual?: true
    mortes?: true
    alimentacao_total_kg?: true
    custo_total?: true
    data_prevista_saida?: true
    status?: true
    _all?: true
  }

  export type CicloProducaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CicloProducao to aggregate.
     */
    where?: CicloProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CicloProducaos to fetch.
     */
    orderBy?: CicloProducaoOrderByWithRelationInput | CicloProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CicloProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CicloProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CicloProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CicloProducaos
    **/
    _count?: true | CicloProducaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CicloProducaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CicloProducaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CicloProducaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CicloProducaoMaxAggregateInputType
  }

  export type GetCicloProducaoAggregateType<T extends CicloProducaoAggregateArgs> = {
        [P in keyof T & keyof AggregateCicloProducao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCicloProducao[P]>
      : GetScalarType<T[P], AggregateCicloProducao[P]>
  }




  export type CicloProducaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CicloProducaoWhereInput
    orderBy?: CicloProducaoOrderByWithAggregationInput | CicloProducaoOrderByWithAggregationInput[]
    by: CicloProducaoScalarFieldEnum[] | CicloProducaoScalarFieldEnum
    having?: CicloProducaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CicloProducaoCountAggregateInputType | true
    _avg?: CicloProducaoAvgAggregateInputType
    _sum?: CicloProducaoSumAggregateInputType
    _min?: CicloProducaoMinAggregateInputType
    _max?: CicloProducaoMaxAggregateInputType
  }

  export type CicloProducaoGroupByOutputType = {
    id: string
    tanque_id: string
    especie: string | null
    origem_lote: string | null
    data_inicio: Date
    data_fim: Date | null
    quantidade_inicial: number
    quantidade_atual: number | null
    peso_inicial_g: number
    peso_atual: number | null
    mortes: number | null
    alimentacao_total_kg: number | null
    custo_total: number | null
    data_prevista_saida: Date | null
    status: string
    _count: CicloProducaoCountAggregateOutputType | null
    _avg: CicloProducaoAvgAggregateOutputType | null
    _sum: CicloProducaoSumAggregateOutputType | null
    _min: CicloProducaoMinAggregateOutputType | null
    _max: CicloProducaoMaxAggregateOutputType | null
  }

  type GetCicloProducaoGroupByPayload<T extends CicloProducaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CicloProducaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CicloProducaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CicloProducaoGroupByOutputType[P]>
            : GetScalarType<T[P], CicloProducaoGroupByOutputType[P]>
        }
      >
    >


  export type CicloProducaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    especie?: boolean
    origem_lote?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    quantidade_inicial?: boolean
    quantidade_atual?: boolean
    peso_inicial_g?: boolean
    peso_atual?: boolean
    mortes?: boolean
    alimentacao_total_kg?: boolean
    custo_total?: boolean
    data_prevista_saida?: boolean
    status?: boolean
    tanque_ciclo_ativo?: boolean | CicloProducao$tanque_ciclo_ativoArgs<ExtArgs>
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cicloProducao"]>

  export type CicloProducaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    especie?: boolean
    origem_lote?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    quantidade_inicial?: boolean
    quantidade_atual?: boolean
    peso_inicial_g?: boolean
    peso_atual?: boolean
    mortes?: boolean
    alimentacao_total_kg?: boolean
    custo_total?: boolean
    data_prevista_saida?: boolean
    status?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cicloProducao"]>

  export type CicloProducaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    especie?: boolean
    origem_lote?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    quantidade_inicial?: boolean
    quantidade_atual?: boolean
    peso_inicial_g?: boolean
    peso_atual?: boolean
    mortes?: boolean
    alimentacao_total_kg?: boolean
    custo_total?: boolean
    data_prevista_saida?: boolean
    status?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cicloProducao"]>

  export type CicloProducaoSelectScalar = {
    id?: boolean
    tanque_id?: boolean
    especie?: boolean
    origem_lote?: boolean
    data_inicio?: boolean
    data_fim?: boolean
    quantidade_inicial?: boolean
    quantidade_atual?: boolean
    peso_inicial_g?: boolean
    peso_atual?: boolean
    mortes?: boolean
    alimentacao_total_kg?: boolean
    custo_total?: boolean
    data_prevista_saida?: boolean
    status?: boolean
  }

  export type CicloProducaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanque_id" | "especie" | "origem_lote" | "data_inicio" | "data_fim" | "quantidade_inicial" | "quantidade_atual" | "peso_inicial_g" | "peso_atual" | "mortes" | "alimentacao_total_kg" | "custo_total" | "data_prevista_saida" | "status", ExtArgs["result"]["cicloProducao"]>
  export type CicloProducaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque_ciclo_ativo?: boolean | CicloProducao$tanque_ciclo_ativoArgs<ExtArgs>
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
  }
  export type CicloProducaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
  }
  export type CicloProducaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
  }

  export type $CicloProducaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CicloProducao"
    objects: {
      tanque_ciclo_ativo: Prisma.$TanquePayload<ExtArgs> | null
      tanque: Prisma.$TanquePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanque_id: string
      especie: string | null
      origem_lote: string | null
      data_inicio: Date
      data_fim: Date | null
      quantidade_inicial: number
      quantidade_atual: number | null
      peso_inicial_g: number
      peso_atual: number | null
      mortes: number | null
      alimentacao_total_kg: number | null
      custo_total: number | null
      data_prevista_saida: Date | null
      status: string
    }, ExtArgs["result"]["cicloProducao"]>
    composites: {}
  }

  type CicloProducaoGetPayload<S extends boolean | null | undefined | CicloProducaoDefaultArgs> = $Result.GetResult<Prisma.$CicloProducaoPayload, S>

  type CicloProducaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CicloProducaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CicloProducaoCountAggregateInputType | true
    }

  export interface CicloProducaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CicloProducao'], meta: { name: 'CicloProducao' } }
    /**
     * Find zero or one CicloProducao that matches the filter.
     * @param {CicloProducaoFindUniqueArgs} args - Arguments to find a CicloProducao
     * @example
     * // Get one CicloProducao
     * const cicloProducao = await prisma.cicloProducao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CicloProducaoFindUniqueArgs>(args: SelectSubset<T, CicloProducaoFindUniqueArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CicloProducao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CicloProducaoFindUniqueOrThrowArgs} args - Arguments to find a CicloProducao
     * @example
     * // Get one CicloProducao
     * const cicloProducao = await prisma.cicloProducao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CicloProducaoFindUniqueOrThrowArgs>(args: SelectSubset<T, CicloProducaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CicloProducao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoFindFirstArgs} args - Arguments to find a CicloProducao
     * @example
     * // Get one CicloProducao
     * const cicloProducao = await prisma.cicloProducao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CicloProducaoFindFirstArgs>(args?: SelectSubset<T, CicloProducaoFindFirstArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CicloProducao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoFindFirstOrThrowArgs} args - Arguments to find a CicloProducao
     * @example
     * // Get one CicloProducao
     * const cicloProducao = await prisma.cicloProducao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CicloProducaoFindFirstOrThrowArgs>(args?: SelectSubset<T, CicloProducaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CicloProducaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CicloProducaos
     * const cicloProducaos = await prisma.cicloProducao.findMany()
     * 
     * // Get first 10 CicloProducaos
     * const cicloProducaos = await prisma.cicloProducao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cicloProducaoWithIdOnly = await prisma.cicloProducao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CicloProducaoFindManyArgs>(args?: SelectSubset<T, CicloProducaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CicloProducao.
     * @param {CicloProducaoCreateArgs} args - Arguments to create a CicloProducao.
     * @example
     * // Create one CicloProducao
     * const CicloProducao = await prisma.cicloProducao.create({
     *   data: {
     *     // ... data to create a CicloProducao
     *   }
     * })
     * 
     */
    create<T extends CicloProducaoCreateArgs>(args: SelectSubset<T, CicloProducaoCreateArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CicloProducaos.
     * @param {CicloProducaoCreateManyArgs} args - Arguments to create many CicloProducaos.
     * @example
     * // Create many CicloProducaos
     * const cicloProducao = await prisma.cicloProducao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CicloProducaoCreateManyArgs>(args?: SelectSubset<T, CicloProducaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CicloProducaos and returns the data saved in the database.
     * @param {CicloProducaoCreateManyAndReturnArgs} args - Arguments to create many CicloProducaos.
     * @example
     * // Create many CicloProducaos
     * const cicloProducao = await prisma.cicloProducao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CicloProducaos and only return the `id`
     * const cicloProducaoWithIdOnly = await prisma.cicloProducao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CicloProducaoCreateManyAndReturnArgs>(args?: SelectSubset<T, CicloProducaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CicloProducao.
     * @param {CicloProducaoDeleteArgs} args - Arguments to delete one CicloProducao.
     * @example
     * // Delete one CicloProducao
     * const CicloProducao = await prisma.cicloProducao.delete({
     *   where: {
     *     // ... filter to delete one CicloProducao
     *   }
     * })
     * 
     */
    delete<T extends CicloProducaoDeleteArgs>(args: SelectSubset<T, CicloProducaoDeleteArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CicloProducao.
     * @param {CicloProducaoUpdateArgs} args - Arguments to update one CicloProducao.
     * @example
     * // Update one CicloProducao
     * const cicloProducao = await prisma.cicloProducao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CicloProducaoUpdateArgs>(args: SelectSubset<T, CicloProducaoUpdateArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CicloProducaos.
     * @param {CicloProducaoDeleteManyArgs} args - Arguments to filter CicloProducaos to delete.
     * @example
     * // Delete a few CicloProducaos
     * const { count } = await prisma.cicloProducao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CicloProducaoDeleteManyArgs>(args?: SelectSubset<T, CicloProducaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CicloProducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CicloProducaos
     * const cicloProducao = await prisma.cicloProducao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CicloProducaoUpdateManyArgs>(args: SelectSubset<T, CicloProducaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CicloProducaos and returns the data updated in the database.
     * @param {CicloProducaoUpdateManyAndReturnArgs} args - Arguments to update many CicloProducaos.
     * @example
     * // Update many CicloProducaos
     * const cicloProducao = await prisma.cicloProducao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CicloProducaos and only return the `id`
     * const cicloProducaoWithIdOnly = await prisma.cicloProducao.updateManyAndReturn({
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
    updateManyAndReturn<T extends CicloProducaoUpdateManyAndReturnArgs>(args: SelectSubset<T, CicloProducaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CicloProducao.
     * @param {CicloProducaoUpsertArgs} args - Arguments to update or create a CicloProducao.
     * @example
     * // Update or create a CicloProducao
     * const cicloProducao = await prisma.cicloProducao.upsert({
     *   create: {
     *     // ... data to create a CicloProducao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CicloProducao we want to update
     *   }
     * })
     */
    upsert<T extends CicloProducaoUpsertArgs>(args: SelectSubset<T, CicloProducaoUpsertArgs<ExtArgs>>): Prisma__CicloProducaoClient<$Result.GetResult<Prisma.$CicloProducaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CicloProducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoCountArgs} args - Arguments to filter CicloProducaos to count.
     * @example
     * // Count the number of CicloProducaos
     * const count = await prisma.cicloProducao.count({
     *   where: {
     *     // ... the filter for the CicloProducaos we want to count
     *   }
     * })
    **/
    count<T extends CicloProducaoCountArgs>(
      args?: Subset<T, CicloProducaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CicloProducaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CicloProducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CicloProducaoAggregateArgs>(args: Subset<T, CicloProducaoAggregateArgs>): Prisma.PrismaPromise<GetCicloProducaoAggregateType<T>>

    /**
     * Group by CicloProducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CicloProducaoGroupByArgs} args - Group by arguments.
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
      T extends CicloProducaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CicloProducaoGroupByArgs['orderBy'] }
        : { orderBy?: CicloProducaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CicloProducaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCicloProducaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CicloProducao model
   */
  readonly fields: CicloProducaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CicloProducao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CicloProducaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque_ciclo_ativo<T extends CicloProducao$tanque_ciclo_ativoArgs<ExtArgs> = {}>(args?: Subset<T, CicloProducao$tanque_ciclo_ativoArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CicloProducao model
   */
  interface CicloProducaoFieldRefs {
    readonly id: FieldRef<"CicloProducao", 'String'>
    readonly tanque_id: FieldRef<"CicloProducao", 'String'>
    readonly especie: FieldRef<"CicloProducao", 'String'>
    readonly origem_lote: FieldRef<"CicloProducao", 'String'>
    readonly data_inicio: FieldRef<"CicloProducao", 'DateTime'>
    readonly data_fim: FieldRef<"CicloProducao", 'DateTime'>
    readonly quantidade_inicial: FieldRef<"CicloProducao", 'Int'>
    readonly quantidade_atual: FieldRef<"CicloProducao", 'Int'>
    readonly peso_inicial_g: FieldRef<"CicloProducao", 'Float'>
    readonly peso_atual: FieldRef<"CicloProducao", 'Float'>
    readonly mortes: FieldRef<"CicloProducao", 'Int'>
    readonly alimentacao_total_kg: FieldRef<"CicloProducao", 'Float'>
    readonly custo_total: FieldRef<"CicloProducao", 'Float'>
    readonly data_prevista_saida: FieldRef<"CicloProducao", 'DateTime'>
    readonly status: FieldRef<"CicloProducao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CicloProducao findUnique
   */
  export type CicloProducaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * Filter, which CicloProducao to fetch.
     */
    where: CicloProducaoWhereUniqueInput
  }

  /**
   * CicloProducao findUniqueOrThrow
   */
  export type CicloProducaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * Filter, which CicloProducao to fetch.
     */
    where: CicloProducaoWhereUniqueInput
  }

  /**
   * CicloProducao findFirst
   */
  export type CicloProducaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * Filter, which CicloProducao to fetch.
     */
    where?: CicloProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CicloProducaos to fetch.
     */
    orderBy?: CicloProducaoOrderByWithRelationInput | CicloProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CicloProducaos.
     */
    cursor?: CicloProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CicloProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CicloProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CicloProducaos.
     */
    distinct?: CicloProducaoScalarFieldEnum | CicloProducaoScalarFieldEnum[]
  }

  /**
   * CicloProducao findFirstOrThrow
   */
  export type CicloProducaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * Filter, which CicloProducao to fetch.
     */
    where?: CicloProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CicloProducaos to fetch.
     */
    orderBy?: CicloProducaoOrderByWithRelationInput | CicloProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CicloProducaos.
     */
    cursor?: CicloProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CicloProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CicloProducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CicloProducaos.
     */
    distinct?: CicloProducaoScalarFieldEnum | CicloProducaoScalarFieldEnum[]
  }

  /**
   * CicloProducao findMany
   */
  export type CicloProducaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * Filter, which CicloProducaos to fetch.
     */
    where?: CicloProducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CicloProducaos to fetch.
     */
    orderBy?: CicloProducaoOrderByWithRelationInput | CicloProducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CicloProducaos.
     */
    cursor?: CicloProducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CicloProducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CicloProducaos.
     */
    skip?: number
    distinct?: CicloProducaoScalarFieldEnum | CicloProducaoScalarFieldEnum[]
  }

  /**
   * CicloProducao create
   */
  export type CicloProducaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * The data needed to create a CicloProducao.
     */
    data: XOR<CicloProducaoCreateInput, CicloProducaoUncheckedCreateInput>
  }

  /**
   * CicloProducao createMany
   */
  export type CicloProducaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CicloProducaos.
     */
    data: CicloProducaoCreateManyInput | CicloProducaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CicloProducao createManyAndReturn
   */
  export type CicloProducaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * The data used to create many CicloProducaos.
     */
    data: CicloProducaoCreateManyInput | CicloProducaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CicloProducao update
   */
  export type CicloProducaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * The data needed to update a CicloProducao.
     */
    data: XOR<CicloProducaoUpdateInput, CicloProducaoUncheckedUpdateInput>
    /**
     * Choose, which CicloProducao to update.
     */
    where: CicloProducaoWhereUniqueInput
  }

  /**
   * CicloProducao updateMany
   */
  export type CicloProducaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CicloProducaos.
     */
    data: XOR<CicloProducaoUpdateManyMutationInput, CicloProducaoUncheckedUpdateManyInput>
    /**
     * Filter which CicloProducaos to update
     */
    where?: CicloProducaoWhereInput
    /**
     * Limit how many CicloProducaos to update.
     */
    limit?: number
  }

  /**
   * CicloProducao updateManyAndReturn
   */
  export type CicloProducaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * The data used to update CicloProducaos.
     */
    data: XOR<CicloProducaoUpdateManyMutationInput, CicloProducaoUncheckedUpdateManyInput>
    /**
     * Filter which CicloProducaos to update
     */
    where?: CicloProducaoWhereInput
    /**
     * Limit how many CicloProducaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CicloProducao upsert
   */
  export type CicloProducaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * The filter to search for the CicloProducao to update in case it exists.
     */
    where: CicloProducaoWhereUniqueInput
    /**
     * In case the CicloProducao found by the `where` argument doesn't exist, create a new CicloProducao with this data.
     */
    create: XOR<CicloProducaoCreateInput, CicloProducaoUncheckedCreateInput>
    /**
     * In case the CicloProducao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CicloProducaoUpdateInput, CicloProducaoUncheckedUpdateInput>
  }

  /**
   * CicloProducao delete
   */
  export type CicloProducaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
    /**
     * Filter which CicloProducao to delete.
     */
    where: CicloProducaoWhereUniqueInput
  }

  /**
   * CicloProducao deleteMany
   */
  export type CicloProducaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CicloProducaos to delete
     */
    where?: CicloProducaoWhereInput
    /**
     * Limit how many CicloProducaos to delete.
     */
    limit?: number
  }

  /**
   * CicloProducao.tanque_ciclo_ativo
   */
  export type CicloProducao$tanque_ciclo_ativoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tanque
     */
    select?: TanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tanque
     */
    omit?: TanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TanqueInclude<ExtArgs> | null
    where?: TanqueWhereInput
  }

  /**
   * CicloProducao without action
   */
  export type CicloProducaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CicloProducao
     */
    select?: CicloProducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CicloProducao
     */
    omit?: CicloProducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CicloProducaoInclude<ExtArgs> | null
  }


  /**
   * Model RegistroDiario
   */

  export type AggregateRegistroDiario = {
    _count: RegistroDiarioCountAggregateOutputType | null
    _avg: RegistroDiarioAvgAggregateOutputType | null
    _sum: RegistroDiarioSumAggregateOutputType | null
    _min: RegistroDiarioMinAggregateOutputType | null
    _max: RegistroDiarioMaxAggregateOutputType | null
  }

  export type RegistroDiarioAvgAggregateOutputType = {
    temperatura_agua: number | null
    quantidade_kg: number | null
    fracionamento: number | null
    mortalidade: number | null
    horas_aeracao: number | null
  }

  export type RegistroDiarioSumAggregateOutputType = {
    temperatura_agua: number | null
    quantidade_kg: number | null
    fracionamento: number | null
    mortalidade: number | null
    horas_aeracao: number | null
  }

  export type RegistroDiarioMinAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data: Date | null
    turno: $Enums.Turno | null
    temperatura_agua: number | null
    quantidade_kg: number | null
    fracionamento: number | null
    tipo_racao: string | null
    racao_marca: string | null
    racao_codigo: string | null
    sobras: boolean | null
    mortalidade: number | null
    causa_morte: string | null
    horas_aeracao: number | null
    observacoes: string | null
    eventos_adversos: string | null
    responsavel_id: string | null
    isAutomatic: boolean | null
  }

  export type RegistroDiarioMaxAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data: Date | null
    turno: $Enums.Turno | null
    temperatura_agua: number | null
    quantidade_kg: number | null
    fracionamento: number | null
    tipo_racao: string | null
    racao_marca: string | null
    racao_codigo: string | null
    sobras: boolean | null
    mortalidade: number | null
    causa_morte: string | null
    horas_aeracao: number | null
    observacoes: string | null
    eventos_adversos: string | null
    responsavel_id: string | null
    isAutomatic: boolean | null
  }

  export type RegistroDiarioCountAggregateOutputType = {
    id: number
    tanque_id: number
    data: number
    turno: number
    temperatura_agua: number
    quantidade_kg: number
    fracionamento: number
    tipo_racao: number
    racao_marca: number
    racao_codigo: number
    sobras: number
    mortalidade: number
    causa_morte: number
    horas_aeracao: number
    observacoes: number
    eventos_adversos: number
    responsavel_id: number
    isAutomatic: number
    _all: number
  }


  export type RegistroDiarioAvgAggregateInputType = {
    temperatura_agua?: true
    quantidade_kg?: true
    fracionamento?: true
    mortalidade?: true
    horas_aeracao?: true
  }

  export type RegistroDiarioSumAggregateInputType = {
    temperatura_agua?: true
    quantidade_kg?: true
    fracionamento?: true
    mortalidade?: true
    horas_aeracao?: true
  }

  export type RegistroDiarioMinAggregateInputType = {
    id?: true
    tanque_id?: true
    data?: true
    turno?: true
    temperatura_agua?: true
    quantidade_kg?: true
    fracionamento?: true
    tipo_racao?: true
    racao_marca?: true
    racao_codigo?: true
    sobras?: true
    mortalidade?: true
    causa_morte?: true
    horas_aeracao?: true
    observacoes?: true
    eventos_adversos?: true
    responsavel_id?: true
    isAutomatic?: true
  }

  export type RegistroDiarioMaxAggregateInputType = {
    id?: true
    tanque_id?: true
    data?: true
    turno?: true
    temperatura_agua?: true
    quantidade_kg?: true
    fracionamento?: true
    tipo_racao?: true
    racao_marca?: true
    racao_codigo?: true
    sobras?: true
    mortalidade?: true
    causa_morte?: true
    horas_aeracao?: true
    observacoes?: true
    eventos_adversos?: true
    responsavel_id?: true
    isAutomatic?: true
  }

  export type RegistroDiarioCountAggregateInputType = {
    id?: true
    tanque_id?: true
    data?: true
    turno?: true
    temperatura_agua?: true
    quantidade_kg?: true
    fracionamento?: true
    tipo_racao?: true
    racao_marca?: true
    racao_codigo?: true
    sobras?: true
    mortalidade?: true
    causa_morte?: true
    horas_aeracao?: true
    observacoes?: true
    eventos_adversos?: true
    responsavel_id?: true
    isAutomatic?: true
    _all?: true
  }

  export type RegistroDiarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroDiario to aggregate.
     */
    where?: RegistroDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDiarios to fetch.
     */
    orderBy?: RegistroDiarioOrderByWithRelationInput | RegistroDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroDiarios
    **/
    _count?: true | RegistroDiarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroDiarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroDiarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroDiarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroDiarioMaxAggregateInputType
  }

  export type GetRegistroDiarioAggregateType<T extends RegistroDiarioAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroDiario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroDiario[P]>
      : GetScalarType<T[P], AggregateRegistroDiario[P]>
  }




  export type RegistroDiarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroDiarioWhereInput
    orderBy?: RegistroDiarioOrderByWithAggregationInput | RegistroDiarioOrderByWithAggregationInput[]
    by: RegistroDiarioScalarFieldEnum[] | RegistroDiarioScalarFieldEnum
    having?: RegistroDiarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroDiarioCountAggregateInputType | true
    _avg?: RegistroDiarioAvgAggregateInputType
    _sum?: RegistroDiarioSumAggregateInputType
    _min?: RegistroDiarioMinAggregateInputType
    _max?: RegistroDiarioMaxAggregateInputType
  }

  export type RegistroDiarioGroupByOutputType = {
    id: string
    tanque_id: string
    data: Date
    turno: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg: number | null
    fracionamento: number | null
    tipo_racao: string | null
    racao_marca: string | null
    racao_codigo: string | null
    sobras: boolean | null
    mortalidade: number | null
    causa_morte: string | null
    horas_aeracao: number | null
    observacoes: string | null
    eventos_adversos: string | null
    responsavel_id: string | null
    isAutomatic: boolean
    _count: RegistroDiarioCountAggregateOutputType | null
    _avg: RegistroDiarioAvgAggregateOutputType | null
    _sum: RegistroDiarioSumAggregateOutputType | null
    _min: RegistroDiarioMinAggregateOutputType | null
    _max: RegistroDiarioMaxAggregateOutputType | null
  }

  type GetRegistroDiarioGroupByPayload<T extends RegistroDiarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroDiarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroDiarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroDiarioGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroDiarioGroupByOutputType[P]>
        }
      >
    >


  export type RegistroDiarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data?: boolean
    turno?: boolean
    temperatura_agua?: boolean
    quantidade_kg?: boolean
    fracionamento?: boolean
    tipo_racao?: boolean
    racao_marca?: boolean
    racao_codigo?: boolean
    sobras?: boolean
    mortalidade?: boolean
    causa_morte?: boolean
    horas_aeracao?: boolean
    observacoes?: boolean
    eventos_adversos?: boolean
    responsavel_id?: boolean
    isAutomatic?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroDiario$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["registroDiario"]>

  export type RegistroDiarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data?: boolean
    turno?: boolean
    temperatura_agua?: boolean
    quantidade_kg?: boolean
    fracionamento?: boolean
    tipo_racao?: boolean
    racao_marca?: boolean
    racao_codigo?: boolean
    sobras?: boolean
    mortalidade?: boolean
    causa_morte?: boolean
    horas_aeracao?: boolean
    observacoes?: boolean
    eventos_adversos?: boolean
    responsavel_id?: boolean
    isAutomatic?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroDiario$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["registroDiario"]>

  export type RegistroDiarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data?: boolean
    turno?: boolean
    temperatura_agua?: boolean
    quantidade_kg?: boolean
    fracionamento?: boolean
    tipo_racao?: boolean
    racao_marca?: boolean
    racao_codigo?: boolean
    sobras?: boolean
    mortalidade?: boolean
    causa_morte?: boolean
    horas_aeracao?: boolean
    observacoes?: boolean
    eventos_adversos?: boolean
    responsavel_id?: boolean
    isAutomatic?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroDiario$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["registroDiario"]>

  export type RegistroDiarioSelectScalar = {
    id?: boolean
    tanque_id?: boolean
    data?: boolean
    turno?: boolean
    temperatura_agua?: boolean
    quantidade_kg?: boolean
    fracionamento?: boolean
    tipo_racao?: boolean
    racao_marca?: boolean
    racao_codigo?: boolean
    sobras?: boolean
    mortalidade?: boolean
    causa_morte?: boolean
    horas_aeracao?: boolean
    observacoes?: boolean
    eventos_adversos?: boolean
    responsavel_id?: boolean
    isAutomatic?: boolean
  }

  export type RegistroDiarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanque_id" | "data" | "turno" | "temperatura_agua" | "quantidade_kg" | "fracionamento" | "tipo_racao" | "racao_marca" | "racao_codigo" | "sobras" | "mortalidade" | "causa_morte" | "horas_aeracao" | "observacoes" | "eventos_adversos" | "responsavel_id" | "isAutomatic", ExtArgs["result"]["registroDiario"]>
  export type RegistroDiarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroDiario$responsavelArgs<ExtArgs>
  }
  export type RegistroDiarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroDiario$responsavelArgs<ExtArgs>
  }
  export type RegistroDiarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroDiario$responsavelArgs<ExtArgs>
  }

  export type $RegistroDiarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroDiario"
    objects: {
      tanque: Prisma.$TanquePayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanque_id: string
      data: Date
      turno: $Enums.Turno | null
      temperatura_agua: number
      quantidade_kg: number | null
      fracionamento: number | null
      tipo_racao: string | null
      racao_marca: string | null
      racao_codigo: string | null
      sobras: boolean | null
      mortalidade: number | null
      causa_morte: string | null
      horas_aeracao: number | null
      observacoes: string | null
      eventos_adversos: string | null
      responsavel_id: string | null
      isAutomatic: boolean
    }, ExtArgs["result"]["registroDiario"]>
    composites: {}
  }

  type RegistroDiarioGetPayload<S extends boolean | null | undefined | RegistroDiarioDefaultArgs> = $Result.GetResult<Prisma.$RegistroDiarioPayload, S>

  type RegistroDiarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroDiarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroDiarioCountAggregateInputType | true
    }

  export interface RegistroDiarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroDiario'], meta: { name: 'RegistroDiario' } }
    /**
     * Find zero or one RegistroDiario that matches the filter.
     * @param {RegistroDiarioFindUniqueArgs} args - Arguments to find a RegistroDiario
     * @example
     * // Get one RegistroDiario
     * const registroDiario = await prisma.registroDiario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroDiarioFindUniqueArgs>(args: SelectSubset<T, RegistroDiarioFindUniqueArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroDiario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroDiarioFindUniqueOrThrowArgs} args - Arguments to find a RegistroDiario
     * @example
     * // Get one RegistroDiario
     * const registroDiario = await prisma.registroDiario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroDiarioFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroDiarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroDiario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioFindFirstArgs} args - Arguments to find a RegistroDiario
     * @example
     * // Get one RegistroDiario
     * const registroDiario = await prisma.registroDiario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroDiarioFindFirstArgs>(args?: SelectSubset<T, RegistroDiarioFindFirstArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroDiario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioFindFirstOrThrowArgs} args - Arguments to find a RegistroDiario
     * @example
     * // Get one RegistroDiario
     * const registroDiario = await prisma.registroDiario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroDiarioFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroDiarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroDiarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroDiarios
     * const registroDiarios = await prisma.registroDiario.findMany()
     * 
     * // Get first 10 RegistroDiarios
     * const registroDiarios = await prisma.registroDiario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroDiarioWithIdOnly = await prisma.registroDiario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroDiarioFindManyArgs>(args?: SelectSubset<T, RegistroDiarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroDiario.
     * @param {RegistroDiarioCreateArgs} args - Arguments to create a RegistroDiario.
     * @example
     * // Create one RegistroDiario
     * const RegistroDiario = await prisma.registroDiario.create({
     *   data: {
     *     // ... data to create a RegistroDiario
     *   }
     * })
     * 
     */
    create<T extends RegistroDiarioCreateArgs>(args: SelectSubset<T, RegistroDiarioCreateArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroDiarios.
     * @param {RegistroDiarioCreateManyArgs} args - Arguments to create many RegistroDiarios.
     * @example
     * // Create many RegistroDiarios
     * const registroDiario = await prisma.registroDiario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroDiarioCreateManyArgs>(args?: SelectSubset<T, RegistroDiarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroDiarios and returns the data saved in the database.
     * @param {RegistroDiarioCreateManyAndReturnArgs} args - Arguments to create many RegistroDiarios.
     * @example
     * // Create many RegistroDiarios
     * const registroDiario = await prisma.registroDiario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroDiarios and only return the `id`
     * const registroDiarioWithIdOnly = await prisma.registroDiario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroDiarioCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroDiarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroDiario.
     * @param {RegistroDiarioDeleteArgs} args - Arguments to delete one RegistroDiario.
     * @example
     * // Delete one RegistroDiario
     * const RegistroDiario = await prisma.registroDiario.delete({
     *   where: {
     *     // ... filter to delete one RegistroDiario
     *   }
     * })
     * 
     */
    delete<T extends RegistroDiarioDeleteArgs>(args: SelectSubset<T, RegistroDiarioDeleteArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroDiario.
     * @param {RegistroDiarioUpdateArgs} args - Arguments to update one RegistroDiario.
     * @example
     * // Update one RegistroDiario
     * const registroDiario = await prisma.registroDiario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroDiarioUpdateArgs>(args: SelectSubset<T, RegistroDiarioUpdateArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroDiarios.
     * @param {RegistroDiarioDeleteManyArgs} args - Arguments to filter RegistroDiarios to delete.
     * @example
     * // Delete a few RegistroDiarios
     * const { count } = await prisma.registroDiario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroDiarioDeleteManyArgs>(args?: SelectSubset<T, RegistroDiarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroDiarios
     * const registroDiario = await prisma.registroDiario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroDiarioUpdateManyArgs>(args: SelectSubset<T, RegistroDiarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroDiarios and returns the data updated in the database.
     * @param {RegistroDiarioUpdateManyAndReturnArgs} args - Arguments to update many RegistroDiarios.
     * @example
     * // Update many RegistroDiarios
     * const registroDiario = await prisma.registroDiario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroDiarios and only return the `id`
     * const registroDiarioWithIdOnly = await prisma.registroDiario.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroDiarioUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroDiarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroDiario.
     * @param {RegistroDiarioUpsertArgs} args - Arguments to update or create a RegistroDiario.
     * @example
     * // Update or create a RegistroDiario
     * const registroDiario = await prisma.registroDiario.upsert({
     *   create: {
     *     // ... data to create a RegistroDiario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroDiario we want to update
     *   }
     * })
     */
    upsert<T extends RegistroDiarioUpsertArgs>(args: SelectSubset<T, RegistroDiarioUpsertArgs<ExtArgs>>): Prisma__RegistroDiarioClient<$Result.GetResult<Prisma.$RegistroDiarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroDiarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioCountArgs} args - Arguments to filter RegistroDiarios to count.
     * @example
     * // Count the number of RegistroDiarios
     * const count = await prisma.registroDiario.count({
     *   where: {
     *     // ... the filter for the RegistroDiarios we want to count
     *   }
     * })
    **/
    count<T extends RegistroDiarioCountArgs>(
      args?: Subset<T, RegistroDiarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroDiarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroDiarioAggregateArgs>(args: Subset<T, RegistroDiarioAggregateArgs>): Prisma.PrismaPromise<GetRegistroDiarioAggregateType<T>>

    /**
     * Group by RegistroDiario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroDiarioGroupByArgs} args - Group by arguments.
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
      T extends RegistroDiarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroDiarioGroupByArgs['orderBy'] }
        : { orderBy?: RegistroDiarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroDiarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroDiarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroDiario model
   */
  readonly fields: RegistroDiarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroDiario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroDiarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends RegistroDiario$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, RegistroDiario$responsavelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroDiario model
   */
  interface RegistroDiarioFieldRefs {
    readonly id: FieldRef<"RegistroDiario", 'String'>
    readonly tanque_id: FieldRef<"RegistroDiario", 'String'>
    readonly data: FieldRef<"RegistroDiario", 'DateTime'>
    readonly turno: FieldRef<"RegistroDiario", 'Turno'>
    readonly temperatura_agua: FieldRef<"RegistroDiario", 'Float'>
    readonly quantidade_kg: FieldRef<"RegistroDiario", 'Float'>
    readonly fracionamento: FieldRef<"RegistroDiario", 'Int'>
    readonly tipo_racao: FieldRef<"RegistroDiario", 'String'>
    readonly racao_marca: FieldRef<"RegistroDiario", 'String'>
    readonly racao_codigo: FieldRef<"RegistroDiario", 'String'>
    readonly sobras: FieldRef<"RegistroDiario", 'Boolean'>
    readonly mortalidade: FieldRef<"RegistroDiario", 'Int'>
    readonly causa_morte: FieldRef<"RegistroDiario", 'String'>
    readonly horas_aeracao: FieldRef<"RegistroDiario", 'Float'>
    readonly observacoes: FieldRef<"RegistroDiario", 'String'>
    readonly eventos_adversos: FieldRef<"RegistroDiario", 'String'>
    readonly responsavel_id: FieldRef<"RegistroDiario", 'String'>
    readonly isAutomatic: FieldRef<"RegistroDiario", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RegistroDiario findUnique
   */
  export type RegistroDiarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDiario to fetch.
     */
    where: RegistroDiarioWhereUniqueInput
  }

  /**
   * RegistroDiario findUniqueOrThrow
   */
  export type RegistroDiarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDiario to fetch.
     */
    where: RegistroDiarioWhereUniqueInput
  }

  /**
   * RegistroDiario findFirst
   */
  export type RegistroDiarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDiario to fetch.
     */
    where?: RegistroDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDiarios to fetch.
     */
    orderBy?: RegistroDiarioOrderByWithRelationInput | RegistroDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroDiarios.
     */
    cursor?: RegistroDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroDiarios.
     */
    distinct?: RegistroDiarioScalarFieldEnum | RegistroDiarioScalarFieldEnum[]
  }

  /**
   * RegistroDiario findFirstOrThrow
   */
  export type RegistroDiarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDiario to fetch.
     */
    where?: RegistroDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDiarios to fetch.
     */
    orderBy?: RegistroDiarioOrderByWithRelationInput | RegistroDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroDiarios.
     */
    cursor?: RegistroDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDiarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroDiarios.
     */
    distinct?: RegistroDiarioScalarFieldEnum | RegistroDiarioScalarFieldEnum[]
  }

  /**
   * RegistroDiario findMany
   */
  export type RegistroDiarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * Filter, which RegistroDiarios to fetch.
     */
    where?: RegistroDiarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroDiarios to fetch.
     */
    orderBy?: RegistroDiarioOrderByWithRelationInput | RegistroDiarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroDiarios.
     */
    cursor?: RegistroDiarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroDiarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroDiarios.
     */
    skip?: number
    distinct?: RegistroDiarioScalarFieldEnum | RegistroDiarioScalarFieldEnum[]
  }

  /**
   * RegistroDiario create
   */
  export type RegistroDiarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroDiario.
     */
    data: XOR<RegistroDiarioCreateInput, RegistroDiarioUncheckedCreateInput>
  }

  /**
   * RegistroDiario createMany
   */
  export type RegistroDiarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroDiarios.
     */
    data: RegistroDiarioCreateManyInput | RegistroDiarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroDiario createManyAndReturn
   */
  export type RegistroDiarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroDiarios.
     */
    data: RegistroDiarioCreateManyInput | RegistroDiarioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroDiario update
   */
  export type RegistroDiarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroDiario.
     */
    data: XOR<RegistroDiarioUpdateInput, RegistroDiarioUncheckedUpdateInput>
    /**
     * Choose, which RegistroDiario to update.
     */
    where: RegistroDiarioWhereUniqueInput
  }

  /**
   * RegistroDiario updateMany
   */
  export type RegistroDiarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroDiarios.
     */
    data: XOR<RegistroDiarioUpdateManyMutationInput, RegistroDiarioUncheckedUpdateManyInput>
    /**
     * Filter which RegistroDiarios to update
     */
    where?: RegistroDiarioWhereInput
    /**
     * Limit how many RegistroDiarios to update.
     */
    limit?: number
  }

  /**
   * RegistroDiario updateManyAndReturn
   */
  export type RegistroDiarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * The data used to update RegistroDiarios.
     */
    data: XOR<RegistroDiarioUpdateManyMutationInput, RegistroDiarioUncheckedUpdateManyInput>
    /**
     * Filter which RegistroDiarios to update
     */
    where?: RegistroDiarioWhereInput
    /**
     * Limit how many RegistroDiarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroDiario upsert
   */
  export type RegistroDiarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroDiario to update in case it exists.
     */
    where: RegistroDiarioWhereUniqueInput
    /**
     * In case the RegistroDiario found by the `where` argument doesn't exist, create a new RegistroDiario with this data.
     */
    create: XOR<RegistroDiarioCreateInput, RegistroDiarioUncheckedCreateInput>
    /**
     * In case the RegistroDiario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroDiarioUpdateInput, RegistroDiarioUncheckedUpdateInput>
  }

  /**
   * RegistroDiario delete
   */
  export type RegistroDiarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
    /**
     * Filter which RegistroDiario to delete.
     */
    where: RegistroDiarioWhereUniqueInput
  }

  /**
   * RegistroDiario deleteMany
   */
  export type RegistroDiarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroDiarios to delete
     */
    where?: RegistroDiarioWhereInput
    /**
     * Limit how many RegistroDiarios to delete.
     */
    limit?: number
  }

  /**
   * RegistroDiario.responsavel
   */
  export type RegistroDiario$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * RegistroDiario without action
   */
  export type RegistroDiarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroDiario
     */
    select?: RegistroDiarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroDiario
     */
    omit?: RegistroDiarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroDiarioInclude<ExtArgs> | null
  }


  /**
   * Model Biometria
   */

  export type AggregateBiometria = {
    _count: BiometriaCountAggregateOutputType | null
    _avg: BiometriaAvgAggregateOutputType | null
    _sum: BiometriaSumAggregateOutputType | null
    _min: BiometriaMinAggregateOutputType | null
    _max: BiometriaMaxAggregateOutputType | null
  }

  export type BiometriaAvgAggregateOutputType = {
    idade_lote_dias: number | null
    tamanho_amostra: number | null
    peso_total_kg: number | null
    peso_minimo: number | null
    peso_maximo: number | null
    comprimento_medio_cm: number | null
    comprimento_minimo: number | null
    comprimento_maximo: number | null
    altura_minima: number | null
    altura_maxima: number | null
    desvio_padrao_peso: number | null
    desvio_padrao_comprimento: number | null
  }

  export type BiometriaSumAggregateOutputType = {
    idade_lote_dias: number | null
    tamanho_amostra: number | null
    peso_total_kg: number | null
    peso_minimo: number | null
    peso_maximo: number | null
    comprimento_medio_cm: number | null
    comprimento_minimo: number | null
    comprimento_maximo: number | null
    altura_minima: number | null
    altura_maxima: number | null
    desvio_padrao_peso: number | null
    desvio_padrao_comprimento: number | null
  }

  export type BiometriaMinAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data_amostra: Date | null
    idade_lote_dias: number | null
    tamanho_amostra: number | null
    peso_total_kg: number | null
    peso_minimo: number | null
    peso_maximo: number | null
    comprimento_medio_cm: number | null
    comprimento_minimo: number | null
    comprimento_maximo: number | null
    altura_minima: number | null
    altura_maxima: number | null
    desvio_padrao_peso: number | null
    desvio_padrao_comprimento: number | null
    observacoes: string | null
    recomendacoes: string | null
    responsavel_id: string | null
  }

  export type BiometriaMaxAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data_amostra: Date | null
    idade_lote_dias: number | null
    tamanho_amostra: number | null
    peso_total_kg: number | null
    peso_minimo: number | null
    peso_maximo: number | null
    comprimento_medio_cm: number | null
    comprimento_minimo: number | null
    comprimento_maximo: number | null
    altura_minima: number | null
    altura_maxima: number | null
    desvio_padrao_peso: number | null
    desvio_padrao_comprimento: number | null
    observacoes: string | null
    recomendacoes: string | null
    responsavel_id: string | null
  }

  export type BiometriaCountAggregateOutputType = {
    id: number
    tanque_id: number
    data_amostra: number
    idade_lote_dias: number
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo: number
    peso_maximo: number
    comprimento_medio_cm: number
    comprimento_minimo: number
    comprimento_maximo: number
    altura_minima: number
    altura_maxima: number
    desvio_padrao_peso: number
    desvio_padrao_comprimento: number
    observacoes: number
    recomendacoes: number
    responsavel_id: number
    _all: number
  }


  export type BiometriaAvgAggregateInputType = {
    idade_lote_dias?: true
    tamanho_amostra?: true
    peso_total_kg?: true
    peso_minimo?: true
    peso_maximo?: true
    comprimento_medio_cm?: true
    comprimento_minimo?: true
    comprimento_maximo?: true
    altura_minima?: true
    altura_maxima?: true
    desvio_padrao_peso?: true
    desvio_padrao_comprimento?: true
  }

  export type BiometriaSumAggregateInputType = {
    idade_lote_dias?: true
    tamanho_amostra?: true
    peso_total_kg?: true
    peso_minimo?: true
    peso_maximo?: true
    comprimento_medio_cm?: true
    comprimento_minimo?: true
    comprimento_maximo?: true
    altura_minima?: true
    altura_maxima?: true
    desvio_padrao_peso?: true
    desvio_padrao_comprimento?: true
  }

  export type BiometriaMinAggregateInputType = {
    id?: true
    tanque_id?: true
    data_amostra?: true
    idade_lote_dias?: true
    tamanho_amostra?: true
    peso_total_kg?: true
    peso_minimo?: true
    peso_maximo?: true
    comprimento_medio_cm?: true
    comprimento_minimo?: true
    comprimento_maximo?: true
    altura_minima?: true
    altura_maxima?: true
    desvio_padrao_peso?: true
    desvio_padrao_comprimento?: true
    observacoes?: true
    recomendacoes?: true
    responsavel_id?: true
  }

  export type BiometriaMaxAggregateInputType = {
    id?: true
    tanque_id?: true
    data_amostra?: true
    idade_lote_dias?: true
    tamanho_amostra?: true
    peso_total_kg?: true
    peso_minimo?: true
    peso_maximo?: true
    comprimento_medio_cm?: true
    comprimento_minimo?: true
    comprimento_maximo?: true
    altura_minima?: true
    altura_maxima?: true
    desvio_padrao_peso?: true
    desvio_padrao_comprimento?: true
    observacoes?: true
    recomendacoes?: true
    responsavel_id?: true
  }

  export type BiometriaCountAggregateInputType = {
    id?: true
    tanque_id?: true
    data_amostra?: true
    idade_lote_dias?: true
    tamanho_amostra?: true
    peso_total_kg?: true
    peso_minimo?: true
    peso_maximo?: true
    comprimento_medio_cm?: true
    comprimento_minimo?: true
    comprimento_maximo?: true
    altura_minima?: true
    altura_maxima?: true
    desvio_padrao_peso?: true
    desvio_padrao_comprimento?: true
    observacoes?: true
    recomendacoes?: true
    responsavel_id?: true
    _all?: true
  }

  export type BiometriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Biometria to aggregate.
     */
    where?: BiometriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biometrias to fetch.
     */
    orderBy?: BiometriaOrderByWithRelationInput | BiometriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BiometriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biometrias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biometrias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Biometrias
    **/
    _count?: true | BiometriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BiometriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BiometriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiometriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiometriaMaxAggregateInputType
  }

  export type GetBiometriaAggregateType<T extends BiometriaAggregateArgs> = {
        [P in keyof T & keyof AggregateBiometria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiometria[P]>
      : GetScalarType<T[P], AggregateBiometria[P]>
  }




  export type BiometriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BiometriaWhereInput
    orderBy?: BiometriaOrderByWithAggregationInput | BiometriaOrderByWithAggregationInput[]
    by: BiometriaScalarFieldEnum[] | BiometriaScalarFieldEnum
    having?: BiometriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiometriaCountAggregateInputType | true
    _avg?: BiometriaAvgAggregateInputType
    _sum?: BiometriaSumAggregateInputType
    _min?: BiometriaMinAggregateInputType
    _max?: BiometriaMaxAggregateInputType
  }

  export type BiometriaGroupByOutputType = {
    id: string
    tanque_id: string
    data_amostra: Date
    idade_lote_dias: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo: number | null
    peso_maximo: number | null
    comprimento_medio_cm: number
    comprimento_minimo: number | null
    comprimento_maximo: number | null
    altura_minima: number | null
    altura_maxima: number | null
    desvio_padrao_peso: number | null
    desvio_padrao_comprimento: number | null
    observacoes: string | null
    recomendacoes: string | null
    responsavel_id: string | null
    _count: BiometriaCountAggregateOutputType | null
    _avg: BiometriaAvgAggregateOutputType | null
    _sum: BiometriaSumAggregateOutputType | null
    _min: BiometriaMinAggregateOutputType | null
    _max: BiometriaMaxAggregateOutputType | null
  }

  type GetBiometriaGroupByPayload<T extends BiometriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiometriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiometriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiometriaGroupByOutputType[P]>
            : GetScalarType<T[P], BiometriaGroupByOutputType[P]>
        }
      >
    >


  export type BiometriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_amostra?: boolean
    idade_lote_dias?: boolean
    tamanho_amostra?: boolean
    peso_total_kg?: boolean
    peso_minimo?: boolean
    peso_maximo?: boolean
    comprimento_medio_cm?: boolean
    comprimento_minimo?: boolean
    comprimento_maximo?: boolean
    altura_minima?: boolean
    altura_maxima?: boolean
    desvio_padrao_peso?: boolean
    desvio_padrao_comprimento?: boolean
    observacoes?: boolean
    recomendacoes?: boolean
    responsavel_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | Biometria$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["biometria"]>

  export type BiometriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_amostra?: boolean
    idade_lote_dias?: boolean
    tamanho_amostra?: boolean
    peso_total_kg?: boolean
    peso_minimo?: boolean
    peso_maximo?: boolean
    comprimento_medio_cm?: boolean
    comprimento_minimo?: boolean
    comprimento_maximo?: boolean
    altura_minima?: boolean
    altura_maxima?: boolean
    desvio_padrao_peso?: boolean
    desvio_padrao_comprimento?: boolean
    observacoes?: boolean
    recomendacoes?: boolean
    responsavel_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | Biometria$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["biometria"]>

  export type BiometriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_amostra?: boolean
    idade_lote_dias?: boolean
    tamanho_amostra?: boolean
    peso_total_kg?: boolean
    peso_minimo?: boolean
    peso_maximo?: boolean
    comprimento_medio_cm?: boolean
    comprimento_minimo?: boolean
    comprimento_maximo?: boolean
    altura_minima?: boolean
    altura_maxima?: boolean
    desvio_padrao_peso?: boolean
    desvio_padrao_comprimento?: boolean
    observacoes?: boolean
    recomendacoes?: boolean
    responsavel_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | Biometria$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["biometria"]>

  export type BiometriaSelectScalar = {
    id?: boolean
    tanque_id?: boolean
    data_amostra?: boolean
    idade_lote_dias?: boolean
    tamanho_amostra?: boolean
    peso_total_kg?: boolean
    peso_minimo?: boolean
    peso_maximo?: boolean
    comprimento_medio_cm?: boolean
    comprimento_minimo?: boolean
    comprimento_maximo?: boolean
    altura_minima?: boolean
    altura_maxima?: boolean
    desvio_padrao_peso?: boolean
    desvio_padrao_comprimento?: boolean
    observacoes?: boolean
    recomendacoes?: boolean
    responsavel_id?: boolean
  }

  export type BiometriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanque_id" | "data_amostra" | "idade_lote_dias" | "tamanho_amostra" | "peso_total_kg" | "peso_minimo" | "peso_maximo" | "comprimento_medio_cm" | "comprimento_minimo" | "comprimento_maximo" | "altura_minima" | "altura_maxima" | "desvio_padrao_peso" | "desvio_padrao_comprimento" | "observacoes" | "recomendacoes" | "responsavel_id", ExtArgs["result"]["biometria"]>
  export type BiometriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | Biometria$responsavelArgs<ExtArgs>
  }
  export type BiometriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | Biometria$responsavelArgs<ExtArgs>
  }
  export type BiometriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | Biometria$responsavelArgs<ExtArgs>
  }

  export type $BiometriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Biometria"
    objects: {
      tanque: Prisma.$TanquePayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanque_id: string
      data_amostra: Date
      idade_lote_dias: number | null
      tamanho_amostra: number
      peso_total_kg: number
      peso_minimo: number | null
      peso_maximo: number | null
      comprimento_medio_cm: number
      comprimento_minimo: number | null
      comprimento_maximo: number | null
      altura_minima: number | null
      altura_maxima: number | null
      desvio_padrao_peso: number | null
      desvio_padrao_comprimento: number | null
      observacoes: string | null
      recomendacoes: string | null
      responsavel_id: string | null
    }, ExtArgs["result"]["biometria"]>
    composites: {}
  }

  type BiometriaGetPayload<S extends boolean | null | undefined | BiometriaDefaultArgs> = $Result.GetResult<Prisma.$BiometriaPayload, S>

  type BiometriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BiometriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BiometriaCountAggregateInputType | true
    }

  export interface BiometriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Biometria'], meta: { name: 'Biometria' } }
    /**
     * Find zero or one Biometria that matches the filter.
     * @param {BiometriaFindUniqueArgs} args - Arguments to find a Biometria
     * @example
     * // Get one Biometria
     * const biometria = await prisma.biometria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BiometriaFindUniqueArgs>(args: SelectSubset<T, BiometriaFindUniqueArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Biometria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BiometriaFindUniqueOrThrowArgs} args - Arguments to find a Biometria
     * @example
     * // Get one Biometria
     * const biometria = await prisma.biometria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BiometriaFindUniqueOrThrowArgs>(args: SelectSubset<T, BiometriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Biometria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaFindFirstArgs} args - Arguments to find a Biometria
     * @example
     * // Get one Biometria
     * const biometria = await prisma.biometria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BiometriaFindFirstArgs>(args?: SelectSubset<T, BiometriaFindFirstArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Biometria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaFindFirstOrThrowArgs} args - Arguments to find a Biometria
     * @example
     * // Get one Biometria
     * const biometria = await prisma.biometria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BiometriaFindFirstOrThrowArgs>(args?: SelectSubset<T, BiometriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Biometrias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Biometrias
     * const biometrias = await prisma.biometria.findMany()
     * 
     * // Get first 10 Biometrias
     * const biometrias = await prisma.biometria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const biometriaWithIdOnly = await prisma.biometria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BiometriaFindManyArgs>(args?: SelectSubset<T, BiometriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Biometria.
     * @param {BiometriaCreateArgs} args - Arguments to create a Biometria.
     * @example
     * // Create one Biometria
     * const Biometria = await prisma.biometria.create({
     *   data: {
     *     // ... data to create a Biometria
     *   }
     * })
     * 
     */
    create<T extends BiometriaCreateArgs>(args: SelectSubset<T, BiometriaCreateArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Biometrias.
     * @param {BiometriaCreateManyArgs} args - Arguments to create many Biometrias.
     * @example
     * // Create many Biometrias
     * const biometria = await prisma.biometria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BiometriaCreateManyArgs>(args?: SelectSubset<T, BiometriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Biometrias and returns the data saved in the database.
     * @param {BiometriaCreateManyAndReturnArgs} args - Arguments to create many Biometrias.
     * @example
     * // Create many Biometrias
     * const biometria = await prisma.biometria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Biometrias and only return the `id`
     * const biometriaWithIdOnly = await prisma.biometria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BiometriaCreateManyAndReturnArgs>(args?: SelectSubset<T, BiometriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Biometria.
     * @param {BiometriaDeleteArgs} args - Arguments to delete one Biometria.
     * @example
     * // Delete one Biometria
     * const Biometria = await prisma.biometria.delete({
     *   where: {
     *     // ... filter to delete one Biometria
     *   }
     * })
     * 
     */
    delete<T extends BiometriaDeleteArgs>(args: SelectSubset<T, BiometriaDeleteArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Biometria.
     * @param {BiometriaUpdateArgs} args - Arguments to update one Biometria.
     * @example
     * // Update one Biometria
     * const biometria = await prisma.biometria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BiometriaUpdateArgs>(args: SelectSubset<T, BiometriaUpdateArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Biometrias.
     * @param {BiometriaDeleteManyArgs} args - Arguments to filter Biometrias to delete.
     * @example
     * // Delete a few Biometrias
     * const { count } = await prisma.biometria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BiometriaDeleteManyArgs>(args?: SelectSubset<T, BiometriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biometrias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Biometrias
     * const biometria = await prisma.biometria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BiometriaUpdateManyArgs>(args: SelectSubset<T, BiometriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biometrias and returns the data updated in the database.
     * @param {BiometriaUpdateManyAndReturnArgs} args - Arguments to update many Biometrias.
     * @example
     * // Update many Biometrias
     * const biometria = await prisma.biometria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Biometrias and only return the `id`
     * const biometriaWithIdOnly = await prisma.biometria.updateManyAndReturn({
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
    updateManyAndReturn<T extends BiometriaUpdateManyAndReturnArgs>(args: SelectSubset<T, BiometriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Biometria.
     * @param {BiometriaUpsertArgs} args - Arguments to update or create a Biometria.
     * @example
     * // Update or create a Biometria
     * const biometria = await prisma.biometria.upsert({
     *   create: {
     *     // ... data to create a Biometria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Biometria we want to update
     *   }
     * })
     */
    upsert<T extends BiometriaUpsertArgs>(args: SelectSubset<T, BiometriaUpsertArgs<ExtArgs>>): Prisma__BiometriaClient<$Result.GetResult<Prisma.$BiometriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Biometrias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaCountArgs} args - Arguments to filter Biometrias to count.
     * @example
     * // Count the number of Biometrias
     * const count = await prisma.biometria.count({
     *   where: {
     *     // ... the filter for the Biometrias we want to count
     *   }
     * })
    **/
    count<T extends BiometriaCountArgs>(
      args?: Subset<T, BiometriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiometriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Biometria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BiometriaAggregateArgs>(args: Subset<T, BiometriaAggregateArgs>): Prisma.PrismaPromise<GetBiometriaAggregateType<T>>

    /**
     * Group by Biometria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiometriaGroupByArgs} args - Group by arguments.
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
      T extends BiometriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BiometriaGroupByArgs['orderBy'] }
        : { orderBy?: BiometriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BiometriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiometriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Biometria model
   */
  readonly fields: BiometriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Biometria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BiometriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends Biometria$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, Biometria$responsavelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Biometria model
   */
  interface BiometriaFieldRefs {
    readonly id: FieldRef<"Biometria", 'String'>
    readonly tanque_id: FieldRef<"Biometria", 'String'>
    readonly data_amostra: FieldRef<"Biometria", 'DateTime'>
    readonly idade_lote_dias: FieldRef<"Biometria", 'Int'>
    readonly tamanho_amostra: FieldRef<"Biometria", 'Int'>
    readonly peso_total_kg: FieldRef<"Biometria", 'Float'>
    readonly peso_minimo: FieldRef<"Biometria", 'Float'>
    readonly peso_maximo: FieldRef<"Biometria", 'Float'>
    readonly comprimento_medio_cm: FieldRef<"Biometria", 'Float'>
    readonly comprimento_minimo: FieldRef<"Biometria", 'Float'>
    readonly comprimento_maximo: FieldRef<"Biometria", 'Float'>
    readonly altura_minima: FieldRef<"Biometria", 'Float'>
    readonly altura_maxima: FieldRef<"Biometria", 'Float'>
    readonly desvio_padrao_peso: FieldRef<"Biometria", 'Float'>
    readonly desvio_padrao_comprimento: FieldRef<"Biometria", 'Float'>
    readonly observacoes: FieldRef<"Biometria", 'String'>
    readonly recomendacoes: FieldRef<"Biometria", 'String'>
    readonly responsavel_id: FieldRef<"Biometria", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Biometria findUnique
   */
  export type BiometriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * Filter, which Biometria to fetch.
     */
    where: BiometriaWhereUniqueInput
  }

  /**
   * Biometria findUniqueOrThrow
   */
  export type BiometriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * Filter, which Biometria to fetch.
     */
    where: BiometriaWhereUniqueInput
  }

  /**
   * Biometria findFirst
   */
  export type BiometriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * Filter, which Biometria to fetch.
     */
    where?: BiometriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biometrias to fetch.
     */
    orderBy?: BiometriaOrderByWithRelationInput | BiometriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Biometrias.
     */
    cursor?: BiometriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biometrias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biometrias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Biometrias.
     */
    distinct?: BiometriaScalarFieldEnum | BiometriaScalarFieldEnum[]
  }

  /**
   * Biometria findFirstOrThrow
   */
  export type BiometriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * Filter, which Biometria to fetch.
     */
    where?: BiometriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biometrias to fetch.
     */
    orderBy?: BiometriaOrderByWithRelationInput | BiometriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Biometrias.
     */
    cursor?: BiometriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biometrias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biometrias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Biometrias.
     */
    distinct?: BiometriaScalarFieldEnum | BiometriaScalarFieldEnum[]
  }

  /**
   * Biometria findMany
   */
  export type BiometriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * Filter, which Biometrias to fetch.
     */
    where?: BiometriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Biometrias to fetch.
     */
    orderBy?: BiometriaOrderByWithRelationInput | BiometriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Biometrias.
     */
    cursor?: BiometriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Biometrias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Biometrias.
     */
    skip?: number
    distinct?: BiometriaScalarFieldEnum | BiometriaScalarFieldEnum[]
  }

  /**
   * Biometria create
   */
  export type BiometriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Biometria.
     */
    data: XOR<BiometriaCreateInput, BiometriaUncheckedCreateInput>
  }

  /**
   * Biometria createMany
   */
  export type BiometriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Biometrias.
     */
    data: BiometriaCreateManyInput | BiometriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Biometria createManyAndReturn
   */
  export type BiometriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * The data used to create many Biometrias.
     */
    data: BiometriaCreateManyInput | BiometriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Biometria update
   */
  export type BiometriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Biometria.
     */
    data: XOR<BiometriaUpdateInput, BiometriaUncheckedUpdateInput>
    /**
     * Choose, which Biometria to update.
     */
    where: BiometriaWhereUniqueInput
  }

  /**
   * Biometria updateMany
   */
  export type BiometriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Biometrias.
     */
    data: XOR<BiometriaUpdateManyMutationInput, BiometriaUncheckedUpdateManyInput>
    /**
     * Filter which Biometrias to update
     */
    where?: BiometriaWhereInput
    /**
     * Limit how many Biometrias to update.
     */
    limit?: number
  }

  /**
   * Biometria updateManyAndReturn
   */
  export type BiometriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * The data used to update Biometrias.
     */
    data: XOR<BiometriaUpdateManyMutationInput, BiometriaUncheckedUpdateManyInput>
    /**
     * Filter which Biometrias to update
     */
    where?: BiometriaWhereInput
    /**
     * Limit how many Biometrias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Biometria upsert
   */
  export type BiometriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Biometria to update in case it exists.
     */
    where: BiometriaWhereUniqueInput
    /**
     * In case the Biometria found by the `where` argument doesn't exist, create a new Biometria with this data.
     */
    create: XOR<BiometriaCreateInput, BiometriaUncheckedCreateInput>
    /**
     * In case the Biometria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BiometriaUpdateInput, BiometriaUncheckedUpdateInput>
  }

  /**
   * Biometria delete
   */
  export type BiometriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
    /**
     * Filter which Biometria to delete.
     */
    where: BiometriaWhereUniqueInput
  }

  /**
   * Biometria deleteMany
   */
  export type BiometriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Biometrias to delete
     */
    where?: BiometriaWhereInput
    /**
     * Limit how many Biometrias to delete.
     */
    limit?: number
  }

  /**
   * Biometria.responsavel
   */
  export type Biometria$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Biometria without action
   */
  export type BiometriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Biometria
     */
    select?: BiometriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Biometria
     */
    omit?: BiometriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BiometriaInclude<ExtArgs> | null
  }


  /**
   * Model QualidadeAgua
   */

  export type AggregateQualidadeAgua = {
    _count: QualidadeAguaCountAggregateOutputType | null
    _avg: QualidadeAguaAvgAggregateOutputType | null
    _sum: QualidadeAguaSumAggregateOutputType | null
    _min: QualidadeAguaMinAggregateOutputType | null
    _max: QualidadeAguaMaxAggregateOutputType | null
  }

  export type QualidadeAguaAvgAggregateOutputType = {
    oxigenio_dissolvido: number | null
    ph: number | null
    amonia: number | null
    nitrito: number | null
    nitrato: number | null
    tds: number | null
    orp: number | null
    ec: number | null
    salppm: number | null
    sal: number | null
    sg: number | null
    temperatura: number | null
    transparencia_cm: number | null
  }

  export type QualidadeAguaSumAggregateOutputType = {
    oxigenio_dissolvido: number | null
    ph: number | null
    amonia: number | null
    nitrito: number | null
    nitrato: number | null
    tds: number | null
    orp: number | null
    ec: number | null
    salppm: number | null
    sal: number | null
    sg: number | null
    temperatura: number | null
    transparencia_cm: number | null
  }

  export type QualidadeAguaMinAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data_analise: Date | null
    hora_coleta: string | null
    fonte_agua: string | null
    metodo_coleta: string | null
    oxigenio_dissolvido: number | null
    ph: number | null
    amonia: number | null
    nitrito: number | null
    nitrato: number | null
    tds: number | null
    orp: number | null
    ec: number | null
    salppm: number | null
    sal: number | null
    sg: number | null
    temperatura: number | null
    transparencia_cm: number | null
    notas: string | null
    responsavel_id: string | null
  }

  export type QualidadeAguaMaxAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data_analise: Date | null
    hora_coleta: string | null
    fonte_agua: string | null
    metodo_coleta: string | null
    oxigenio_dissolvido: number | null
    ph: number | null
    amonia: number | null
    nitrito: number | null
    nitrato: number | null
    tds: number | null
    orp: number | null
    ec: number | null
    salppm: number | null
    sal: number | null
    sg: number | null
    temperatura: number | null
    transparencia_cm: number | null
    notas: string | null
    responsavel_id: string | null
  }

  export type QualidadeAguaCountAggregateOutputType = {
    id: number
    tanque_id: number
    data_analise: number
    hora_coleta: number
    fonte_agua: number
    metodo_coleta: number
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato: number
    tds: number
    orp: number
    ec: number
    salppm: number
    sal: number
    sg: number
    temperatura: number
    transparencia_cm: number
    notas: number
    responsavel_id: number
    _all: number
  }


  export type QualidadeAguaAvgAggregateInputType = {
    oxigenio_dissolvido?: true
    ph?: true
    amonia?: true
    nitrito?: true
    nitrato?: true
    tds?: true
    orp?: true
    ec?: true
    salppm?: true
    sal?: true
    sg?: true
    temperatura?: true
    transparencia_cm?: true
  }

  export type QualidadeAguaSumAggregateInputType = {
    oxigenio_dissolvido?: true
    ph?: true
    amonia?: true
    nitrito?: true
    nitrato?: true
    tds?: true
    orp?: true
    ec?: true
    salppm?: true
    sal?: true
    sg?: true
    temperatura?: true
    transparencia_cm?: true
  }

  export type QualidadeAguaMinAggregateInputType = {
    id?: true
    tanque_id?: true
    data_analise?: true
    hora_coleta?: true
    fonte_agua?: true
    metodo_coleta?: true
    oxigenio_dissolvido?: true
    ph?: true
    amonia?: true
    nitrito?: true
    nitrato?: true
    tds?: true
    orp?: true
    ec?: true
    salppm?: true
    sal?: true
    sg?: true
    temperatura?: true
    transparencia_cm?: true
    notas?: true
    responsavel_id?: true
  }

  export type QualidadeAguaMaxAggregateInputType = {
    id?: true
    tanque_id?: true
    data_analise?: true
    hora_coleta?: true
    fonte_agua?: true
    metodo_coleta?: true
    oxigenio_dissolvido?: true
    ph?: true
    amonia?: true
    nitrito?: true
    nitrato?: true
    tds?: true
    orp?: true
    ec?: true
    salppm?: true
    sal?: true
    sg?: true
    temperatura?: true
    transparencia_cm?: true
    notas?: true
    responsavel_id?: true
  }

  export type QualidadeAguaCountAggregateInputType = {
    id?: true
    tanque_id?: true
    data_analise?: true
    hora_coleta?: true
    fonte_agua?: true
    metodo_coleta?: true
    oxigenio_dissolvido?: true
    ph?: true
    amonia?: true
    nitrito?: true
    nitrato?: true
    tds?: true
    orp?: true
    ec?: true
    salppm?: true
    sal?: true
    sg?: true
    temperatura?: true
    transparencia_cm?: true
    notas?: true
    responsavel_id?: true
    _all?: true
  }

  export type QualidadeAguaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualidadeAgua to aggregate.
     */
    where?: QualidadeAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualidadeAguas to fetch.
     */
    orderBy?: QualidadeAguaOrderByWithRelationInput | QualidadeAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QualidadeAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualidadeAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualidadeAguas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QualidadeAguas
    **/
    _count?: true | QualidadeAguaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QualidadeAguaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QualidadeAguaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QualidadeAguaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QualidadeAguaMaxAggregateInputType
  }

  export type GetQualidadeAguaAggregateType<T extends QualidadeAguaAggregateArgs> = {
        [P in keyof T & keyof AggregateQualidadeAgua]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQualidadeAgua[P]>
      : GetScalarType<T[P], AggregateQualidadeAgua[P]>
  }




  export type QualidadeAguaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QualidadeAguaWhereInput
    orderBy?: QualidadeAguaOrderByWithAggregationInput | QualidadeAguaOrderByWithAggregationInput[]
    by: QualidadeAguaScalarFieldEnum[] | QualidadeAguaScalarFieldEnum
    having?: QualidadeAguaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QualidadeAguaCountAggregateInputType | true
    _avg?: QualidadeAguaAvgAggregateInputType
    _sum?: QualidadeAguaSumAggregateInputType
    _min?: QualidadeAguaMinAggregateInputType
    _max?: QualidadeAguaMaxAggregateInputType
  }

  export type QualidadeAguaGroupByOutputType = {
    id: string
    tanque_id: string
    data_analise: Date
    hora_coleta: string | null
    fonte_agua: string | null
    metodo_coleta: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato: number | null
    tds: number | null
    orp: number | null
    ec: number | null
    salppm: number | null
    sal: number | null
    sg: number | null
    temperatura: number
    transparencia_cm: number
    notas: string | null
    responsavel_id: string | null
    _count: QualidadeAguaCountAggregateOutputType | null
    _avg: QualidadeAguaAvgAggregateOutputType | null
    _sum: QualidadeAguaSumAggregateOutputType | null
    _min: QualidadeAguaMinAggregateOutputType | null
    _max: QualidadeAguaMaxAggregateOutputType | null
  }

  type GetQualidadeAguaGroupByPayload<T extends QualidadeAguaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QualidadeAguaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QualidadeAguaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QualidadeAguaGroupByOutputType[P]>
            : GetScalarType<T[P], QualidadeAguaGroupByOutputType[P]>
        }
      >
    >


  export type QualidadeAguaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_analise?: boolean
    hora_coleta?: boolean
    fonte_agua?: boolean
    metodo_coleta?: boolean
    oxigenio_dissolvido?: boolean
    ph?: boolean
    amonia?: boolean
    nitrito?: boolean
    nitrato?: boolean
    tds?: boolean
    orp?: boolean
    ec?: boolean
    salppm?: boolean
    sal?: boolean
    sg?: boolean
    temperatura?: boolean
    transparencia_cm?: boolean
    notas?: boolean
    responsavel_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | QualidadeAgua$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["qualidadeAgua"]>

  export type QualidadeAguaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_analise?: boolean
    hora_coleta?: boolean
    fonte_agua?: boolean
    metodo_coleta?: boolean
    oxigenio_dissolvido?: boolean
    ph?: boolean
    amonia?: boolean
    nitrito?: boolean
    nitrato?: boolean
    tds?: boolean
    orp?: boolean
    ec?: boolean
    salppm?: boolean
    sal?: boolean
    sg?: boolean
    temperatura?: boolean
    transparencia_cm?: boolean
    notas?: boolean
    responsavel_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | QualidadeAgua$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["qualidadeAgua"]>

  export type QualidadeAguaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_analise?: boolean
    hora_coleta?: boolean
    fonte_agua?: boolean
    metodo_coleta?: boolean
    oxigenio_dissolvido?: boolean
    ph?: boolean
    amonia?: boolean
    nitrito?: boolean
    nitrato?: boolean
    tds?: boolean
    orp?: boolean
    ec?: boolean
    salppm?: boolean
    sal?: boolean
    sg?: boolean
    temperatura?: boolean
    transparencia_cm?: boolean
    notas?: boolean
    responsavel_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | QualidadeAgua$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["qualidadeAgua"]>

  export type QualidadeAguaSelectScalar = {
    id?: boolean
    tanque_id?: boolean
    data_analise?: boolean
    hora_coleta?: boolean
    fonte_agua?: boolean
    metodo_coleta?: boolean
    oxigenio_dissolvido?: boolean
    ph?: boolean
    amonia?: boolean
    nitrito?: boolean
    nitrato?: boolean
    tds?: boolean
    orp?: boolean
    ec?: boolean
    salppm?: boolean
    sal?: boolean
    sg?: boolean
    temperatura?: boolean
    transparencia_cm?: boolean
    notas?: boolean
    responsavel_id?: boolean
  }

  export type QualidadeAguaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanque_id" | "data_analise" | "hora_coleta" | "fonte_agua" | "metodo_coleta" | "oxigenio_dissolvido" | "ph" | "amonia" | "nitrito" | "nitrato" | "tds" | "orp" | "ec" | "salppm" | "sal" | "sg" | "temperatura" | "transparencia_cm" | "notas" | "responsavel_id", ExtArgs["result"]["qualidadeAgua"]>
  export type QualidadeAguaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | QualidadeAgua$responsavelArgs<ExtArgs>
  }
  export type QualidadeAguaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | QualidadeAgua$responsavelArgs<ExtArgs>
  }
  export type QualidadeAguaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | QualidadeAgua$responsavelArgs<ExtArgs>
  }

  export type $QualidadeAguaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QualidadeAgua"
    objects: {
      tanque: Prisma.$TanquePayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanque_id: string
      data_analise: Date
      hora_coleta: string | null
      fonte_agua: string | null
      metodo_coleta: string | null
      oxigenio_dissolvido: number
      ph: number
      amonia: number
      nitrito: number
      nitrato: number | null
      tds: number | null
      orp: number | null
      ec: number | null
      salppm: number | null
      sal: number | null
      sg: number | null
      temperatura: number
      transparencia_cm: number
      notas: string | null
      responsavel_id: string | null
    }, ExtArgs["result"]["qualidadeAgua"]>
    composites: {}
  }

  type QualidadeAguaGetPayload<S extends boolean | null | undefined | QualidadeAguaDefaultArgs> = $Result.GetResult<Prisma.$QualidadeAguaPayload, S>

  type QualidadeAguaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QualidadeAguaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QualidadeAguaCountAggregateInputType | true
    }

  export interface QualidadeAguaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QualidadeAgua'], meta: { name: 'QualidadeAgua' } }
    /**
     * Find zero or one QualidadeAgua that matches the filter.
     * @param {QualidadeAguaFindUniqueArgs} args - Arguments to find a QualidadeAgua
     * @example
     * // Get one QualidadeAgua
     * const qualidadeAgua = await prisma.qualidadeAgua.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QualidadeAguaFindUniqueArgs>(args: SelectSubset<T, QualidadeAguaFindUniqueArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QualidadeAgua that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QualidadeAguaFindUniqueOrThrowArgs} args - Arguments to find a QualidadeAgua
     * @example
     * // Get one QualidadeAgua
     * const qualidadeAgua = await prisma.qualidadeAgua.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QualidadeAguaFindUniqueOrThrowArgs>(args: SelectSubset<T, QualidadeAguaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualidadeAgua that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaFindFirstArgs} args - Arguments to find a QualidadeAgua
     * @example
     * // Get one QualidadeAgua
     * const qualidadeAgua = await prisma.qualidadeAgua.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QualidadeAguaFindFirstArgs>(args?: SelectSubset<T, QualidadeAguaFindFirstArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QualidadeAgua that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaFindFirstOrThrowArgs} args - Arguments to find a QualidadeAgua
     * @example
     * // Get one QualidadeAgua
     * const qualidadeAgua = await prisma.qualidadeAgua.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QualidadeAguaFindFirstOrThrowArgs>(args?: SelectSubset<T, QualidadeAguaFindFirstOrThrowArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QualidadeAguas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QualidadeAguas
     * const qualidadeAguas = await prisma.qualidadeAgua.findMany()
     * 
     * // Get first 10 QualidadeAguas
     * const qualidadeAguas = await prisma.qualidadeAgua.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qualidadeAguaWithIdOnly = await prisma.qualidadeAgua.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QualidadeAguaFindManyArgs>(args?: SelectSubset<T, QualidadeAguaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QualidadeAgua.
     * @param {QualidadeAguaCreateArgs} args - Arguments to create a QualidadeAgua.
     * @example
     * // Create one QualidadeAgua
     * const QualidadeAgua = await prisma.qualidadeAgua.create({
     *   data: {
     *     // ... data to create a QualidadeAgua
     *   }
     * })
     * 
     */
    create<T extends QualidadeAguaCreateArgs>(args: SelectSubset<T, QualidadeAguaCreateArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QualidadeAguas.
     * @param {QualidadeAguaCreateManyArgs} args - Arguments to create many QualidadeAguas.
     * @example
     * // Create many QualidadeAguas
     * const qualidadeAgua = await prisma.qualidadeAgua.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QualidadeAguaCreateManyArgs>(args?: SelectSubset<T, QualidadeAguaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QualidadeAguas and returns the data saved in the database.
     * @param {QualidadeAguaCreateManyAndReturnArgs} args - Arguments to create many QualidadeAguas.
     * @example
     * // Create many QualidadeAguas
     * const qualidadeAgua = await prisma.qualidadeAgua.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QualidadeAguas and only return the `id`
     * const qualidadeAguaWithIdOnly = await prisma.qualidadeAgua.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QualidadeAguaCreateManyAndReturnArgs>(args?: SelectSubset<T, QualidadeAguaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QualidadeAgua.
     * @param {QualidadeAguaDeleteArgs} args - Arguments to delete one QualidadeAgua.
     * @example
     * // Delete one QualidadeAgua
     * const QualidadeAgua = await prisma.qualidadeAgua.delete({
     *   where: {
     *     // ... filter to delete one QualidadeAgua
     *   }
     * })
     * 
     */
    delete<T extends QualidadeAguaDeleteArgs>(args: SelectSubset<T, QualidadeAguaDeleteArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QualidadeAgua.
     * @param {QualidadeAguaUpdateArgs} args - Arguments to update one QualidadeAgua.
     * @example
     * // Update one QualidadeAgua
     * const qualidadeAgua = await prisma.qualidadeAgua.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QualidadeAguaUpdateArgs>(args: SelectSubset<T, QualidadeAguaUpdateArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QualidadeAguas.
     * @param {QualidadeAguaDeleteManyArgs} args - Arguments to filter QualidadeAguas to delete.
     * @example
     * // Delete a few QualidadeAguas
     * const { count } = await prisma.qualidadeAgua.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QualidadeAguaDeleteManyArgs>(args?: SelectSubset<T, QualidadeAguaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualidadeAguas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QualidadeAguas
     * const qualidadeAgua = await prisma.qualidadeAgua.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QualidadeAguaUpdateManyArgs>(args: SelectSubset<T, QualidadeAguaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QualidadeAguas and returns the data updated in the database.
     * @param {QualidadeAguaUpdateManyAndReturnArgs} args - Arguments to update many QualidadeAguas.
     * @example
     * // Update many QualidadeAguas
     * const qualidadeAgua = await prisma.qualidadeAgua.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QualidadeAguas and only return the `id`
     * const qualidadeAguaWithIdOnly = await prisma.qualidadeAgua.updateManyAndReturn({
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
    updateManyAndReturn<T extends QualidadeAguaUpdateManyAndReturnArgs>(args: SelectSubset<T, QualidadeAguaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QualidadeAgua.
     * @param {QualidadeAguaUpsertArgs} args - Arguments to update or create a QualidadeAgua.
     * @example
     * // Update or create a QualidadeAgua
     * const qualidadeAgua = await prisma.qualidadeAgua.upsert({
     *   create: {
     *     // ... data to create a QualidadeAgua
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QualidadeAgua we want to update
     *   }
     * })
     */
    upsert<T extends QualidadeAguaUpsertArgs>(args: SelectSubset<T, QualidadeAguaUpsertArgs<ExtArgs>>): Prisma__QualidadeAguaClient<$Result.GetResult<Prisma.$QualidadeAguaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QualidadeAguas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaCountArgs} args - Arguments to filter QualidadeAguas to count.
     * @example
     * // Count the number of QualidadeAguas
     * const count = await prisma.qualidadeAgua.count({
     *   where: {
     *     // ... the filter for the QualidadeAguas we want to count
     *   }
     * })
    **/
    count<T extends QualidadeAguaCountArgs>(
      args?: Subset<T, QualidadeAguaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QualidadeAguaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QualidadeAgua.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QualidadeAguaAggregateArgs>(args: Subset<T, QualidadeAguaAggregateArgs>): Prisma.PrismaPromise<GetQualidadeAguaAggregateType<T>>

    /**
     * Group by QualidadeAgua.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QualidadeAguaGroupByArgs} args - Group by arguments.
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
      T extends QualidadeAguaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QualidadeAguaGroupByArgs['orderBy'] }
        : { orderBy?: QualidadeAguaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QualidadeAguaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQualidadeAguaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QualidadeAgua model
   */
  readonly fields: QualidadeAguaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QualidadeAgua.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QualidadeAguaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends QualidadeAgua$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, QualidadeAgua$responsavelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the QualidadeAgua model
   */
  interface QualidadeAguaFieldRefs {
    readonly id: FieldRef<"QualidadeAgua", 'String'>
    readonly tanque_id: FieldRef<"QualidadeAgua", 'String'>
    readonly data_analise: FieldRef<"QualidadeAgua", 'DateTime'>
    readonly hora_coleta: FieldRef<"QualidadeAgua", 'String'>
    readonly fonte_agua: FieldRef<"QualidadeAgua", 'String'>
    readonly metodo_coleta: FieldRef<"QualidadeAgua", 'String'>
    readonly oxigenio_dissolvido: FieldRef<"QualidadeAgua", 'Float'>
    readonly ph: FieldRef<"QualidadeAgua", 'Float'>
    readonly amonia: FieldRef<"QualidadeAgua", 'Float'>
    readonly nitrito: FieldRef<"QualidadeAgua", 'Float'>
    readonly nitrato: FieldRef<"QualidadeAgua", 'Float'>
    readonly tds: FieldRef<"QualidadeAgua", 'Float'>
    readonly orp: FieldRef<"QualidadeAgua", 'Float'>
    readonly ec: FieldRef<"QualidadeAgua", 'Float'>
    readonly salppm: FieldRef<"QualidadeAgua", 'Float'>
    readonly sal: FieldRef<"QualidadeAgua", 'Float'>
    readonly sg: FieldRef<"QualidadeAgua", 'Float'>
    readonly temperatura: FieldRef<"QualidadeAgua", 'Float'>
    readonly transparencia_cm: FieldRef<"QualidadeAgua", 'Int'>
    readonly notas: FieldRef<"QualidadeAgua", 'String'>
    readonly responsavel_id: FieldRef<"QualidadeAgua", 'String'>
  }
    

  // Custom InputTypes
  /**
   * QualidadeAgua findUnique
   */
  export type QualidadeAguaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * Filter, which QualidadeAgua to fetch.
     */
    where: QualidadeAguaWhereUniqueInput
  }

  /**
   * QualidadeAgua findUniqueOrThrow
   */
  export type QualidadeAguaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * Filter, which QualidadeAgua to fetch.
     */
    where: QualidadeAguaWhereUniqueInput
  }

  /**
   * QualidadeAgua findFirst
   */
  export type QualidadeAguaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * Filter, which QualidadeAgua to fetch.
     */
    where?: QualidadeAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualidadeAguas to fetch.
     */
    orderBy?: QualidadeAguaOrderByWithRelationInput | QualidadeAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualidadeAguas.
     */
    cursor?: QualidadeAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualidadeAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualidadeAguas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualidadeAguas.
     */
    distinct?: QualidadeAguaScalarFieldEnum | QualidadeAguaScalarFieldEnum[]
  }

  /**
   * QualidadeAgua findFirstOrThrow
   */
  export type QualidadeAguaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * Filter, which QualidadeAgua to fetch.
     */
    where?: QualidadeAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualidadeAguas to fetch.
     */
    orderBy?: QualidadeAguaOrderByWithRelationInput | QualidadeAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QualidadeAguas.
     */
    cursor?: QualidadeAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualidadeAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualidadeAguas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QualidadeAguas.
     */
    distinct?: QualidadeAguaScalarFieldEnum | QualidadeAguaScalarFieldEnum[]
  }

  /**
   * QualidadeAgua findMany
   */
  export type QualidadeAguaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * Filter, which QualidadeAguas to fetch.
     */
    where?: QualidadeAguaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QualidadeAguas to fetch.
     */
    orderBy?: QualidadeAguaOrderByWithRelationInput | QualidadeAguaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QualidadeAguas.
     */
    cursor?: QualidadeAguaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QualidadeAguas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QualidadeAguas.
     */
    skip?: number
    distinct?: QualidadeAguaScalarFieldEnum | QualidadeAguaScalarFieldEnum[]
  }

  /**
   * QualidadeAgua create
   */
  export type QualidadeAguaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * The data needed to create a QualidadeAgua.
     */
    data: XOR<QualidadeAguaCreateInput, QualidadeAguaUncheckedCreateInput>
  }

  /**
   * QualidadeAgua createMany
   */
  export type QualidadeAguaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QualidadeAguas.
     */
    data: QualidadeAguaCreateManyInput | QualidadeAguaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QualidadeAgua createManyAndReturn
   */
  export type QualidadeAguaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * The data used to create many QualidadeAguas.
     */
    data: QualidadeAguaCreateManyInput | QualidadeAguaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualidadeAgua update
   */
  export type QualidadeAguaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * The data needed to update a QualidadeAgua.
     */
    data: XOR<QualidadeAguaUpdateInput, QualidadeAguaUncheckedUpdateInput>
    /**
     * Choose, which QualidadeAgua to update.
     */
    where: QualidadeAguaWhereUniqueInput
  }

  /**
   * QualidadeAgua updateMany
   */
  export type QualidadeAguaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QualidadeAguas.
     */
    data: XOR<QualidadeAguaUpdateManyMutationInput, QualidadeAguaUncheckedUpdateManyInput>
    /**
     * Filter which QualidadeAguas to update
     */
    where?: QualidadeAguaWhereInput
    /**
     * Limit how many QualidadeAguas to update.
     */
    limit?: number
  }

  /**
   * QualidadeAgua updateManyAndReturn
   */
  export type QualidadeAguaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * The data used to update QualidadeAguas.
     */
    data: XOR<QualidadeAguaUpdateManyMutationInput, QualidadeAguaUncheckedUpdateManyInput>
    /**
     * Filter which QualidadeAguas to update
     */
    where?: QualidadeAguaWhereInput
    /**
     * Limit how many QualidadeAguas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QualidadeAgua upsert
   */
  export type QualidadeAguaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * The filter to search for the QualidadeAgua to update in case it exists.
     */
    where: QualidadeAguaWhereUniqueInput
    /**
     * In case the QualidadeAgua found by the `where` argument doesn't exist, create a new QualidadeAgua with this data.
     */
    create: XOR<QualidadeAguaCreateInput, QualidadeAguaUncheckedCreateInput>
    /**
     * In case the QualidadeAgua was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QualidadeAguaUpdateInput, QualidadeAguaUncheckedUpdateInput>
  }

  /**
   * QualidadeAgua delete
   */
  export type QualidadeAguaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
    /**
     * Filter which QualidadeAgua to delete.
     */
    where: QualidadeAguaWhereUniqueInput
  }

  /**
   * QualidadeAgua deleteMany
   */
  export type QualidadeAguaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QualidadeAguas to delete
     */
    where?: QualidadeAguaWhereInput
    /**
     * Limit how many QualidadeAguas to delete.
     */
    limit?: number
  }

  /**
   * QualidadeAgua.responsavel
   */
  export type QualidadeAgua$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * QualidadeAgua without action
   */
  export type QualidadeAguaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QualidadeAgua
     */
    select?: QualidadeAguaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QualidadeAgua
     */
    omit?: QualidadeAguaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QualidadeAguaInclude<ExtArgs> | null
  }


  /**
   * Model RegistroSaude
   */

  export type AggregateRegistroSaude = {
    _count: RegistroSaudeCountAggregateOutputType | null
    _avg: RegistroSaudeAvgAggregateOutputType | null
    _sum: RegistroSaudeSumAggregateOutputType | null
    _min: RegistroSaudeMinAggregateOutputType | null
    _max: RegistroSaudeMaxAggregateOutputType | null
  }

  export type RegistroSaudeAvgAggregateOutputType = {
    percentual_afetado: number | null
    dias_tratamento: number | null
    dias_carencia: number | null
  }

  export type RegistroSaudeSumAggregateOutputType = {
    percentual_afetado: number | null
    dias_tratamento: number | null
    dias_carencia: number | null
  }

  export type RegistroSaudeMinAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data_registro: Date | null
    sintomas: string | null
    percentual_afetado: number | null
    diagnostico: string | null
    patologia_codigo: string | null
    produto: string | null
    dosagem: string | null
    dias_tratamento: number | null
    dias_carencia: number | null
    resultado: string | null
    data_diagnostico: Date | null
    usuario_id: string | null
  }

  export type RegistroSaudeMaxAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    data_registro: Date | null
    sintomas: string | null
    percentual_afetado: number | null
    diagnostico: string | null
    patologia_codigo: string | null
    produto: string | null
    dosagem: string | null
    dias_tratamento: number | null
    dias_carencia: number | null
    resultado: string | null
    data_diagnostico: Date | null
    usuario_id: string | null
  }

  export type RegistroSaudeCountAggregateOutputType = {
    id: number
    tanque_id: number
    data_registro: number
    sintomas: number
    percentual_afetado: number
    diagnostico: number
    patologia_codigo: number
    produto: number
    dosagem: number
    dias_tratamento: number
    dias_carencia: number
    resultado: number
    data_diagnostico: number
    usuario_id: number
    _all: number
  }


  export type RegistroSaudeAvgAggregateInputType = {
    percentual_afetado?: true
    dias_tratamento?: true
    dias_carencia?: true
  }

  export type RegistroSaudeSumAggregateInputType = {
    percentual_afetado?: true
    dias_tratamento?: true
    dias_carencia?: true
  }

  export type RegistroSaudeMinAggregateInputType = {
    id?: true
    tanque_id?: true
    data_registro?: true
    sintomas?: true
    percentual_afetado?: true
    diagnostico?: true
    patologia_codigo?: true
    produto?: true
    dosagem?: true
    dias_tratamento?: true
    dias_carencia?: true
    resultado?: true
    data_diagnostico?: true
    usuario_id?: true
  }

  export type RegistroSaudeMaxAggregateInputType = {
    id?: true
    tanque_id?: true
    data_registro?: true
    sintomas?: true
    percentual_afetado?: true
    diagnostico?: true
    patologia_codigo?: true
    produto?: true
    dosagem?: true
    dias_tratamento?: true
    dias_carencia?: true
    resultado?: true
    data_diagnostico?: true
    usuario_id?: true
  }

  export type RegistroSaudeCountAggregateInputType = {
    id?: true
    tanque_id?: true
    data_registro?: true
    sintomas?: true
    percentual_afetado?: true
    diagnostico?: true
    patologia_codigo?: true
    produto?: true
    dosagem?: true
    dias_tratamento?: true
    dias_carencia?: true
    resultado?: true
    data_diagnostico?: true
    usuario_id?: true
    _all?: true
  }

  export type RegistroSaudeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroSaude to aggregate.
     */
    where?: RegistroSaudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSaudes to fetch.
     */
    orderBy?: RegistroSaudeOrderByWithRelationInput | RegistroSaudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegistroSaudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSaudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSaudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegistroSaudes
    **/
    _count?: true | RegistroSaudeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegistroSaudeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegistroSaudeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegistroSaudeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegistroSaudeMaxAggregateInputType
  }

  export type GetRegistroSaudeAggregateType<T extends RegistroSaudeAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistroSaude]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistroSaude[P]>
      : GetScalarType<T[P], AggregateRegistroSaude[P]>
  }




  export type RegistroSaudeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegistroSaudeWhereInput
    orderBy?: RegistroSaudeOrderByWithAggregationInput | RegistroSaudeOrderByWithAggregationInput[]
    by: RegistroSaudeScalarFieldEnum[] | RegistroSaudeScalarFieldEnum
    having?: RegistroSaudeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegistroSaudeCountAggregateInputType | true
    _avg?: RegistroSaudeAvgAggregateInputType
    _sum?: RegistroSaudeSumAggregateInputType
    _min?: RegistroSaudeMinAggregateInputType
    _max?: RegistroSaudeMaxAggregateInputType
  }

  export type RegistroSaudeGroupByOutputType = {
    id: string
    tanque_id: string
    data_registro: Date
    sintomas: string | null
    percentual_afetado: number | null
    diagnostico: string | null
    patologia_codigo: string | null
    produto: string | null
    dosagem: string | null
    dias_tratamento: number | null
    dias_carencia: number | null
    resultado: string | null
    data_diagnostico: Date | null
    usuario_id: string | null
    _count: RegistroSaudeCountAggregateOutputType | null
    _avg: RegistroSaudeAvgAggregateOutputType | null
    _sum: RegistroSaudeSumAggregateOutputType | null
    _min: RegistroSaudeMinAggregateOutputType | null
    _max: RegistroSaudeMaxAggregateOutputType | null
  }

  type GetRegistroSaudeGroupByPayload<T extends RegistroSaudeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegistroSaudeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegistroSaudeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegistroSaudeGroupByOutputType[P]>
            : GetScalarType<T[P], RegistroSaudeGroupByOutputType[P]>
        }
      >
    >


  export type RegistroSaudeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_registro?: boolean
    sintomas?: boolean
    percentual_afetado?: boolean
    diagnostico?: boolean
    patologia_codigo?: boolean
    produto?: boolean
    dosagem?: boolean
    dias_tratamento?: boolean
    dias_carencia?: boolean
    resultado?: boolean
    data_diagnostico?: boolean
    usuario_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroSaude$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["registroSaude"]>

  export type RegistroSaudeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_registro?: boolean
    sintomas?: boolean
    percentual_afetado?: boolean
    diagnostico?: boolean
    patologia_codigo?: boolean
    produto?: boolean
    dosagem?: boolean
    dias_tratamento?: boolean
    dias_carencia?: boolean
    resultado?: boolean
    data_diagnostico?: boolean
    usuario_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroSaude$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["registroSaude"]>

  export type RegistroSaudeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    data_registro?: boolean
    sintomas?: boolean
    percentual_afetado?: boolean
    diagnostico?: boolean
    patologia_codigo?: boolean
    produto?: boolean
    dosagem?: boolean
    dias_tratamento?: boolean
    dias_carencia?: boolean
    resultado?: boolean
    data_diagnostico?: boolean
    usuario_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroSaude$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["registroSaude"]>

  export type RegistroSaudeSelectScalar = {
    id?: boolean
    tanque_id?: boolean
    data_registro?: boolean
    sintomas?: boolean
    percentual_afetado?: boolean
    diagnostico?: boolean
    patologia_codigo?: boolean
    produto?: boolean
    dosagem?: boolean
    dias_tratamento?: boolean
    dias_carencia?: boolean
    resultado?: boolean
    data_diagnostico?: boolean
    usuario_id?: boolean
  }

  export type RegistroSaudeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanque_id" | "data_registro" | "sintomas" | "percentual_afetado" | "diagnostico" | "patologia_codigo" | "produto" | "dosagem" | "dias_tratamento" | "dias_carencia" | "resultado" | "data_diagnostico" | "usuario_id", ExtArgs["result"]["registroSaude"]>
  export type RegistroSaudeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroSaude$responsavelArgs<ExtArgs>
  }
  export type RegistroSaudeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroSaude$responsavelArgs<ExtArgs>
  }
  export type RegistroSaudeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | RegistroSaude$responsavelArgs<ExtArgs>
  }

  export type $RegistroSaudePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegistroSaude"
    objects: {
      tanque: Prisma.$TanquePayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanque_id: string
      data_registro: Date
      sintomas: string | null
      percentual_afetado: number | null
      diagnostico: string | null
      patologia_codigo: string | null
      produto: string | null
      dosagem: string | null
      dias_tratamento: number | null
      dias_carencia: number | null
      resultado: string | null
      data_diagnostico: Date | null
      usuario_id: string | null
    }, ExtArgs["result"]["registroSaude"]>
    composites: {}
  }

  type RegistroSaudeGetPayload<S extends boolean | null | undefined | RegistroSaudeDefaultArgs> = $Result.GetResult<Prisma.$RegistroSaudePayload, S>

  type RegistroSaudeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegistroSaudeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegistroSaudeCountAggregateInputType | true
    }

  export interface RegistroSaudeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegistroSaude'], meta: { name: 'RegistroSaude' } }
    /**
     * Find zero or one RegistroSaude that matches the filter.
     * @param {RegistroSaudeFindUniqueArgs} args - Arguments to find a RegistroSaude
     * @example
     * // Get one RegistroSaude
     * const registroSaude = await prisma.registroSaude.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegistroSaudeFindUniqueArgs>(args: SelectSubset<T, RegistroSaudeFindUniqueArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegistroSaude that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegistroSaudeFindUniqueOrThrowArgs} args - Arguments to find a RegistroSaude
     * @example
     * // Get one RegistroSaude
     * const registroSaude = await prisma.registroSaude.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegistroSaudeFindUniqueOrThrowArgs>(args: SelectSubset<T, RegistroSaudeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroSaude that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeFindFirstArgs} args - Arguments to find a RegistroSaude
     * @example
     * // Get one RegistroSaude
     * const registroSaude = await prisma.registroSaude.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegistroSaudeFindFirstArgs>(args?: SelectSubset<T, RegistroSaudeFindFirstArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegistroSaude that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeFindFirstOrThrowArgs} args - Arguments to find a RegistroSaude
     * @example
     * // Get one RegistroSaude
     * const registroSaude = await prisma.registroSaude.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegistroSaudeFindFirstOrThrowArgs>(args?: SelectSubset<T, RegistroSaudeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegistroSaudes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegistroSaudes
     * const registroSaudes = await prisma.registroSaude.findMany()
     * 
     * // Get first 10 RegistroSaudes
     * const registroSaudes = await prisma.registroSaude.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registroSaudeWithIdOnly = await prisma.registroSaude.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegistroSaudeFindManyArgs>(args?: SelectSubset<T, RegistroSaudeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegistroSaude.
     * @param {RegistroSaudeCreateArgs} args - Arguments to create a RegistroSaude.
     * @example
     * // Create one RegistroSaude
     * const RegistroSaude = await prisma.registroSaude.create({
     *   data: {
     *     // ... data to create a RegistroSaude
     *   }
     * })
     * 
     */
    create<T extends RegistroSaudeCreateArgs>(args: SelectSubset<T, RegistroSaudeCreateArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegistroSaudes.
     * @param {RegistroSaudeCreateManyArgs} args - Arguments to create many RegistroSaudes.
     * @example
     * // Create many RegistroSaudes
     * const registroSaude = await prisma.registroSaude.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegistroSaudeCreateManyArgs>(args?: SelectSubset<T, RegistroSaudeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegistroSaudes and returns the data saved in the database.
     * @param {RegistroSaudeCreateManyAndReturnArgs} args - Arguments to create many RegistroSaudes.
     * @example
     * // Create many RegistroSaudes
     * const registroSaude = await prisma.registroSaude.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegistroSaudes and only return the `id`
     * const registroSaudeWithIdOnly = await prisma.registroSaude.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegistroSaudeCreateManyAndReturnArgs>(args?: SelectSubset<T, RegistroSaudeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegistroSaude.
     * @param {RegistroSaudeDeleteArgs} args - Arguments to delete one RegistroSaude.
     * @example
     * // Delete one RegistroSaude
     * const RegistroSaude = await prisma.registroSaude.delete({
     *   where: {
     *     // ... filter to delete one RegistroSaude
     *   }
     * })
     * 
     */
    delete<T extends RegistroSaudeDeleteArgs>(args: SelectSubset<T, RegistroSaudeDeleteArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegistroSaude.
     * @param {RegistroSaudeUpdateArgs} args - Arguments to update one RegistroSaude.
     * @example
     * // Update one RegistroSaude
     * const registroSaude = await prisma.registroSaude.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegistroSaudeUpdateArgs>(args: SelectSubset<T, RegistroSaudeUpdateArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegistroSaudes.
     * @param {RegistroSaudeDeleteManyArgs} args - Arguments to filter RegistroSaudes to delete.
     * @example
     * // Delete a few RegistroSaudes
     * const { count } = await prisma.registroSaude.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegistroSaudeDeleteManyArgs>(args?: SelectSubset<T, RegistroSaudeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroSaudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegistroSaudes
     * const registroSaude = await prisma.registroSaude.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegistroSaudeUpdateManyArgs>(args: SelectSubset<T, RegistroSaudeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegistroSaudes and returns the data updated in the database.
     * @param {RegistroSaudeUpdateManyAndReturnArgs} args - Arguments to update many RegistroSaudes.
     * @example
     * // Update many RegistroSaudes
     * const registroSaude = await prisma.registroSaude.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegistroSaudes and only return the `id`
     * const registroSaudeWithIdOnly = await prisma.registroSaude.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegistroSaudeUpdateManyAndReturnArgs>(args: SelectSubset<T, RegistroSaudeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegistroSaude.
     * @param {RegistroSaudeUpsertArgs} args - Arguments to update or create a RegistroSaude.
     * @example
     * // Update or create a RegistroSaude
     * const registroSaude = await prisma.registroSaude.upsert({
     *   create: {
     *     // ... data to create a RegistroSaude
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegistroSaude we want to update
     *   }
     * })
     */
    upsert<T extends RegistroSaudeUpsertArgs>(args: SelectSubset<T, RegistroSaudeUpsertArgs<ExtArgs>>): Prisma__RegistroSaudeClient<$Result.GetResult<Prisma.$RegistroSaudePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegistroSaudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeCountArgs} args - Arguments to filter RegistroSaudes to count.
     * @example
     * // Count the number of RegistroSaudes
     * const count = await prisma.registroSaude.count({
     *   where: {
     *     // ... the filter for the RegistroSaudes we want to count
     *   }
     * })
    **/
    count<T extends RegistroSaudeCountArgs>(
      args?: Subset<T, RegistroSaudeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegistroSaudeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegistroSaude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegistroSaudeAggregateArgs>(args: Subset<T, RegistroSaudeAggregateArgs>): Prisma.PrismaPromise<GetRegistroSaudeAggregateType<T>>

    /**
     * Group by RegistroSaude.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegistroSaudeGroupByArgs} args - Group by arguments.
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
      T extends RegistroSaudeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegistroSaudeGroupByArgs['orderBy'] }
        : { orderBy?: RegistroSaudeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegistroSaudeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegistroSaudeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegistroSaude model
   */
  readonly fields: RegistroSaudeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegistroSaude.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegistroSaudeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends RegistroSaude$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, RegistroSaude$responsavelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RegistroSaude model
   */
  interface RegistroSaudeFieldRefs {
    readonly id: FieldRef<"RegistroSaude", 'String'>
    readonly tanque_id: FieldRef<"RegistroSaude", 'String'>
    readonly data_registro: FieldRef<"RegistroSaude", 'DateTime'>
    readonly sintomas: FieldRef<"RegistroSaude", 'String'>
    readonly percentual_afetado: FieldRef<"RegistroSaude", 'Float'>
    readonly diagnostico: FieldRef<"RegistroSaude", 'String'>
    readonly patologia_codigo: FieldRef<"RegistroSaude", 'String'>
    readonly produto: FieldRef<"RegistroSaude", 'String'>
    readonly dosagem: FieldRef<"RegistroSaude", 'String'>
    readonly dias_tratamento: FieldRef<"RegistroSaude", 'Int'>
    readonly dias_carencia: FieldRef<"RegistroSaude", 'Int'>
    readonly resultado: FieldRef<"RegistroSaude", 'String'>
    readonly data_diagnostico: FieldRef<"RegistroSaude", 'DateTime'>
    readonly usuario_id: FieldRef<"RegistroSaude", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegistroSaude findUnique
   */
  export type RegistroSaudeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSaude to fetch.
     */
    where: RegistroSaudeWhereUniqueInput
  }

  /**
   * RegistroSaude findUniqueOrThrow
   */
  export type RegistroSaudeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSaude to fetch.
     */
    where: RegistroSaudeWhereUniqueInput
  }

  /**
   * RegistroSaude findFirst
   */
  export type RegistroSaudeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSaude to fetch.
     */
    where?: RegistroSaudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSaudes to fetch.
     */
    orderBy?: RegistroSaudeOrderByWithRelationInput | RegistroSaudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroSaudes.
     */
    cursor?: RegistroSaudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSaudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSaudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroSaudes.
     */
    distinct?: RegistroSaudeScalarFieldEnum | RegistroSaudeScalarFieldEnum[]
  }

  /**
   * RegistroSaude findFirstOrThrow
   */
  export type RegistroSaudeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSaude to fetch.
     */
    where?: RegistroSaudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSaudes to fetch.
     */
    orderBy?: RegistroSaudeOrderByWithRelationInput | RegistroSaudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegistroSaudes.
     */
    cursor?: RegistroSaudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSaudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSaudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegistroSaudes.
     */
    distinct?: RegistroSaudeScalarFieldEnum | RegistroSaudeScalarFieldEnum[]
  }

  /**
   * RegistroSaude findMany
   */
  export type RegistroSaudeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * Filter, which RegistroSaudes to fetch.
     */
    where?: RegistroSaudeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegistroSaudes to fetch.
     */
    orderBy?: RegistroSaudeOrderByWithRelationInput | RegistroSaudeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegistroSaudes.
     */
    cursor?: RegistroSaudeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegistroSaudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegistroSaudes.
     */
    skip?: number
    distinct?: RegistroSaudeScalarFieldEnum | RegistroSaudeScalarFieldEnum[]
  }

  /**
   * RegistroSaude create
   */
  export type RegistroSaudeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * The data needed to create a RegistroSaude.
     */
    data: XOR<RegistroSaudeCreateInput, RegistroSaudeUncheckedCreateInput>
  }

  /**
   * RegistroSaude createMany
   */
  export type RegistroSaudeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegistroSaudes.
     */
    data: RegistroSaudeCreateManyInput | RegistroSaudeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RegistroSaude createManyAndReturn
   */
  export type RegistroSaudeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * The data used to create many RegistroSaudes.
     */
    data: RegistroSaudeCreateManyInput | RegistroSaudeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroSaude update
   */
  export type RegistroSaudeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * The data needed to update a RegistroSaude.
     */
    data: XOR<RegistroSaudeUpdateInput, RegistroSaudeUncheckedUpdateInput>
    /**
     * Choose, which RegistroSaude to update.
     */
    where: RegistroSaudeWhereUniqueInput
  }

  /**
   * RegistroSaude updateMany
   */
  export type RegistroSaudeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegistroSaudes.
     */
    data: XOR<RegistroSaudeUpdateManyMutationInput, RegistroSaudeUncheckedUpdateManyInput>
    /**
     * Filter which RegistroSaudes to update
     */
    where?: RegistroSaudeWhereInput
    /**
     * Limit how many RegistroSaudes to update.
     */
    limit?: number
  }

  /**
   * RegistroSaude updateManyAndReturn
   */
  export type RegistroSaudeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * The data used to update RegistroSaudes.
     */
    data: XOR<RegistroSaudeUpdateManyMutationInput, RegistroSaudeUncheckedUpdateManyInput>
    /**
     * Filter which RegistroSaudes to update
     */
    where?: RegistroSaudeWhereInput
    /**
     * Limit how many RegistroSaudes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegistroSaude upsert
   */
  export type RegistroSaudeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * The filter to search for the RegistroSaude to update in case it exists.
     */
    where: RegistroSaudeWhereUniqueInput
    /**
     * In case the RegistroSaude found by the `where` argument doesn't exist, create a new RegistroSaude with this data.
     */
    create: XOR<RegistroSaudeCreateInput, RegistroSaudeUncheckedCreateInput>
    /**
     * In case the RegistroSaude was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegistroSaudeUpdateInput, RegistroSaudeUncheckedUpdateInput>
  }

  /**
   * RegistroSaude delete
   */
  export type RegistroSaudeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
    /**
     * Filter which RegistroSaude to delete.
     */
    where: RegistroSaudeWhereUniqueInput
  }

  /**
   * RegistroSaude deleteMany
   */
  export type RegistroSaudeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegistroSaudes to delete
     */
    where?: RegistroSaudeWhereInput
    /**
     * Limit how many RegistroSaudes to delete.
     */
    limit?: number
  }

  /**
   * RegistroSaude.responsavel
   */
  export type RegistroSaude$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * RegistroSaude without action
   */
  export type RegistroSaudeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegistroSaude
     */
    select?: RegistroSaudeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegistroSaude
     */
    omit?: RegistroSaudeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegistroSaudeInclude<ExtArgs> | null
  }


  /**
   * Model ProdutoEstoque
   */

  export type AggregateProdutoEstoque = {
    _count: ProdutoEstoqueCountAggregateOutputType | null
    _avg: ProdutoEstoqueAvgAggregateOutputType | null
    _sum: ProdutoEstoqueSumAggregateOutputType | null
    _min: ProdutoEstoqueMinAggregateOutputType | null
    _max: ProdutoEstoqueMaxAggregateOutputType | null
  }

  export type ProdutoEstoqueAvgAggregateOutputType = {
    peso_por_unidade: number | null
    quantidade_unidades: number | null
    estoque_atual_kg: number | null
    custo_unitario: number | null
  }

  export type ProdutoEstoqueSumAggregateOutputType = {
    peso_por_unidade: number | null
    quantidade_unidades: number | null
    estoque_atual_kg: number | null
    custo_unitario: number | null
  }

  export type ProdutoEstoqueMinAggregateOutputType = {
    id: string | null
    nome: string | null
    categoria: string | null
    tipo: string | null
    unidade_medida: string | null
    peso_por_unidade: number | null
    quantidade_unidades: number | null
    estoque_atual_kg: number | null
    lote_numero: string | null
    validade: Date | null
    fornecedor: string | null
    custo_unitario: number | null
    data_ultima_entrada: Date | null
    data_ultima_saida: Date | null
  }

  export type ProdutoEstoqueMaxAggregateOutputType = {
    id: string | null
    nome: string | null
    categoria: string | null
    tipo: string | null
    unidade_medida: string | null
    peso_por_unidade: number | null
    quantidade_unidades: number | null
    estoque_atual_kg: number | null
    lote_numero: string | null
    validade: Date | null
    fornecedor: string | null
    custo_unitario: number | null
    data_ultima_entrada: Date | null
    data_ultima_saida: Date | null
  }

  export type ProdutoEstoqueCountAggregateOutputType = {
    id: number
    nome: number
    categoria: number
    tipo: number
    unidade_medida: number
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg: number
    lote_numero: number
    validade: number
    fornecedor: number
    custo_unitario: number
    data_ultima_entrada: number
    data_ultima_saida: number
    _all: number
  }


  export type ProdutoEstoqueAvgAggregateInputType = {
    peso_por_unidade?: true
    quantidade_unidades?: true
    estoque_atual_kg?: true
    custo_unitario?: true
  }

  export type ProdutoEstoqueSumAggregateInputType = {
    peso_por_unidade?: true
    quantidade_unidades?: true
    estoque_atual_kg?: true
    custo_unitario?: true
  }

  export type ProdutoEstoqueMinAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    tipo?: true
    unidade_medida?: true
    peso_por_unidade?: true
    quantidade_unidades?: true
    estoque_atual_kg?: true
    lote_numero?: true
    validade?: true
    fornecedor?: true
    custo_unitario?: true
    data_ultima_entrada?: true
    data_ultima_saida?: true
  }

  export type ProdutoEstoqueMaxAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    tipo?: true
    unidade_medida?: true
    peso_por_unidade?: true
    quantidade_unidades?: true
    estoque_atual_kg?: true
    lote_numero?: true
    validade?: true
    fornecedor?: true
    custo_unitario?: true
    data_ultima_entrada?: true
    data_ultima_saida?: true
  }

  export type ProdutoEstoqueCountAggregateInputType = {
    id?: true
    nome?: true
    categoria?: true
    tipo?: true
    unidade_medida?: true
    peso_por_unidade?: true
    quantidade_unidades?: true
    estoque_atual_kg?: true
    lote_numero?: true
    validade?: true
    fornecedor?: true
    custo_unitario?: true
    data_ultima_entrada?: true
    data_ultima_saida?: true
    _all?: true
  }

  export type ProdutoEstoqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoEstoque to aggregate.
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoEstoques to fetch.
     */
    orderBy?: ProdutoEstoqueOrderByWithRelationInput | ProdutoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdutoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProdutoEstoques
    **/
    _count?: true | ProdutoEstoqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdutoEstoqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdutoEstoqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdutoEstoqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdutoEstoqueMaxAggregateInputType
  }

  export type GetProdutoEstoqueAggregateType<T extends ProdutoEstoqueAggregateArgs> = {
        [P in keyof T & keyof AggregateProdutoEstoque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdutoEstoque[P]>
      : GetScalarType<T[P], AggregateProdutoEstoque[P]>
  }




  export type ProdutoEstoqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdutoEstoqueWhereInput
    orderBy?: ProdutoEstoqueOrderByWithAggregationInput | ProdutoEstoqueOrderByWithAggregationInput[]
    by: ProdutoEstoqueScalarFieldEnum[] | ProdutoEstoqueScalarFieldEnum
    having?: ProdutoEstoqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdutoEstoqueCountAggregateInputType | true
    _avg?: ProdutoEstoqueAvgAggregateInputType
    _sum?: ProdutoEstoqueSumAggregateInputType
    _min?: ProdutoEstoqueMinAggregateInputType
    _max?: ProdutoEstoqueMaxAggregateInputType
  }

  export type ProdutoEstoqueGroupByOutputType = {
    id: string
    nome: string
    categoria: string | null
    tipo: string
    unidade_medida: string
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg: number
    lote_numero: string | null
    validade: Date | null
    fornecedor: string | null
    custo_unitario: number | null
    data_ultima_entrada: Date | null
    data_ultima_saida: Date | null
    _count: ProdutoEstoqueCountAggregateOutputType | null
    _avg: ProdutoEstoqueAvgAggregateOutputType | null
    _sum: ProdutoEstoqueSumAggregateOutputType | null
    _min: ProdutoEstoqueMinAggregateOutputType | null
    _max: ProdutoEstoqueMaxAggregateOutputType | null
  }

  type GetProdutoEstoqueGroupByPayload<T extends ProdutoEstoqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdutoEstoqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdutoEstoqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdutoEstoqueGroupByOutputType[P]>
            : GetScalarType<T[P], ProdutoEstoqueGroupByOutputType[P]>
        }
      >
    >


  export type ProdutoEstoqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    tipo?: boolean
    unidade_medida?: boolean
    peso_por_unidade?: boolean
    quantidade_unidades?: boolean
    estoque_atual_kg?: boolean
    lote_numero?: boolean
    validade?: boolean
    fornecedor?: boolean
    custo_unitario?: boolean
    data_ultima_entrada?: boolean
    data_ultima_saida?: boolean
    movimentacoes?: boolean | ProdutoEstoque$movimentacoesArgs<ExtArgs>
    _count?: boolean | ProdutoEstoqueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produtoEstoque"]>

  export type ProdutoEstoqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    tipo?: boolean
    unidade_medida?: boolean
    peso_por_unidade?: boolean
    quantidade_unidades?: boolean
    estoque_atual_kg?: boolean
    lote_numero?: boolean
    validade?: boolean
    fornecedor?: boolean
    custo_unitario?: boolean
    data_ultima_entrada?: boolean
    data_ultima_saida?: boolean
  }, ExtArgs["result"]["produtoEstoque"]>

  export type ProdutoEstoqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    categoria?: boolean
    tipo?: boolean
    unidade_medida?: boolean
    peso_por_unidade?: boolean
    quantidade_unidades?: boolean
    estoque_atual_kg?: boolean
    lote_numero?: boolean
    validade?: boolean
    fornecedor?: boolean
    custo_unitario?: boolean
    data_ultima_entrada?: boolean
    data_ultima_saida?: boolean
  }, ExtArgs["result"]["produtoEstoque"]>

  export type ProdutoEstoqueSelectScalar = {
    id?: boolean
    nome?: boolean
    categoria?: boolean
    tipo?: boolean
    unidade_medida?: boolean
    peso_por_unidade?: boolean
    quantidade_unidades?: boolean
    estoque_atual_kg?: boolean
    lote_numero?: boolean
    validade?: boolean
    fornecedor?: boolean
    custo_unitario?: boolean
    data_ultima_entrada?: boolean
    data_ultima_saida?: boolean
  }

  export type ProdutoEstoqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "categoria" | "tipo" | "unidade_medida" | "peso_por_unidade" | "quantidade_unidades" | "estoque_atual_kg" | "lote_numero" | "validade" | "fornecedor" | "custo_unitario" | "data_ultima_entrada" | "data_ultima_saida", ExtArgs["result"]["produtoEstoque"]>
  export type ProdutoEstoqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movimentacoes?: boolean | ProdutoEstoque$movimentacoesArgs<ExtArgs>
    _count?: boolean | ProdutoEstoqueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdutoEstoqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProdutoEstoqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProdutoEstoquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProdutoEstoque"
    objects: {
      movimentacoes: Prisma.$MovimentacaoRacaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nome: string
      categoria: string | null
      tipo: string
      unidade_medida: string
      peso_por_unidade: number
      quantidade_unidades: number
      estoque_atual_kg: number
      lote_numero: string | null
      validade: Date | null
      fornecedor: string | null
      custo_unitario: number | null
      data_ultima_entrada: Date | null
      data_ultima_saida: Date | null
    }, ExtArgs["result"]["produtoEstoque"]>
    composites: {}
  }

  type ProdutoEstoqueGetPayload<S extends boolean | null | undefined | ProdutoEstoqueDefaultArgs> = $Result.GetResult<Prisma.$ProdutoEstoquePayload, S>

  type ProdutoEstoqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdutoEstoqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdutoEstoqueCountAggregateInputType | true
    }

  export interface ProdutoEstoqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProdutoEstoque'], meta: { name: 'ProdutoEstoque' } }
    /**
     * Find zero or one ProdutoEstoque that matches the filter.
     * @param {ProdutoEstoqueFindUniqueArgs} args - Arguments to find a ProdutoEstoque
     * @example
     * // Get one ProdutoEstoque
     * const produtoEstoque = await prisma.produtoEstoque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdutoEstoqueFindUniqueArgs>(args: SelectSubset<T, ProdutoEstoqueFindUniqueArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProdutoEstoque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdutoEstoqueFindUniqueOrThrowArgs} args - Arguments to find a ProdutoEstoque
     * @example
     * // Get one ProdutoEstoque
     * const produtoEstoque = await prisma.produtoEstoque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdutoEstoqueFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdutoEstoqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoEstoque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueFindFirstArgs} args - Arguments to find a ProdutoEstoque
     * @example
     * // Get one ProdutoEstoque
     * const produtoEstoque = await prisma.produtoEstoque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdutoEstoqueFindFirstArgs>(args?: SelectSubset<T, ProdutoEstoqueFindFirstArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProdutoEstoque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueFindFirstOrThrowArgs} args - Arguments to find a ProdutoEstoque
     * @example
     * // Get one ProdutoEstoque
     * const produtoEstoque = await prisma.produtoEstoque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdutoEstoqueFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdutoEstoqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProdutoEstoques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProdutoEstoques
     * const produtoEstoques = await prisma.produtoEstoque.findMany()
     * 
     * // Get first 10 ProdutoEstoques
     * const produtoEstoques = await prisma.produtoEstoque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produtoEstoqueWithIdOnly = await prisma.produtoEstoque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProdutoEstoqueFindManyArgs>(args?: SelectSubset<T, ProdutoEstoqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProdutoEstoque.
     * @param {ProdutoEstoqueCreateArgs} args - Arguments to create a ProdutoEstoque.
     * @example
     * // Create one ProdutoEstoque
     * const ProdutoEstoque = await prisma.produtoEstoque.create({
     *   data: {
     *     // ... data to create a ProdutoEstoque
     *   }
     * })
     * 
     */
    create<T extends ProdutoEstoqueCreateArgs>(args: SelectSubset<T, ProdutoEstoqueCreateArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProdutoEstoques.
     * @param {ProdutoEstoqueCreateManyArgs} args - Arguments to create many ProdutoEstoques.
     * @example
     * // Create many ProdutoEstoques
     * const produtoEstoque = await prisma.produtoEstoque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdutoEstoqueCreateManyArgs>(args?: SelectSubset<T, ProdutoEstoqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProdutoEstoques and returns the data saved in the database.
     * @param {ProdutoEstoqueCreateManyAndReturnArgs} args - Arguments to create many ProdutoEstoques.
     * @example
     * // Create many ProdutoEstoques
     * const produtoEstoque = await prisma.produtoEstoque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProdutoEstoques and only return the `id`
     * const produtoEstoqueWithIdOnly = await prisma.produtoEstoque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdutoEstoqueCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdutoEstoqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProdutoEstoque.
     * @param {ProdutoEstoqueDeleteArgs} args - Arguments to delete one ProdutoEstoque.
     * @example
     * // Delete one ProdutoEstoque
     * const ProdutoEstoque = await prisma.produtoEstoque.delete({
     *   where: {
     *     // ... filter to delete one ProdutoEstoque
     *   }
     * })
     * 
     */
    delete<T extends ProdutoEstoqueDeleteArgs>(args: SelectSubset<T, ProdutoEstoqueDeleteArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProdutoEstoque.
     * @param {ProdutoEstoqueUpdateArgs} args - Arguments to update one ProdutoEstoque.
     * @example
     * // Update one ProdutoEstoque
     * const produtoEstoque = await prisma.produtoEstoque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdutoEstoqueUpdateArgs>(args: SelectSubset<T, ProdutoEstoqueUpdateArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProdutoEstoques.
     * @param {ProdutoEstoqueDeleteManyArgs} args - Arguments to filter ProdutoEstoques to delete.
     * @example
     * // Delete a few ProdutoEstoques
     * const { count } = await prisma.produtoEstoque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdutoEstoqueDeleteManyArgs>(args?: SelectSubset<T, ProdutoEstoqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProdutoEstoques
     * const produtoEstoque = await prisma.produtoEstoque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdutoEstoqueUpdateManyArgs>(args: SelectSubset<T, ProdutoEstoqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProdutoEstoques and returns the data updated in the database.
     * @param {ProdutoEstoqueUpdateManyAndReturnArgs} args - Arguments to update many ProdutoEstoques.
     * @example
     * // Update many ProdutoEstoques
     * const produtoEstoque = await prisma.produtoEstoque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProdutoEstoques and only return the `id`
     * const produtoEstoqueWithIdOnly = await prisma.produtoEstoque.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProdutoEstoqueUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdutoEstoqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProdutoEstoque.
     * @param {ProdutoEstoqueUpsertArgs} args - Arguments to update or create a ProdutoEstoque.
     * @example
     * // Update or create a ProdutoEstoque
     * const produtoEstoque = await prisma.produtoEstoque.upsert({
     *   create: {
     *     // ... data to create a ProdutoEstoque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProdutoEstoque we want to update
     *   }
     * })
     */
    upsert<T extends ProdutoEstoqueUpsertArgs>(args: SelectSubset<T, ProdutoEstoqueUpsertArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProdutoEstoques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueCountArgs} args - Arguments to filter ProdutoEstoques to count.
     * @example
     * // Count the number of ProdutoEstoques
     * const count = await prisma.produtoEstoque.count({
     *   where: {
     *     // ... the filter for the ProdutoEstoques we want to count
     *   }
     * })
    **/
    count<T extends ProdutoEstoqueCountArgs>(
      args?: Subset<T, ProdutoEstoqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdutoEstoqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProdutoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdutoEstoqueAggregateArgs>(args: Subset<T, ProdutoEstoqueAggregateArgs>): Prisma.PrismaPromise<GetProdutoEstoqueAggregateType<T>>

    /**
     * Group by ProdutoEstoque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdutoEstoqueGroupByArgs} args - Group by arguments.
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
      T extends ProdutoEstoqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdutoEstoqueGroupByArgs['orderBy'] }
        : { orderBy?: ProdutoEstoqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdutoEstoqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdutoEstoqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProdutoEstoque model
   */
  readonly fields: ProdutoEstoqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProdutoEstoque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdutoEstoqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movimentacoes<T extends ProdutoEstoque$movimentacoesArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoEstoque$movimentacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProdutoEstoque model
   */
  interface ProdutoEstoqueFieldRefs {
    readonly id: FieldRef<"ProdutoEstoque", 'String'>
    readonly nome: FieldRef<"ProdutoEstoque", 'String'>
    readonly categoria: FieldRef<"ProdutoEstoque", 'String'>
    readonly tipo: FieldRef<"ProdutoEstoque", 'String'>
    readonly unidade_medida: FieldRef<"ProdutoEstoque", 'String'>
    readonly peso_por_unidade: FieldRef<"ProdutoEstoque", 'Float'>
    readonly quantidade_unidades: FieldRef<"ProdutoEstoque", 'Int'>
    readonly estoque_atual_kg: FieldRef<"ProdutoEstoque", 'Float'>
    readonly lote_numero: FieldRef<"ProdutoEstoque", 'String'>
    readonly validade: FieldRef<"ProdutoEstoque", 'DateTime'>
    readonly fornecedor: FieldRef<"ProdutoEstoque", 'String'>
    readonly custo_unitario: FieldRef<"ProdutoEstoque", 'Float'>
    readonly data_ultima_entrada: FieldRef<"ProdutoEstoque", 'DateTime'>
    readonly data_ultima_saida: FieldRef<"ProdutoEstoque", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProdutoEstoque findUnique
   */
  export type ProdutoEstoqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoEstoque to fetch.
     */
    where: ProdutoEstoqueWhereUniqueInput
  }

  /**
   * ProdutoEstoque findUniqueOrThrow
   */
  export type ProdutoEstoqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoEstoque to fetch.
     */
    where: ProdutoEstoqueWhereUniqueInput
  }

  /**
   * ProdutoEstoque findFirst
   */
  export type ProdutoEstoqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoEstoque to fetch.
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoEstoques to fetch.
     */
    orderBy?: ProdutoEstoqueOrderByWithRelationInput | ProdutoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoEstoques.
     */
    cursor?: ProdutoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoEstoques.
     */
    distinct?: ProdutoEstoqueScalarFieldEnum | ProdutoEstoqueScalarFieldEnum[]
  }

  /**
   * ProdutoEstoque findFirstOrThrow
   */
  export type ProdutoEstoqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoEstoque to fetch.
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoEstoques to fetch.
     */
    orderBy?: ProdutoEstoqueOrderByWithRelationInput | ProdutoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProdutoEstoques.
     */
    cursor?: ProdutoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoEstoques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProdutoEstoques.
     */
    distinct?: ProdutoEstoqueScalarFieldEnum | ProdutoEstoqueScalarFieldEnum[]
  }

  /**
   * ProdutoEstoque findMany
   */
  export type ProdutoEstoqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * Filter, which ProdutoEstoques to fetch.
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProdutoEstoques to fetch.
     */
    orderBy?: ProdutoEstoqueOrderByWithRelationInput | ProdutoEstoqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProdutoEstoques.
     */
    cursor?: ProdutoEstoqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProdutoEstoques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProdutoEstoques.
     */
    skip?: number
    distinct?: ProdutoEstoqueScalarFieldEnum | ProdutoEstoqueScalarFieldEnum[]
  }

  /**
   * ProdutoEstoque create
   */
  export type ProdutoEstoqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to create a ProdutoEstoque.
     */
    data: XOR<ProdutoEstoqueCreateInput, ProdutoEstoqueUncheckedCreateInput>
  }

  /**
   * ProdutoEstoque createMany
   */
  export type ProdutoEstoqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProdutoEstoques.
     */
    data: ProdutoEstoqueCreateManyInput | ProdutoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProdutoEstoque createManyAndReturn
   */
  export type ProdutoEstoqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * The data used to create many ProdutoEstoques.
     */
    data: ProdutoEstoqueCreateManyInput | ProdutoEstoqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProdutoEstoque update
   */
  export type ProdutoEstoqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * The data needed to update a ProdutoEstoque.
     */
    data: XOR<ProdutoEstoqueUpdateInput, ProdutoEstoqueUncheckedUpdateInput>
    /**
     * Choose, which ProdutoEstoque to update.
     */
    where: ProdutoEstoqueWhereUniqueInput
  }

  /**
   * ProdutoEstoque updateMany
   */
  export type ProdutoEstoqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProdutoEstoques.
     */
    data: XOR<ProdutoEstoqueUpdateManyMutationInput, ProdutoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoEstoques to update
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * Limit how many ProdutoEstoques to update.
     */
    limit?: number
  }

  /**
   * ProdutoEstoque updateManyAndReturn
   */
  export type ProdutoEstoqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * The data used to update ProdutoEstoques.
     */
    data: XOR<ProdutoEstoqueUpdateManyMutationInput, ProdutoEstoqueUncheckedUpdateManyInput>
    /**
     * Filter which ProdutoEstoques to update
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * Limit how many ProdutoEstoques to update.
     */
    limit?: number
  }

  /**
   * ProdutoEstoque upsert
   */
  export type ProdutoEstoqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * The filter to search for the ProdutoEstoque to update in case it exists.
     */
    where: ProdutoEstoqueWhereUniqueInput
    /**
     * In case the ProdutoEstoque found by the `where` argument doesn't exist, create a new ProdutoEstoque with this data.
     */
    create: XOR<ProdutoEstoqueCreateInput, ProdutoEstoqueUncheckedCreateInput>
    /**
     * In case the ProdutoEstoque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdutoEstoqueUpdateInput, ProdutoEstoqueUncheckedUpdateInput>
  }

  /**
   * ProdutoEstoque delete
   */
  export type ProdutoEstoqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
    /**
     * Filter which ProdutoEstoque to delete.
     */
    where: ProdutoEstoqueWhereUniqueInput
  }

  /**
   * ProdutoEstoque deleteMany
   */
  export type ProdutoEstoqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProdutoEstoques to delete
     */
    where?: ProdutoEstoqueWhereInput
    /**
     * Limit how many ProdutoEstoques to delete.
     */
    limit?: number
  }

  /**
   * ProdutoEstoque.movimentacoes
   */
  export type ProdutoEstoque$movimentacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    where?: MovimentacaoRacaoWhereInput
    orderBy?: MovimentacaoRacaoOrderByWithRelationInput | MovimentacaoRacaoOrderByWithRelationInput[]
    cursor?: MovimentacaoRacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovimentacaoRacaoScalarFieldEnum | MovimentacaoRacaoScalarFieldEnum[]
  }

  /**
   * ProdutoEstoque without action
   */
  export type ProdutoEstoqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdutoEstoque
     */
    select?: ProdutoEstoqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProdutoEstoque
     */
    omit?: ProdutoEstoqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdutoEstoqueInclude<ExtArgs> | null
  }


  /**
   * Model MovimentacaoTanque
   */

  export type AggregateMovimentacaoTanque = {
    _count: MovimentacaoTanqueCountAggregateOutputType | null
    _avg: MovimentacaoTanqueAvgAggregateOutputType | null
    _sum: MovimentacaoTanqueSumAggregateOutputType | null
    _min: MovimentacaoTanqueMinAggregateOutputType | null
    _max: MovimentacaoTanqueMaxAggregateOutputType | null
  }

  export type MovimentacaoTanqueAvgAggregateOutputType = {
    quantidade: number | null
    peso_medio_g: number | null
  }

  export type MovimentacaoTanqueSumAggregateOutputType = {
    quantidade: number | null
    peso_medio_g: number | null
  }

  export type MovimentacaoTanqueMinAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    tipo_movimentacao: $Enums.MovTanqueTipo | null
    motivo: string | null
    data: Date | null
    quantidade: number | null
    peso_medio_g: number | null
    notas: string | null
    usuario_id: string | null
  }

  export type MovimentacaoTanqueMaxAggregateOutputType = {
    id: string | null
    tanque_id: string | null
    tipo_movimentacao: $Enums.MovTanqueTipo | null
    motivo: string | null
    data: Date | null
    quantidade: number | null
    peso_medio_g: number | null
    notas: string | null
    usuario_id: string | null
  }

  export type MovimentacaoTanqueCountAggregateOutputType = {
    id: number
    tanque_id: number
    tipo_movimentacao: number
    motivo: number
    data: number
    quantidade: number
    peso_medio_g: number
    notas: number
    usuario_id: number
    _all: number
  }


  export type MovimentacaoTanqueAvgAggregateInputType = {
    quantidade?: true
    peso_medio_g?: true
  }

  export type MovimentacaoTanqueSumAggregateInputType = {
    quantidade?: true
    peso_medio_g?: true
  }

  export type MovimentacaoTanqueMinAggregateInputType = {
    id?: true
    tanque_id?: true
    tipo_movimentacao?: true
    motivo?: true
    data?: true
    quantidade?: true
    peso_medio_g?: true
    notas?: true
    usuario_id?: true
  }

  export type MovimentacaoTanqueMaxAggregateInputType = {
    id?: true
    tanque_id?: true
    tipo_movimentacao?: true
    motivo?: true
    data?: true
    quantidade?: true
    peso_medio_g?: true
    notas?: true
    usuario_id?: true
  }

  export type MovimentacaoTanqueCountAggregateInputType = {
    id?: true
    tanque_id?: true
    tipo_movimentacao?: true
    motivo?: true
    data?: true
    quantidade?: true
    peso_medio_g?: true
    notas?: true
    usuario_id?: true
    _all?: true
  }

  export type MovimentacaoTanqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoTanque to aggregate.
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoTanques to fetch.
     */
    orderBy?: MovimentacaoTanqueOrderByWithRelationInput | MovimentacaoTanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoTanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoTanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoTanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimentacaoTanques
    **/
    _count?: true | MovimentacaoTanqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoTanqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoTanqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoTanqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoTanqueMaxAggregateInputType
  }

  export type GetMovimentacaoTanqueAggregateType<T extends MovimentacaoTanqueAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacaoTanque]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacaoTanque[P]>
      : GetScalarType<T[P], AggregateMovimentacaoTanque[P]>
  }




  export type MovimentacaoTanqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoTanqueWhereInput
    orderBy?: MovimentacaoTanqueOrderByWithAggregationInput | MovimentacaoTanqueOrderByWithAggregationInput[]
    by: MovimentacaoTanqueScalarFieldEnum[] | MovimentacaoTanqueScalarFieldEnum
    having?: MovimentacaoTanqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoTanqueCountAggregateInputType | true
    _avg?: MovimentacaoTanqueAvgAggregateInputType
    _sum?: MovimentacaoTanqueSumAggregateInputType
    _min?: MovimentacaoTanqueMinAggregateInputType
    _max?: MovimentacaoTanqueMaxAggregateInputType
  }

  export type MovimentacaoTanqueGroupByOutputType = {
    id: string
    tanque_id: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo: string | null
    data: Date
    quantidade: number
    peso_medio_g: number
    notas: string | null
    usuario_id: string | null
    _count: MovimentacaoTanqueCountAggregateOutputType | null
    _avg: MovimentacaoTanqueAvgAggregateOutputType | null
    _sum: MovimentacaoTanqueSumAggregateOutputType | null
    _min: MovimentacaoTanqueMinAggregateOutputType | null
    _max: MovimentacaoTanqueMaxAggregateOutputType | null
  }

  type GetMovimentacaoTanqueGroupByPayload<T extends MovimentacaoTanqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoTanqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoTanqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoTanqueGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoTanqueGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoTanqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    tipo_movimentacao?: boolean
    motivo?: boolean
    data?: boolean
    quantidade?: boolean
    peso_medio_g?: boolean
    notas?: boolean
    usuario_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoTanque$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoTanque"]>

  export type MovimentacaoTanqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    tipo_movimentacao?: boolean
    motivo?: boolean
    data?: boolean
    quantidade?: boolean
    peso_medio_g?: boolean
    notas?: boolean
    usuario_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoTanque$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoTanque"]>

  export type MovimentacaoTanqueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tanque_id?: boolean
    tipo_movimentacao?: boolean
    motivo?: boolean
    data?: boolean
    quantidade?: boolean
    peso_medio_g?: boolean
    notas?: boolean
    usuario_id?: boolean
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoTanque$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoTanque"]>

  export type MovimentacaoTanqueSelectScalar = {
    id?: boolean
    tanque_id?: boolean
    tipo_movimentacao?: boolean
    motivo?: boolean
    data?: boolean
    quantidade?: boolean
    peso_medio_g?: boolean
    notas?: boolean
    usuario_id?: boolean
  }

  export type MovimentacaoTanqueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tanque_id" | "tipo_movimentacao" | "motivo" | "data" | "quantidade" | "peso_medio_g" | "notas" | "usuario_id", ExtArgs["result"]["movimentacaoTanque"]>
  export type MovimentacaoTanqueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoTanque$responsavelArgs<ExtArgs>
  }
  export type MovimentacaoTanqueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoTanque$responsavelArgs<ExtArgs>
  }
  export type MovimentacaoTanqueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tanque?: boolean | TanqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoTanque$responsavelArgs<ExtArgs>
  }

  export type $MovimentacaoTanquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimentacaoTanque"
    objects: {
      tanque: Prisma.$TanquePayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tanque_id: string
      tipo_movimentacao: $Enums.MovTanqueTipo
      motivo: string | null
      data: Date
      quantidade: number
      peso_medio_g: number
      notas: string | null
      usuario_id: string | null
    }, ExtArgs["result"]["movimentacaoTanque"]>
    composites: {}
  }

  type MovimentacaoTanqueGetPayload<S extends boolean | null | undefined | MovimentacaoTanqueDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoTanquePayload, S>

  type MovimentacaoTanqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoTanqueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoTanqueCountAggregateInputType | true
    }

  export interface MovimentacaoTanqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimentacaoTanque'], meta: { name: 'MovimentacaoTanque' } }
    /**
     * Find zero or one MovimentacaoTanque that matches the filter.
     * @param {MovimentacaoTanqueFindUniqueArgs} args - Arguments to find a MovimentacaoTanque
     * @example
     * // Get one MovimentacaoTanque
     * const movimentacaoTanque = await prisma.movimentacaoTanque.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoTanqueFindUniqueArgs>(args: SelectSubset<T, MovimentacaoTanqueFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimentacaoTanque that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoTanqueFindUniqueOrThrowArgs} args - Arguments to find a MovimentacaoTanque
     * @example
     * // Get one MovimentacaoTanque
     * const movimentacaoTanque = await prisma.movimentacaoTanque.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoTanqueFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoTanqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoTanque that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueFindFirstArgs} args - Arguments to find a MovimentacaoTanque
     * @example
     * // Get one MovimentacaoTanque
     * const movimentacaoTanque = await prisma.movimentacaoTanque.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoTanqueFindFirstArgs>(args?: SelectSubset<T, MovimentacaoTanqueFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoTanque that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueFindFirstOrThrowArgs} args - Arguments to find a MovimentacaoTanque
     * @example
     * // Get one MovimentacaoTanque
     * const movimentacaoTanque = await prisma.movimentacaoTanque.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoTanqueFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoTanqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimentacaoTanques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimentacaoTanques
     * const movimentacaoTanques = await prisma.movimentacaoTanque.findMany()
     * 
     * // Get first 10 MovimentacaoTanques
     * const movimentacaoTanques = await prisma.movimentacaoTanque.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoTanqueWithIdOnly = await prisma.movimentacaoTanque.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoTanqueFindManyArgs>(args?: SelectSubset<T, MovimentacaoTanqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimentacaoTanque.
     * @param {MovimentacaoTanqueCreateArgs} args - Arguments to create a MovimentacaoTanque.
     * @example
     * // Create one MovimentacaoTanque
     * const MovimentacaoTanque = await prisma.movimentacaoTanque.create({
     *   data: {
     *     // ... data to create a MovimentacaoTanque
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoTanqueCreateArgs>(args: SelectSubset<T, MovimentacaoTanqueCreateArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimentacaoTanques.
     * @param {MovimentacaoTanqueCreateManyArgs} args - Arguments to create many MovimentacaoTanques.
     * @example
     * // Create many MovimentacaoTanques
     * const movimentacaoTanque = await prisma.movimentacaoTanque.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoTanqueCreateManyArgs>(args?: SelectSubset<T, MovimentacaoTanqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimentacaoTanques and returns the data saved in the database.
     * @param {MovimentacaoTanqueCreateManyAndReturnArgs} args - Arguments to create many MovimentacaoTanques.
     * @example
     * // Create many MovimentacaoTanques
     * const movimentacaoTanque = await prisma.movimentacaoTanque.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimentacaoTanques and only return the `id`
     * const movimentacaoTanqueWithIdOnly = await prisma.movimentacaoTanque.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoTanqueCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoTanqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimentacaoTanque.
     * @param {MovimentacaoTanqueDeleteArgs} args - Arguments to delete one MovimentacaoTanque.
     * @example
     * // Delete one MovimentacaoTanque
     * const MovimentacaoTanque = await prisma.movimentacaoTanque.delete({
     *   where: {
     *     // ... filter to delete one MovimentacaoTanque
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoTanqueDeleteArgs>(args: SelectSubset<T, MovimentacaoTanqueDeleteArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimentacaoTanque.
     * @param {MovimentacaoTanqueUpdateArgs} args - Arguments to update one MovimentacaoTanque.
     * @example
     * // Update one MovimentacaoTanque
     * const movimentacaoTanque = await prisma.movimentacaoTanque.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoTanqueUpdateArgs>(args: SelectSubset<T, MovimentacaoTanqueUpdateArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimentacaoTanques.
     * @param {MovimentacaoTanqueDeleteManyArgs} args - Arguments to filter MovimentacaoTanques to delete.
     * @example
     * // Delete a few MovimentacaoTanques
     * const { count } = await prisma.movimentacaoTanque.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoTanqueDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoTanqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoTanques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimentacaoTanques
     * const movimentacaoTanque = await prisma.movimentacaoTanque.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoTanqueUpdateManyArgs>(args: SelectSubset<T, MovimentacaoTanqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoTanques and returns the data updated in the database.
     * @param {MovimentacaoTanqueUpdateManyAndReturnArgs} args - Arguments to update many MovimentacaoTanques.
     * @example
     * // Update many MovimentacaoTanques
     * const movimentacaoTanque = await prisma.movimentacaoTanque.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimentacaoTanques and only return the `id`
     * const movimentacaoTanqueWithIdOnly = await prisma.movimentacaoTanque.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimentacaoTanqueUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoTanqueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimentacaoTanque.
     * @param {MovimentacaoTanqueUpsertArgs} args - Arguments to update or create a MovimentacaoTanque.
     * @example
     * // Update or create a MovimentacaoTanque
     * const movimentacaoTanque = await prisma.movimentacaoTanque.upsert({
     *   create: {
     *     // ... data to create a MovimentacaoTanque
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimentacaoTanque we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoTanqueUpsertArgs>(args: SelectSubset<T, MovimentacaoTanqueUpsertArgs<ExtArgs>>): Prisma__MovimentacaoTanqueClient<$Result.GetResult<Prisma.$MovimentacaoTanquePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimentacaoTanques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueCountArgs} args - Arguments to filter MovimentacaoTanques to count.
     * @example
     * // Count the number of MovimentacaoTanques
     * const count = await prisma.movimentacaoTanque.count({
     *   where: {
     *     // ... the filter for the MovimentacaoTanques we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoTanqueCountArgs>(
      args?: Subset<T, MovimentacaoTanqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoTanqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimentacaoTanque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoTanqueAggregateArgs>(args: Subset<T, MovimentacaoTanqueAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoTanqueAggregateType<T>>

    /**
     * Group by MovimentacaoTanque.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoTanqueGroupByArgs} args - Group by arguments.
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
      T extends MovimentacaoTanqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoTanqueGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoTanqueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimentacaoTanqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoTanqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimentacaoTanque model
   */
  readonly fields: MovimentacaoTanqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimentacaoTanque.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoTanqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tanque<T extends TanqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TanqueDefaultArgs<ExtArgs>>): Prisma__TanqueClient<$Result.GetResult<Prisma.$TanquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends MovimentacaoTanque$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, MovimentacaoTanque$responsavelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovimentacaoTanque model
   */
  interface MovimentacaoTanqueFieldRefs {
    readonly id: FieldRef<"MovimentacaoTanque", 'String'>
    readonly tanque_id: FieldRef<"MovimentacaoTanque", 'String'>
    readonly tipo_movimentacao: FieldRef<"MovimentacaoTanque", 'MovTanqueTipo'>
    readonly motivo: FieldRef<"MovimentacaoTanque", 'String'>
    readonly data: FieldRef<"MovimentacaoTanque", 'DateTime'>
    readonly quantidade: FieldRef<"MovimentacaoTanque", 'Int'>
    readonly peso_medio_g: FieldRef<"MovimentacaoTanque", 'Float'>
    readonly notas: FieldRef<"MovimentacaoTanque", 'String'>
    readonly usuario_id: FieldRef<"MovimentacaoTanque", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovimentacaoTanque findUnique
   */
  export type MovimentacaoTanqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoTanque to fetch.
     */
    where: MovimentacaoTanqueWhereUniqueInput
  }

  /**
   * MovimentacaoTanque findUniqueOrThrow
   */
  export type MovimentacaoTanqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoTanque to fetch.
     */
    where: MovimentacaoTanqueWhereUniqueInput
  }

  /**
   * MovimentacaoTanque findFirst
   */
  export type MovimentacaoTanqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoTanque to fetch.
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoTanques to fetch.
     */
    orderBy?: MovimentacaoTanqueOrderByWithRelationInput | MovimentacaoTanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoTanques.
     */
    cursor?: MovimentacaoTanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoTanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoTanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoTanques.
     */
    distinct?: MovimentacaoTanqueScalarFieldEnum | MovimentacaoTanqueScalarFieldEnum[]
  }

  /**
   * MovimentacaoTanque findFirstOrThrow
   */
  export type MovimentacaoTanqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoTanque to fetch.
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoTanques to fetch.
     */
    orderBy?: MovimentacaoTanqueOrderByWithRelationInput | MovimentacaoTanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoTanques.
     */
    cursor?: MovimentacaoTanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoTanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoTanques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoTanques.
     */
    distinct?: MovimentacaoTanqueScalarFieldEnum | MovimentacaoTanqueScalarFieldEnum[]
  }

  /**
   * MovimentacaoTanque findMany
   */
  export type MovimentacaoTanqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoTanques to fetch.
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoTanques to fetch.
     */
    orderBy?: MovimentacaoTanqueOrderByWithRelationInput | MovimentacaoTanqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimentacaoTanques.
     */
    cursor?: MovimentacaoTanqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoTanques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoTanques.
     */
    skip?: number
    distinct?: MovimentacaoTanqueScalarFieldEnum | MovimentacaoTanqueScalarFieldEnum[]
  }

  /**
   * MovimentacaoTanque create
   */
  export type MovimentacaoTanqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimentacaoTanque.
     */
    data: XOR<MovimentacaoTanqueCreateInput, MovimentacaoTanqueUncheckedCreateInput>
  }

  /**
   * MovimentacaoTanque createMany
   */
  export type MovimentacaoTanqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimentacaoTanques.
     */
    data: MovimentacaoTanqueCreateManyInput | MovimentacaoTanqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimentacaoTanque createManyAndReturn
   */
  export type MovimentacaoTanqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * The data used to create many MovimentacaoTanques.
     */
    data: MovimentacaoTanqueCreateManyInput | MovimentacaoTanqueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoTanque update
   */
  export type MovimentacaoTanqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimentacaoTanque.
     */
    data: XOR<MovimentacaoTanqueUpdateInput, MovimentacaoTanqueUncheckedUpdateInput>
    /**
     * Choose, which MovimentacaoTanque to update.
     */
    where: MovimentacaoTanqueWhereUniqueInput
  }

  /**
   * MovimentacaoTanque updateMany
   */
  export type MovimentacaoTanqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimentacaoTanques.
     */
    data: XOR<MovimentacaoTanqueUpdateManyMutationInput, MovimentacaoTanqueUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoTanques to update
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * Limit how many MovimentacaoTanques to update.
     */
    limit?: number
  }

  /**
   * MovimentacaoTanque updateManyAndReturn
   */
  export type MovimentacaoTanqueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * The data used to update MovimentacaoTanques.
     */
    data: XOR<MovimentacaoTanqueUpdateManyMutationInput, MovimentacaoTanqueUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoTanques to update
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * Limit how many MovimentacaoTanques to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoTanque upsert
   */
  export type MovimentacaoTanqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimentacaoTanque to update in case it exists.
     */
    where: MovimentacaoTanqueWhereUniqueInput
    /**
     * In case the MovimentacaoTanque found by the `where` argument doesn't exist, create a new MovimentacaoTanque with this data.
     */
    create: XOR<MovimentacaoTanqueCreateInput, MovimentacaoTanqueUncheckedCreateInput>
    /**
     * In case the MovimentacaoTanque was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoTanqueUpdateInput, MovimentacaoTanqueUncheckedUpdateInput>
  }

  /**
   * MovimentacaoTanque delete
   */
  export type MovimentacaoTanqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
    /**
     * Filter which MovimentacaoTanque to delete.
     */
    where: MovimentacaoTanqueWhereUniqueInput
  }

  /**
   * MovimentacaoTanque deleteMany
   */
  export type MovimentacaoTanqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoTanques to delete
     */
    where?: MovimentacaoTanqueWhereInput
    /**
     * Limit how many MovimentacaoTanques to delete.
     */
    limit?: number
  }

  /**
   * MovimentacaoTanque.responsavel
   */
  export type MovimentacaoTanque$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MovimentacaoTanque without action
   */
  export type MovimentacaoTanqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoTanque
     */
    select?: MovimentacaoTanqueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoTanque
     */
    omit?: MovimentacaoTanqueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoTanqueInclude<ExtArgs> | null
  }


  /**
   * Model MovimentacaoRacao
   */

  export type AggregateMovimentacaoRacao = {
    _count: MovimentacaoRacaoCountAggregateOutputType | null
    _avg: MovimentacaoRacaoAvgAggregateOutputType | null
    _sum: MovimentacaoRacaoSumAggregateOutputType | null
    _min: MovimentacaoRacaoMinAggregateOutputType | null
    _max: MovimentacaoRacaoMaxAggregateOutputType | null
  }

  export type MovimentacaoRacaoAvgAggregateOutputType = {
    quantidade_kg: number | null
  }

  export type MovimentacaoRacaoSumAggregateOutputType = {
    quantidade_kg: number | null
  }

  export type MovimentacaoRacaoMinAggregateOutputType = {
    id: string | null
    produto_id: string | null
    tipo_movimento: string | null
    data: Date | null
    quantidade_kg: number | null
    lote_id: string | null
    observacoes: string | null
    responsavel_id: string | null
  }

  export type MovimentacaoRacaoMaxAggregateOutputType = {
    id: string | null
    produto_id: string | null
    tipo_movimento: string | null
    data: Date | null
    quantidade_kg: number | null
    lote_id: string | null
    observacoes: string | null
    responsavel_id: string | null
  }

  export type MovimentacaoRacaoCountAggregateOutputType = {
    id: number
    produto_id: number
    tipo_movimento: number
    data: number
    quantidade_kg: number
    lote_id: number
    observacoes: number
    responsavel_id: number
    _all: number
  }


  export type MovimentacaoRacaoAvgAggregateInputType = {
    quantidade_kg?: true
  }

  export type MovimentacaoRacaoSumAggregateInputType = {
    quantidade_kg?: true
  }

  export type MovimentacaoRacaoMinAggregateInputType = {
    id?: true
    produto_id?: true
    tipo_movimento?: true
    data?: true
    quantidade_kg?: true
    lote_id?: true
    observacoes?: true
    responsavel_id?: true
  }

  export type MovimentacaoRacaoMaxAggregateInputType = {
    id?: true
    produto_id?: true
    tipo_movimento?: true
    data?: true
    quantidade_kg?: true
    lote_id?: true
    observacoes?: true
    responsavel_id?: true
  }

  export type MovimentacaoRacaoCountAggregateInputType = {
    id?: true
    produto_id?: true
    tipo_movimento?: true
    data?: true
    quantidade_kg?: true
    lote_id?: true
    observacoes?: true
    responsavel_id?: true
    _all?: true
  }

  export type MovimentacaoRacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoRacao to aggregate.
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoRacaos to fetch.
     */
    orderBy?: MovimentacaoRacaoOrderByWithRelationInput | MovimentacaoRacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovimentacaoRacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoRacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoRacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovimentacaoRacaos
    **/
    _count?: true | MovimentacaoRacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovimentacaoRacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovimentacaoRacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovimentacaoRacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovimentacaoRacaoMaxAggregateInputType
  }

  export type GetMovimentacaoRacaoAggregateType<T extends MovimentacaoRacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateMovimentacaoRacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovimentacaoRacao[P]>
      : GetScalarType<T[P], AggregateMovimentacaoRacao[P]>
  }




  export type MovimentacaoRacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovimentacaoRacaoWhereInput
    orderBy?: MovimentacaoRacaoOrderByWithAggregationInput | MovimentacaoRacaoOrderByWithAggregationInput[]
    by: MovimentacaoRacaoScalarFieldEnum[] | MovimentacaoRacaoScalarFieldEnum
    having?: MovimentacaoRacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovimentacaoRacaoCountAggregateInputType | true
    _avg?: MovimentacaoRacaoAvgAggregateInputType
    _sum?: MovimentacaoRacaoSumAggregateInputType
    _min?: MovimentacaoRacaoMinAggregateInputType
    _max?: MovimentacaoRacaoMaxAggregateInputType
  }

  export type MovimentacaoRacaoGroupByOutputType = {
    id: string
    produto_id: string
    tipo_movimento: string
    data: Date
    quantidade_kg: number
    lote_id: string | null
    observacoes: string | null
    responsavel_id: string | null
    _count: MovimentacaoRacaoCountAggregateOutputType | null
    _avg: MovimentacaoRacaoAvgAggregateOutputType | null
    _sum: MovimentacaoRacaoSumAggregateOutputType | null
    _min: MovimentacaoRacaoMinAggregateOutputType | null
    _max: MovimentacaoRacaoMaxAggregateOutputType | null
  }

  type GetMovimentacaoRacaoGroupByPayload<T extends MovimentacaoRacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovimentacaoRacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovimentacaoRacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovimentacaoRacaoGroupByOutputType[P]>
            : GetScalarType<T[P], MovimentacaoRacaoGroupByOutputType[P]>
        }
      >
    >


  export type MovimentacaoRacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo_movimento?: boolean
    data?: boolean
    quantidade_kg?: boolean
    lote_id?: boolean
    observacoes?: boolean
    responsavel_id?: boolean
    produto?: boolean | ProdutoEstoqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoRacao$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoRacao"]>

  export type MovimentacaoRacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo_movimento?: boolean
    data?: boolean
    quantidade_kg?: boolean
    lote_id?: boolean
    observacoes?: boolean
    responsavel_id?: boolean
    produto?: boolean | ProdutoEstoqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoRacao$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoRacao"]>

  export type MovimentacaoRacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    produto_id?: boolean
    tipo_movimento?: boolean
    data?: boolean
    quantidade_kg?: boolean
    lote_id?: boolean
    observacoes?: boolean
    responsavel_id?: boolean
    produto?: boolean | ProdutoEstoqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoRacao$responsavelArgs<ExtArgs>
  }, ExtArgs["result"]["movimentacaoRacao"]>

  export type MovimentacaoRacaoSelectScalar = {
    id?: boolean
    produto_id?: boolean
    tipo_movimento?: boolean
    data?: boolean
    quantidade_kg?: boolean
    lote_id?: boolean
    observacoes?: boolean
    responsavel_id?: boolean
  }

  export type MovimentacaoRacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "produto_id" | "tipo_movimento" | "data" | "quantidade_kg" | "lote_id" | "observacoes" | "responsavel_id", ExtArgs["result"]["movimentacaoRacao"]>
  export type MovimentacaoRacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoEstoqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoRacao$responsavelArgs<ExtArgs>
  }
  export type MovimentacaoRacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoEstoqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoRacao$responsavelArgs<ExtArgs>
  }
  export type MovimentacaoRacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produto?: boolean | ProdutoEstoqueDefaultArgs<ExtArgs>
    responsavel?: boolean | MovimentacaoRacao$responsavelArgs<ExtArgs>
  }

  export type $MovimentacaoRacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovimentacaoRacao"
    objects: {
      produto: Prisma.$ProdutoEstoquePayload<ExtArgs>
      responsavel: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      produto_id: string
      tipo_movimento: string
      data: Date
      quantidade_kg: number
      lote_id: string | null
      observacoes: string | null
      responsavel_id: string | null
    }, ExtArgs["result"]["movimentacaoRacao"]>
    composites: {}
  }

  type MovimentacaoRacaoGetPayload<S extends boolean | null | undefined | MovimentacaoRacaoDefaultArgs> = $Result.GetResult<Prisma.$MovimentacaoRacaoPayload, S>

  type MovimentacaoRacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovimentacaoRacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovimentacaoRacaoCountAggregateInputType | true
    }

  export interface MovimentacaoRacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovimentacaoRacao'], meta: { name: 'MovimentacaoRacao' } }
    /**
     * Find zero or one MovimentacaoRacao that matches the filter.
     * @param {MovimentacaoRacaoFindUniqueArgs} args - Arguments to find a MovimentacaoRacao
     * @example
     * // Get one MovimentacaoRacao
     * const movimentacaoRacao = await prisma.movimentacaoRacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovimentacaoRacaoFindUniqueArgs>(args: SelectSubset<T, MovimentacaoRacaoFindUniqueArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovimentacaoRacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovimentacaoRacaoFindUniqueOrThrowArgs} args - Arguments to find a MovimentacaoRacao
     * @example
     * // Get one MovimentacaoRacao
     * const movimentacaoRacao = await prisma.movimentacaoRacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovimentacaoRacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, MovimentacaoRacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoRacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoFindFirstArgs} args - Arguments to find a MovimentacaoRacao
     * @example
     * // Get one MovimentacaoRacao
     * const movimentacaoRacao = await prisma.movimentacaoRacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovimentacaoRacaoFindFirstArgs>(args?: SelectSubset<T, MovimentacaoRacaoFindFirstArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovimentacaoRacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoFindFirstOrThrowArgs} args - Arguments to find a MovimentacaoRacao
     * @example
     * // Get one MovimentacaoRacao
     * const movimentacaoRacao = await prisma.movimentacaoRacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovimentacaoRacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, MovimentacaoRacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovimentacaoRacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovimentacaoRacaos
     * const movimentacaoRacaos = await prisma.movimentacaoRacao.findMany()
     * 
     * // Get first 10 MovimentacaoRacaos
     * const movimentacaoRacaos = await prisma.movimentacaoRacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movimentacaoRacaoWithIdOnly = await prisma.movimentacaoRacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovimentacaoRacaoFindManyArgs>(args?: SelectSubset<T, MovimentacaoRacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovimentacaoRacao.
     * @param {MovimentacaoRacaoCreateArgs} args - Arguments to create a MovimentacaoRacao.
     * @example
     * // Create one MovimentacaoRacao
     * const MovimentacaoRacao = await prisma.movimentacaoRacao.create({
     *   data: {
     *     // ... data to create a MovimentacaoRacao
     *   }
     * })
     * 
     */
    create<T extends MovimentacaoRacaoCreateArgs>(args: SelectSubset<T, MovimentacaoRacaoCreateArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovimentacaoRacaos.
     * @param {MovimentacaoRacaoCreateManyArgs} args - Arguments to create many MovimentacaoRacaos.
     * @example
     * // Create many MovimentacaoRacaos
     * const movimentacaoRacao = await prisma.movimentacaoRacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovimentacaoRacaoCreateManyArgs>(args?: SelectSubset<T, MovimentacaoRacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MovimentacaoRacaos and returns the data saved in the database.
     * @param {MovimentacaoRacaoCreateManyAndReturnArgs} args - Arguments to create many MovimentacaoRacaos.
     * @example
     * // Create many MovimentacaoRacaos
     * const movimentacaoRacao = await prisma.movimentacaoRacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MovimentacaoRacaos and only return the `id`
     * const movimentacaoRacaoWithIdOnly = await prisma.movimentacaoRacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovimentacaoRacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, MovimentacaoRacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MovimentacaoRacao.
     * @param {MovimentacaoRacaoDeleteArgs} args - Arguments to delete one MovimentacaoRacao.
     * @example
     * // Delete one MovimentacaoRacao
     * const MovimentacaoRacao = await prisma.movimentacaoRacao.delete({
     *   where: {
     *     // ... filter to delete one MovimentacaoRacao
     *   }
     * })
     * 
     */
    delete<T extends MovimentacaoRacaoDeleteArgs>(args: SelectSubset<T, MovimentacaoRacaoDeleteArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovimentacaoRacao.
     * @param {MovimentacaoRacaoUpdateArgs} args - Arguments to update one MovimentacaoRacao.
     * @example
     * // Update one MovimentacaoRacao
     * const movimentacaoRacao = await prisma.movimentacaoRacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovimentacaoRacaoUpdateArgs>(args: SelectSubset<T, MovimentacaoRacaoUpdateArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovimentacaoRacaos.
     * @param {MovimentacaoRacaoDeleteManyArgs} args - Arguments to filter MovimentacaoRacaos to delete.
     * @example
     * // Delete a few MovimentacaoRacaos
     * const { count } = await prisma.movimentacaoRacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovimentacaoRacaoDeleteManyArgs>(args?: SelectSubset<T, MovimentacaoRacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoRacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovimentacaoRacaos
     * const movimentacaoRacao = await prisma.movimentacaoRacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovimentacaoRacaoUpdateManyArgs>(args: SelectSubset<T, MovimentacaoRacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovimentacaoRacaos and returns the data updated in the database.
     * @param {MovimentacaoRacaoUpdateManyAndReturnArgs} args - Arguments to update many MovimentacaoRacaos.
     * @example
     * // Update many MovimentacaoRacaos
     * const movimentacaoRacao = await prisma.movimentacaoRacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MovimentacaoRacaos and only return the `id`
     * const movimentacaoRacaoWithIdOnly = await prisma.movimentacaoRacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends MovimentacaoRacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, MovimentacaoRacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MovimentacaoRacao.
     * @param {MovimentacaoRacaoUpsertArgs} args - Arguments to update or create a MovimentacaoRacao.
     * @example
     * // Update or create a MovimentacaoRacao
     * const movimentacaoRacao = await prisma.movimentacaoRacao.upsert({
     *   create: {
     *     // ... data to create a MovimentacaoRacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovimentacaoRacao we want to update
     *   }
     * })
     */
    upsert<T extends MovimentacaoRacaoUpsertArgs>(args: SelectSubset<T, MovimentacaoRacaoUpsertArgs<ExtArgs>>): Prisma__MovimentacaoRacaoClient<$Result.GetResult<Prisma.$MovimentacaoRacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovimentacaoRacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoCountArgs} args - Arguments to filter MovimentacaoRacaos to count.
     * @example
     * // Count the number of MovimentacaoRacaos
     * const count = await prisma.movimentacaoRacao.count({
     *   where: {
     *     // ... the filter for the MovimentacaoRacaos we want to count
     *   }
     * })
    **/
    count<T extends MovimentacaoRacaoCountArgs>(
      args?: Subset<T, MovimentacaoRacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovimentacaoRacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovimentacaoRacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimentacaoRacaoAggregateArgs>(args: Subset<T, MovimentacaoRacaoAggregateArgs>): Prisma.PrismaPromise<GetMovimentacaoRacaoAggregateType<T>>

    /**
     * Group by MovimentacaoRacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimentacaoRacaoGroupByArgs} args - Group by arguments.
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
      T extends MovimentacaoRacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovimentacaoRacaoGroupByArgs['orderBy'] }
        : { orderBy?: MovimentacaoRacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovimentacaoRacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimentacaoRacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovimentacaoRacao model
   */
  readonly fields: MovimentacaoRacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovimentacaoRacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovimentacaoRacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produto<T extends ProdutoEstoqueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdutoEstoqueDefaultArgs<ExtArgs>>): Prisma__ProdutoEstoqueClient<$Result.GetResult<Prisma.$ProdutoEstoquePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    responsavel<T extends MovimentacaoRacao$responsavelArgs<ExtArgs> = {}>(args?: Subset<T, MovimentacaoRacao$responsavelArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MovimentacaoRacao model
   */
  interface MovimentacaoRacaoFieldRefs {
    readonly id: FieldRef<"MovimentacaoRacao", 'String'>
    readonly produto_id: FieldRef<"MovimentacaoRacao", 'String'>
    readonly tipo_movimento: FieldRef<"MovimentacaoRacao", 'String'>
    readonly data: FieldRef<"MovimentacaoRacao", 'DateTime'>
    readonly quantidade_kg: FieldRef<"MovimentacaoRacao", 'Float'>
    readonly lote_id: FieldRef<"MovimentacaoRacao", 'String'>
    readonly observacoes: FieldRef<"MovimentacaoRacao", 'String'>
    readonly responsavel_id: FieldRef<"MovimentacaoRacao", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovimentacaoRacao findUnique
   */
  export type MovimentacaoRacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoRacao to fetch.
     */
    where: MovimentacaoRacaoWhereUniqueInput
  }

  /**
   * MovimentacaoRacao findUniqueOrThrow
   */
  export type MovimentacaoRacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoRacao to fetch.
     */
    where: MovimentacaoRacaoWhereUniqueInput
  }

  /**
   * MovimentacaoRacao findFirst
   */
  export type MovimentacaoRacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoRacao to fetch.
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoRacaos to fetch.
     */
    orderBy?: MovimentacaoRacaoOrderByWithRelationInput | MovimentacaoRacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoRacaos.
     */
    cursor?: MovimentacaoRacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoRacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoRacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoRacaos.
     */
    distinct?: MovimentacaoRacaoScalarFieldEnum | MovimentacaoRacaoScalarFieldEnum[]
  }

  /**
   * MovimentacaoRacao findFirstOrThrow
   */
  export type MovimentacaoRacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoRacao to fetch.
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoRacaos to fetch.
     */
    orderBy?: MovimentacaoRacaoOrderByWithRelationInput | MovimentacaoRacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovimentacaoRacaos.
     */
    cursor?: MovimentacaoRacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoRacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoRacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovimentacaoRacaos.
     */
    distinct?: MovimentacaoRacaoScalarFieldEnum | MovimentacaoRacaoScalarFieldEnum[]
  }

  /**
   * MovimentacaoRacao findMany
   */
  export type MovimentacaoRacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * Filter, which MovimentacaoRacaos to fetch.
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovimentacaoRacaos to fetch.
     */
    orderBy?: MovimentacaoRacaoOrderByWithRelationInput | MovimentacaoRacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovimentacaoRacaos.
     */
    cursor?: MovimentacaoRacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovimentacaoRacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovimentacaoRacaos.
     */
    skip?: number
    distinct?: MovimentacaoRacaoScalarFieldEnum | MovimentacaoRacaoScalarFieldEnum[]
  }

  /**
   * MovimentacaoRacao create
   */
  export type MovimentacaoRacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a MovimentacaoRacao.
     */
    data: XOR<MovimentacaoRacaoCreateInput, MovimentacaoRacaoUncheckedCreateInput>
  }

  /**
   * MovimentacaoRacao createMany
   */
  export type MovimentacaoRacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovimentacaoRacaos.
     */
    data: MovimentacaoRacaoCreateManyInput | MovimentacaoRacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovimentacaoRacao createManyAndReturn
   */
  export type MovimentacaoRacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * The data used to create many MovimentacaoRacaos.
     */
    data: MovimentacaoRacaoCreateManyInput | MovimentacaoRacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoRacao update
   */
  export type MovimentacaoRacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a MovimentacaoRacao.
     */
    data: XOR<MovimentacaoRacaoUpdateInput, MovimentacaoRacaoUncheckedUpdateInput>
    /**
     * Choose, which MovimentacaoRacao to update.
     */
    where: MovimentacaoRacaoWhereUniqueInput
  }

  /**
   * MovimentacaoRacao updateMany
   */
  export type MovimentacaoRacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovimentacaoRacaos.
     */
    data: XOR<MovimentacaoRacaoUpdateManyMutationInput, MovimentacaoRacaoUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoRacaos to update
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * Limit how many MovimentacaoRacaos to update.
     */
    limit?: number
  }

  /**
   * MovimentacaoRacao updateManyAndReturn
   */
  export type MovimentacaoRacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * The data used to update MovimentacaoRacaos.
     */
    data: XOR<MovimentacaoRacaoUpdateManyMutationInput, MovimentacaoRacaoUncheckedUpdateManyInput>
    /**
     * Filter which MovimentacaoRacaos to update
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * Limit how many MovimentacaoRacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MovimentacaoRacao upsert
   */
  export type MovimentacaoRacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the MovimentacaoRacao to update in case it exists.
     */
    where: MovimentacaoRacaoWhereUniqueInput
    /**
     * In case the MovimentacaoRacao found by the `where` argument doesn't exist, create a new MovimentacaoRacao with this data.
     */
    create: XOR<MovimentacaoRacaoCreateInput, MovimentacaoRacaoUncheckedCreateInput>
    /**
     * In case the MovimentacaoRacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovimentacaoRacaoUpdateInput, MovimentacaoRacaoUncheckedUpdateInput>
  }

  /**
   * MovimentacaoRacao delete
   */
  export type MovimentacaoRacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
    /**
     * Filter which MovimentacaoRacao to delete.
     */
    where: MovimentacaoRacaoWhereUniqueInput
  }

  /**
   * MovimentacaoRacao deleteMany
   */
  export type MovimentacaoRacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovimentacaoRacaos to delete
     */
    where?: MovimentacaoRacaoWhereInput
    /**
     * Limit how many MovimentacaoRacaos to delete.
     */
    limit?: number
  }

  /**
   * MovimentacaoRacao.responsavel
   */
  export type MovimentacaoRacao$responsavelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * MovimentacaoRacao without action
   */
  export type MovimentacaoRacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimentacaoRacao
     */
    select?: MovimentacaoRacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovimentacaoRacao
     */
    omit?: MovimentacaoRacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovimentacaoRacaoInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    image: 'image',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastLogin: 'lastLogin',
    permissions: 'permissions'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TanqueScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    codigo_interno: 'codigo_interno',
    volume_m3: 'volume_m3',
    area_m2: 'area_m2',
    tipo: 'tipo',
    tipo_material: 'tipo_material',
    status: 'status',
    localizacao: 'localizacao',
    data_instalacao: 'data_instalacao',
    nivel_agua_cm: 'nivel_agua_cm',
    isActive: 'isActive',
    ciclo_atual_id: 'ciclo_atual_id'
  };

  export type TanqueScalarFieldEnum = (typeof TanqueScalarFieldEnum)[keyof typeof TanqueScalarFieldEnum]


  export const CicloProducaoScalarFieldEnum: {
    id: 'id',
    tanque_id: 'tanque_id',
    especie: 'especie',
    origem_lote: 'origem_lote',
    data_inicio: 'data_inicio',
    data_fim: 'data_fim',
    quantidade_inicial: 'quantidade_inicial',
    quantidade_atual: 'quantidade_atual',
    peso_inicial_g: 'peso_inicial_g',
    peso_atual: 'peso_atual',
    mortes: 'mortes',
    alimentacao_total_kg: 'alimentacao_total_kg',
    custo_total: 'custo_total',
    data_prevista_saida: 'data_prevista_saida',
    status: 'status'
  };

  export type CicloProducaoScalarFieldEnum = (typeof CicloProducaoScalarFieldEnum)[keyof typeof CicloProducaoScalarFieldEnum]


  export const RegistroDiarioScalarFieldEnum: {
    id: 'id',
    tanque_id: 'tanque_id',
    data: 'data',
    turno: 'turno',
    temperatura_agua: 'temperatura_agua',
    quantidade_kg: 'quantidade_kg',
    fracionamento: 'fracionamento',
    tipo_racao: 'tipo_racao',
    racao_marca: 'racao_marca',
    racao_codigo: 'racao_codigo',
    sobras: 'sobras',
    mortalidade: 'mortalidade',
    causa_morte: 'causa_morte',
    horas_aeracao: 'horas_aeracao',
    observacoes: 'observacoes',
    eventos_adversos: 'eventos_adversos',
    responsavel_id: 'responsavel_id',
    isAutomatic: 'isAutomatic'
  };

  export type RegistroDiarioScalarFieldEnum = (typeof RegistroDiarioScalarFieldEnum)[keyof typeof RegistroDiarioScalarFieldEnum]


  export const BiometriaScalarFieldEnum: {
    id: 'id',
    tanque_id: 'tanque_id',
    data_amostra: 'data_amostra',
    idade_lote_dias: 'idade_lote_dias',
    tamanho_amostra: 'tamanho_amostra',
    peso_total_kg: 'peso_total_kg',
    peso_minimo: 'peso_minimo',
    peso_maximo: 'peso_maximo',
    comprimento_medio_cm: 'comprimento_medio_cm',
    comprimento_minimo: 'comprimento_minimo',
    comprimento_maximo: 'comprimento_maximo',
    altura_minima: 'altura_minima',
    altura_maxima: 'altura_maxima',
    desvio_padrao_peso: 'desvio_padrao_peso',
    desvio_padrao_comprimento: 'desvio_padrao_comprimento',
    observacoes: 'observacoes',
    recomendacoes: 'recomendacoes',
    responsavel_id: 'responsavel_id'
  };

  export type BiometriaScalarFieldEnum = (typeof BiometriaScalarFieldEnum)[keyof typeof BiometriaScalarFieldEnum]


  export const QualidadeAguaScalarFieldEnum: {
    id: 'id',
    tanque_id: 'tanque_id',
    data_analise: 'data_analise',
    hora_coleta: 'hora_coleta',
    fonte_agua: 'fonte_agua',
    metodo_coleta: 'metodo_coleta',
    oxigenio_dissolvido: 'oxigenio_dissolvido',
    ph: 'ph',
    amonia: 'amonia',
    nitrito: 'nitrito',
    nitrato: 'nitrato',
    tds: 'tds',
    orp: 'orp',
    ec: 'ec',
    salppm: 'salppm',
    sal: 'sal',
    sg: 'sg',
    temperatura: 'temperatura',
    transparencia_cm: 'transparencia_cm',
    notas: 'notas',
    responsavel_id: 'responsavel_id'
  };

  export type QualidadeAguaScalarFieldEnum = (typeof QualidadeAguaScalarFieldEnum)[keyof typeof QualidadeAguaScalarFieldEnum]


  export const RegistroSaudeScalarFieldEnum: {
    id: 'id',
    tanque_id: 'tanque_id',
    data_registro: 'data_registro',
    sintomas: 'sintomas',
    percentual_afetado: 'percentual_afetado',
    diagnostico: 'diagnostico',
    patologia_codigo: 'patologia_codigo',
    produto: 'produto',
    dosagem: 'dosagem',
    dias_tratamento: 'dias_tratamento',
    dias_carencia: 'dias_carencia',
    resultado: 'resultado',
    data_diagnostico: 'data_diagnostico',
    usuario_id: 'usuario_id'
  };

  export type RegistroSaudeScalarFieldEnum = (typeof RegistroSaudeScalarFieldEnum)[keyof typeof RegistroSaudeScalarFieldEnum]


  export const ProdutoEstoqueScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    categoria: 'categoria',
    tipo: 'tipo',
    unidade_medida: 'unidade_medida',
    peso_por_unidade: 'peso_por_unidade',
    quantidade_unidades: 'quantidade_unidades',
    estoque_atual_kg: 'estoque_atual_kg',
    lote_numero: 'lote_numero',
    validade: 'validade',
    fornecedor: 'fornecedor',
    custo_unitario: 'custo_unitario',
    data_ultima_entrada: 'data_ultima_entrada',
    data_ultima_saida: 'data_ultima_saida'
  };

  export type ProdutoEstoqueScalarFieldEnum = (typeof ProdutoEstoqueScalarFieldEnum)[keyof typeof ProdutoEstoqueScalarFieldEnum]


  export const MovimentacaoTanqueScalarFieldEnum: {
    id: 'id',
    tanque_id: 'tanque_id',
    tipo_movimentacao: 'tipo_movimentacao',
    motivo: 'motivo',
    data: 'data',
    quantidade: 'quantidade',
    peso_medio_g: 'peso_medio_g',
    notas: 'notas',
    usuario_id: 'usuario_id'
  };

  export type MovimentacaoTanqueScalarFieldEnum = (typeof MovimentacaoTanqueScalarFieldEnum)[keyof typeof MovimentacaoTanqueScalarFieldEnum]


  export const MovimentacaoRacaoScalarFieldEnum: {
    id: 'id',
    produto_id: 'produto_id',
    tipo_movimento: 'tipo_movimento',
    data: 'data',
    quantidade_kg: 'quantidade_kg',
    lote_id: 'lote_id',
    observacoes: 'observacoes',
    responsavel_id: 'responsavel_id'
  };

  export type MovimentacaoRacaoScalarFieldEnum = (typeof MovimentacaoRacaoScalarFieldEnum)[keyof typeof MovimentacaoRacaoScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'TipoTanque'
   */
  export type EnumTipoTanqueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTanque'>
    


  /**
   * Reference to a field of type 'TipoTanque[]'
   */
  export type ListEnumTipoTanqueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTanque[]'>
    


  /**
   * Reference to a field of type 'StatusTanque'
   */
  export type EnumStatusTanqueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTanque'>
    


  /**
   * Reference to a field of type 'StatusTanque[]'
   */
  export type ListEnumStatusTanqueFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTanque[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Turno'
   */
  export type EnumTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Turno'>
    


  /**
   * Reference to a field of type 'Turno[]'
   */
  export type ListEnumTurnoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Turno[]'>
    


  /**
   * Reference to a field of type 'MovTanqueTipo'
   */
  export type EnumMovTanqueTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovTanqueTipo'>
    


  /**
   * Reference to a field of type 'MovTanqueTipo[]'
   */
  export type ListEnumMovTanqueTipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovTanqueTipo[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    image?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    permissions?: StringNullableListFilter<"User">
    responsavel_biometrias?: BiometriaListRelationFilter
    responsavel_qualidadeagua?: QualidadeAguaListRelationFilter
    responsavel_registrodiario?: RegistroDiarioListRelationFilter
    responsavel_movtanque?: MovimentacaoTanqueListRelationFilter
    responsavel_movracao?: MovimentacaoRacaoListRelationFilter
    responsavel_regsaude?: RegistroSaudeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    permissions?: SortOrder
    responsavel_biometrias?: BiometriaOrderByRelationAggregateInput
    responsavel_qualidadeagua?: QualidadeAguaOrderByRelationAggregateInput
    responsavel_registrodiario?: RegistroDiarioOrderByRelationAggregateInput
    responsavel_movtanque?: MovimentacaoTanqueOrderByRelationAggregateInput
    responsavel_movracao?: MovimentacaoRacaoOrderByRelationAggregateInput
    responsavel_regsaude?: RegistroSaudeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleNullableFilter<"User"> | $Enums.Role | null
    image?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    permissions?: StringNullableListFilter<"User">
    responsavel_biometrias?: BiometriaListRelationFilter
    responsavel_qualidadeagua?: QualidadeAguaListRelationFilter
    responsavel_registrodiario?: RegistroDiarioListRelationFilter
    responsavel_movtanque?: MovimentacaoTanqueListRelationFilter
    responsavel_movracao?: MovimentacaoRacaoListRelationFilter
    responsavel_regsaude?: RegistroSaudeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    permissions?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleNullableWithAggregatesFilter<"User"> | $Enums.Role | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    permissions?: StringNullableListFilter<"User">
  }

  export type TanqueWhereInput = {
    AND?: TanqueWhereInput | TanqueWhereInput[]
    OR?: TanqueWhereInput[]
    NOT?: TanqueWhereInput | TanqueWhereInput[]
    id?: StringFilter<"Tanque"> | string
    nome?: StringFilter<"Tanque"> | string
    codigo_interno?: StringNullableFilter<"Tanque"> | string | null
    volume_m3?: FloatFilter<"Tanque"> | number
    area_m2?: FloatNullableFilter<"Tanque"> | number | null
    tipo?: EnumTipoTanqueFilter<"Tanque"> | $Enums.TipoTanque
    tipo_material?: StringNullableFilter<"Tanque"> | string | null
    status?: EnumStatusTanqueFilter<"Tanque"> | $Enums.StatusTanque
    localizacao?: StringNullableFilter<"Tanque"> | string | null
    data_instalacao?: DateTimeNullableFilter<"Tanque"> | Date | string | null
    nivel_agua_cm?: FloatNullableFilter<"Tanque"> | number | null
    isActive?: BoolFilter<"Tanque"> | boolean
    ciclo_atual_id?: StringNullableFilter<"Tanque"> | string | null
    ciclo_atual?: XOR<CicloProducaoNullableScalarRelationFilter, CicloProducaoWhereInput> | null
    ciclos?: CicloProducaoListRelationFilter
    registros_diarios?: RegistroDiarioListRelationFilter
    biometrias?: BiometriaListRelationFilter
    qualidade_agua?: QualidadeAguaListRelationFilter
    registros_saude?: RegistroSaudeListRelationFilter
    movimentacoes?: MovimentacaoTanqueListRelationFilter
  }

  export type TanqueOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_interno?: SortOrderInput | SortOrder
    volume_m3?: SortOrder
    area_m2?: SortOrderInput | SortOrder
    tipo?: SortOrder
    tipo_material?: SortOrderInput | SortOrder
    status?: SortOrder
    localizacao?: SortOrderInput | SortOrder
    data_instalacao?: SortOrderInput | SortOrder
    nivel_agua_cm?: SortOrderInput | SortOrder
    isActive?: SortOrder
    ciclo_atual_id?: SortOrderInput | SortOrder
    ciclo_atual?: CicloProducaoOrderByWithRelationInput
    ciclos?: CicloProducaoOrderByRelationAggregateInput
    registros_diarios?: RegistroDiarioOrderByRelationAggregateInput
    biometrias?: BiometriaOrderByRelationAggregateInput
    qualidade_agua?: QualidadeAguaOrderByRelationAggregateInput
    registros_saude?: RegistroSaudeOrderByRelationAggregateInput
    movimentacoes?: MovimentacaoTanqueOrderByRelationAggregateInput
  }

  export type TanqueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    codigo_interno?: string
    ciclo_atual_id?: string
    AND?: TanqueWhereInput | TanqueWhereInput[]
    OR?: TanqueWhereInput[]
    NOT?: TanqueWhereInput | TanqueWhereInput[]
    volume_m3?: FloatFilter<"Tanque"> | number
    area_m2?: FloatNullableFilter<"Tanque"> | number | null
    tipo?: EnumTipoTanqueFilter<"Tanque"> | $Enums.TipoTanque
    tipo_material?: StringNullableFilter<"Tanque"> | string | null
    status?: EnumStatusTanqueFilter<"Tanque"> | $Enums.StatusTanque
    localizacao?: StringNullableFilter<"Tanque"> | string | null
    data_instalacao?: DateTimeNullableFilter<"Tanque"> | Date | string | null
    nivel_agua_cm?: FloatNullableFilter<"Tanque"> | number | null
    isActive?: BoolFilter<"Tanque"> | boolean
    ciclo_atual?: XOR<CicloProducaoNullableScalarRelationFilter, CicloProducaoWhereInput> | null
    ciclos?: CicloProducaoListRelationFilter
    registros_diarios?: RegistroDiarioListRelationFilter
    biometrias?: BiometriaListRelationFilter
    qualidade_agua?: QualidadeAguaListRelationFilter
    registros_saude?: RegistroSaudeListRelationFilter
    movimentacoes?: MovimentacaoTanqueListRelationFilter
  }, "id" | "nome" | "codigo_interno" | "ciclo_atual_id">

  export type TanqueOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_interno?: SortOrderInput | SortOrder
    volume_m3?: SortOrder
    area_m2?: SortOrderInput | SortOrder
    tipo?: SortOrder
    tipo_material?: SortOrderInput | SortOrder
    status?: SortOrder
    localizacao?: SortOrderInput | SortOrder
    data_instalacao?: SortOrderInput | SortOrder
    nivel_agua_cm?: SortOrderInput | SortOrder
    isActive?: SortOrder
    ciclo_atual_id?: SortOrderInput | SortOrder
    _count?: TanqueCountOrderByAggregateInput
    _avg?: TanqueAvgOrderByAggregateInput
    _max?: TanqueMaxOrderByAggregateInput
    _min?: TanqueMinOrderByAggregateInput
    _sum?: TanqueSumOrderByAggregateInput
  }

  export type TanqueScalarWhereWithAggregatesInput = {
    AND?: TanqueScalarWhereWithAggregatesInput | TanqueScalarWhereWithAggregatesInput[]
    OR?: TanqueScalarWhereWithAggregatesInput[]
    NOT?: TanqueScalarWhereWithAggregatesInput | TanqueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tanque"> | string
    nome?: StringWithAggregatesFilter<"Tanque"> | string
    codigo_interno?: StringNullableWithAggregatesFilter<"Tanque"> | string | null
    volume_m3?: FloatWithAggregatesFilter<"Tanque"> | number
    area_m2?: FloatNullableWithAggregatesFilter<"Tanque"> | number | null
    tipo?: EnumTipoTanqueWithAggregatesFilter<"Tanque"> | $Enums.TipoTanque
    tipo_material?: StringNullableWithAggregatesFilter<"Tanque"> | string | null
    status?: EnumStatusTanqueWithAggregatesFilter<"Tanque"> | $Enums.StatusTanque
    localizacao?: StringNullableWithAggregatesFilter<"Tanque"> | string | null
    data_instalacao?: DateTimeNullableWithAggregatesFilter<"Tanque"> | Date | string | null
    nivel_agua_cm?: FloatNullableWithAggregatesFilter<"Tanque"> | number | null
    isActive?: BoolWithAggregatesFilter<"Tanque"> | boolean
    ciclo_atual_id?: StringNullableWithAggregatesFilter<"Tanque"> | string | null
  }

  export type CicloProducaoWhereInput = {
    AND?: CicloProducaoWhereInput | CicloProducaoWhereInput[]
    OR?: CicloProducaoWhereInput[]
    NOT?: CicloProducaoWhereInput | CicloProducaoWhereInput[]
    id?: StringFilter<"CicloProducao"> | string
    tanque_id?: StringFilter<"CicloProducao"> | string
    especie?: StringNullableFilter<"CicloProducao"> | string | null
    origem_lote?: StringNullableFilter<"CicloProducao"> | string | null
    data_inicio?: DateTimeFilter<"CicloProducao"> | Date | string
    data_fim?: DateTimeNullableFilter<"CicloProducao"> | Date | string | null
    quantidade_inicial?: IntFilter<"CicloProducao"> | number
    quantidade_atual?: IntNullableFilter<"CicloProducao"> | number | null
    peso_inicial_g?: FloatFilter<"CicloProducao"> | number
    peso_atual?: FloatNullableFilter<"CicloProducao"> | number | null
    mortes?: IntNullableFilter<"CicloProducao"> | number | null
    alimentacao_total_kg?: FloatNullableFilter<"CicloProducao"> | number | null
    custo_total?: FloatNullableFilter<"CicloProducao"> | number | null
    data_prevista_saida?: DateTimeNullableFilter<"CicloProducao"> | Date | string | null
    status?: StringFilter<"CicloProducao"> | string
    tanque_ciclo_ativo?: XOR<TanqueNullableScalarRelationFilter, TanqueWhereInput> | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
  }

  export type CicloProducaoOrderByWithRelationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    especie?: SortOrderInput | SortOrder
    origem_lote?: SortOrderInput | SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrderInput | SortOrder
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrderInput | SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrderInput | SortOrder
    mortes?: SortOrderInput | SortOrder
    alimentacao_total_kg?: SortOrderInput | SortOrder
    custo_total?: SortOrderInput | SortOrder
    data_prevista_saida?: SortOrderInput | SortOrder
    status?: SortOrder
    tanque_ciclo_ativo?: TanqueOrderByWithRelationInput
    tanque?: TanqueOrderByWithRelationInput
  }

  export type CicloProducaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CicloProducaoWhereInput | CicloProducaoWhereInput[]
    OR?: CicloProducaoWhereInput[]
    NOT?: CicloProducaoWhereInput | CicloProducaoWhereInput[]
    tanque_id?: StringFilter<"CicloProducao"> | string
    especie?: StringNullableFilter<"CicloProducao"> | string | null
    origem_lote?: StringNullableFilter<"CicloProducao"> | string | null
    data_inicio?: DateTimeFilter<"CicloProducao"> | Date | string
    data_fim?: DateTimeNullableFilter<"CicloProducao"> | Date | string | null
    quantidade_inicial?: IntFilter<"CicloProducao"> | number
    quantidade_atual?: IntNullableFilter<"CicloProducao"> | number | null
    peso_inicial_g?: FloatFilter<"CicloProducao"> | number
    peso_atual?: FloatNullableFilter<"CicloProducao"> | number | null
    mortes?: IntNullableFilter<"CicloProducao"> | number | null
    alimentacao_total_kg?: FloatNullableFilter<"CicloProducao"> | number | null
    custo_total?: FloatNullableFilter<"CicloProducao"> | number | null
    data_prevista_saida?: DateTimeNullableFilter<"CicloProducao"> | Date | string | null
    status?: StringFilter<"CicloProducao"> | string
    tanque_ciclo_ativo?: XOR<TanqueNullableScalarRelationFilter, TanqueWhereInput> | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
  }, "id">

  export type CicloProducaoOrderByWithAggregationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    especie?: SortOrderInput | SortOrder
    origem_lote?: SortOrderInput | SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrderInput | SortOrder
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrderInput | SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrderInput | SortOrder
    mortes?: SortOrderInput | SortOrder
    alimentacao_total_kg?: SortOrderInput | SortOrder
    custo_total?: SortOrderInput | SortOrder
    data_prevista_saida?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: CicloProducaoCountOrderByAggregateInput
    _avg?: CicloProducaoAvgOrderByAggregateInput
    _max?: CicloProducaoMaxOrderByAggregateInput
    _min?: CicloProducaoMinOrderByAggregateInput
    _sum?: CicloProducaoSumOrderByAggregateInput
  }

  export type CicloProducaoScalarWhereWithAggregatesInput = {
    AND?: CicloProducaoScalarWhereWithAggregatesInput | CicloProducaoScalarWhereWithAggregatesInput[]
    OR?: CicloProducaoScalarWhereWithAggregatesInput[]
    NOT?: CicloProducaoScalarWhereWithAggregatesInput | CicloProducaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CicloProducao"> | string
    tanque_id?: StringWithAggregatesFilter<"CicloProducao"> | string
    especie?: StringNullableWithAggregatesFilter<"CicloProducao"> | string | null
    origem_lote?: StringNullableWithAggregatesFilter<"CicloProducao"> | string | null
    data_inicio?: DateTimeWithAggregatesFilter<"CicloProducao"> | Date | string
    data_fim?: DateTimeNullableWithAggregatesFilter<"CicloProducao"> | Date | string | null
    quantidade_inicial?: IntWithAggregatesFilter<"CicloProducao"> | number
    quantidade_atual?: IntNullableWithAggregatesFilter<"CicloProducao"> | number | null
    peso_inicial_g?: FloatWithAggregatesFilter<"CicloProducao"> | number
    peso_atual?: FloatNullableWithAggregatesFilter<"CicloProducao"> | number | null
    mortes?: IntNullableWithAggregatesFilter<"CicloProducao"> | number | null
    alimentacao_total_kg?: FloatNullableWithAggregatesFilter<"CicloProducao"> | number | null
    custo_total?: FloatNullableWithAggregatesFilter<"CicloProducao"> | number | null
    data_prevista_saida?: DateTimeNullableWithAggregatesFilter<"CicloProducao"> | Date | string | null
    status?: StringWithAggregatesFilter<"CicloProducao"> | string
  }

  export type RegistroDiarioWhereInput = {
    AND?: RegistroDiarioWhereInput | RegistroDiarioWhereInput[]
    OR?: RegistroDiarioWhereInput[]
    NOT?: RegistroDiarioWhereInput | RegistroDiarioWhereInput[]
    id?: StringFilter<"RegistroDiario"> | string
    tanque_id?: StringFilter<"RegistroDiario"> | string
    data?: DateTimeFilter<"RegistroDiario"> | Date | string
    turno?: EnumTurnoNullableFilter<"RegistroDiario"> | $Enums.Turno | null
    temperatura_agua?: FloatFilter<"RegistroDiario"> | number
    quantidade_kg?: FloatNullableFilter<"RegistroDiario"> | number | null
    fracionamento?: IntNullableFilter<"RegistroDiario"> | number | null
    tipo_racao?: StringNullableFilter<"RegistroDiario"> | string | null
    racao_marca?: StringNullableFilter<"RegistroDiario"> | string | null
    racao_codigo?: StringNullableFilter<"RegistroDiario"> | string | null
    sobras?: BoolNullableFilter<"RegistroDiario"> | boolean | null
    mortalidade?: IntNullableFilter<"RegistroDiario"> | number | null
    causa_morte?: StringNullableFilter<"RegistroDiario"> | string | null
    horas_aeracao?: FloatNullableFilter<"RegistroDiario"> | number | null
    observacoes?: StringNullableFilter<"RegistroDiario"> | string | null
    eventos_adversos?: StringNullableFilter<"RegistroDiario"> | string | null
    responsavel_id?: StringNullableFilter<"RegistroDiario"> | string | null
    isAutomatic?: BoolFilter<"RegistroDiario"> | boolean
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RegistroDiarioOrderByWithRelationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data?: SortOrder
    turno?: SortOrderInput | SortOrder
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrderInput | SortOrder
    fracionamento?: SortOrderInput | SortOrder
    tipo_racao?: SortOrderInput | SortOrder
    racao_marca?: SortOrderInput | SortOrder
    racao_codigo?: SortOrderInput | SortOrder
    sobras?: SortOrderInput | SortOrder
    mortalidade?: SortOrderInput | SortOrder
    causa_morte?: SortOrderInput | SortOrder
    horas_aeracao?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    eventos_adversos?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    isAutomatic?: SortOrder
    tanque?: TanqueOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type RegistroDiarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroDiarioWhereInput | RegistroDiarioWhereInput[]
    OR?: RegistroDiarioWhereInput[]
    NOT?: RegistroDiarioWhereInput | RegistroDiarioWhereInput[]
    tanque_id?: StringFilter<"RegistroDiario"> | string
    data?: DateTimeFilter<"RegistroDiario"> | Date | string
    turno?: EnumTurnoNullableFilter<"RegistroDiario"> | $Enums.Turno | null
    temperatura_agua?: FloatFilter<"RegistroDiario"> | number
    quantidade_kg?: FloatNullableFilter<"RegistroDiario"> | number | null
    fracionamento?: IntNullableFilter<"RegistroDiario"> | number | null
    tipo_racao?: StringNullableFilter<"RegistroDiario"> | string | null
    racao_marca?: StringNullableFilter<"RegistroDiario"> | string | null
    racao_codigo?: StringNullableFilter<"RegistroDiario"> | string | null
    sobras?: BoolNullableFilter<"RegistroDiario"> | boolean | null
    mortalidade?: IntNullableFilter<"RegistroDiario"> | number | null
    causa_morte?: StringNullableFilter<"RegistroDiario"> | string | null
    horas_aeracao?: FloatNullableFilter<"RegistroDiario"> | number | null
    observacoes?: StringNullableFilter<"RegistroDiario"> | string | null
    eventos_adversos?: StringNullableFilter<"RegistroDiario"> | string | null
    responsavel_id?: StringNullableFilter<"RegistroDiario"> | string | null
    isAutomatic?: BoolFilter<"RegistroDiario"> | boolean
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RegistroDiarioOrderByWithAggregationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data?: SortOrder
    turno?: SortOrderInput | SortOrder
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrderInput | SortOrder
    fracionamento?: SortOrderInput | SortOrder
    tipo_racao?: SortOrderInput | SortOrder
    racao_marca?: SortOrderInput | SortOrder
    racao_codigo?: SortOrderInput | SortOrder
    sobras?: SortOrderInput | SortOrder
    mortalidade?: SortOrderInput | SortOrder
    causa_morte?: SortOrderInput | SortOrder
    horas_aeracao?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    eventos_adversos?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    isAutomatic?: SortOrder
    _count?: RegistroDiarioCountOrderByAggregateInput
    _avg?: RegistroDiarioAvgOrderByAggregateInput
    _max?: RegistroDiarioMaxOrderByAggregateInput
    _min?: RegistroDiarioMinOrderByAggregateInput
    _sum?: RegistroDiarioSumOrderByAggregateInput
  }

  export type RegistroDiarioScalarWhereWithAggregatesInput = {
    AND?: RegistroDiarioScalarWhereWithAggregatesInput | RegistroDiarioScalarWhereWithAggregatesInput[]
    OR?: RegistroDiarioScalarWhereWithAggregatesInput[]
    NOT?: RegistroDiarioScalarWhereWithAggregatesInput | RegistroDiarioScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroDiario"> | string
    tanque_id?: StringWithAggregatesFilter<"RegistroDiario"> | string
    data?: DateTimeWithAggregatesFilter<"RegistroDiario"> | Date | string
    turno?: EnumTurnoNullableWithAggregatesFilter<"RegistroDiario"> | $Enums.Turno | null
    temperatura_agua?: FloatWithAggregatesFilter<"RegistroDiario"> | number
    quantidade_kg?: FloatNullableWithAggregatesFilter<"RegistroDiario"> | number | null
    fracionamento?: IntNullableWithAggregatesFilter<"RegistroDiario"> | number | null
    tipo_racao?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    racao_marca?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    racao_codigo?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    sobras?: BoolNullableWithAggregatesFilter<"RegistroDiario"> | boolean | null
    mortalidade?: IntNullableWithAggregatesFilter<"RegistroDiario"> | number | null
    causa_morte?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    horas_aeracao?: FloatNullableWithAggregatesFilter<"RegistroDiario"> | number | null
    observacoes?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    eventos_adversos?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    responsavel_id?: StringNullableWithAggregatesFilter<"RegistroDiario"> | string | null
    isAutomatic?: BoolWithAggregatesFilter<"RegistroDiario"> | boolean
  }

  export type BiometriaWhereInput = {
    AND?: BiometriaWhereInput | BiometriaWhereInput[]
    OR?: BiometriaWhereInput[]
    NOT?: BiometriaWhereInput | BiometriaWhereInput[]
    id?: StringFilter<"Biometria"> | string
    tanque_id?: StringFilter<"Biometria"> | string
    data_amostra?: DateTimeFilter<"Biometria"> | Date | string
    idade_lote_dias?: IntNullableFilter<"Biometria"> | number | null
    tamanho_amostra?: IntFilter<"Biometria"> | number
    peso_total_kg?: FloatFilter<"Biometria"> | number
    peso_minimo?: FloatNullableFilter<"Biometria"> | number | null
    peso_maximo?: FloatNullableFilter<"Biometria"> | number | null
    comprimento_medio_cm?: FloatFilter<"Biometria"> | number
    comprimento_minimo?: FloatNullableFilter<"Biometria"> | number | null
    comprimento_maximo?: FloatNullableFilter<"Biometria"> | number | null
    altura_minima?: FloatNullableFilter<"Biometria"> | number | null
    altura_maxima?: FloatNullableFilter<"Biometria"> | number | null
    desvio_padrao_peso?: FloatNullableFilter<"Biometria"> | number | null
    desvio_padrao_comprimento?: FloatNullableFilter<"Biometria"> | number | null
    observacoes?: StringNullableFilter<"Biometria"> | string | null
    recomendacoes?: StringNullableFilter<"Biometria"> | string | null
    responsavel_id?: StringNullableFilter<"Biometria"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BiometriaOrderByWithRelationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_amostra?: SortOrder
    idade_lote_dias?: SortOrderInput | SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrderInput | SortOrder
    peso_maximo?: SortOrderInput | SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrderInput | SortOrder
    comprimento_maximo?: SortOrderInput | SortOrder
    altura_minima?: SortOrderInput | SortOrder
    altura_maxima?: SortOrderInput | SortOrder
    desvio_padrao_peso?: SortOrderInput | SortOrder
    desvio_padrao_comprimento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    recomendacoes?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    tanque?: TanqueOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type BiometriaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BiometriaWhereInput | BiometriaWhereInput[]
    OR?: BiometriaWhereInput[]
    NOT?: BiometriaWhereInput | BiometriaWhereInput[]
    tanque_id?: StringFilter<"Biometria"> | string
    data_amostra?: DateTimeFilter<"Biometria"> | Date | string
    idade_lote_dias?: IntNullableFilter<"Biometria"> | number | null
    tamanho_amostra?: IntFilter<"Biometria"> | number
    peso_total_kg?: FloatFilter<"Biometria"> | number
    peso_minimo?: FloatNullableFilter<"Biometria"> | number | null
    peso_maximo?: FloatNullableFilter<"Biometria"> | number | null
    comprimento_medio_cm?: FloatFilter<"Biometria"> | number
    comprimento_minimo?: FloatNullableFilter<"Biometria"> | number | null
    comprimento_maximo?: FloatNullableFilter<"Biometria"> | number | null
    altura_minima?: FloatNullableFilter<"Biometria"> | number | null
    altura_maxima?: FloatNullableFilter<"Biometria"> | number | null
    desvio_padrao_peso?: FloatNullableFilter<"Biometria"> | number | null
    desvio_padrao_comprimento?: FloatNullableFilter<"Biometria"> | number | null
    observacoes?: StringNullableFilter<"Biometria"> | string | null
    recomendacoes?: StringNullableFilter<"Biometria"> | string | null
    responsavel_id?: StringNullableFilter<"Biometria"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type BiometriaOrderByWithAggregationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_amostra?: SortOrder
    idade_lote_dias?: SortOrderInput | SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrderInput | SortOrder
    peso_maximo?: SortOrderInput | SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrderInput | SortOrder
    comprimento_maximo?: SortOrderInput | SortOrder
    altura_minima?: SortOrderInput | SortOrder
    altura_maxima?: SortOrderInput | SortOrder
    desvio_padrao_peso?: SortOrderInput | SortOrder
    desvio_padrao_comprimento?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    recomendacoes?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    _count?: BiometriaCountOrderByAggregateInput
    _avg?: BiometriaAvgOrderByAggregateInput
    _max?: BiometriaMaxOrderByAggregateInput
    _min?: BiometriaMinOrderByAggregateInput
    _sum?: BiometriaSumOrderByAggregateInput
  }

  export type BiometriaScalarWhereWithAggregatesInput = {
    AND?: BiometriaScalarWhereWithAggregatesInput | BiometriaScalarWhereWithAggregatesInput[]
    OR?: BiometriaScalarWhereWithAggregatesInput[]
    NOT?: BiometriaScalarWhereWithAggregatesInput | BiometriaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Biometria"> | string
    tanque_id?: StringWithAggregatesFilter<"Biometria"> | string
    data_amostra?: DateTimeWithAggregatesFilter<"Biometria"> | Date | string
    idade_lote_dias?: IntNullableWithAggregatesFilter<"Biometria"> | number | null
    tamanho_amostra?: IntWithAggregatesFilter<"Biometria"> | number
    peso_total_kg?: FloatWithAggregatesFilter<"Biometria"> | number
    peso_minimo?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    peso_maximo?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    comprimento_medio_cm?: FloatWithAggregatesFilter<"Biometria"> | number
    comprimento_minimo?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    comprimento_maximo?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    altura_minima?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    altura_maxima?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    desvio_padrao_peso?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    desvio_padrao_comprimento?: FloatNullableWithAggregatesFilter<"Biometria"> | number | null
    observacoes?: StringNullableWithAggregatesFilter<"Biometria"> | string | null
    recomendacoes?: StringNullableWithAggregatesFilter<"Biometria"> | string | null
    responsavel_id?: StringNullableWithAggregatesFilter<"Biometria"> | string | null
  }

  export type QualidadeAguaWhereInput = {
    AND?: QualidadeAguaWhereInput | QualidadeAguaWhereInput[]
    OR?: QualidadeAguaWhereInput[]
    NOT?: QualidadeAguaWhereInput | QualidadeAguaWhereInput[]
    id?: StringFilter<"QualidadeAgua"> | string
    tanque_id?: StringFilter<"QualidadeAgua"> | string
    data_analise?: DateTimeFilter<"QualidadeAgua"> | Date | string
    hora_coleta?: StringNullableFilter<"QualidadeAgua"> | string | null
    fonte_agua?: StringNullableFilter<"QualidadeAgua"> | string | null
    metodo_coleta?: StringNullableFilter<"QualidadeAgua"> | string | null
    oxigenio_dissolvido?: FloatFilter<"QualidadeAgua"> | number
    ph?: FloatFilter<"QualidadeAgua"> | number
    amonia?: FloatFilter<"QualidadeAgua"> | number
    nitrito?: FloatFilter<"QualidadeAgua"> | number
    nitrato?: FloatNullableFilter<"QualidadeAgua"> | number | null
    tds?: FloatNullableFilter<"QualidadeAgua"> | number | null
    orp?: FloatNullableFilter<"QualidadeAgua"> | number | null
    ec?: FloatNullableFilter<"QualidadeAgua"> | number | null
    salppm?: FloatNullableFilter<"QualidadeAgua"> | number | null
    sal?: FloatNullableFilter<"QualidadeAgua"> | number | null
    sg?: FloatNullableFilter<"QualidadeAgua"> | number | null
    temperatura?: FloatFilter<"QualidadeAgua"> | number
    transparencia_cm?: IntFilter<"QualidadeAgua"> | number
    notas?: StringNullableFilter<"QualidadeAgua"> | string | null
    responsavel_id?: StringNullableFilter<"QualidadeAgua"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type QualidadeAguaOrderByWithRelationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_analise?: SortOrder
    hora_coleta?: SortOrderInput | SortOrder
    fonte_agua?: SortOrderInput | SortOrder
    metodo_coleta?: SortOrderInput | SortOrder
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrderInput | SortOrder
    tds?: SortOrderInput | SortOrder
    orp?: SortOrderInput | SortOrder
    ec?: SortOrderInput | SortOrder
    salppm?: SortOrderInput | SortOrder
    sal?: SortOrderInput | SortOrder
    sg?: SortOrderInput | SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
    notas?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    tanque?: TanqueOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type QualidadeAguaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QualidadeAguaWhereInput | QualidadeAguaWhereInput[]
    OR?: QualidadeAguaWhereInput[]
    NOT?: QualidadeAguaWhereInput | QualidadeAguaWhereInput[]
    tanque_id?: StringFilter<"QualidadeAgua"> | string
    data_analise?: DateTimeFilter<"QualidadeAgua"> | Date | string
    hora_coleta?: StringNullableFilter<"QualidadeAgua"> | string | null
    fonte_agua?: StringNullableFilter<"QualidadeAgua"> | string | null
    metodo_coleta?: StringNullableFilter<"QualidadeAgua"> | string | null
    oxigenio_dissolvido?: FloatFilter<"QualidadeAgua"> | number
    ph?: FloatFilter<"QualidadeAgua"> | number
    amonia?: FloatFilter<"QualidadeAgua"> | number
    nitrito?: FloatFilter<"QualidadeAgua"> | number
    nitrato?: FloatNullableFilter<"QualidadeAgua"> | number | null
    tds?: FloatNullableFilter<"QualidadeAgua"> | number | null
    orp?: FloatNullableFilter<"QualidadeAgua"> | number | null
    ec?: FloatNullableFilter<"QualidadeAgua"> | number | null
    salppm?: FloatNullableFilter<"QualidadeAgua"> | number | null
    sal?: FloatNullableFilter<"QualidadeAgua"> | number | null
    sg?: FloatNullableFilter<"QualidadeAgua"> | number | null
    temperatura?: FloatFilter<"QualidadeAgua"> | number
    transparencia_cm?: IntFilter<"QualidadeAgua"> | number
    notas?: StringNullableFilter<"QualidadeAgua"> | string | null
    responsavel_id?: StringNullableFilter<"QualidadeAgua"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type QualidadeAguaOrderByWithAggregationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_analise?: SortOrder
    hora_coleta?: SortOrderInput | SortOrder
    fonte_agua?: SortOrderInput | SortOrder
    metodo_coleta?: SortOrderInput | SortOrder
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrderInput | SortOrder
    tds?: SortOrderInput | SortOrder
    orp?: SortOrderInput | SortOrder
    ec?: SortOrderInput | SortOrder
    salppm?: SortOrderInput | SortOrder
    sal?: SortOrderInput | SortOrder
    sg?: SortOrderInput | SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
    notas?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    _count?: QualidadeAguaCountOrderByAggregateInput
    _avg?: QualidadeAguaAvgOrderByAggregateInput
    _max?: QualidadeAguaMaxOrderByAggregateInput
    _min?: QualidadeAguaMinOrderByAggregateInput
    _sum?: QualidadeAguaSumOrderByAggregateInput
  }

  export type QualidadeAguaScalarWhereWithAggregatesInput = {
    AND?: QualidadeAguaScalarWhereWithAggregatesInput | QualidadeAguaScalarWhereWithAggregatesInput[]
    OR?: QualidadeAguaScalarWhereWithAggregatesInput[]
    NOT?: QualidadeAguaScalarWhereWithAggregatesInput | QualidadeAguaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QualidadeAgua"> | string
    tanque_id?: StringWithAggregatesFilter<"QualidadeAgua"> | string
    data_analise?: DateTimeWithAggregatesFilter<"QualidadeAgua"> | Date | string
    hora_coleta?: StringNullableWithAggregatesFilter<"QualidadeAgua"> | string | null
    fonte_agua?: StringNullableWithAggregatesFilter<"QualidadeAgua"> | string | null
    metodo_coleta?: StringNullableWithAggregatesFilter<"QualidadeAgua"> | string | null
    oxigenio_dissolvido?: FloatWithAggregatesFilter<"QualidadeAgua"> | number
    ph?: FloatWithAggregatesFilter<"QualidadeAgua"> | number
    amonia?: FloatWithAggregatesFilter<"QualidadeAgua"> | number
    nitrito?: FloatWithAggregatesFilter<"QualidadeAgua"> | number
    nitrato?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    tds?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    orp?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    ec?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    salppm?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    sal?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    sg?: FloatNullableWithAggregatesFilter<"QualidadeAgua"> | number | null
    temperatura?: FloatWithAggregatesFilter<"QualidadeAgua"> | number
    transparencia_cm?: IntWithAggregatesFilter<"QualidadeAgua"> | number
    notas?: StringNullableWithAggregatesFilter<"QualidadeAgua"> | string | null
    responsavel_id?: StringNullableWithAggregatesFilter<"QualidadeAgua"> | string | null
  }

  export type RegistroSaudeWhereInput = {
    AND?: RegistroSaudeWhereInput | RegistroSaudeWhereInput[]
    OR?: RegistroSaudeWhereInput[]
    NOT?: RegistroSaudeWhereInput | RegistroSaudeWhereInput[]
    id?: StringFilter<"RegistroSaude"> | string
    tanque_id?: StringFilter<"RegistroSaude"> | string
    data_registro?: DateTimeFilter<"RegistroSaude"> | Date | string
    sintomas?: StringNullableFilter<"RegistroSaude"> | string | null
    percentual_afetado?: FloatNullableFilter<"RegistroSaude"> | number | null
    diagnostico?: StringNullableFilter<"RegistroSaude"> | string | null
    patologia_codigo?: StringNullableFilter<"RegistroSaude"> | string | null
    produto?: StringNullableFilter<"RegistroSaude"> | string | null
    dosagem?: StringNullableFilter<"RegistroSaude"> | string | null
    dias_tratamento?: IntNullableFilter<"RegistroSaude"> | number | null
    dias_carencia?: IntNullableFilter<"RegistroSaude"> | number | null
    resultado?: StringNullableFilter<"RegistroSaude"> | string | null
    data_diagnostico?: DateTimeNullableFilter<"RegistroSaude"> | Date | string | null
    usuario_id?: StringNullableFilter<"RegistroSaude"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RegistroSaudeOrderByWithRelationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_registro?: SortOrder
    sintomas?: SortOrderInput | SortOrder
    percentual_afetado?: SortOrderInput | SortOrder
    diagnostico?: SortOrderInput | SortOrder
    patologia_codigo?: SortOrderInput | SortOrder
    produto?: SortOrderInput | SortOrder
    dosagem?: SortOrderInput | SortOrder
    dias_tratamento?: SortOrderInput | SortOrder
    dias_carencia?: SortOrderInput | SortOrder
    resultado?: SortOrderInput | SortOrder
    data_diagnostico?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    tanque?: TanqueOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type RegistroSaudeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegistroSaudeWhereInput | RegistroSaudeWhereInput[]
    OR?: RegistroSaudeWhereInput[]
    NOT?: RegistroSaudeWhereInput | RegistroSaudeWhereInput[]
    tanque_id?: StringFilter<"RegistroSaude"> | string
    data_registro?: DateTimeFilter<"RegistroSaude"> | Date | string
    sintomas?: StringNullableFilter<"RegistroSaude"> | string | null
    percentual_afetado?: FloatNullableFilter<"RegistroSaude"> | number | null
    diagnostico?: StringNullableFilter<"RegistroSaude"> | string | null
    patologia_codigo?: StringNullableFilter<"RegistroSaude"> | string | null
    produto?: StringNullableFilter<"RegistroSaude"> | string | null
    dosagem?: StringNullableFilter<"RegistroSaude"> | string | null
    dias_tratamento?: IntNullableFilter<"RegistroSaude"> | number | null
    dias_carencia?: IntNullableFilter<"RegistroSaude"> | number | null
    resultado?: StringNullableFilter<"RegistroSaude"> | string | null
    data_diagnostico?: DateTimeNullableFilter<"RegistroSaude"> | Date | string | null
    usuario_id?: StringNullableFilter<"RegistroSaude"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type RegistroSaudeOrderByWithAggregationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_registro?: SortOrder
    sintomas?: SortOrderInput | SortOrder
    percentual_afetado?: SortOrderInput | SortOrder
    diagnostico?: SortOrderInput | SortOrder
    patologia_codigo?: SortOrderInput | SortOrder
    produto?: SortOrderInput | SortOrder
    dosagem?: SortOrderInput | SortOrder
    dias_tratamento?: SortOrderInput | SortOrder
    dias_carencia?: SortOrderInput | SortOrder
    resultado?: SortOrderInput | SortOrder
    data_diagnostico?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: RegistroSaudeCountOrderByAggregateInput
    _avg?: RegistroSaudeAvgOrderByAggregateInput
    _max?: RegistroSaudeMaxOrderByAggregateInput
    _min?: RegistroSaudeMinOrderByAggregateInput
    _sum?: RegistroSaudeSumOrderByAggregateInput
  }

  export type RegistroSaudeScalarWhereWithAggregatesInput = {
    AND?: RegistroSaudeScalarWhereWithAggregatesInput | RegistroSaudeScalarWhereWithAggregatesInput[]
    OR?: RegistroSaudeScalarWhereWithAggregatesInput[]
    NOT?: RegistroSaudeScalarWhereWithAggregatesInput | RegistroSaudeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegistroSaude"> | string
    tanque_id?: StringWithAggregatesFilter<"RegistroSaude"> | string
    data_registro?: DateTimeWithAggregatesFilter<"RegistroSaude"> | Date | string
    sintomas?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
    percentual_afetado?: FloatNullableWithAggregatesFilter<"RegistroSaude"> | number | null
    diagnostico?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
    patologia_codigo?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
    produto?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
    dosagem?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
    dias_tratamento?: IntNullableWithAggregatesFilter<"RegistroSaude"> | number | null
    dias_carencia?: IntNullableWithAggregatesFilter<"RegistroSaude"> | number | null
    resultado?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
    data_diagnostico?: DateTimeNullableWithAggregatesFilter<"RegistroSaude"> | Date | string | null
    usuario_id?: StringNullableWithAggregatesFilter<"RegistroSaude"> | string | null
  }

  export type ProdutoEstoqueWhereInput = {
    AND?: ProdutoEstoqueWhereInput | ProdutoEstoqueWhereInput[]
    OR?: ProdutoEstoqueWhereInput[]
    NOT?: ProdutoEstoqueWhereInput | ProdutoEstoqueWhereInput[]
    id?: StringFilter<"ProdutoEstoque"> | string
    nome?: StringFilter<"ProdutoEstoque"> | string
    categoria?: StringNullableFilter<"ProdutoEstoque"> | string | null
    tipo?: StringFilter<"ProdutoEstoque"> | string
    unidade_medida?: StringFilter<"ProdutoEstoque"> | string
    peso_por_unidade?: FloatFilter<"ProdutoEstoque"> | number
    quantidade_unidades?: IntFilter<"ProdutoEstoque"> | number
    estoque_atual_kg?: FloatFilter<"ProdutoEstoque"> | number
    lote_numero?: StringNullableFilter<"ProdutoEstoque"> | string | null
    validade?: DateTimeNullableFilter<"ProdutoEstoque"> | Date | string | null
    fornecedor?: StringNullableFilter<"ProdutoEstoque"> | string | null
    custo_unitario?: FloatNullableFilter<"ProdutoEstoque"> | number | null
    data_ultima_entrada?: DateTimeNullableFilter<"ProdutoEstoque"> | Date | string | null
    data_ultima_saida?: DateTimeNullableFilter<"ProdutoEstoque"> | Date | string | null
    movimentacoes?: MovimentacaoRacaoListRelationFilter
  }

  export type ProdutoEstoqueOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrderInput | SortOrder
    tipo?: SortOrder
    unidade_medida?: SortOrder
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    lote_numero?: SortOrderInput | SortOrder
    validade?: SortOrderInput | SortOrder
    fornecedor?: SortOrderInput | SortOrder
    custo_unitario?: SortOrderInput | SortOrder
    data_ultima_entrada?: SortOrderInput | SortOrder
    data_ultima_saida?: SortOrderInput | SortOrder
    movimentacoes?: MovimentacaoRacaoOrderByRelationAggregateInput
  }

  export type ProdutoEstoqueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nome?: string
    AND?: ProdutoEstoqueWhereInput | ProdutoEstoqueWhereInput[]
    OR?: ProdutoEstoqueWhereInput[]
    NOT?: ProdutoEstoqueWhereInput | ProdutoEstoqueWhereInput[]
    categoria?: StringNullableFilter<"ProdutoEstoque"> | string | null
    tipo?: StringFilter<"ProdutoEstoque"> | string
    unidade_medida?: StringFilter<"ProdutoEstoque"> | string
    peso_por_unidade?: FloatFilter<"ProdutoEstoque"> | number
    quantidade_unidades?: IntFilter<"ProdutoEstoque"> | number
    estoque_atual_kg?: FloatFilter<"ProdutoEstoque"> | number
    lote_numero?: StringNullableFilter<"ProdutoEstoque"> | string | null
    validade?: DateTimeNullableFilter<"ProdutoEstoque"> | Date | string | null
    fornecedor?: StringNullableFilter<"ProdutoEstoque"> | string | null
    custo_unitario?: FloatNullableFilter<"ProdutoEstoque"> | number | null
    data_ultima_entrada?: DateTimeNullableFilter<"ProdutoEstoque"> | Date | string | null
    data_ultima_saida?: DateTimeNullableFilter<"ProdutoEstoque"> | Date | string | null
    movimentacoes?: MovimentacaoRacaoListRelationFilter
  }, "id" | "nome">

  export type ProdutoEstoqueOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrderInput | SortOrder
    tipo?: SortOrder
    unidade_medida?: SortOrder
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    lote_numero?: SortOrderInput | SortOrder
    validade?: SortOrderInput | SortOrder
    fornecedor?: SortOrderInput | SortOrder
    custo_unitario?: SortOrderInput | SortOrder
    data_ultima_entrada?: SortOrderInput | SortOrder
    data_ultima_saida?: SortOrderInput | SortOrder
    _count?: ProdutoEstoqueCountOrderByAggregateInput
    _avg?: ProdutoEstoqueAvgOrderByAggregateInput
    _max?: ProdutoEstoqueMaxOrderByAggregateInput
    _min?: ProdutoEstoqueMinOrderByAggregateInput
    _sum?: ProdutoEstoqueSumOrderByAggregateInput
  }

  export type ProdutoEstoqueScalarWhereWithAggregatesInput = {
    AND?: ProdutoEstoqueScalarWhereWithAggregatesInput | ProdutoEstoqueScalarWhereWithAggregatesInput[]
    OR?: ProdutoEstoqueScalarWhereWithAggregatesInput[]
    NOT?: ProdutoEstoqueScalarWhereWithAggregatesInput | ProdutoEstoqueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProdutoEstoque"> | string
    nome?: StringWithAggregatesFilter<"ProdutoEstoque"> | string
    categoria?: StringNullableWithAggregatesFilter<"ProdutoEstoque"> | string | null
    tipo?: StringWithAggregatesFilter<"ProdutoEstoque"> | string
    unidade_medida?: StringWithAggregatesFilter<"ProdutoEstoque"> | string
    peso_por_unidade?: FloatWithAggregatesFilter<"ProdutoEstoque"> | number
    quantidade_unidades?: IntWithAggregatesFilter<"ProdutoEstoque"> | number
    estoque_atual_kg?: FloatWithAggregatesFilter<"ProdutoEstoque"> | number
    lote_numero?: StringNullableWithAggregatesFilter<"ProdutoEstoque"> | string | null
    validade?: DateTimeNullableWithAggregatesFilter<"ProdutoEstoque"> | Date | string | null
    fornecedor?: StringNullableWithAggregatesFilter<"ProdutoEstoque"> | string | null
    custo_unitario?: FloatNullableWithAggregatesFilter<"ProdutoEstoque"> | number | null
    data_ultima_entrada?: DateTimeNullableWithAggregatesFilter<"ProdutoEstoque"> | Date | string | null
    data_ultima_saida?: DateTimeNullableWithAggregatesFilter<"ProdutoEstoque"> | Date | string | null
  }

  export type MovimentacaoTanqueWhereInput = {
    AND?: MovimentacaoTanqueWhereInput | MovimentacaoTanqueWhereInput[]
    OR?: MovimentacaoTanqueWhereInput[]
    NOT?: MovimentacaoTanqueWhereInput | MovimentacaoTanqueWhereInput[]
    id?: StringFilter<"MovimentacaoTanque"> | string
    tanque_id?: StringFilter<"MovimentacaoTanque"> | string
    tipo_movimentacao?: EnumMovTanqueTipoFilter<"MovimentacaoTanque"> | $Enums.MovTanqueTipo
    motivo?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    data?: DateTimeFilter<"MovimentacaoTanque"> | Date | string
    quantidade?: IntFilter<"MovimentacaoTanque"> | number
    peso_medio_g?: FloatFilter<"MovimentacaoTanque"> | number
    notas?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    usuario_id?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MovimentacaoTanqueOrderByWithRelationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    tipo_movimentacao?: SortOrder
    motivo?: SortOrderInput | SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
    notas?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    tanque?: TanqueOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type MovimentacaoTanqueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimentacaoTanqueWhereInput | MovimentacaoTanqueWhereInput[]
    OR?: MovimentacaoTanqueWhereInput[]
    NOT?: MovimentacaoTanqueWhereInput | MovimentacaoTanqueWhereInput[]
    tanque_id?: StringFilter<"MovimentacaoTanque"> | string
    tipo_movimentacao?: EnumMovTanqueTipoFilter<"MovimentacaoTanque"> | $Enums.MovTanqueTipo
    motivo?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    data?: DateTimeFilter<"MovimentacaoTanque"> | Date | string
    quantidade?: IntFilter<"MovimentacaoTanque"> | number
    peso_medio_g?: FloatFilter<"MovimentacaoTanque"> | number
    notas?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    usuario_id?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    tanque?: XOR<TanqueScalarRelationFilter, TanqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MovimentacaoTanqueOrderByWithAggregationInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    tipo_movimentacao?: SortOrder
    motivo?: SortOrderInput | SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
    notas?: SortOrderInput | SortOrder
    usuario_id?: SortOrderInput | SortOrder
    _count?: MovimentacaoTanqueCountOrderByAggregateInput
    _avg?: MovimentacaoTanqueAvgOrderByAggregateInput
    _max?: MovimentacaoTanqueMaxOrderByAggregateInput
    _min?: MovimentacaoTanqueMinOrderByAggregateInput
    _sum?: MovimentacaoTanqueSumOrderByAggregateInput
  }

  export type MovimentacaoTanqueScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoTanqueScalarWhereWithAggregatesInput | MovimentacaoTanqueScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoTanqueScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoTanqueScalarWhereWithAggregatesInput | MovimentacaoTanqueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovimentacaoTanque"> | string
    tanque_id?: StringWithAggregatesFilter<"MovimentacaoTanque"> | string
    tipo_movimentacao?: EnumMovTanqueTipoWithAggregatesFilter<"MovimentacaoTanque"> | $Enums.MovTanqueTipo
    motivo?: StringNullableWithAggregatesFilter<"MovimentacaoTanque"> | string | null
    data?: DateTimeWithAggregatesFilter<"MovimentacaoTanque"> | Date | string
    quantidade?: IntWithAggregatesFilter<"MovimentacaoTanque"> | number
    peso_medio_g?: FloatWithAggregatesFilter<"MovimentacaoTanque"> | number
    notas?: StringNullableWithAggregatesFilter<"MovimentacaoTanque"> | string | null
    usuario_id?: StringNullableWithAggregatesFilter<"MovimentacaoTanque"> | string | null
  }

  export type MovimentacaoRacaoWhereInput = {
    AND?: MovimentacaoRacaoWhereInput | MovimentacaoRacaoWhereInput[]
    OR?: MovimentacaoRacaoWhereInput[]
    NOT?: MovimentacaoRacaoWhereInput | MovimentacaoRacaoWhereInput[]
    id?: StringFilter<"MovimentacaoRacao"> | string
    produto_id?: StringFilter<"MovimentacaoRacao"> | string
    tipo_movimento?: StringFilter<"MovimentacaoRacao"> | string
    data?: DateTimeFilter<"MovimentacaoRacao"> | Date | string
    quantidade_kg?: FloatFilter<"MovimentacaoRacao"> | number
    lote_id?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    observacoes?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    responsavel_id?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    produto?: XOR<ProdutoEstoqueScalarRelationFilter, ProdutoEstoqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MovimentacaoRacaoOrderByWithRelationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimento?: SortOrder
    data?: SortOrder
    quantidade_kg?: SortOrder
    lote_id?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    produto?: ProdutoEstoqueOrderByWithRelationInput
    responsavel?: UserOrderByWithRelationInput
  }

  export type MovimentacaoRacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovimentacaoRacaoWhereInput | MovimentacaoRacaoWhereInput[]
    OR?: MovimentacaoRacaoWhereInput[]
    NOT?: MovimentacaoRacaoWhereInput | MovimentacaoRacaoWhereInput[]
    produto_id?: StringFilter<"MovimentacaoRacao"> | string
    tipo_movimento?: StringFilter<"MovimentacaoRacao"> | string
    data?: DateTimeFilter<"MovimentacaoRacao"> | Date | string
    quantidade_kg?: FloatFilter<"MovimentacaoRacao"> | number
    lote_id?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    observacoes?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    responsavel_id?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    produto?: XOR<ProdutoEstoqueScalarRelationFilter, ProdutoEstoqueWhereInput>
    responsavel?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MovimentacaoRacaoOrderByWithAggregationInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimento?: SortOrder
    data?: SortOrder
    quantidade_kg?: SortOrder
    lote_id?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    responsavel_id?: SortOrderInput | SortOrder
    _count?: MovimentacaoRacaoCountOrderByAggregateInput
    _avg?: MovimentacaoRacaoAvgOrderByAggregateInput
    _max?: MovimentacaoRacaoMaxOrderByAggregateInput
    _min?: MovimentacaoRacaoMinOrderByAggregateInput
    _sum?: MovimentacaoRacaoSumOrderByAggregateInput
  }

  export type MovimentacaoRacaoScalarWhereWithAggregatesInput = {
    AND?: MovimentacaoRacaoScalarWhereWithAggregatesInput | MovimentacaoRacaoScalarWhereWithAggregatesInput[]
    OR?: MovimentacaoRacaoScalarWhereWithAggregatesInput[]
    NOT?: MovimentacaoRacaoScalarWhereWithAggregatesInput | MovimentacaoRacaoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MovimentacaoRacao"> | string
    produto_id?: StringWithAggregatesFilter<"MovimentacaoRacao"> | string
    tipo_movimento?: StringWithAggregatesFilter<"MovimentacaoRacao"> | string
    data?: DateTimeWithAggregatesFilter<"MovimentacaoRacao"> | Date | string
    quantidade_kg?: FloatWithAggregatesFilter<"MovimentacaoRacao"> | number
    lote_id?: StringNullableWithAggregatesFilter<"MovimentacaoRacao"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"MovimentacaoRacao"> | string | null
    responsavel_id?: StringNullableWithAggregatesFilter<"MovimentacaoRacao"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
  }

  export type TanqueCreateInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueCreateManyInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
  }

  export type TanqueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TanqueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CicloProducaoCreateInput = {
    id?: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
    tanque_ciclo_ativo?: TanqueCreateNestedOneWithoutCiclo_atualInput
    tanque: TanqueCreateNestedOneWithoutCiclosInput
  }

  export type CicloProducaoUncheckedCreateInput = {
    id?: string
    tanque_id: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
    tanque_ciclo_ativo?: TanqueUncheckedCreateNestedOneWithoutCiclo_atualInput
  }

  export type CicloProducaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    tanque_ciclo_ativo?: TanqueUpdateOneWithoutCiclo_atualNestedInput
    tanque?: TanqueUpdateOneRequiredWithoutCiclosNestedInput
  }

  export type CicloProducaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    tanque_ciclo_ativo?: TanqueUncheckedUpdateOneWithoutCiclo_atualNestedInput
  }

  export type CicloProducaoCreateManyInput = {
    id?: string
    tanque_id: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
  }

  export type CicloProducaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CicloProducaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroDiarioCreateInput = {
    id?: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    isAutomatic?: boolean
    tanque: TanqueCreateNestedOneWithoutRegistros_diariosInput
    responsavel?: UserCreateNestedOneWithoutResponsavel_registrodiarioInput
  }

  export type RegistroDiarioUncheckedCreateInput = {
    id?: string
    tanque_id: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    responsavel_id?: string | null
    isAutomatic?: boolean
  }

  export type RegistroDiarioUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    tanque?: TanqueUpdateOneRequiredWithoutRegistros_diariosNestedInput
    responsavel?: UserUpdateOneWithoutResponsavel_registrodiarioNestedInput
  }

  export type RegistroDiarioUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegistroDiarioCreateManyInput = {
    id?: string
    tanque_id: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    responsavel_id?: string | null
    isAutomatic?: boolean
  }

  export type RegistroDiarioUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegistroDiarioUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BiometriaCreateInput = {
    id?: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    tanque: TanqueCreateNestedOneWithoutBiometriasInput
    responsavel?: UserCreateNestedOneWithoutResponsavel_biometriasInput
  }

  export type BiometriaUncheckedCreateInput = {
    id?: string
    tanque_id: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    responsavel_id?: string | null
  }

  export type BiometriaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutBiometriasNestedInput
    responsavel?: UserUpdateOneWithoutResponsavel_biometriasNestedInput
  }

  export type BiometriaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiometriaCreateManyInput = {
    id?: string
    tanque_id: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    responsavel_id?: string | null
  }

  export type BiometriaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiometriaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaCreateInput = {
    id?: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    tanque: TanqueCreateNestedOneWithoutQualidade_aguaInput
    responsavel?: UserCreateNestedOneWithoutResponsavel_qualidadeaguaInput
  }

  export type QualidadeAguaUncheckedCreateInput = {
    id?: string
    tanque_id: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    responsavel_id?: string | null
  }

  export type QualidadeAguaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutQualidade_aguaNestedInput
    responsavel?: UserUpdateOneWithoutResponsavel_qualidadeaguaNestedInput
  }

  export type QualidadeAguaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaCreateManyInput = {
    id?: string
    tanque_id: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    responsavel_id?: string | null
  }

  export type QualidadeAguaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroSaudeCreateInput = {
    id?: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    tanque: TanqueCreateNestedOneWithoutRegistros_saudeInput
    responsavel?: UserCreateNestedOneWithoutResponsavel_regsaudeInput
  }

  export type RegistroSaudeUncheckedCreateInput = {
    id?: string
    tanque_id: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    usuario_id?: string | null
  }

  export type RegistroSaudeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanque?: TanqueUpdateOneRequiredWithoutRegistros_saudeNestedInput
    responsavel?: UserUpdateOneWithoutResponsavel_regsaudeNestedInput
  }

  export type RegistroSaudeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroSaudeCreateManyInput = {
    id?: string
    tanque_id: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    usuario_id?: string | null
  }

  export type RegistroSaudeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegistroSaudeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProdutoEstoqueCreateInput = {
    id?: string
    nome: string
    categoria?: string | null
    tipo: string
    unidade_medida: string
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg?: number
    lote_numero?: string | null
    validade?: Date | string | null
    fornecedor?: string | null
    custo_unitario?: number | null
    data_ultima_entrada?: Date | string | null
    data_ultima_saida?: Date | string | null
    movimentacoes?: MovimentacaoRacaoCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoEstoqueUncheckedCreateInput = {
    id?: string
    nome: string
    categoria?: string | null
    tipo: string
    unidade_medida: string
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg?: number
    lote_numero?: string | null
    validade?: Date | string | null
    fornecedor?: string | null
    custo_unitario?: number | null
    data_ultima_entrada?: Date | string | null
    data_ultima_saida?: Date | string | null
    movimentacoes?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutProdutoInput
  }

  export type ProdutoEstoqueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    peso_por_unidade?: FloatFieldUpdateOperationsInput | number
    quantidade_unidades?: IntFieldUpdateOperationsInput | number
    estoque_atual_kg?: FloatFieldUpdateOperationsInput | number
    lote_numero?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    data_ultima_entrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ultima_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimentacoes?: MovimentacaoRacaoUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoEstoqueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    peso_por_unidade?: FloatFieldUpdateOperationsInput | number
    quantidade_unidades?: IntFieldUpdateOperationsInput | number
    estoque_atual_kg?: FloatFieldUpdateOperationsInput | number
    lote_numero?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    data_ultima_entrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ultima_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    movimentacoes?: MovimentacaoRacaoUncheckedUpdateManyWithoutProdutoNestedInput
  }

  export type ProdutoEstoqueCreateManyInput = {
    id?: string
    nome: string
    categoria?: string | null
    tipo: string
    unidade_medida: string
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg?: number
    lote_numero?: string | null
    validade?: Date | string | null
    fornecedor?: string | null
    custo_unitario?: number | null
    data_ultima_entrada?: Date | string | null
    data_ultima_saida?: Date | string | null
  }

  export type ProdutoEstoqueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    peso_por_unidade?: FloatFieldUpdateOperationsInput | number
    quantidade_unidades?: IntFieldUpdateOperationsInput | number
    estoque_atual_kg?: FloatFieldUpdateOperationsInput | number
    lote_numero?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    data_ultima_entrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ultima_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutoEstoqueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    peso_por_unidade?: FloatFieldUpdateOperationsInput | number
    quantidade_unidades?: IntFieldUpdateOperationsInput | number
    estoque_atual_kg?: FloatFieldUpdateOperationsInput | number
    lote_numero?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    data_ultima_entrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ultima_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MovimentacaoTanqueCreateInput = {
    id?: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    tanque: TanqueCreateNestedOneWithoutMovimentacoesInput
    responsavel?: UserCreateNestedOneWithoutResponsavel_movtanqueInput
  }

  export type MovimentacaoTanqueUncheckedCreateInput = {
    id?: string
    tanque_id: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    usuario_id?: string | null
  }

  export type MovimentacaoTanqueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutMovimentacoesNestedInput
    responsavel?: UserUpdateOneWithoutResponsavel_movtanqueNestedInput
  }

  export type MovimentacaoTanqueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoTanqueCreateManyInput = {
    id?: string
    tanque_id: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    usuario_id?: string | null
  }

  export type MovimentacaoTanqueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoTanqueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoCreateInput = {
    id?: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    produto: ProdutoEstoqueCreateNestedOneWithoutMovimentacoesInput
    responsavel?: UserCreateNestedOneWithoutResponsavel_movracaoInput
  }

  export type MovimentacaoRacaoUncheckedCreateInput = {
    id?: string
    produto_id: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    responsavel_id?: string | null
  }

  export type MovimentacaoRacaoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: ProdutoEstoqueUpdateOneRequiredWithoutMovimentacoesNestedInput
    responsavel?: UserUpdateOneWithoutResponsavel_movracaoNestedInput
  }

  export type MovimentacaoRacaoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    produto_id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoCreateManyInput = {
    id?: string
    produto_id: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    responsavel_id?: string | null
  }

  export type MovimentacaoRacaoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    produto_id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BiometriaListRelationFilter = {
    every?: BiometriaWhereInput
    some?: BiometriaWhereInput
    none?: BiometriaWhereInput
  }

  export type QualidadeAguaListRelationFilter = {
    every?: QualidadeAguaWhereInput
    some?: QualidadeAguaWhereInput
    none?: QualidadeAguaWhereInput
  }

  export type RegistroDiarioListRelationFilter = {
    every?: RegistroDiarioWhereInput
    some?: RegistroDiarioWhereInput
    none?: RegistroDiarioWhereInput
  }

  export type MovimentacaoTanqueListRelationFilter = {
    every?: MovimentacaoTanqueWhereInput
    some?: MovimentacaoTanqueWhereInput
    none?: MovimentacaoTanqueWhereInput
  }

  export type MovimentacaoRacaoListRelationFilter = {
    every?: MovimentacaoRacaoWhereInput
    some?: MovimentacaoRacaoWhereInput
    none?: MovimentacaoRacaoWhereInput
  }

  export type RegistroSaudeListRelationFilter = {
    every?: RegistroSaudeWhereInput
    some?: RegistroSaudeWhereInput
    none?: RegistroSaudeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BiometriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QualidadeAguaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroDiarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoTanqueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovimentacaoRacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegistroSaudeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
    permissions?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    image?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastLogin?: SortOrder
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

  export type EnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumTipoTanqueFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTanque | EnumTipoTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTanqueFilter<$PrismaModel> | $Enums.TipoTanque
  }

  export type EnumStatusTanqueFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTanque | EnumStatusTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTanqueFilter<$PrismaModel> | $Enums.StatusTanque
  }

  export type CicloProducaoNullableScalarRelationFilter = {
    is?: CicloProducaoWhereInput | null
    isNot?: CicloProducaoWhereInput | null
  }

  export type CicloProducaoListRelationFilter = {
    every?: CicloProducaoWhereInput
    some?: CicloProducaoWhereInput
    none?: CicloProducaoWhereInput
  }

  export type CicloProducaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TanqueCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_interno?: SortOrder
    volume_m3?: SortOrder
    area_m2?: SortOrder
    tipo?: SortOrder
    tipo_material?: SortOrder
    status?: SortOrder
    localizacao?: SortOrder
    data_instalacao?: SortOrder
    nivel_agua_cm?: SortOrder
    isActive?: SortOrder
    ciclo_atual_id?: SortOrder
  }

  export type TanqueAvgOrderByAggregateInput = {
    volume_m3?: SortOrder
    area_m2?: SortOrder
    nivel_agua_cm?: SortOrder
  }

  export type TanqueMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_interno?: SortOrder
    volume_m3?: SortOrder
    area_m2?: SortOrder
    tipo?: SortOrder
    tipo_material?: SortOrder
    status?: SortOrder
    localizacao?: SortOrder
    data_instalacao?: SortOrder
    nivel_agua_cm?: SortOrder
    isActive?: SortOrder
    ciclo_atual_id?: SortOrder
  }

  export type TanqueMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    codigo_interno?: SortOrder
    volume_m3?: SortOrder
    area_m2?: SortOrder
    tipo?: SortOrder
    tipo_material?: SortOrder
    status?: SortOrder
    localizacao?: SortOrder
    data_instalacao?: SortOrder
    nivel_agua_cm?: SortOrder
    isActive?: SortOrder
    ciclo_atual_id?: SortOrder
  }

  export type TanqueSumOrderByAggregateInput = {
    volume_m3?: SortOrder
    area_m2?: SortOrder
    nivel_agua_cm?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumTipoTanqueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTanque | EnumTipoTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTanqueWithAggregatesFilter<$PrismaModel> | $Enums.TipoTanque
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTanqueFilter<$PrismaModel>
    _max?: NestedEnumTipoTanqueFilter<$PrismaModel>
  }

  export type EnumStatusTanqueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTanque | EnumStatusTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTanqueWithAggregatesFilter<$PrismaModel> | $Enums.StatusTanque
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTanqueFilter<$PrismaModel>
    _max?: NestedEnumStatusTanqueFilter<$PrismaModel>
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

  export type TanqueNullableScalarRelationFilter = {
    is?: TanqueWhereInput | null
    isNot?: TanqueWhereInput | null
  }

  export type TanqueScalarRelationFilter = {
    is?: TanqueWhereInput
    isNot?: TanqueWhereInput
  }

  export type CicloProducaoCountOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    especie?: SortOrder
    origem_lote?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrder
    mortes?: SortOrder
    alimentacao_total_kg?: SortOrder
    custo_total?: SortOrder
    data_prevista_saida?: SortOrder
    status?: SortOrder
  }

  export type CicloProducaoAvgOrderByAggregateInput = {
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrder
    mortes?: SortOrder
    alimentacao_total_kg?: SortOrder
    custo_total?: SortOrder
  }

  export type CicloProducaoMaxOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    especie?: SortOrder
    origem_lote?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrder
    mortes?: SortOrder
    alimentacao_total_kg?: SortOrder
    custo_total?: SortOrder
    data_prevista_saida?: SortOrder
    status?: SortOrder
  }

  export type CicloProducaoMinOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    especie?: SortOrder
    origem_lote?: SortOrder
    data_inicio?: SortOrder
    data_fim?: SortOrder
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrder
    mortes?: SortOrder
    alimentacao_total_kg?: SortOrder
    custo_total?: SortOrder
    data_prevista_saida?: SortOrder
    status?: SortOrder
  }

  export type CicloProducaoSumOrderByAggregateInput = {
    quantidade_inicial?: SortOrder
    quantidade_atual?: SortOrder
    peso_inicial_g?: SortOrder
    peso_atual?: SortOrder
    mortes?: SortOrder
    alimentacao_total_kg?: SortOrder
    custo_total?: SortOrder
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

  export type EnumTurnoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTurnoNullableFilter<$PrismaModel> | $Enums.Turno | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RegistroDiarioCountOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data?: SortOrder
    turno?: SortOrder
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrder
    fracionamento?: SortOrder
    tipo_racao?: SortOrder
    racao_marca?: SortOrder
    racao_codigo?: SortOrder
    sobras?: SortOrder
    mortalidade?: SortOrder
    causa_morte?: SortOrder
    horas_aeracao?: SortOrder
    observacoes?: SortOrder
    eventos_adversos?: SortOrder
    responsavel_id?: SortOrder
    isAutomatic?: SortOrder
  }

  export type RegistroDiarioAvgOrderByAggregateInput = {
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrder
    fracionamento?: SortOrder
    mortalidade?: SortOrder
    horas_aeracao?: SortOrder
  }

  export type RegistroDiarioMaxOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data?: SortOrder
    turno?: SortOrder
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrder
    fracionamento?: SortOrder
    tipo_racao?: SortOrder
    racao_marca?: SortOrder
    racao_codigo?: SortOrder
    sobras?: SortOrder
    mortalidade?: SortOrder
    causa_morte?: SortOrder
    horas_aeracao?: SortOrder
    observacoes?: SortOrder
    eventos_adversos?: SortOrder
    responsavel_id?: SortOrder
    isAutomatic?: SortOrder
  }

  export type RegistroDiarioMinOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data?: SortOrder
    turno?: SortOrder
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrder
    fracionamento?: SortOrder
    tipo_racao?: SortOrder
    racao_marca?: SortOrder
    racao_codigo?: SortOrder
    sobras?: SortOrder
    mortalidade?: SortOrder
    causa_morte?: SortOrder
    horas_aeracao?: SortOrder
    observacoes?: SortOrder
    eventos_adversos?: SortOrder
    responsavel_id?: SortOrder
    isAutomatic?: SortOrder
  }

  export type RegistroDiarioSumOrderByAggregateInput = {
    temperatura_agua?: SortOrder
    quantidade_kg?: SortOrder
    fracionamento?: SortOrder
    mortalidade?: SortOrder
    horas_aeracao?: SortOrder
  }

  export type EnumTurnoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTurnoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Turno | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTurnoNullableFilter<$PrismaModel>
    _max?: NestedEnumTurnoNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type BiometriaCountOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_amostra?: SortOrder
    idade_lote_dias?: SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrder
    peso_maximo?: SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrder
    comprimento_maximo?: SortOrder
    altura_minima?: SortOrder
    altura_maxima?: SortOrder
    desvio_padrao_peso?: SortOrder
    desvio_padrao_comprimento?: SortOrder
    observacoes?: SortOrder
    recomendacoes?: SortOrder
    responsavel_id?: SortOrder
  }

  export type BiometriaAvgOrderByAggregateInput = {
    idade_lote_dias?: SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrder
    peso_maximo?: SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrder
    comprimento_maximo?: SortOrder
    altura_minima?: SortOrder
    altura_maxima?: SortOrder
    desvio_padrao_peso?: SortOrder
    desvio_padrao_comprimento?: SortOrder
  }

  export type BiometriaMaxOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_amostra?: SortOrder
    idade_lote_dias?: SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrder
    peso_maximo?: SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrder
    comprimento_maximo?: SortOrder
    altura_minima?: SortOrder
    altura_maxima?: SortOrder
    desvio_padrao_peso?: SortOrder
    desvio_padrao_comprimento?: SortOrder
    observacoes?: SortOrder
    recomendacoes?: SortOrder
    responsavel_id?: SortOrder
  }

  export type BiometriaMinOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_amostra?: SortOrder
    idade_lote_dias?: SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrder
    peso_maximo?: SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrder
    comprimento_maximo?: SortOrder
    altura_minima?: SortOrder
    altura_maxima?: SortOrder
    desvio_padrao_peso?: SortOrder
    desvio_padrao_comprimento?: SortOrder
    observacoes?: SortOrder
    recomendacoes?: SortOrder
    responsavel_id?: SortOrder
  }

  export type BiometriaSumOrderByAggregateInput = {
    idade_lote_dias?: SortOrder
    tamanho_amostra?: SortOrder
    peso_total_kg?: SortOrder
    peso_minimo?: SortOrder
    peso_maximo?: SortOrder
    comprimento_medio_cm?: SortOrder
    comprimento_minimo?: SortOrder
    comprimento_maximo?: SortOrder
    altura_minima?: SortOrder
    altura_maxima?: SortOrder
    desvio_padrao_peso?: SortOrder
    desvio_padrao_comprimento?: SortOrder
  }

  export type QualidadeAguaCountOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_analise?: SortOrder
    hora_coleta?: SortOrder
    fonte_agua?: SortOrder
    metodo_coleta?: SortOrder
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrder
    tds?: SortOrder
    orp?: SortOrder
    ec?: SortOrder
    salppm?: SortOrder
    sal?: SortOrder
    sg?: SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
    notas?: SortOrder
    responsavel_id?: SortOrder
  }

  export type QualidadeAguaAvgOrderByAggregateInput = {
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrder
    tds?: SortOrder
    orp?: SortOrder
    ec?: SortOrder
    salppm?: SortOrder
    sal?: SortOrder
    sg?: SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
  }

  export type QualidadeAguaMaxOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_analise?: SortOrder
    hora_coleta?: SortOrder
    fonte_agua?: SortOrder
    metodo_coleta?: SortOrder
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrder
    tds?: SortOrder
    orp?: SortOrder
    ec?: SortOrder
    salppm?: SortOrder
    sal?: SortOrder
    sg?: SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
    notas?: SortOrder
    responsavel_id?: SortOrder
  }

  export type QualidadeAguaMinOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_analise?: SortOrder
    hora_coleta?: SortOrder
    fonte_agua?: SortOrder
    metodo_coleta?: SortOrder
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrder
    tds?: SortOrder
    orp?: SortOrder
    ec?: SortOrder
    salppm?: SortOrder
    sal?: SortOrder
    sg?: SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
    notas?: SortOrder
    responsavel_id?: SortOrder
  }

  export type QualidadeAguaSumOrderByAggregateInput = {
    oxigenio_dissolvido?: SortOrder
    ph?: SortOrder
    amonia?: SortOrder
    nitrito?: SortOrder
    nitrato?: SortOrder
    tds?: SortOrder
    orp?: SortOrder
    ec?: SortOrder
    salppm?: SortOrder
    sal?: SortOrder
    sg?: SortOrder
    temperatura?: SortOrder
    transparencia_cm?: SortOrder
  }

  export type RegistroSaudeCountOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_registro?: SortOrder
    sintomas?: SortOrder
    percentual_afetado?: SortOrder
    diagnostico?: SortOrder
    patologia_codigo?: SortOrder
    produto?: SortOrder
    dosagem?: SortOrder
    dias_tratamento?: SortOrder
    dias_carencia?: SortOrder
    resultado?: SortOrder
    data_diagnostico?: SortOrder
    usuario_id?: SortOrder
  }

  export type RegistroSaudeAvgOrderByAggregateInput = {
    percentual_afetado?: SortOrder
    dias_tratamento?: SortOrder
    dias_carencia?: SortOrder
  }

  export type RegistroSaudeMaxOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_registro?: SortOrder
    sintomas?: SortOrder
    percentual_afetado?: SortOrder
    diagnostico?: SortOrder
    patologia_codigo?: SortOrder
    produto?: SortOrder
    dosagem?: SortOrder
    dias_tratamento?: SortOrder
    dias_carencia?: SortOrder
    resultado?: SortOrder
    data_diagnostico?: SortOrder
    usuario_id?: SortOrder
  }

  export type RegistroSaudeMinOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    data_registro?: SortOrder
    sintomas?: SortOrder
    percentual_afetado?: SortOrder
    diagnostico?: SortOrder
    patologia_codigo?: SortOrder
    produto?: SortOrder
    dosagem?: SortOrder
    dias_tratamento?: SortOrder
    dias_carencia?: SortOrder
    resultado?: SortOrder
    data_diagnostico?: SortOrder
    usuario_id?: SortOrder
  }

  export type RegistroSaudeSumOrderByAggregateInput = {
    percentual_afetado?: SortOrder
    dias_tratamento?: SortOrder
    dias_carencia?: SortOrder
  }

  export type ProdutoEstoqueCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    tipo?: SortOrder
    unidade_medida?: SortOrder
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    lote_numero?: SortOrder
    validade?: SortOrder
    fornecedor?: SortOrder
    custo_unitario?: SortOrder
    data_ultima_entrada?: SortOrder
    data_ultima_saida?: SortOrder
  }

  export type ProdutoEstoqueAvgOrderByAggregateInput = {
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    custo_unitario?: SortOrder
  }

  export type ProdutoEstoqueMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    tipo?: SortOrder
    unidade_medida?: SortOrder
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    lote_numero?: SortOrder
    validade?: SortOrder
    fornecedor?: SortOrder
    custo_unitario?: SortOrder
    data_ultima_entrada?: SortOrder
    data_ultima_saida?: SortOrder
  }

  export type ProdutoEstoqueMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    categoria?: SortOrder
    tipo?: SortOrder
    unidade_medida?: SortOrder
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    lote_numero?: SortOrder
    validade?: SortOrder
    fornecedor?: SortOrder
    custo_unitario?: SortOrder
    data_ultima_entrada?: SortOrder
    data_ultima_saida?: SortOrder
  }

  export type ProdutoEstoqueSumOrderByAggregateInput = {
    peso_por_unidade?: SortOrder
    quantidade_unidades?: SortOrder
    estoque_atual_kg?: SortOrder
    custo_unitario?: SortOrder
  }

  export type EnumMovTanqueTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.MovTanqueTipo | EnumMovTanqueTipoFieldRefInput<$PrismaModel>
    in?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumMovTanqueTipoFilter<$PrismaModel> | $Enums.MovTanqueTipo
  }

  export type MovimentacaoTanqueCountOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    tipo_movimentacao?: SortOrder
    motivo?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
    notas?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoTanqueAvgOrderByAggregateInput = {
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
  }

  export type MovimentacaoTanqueMaxOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    tipo_movimentacao?: SortOrder
    motivo?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
    notas?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoTanqueMinOrderByAggregateInput = {
    id?: SortOrder
    tanque_id?: SortOrder
    tipo_movimentacao?: SortOrder
    motivo?: SortOrder
    data?: SortOrder
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
    notas?: SortOrder
    usuario_id?: SortOrder
  }

  export type MovimentacaoTanqueSumOrderByAggregateInput = {
    quantidade?: SortOrder
    peso_medio_g?: SortOrder
  }

  export type EnumMovTanqueTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovTanqueTipo | EnumMovTanqueTipoFieldRefInput<$PrismaModel>
    in?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumMovTanqueTipoWithAggregatesFilter<$PrismaModel> | $Enums.MovTanqueTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovTanqueTipoFilter<$PrismaModel>
    _max?: NestedEnumMovTanqueTipoFilter<$PrismaModel>
  }

  export type ProdutoEstoqueScalarRelationFilter = {
    is?: ProdutoEstoqueWhereInput
    isNot?: ProdutoEstoqueWhereInput
  }

  export type MovimentacaoRacaoCountOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimento?: SortOrder
    data?: SortOrder
    quantidade_kg?: SortOrder
    lote_id?: SortOrder
    observacoes?: SortOrder
    responsavel_id?: SortOrder
  }

  export type MovimentacaoRacaoAvgOrderByAggregateInput = {
    quantidade_kg?: SortOrder
  }

  export type MovimentacaoRacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimento?: SortOrder
    data?: SortOrder
    quantidade_kg?: SortOrder
    lote_id?: SortOrder
    observacoes?: SortOrder
    responsavel_id?: SortOrder
  }

  export type MovimentacaoRacaoMinOrderByAggregateInput = {
    id?: SortOrder
    produto_id?: SortOrder
    tipo_movimento?: SortOrder
    data?: SortOrder
    quantidade_kg?: SortOrder
    lote_id?: SortOrder
    observacoes?: SortOrder
    responsavel_id?: SortOrder
  }

  export type MovimentacaoRacaoSumOrderByAggregateInput = {
    quantidade_kg?: SortOrder
  }

  export type UserCreatepermissionsInput = {
    set: string[]
  }

  export type BiometriaCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<BiometriaCreateWithoutResponsavelInput, BiometriaUncheckedCreateWithoutResponsavelInput> | BiometriaCreateWithoutResponsavelInput[] | BiometriaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutResponsavelInput | BiometriaCreateOrConnectWithoutResponsavelInput[]
    createMany?: BiometriaCreateManyResponsavelInputEnvelope
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
  }

  export type QualidadeAguaCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<QualidadeAguaCreateWithoutResponsavelInput, QualidadeAguaUncheckedCreateWithoutResponsavelInput> | QualidadeAguaCreateWithoutResponsavelInput[] | QualidadeAguaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutResponsavelInput | QualidadeAguaCreateOrConnectWithoutResponsavelInput[]
    createMany?: QualidadeAguaCreateManyResponsavelInputEnvelope
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
  }

  export type RegistroDiarioCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<RegistroDiarioCreateWithoutResponsavelInput, RegistroDiarioUncheckedCreateWithoutResponsavelInput> | RegistroDiarioCreateWithoutResponsavelInput[] | RegistroDiarioUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutResponsavelInput | RegistroDiarioCreateOrConnectWithoutResponsavelInput[]
    createMany?: RegistroDiarioCreateManyResponsavelInputEnvelope
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
  }

  export type MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutResponsavelInput, MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput> | MovimentacaoTanqueCreateWithoutResponsavelInput[] | MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput | MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput[]
    createMany?: MovimentacaoTanqueCreateManyResponsavelInputEnvelope
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
  }

  export type MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutResponsavelInput, MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput> | MovimentacaoRacaoCreateWithoutResponsavelInput[] | MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput | MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput[]
    createMany?: MovimentacaoRacaoCreateManyResponsavelInputEnvelope
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
  }

  export type RegistroSaudeCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<RegistroSaudeCreateWithoutResponsavelInput, RegistroSaudeUncheckedCreateWithoutResponsavelInput> | RegistroSaudeCreateWithoutResponsavelInput[] | RegistroSaudeUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutResponsavelInput | RegistroSaudeCreateOrConnectWithoutResponsavelInput[]
    createMany?: RegistroSaudeCreateManyResponsavelInputEnvelope
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
  }

  export type BiometriaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<BiometriaCreateWithoutResponsavelInput, BiometriaUncheckedCreateWithoutResponsavelInput> | BiometriaCreateWithoutResponsavelInput[] | BiometriaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutResponsavelInput | BiometriaCreateOrConnectWithoutResponsavelInput[]
    createMany?: BiometriaCreateManyResponsavelInputEnvelope
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
  }

  export type QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<QualidadeAguaCreateWithoutResponsavelInput, QualidadeAguaUncheckedCreateWithoutResponsavelInput> | QualidadeAguaCreateWithoutResponsavelInput[] | QualidadeAguaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutResponsavelInput | QualidadeAguaCreateOrConnectWithoutResponsavelInput[]
    createMany?: QualidadeAguaCreateManyResponsavelInputEnvelope
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
  }

  export type RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<RegistroDiarioCreateWithoutResponsavelInput, RegistroDiarioUncheckedCreateWithoutResponsavelInput> | RegistroDiarioCreateWithoutResponsavelInput[] | RegistroDiarioUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutResponsavelInput | RegistroDiarioCreateOrConnectWithoutResponsavelInput[]
    createMany?: RegistroDiarioCreateManyResponsavelInputEnvelope
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
  }

  export type MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutResponsavelInput, MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput> | MovimentacaoTanqueCreateWithoutResponsavelInput[] | MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput | MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput[]
    createMany?: MovimentacaoTanqueCreateManyResponsavelInputEnvelope
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
  }

  export type MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutResponsavelInput, MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput> | MovimentacaoRacaoCreateWithoutResponsavelInput[] | MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput | MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput[]
    createMany?: MovimentacaoRacaoCreateManyResponsavelInputEnvelope
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
  }

  export type RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput = {
    create?: XOR<RegistroSaudeCreateWithoutResponsavelInput, RegistroSaudeUncheckedCreateWithoutResponsavelInput> | RegistroSaudeCreateWithoutResponsavelInput[] | RegistroSaudeUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutResponsavelInput | RegistroSaudeCreateOrConnectWithoutResponsavelInput[]
    createMany?: RegistroSaudeCreateManyResponsavelInputEnvelope
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableEnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BiometriaUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<BiometriaCreateWithoutResponsavelInput, BiometriaUncheckedCreateWithoutResponsavelInput> | BiometriaCreateWithoutResponsavelInput[] | BiometriaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutResponsavelInput | BiometriaCreateOrConnectWithoutResponsavelInput[]
    upsert?: BiometriaUpsertWithWhereUniqueWithoutResponsavelInput | BiometriaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: BiometriaCreateManyResponsavelInputEnvelope
    set?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    disconnect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    delete?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    update?: BiometriaUpdateWithWhereUniqueWithoutResponsavelInput | BiometriaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: BiometriaUpdateManyWithWhereWithoutResponsavelInput | BiometriaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: BiometriaScalarWhereInput | BiometriaScalarWhereInput[]
  }

  export type QualidadeAguaUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<QualidadeAguaCreateWithoutResponsavelInput, QualidadeAguaUncheckedCreateWithoutResponsavelInput> | QualidadeAguaCreateWithoutResponsavelInput[] | QualidadeAguaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutResponsavelInput | QualidadeAguaCreateOrConnectWithoutResponsavelInput[]
    upsert?: QualidadeAguaUpsertWithWhereUniqueWithoutResponsavelInput | QualidadeAguaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: QualidadeAguaCreateManyResponsavelInputEnvelope
    set?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    disconnect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    delete?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    update?: QualidadeAguaUpdateWithWhereUniqueWithoutResponsavelInput | QualidadeAguaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: QualidadeAguaUpdateManyWithWhereWithoutResponsavelInput | QualidadeAguaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: QualidadeAguaScalarWhereInput | QualidadeAguaScalarWhereInput[]
  }

  export type RegistroDiarioUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<RegistroDiarioCreateWithoutResponsavelInput, RegistroDiarioUncheckedCreateWithoutResponsavelInput> | RegistroDiarioCreateWithoutResponsavelInput[] | RegistroDiarioUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutResponsavelInput | RegistroDiarioCreateOrConnectWithoutResponsavelInput[]
    upsert?: RegistroDiarioUpsertWithWhereUniqueWithoutResponsavelInput | RegistroDiarioUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: RegistroDiarioCreateManyResponsavelInputEnvelope
    set?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    disconnect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    delete?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    update?: RegistroDiarioUpdateWithWhereUniqueWithoutResponsavelInput | RegistroDiarioUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: RegistroDiarioUpdateManyWithWhereWithoutResponsavelInput | RegistroDiarioUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: RegistroDiarioScalarWhereInput | RegistroDiarioScalarWhereInput[]
  }

  export type MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutResponsavelInput, MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput> | MovimentacaoTanqueCreateWithoutResponsavelInput[] | MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput | MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput[]
    upsert?: MovimentacaoTanqueUpsertWithWhereUniqueWithoutResponsavelInput | MovimentacaoTanqueUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: MovimentacaoTanqueCreateManyResponsavelInputEnvelope
    set?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    disconnect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    delete?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    update?: MovimentacaoTanqueUpdateWithWhereUniqueWithoutResponsavelInput | MovimentacaoTanqueUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: MovimentacaoTanqueUpdateManyWithWhereWithoutResponsavelInput | MovimentacaoTanqueUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: MovimentacaoTanqueScalarWhereInput | MovimentacaoTanqueScalarWhereInput[]
  }

  export type MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutResponsavelInput, MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput> | MovimentacaoRacaoCreateWithoutResponsavelInput[] | MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput | MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput[]
    upsert?: MovimentacaoRacaoUpsertWithWhereUniqueWithoutResponsavelInput | MovimentacaoRacaoUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: MovimentacaoRacaoCreateManyResponsavelInputEnvelope
    set?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    disconnect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    delete?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    update?: MovimentacaoRacaoUpdateWithWhereUniqueWithoutResponsavelInput | MovimentacaoRacaoUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: MovimentacaoRacaoUpdateManyWithWhereWithoutResponsavelInput | MovimentacaoRacaoUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: MovimentacaoRacaoScalarWhereInput | MovimentacaoRacaoScalarWhereInput[]
  }

  export type RegistroSaudeUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<RegistroSaudeCreateWithoutResponsavelInput, RegistroSaudeUncheckedCreateWithoutResponsavelInput> | RegistroSaudeCreateWithoutResponsavelInput[] | RegistroSaudeUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutResponsavelInput | RegistroSaudeCreateOrConnectWithoutResponsavelInput[]
    upsert?: RegistroSaudeUpsertWithWhereUniqueWithoutResponsavelInput | RegistroSaudeUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: RegistroSaudeCreateManyResponsavelInputEnvelope
    set?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    disconnect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    delete?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    update?: RegistroSaudeUpdateWithWhereUniqueWithoutResponsavelInput | RegistroSaudeUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: RegistroSaudeUpdateManyWithWhereWithoutResponsavelInput | RegistroSaudeUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: RegistroSaudeScalarWhereInput | RegistroSaudeScalarWhereInput[]
  }

  export type BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<BiometriaCreateWithoutResponsavelInput, BiometriaUncheckedCreateWithoutResponsavelInput> | BiometriaCreateWithoutResponsavelInput[] | BiometriaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutResponsavelInput | BiometriaCreateOrConnectWithoutResponsavelInput[]
    upsert?: BiometriaUpsertWithWhereUniqueWithoutResponsavelInput | BiometriaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: BiometriaCreateManyResponsavelInputEnvelope
    set?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    disconnect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    delete?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    update?: BiometriaUpdateWithWhereUniqueWithoutResponsavelInput | BiometriaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: BiometriaUpdateManyWithWhereWithoutResponsavelInput | BiometriaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: BiometriaScalarWhereInput | BiometriaScalarWhereInput[]
  }

  export type QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<QualidadeAguaCreateWithoutResponsavelInput, QualidadeAguaUncheckedCreateWithoutResponsavelInput> | QualidadeAguaCreateWithoutResponsavelInput[] | QualidadeAguaUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutResponsavelInput | QualidadeAguaCreateOrConnectWithoutResponsavelInput[]
    upsert?: QualidadeAguaUpsertWithWhereUniqueWithoutResponsavelInput | QualidadeAguaUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: QualidadeAguaCreateManyResponsavelInputEnvelope
    set?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    disconnect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    delete?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    update?: QualidadeAguaUpdateWithWhereUniqueWithoutResponsavelInput | QualidadeAguaUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: QualidadeAguaUpdateManyWithWhereWithoutResponsavelInput | QualidadeAguaUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: QualidadeAguaScalarWhereInput | QualidadeAguaScalarWhereInput[]
  }

  export type RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<RegistroDiarioCreateWithoutResponsavelInput, RegistroDiarioUncheckedCreateWithoutResponsavelInput> | RegistroDiarioCreateWithoutResponsavelInput[] | RegistroDiarioUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutResponsavelInput | RegistroDiarioCreateOrConnectWithoutResponsavelInput[]
    upsert?: RegistroDiarioUpsertWithWhereUniqueWithoutResponsavelInput | RegistroDiarioUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: RegistroDiarioCreateManyResponsavelInputEnvelope
    set?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    disconnect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    delete?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    update?: RegistroDiarioUpdateWithWhereUniqueWithoutResponsavelInput | RegistroDiarioUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: RegistroDiarioUpdateManyWithWhereWithoutResponsavelInput | RegistroDiarioUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: RegistroDiarioScalarWhereInput | RegistroDiarioScalarWhereInput[]
  }

  export type MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutResponsavelInput, MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput> | MovimentacaoTanqueCreateWithoutResponsavelInput[] | MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput | MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput[]
    upsert?: MovimentacaoTanqueUpsertWithWhereUniqueWithoutResponsavelInput | MovimentacaoTanqueUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: MovimentacaoTanqueCreateManyResponsavelInputEnvelope
    set?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    disconnect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    delete?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    update?: MovimentacaoTanqueUpdateWithWhereUniqueWithoutResponsavelInput | MovimentacaoTanqueUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: MovimentacaoTanqueUpdateManyWithWhereWithoutResponsavelInput | MovimentacaoTanqueUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: MovimentacaoTanqueScalarWhereInput | MovimentacaoTanqueScalarWhereInput[]
  }

  export type MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutResponsavelInput, MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput> | MovimentacaoRacaoCreateWithoutResponsavelInput[] | MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput | MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput[]
    upsert?: MovimentacaoRacaoUpsertWithWhereUniqueWithoutResponsavelInput | MovimentacaoRacaoUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: MovimentacaoRacaoCreateManyResponsavelInputEnvelope
    set?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    disconnect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    delete?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    update?: MovimentacaoRacaoUpdateWithWhereUniqueWithoutResponsavelInput | MovimentacaoRacaoUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: MovimentacaoRacaoUpdateManyWithWhereWithoutResponsavelInput | MovimentacaoRacaoUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: MovimentacaoRacaoScalarWhereInput | MovimentacaoRacaoScalarWhereInput[]
  }

  export type RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput = {
    create?: XOR<RegistroSaudeCreateWithoutResponsavelInput, RegistroSaudeUncheckedCreateWithoutResponsavelInput> | RegistroSaudeCreateWithoutResponsavelInput[] | RegistroSaudeUncheckedCreateWithoutResponsavelInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutResponsavelInput | RegistroSaudeCreateOrConnectWithoutResponsavelInput[]
    upsert?: RegistroSaudeUpsertWithWhereUniqueWithoutResponsavelInput | RegistroSaudeUpsertWithWhereUniqueWithoutResponsavelInput[]
    createMany?: RegistroSaudeCreateManyResponsavelInputEnvelope
    set?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    disconnect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    delete?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    update?: RegistroSaudeUpdateWithWhereUniqueWithoutResponsavelInput | RegistroSaudeUpdateWithWhereUniqueWithoutResponsavelInput[]
    updateMany?: RegistroSaudeUpdateManyWithWhereWithoutResponsavelInput | RegistroSaudeUpdateManyWithWhereWithoutResponsavelInput[]
    deleteMany?: RegistroSaudeScalarWhereInput | RegistroSaudeScalarWhereInput[]
  }

  export type CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput = {
    create?: XOR<CicloProducaoCreateWithoutTanque_ciclo_ativoInput, CicloProducaoUncheckedCreateWithoutTanque_ciclo_ativoInput>
    connectOrCreate?: CicloProducaoCreateOrConnectWithoutTanque_ciclo_ativoInput
    connect?: CicloProducaoWhereUniqueInput
  }

  export type CicloProducaoCreateNestedManyWithoutTanqueInput = {
    create?: XOR<CicloProducaoCreateWithoutTanqueInput, CicloProducaoUncheckedCreateWithoutTanqueInput> | CicloProducaoCreateWithoutTanqueInput[] | CicloProducaoUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: CicloProducaoCreateOrConnectWithoutTanqueInput | CicloProducaoCreateOrConnectWithoutTanqueInput[]
    createMany?: CicloProducaoCreateManyTanqueInputEnvelope
    connect?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
  }

  export type RegistroDiarioCreateNestedManyWithoutTanqueInput = {
    create?: XOR<RegistroDiarioCreateWithoutTanqueInput, RegistroDiarioUncheckedCreateWithoutTanqueInput> | RegistroDiarioCreateWithoutTanqueInput[] | RegistroDiarioUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutTanqueInput | RegistroDiarioCreateOrConnectWithoutTanqueInput[]
    createMany?: RegistroDiarioCreateManyTanqueInputEnvelope
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
  }

  export type BiometriaCreateNestedManyWithoutTanqueInput = {
    create?: XOR<BiometriaCreateWithoutTanqueInput, BiometriaUncheckedCreateWithoutTanqueInput> | BiometriaCreateWithoutTanqueInput[] | BiometriaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutTanqueInput | BiometriaCreateOrConnectWithoutTanqueInput[]
    createMany?: BiometriaCreateManyTanqueInputEnvelope
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
  }

  export type QualidadeAguaCreateNestedManyWithoutTanqueInput = {
    create?: XOR<QualidadeAguaCreateWithoutTanqueInput, QualidadeAguaUncheckedCreateWithoutTanqueInput> | QualidadeAguaCreateWithoutTanqueInput[] | QualidadeAguaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutTanqueInput | QualidadeAguaCreateOrConnectWithoutTanqueInput[]
    createMany?: QualidadeAguaCreateManyTanqueInputEnvelope
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
  }

  export type RegistroSaudeCreateNestedManyWithoutTanqueInput = {
    create?: XOR<RegistroSaudeCreateWithoutTanqueInput, RegistroSaudeUncheckedCreateWithoutTanqueInput> | RegistroSaudeCreateWithoutTanqueInput[] | RegistroSaudeUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutTanqueInput | RegistroSaudeCreateOrConnectWithoutTanqueInput[]
    createMany?: RegistroSaudeCreateManyTanqueInputEnvelope
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
  }

  export type MovimentacaoTanqueCreateNestedManyWithoutTanqueInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutTanqueInput, MovimentacaoTanqueUncheckedCreateWithoutTanqueInput> | MovimentacaoTanqueCreateWithoutTanqueInput[] | MovimentacaoTanqueUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutTanqueInput | MovimentacaoTanqueCreateOrConnectWithoutTanqueInput[]
    createMany?: MovimentacaoTanqueCreateManyTanqueInputEnvelope
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
  }

  export type CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<CicloProducaoCreateWithoutTanqueInput, CicloProducaoUncheckedCreateWithoutTanqueInput> | CicloProducaoCreateWithoutTanqueInput[] | CicloProducaoUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: CicloProducaoCreateOrConnectWithoutTanqueInput | CicloProducaoCreateOrConnectWithoutTanqueInput[]
    createMany?: CicloProducaoCreateManyTanqueInputEnvelope
    connect?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
  }

  export type RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<RegistroDiarioCreateWithoutTanqueInput, RegistroDiarioUncheckedCreateWithoutTanqueInput> | RegistroDiarioCreateWithoutTanqueInput[] | RegistroDiarioUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutTanqueInput | RegistroDiarioCreateOrConnectWithoutTanqueInput[]
    createMany?: RegistroDiarioCreateManyTanqueInputEnvelope
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
  }

  export type BiometriaUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<BiometriaCreateWithoutTanqueInput, BiometriaUncheckedCreateWithoutTanqueInput> | BiometriaCreateWithoutTanqueInput[] | BiometriaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutTanqueInput | BiometriaCreateOrConnectWithoutTanqueInput[]
    createMany?: BiometriaCreateManyTanqueInputEnvelope
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
  }

  export type QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<QualidadeAguaCreateWithoutTanqueInput, QualidadeAguaUncheckedCreateWithoutTanqueInput> | QualidadeAguaCreateWithoutTanqueInput[] | QualidadeAguaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutTanqueInput | QualidadeAguaCreateOrConnectWithoutTanqueInput[]
    createMany?: QualidadeAguaCreateManyTanqueInputEnvelope
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
  }

  export type RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<RegistroSaudeCreateWithoutTanqueInput, RegistroSaudeUncheckedCreateWithoutTanqueInput> | RegistroSaudeCreateWithoutTanqueInput[] | RegistroSaudeUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutTanqueInput | RegistroSaudeCreateOrConnectWithoutTanqueInput[]
    createMany?: RegistroSaudeCreateManyTanqueInputEnvelope
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
  }

  export type MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutTanqueInput, MovimentacaoTanqueUncheckedCreateWithoutTanqueInput> | MovimentacaoTanqueCreateWithoutTanqueInput[] | MovimentacaoTanqueUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutTanqueInput | MovimentacaoTanqueCreateOrConnectWithoutTanqueInput[]
    createMany?: MovimentacaoTanqueCreateManyTanqueInputEnvelope
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTipoTanqueFieldUpdateOperationsInput = {
    set?: $Enums.TipoTanque
  }

  export type EnumStatusTanqueFieldUpdateOperationsInput = {
    set?: $Enums.StatusTanque
  }

  export type CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput = {
    create?: XOR<CicloProducaoCreateWithoutTanque_ciclo_ativoInput, CicloProducaoUncheckedCreateWithoutTanque_ciclo_ativoInput>
    connectOrCreate?: CicloProducaoCreateOrConnectWithoutTanque_ciclo_ativoInput
    upsert?: CicloProducaoUpsertWithoutTanque_ciclo_ativoInput
    disconnect?: CicloProducaoWhereInput | boolean
    delete?: CicloProducaoWhereInput | boolean
    connect?: CicloProducaoWhereUniqueInput
    update?: XOR<XOR<CicloProducaoUpdateToOneWithWhereWithoutTanque_ciclo_ativoInput, CicloProducaoUpdateWithoutTanque_ciclo_ativoInput>, CicloProducaoUncheckedUpdateWithoutTanque_ciclo_ativoInput>
  }

  export type CicloProducaoUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<CicloProducaoCreateWithoutTanqueInput, CicloProducaoUncheckedCreateWithoutTanqueInput> | CicloProducaoCreateWithoutTanqueInput[] | CicloProducaoUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: CicloProducaoCreateOrConnectWithoutTanqueInput | CicloProducaoCreateOrConnectWithoutTanqueInput[]
    upsert?: CicloProducaoUpsertWithWhereUniqueWithoutTanqueInput | CicloProducaoUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: CicloProducaoCreateManyTanqueInputEnvelope
    set?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    disconnect?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    delete?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    connect?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    update?: CicloProducaoUpdateWithWhereUniqueWithoutTanqueInput | CicloProducaoUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: CicloProducaoUpdateManyWithWhereWithoutTanqueInput | CicloProducaoUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: CicloProducaoScalarWhereInput | CicloProducaoScalarWhereInput[]
  }

  export type RegistroDiarioUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<RegistroDiarioCreateWithoutTanqueInput, RegistroDiarioUncheckedCreateWithoutTanqueInput> | RegistroDiarioCreateWithoutTanqueInput[] | RegistroDiarioUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutTanqueInput | RegistroDiarioCreateOrConnectWithoutTanqueInput[]
    upsert?: RegistroDiarioUpsertWithWhereUniqueWithoutTanqueInput | RegistroDiarioUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: RegistroDiarioCreateManyTanqueInputEnvelope
    set?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    disconnect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    delete?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    update?: RegistroDiarioUpdateWithWhereUniqueWithoutTanqueInput | RegistroDiarioUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: RegistroDiarioUpdateManyWithWhereWithoutTanqueInput | RegistroDiarioUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: RegistroDiarioScalarWhereInput | RegistroDiarioScalarWhereInput[]
  }

  export type BiometriaUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<BiometriaCreateWithoutTanqueInput, BiometriaUncheckedCreateWithoutTanqueInput> | BiometriaCreateWithoutTanqueInput[] | BiometriaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutTanqueInput | BiometriaCreateOrConnectWithoutTanqueInput[]
    upsert?: BiometriaUpsertWithWhereUniqueWithoutTanqueInput | BiometriaUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: BiometriaCreateManyTanqueInputEnvelope
    set?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    disconnect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    delete?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    update?: BiometriaUpdateWithWhereUniqueWithoutTanqueInput | BiometriaUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: BiometriaUpdateManyWithWhereWithoutTanqueInput | BiometriaUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: BiometriaScalarWhereInput | BiometriaScalarWhereInput[]
  }

  export type QualidadeAguaUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<QualidadeAguaCreateWithoutTanqueInput, QualidadeAguaUncheckedCreateWithoutTanqueInput> | QualidadeAguaCreateWithoutTanqueInput[] | QualidadeAguaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutTanqueInput | QualidadeAguaCreateOrConnectWithoutTanqueInput[]
    upsert?: QualidadeAguaUpsertWithWhereUniqueWithoutTanqueInput | QualidadeAguaUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: QualidadeAguaCreateManyTanqueInputEnvelope
    set?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    disconnect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    delete?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    update?: QualidadeAguaUpdateWithWhereUniqueWithoutTanqueInput | QualidadeAguaUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: QualidadeAguaUpdateManyWithWhereWithoutTanqueInput | QualidadeAguaUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: QualidadeAguaScalarWhereInput | QualidadeAguaScalarWhereInput[]
  }

  export type RegistroSaudeUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<RegistroSaudeCreateWithoutTanqueInput, RegistroSaudeUncheckedCreateWithoutTanqueInput> | RegistroSaudeCreateWithoutTanqueInput[] | RegistroSaudeUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutTanqueInput | RegistroSaudeCreateOrConnectWithoutTanqueInput[]
    upsert?: RegistroSaudeUpsertWithWhereUniqueWithoutTanqueInput | RegistroSaudeUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: RegistroSaudeCreateManyTanqueInputEnvelope
    set?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    disconnect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    delete?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    update?: RegistroSaudeUpdateWithWhereUniqueWithoutTanqueInput | RegistroSaudeUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: RegistroSaudeUpdateManyWithWhereWithoutTanqueInput | RegistroSaudeUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: RegistroSaudeScalarWhereInput | RegistroSaudeScalarWhereInput[]
  }

  export type MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutTanqueInput, MovimentacaoTanqueUncheckedCreateWithoutTanqueInput> | MovimentacaoTanqueCreateWithoutTanqueInput[] | MovimentacaoTanqueUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutTanqueInput | MovimentacaoTanqueCreateOrConnectWithoutTanqueInput[]
    upsert?: MovimentacaoTanqueUpsertWithWhereUniqueWithoutTanqueInput | MovimentacaoTanqueUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: MovimentacaoTanqueCreateManyTanqueInputEnvelope
    set?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    disconnect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    delete?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    update?: MovimentacaoTanqueUpdateWithWhereUniqueWithoutTanqueInput | MovimentacaoTanqueUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: MovimentacaoTanqueUpdateManyWithWhereWithoutTanqueInput | MovimentacaoTanqueUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: MovimentacaoTanqueScalarWhereInput | MovimentacaoTanqueScalarWhereInput[]
  }

  export type CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<CicloProducaoCreateWithoutTanqueInput, CicloProducaoUncheckedCreateWithoutTanqueInput> | CicloProducaoCreateWithoutTanqueInput[] | CicloProducaoUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: CicloProducaoCreateOrConnectWithoutTanqueInput | CicloProducaoCreateOrConnectWithoutTanqueInput[]
    upsert?: CicloProducaoUpsertWithWhereUniqueWithoutTanqueInput | CicloProducaoUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: CicloProducaoCreateManyTanqueInputEnvelope
    set?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    disconnect?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    delete?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    connect?: CicloProducaoWhereUniqueInput | CicloProducaoWhereUniqueInput[]
    update?: CicloProducaoUpdateWithWhereUniqueWithoutTanqueInput | CicloProducaoUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: CicloProducaoUpdateManyWithWhereWithoutTanqueInput | CicloProducaoUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: CicloProducaoScalarWhereInput | CicloProducaoScalarWhereInput[]
  }

  export type RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<RegistroDiarioCreateWithoutTanqueInput, RegistroDiarioUncheckedCreateWithoutTanqueInput> | RegistroDiarioCreateWithoutTanqueInput[] | RegistroDiarioUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroDiarioCreateOrConnectWithoutTanqueInput | RegistroDiarioCreateOrConnectWithoutTanqueInput[]
    upsert?: RegistroDiarioUpsertWithWhereUniqueWithoutTanqueInput | RegistroDiarioUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: RegistroDiarioCreateManyTanqueInputEnvelope
    set?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    disconnect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    delete?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    connect?: RegistroDiarioWhereUniqueInput | RegistroDiarioWhereUniqueInput[]
    update?: RegistroDiarioUpdateWithWhereUniqueWithoutTanqueInput | RegistroDiarioUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: RegistroDiarioUpdateManyWithWhereWithoutTanqueInput | RegistroDiarioUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: RegistroDiarioScalarWhereInput | RegistroDiarioScalarWhereInput[]
  }

  export type BiometriaUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<BiometriaCreateWithoutTanqueInput, BiometriaUncheckedCreateWithoutTanqueInput> | BiometriaCreateWithoutTanqueInput[] | BiometriaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: BiometriaCreateOrConnectWithoutTanqueInput | BiometriaCreateOrConnectWithoutTanqueInput[]
    upsert?: BiometriaUpsertWithWhereUniqueWithoutTanqueInput | BiometriaUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: BiometriaCreateManyTanqueInputEnvelope
    set?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    disconnect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    delete?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    connect?: BiometriaWhereUniqueInput | BiometriaWhereUniqueInput[]
    update?: BiometriaUpdateWithWhereUniqueWithoutTanqueInput | BiometriaUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: BiometriaUpdateManyWithWhereWithoutTanqueInput | BiometriaUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: BiometriaScalarWhereInput | BiometriaScalarWhereInput[]
  }

  export type QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<QualidadeAguaCreateWithoutTanqueInput, QualidadeAguaUncheckedCreateWithoutTanqueInput> | QualidadeAguaCreateWithoutTanqueInput[] | QualidadeAguaUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: QualidadeAguaCreateOrConnectWithoutTanqueInput | QualidadeAguaCreateOrConnectWithoutTanqueInput[]
    upsert?: QualidadeAguaUpsertWithWhereUniqueWithoutTanqueInput | QualidadeAguaUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: QualidadeAguaCreateManyTanqueInputEnvelope
    set?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    disconnect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    delete?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    connect?: QualidadeAguaWhereUniqueInput | QualidadeAguaWhereUniqueInput[]
    update?: QualidadeAguaUpdateWithWhereUniqueWithoutTanqueInput | QualidadeAguaUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: QualidadeAguaUpdateManyWithWhereWithoutTanqueInput | QualidadeAguaUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: QualidadeAguaScalarWhereInput | QualidadeAguaScalarWhereInput[]
  }

  export type RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<RegistroSaudeCreateWithoutTanqueInput, RegistroSaudeUncheckedCreateWithoutTanqueInput> | RegistroSaudeCreateWithoutTanqueInput[] | RegistroSaudeUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: RegistroSaudeCreateOrConnectWithoutTanqueInput | RegistroSaudeCreateOrConnectWithoutTanqueInput[]
    upsert?: RegistroSaudeUpsertWithWhereUniqueWithoutTanqueInput | RegistroSaudeUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: RegistroSaudeCreateManyTanqueInputEnvelope
    set?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    disconnect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    delete?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    connect?: RegistroSaudeWhereUniqueInput | RegistroSaudeWhereUniqueInput[]
    update?: RegistroSaudeUpdateWithWhereUniqueWithoutTanqueInput | RegistroSaudeUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: RegistroSaudeUpdateManyWithWhereWithoutTanqueInput | RegistroSaudeUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: RegistroSaudeScalarWhereInput | RegistroSaudeScalarWhereInput[]
  }

  export type MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput = {
    create?: XOR<MovimentacaoTanqueCreateWithoutTanqueInput, MovimentacaoTanqueUncheckedCreateWithoutTanqueInput> | MovimentacaoTanqueCreateWithoutTanqueInput[] | MovimentacaoTanqueUncheckedCreateWithoutTanqueInput[]
    connectOrCreate?: MovimentacaoTanqueCreateOrConnectWithoutTanqueInput | MovimentacaoTanqueCreateOrConnectWithoutTanqueInput[]
    upsert?: MovimentacaoTanqueUpsertWithWhereUniqueWithoutTanqueInput | MovimentacaoTanqueUpsertWithWhereUniqueWithoutTanqueInput[]
    createMany?: MovimentacaoTanqueCreateManyTanqueInputEnvelope
    set?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    disconnect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    delete?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    connect?: MovimentacaoTanqueWhereUniqueInput | MovimentacaoTanqueWhereUniqueInput[]
    update?: MovimentacaoTanqueUpdateWithWhereUniqueWithoutTanqueInput | MovimentacaoTanqueUpdateWithWhereUniqueWithoutTanqueInput[]
    updateMany?: MovimentacaoTanqueUpdateManyWithWhereWithoutTanqueInput | MovimentacaoTanqueUpdateManyWithWhereWithoutTanqueInput[]
    deleteMany?: MovimentacaoTanqueScalarWhereInput | MovimentacaoTanqueScalarWhereInput[]
  }

  export type TanqueCreateNestedOneWithoutCiclo_atualInput = {
    create?: XOR<TanqueCreateWithoutCiclo_atualInput, TanqueUncheckedCreateWithoutCiclo_atualInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutCiclo_atualInput
    connect?: TanqueWhereUniqueInput
  }

  export type TanqueCreateNestedOneWithoutCiclosInput = {
    create?: XOR<TanqueCreateWithoutCiclosInput, TanqueUncheckedCreateWithoutCiclosInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutCiclosInput
    connect?: TanqueWhereUniqueInput
  }

  export type TanqueUncheckedCreateNestedOneWithoutCiclo_atualInput = {
    create?: XOR<TanqueCreateWithoutCiclo_atualInput, TanqueUncheckedCreateWithoutCiclo_atualInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutCiclo_atualInput
    connect?: TanqueWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TanqueUpdateOneWithoutCiclo_atualNestedInput = {
    create?: XOR<TanqueCreateWithoutCiclo_atualInput, TanqueUncheckedCreateWithoutCiclo_atualInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutCiclo_atualInput
    upsert?: TanqueUpsertWithoutCiclo_atualInput
    disconnect?: TanqueWhereInput | boolean
    delete?: TanqueWhereInput | boolean
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutCiclo_atualInput, TanqueUpdateWithoutCiclo_atualInput>, TanqueUncheckedUpdateWithoutCiclo_atualInput>
  }

  export type TanqueUpdateOneRequiredWithoutCiclosNestedInput = {
    create?: XOR<TanqueCreateWithoutCiclosInput, TanqueUncheckedCreateWithoutCiclosInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutCiclosInput
    upsert?: TanqueUpsertWithoutCiclosInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutCiclosInput, TanqueUpdateWithoutCiclosInput>, TanqueUncheckedUpdateWithoutCiclosInput>
  }

  export type TanqueUncheckedUpdateOneWithoutCiclo_atualNestedInput = {
    create?: XOR<TanqueCreateWithoutCiclo_atualInput, TanqueUncheckedCreateWithoutCiclo_atualInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutCiclo_atualInput
    upsert?: TanqueUpsertWithoutCiclo_atualInput
    disconnect?: TanqueWhereInput | boolean
    delete?: TanqueWhereInput | boolean
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutCiclo_atualInput, TanqueUpdateWithoutCiclo_atualInput>, TanqueUncheckedUpdateWithoutCiclo_atualInput>
  }

  export type TanqueCreateNestedOneWithoutRegistros_diariosInput = {
    create?: XOR<TanqueCreateWithoutRegistros_diariosInput, TanqueUncheckedCreateWithoutRegistros_diariosInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutRegistros_diariosInput
    connect?: TanqueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsavel_registrodiarioInput = {
    create?: XOR<UserCreateWithoutResponsavel_registrodiarioInput, UserUncheckedCreateWithoutResponsavel_registrodiarioInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_registrodiarioInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumTurnoFieldUpdateOperationsInput = {
    set?: $Enums.Turno | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type TanqueUpdateOneRequiredWithoutRegistros_diariosNestedInput = {
    create?: XOR<TanqueCreateWithoutRegistros_diariosInput, TanqueUncheckedCreateWithoutRegistros_diariosInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutRegistros_diariosInput
    upsert?: TanqueUpsertWithoutRegistros_diariosInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutRegistros_diariosInput, TanqueUpdateWithoutRegistros_diariosInput>, TanqueUncheckedUpdateWithoutRegistros_diariosInput>
  }

  export type UserUpdateOneWithoutResponsavel_registrodiarioNestedInput = {
    create?: XOR<UserCreateWithoutResponsavel_registrodiarioInput, UserUncheckedCreateWithoutResponsavel_registrodiarioInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_registrodiarioInput
    upsert?: UserUpsertWithoutResponsavel_registrodiarioInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsavel_registrodiarioInput, UserUpdateWithoutResponsavel_registrodiarioInput>, UserUncheckedUpdateWithoutResponsavel_registrodiarioInput>
  }

  export type TanqueCreateNestedOneWithoutBiometriasInput = {
    create?: XOR<TanqueCreateWithoutBiometriasInput, TanqueUncheckedCreateWithoutBiometriasInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutBiometriasInput
    connect?: TanqueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsavel_biometriasInput = {
    create?: XOR<UserCreateWithoutResponsavel_biometriasInput, UserUncheckedCreateWithoutResponsavel_biometriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_biometriasInput
    connect?: UserWhereUniqueInput
  }

  export type TanqueUpdateOneRequiredWithoutBiometriasNestedInput = {
    create?: XOR<TanqueCreateWithoutBiometriasInput, TanqueUncheckedCreateWithoutBiometriasInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutBiometriasInput
    upsert?: TanqueUpsertWithoutBiometriasInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutBiometriasInput, TanqueUpdateWithoutBiometriasInput>, TanqueUncheckedUpdateWithoutBiometriasInput>
  }

  export type UserUpdateOneWithoutResponsavel_biometriasNestedInput = {
    create?: XOR<UserCreateWithoutResponsavel_biometriasInput, UserUncheckedCreateWithoutResponsavel_biometriasInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_biometriasInput
    upsert?: UserUpsertWithoutResponsavel_biometriasInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsavel_biometriasInput, UserUpdateWithoutResponsavel_biometriasInput>, UserUncheckedUpdateWithoutResponsavel_biometriasInput>
  }

  export type TanqueCreateNestedOneWithoutQualidade_aguaInput = {
    create?: XOR<TanqueCreateWithoutQualidade_aguaInput, TanqueUncheckedCreateWithoutQualidade_aguaInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutQualidade_aguaInput
    connect?: TanqueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsavel_qualidadeaguaInput = {
    create?: XOR<UserCreateWithoutResponsavel_qualidadeaguaInput, UserUncheckedCreateWithoutResponsavel_qualidadeaguaInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_qualidadeaguaInput
    connect?: UserWhereUniqueInput
  }

  export type TanqueUpdateOneRequiredWithoutQualidade_aguaNestedInput = {
    create?: XOR<TanqueCreateWithoutQualidade_aguaInput, TanqueUncheckedCreateWithoutQualidade_aguaInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutQualidade_aguaInput
    upsert?: TanqueUpsertWithoutQualidade_aguaInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutQualidade_aguaInput, TanqueUpdateWithoutQualidade_aguaInput>, TanqueUncheckedUpdateWithoutQualidade_aguaInput>
  }

  export type UserUpdateOneWithoutResponsavel_qualidadeaguaNestedInput = {
    create?: XOR<UserCreateWithoutResponsavel_qualidadeaguaInput, UserUncheckedCreateWithoutResponsavel_qualidadeaguaInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_qualidadeaguaInput
    upsert?: UserUpsertWithoutResponsavel_qualidadeaguaInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsavel_qualidadeaguaInput, UserUpdateWithoutResponsavel_qualidadeaguaInput>, UserUncheckedUpdateWithoutResponsavel_qualidadeaguaInput>
  }

  export type TanqueCreateNestedOneWithoutRegistros_saudeInput = {
    create?: XOR<TanqueCreateWithoutRegistros_saudeInput, TanqueUncheckedCreateWithoutRegistros_saudeInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutRegistros_saudeInput
    connect?: TanqueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsavel_regsaudeInput = {
    create?: XOR<UserCreateWithoutResponsavel_regsaudeInput, UserUncheckedCreateWithoutResponsavel_regsaudeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_regsaudeInput
    connect?: UserWhereUniqueInput
  }

  export type TanqueUpdateOneRequiredWithoutRegistros_saudeNestedInput = {
    create?: XOR<TanqueCreateWithoutRegistros_saudeInput, TanqueUncheckedCreateWithoutRegistros_saudeInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutRegistros_saudeInput
    upsert?: TanqueUpsertWithoutRegistros_saudeInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutRegistros_saudeInput, TanqueUpdateWithoutRegistros_saudeInput>, TanqueUncheckedUpdateWithoutRegistros_saudeInput>
  }

  export type UserUpdateOneWithoutResponsavel_regsaudeNestedInput = {
    create?: XOR<UserCreateWithoutResponsavel_regsaudeInput, UserUncheckedCreateWithoutResponsavel_regsaudeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_regsaudeInput
    upsert?: UserUpsertWithoutResponsavel_regsaudeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsavel_regsaudeInput, UserUpdateWithoutResponsavel_regsaudeInput>, UserUncheckedUpdateWithoutResponsavel_regsaudeInput>
  }

  export type MovimentacaoRacaoCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutProdutoInput, MovimentacaoRacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoRacaoCreateWithoutProdutoInput[] | MovimentacaoRacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutProdutoInput | MovimentacaoRacaoCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentacaoRacaoCreateManyProdutoInputEnvelope
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
  }

  export type MovimentacaoRacaoUncheckedCreateNestedManyWithoutProdutoInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutProdutoInput, MovimentacaoRacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoRacaoCreateWithoutProdutoInput[] | MovimentacaoRacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutProdutoInput | MovimentacaoRacaoCreateOrConnectWithoutProdutoInput[]
    createMany?: MovimentacaoRacaoCreateManyProdutoInputEnvelope
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
  }

  export type MovimentacaoRacaoUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutProdutoInput, MovimentacaoRacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoRacaoCreateWithoutProdutoInput[] | MovimentacaoRacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutProdutoInput | MovimentacaoRacaoCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentacaoRacaoUpsertWithWhereUniqueWithoutProdutoInput | MovimentacaoRacaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentacaoRacaoCreateManyProdutoInputEnvelope
    set?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    disconnect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    delete?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    update?: MovimentacaoRacaoUpdateWithWhereUniqueWithoutProdutoInput | MovimentacaoRacaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentacaoRacaoUpdateManyWithWhereWithoutProdutoInput | MovimentacaoRacaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentacaoRacaoScalarWhereInput | MovimentacaoRacaoScalarWhereInput[]
  }

  export type MovimentacaoRacaoUncheckedUpdateManyWithoutProdutoNestedInput = {
    create?: XOR<MovimentacaoRacaoCreateWithoutProdutoInput, MovimentacaoRacaoUncheckedCreateWithoutProdutoInput> | MovimentacaoRacaoCreateWithoutProdutoInput[] | MovimentacaoRacaoUncheckedCreateWithoutProdutoInput[]
    connectOrCreate?: MovimentacaoRacaoCreateOrConnectWithoutProdutoInput | MovimentacaoRacaoCreateOrConnectWithoutProdutoInput[]
    upsert?: MovimentacaoRacaoUpsertWithWhereUniqueWithoutProdutoInput | MovimentacaoRacaoUpsertWithWhereUniqueWithoutProdutoInput[]
    createMany?: MovimentacaoRacaoCreateManyProdutoInputEnvelope
    set?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    disconnect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    delete?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    connect?: MovimentacaoRacaoWhereUniqueInput | MovimentacaoRacaoWhereUniqueInput[]
    update?: MovimentacaoRacaoUpdateWithWhereUniqueWithoutProdutoInput | MovimentacaoRacaoUpdateWithWhereUniqueWithoutProdutoInput[]
    updateMany?: MovimentacaoRacaoUpdateManyWithWhereWithoutProdutoInput | MovimentacaoRacaoUpdateManyWithWhereWithoutProdutoInput[]
    deleteMany?: MovimentacaoRacaoScalarWhereInput | MovimentacaoRacaoScalarWhereInput[]
  }

  export type TanqueCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<TanqueCreateWithoutMovimentacoesInput, TanqueUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutMovimentacoesInput
    connect?: TanqueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsavel_movtanqueInput = {
    create?: XOR<UserCreateWithoutResponsavel_movtanqueInput, UserUncheckedCreateWithoutResponsavel_movtanqueInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_movtanqueInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMovTanqueTipoFieldUpdateOperationsInput = {
    set?: $Enums.MovTanqueTipo
  }

  export type TanqueUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<TanqueCreateWithoutMovimentacoesInput, TanqueUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: TanqueCreateOrConnectWithoutMovimentacoesInput
    upsert?: TanqueUpsertWithoutMovimentacoesInput
    connect?: TanqueWhereUniqueInput
    update?: XOR<XOR<TanqueUpdateToOneWithWhereWithoutMovimentacoesInput, TanqueUpdateWithoutMovimentacoesInput>, TanqueUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type UserUpdateOneWithoutResponsavel_movtanqueNestedInput = {
    create?: XOR<UserCreateWithoutResponsavel_movtanqueInput, UserUncheckedCreateWithoutResponsavel_movtanqueInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_movtanqueInput
    upsert?: UserUpsertWithoutResponsavel_movtanqueInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsavel_movtanqueInput, UserUpdateWithoutResponsavel_movtanqueInput>, UserUncheckedUpdateWithoutResponsavel_movtanqueInput>
  }

  export type ProdutoEstoqueCreateNestedOneWithoutMovimentacoesInput = {
    create?: XOR<ProdutoEstoqueCreateWithoutMovimentacoesInput, ProdutoEstoqueUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProdutoEstoqueCreateOrConnectWithoutMovimentacoesInput
    connect?: ProdutoEstoqueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResponsavel_movracaoInput = {
    create?: XOR<UserCreateWithoutResponsavel_movracaoInput, UserUncheckedCreateWithoutResponsavel_movracaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_movracaoInput
    connect?: UserWhereUniqueInput
  }

  export type ProdutoEstoqueUpdateOneRequiredWithoutMovimentacoesNestedInput = {
    create?: XOR<ProdutoEstoqueCreateWithoutMovimentacoesInput, ProdutoEstoqueUncheckedCreateWithoutMovimentacoesInput>
    connectOrCreate?: ProdutoEstoqueCreateOrConnectWithoutMovimentacoesInput
    upsert?: ProdutoEstoqueUpsertWithoutMovimentacoesInput
    connect?: ProdutoEstoqueWhereUniqueInput
    update?: XOR<XOR<ProdutoEstoqueUpdateToOneWithWhereWithoutMovimentacoesInput, ProdutoEstoqueUpdateWithoutMovimentacoesInput>, ProdutoEstoqueUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type UserUpdateOneWithoutResponsavel_movracaoNestedInput = {
    create?: XOR<UserCreateWithoutResponsavel_movracaoInput, UserUncheckedCreateWithoutResponsavel_movracaoInput>
    connectOrCreate?: UserCreateOrConnectWithoutResponsavel_movracaoInput
    upsert?: UserUpsertWithoutResponsavel_movracaoInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResponsavel_movracaoInput, UserUpdateWithoutResponsavel_movracaoInput>, UserUncheckedUpdateWithoutResponsavel_movracaoInput>
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

  export type NestedEnumRoleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableFilter<$PrismaModel> | $Enums.Role | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumRoleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRoleNullableFilter<$PrismaModel>
    _max?: NestedEnumRoleNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTipoTanqueFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTanque | EnumTipoTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTanqueFilter<$PrismaModel> | $Enums.TipoTanque
  }

  export type NestedEnumStatusTanqueFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTanque | EnumStatusTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTanqueFilter<$PrismaModel> | $Enums.StatusTanque
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumTipoTanqueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTanque | EnumTipoTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTanque[] | ListEnumTipoTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTanqueWithAggregatesFilter<$PrismaModel> | $Enums.TipoTanque
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTanqueFilter<$PrismaModel>
    _max?: NestedEnumTipoTanqueFilter<$PrismaModel>
  }

  export type NestedEnumStatusTanqueWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTanque | EnumStatusTanqueFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTanque[] | ListEnumStatusTanqueFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTanqueWithAggregatesFilter<$PrismaModel> | $Enums.StatusTanque
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTanqueFilter<$PrismaModel>
    _max?: NestedEnumStatusTanqueFilter<$PrismaModel>
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

  export type NestedEnumTurnoNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTurnoNullableFilter<$PrismaModel> | $Enums.Turno | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumTurnoNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Turno | EnumTurnoFieldRefInput<$PrismaModel> | null
    in?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Turno[] | ListEnumTurnoFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTurnoNullableWithAggregatesFilter<$PrismaModel> | $Enums.Turno | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTurnoNullableFilter<$PrismaModel>
    _max?: NestedEnumTurnoNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumMovTanqueTipoFilter<$PrismaModel = never> = {
    equals?: $Enums.MovTanqueTipo | EnumMovTanqueTipoFieldRefInput<$PrismaModel>
    in?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumMovTanqueTipoFilter<$PrismaModel> | $Enums.MovTanqueTipo
  }

  export type NestedEnumMovTanqueTipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovTanqueTipo | EnumMovTanqueTipoFieldRefInput<$PrismaModel>
    in?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovTanqueTipo[] | ListEnumMovTanqueTipoFieldRefInput<$PrismaModel>
    not?: NestedEnumMovTanqueTipoWithAggregatesFilter<$PrismaModel> | $Enums.MovTanqueTipo
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovTanqueTipoFilter<$PrismaModel>
    _max?: NestedEnumMovTanqueTipoFilter<$PrismaModel>
  }

  export type BiometriaCreateWithoutResponsavelInput = {
    id?: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    tanque: TanqueCreateNestedOneWithoutBiometriasInput
  }

  export type BiometriaUncheckedCreateWithoutResponsavelInput = {
    id?: string
    tanque_id: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
  }

  export type BiometriaCreateOrConnectWithoutResponsavelInput = {
    where: BiometriaWhereUniqueInput
    create: XOR<BiometriaCreateWithoutResponsavelInput, BiometriaUncheckedCreateWithoutResponsavelInput>
  }

  export type BiometriaCreateManyResponsavelInputEnvelope = {
    data: BiometriaCreateManyResponsavelInput | BiometriaCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type QualidadeAguaCreateWithoutResponsavelInput = {
    id?: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    tanque: TanqueCreateNestedOneWithoutQualidade_aguaInput
  }

  export type QualidadeAguaUncheckedCreateWithoutResponsavelInput = {
    id?: string
    tanque_id: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
  }

  export type QualidadeAguaCreateOrConnectWithoutResponsavelInput = {
    where: QualidadeAguaWhereUniqueInput
    create: XOR<QualidadeAguaCreateWithoutResponsavelInput, QualidadeAguaUncheckedCreateWithoutResponsavelInput>
  }

  export type QualidadeAguaCreateManyResponsavelInputEnvelope = {
    data: QualidadeAguaCreateManyResponsavelInput | QualidadeAguaCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type RegistroDiarioCreateWithoutResponsavelInput = {
    id?: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    isAutomatic?: boolean
    tanque: TanqueCreateNestedOneWithoutRegistros_diariosInput
  }

  export type RegistroDiarioUncheckedCreateWithoutResponsavelInput = {
    id?: string
    tanque_id: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    isAutomatic?: boolean
  }

  export type RegistroDiarioCreateOrConnectWithoutResponsavelInput = {
    where: RegistroDiarioWhereUniqueInput
    create: XOR<RegistroDiarioCreateWithoutResponsavelInput, RegistroDiarioUncheckedCreateWithoutResponsavelInput>
  }

  export type RegistroDiarioCreateManyResponsavelInputEnvelope = {
    data: RegistroDiarioCreateManyResponsavelInput | RegistroDiarioCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoTanqueCreateWithoutResponsavelInput = {
    id?: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    tanque: TanqueCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput = {
    id?: string
    tanque_id: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
  }

  export type MovimentacaoTanqueCreateOrConnectWithoutResponsavelInput = {
    where: MovimentacaoTanqueWhereUniqueInput
    create: XOR<MovimentacaoTanqueCreateWithoutResponsavelInput, MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput>
  }

  export type MovimentacaoTanqueCreateManyResponsavelInputEnvelope = {
    data: MovimentacaoTanqueCreateManyResponsavelInput | MovimentacaoTanqueCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoRacaoCreateWithoutResponsavelInput = {
    id?: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    produto: ProdutoEstoqueCreateNestedOneWithoutMovimentacoesInput
  }

  export type MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput = {
    id?: string
    produto_id: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
  }

  export type MovimentacaoRacaoCreateOrConnectWithoutResponsavelInput = {
    where: MovimentacaoRacaoWhereUniqueInput
    create: XOR<MovimentacaoRacaoCreateWithoutResponsavelInput, MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput>
  }

  export type MovimentacaoRacaoCreateManyResponsavelInputEnvelope = {
    data: MovimentacaoRacaoCreateManyResponsavelInput | MovimentacaoRacaoCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type RegistroSaudeCreateWithoutResponsavelInput = {
    id?: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    tanque: TanqueCreateNestedOneWithoutRegistros_saudeInput
  }

  export type RegistroSaudeUncheckedCreateWithoutResponsavelInput = {
    id?: string
    tanque_id: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
  }

  export type RegistroSaudeCreateOrConnectWithoutResponsavelInput = {
    where: RegistroSaudeWhereUniqueInput
    create: XOR<RegistroSaudeCreateWithoutResponsavelInput, RegistroSaudeUncheckedCreateWithoutResponsavelInput>
  }

  export type RegistroSaudeCreateManyResponsavelInputEnvelope = {
    data: RegistroSaudeCreateManyResponsavelInput | RegistroSaudeCreateManyResponsavelInput[]
    skipDuplicates?: boolean
  }

  export type BiometriaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: BiometriaWhereUniqueInput
    update: XOR<BiometriaUpdateWithoutResponsavelInput, BiometriaUncheckedUpdateWithoutResponsavelInput>
    create: XOR<BiometriaCreateWithoutResponsavelInput, BiometriaUncheckedCreateWithoutResponsavelInput>
  }

  export type BiometriaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: BiometriaWhereUniqueInput
    data: XOR<BiometriaUpdateWithoutResponsavelInput, BiometriaUncheckedUpdateWithoutResponsavelInput>
  }

  export type BiometriaUpdateManyWithWhereWithoutResponsavelInput = {
    where: BiometriaScalarWhereInput
    data: XOR<BiometriaUpdateManyMutationInput, BiometriaUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type BiometriaScalarWhereInput = {
    AND?: BiometriaScalarWhereInput | BiometriaScalarWhereInput[]
    OR?: BiometriaScalarWhereInput[]
    NOT?: BiometriaScalarWhereInput | BiometriaScalarWhereInput[]
    id?: StringFilter<"Biometria"> | string
    tanque_id?: StringFilter<"Biometria"> | string
    data_amostra?: DateTimeFilter<"Biometria"> | Date | string
    idade_lote_dias?: IntNullableFilter<"Biometria"> | number | null
    tamanho_amostra?: IntFilter<"Biometria"> | number
    peso_total_kg?: FloatFilter<"Biometria"> | number
    peso_minimo?: FloatNullableFilter<"Biometria"> | number | null
    peso_maximo?: FloatNullableFilter<"Biometria"> | number | null
    comprimento_medio_cm?: FloatFilter<"Biometria"> | number
    comprimento_minimo?: FloatNullableFilter<"Biometria"> | number | null
    comprimento_maximo?: FloatNullableFilter<"Biometria"> | number | null
    altura_minima?: FloatNullableFilter<"Biometria"> | number | null
    altura_maxima?: FloatNullableFilter<"Biometria"> | number | null
    desvio_padrao_peso?: FloatNullableFilter<"Biometria"> | number | null
    desvio_padrao_comprimento?: FloatNullableFilter<"Biometria"> | number | null
    observacoes?: StringNullableFilter<"Biometria"> | string | null
    recomendacoes?: StringNullableFilter<"Biometria"> | string | null
    responsavel_id?: StringNullableFilter<"Biometria"> | string | null
  }

  export type QualidadeAguaUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: QualidadeAguaWhereUniqueInput
    update: XOR<QualidadeAguaUpdateWithoutResponsavelInput, QualidadeAguaUncheckedUpdateWithoutResponsavelInput>
    create: XOR<QualidadeAguaCreateWithoutResponsavelInput, QualidadeAguaUncheckedCreateWithoutResponsavelInput>
  }

  export type QualidadeAguaUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: QualidadeAguaWhereUniqueInput
    data: XOR<QualidadeAguaUpdateWithoutResponsavelInput, QualidadeAguaUncheckedUpdateWithoutResponsavelInput>
  }

  export type QualidadeAguaUpdateManyWithWhereWithoutResponsavelInput = {
    where: QualidadeAguaScalarWhereInput
    data: XOR<QualidadeAguaUpdateManyMutationInput, QualidadeAguaUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type QualidadeAguaScalarWhereInput = {
    AND?: QualidadeAguaScalarWhereInput | QualidadeAguaScalarWhereInput[]
    OR?: QualidadeAguaScalarWhereInput[]
    NOT?: QualidadeAguaScalarWhereInput | QualidadeAguaScalarWhereInput[]
    id?: StringFilter<"QualidadeAgua"> | string
    tanque_id?: StringFilter<"QualidadeAgua"> | string
    data_analise?: DateTimeFilter<"QualidadeAgua"> | Date | string
    hora_coleta?: StringNullableFilter<"QualidadeAgua"> | string | null
    fonte_agua?: StringNullableFilter<"QualidadeAgua"> | string | null
    metodo_coleta?: StringNullableFilter<"QualidadeAgua"> | string | null
    oxigenio_dissolvido?: FloatFilter<"QualidadeAgua"> | number
    ph?: FloatFilter<"QualidadeAgua"> | number
    amonia?: FloatFilter<"QualidadeAgua"> | number
    nitrito?: FloatFilter<"QualidadeAgua"> | number
    nitrato?: FloatNullableFilter<"QualidadeAgua"> | number | null
    tds?: FloatNullableFilter<"QualidadeAgua"> | number | null
    orp?: FloatNullableFilter<"QualidadeAgua"> | number | null
    ec?: FloatNullableFilter<"QualidadeAgua"> | number | null
    salppm?: FloatNullableFilter<"QualidadeAgua"> | number | null
    sal?: FloatNullableFilter<"QualidadeAgua"> | number | null
    sg?: FloatNullableFilter<"QualidadeAgua"> | number | null
    temperatura?: FloatFilter<"QualidadeAgua"> | number
    transparencia_cm?: IntFilter<"QualidadeAgua"> | number
    notas?: StringNullableFilter<"QualidadeAgua"> | string | null
    responsavel_id?: StringNullableFilter<"QualidadeAgua"> | string | null
  }

  export type RegistroDiarioUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: RegistroDiarioWhereUniqueInput
    update: XOR<RegistroDiarioUpdateWithoutResponsavelInput, RegistroDiarioUncheckedUpdateWithoutResponsavelInput>
    create: XOR<RegistroDiarioCreateWithoutResponsavelInput, RegistroDiarioUncheckedCreateWithoutResponsavelInput>
  }

  export type RegistroDiarioUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: RegistroDiarioWhereUniqueInput
    data: XOR<RegistroDiarioUpdateWithoutResponsavelInput, RegistroDiarioUncheckedUpdateWithoutResponsavelInput>
  }

  export type RegistroDiarioUpdateManyWithWhereWithoutResponsavelInput = {
    where: RegistroDiarioScalarWhereInput
    data: XOR<RegistroDiarioUpdateManyMutationInput, RegistroDiarioUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type RegistroDiarioScalarWhereInput = {
    AND?: RegistroDiarioScalarWhereInput | RegistroDiarioScalarWhereInput[]
    OR?: RegistroDiarioScalarWhereInput[]
    NOT?: RegistroDiarioScalarWhereInput | RegistroDiarioScalarWhereInput[]
    id?: StringFilter<"RegistroDiario"> | string
    tanque_id?: StringFilter<"RegistroDiario"> | string
    data?: DateTimeFilter<"RegistroDiario"> | Date | string
    turno?: EnumTurnoNullableFilter<"RegistroDiario"> | $Enums.Turno | null
    temperatura_agua?: FloatFilter<"RegistroDiario"> | number
    quantidade_kg?: FloatNullableFilter<"RegistroDiario"> | number | null
    fracionamento?: IntNullableFilter<"RegistroDiario"> | number | null
    tipo_racao?: StringNullableFilter<"RegistroDiario"> | string | null
    racao_marca?: StringNullableFilter<"RegistroDiario"> | string | null
    racao_codigo?: StringNullableFilter<"RegistroDiario"> | string | null
    sobras?: BoolNullableFilter<"RegistroDiario"> | boolean | null
    mortalidade?: IntNullableFilter<"RegistroDiario"> | number | null
    causa_morte?: StringNullableFilter<"RegistroDiario"> | string | null
    horas_aeracao?: FloatNullableFilter<"RegistroDiario"> | number | null
    observacoes?: StringNullableFilter<"RegistroDiario"> | string | null
    eventos_adversos?: StringNullableFilter<"RegistroDiario"> | string | null
    responsavel_id?: StringNullableFilter<"RegistroDiario"> | string | null
    isAutomatic?: BoolFilter<"RegistroDiario"> | boolean
  }

  export type MovimentacaoTanqueUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: MovimentacaoTanqueWhereUniqueInput
    update: XOR<MovimentacaoTanqueUpdateWithoutResponsavelInput, MovimentacaoTanqueUncheckedUpdateWithoutResponsavelInput>
    create: XOR<MovimentacaoTanqueCreateWithoutResponsavelInput, MovimentacaoTanqueUncheckedCreateWithoutResponsavelInput>
  }

  export type MovimentacaoTanqueUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: MovimentacaoTanqueWhereUniqueInput
    data: XOR<MovimentacaoTanqueUpdateWithoutResponsavelInput, MovimentacaoTanqueUncheckedUpdateWithoutResponsavelInput>
  }

  export type MovimentacaoTanqueUpdateManyWithWhereWithoutResponsavelInput = {
    where: MovimentacaoTanqueScalarWhereInput
    data: XOR<MovimentacaoTanqueUpdateManyMutationInput, MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type MovimentacaoTanqueScalarWhereInput = {
    AND?: MovimentacaoTanqueScalarWhereInput | MovimentacaoTanqueScalarWhereInput[]
    OR?: MovimentacaoTanqueScalarWhereInput[]
    NOT?: MovimentacaoTanqueScalarWhereInput | MovimentacaoTanqueScalarWhereInput[]
    id?: StringFilter<"MovimentacaoTanque"> | string
    tanque_id?: StringFilter<"MovimentacaoTanque"> | string
    tipo_movimentacao?: EnumMovTanqueTipoFilter<"MovimentacaoTanque"> | $Enums.MovTanqueTipo
    motivo?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    data?: DateTimeFilter<"MovimentacaoTanque"> | Date | string
    quantidade?: IntFilter<"MovimentacaoTanque"> | number
    peso_medio_g?: FloatFilter<"MovimentacaoTanque"> | number
    notas?: StringNullableFilter<"MovimentacaoTanque"> | string | null
    usuario_id?: StringNullableFilter<"MovimentacaoTanque"> | string | null
  }

  export type MovimentacaoRacaoUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: MovimentacaoRacaoWhereUniqueInput
    update: XOR<MovimentacaoRacaoUpdateWithoutResponsavelInput, MovimentacaoRacaoUncheckedUpdateWithoutResponsavelInput>
    create: XOR<MovimentacaoRacaoCreateWithoutResponsavelInput, MovimentacaoRacaoUncheckedCreateWithoutResponsavelInput>
  }

  export type MovimentacaoRacaoUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: MovimentacaoRacaoWhereUniqueInput
    data: XOR<MovimentacaoRacaoUpdateWithoutResponsavelInput, MovimentacaoRacaoUncheckedUpdateWithoutResponsavelInput>
  }

  export type MovimentacaoRacaoUpdateManyWithWhereWithoutResponsavelInput = {
    where: MovimentacaoRacaoScalarWhereInput
    data: XOR<MovimentacaoRacaoUpdateManyMutationInput, MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type MovimentacaoRacaoScalarWhereInput = {
    AND?: MovimentacaoRacaoScalarWhereInput | MovimentacaoRacaoScalarWhereInput[]
    OR?: MovimentacaoRacaoScalarWhereInput[]
    NOT?: MovimentacaoRacaoScalarWhereInput | MovimentacaoRacaoScalarWhereInput[]
    id?: StringFilter<"MovimentacaoRacao"> | string
    produto_id?: StringFilter<"MovimentacaoRacao"> | string
    tipo_movimento?: StringFilter<"MovimentacaoRacao"> | string
    data?: DateTimeFilter<"MovimentacaoRacao"> | Date | string
    quantidade_kg?: FloatFilter<"MovimentacaoRacao"> | number
    lote_id?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    observacoes?: StringNullableFilter<"MovimentacaoRacao"> | string | null
    responsavel_id?: StringNullableFilter<"MovimentacaoRacao"> | string | null
  }

  export type RegistroSaudeUpsertWithWhereUniqueWithoutResponsavelInput = {
    where: RegistroSaudeWhereUniqueInput
    update: XOR<RegistroSaudeUpdateWithoutResponsavelInput, RegistroSaudeUncheckedUpdateWithoutResponsavelInput>
    create: XOR<RegistroSaudeCreateWithoutResponsavelInput, RegistroSaudeUncheckedCreateWithoutResponsavelInput>
  }

  export type RegistroSaudeUpdateWithWhereUniqueWithoutResponsavelInput = {
    where: RegistroSaudeWhereUniqueInput
    data: XOR<RegistroSaudeUpdateWithoutResponsavelInput, RegistroSaudeUncheckedUpdateWithoutResponsavelInput>
  }

  export type RegistroSaudeUpdateManyWithWhereWithoutResponsavelInput = {
    where: RegistroSaudeScalarWhereInput
    data: XOR<RegistroSaudeUpdateManyMutationInput, RegistroSaudeUncheckedUpdateManyWithoutResponsavelInput>
  }

  export type RegistroSaudeScalarWhereInput = {
    AND?: RegistroSaudeScalarWhereInput | RegistroSaudeScalarWhereInput[]
    OR?: RegistroSaudeScalarWhereInput[]
    NOT?: RegistroSaudeScalarWhereInput | RegistroSaudeScalarWhereInput[]
    id?: StringFilter<"RegistroSaude"> | string
    tanque_id?: StringFilter<"RegistroSaude"> | string
    data_registro?: DateTimeFilter<"RegistroSaude"> | Date | string
    sintomas?: StringNullableFilter<"RegistroSaude"> | string | null
    percentual_afetado?: FloatNullableFilter<"RegistroSaude"> | number | null
    diagnostico?: StringNullableFilter<"RegistroSaude"> | string | null
    patologia_codigo?: StringNullableFilter<"RegistroSaude"> | string | null
    produto?: StringNullableFilter<"RegistroSaude"> | string | null
    dosagem?: StringNullableFilter<"RegistroSaude"> | string | null
    dias_tratamento?: IntNullableFilter<"RegistroSaude"> | number | null
    dias_carencia?: IntNullableFilter<"RegistroSaude"> | number | null
    resultado?: StringNullableFilter<"RegistroSaude"> | string | null
    data_diagnostico?: DateTimeNullableFilter<"RegistroSaude"> | Date | string | null
    usuario_id?: StringNullableFilter<"RegistroSaude"> | string | null
  }

  export type CicloProducaoCreateWithoutTanque_ciclo_ativoInput = {
    id?: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
    tanque: TanqueCreateNestedOneWithoutCiclosInput
  }

  export type CicloProducaoUncheckedCreateWithoutTanque_ciclo_ativoInput = {
    id?: string
    tanque_id: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
  }

  export type CicloProducaoCreateOrConnectWithoutTanque_ciclo_ativoInput = {
    where: CicloProducaoWhereUniqueInput
    create: XOR<CicloProducaoCreateWithoutTanque_ciclo_ativoInput, CicloProducaoUncheckedCreateWithoutTanque_ciclo_ativoInput>
  }

  export type CicloProducaoCreateWithoutTanqueInput = {
    id?: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
    tanque_ciclo_ativo?: TanqueCreateNestedOneWithoutCiclo_atualInput
  }

  export type CicloProducaoUncheckedCreateWithoutTanqueInput = {
    id?: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
    tanque_ciclo_ativo?: TanqueUncheckedCreateNestedOneWithoutCiclo_atualInput
  }

  export type CicloProducaoCreateOrConnectWithoutTanqueInput = {
    where: CicloProducaoWhereUniqueInput
    create: XOR<CicloProducaoCreateWithoutTanqueInput, CicloProducaoUncheckedCreateWithoutTanqueInput>
  }

  export type CicloProducaoCreateManyTanqueInputEnvelope = {
    data: CicloProducaoCreateManyTanqueInput | CicloProducaoCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type RegistroDiarioCreateWithoutTanqueInput = {
    id?: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    isAutomatic?: boolean
    responsavel?: UserCreateNestedOneWithoutResponsavel_registrodiarioInput
  }

  export type RegistroDiarioUncheckedCreateWithoutTanqueInput = {
    id?: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    responsavel_id?: string | null
    isAutomatic?: boolean
  }

  export type RegistroDiarioCreateOrConnectWithoutTanqueInput = {
    where: RegistroDiarioWhereUniqueInput
    create: XOR<RegistroDiarioCreateWithoutTanqueInput, RegistroDiarioUncheckedCreateWithoutTanqueInput>
  }

  export type RegistroDiarioCreateManyTanqueInputEnvelope = {
    data: RegistroDiarioCreateManyTanqueInput | RegistroDiarioCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type BiometriaCreateWithoutTanqueInput = {
    id?: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    responsavel?: UserCreateNestedOneWithoutResponsavel_biometriasInput
  }

  export type BiometriaUncheckedCreateWithoutTanqueInput = {
    id?: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    responsavel_id?: string | null
  }

  export type BiometriaCreateOrConnectWithoutTanqueInput = {
    where: BiometriaWhereUniqueInput
    create: XOR<BiometriaCreateWithoutTanqueInput, BiometriaUncheckedCreateWithoutTanqueInput>
  }

  export type BiometriaCreateManyTanqueInputEnvelope = {
    data: BiometriaCreateManyTanqueInput | BiometriaCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type QualidadeAguaCreateWithoutTanqueInput = {
    id?: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    responsavel?: UserCreateNestedOneWithoutResponsavel_qualidadeaguaInput
  }

  export type QualidadeAguaUncheckedCreateWithoutTanqueInput = {
    id?: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    responsavel_id?: string | null
  }

  export type QualidadeAguaCreateOrConnectWithoutTanqueInput = {
    where: QualidadeAguaWhereUniqueInput
    create: XOR<QualidadeAguaCreateWithoutTanqueInput, QualidadeAguaUncheckedCreateWithoutTanqueInput>
  }

  export type QualidadeAguaCreateManyTanqueInputEnvelope = {
    data: QualidadeAguaCreateManyTanqueInput | QualidadeAguaCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type RegistroSaudeCreateWithoutTanqueInput = {
    id?: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    responsavel?: UserCreateNestedOneWithoutResponsavel_regsaudeInput
  }

  export type RegistroSaudeUncheckedCreateWithoutTanqueInput = {
    id?: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    usuario_id?: string | null
  }

  export type RegistroSaudeCreateOrConnectWithoutTanqueInput = {
    where: RegistroSaudeWhereUniqueInput
    create: XOR<RegistroSaudeCreateWithoutTanqueInput, RegistroSaudeUncheckedCreateWithoutTanqueInput>
  }

  export type RegistroSaudeCreateManyTanqueInputEnvelope = {
    data: RegistroSaudeCreateManyTanqueInput | RegistroSaudeCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoTanqueCreateWithoutTanqueInput = {
    id?: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    responsavel?: UserCreateNestedOneWithoutResponsavel_movtanqueInput
  }

  export type MovimentacaoTanqueUncheckedCreateWithoutTanqueInput = {
    id?: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    usuario_id?: string | null
  }

  export type MovimentacaoTanqueCreateOrConnectWithoutTanqueInput = {
    where: MovimentacaoTanqueWhereUniqueInput
    create: XOR<MovimentacaoTanqueCreateWithoutTanqueInput, MovimentacaoTanqueUncheckedCreateWithoutTanqueInput>
  }

  export type MovimentacaoTanqueCreateManyTanqueInputEnvelope = {
    data: MovimentacaoTanqueCreateManyTanqueInput | MovimentacaoTanqueCreateManyTanqueInput[]
    skipDuplicates?: boolean
  }

  export type CicloProducaoUpsertWithoutTanque_ciclo_ativoInput = {
    update: XOR<CicloProducaoUpdateWithoutTanque_ciclo_ativoInput, CicloProducaoUncheckedUpdateWithoutTanque_ciclo_ativoInput>
    create: XOR<CicloProducaoCreateWithoutTanque_ciclo_ativoInput, CicloProducaoUncheckedCreateWithoutTanque_ciclo_ativoInput>
    where?: CicloProducaoWhereInput
  }

  export type CicloProducaoUpdateToOneWithWhereWithoutTanque_ciclo_ativoInput = {
    where?: CicloProducaoWhereInput
    data: XOR<CicloProducaoUpdateWithoutTanque_ciclo_ativoInput, CicloProducaoUncheckedUpdateWithoutTanque_ciclo_ativoInput>
  }

  export type CicloProducaoUpdateWithoutTanque_ciclo_ativoInput = {
    id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    tanque?: TanqueUpdateOneRequiredWithoutCiclosNestedInput
  }

  export type CicloProducaoUncheckedUpdateWithoutTanque_ciclo_ativoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type CicloProducaoUpsertWithWhereUniqueWithoutTanqueInput = {
    where: CicloProducaoWhereUniqueInput
    update: XOR<CicloProducaoUpdateWithoutTanqueInput, CicloProducaoUncheckedUpdateWithoutTanqueInput>
    create: XOR<CicloProducaoCreateWithoutTanqueInput, CicloProducaoUncheckedCreateWithoutTanqueInput>
  }

  export type CicloProducaoUpdateWithWhereUniqueWithoutTanqueInput = {
    where: CicloProducaoWhereUniqueInput
    data: XOR<CicloProducaoUpdateWithoutTanqueInput, CicloProducaoUncheckedUpdateWithoutTanqueInput>
  }

  export type CicloProducaoUpdateManyWithWhereWithoutTanqueInput = {
    where: CicloProducaoScalarWhereInput
    data: XOR<CicloProducaoUpdateManyMutationInput, CicloProducaoUncheckedUpdateManyWithoutTanqueInput>
  }

  export type CicloProducaoScalarWhereInput = {
    AND?: CicloProducaoScalarWhereInput | CicloProducaoScalarWhereInput[]
    OR?: CicloProducaoScalarWhereInput[]
    NOT?: CicloProducaoScalarWhereInput | CicloProducaoScalarWhereInput[]
    id?: StringFilter<"CicloProducao"> | string
    tanque_id?: StringFilter<"CicloProducao"> | string
    especie?: StringNullableFilter<"CicloProducao"> | string | null
    origem_lote?: StringNullableFilter<"CicloProducao"> | string | null
    data_inicio?: DateTimeFilter<"CicloProducao"> | Date | string
    data_fim?: DateTimeNullableFilter<"CicloProducao"> | Date | string | null
    quantidade_inicial?: IntFilter<"CicloProducao"> | number
    quantidade_atual?: IntNullableFilter<"CicloProducao"> | number | null
    peso_inicial_g?: FloatFilter<"CicloProducao"> | number
    peso_atual?: FloatNullableFilter<"CicloProducao"> | number | null
    mortes?: IntNullableFilter<"CicloProducao"> | number | null
    alimentacao_total_kg?: FloatNullableFilter<"CicloProducao"> | number | null
    custo_total?: FloatNullableFilter<"CicloProducao"> | number | null
    data_prevista_saida?: DateTimeNullableFilter<"CicloProducao"> | Date | string | null
    status?: StringFilter<"CicloProducao"> | string
  }

  export type RegistroDiarioUpsertWithWhereUniqueWithoutTanqueInput = {
    where: RegistroDiarioWhereUniqueInput
    update: XOR<RegistroDiarioUpdateWithoutTanqueInput, RegistroDiarioUncheckedUpdateWithoutTanqueInput>
    create: XOR<RegistroDiarioCreateWithoutTanqueInput, RegistroDiarioUncheckedCreateWithoutTanqueInput>
  }

  export type RegistroDiarioUpdateWithWhereUniqueWithoutTanqueInput = {
    where: RegistroDiarioWhereUniqueInput
    data: XOR<RegistroDiarioUpdateWithoutTanqueInput, RegistroDiarioUncheckedUpdateWithoutTanqueInput>
  }

  export type RegistroDiarioUpdateManyWithWhereWithoutTanqueInput = {
    where: RegistroDiarioScalarWhereInput
    data: XOR<RegistroDiarioUpdateManyMutationInput, RegistroDiarioUncheckedUpdateManyWithoutTanqueInput>
  }

  export type BiometriaUpsertWithWhereUniqueWithoutTanqueInput = {
    where: BiometriaWhereUniqueInput
    update: XOR<BiometriaUpdateWithoutTanqueInput, BiometriaUncheckedUpdateWithoutTanqueInput>
    create: XOR<BiometriaCreateWithoutTanqueInput, BiometriaUncheckedCreateWithoutTanqueInput>
  }

  export type BiometriaUpdateWithWhereUniqueWithoutTanqueInput = {
    where: BiometriaWhereUniqueInput
    data: XOR<BiometriaUpdateWithoutTanqueInput, BiometriaUncheckedUpdateWithoutTanqueInput>
  }

  export type BiometriaUpdateManyWithWhereWithoutTanqueInput = {
    where: BiometriaScalarWhereInput
    data: XOR<BiometriaUpdateManyMutationInput, BiometriaUncheckedUpdateManyWithoutTanqueInput>
  }

  export type QualidadeAguaUpsertWithWhereUniqueWithoutTanqueInput = {
    where: QualidadeAguaWhereUniqueInput
    update: XOR<QualidadeAguaUpdateWithoutTanqueInput, QualidadeAguaUncheckedUpdateWithoutTanqueInput>
    create: XOR<QualidadeAguaCreateWithoutTanqueInput, QualidadeAguaUncheckedCreateWithoutTanqueInput>
  }

  export type QualidadeAguaUpdateWithWhereUniqueWithoutTanqueInput = {
    where: QualidadeAguaWhereUniqueInput
    data: XOR<QualidadeAguaUpdateWithoutTanqueInput, QualidadeAguaUncheckedUpdateWithoutTanqueInput>
  }

  export type QualidadeAguaUpdateManyWithWhereWithoutTanqueInput = {
    where: QualidadeAguaScalarWhereInput
    data: XOR<QualidadeAguaUpdateManyMutationInput, QualidadeAguaUncheckedUpdateManyWithoutTanqueInput>
  }

  export type RegistroSaudeUpsertWithWhereUniqueWithoutTanqueInput = {
    where: RegistroSaudeWhereUniqueInput
    update: XOR<RegistroSaudeUpdateWithoutTanqueInput, RegistroSaudeUncheckedUpdateWithoutTanqueInput>
    create: XOR<RegistroSaudeCreateWithoutTanqueInput, RegistroSaudeUncheckedCreateWithoutTanqueInput>
  }

  export type RegistroSaudeUpdateWithWhereUniqueWithoutTanqueInput = {
    where: RegistroSaudeWhereUniqueInput
    data: XOR<RegistroSaudeUpdateWithoutTanqueInput, RegistroSaudeUncheckedUpdateWithoutTanqueInput>
  }

  export type RegistroSaudeUpdateManyWithWhereWithoutTanqueInput = {
    where: RegistroSaudeScalarWhereInput
    data: XOR<RegistroSaudeUpdateManyMutationInput, RegistroSaudeUncheckedUpdateManyWithoutTanqueInput>
  }

  export type MovimentacaoTanqueUpsertWithWhereUniqueWithoutTanqueInput = {
    where: MovimentacaoTanqueWhereUniqueInput
    update: XOR<MovimentacaoTanqueUpdateWithoutTanqueInput, MovimentacaoTanqueUncheckedUpdateWithoutTanqueInput>
    create: XOR<MovimentacaoTanqueCreateWithoutTanqueInput, MovimentacaoTanqueUncheckedCreateWithoutTanqueInput>
  }

  export type MovimentacaoTanqueUpdateWithWhereUniqueWithoutTanqueInput = {
    where: MovimentacaoTanqueWhereUniqueInput
    data: XOR<MovimentacaoTanqueUpdateWithoutTanqueInput, MovimentacaoTanqueUncheckedUpdateWithoutTanqueInput>
  }

  export type MovimentacaoTanqueUpdateManyWithWhereWithoutTanqueInput = {
    where: MovimentacaoTanqueScalarWhereInput
    data: XOR<MovimentacaoTanqueUpdateManyMutationInput, MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueInput>
  }

  export type TanqueCreateWithoutCiclo_atualInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutCiclo_atualInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutCiclo_atualInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutCiclo_atualInput, TanqueUncheckedCreateWithoutCiclo_atualInput>
  }

  export type TanqueCreateWithoutCiclosInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutCiclosInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutCiclosInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutCiclosInput, TanqueUncheckedCreateWithoutCiclosInput>
  }

  export type TanqueUpsertWithoutCiclo_atualInput = {
    update: XOR<TanqueUpdateWithoutCiclo_atualInput, TanqueUncheckedUpdateWithoutCiclo_atualInput>
    create: XOR<TanqueCreateWithoutCiclo_atualInput, TanqueUncheckedCreateWithoutCiclo_atualInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutCiclo_atualInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutCiclo_atualInput, TanqueUncheckedUpdateWithoutCiclo_atualInput>
  }

  export type TanqueUpdateWithoutCiclo_atualInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutCiclo_atualInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUpsertWithoutCiclosInput = {
    update: XOR<TanqueUpdateWithoutCiclosInput, TanqueUncheckedUpdateWithoutCiclosInput>
    create: XOR<TanqueCreateWithoutCiclosInput, TanqueUncheckedCreateWithoutCiclosInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutCiclosInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutCiclosInput, TanqueUncheckedUpdateWithoutCiclosInput>
  }

  export type TanqueUpdateWithoutCiclosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutCiclosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueCreateWithoutRegistros_diariosInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutRegistros_diariosInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutRegistros_diariosInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutRegistros_diariosInput, TanqueUncheckedCreateWithoutRegistros_diariosInput>
  }

  export type UserCreateWithoutResponsavel_registrodiarioInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutResponsavel_registrodiarioInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutResponsavel_registrodiarioInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsavel_registrodiarioInput, UserUncheckedCreateWithoutResponsavel_registrodiarioInput>
  }

  export type TanqueUpsertWithoutRegistros_diariosInput = {
    update: XOR<TanqueUpdateWithoutRegistros_diariosInput, TanqueUncheckedUpdateWithoutRegistros_diariosInput>
    create: XOR<TanqueCreateWithoutRegistros_diariosInput, TanqueUncheckedCreateWithoutRegistros_diariosInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutRegistros_diariosInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutRegistros_diariosInput, TanqueUncheckedUpdateWithoutRegistros_diariosInput>
  }

  export type TanqueUpdateWithoutRegistros_diariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutRegistros_diariosInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type UserUpsertWithoutResponsavel_registrodiarioInput = {
    update: XOR<UserUpdateWithoutResponsavel_registrodiarioInput, UserUncheckedUpdateWithoutResponsavel_registrodiarioInput>
    create: XOR<UserCreateWithoutResponsavel_registrodiarioInput, UserUncheckedCreateWithoutResponsavel_registrodiarioInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsavel_registrodiarioInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsavel_registrodiarioInput, UserUncheckedUpdateWithoutResponsavel_registrodiarioInput>
  }

  export type UserUpdateWithoutResponsavel_registrodiarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsavel_registrodiarioInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type TanqueCreateWithoutBiometriasInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutBiometriasInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutBiometriasInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutBiometriasInput, TanqueUncheckedCreateWithoutBiometriasInput>
  }

  export type UserCreateWithoutResponsavel_biometriasInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_qualidadeagua?: QualidadeAguaCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutResponsavel_biometriasInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_qualidadeagua?: QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutResponsavel_biometriasInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsavel_biometriasInput, UserUncheckedCreateWithoutResponsavel_biometriasInput>
  }

  export type TanqueUpsertWithoutBiometriasInput = {
    update: XOR<TanqueUpdateWithoutBiometriasInput, TanqueUncheckedUpdateWithoutBiometriasInput>
    create: XOR<TanqueCreateWithoutBiometriasInput, TanqueUncheckedCreateWithoutBiometriasInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutBiometriasInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutBiometriasInput, TanqueUncheckedUpdateWithoutBiometriasInput>
  }

  export type TanqueUpdateWithoutBiometriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutBiometriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type UserUpsertWithoutResponsavel_biometriasInput = {
    update: XOR<UserUpdateWithoutResponsavel_biometriasInput, UserUncheckedUpdateWithoutResponsavel_biometriasInput>
    create: XOR<UserCreateWithoutResponsavel_biometriasInput, UserUncheckedCreateWithoutResponsavel_biometriasInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsavel_biometriasInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsavel_biometriasInput, UserUncheckedUpdateWithoutResponsavel_biometriasInput>
  }

  export type UserUpdateWithoutResponsavel_biometriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_qualidadeagua?: QualidadeAguaUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsavel_biometriasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_qualidadeagua?: QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type TanqueCreateWithoutQualidade_aguaInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutQualidade_aguaInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutQualidade_aguaInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutQualidade_aguaInput, TanqueUncheckedCreateWithoutQualidade_aguaInput>
  }

  export type UserCreateWithoutResponsavel_qualidadeaguaInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutResponsavel_qualidadeaguaInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutResponsavel_qualidadeaguaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsavel_qualidadeaguaInput, UserUncheckedCreateWithoutResponsavel_qualidadeaguaInput>
  }

  export type TanqueUpsertWithoutQualidade_aguaInput = {
    update: XOR<TanqueUpdateWithoutQualidade_aguaInput, TanqueUncheckedUpdateWithoutQualidade_aguaInput>
    create: XOR<TanqueCreateWithoutQualidade_aguaInput, TanqueUncheckedCreateWithoutQualidade_aguaInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutQualidade_aguaInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutQualidade_aguaInput, TanqueUncheckedUpdateWithoutQualidade_aguaInput>
  }

  export type TanqueUpdateWithoutQualidade_aguaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutQualidade_aguaInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type UserUpsertWithoutResponsavel_qualidadeaguaInput = {
    update: XOR<UserUpdateWithoutResponsavel_qualidadeaguaInput, UserUncheckedUpdateWithoutResponsavel_qualidadeaguaInput>
    create: XOR<UserCreateWithoutResponsavel_qualidadeaguaInput, UserUncheckedCreateWithoutResponsavel_qualidadeaguaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsavel_qualidadeaguaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsavel_qualidadeaguaInput, UserUncheckedUpdateWithoutResponsavel_qualidadeaguaInput>
  }

  export type UserUpdateWithoutResponsavel_qualidadeaguaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsavel_qualidadeaguaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type TanqueCreateWithoutRegistros_saudeInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutRegistros_saudeInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    movimentacoes?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutRegistros_saudeInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutRegistros_saudeInput, TanqueUncheckedCreateWithoutRegistros_saudeInput>
  }

  export type UserCreateWithoutResponsavel_regsaudeInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutResponsavel_regsaudeInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutResponsavel_regsaudeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsavel_regsaudeInput, UserUncheckedCreateWithoutResponsavel_regsaudeInput>
  }

  export type TanqueUpsertWithoutRegistros_saudeInput = {
    update: XOR<TanqueUpdateWithoutRegistros_saudeInput, TanqueUncheckedUpdateWithoutRegistros_saudeInput>
    create: XOR<TanqueCreateWithoutRegistros_saudeInput, TanqueUncheckedCreateWithoutRegistros_saudeInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutRegistros_saudeInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutRegistros_saudeInput, TanqueUncheckedUpdateWithoutRegistros_saudeInput>
  }

  export type TanqueUpdateWithoutRegistros_saudeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutRegistros_saudeInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    movimentacoes?: MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type UserUpsertWithoutResponsavel_regsaudeInput = {
    update: XOR<UserUpdateWithoutResponsavel_regsaudeInput, UserUncheckedUpdateWithoutResponsavel_regsaudeInput>
    create: XOR<UserCreateWithoutResponsavel_regsaudeInput, UserUncheckedCreateWithoutResponsavel_regsaudeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsavel_regsaudeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsavel_regsaudeInput, UserUncheckedUpdateWithoutResponsavel_regsaudeInput>
  }

  export type UserUpdateWithoutResponsavel_regsaudeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsavel_regsaudeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type MovimentacaoRacaoCreateWithoutProdutoInput = {
    id?: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    responsavel?: UserCreateNestedOneWithoutResponsavel_movracaoInput
  }

  export type MovimentacaoRacaoUncheckedCreateWithoutProdutoInput = {
    id?: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    responsavel_id?: string | null
  }

  export type MovimentacaoRacaoCreateOrConnectWithoutProdutoInput = {
    where: MovimentacaoRacaoWhereUniqueInput
    create: XOR<MovimentacaoRacaoCreateWithoutProdutoInput, MovimentacaoRacaoUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentacaoRacaoCreateManyProdutoInputEnvelope = {
    data: MovimentacaoRacaoCreateManyProdutoInput | MovimentacaoRacaoCreateManyProdutoInput[]
    skipDuplicates?: boolean
  }

  export type MovimentacaoRacaoUpsertWithWhereUniqueWithoutProdutoInput = {
    where: MovimentacaoRacaoWhereUniqueInput
    update: XOR<MovimentacaoRacaoUpdateWithoutProdutoInput, MovimentacaoRacaoUncheckedUpdateWithoutProdutoInput>
    create: XOR<MovimentacaoRacaoCreateWithoutProdutoInput, MovimentacaoRacaoUncheckedCreateWithoutProdutoInput>
  }

  export type MovimentacaoRacaoUpdateWithWhereUniqueWithoutProdutoInput = {
    where: MovimentacaoRacaoWhereUniqueInput
    data: XOR<MovimentacaoRacaoUpdateWithoutProdutoInput, MovimentacaoRacaoUncheckedUpdateWithoutProdutoInput>
  }

  export type MovimentacaoRacaoUpdateManyWithWhereWithoutProdutoInput = {
    where: MovimentacaoRacaoScalarWhereInput
    data: XOR<MovimentacaoRacaoUpdateManyMutationInput, MovimentacaoRacaoUncheckedUpdateManyWithoutProdutoInput>
  }

  export type TanqueCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual?: CicloProducaoCreateNestedOneWithoutTanque_ciclo_ativoInput
    ciclos?: CicloProducaoCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeCreateNestedManyWithoutTanqueInput
  }

  export type TanqueUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    codigo_interno?: string | null
    volume_m3: number
    area_m2?: number | null
    tipo: $Enums.TipoTanque
    tipo_material?: string | null
    status?: $Enums.StatusTanque
    localizacao?: string | null
    data_instalacao?: Date | string | null
    nivel_agua_cm?: number | null
    isActive?: boolean
    ciclo_atual_id?: string | null
    ciclos?: CicloProducaoUncheckedCreateNestedManyWithoutTanqueInput
    registros_diarios?: RegistroDiarioUncheckedCreateNestedManyWithoutTanqueInput
    biometrias?: BiometriaUncheckedCreateNestedManyWithoutTanqueInput
    qualidade_agua?: QualidadeAguaUncheckedCreateNestedManyWithoutTanqueInput
    registros_saude?: RegistroSaudeUncheckedCreateNestedManyWithoutTanqueInput
  }

  export type TanqueCreateOrConnectWithoutMovimentacoesInput = {
    where: TanqueWhereUniqueInput
    create: XOR<TanqueCreateWithoutMovimentacoesInput, TanqueUncheckedCreateWithoutMovimentacoesInput>
  }

  export type UserCreateWithoutResponsavel_movtanqueInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutResponsavel_movtanqueInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutResponsavel_movtanqueInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsavel_movtanqueInput, UserUncheckedCreateWithoutResponsavel_movtanqueInput>
  }

  export type TanqueUpsertWithoutMovimentacoesInput = {
    update: XOR<TanqueUpdateWithoutMovimentacoesInput, TanqueUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<TanqueCreateWithoutMovimentacoesInput, TanqueUncheckedCreateWithoutMovimentacoesInput>
    where?: TanqueWhereInput
  }

  export type TanqueUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: TanqueWhereInput
    data: XOR<TanqueUpdateWithoutMovimentacoesInput, TanqueUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type TanqueUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual?: CicloProducaoUpdateOneWithoutTanque_ciclo_ativoNestedInput
    ciclos?: CicloProducaoUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUpdateManyWithoutTanqueNestedInput
  }

  export type TanqueUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    codigo_interno?: NullableStringFieldUpdateOperationsInput | string | null
    volume_m3?: FloatFieldUpdateOperationsInput | number
    area_m2?: NullableFloatFieldUpdateOperationsInput | number | null
    tipo?: EnumTipoTanqueFieldUpdateOperationsInput | $Enums.TipoTanque
    tipo_material?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTanqueFieldUpdateOperationsInput | $Enums.StatusTanque
    localizacao?: NullableStringFieldUpdateOperationsInput | string | null
    data_instalacao?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nivel_agua_cm?: NullableFloatFieldUpdateOperationsInput | number | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ciclo_atual_id?: NullableStringFieldUpdateOperationsInput | string | null
    ciclos?: CicloProducaoUncheckedUpdateManyWithoutTanqueNestedInput
    registros_diarios?: RegistroDiarioUncheckedUpdateManyWithoutTanqueNestedInput
    biometrias?: BiometriaUncheckedUpdateManyWithoutTanqueNestedInput
    qualidade_agua?: QualidadeAguaUncheckedUpdateManyWithoutTanqueNestedInput
    registros_saude?: RegistroSaudeUncheckedUpdateManyWithoutTanqueNestedInput
  }

  export type UserUpsertWithoutResponsavel_movtanqueInput = {
    update: XOR<UserUpdateWithoutResponsavel_movtanqueInput, UserUncheckedUpdateWithoutResponsavel_movtanqueInput>
    create: XOR<UserCreateWithoutResponsavel_movtanqueInput, UserUncheckedCreateWithoutResponsavel_movtanqueInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsavel_movtanqueInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsavel_movtanqueInput, UserUncheckedUpdateWithoutResponsavel_movtanqueInput>
  }

  export type UserUpdateWithoutResponsavel_movtanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsavel_movtanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movracao?: MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type ProdutoEstoqueCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    categoria?: string | null
    tipo: string
    unidade_medida: string
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg?: number
    lote_numero?: string | null
    validade?: Date | string | null
    fornecedor?: string | null
    custo_unitario?: number | null
    data_ultima_entrada?: Date | string | null
    data_ultima_saida?: Date | string | null
  }

  export type ProdutoEstoqueUncheckedCreateWithoutMovimentacoesInput = {
    id?: string
    nome: string
    categoria?: string | null
    tipo: string
    unidade_medida: string
    peso_por_unidade: number
    quantidade_unidades: number
    estoque_atual_kg?: number
    lote_numero?: string | null
    validade?: Date | string | null
    fornecedor?: string | null
    custo_unitario?: number | null
    data_ultima_entrada?: Date | string | null
    data_ultima_saida?: Date | string | null
  }

  export type ProdutoEstoqueCreateOrConnectWithoutMovimentacoesInput = {
    where: ProdutoEstoqueWhereUniqueInput
    create: XOR<ProdutoEstoqueCreateWithoutMovimentacoesInput, ProdutoEstoqueUncheckedCreateWithoutMovimentacoesInput>
  }

  export type UserCreateWithoutResponsavel_movracaoInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeCreateNestedManyWithoutResponsavelInput
  }

  export type UserUncheckedCreateWithoutResponsavel_movracaoInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role | null
    image?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    lastLogin?: Date | string | null
    permissions?: UserCreatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_registrodiario?: RegistroDiarioUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedCreateNestedManyWithoutResponsavelInput
    responsavel_regsaude?: RegistroSaudeUncheckedCreateNestedManyWithoutResponsavelInput
  }

  export type UserCreateOrConnectWithoutResponsavel_movracaoInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResponsavel_movracaoInput, UserUncheckedCreateWithoutResponsavel_movracaoInput>
  }

  export type ProdutoEstoqueUpsertWithoutMovimentacoesInput = {
    update: XOR<ProdutoEstoqueUpdateWithoutMovimentacoesInput, ProdutoEstoqueUncheckedUpdateWithoutMovimentacoesInput>
    create: XOR<ProdutoEstoqueCreateWithoutMovimentacoesInput, ProdutoEstoqueUncheckedCreateWithoutMovimentacoesInput>
    where?: ProdutoEstoqueWhereInput
  }

  export type ProdutoEstoqueUpdateToOneWithWhereWithoutMovimentacoesInput = {
    where?: ProdutoEstoqueWhereInput
    data: XOR<ProdutoEstoqueUpdateWithoutMovimentacoesInput, ProdutoEstoqueUncheckedUpdateWithoutMovimentacoesInput>
  }

  export type ProdutoEstoqueUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    peso_por_unidade?: FloatFieldUpdateOperationsInput | number
    quantidade_unidades?: IntFieldUpdateOperationsInput | number
    estoque_atual_kg?: FloatFieldUpdateOperationsInput | number
    lote_numero?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    data_ultima_entrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ultima_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProdutoEstoqueUncheckedUpdateWithoutMovimentacoesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    categoria?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: StringFieldUpdateOperationsInput | string
    unidade_medida?: StringFieldUpdateOperationsInput | string
    peso_por_unidade?: FloatFieldUpdateOperationsInput | number
    quantidade_unidades?: IntFieldUpdateOperationsInput | number
    estoque_atual_kg?: FloatFieldUpdateOperationsInput | number
    lote_numero?: NullableStringFieldUpdateOperationsInput | string | null
    validade?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fornecedor?: NullableStringFieldUpdateOperationsInput | string | null
    custo_unitario?: NullableFloatFieldUpdateOperationsInput | number | null
    data_ultima_entrada?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    data_ultima_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutResponsavel_movracaoInput = {
    update: XOR<UserUpdateWithoutResponsavel_movracaoInput, UserUncheckedUpdateWithoutResponsavel_movracaoInput>
    create: XOR<UserCreateWithoutResponsavel_movracaoInput, UserUncheckedCreateWithoutResponsavel_movracaoInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResponsavel_movracaoInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResponsavel_movracaoInput, UserUncheckedUpdateWithoutResponsavel_movracaoInput>
  }

  export type UserUpdateWithoutResponsavel_movracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUpdateManyWithoutResponsavelNestedInput
  }

  export type UserUncheckedUpdateWithoutResponsavel_movracaoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableEnumRoleFieldUpdateOperationsInput | $Enums.Role | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    permissions?: UserUpdatepermissionsInput | string[]
    responsavel_biometrias?: BiometriaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_qualidadeagua?: QualidadeAguaUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_registrodiario?: RegistroDiarioUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_movtanque?: MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelNestedInput
    responsavel_regsaude?: RegistroSaudeUncheckedUpdateManyWithoutResponsavelNestedInput
  }

  export type BiometriaCreateManyResponsavelInput = {
    id?: string
    tanque_id: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
  }

  export type QualidadeAguaCreateManyResponsavelInput = {
    id?: string
    tanque_id: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
  }

  export type RegistroDiarioCreateManyResponsavelInput = {
    id?: string
    tanque_id: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    isAutomatic?: boolean
  }

  export type MovimentacaoTanqueCreateManyResponsavelInput = {
    id?: string
    tanque_id: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
  }

  export type MovimentacaoRacaoCreateManyResponsavelInput = {
    id?: string
    produto_id: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
  }

  export type RegistroSaudeCreateManyResponsavelInput = {
    id?: string
    tanque_id: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
  }

  export type BiometriaUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutBiometriasNestedInput
  }

  export type BiometriaUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiometriaUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutQualidade_aguaNestedInput
  }

  export type QualidadeAguaUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroDiarioUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    tanque?: TanqueUpdateOneRequiredWithoutRegistros_diariosNestedInput
  }

  export type RegistroDiarioUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegistroDiarioUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovimentacaoTanqueUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    tanque?: TanqueUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoTanqueUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoTanqueUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: ProdutoEstoqueUpdateOneRequiredWithoutMovimentacoesNestedInput
  }

  export type MovimentacaoRacaoUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    produto_id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    produto_id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroSaudeUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tanque?: TanqueUpdateOneRequiredWithoutRegistros_saudeNestedInput
  }

  export type RegistroSaudeUncheckedUpdateWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RegistroSaudeUncheckedUpdateManyWithoutResponsavelInput = {
    id?: StringFieldUpdateOperationsInput | string
    tanque_id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CicloProducaoCreateManyTanqueInput = {
    id?: string
    especie?: string | null
    origem_lote?: string | null
    data_inicio: Date | string
    data_fim?: Date | string | null
    quantidade_inicial: number
    quantidade_atual?: number | null
    peso_inicial_g: number
    peso_atual?: number | null
    mortes?: number | null
    alimentacao_total_kg?: number | null
    custo_total?: number | null
    data_prevista_saida?: Date | string | null
    status?: string
  }

  export type RegistroDiarioCreateManyTanqueInput = {
    id?: string
    data: Date | string
    turno?: $Enums.Turno | null
    temperatura_agua: number
    quantidade_kg?: number | null
    fracionamento?: number | null
    tipo_racao?: string | null
    racao_marca?: string | null
    racao_codigo?: string | null
    sobras?: boolean | null
    mortalidade?: number | null
    causa_morte?: string | null
    horas_aeracao?: number | null
    observacoes?: string | null
    eventos_adversos?: string | null
    responsavel_id?: string | null
    isAutomatic?: boolean
  }

  export type BiometriaCreateManyTanqueInput = {
    id?: string
    data_amostra: Date | string
    idade_lote_dias?: number | null
    tamanho_amostra: number
    peso_total_kg: number
    peso_minimo?: number | null
    peso_maximo?: number | null
    comprimento_medio_cm: number
    comprimento_minimo?: number | null
    comprimento_maximo?: number | null
    altura_minima?: number | null
    altura_maxima?: number | null
    desvio_padrao_peso?: number | null
    desvio_padrao_comprimento?: number | null
    observacoes?: string | null
    recomendacoes?: string | null
    responsavel_id?: string | null
  }

  export type QualidadeAguaCreateManyTanqueInput = {
    id?: string
    data_analise: Date | string
    hora_coleta?: string | null
    fonte_agua?: string | null
    metodo_coleta?: string | null
    oxigenio_dissolvido: number
    ph: number
    amonia: number
    nitrito: number
    nitrato?: number | null
    tds?: number | null
    orp?: number | null
    ec?: number | null
    salppm?: number | null
    sal?: number | null
    sg?: number | null
    temperatura: number
    transparencia_cm: number
    notas?: string | null
    responsavel_id?: string | null
  }

  export type RegistroSaudeCreateManyTanqueInput = {
    id?: string
    data_registro: Date | string
    sintomas?: string | null
    percentual_afetado?: number | null
    diagnostico?: string | null
    patologia_codigo?: string | null
    produto?: string | null
    dosagem?: string | null
    dias_tratamento?: number | null
    dias_carencia?: number | null
    resultado?: string | null
    data_diagnostico?: Date | string | null
    usuario_id?: string | null
  }

  export type MovimentacaoTanqueCreateManyTanqueInput = {
    id?: string
    tipo_movimentacao: $Enums.MovTanqueTipo
    motivo?: string | null
    data: Date | string
    quantidade: number
    peso_medio_g: number
    notas?: string | null
    usuario_id?: string | null
  }

  export type CicloProducaoUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    tanque_ciclo_ativo?: TanqueUpdateOneWithoutCiclo_atualNestedInput
  }

  export type CicloProducaoUncheckedUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    tanque_ciclo_ativo?: TanqueUncheckedUpdateOneWithoutCiclo_atualNestedInput
  }

  export type CicloProducaoUncheckedUpdateManyWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    especie?: NullableStringFieldUpdateOperationsInput | string | null
    origem_lote?: NullableStringFieldUpdateOperationsInput | string | null
    data_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    data_fim?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantidade_inicial?: IntFieldUpdateOperationsInput | number
    quantidade_atual?: NullableIntFieldUpdateOperationsInput | number | null
    peso_inicial_g?: FloatFieldUpdateOperationsInput | number
    peso_atual?: NullableFloatFieldUpdateOperationsInput | number | null
    mortes?: NullableIntFieldUpdateOperationsInput | number | null
    alimentacao_total_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    custo_total?: NullableFloatFieldUpdateOperationsInput | number | null
    data_prevista_saida?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RegistroDiarioUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
    responsavel?: UserUpdateOneWithoutResponsavel_registrodiarioNestedInput
  }

  export type RegistroDiarioUncheckedUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegistroDiarioUncheckedUpdateManyWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    turno?: NullableEnumTurnoFieldUpdateOperationsInput | $Enums.Turno | null
    temperatura_agua?: FloatFieldUpdateOperationsInput | number
    quantidade_kg?: NullableFloatFieldUpdateOperationsInput | number | null
    fracionamento?: NullableIntFieldUpdateOperationsInput | number | null
    tipo_racao?: NullableStringFieldUpdateOperationsInput | string | null
    racao_marca?: NullableStringFieldUpdateOperationsInput | string | null
    racao_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    sobras?: NullableBoolFieldUpdateOperationsInput | boolean | null
    mortalidade?: NullableIntFieldUpdateOperationsInput | number | null
    causa_morte?: NullableStringFieldUpdateOperationsInput | string | null
    horas_aeracao?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    eventos_adversos?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
    isAutomatic?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BiometriaUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: UserUpdateOneWithoutResponsavel_biometriasNestedInput
  }

  export type BiometriaUncheckedUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BiometriaUncheckedUpdateManyWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_amostra?: DateTimeFieldUpdateOperationsInput | Date | string
    idade_lote_dias?: NullableIntFieldUpdateOperationsInput | number | null
    tamanho_amostra?: IntFieldUpdateOperationsInput | number
    peso_total_kg?: FloatFieldUpdateOperationsInput | number
    peso_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    peso_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_medio_cm?: FloatFieldUpdateOperationsInput | number
    comprimento_minimo?: NullableFloatFieldUpdateOperationsInput | number | null
    comprimento_maximo?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_minima?: NullableFloatFieldUpdateOperationsInput | number | null
    altura_maxima?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_peso?: NullableFloatFieldUpdateOperationsInput | number | null
    desvio_padrao_comprimento?: NullableFloatFieldUpdateOperationsInput | number | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    recomendacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: UserUpdateOneWithoutResponsavel_qualidadeaguaNestedInput
  }

  export type QualidadeAguaUncheckedUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type QualidadeAguaUncheckedUpdateManyWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_analise?: DateTimeFieldUpdateOperationsInput | Date | string
    hora_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    fonte_agua?: NullableStringFieldUpdateOperationsInput | string | null
    metodo_coleta?: NullableStringFieldUpdateOperationsInput | string | null
    oxigenio_dissolvido?: FloatFieldUpdateOperationsInput | number
    ph?: FloatFieldUpdateOperationsInput | number
    amonia?: FloatFieldUpdateOperationsInput | number
    nitrito?: FloatFieldUpdateOperationsInput | number
    nitrato?: NullableFloatFieldUpdateOperationsInput | number | null
    tds?: NullableFloatFieldUpdateOperationsInput | number | null
    orp?: NullableFloatFieldUpdateOperationsInput | number | null
    ec?: NullableFloatFieldUpdateOperationsInput | number | null
    salppm?: NullableFloatFieldUpdateOperationsInput | number | null
    sal?: NullableFloatFieldUpdateOperationsInput | number | null
    sg?: NullableFloatFieldUpdateOperationsInput | number | null
    temperatura?: FloatFieldUpdateOperationsInput | number
    transparencia_cm?: IntFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroSaudeUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    responsavel?: UserUpdateOneWithoutResponsavel_regsaudeNestedInput
  }

  export type RegistroSaudeUncheckedUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegistroSaudeUncheckedUpdateManyWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    data_registro?: DateTimeFieldUpdateOperationsInput | Date | string
    sintomas?: NullableStringFieldUpdateOperationsInput | string | null
    percentual_afetado?: NullableFloatFieldUpdateOperationsInput | number | null
    diagnostico?: NullableStringFieldUpdateOperationsInput | string | null
    patologia_codigo?: NullableStringFieldUpdateOperationsInput | string | null
    produto?: NullableStringFieldUpdateOperationsInput | string | null
    dosagem?: NullableStringFieldUpdateOperationsInput | string | null
    dias_tratamento?: NullableIntFieldUpdateOperationsInput | number | null
    dias_carencia?: NullableIntFieldUpdateOperationsInput | number | null
    resultado?: NullableStringFieldUpdateOperationsInput | string | null
    data_diagnostico?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoTanqueUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: UserUpdateOneWithoutResponsavel_movtanqueNestedInput
  }

  export type MovimentacaoTanqueUncheckedUpdateWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoTanqueUncheckedUpdateManyWithoutTanqueInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimentacao?: EnumMovTanqueTipoFieldUpdateOperationsInput | $Enums.MovTanqueTipo
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade?: IntFieldUpdateOperationsInput | number
    peso_medio_g?: FloatFieldUpdateOperationsInput | number
    notas?: NullableStringFieldUpdateOperationsInput | string | null
    usuario_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoCreateManyProdutoInput = {
    id?: string
    tipo_movimento: string
    data: Date | string
    quantidade_kg: number
    lote_id?: string | null
    observacoes?: string | null
    responsavel_id?: string | null
  }

  export type MovimentacaoRacaoUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel?: UserUpdateOneWithoutResponsavel_movracaoNestedInput
  }

  export type MovimentacaoRacaoUncheckedUpdateWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovimentacaoRacaoUncheckedUpdateManyWithoutProdutoInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo_movimento?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    quantidade_kg?: FloatFieldUpdateOperationsInput | number
    lote_id?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    responsavel_id?: NullableStringFieldUpdateOperationsInput | string | null
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