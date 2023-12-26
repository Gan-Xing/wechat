/**
 * WeChatModule 配置项
 * WeChatModule Options
 */
declare interface WeChatModuleOptions {
  isGlobal?: boolean;
  /**
   * 微信公众号/小程序APP ID
   * WeChat/MiniProgram official account APP ID
   */
  appId: string;
  /**
   * 微信公众号secret
   * WeChat/MiniProgram official account secret
   */
  secret: string;
  /**
   * 微信公众号服务器Token
   * WeChat official account Cloud Token
   */
  token?: string;
  /**
   * 微信公众号服务器EncodingAESKey
   * WeChat official account Cloud EncodingAESKey
   */
  encodingAESKey?: string;
}
