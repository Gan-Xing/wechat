import { ModuleMetadata } from "@nestjs/common";

/**
 * Represents a type which requires at least one of the specified keys.
 * This is useful for creating types where you need to ensure that at least one of several properties is provided.
 *
 * Example:
 * ```typescript
 * RequireAtLeastOne<RefundParameters, 'transaction_id' | 'out_trade_no'>
 * ```
 *
 * @typeParam T - The base type.
 * @typeParam Keys - The keys of T that are required.
 */
declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
  }[Keys];

/**
 * Represents a type which requires only one of the specified keys.
 * This can be used for cases where exactly one of several properties must be provided.
 *
 * Example:
 * ```typescript
 * RequireOnlyOne<RefundParameters, 'transaction_id' | 'out_trade_no'>
 * ```
 *
 * @typeParam T - The base type.
 * @typeParam Keys - The keys of T where only one is required.
 */
declare type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<
  T,
  Exclude<keyof T, Keys>
> &
  {
    [K in Keys]-?: Required<Pick<T, K>> &
      Partial<Record<Exclude<Keys, K>, undefined>>;
  }[Keys];

/**
 * Options for configuring the WeChatComponentModule.
 */
declare interface ComponentModuleOptions {
  /**
   * Specifies if the module should be globally available in your Nest application.
   */
  isGlobal?: boolean;

  /**
   * The App ID for the WeChat official account.
   */
  componentAppId: string;

  /**
   * The secret for the WeChat official account.
   */
  componentSecret: string;

  /**
   * The token for the WeChat official account.
   */
  componentToken?: string;

  /**
   * The EncodingAESKey for the WeChat official account.
   */
  componentEncodingAESKey?: string;

  /**
   * An optional cache adapter object.
   */
  cacheAdapter?: object;
}

/**
 * Root options for the WeChatModule, extended from ModuleMetadata imports.
 */
declare interface WeChatModuleRootOptions
  extends Pick<ModuleMetadata, "imports"> {
  /**
   * A factory function that returns either a Promise of WeChatModuleOptions or WeChatModuleOptions directly.
   */
  useFactory: (
    ...args: any[]
  ) => Promise<WeChatModuleOptions> | WeChatModuleOptions;

  /**
   * An array of providers to be injected into the useFactory function.
   */
  inject: any[];

  /**
   * Specifies if the module should be globally available in your Nest application.
   */
  isGlobal?: boolean;
}

/**
 * Root options for the ComponentModule, extended from ModuleMetadata imports.
 */
declare interface ComponentModuleRootOptions
  extends Pick<ModuleMetadata, "imports"> {
  /**
   * A factory function that returns either a Promise of ComponentModuleOptions or ComponentModuleOptions directly.
   */
  useFactory: (
    ...args: any[]
  ) => Promise<ComponentModuleOptions> | ComponentModuleOptions;

  /**
   * An array of providers to be injected into the useFactory function.
   */
  inject: any[];

  /**
   * Specifies if the module should be globally available in your Nest application.
   */
  isGlobal?: boolean;
}

/**
 * Represents the result returned when requesting an access token for a WeChat official account.
 */
declare interface AccountAccessTokenResult {
  /**
   * The obtained access token.
   */
  access_token: string;

  /**
   * The number of seconds until the access token expires.
   */
  expires_in: number;

  /**
   * Error code, present only if the request was unsuccessful.
   */
  errcode?: string;

  /**
   * Error message, present only if the request was unsuccessful.
   */
  errmsg?: string;
}

/**
 * Represents the result of a JS-SDK signature operation.
 */
declare interface SignatureResult {
  /**
   * The App ID of the official account.
   */
  appId: string;

  /**
   * A randomly generated string used for the signature.
   */
  nonceStr: string;

  /**
   * The timestamp of when the signature was generated.
   */
  timestamp: number;

  /**
   * The actual signature string.
   */
  signature: string;
}
