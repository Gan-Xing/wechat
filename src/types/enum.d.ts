/**
 * 交易状态
 */
declare enum TradeStatus {
  /**
   * 支付成功
   */
  SUCCESS = "SUCCESS",
  /**
   * 转入退款
   */
  REFUND = "REFUND",
  /**
   * 未支付
   */
  NOTPAY = "NOTPAY",
  /**
   * 已关闭
   */
  CLOSED = "CLOSED",
  /**
   * 已撤销（仅付款码支付会返回）
   */
  REVOKED = "REVOKED",
  /**
   * 用户支付中（仅付款码支付会返回）
   */
  USERPAYIN = "USERPAYIN",
  /**
   * 支付失败（仅付款码支付会返回）
   */
  PAYERROR = "PAYERROR",
}

/**
 * 交易类型
 */
declare enum TradeType {
  /**
   * 公从号支付
   */
  JSAPI = "JSAPI",
  /**
   * 扫码支付
   */
  NATIVE = "NATIVE",
  /**
   * APP支付
   */
  APP = "APP",
  /**
   * 付款码支付
   */
  MICROPAY = "MICROPAY",
  /**
   * H5支付
   */
  MWEB = "MWEB",
  /**
   * 刷脸支付
   */
  FACEPAY = "FACEPAY",
}

/**
 * 退款状态
 */
declare enum RefundStatus {
  /**
   * 退款成功
   */
  SUCCESS = "SUCCESS",
  /**
   * 退款关闭
   */
  CLOSED = "CLOSED",
  /**
   * 退款处理中
   */
  PROCESSING = "PROCESSING",
  /**
   * 退款异常
   */
  ABNORMAL = "ABNORMAL",
}

/**
 * 资金账户
 */
declare enum FundsAccount {
  /**
   * 未结算资金
   */
  UNSETTLED = "UNSETTLED",
  /**
   * 可用余额
   */
  AVAILABLE = "AVAILABLE",
  /**
   * 不可用余额
   */
  UNAVAILABLE = "UNAVAILABLE",
  /**
   * 运营户
   */
  OPERATION = "OPERATION",
  /**
   * 基本账户（含可用余额和不可用余额）
   */
  BASIC = "BASIC",
}

/**
 * 退款渠道
 */
declare enum RefundChannel {
  /**
   * 原路退款
   */
  ORIGINAL = "ORIGINAL",
  /**
   * 退回到余额
   */
  BALANCE = "BALANCE",
  /**
   * 原账户异常退到其他余额账户
   */
  OTHER_BALANCE = "OTHER_BALANCE",
  /**
   * 原银行卡异常退到其他银行卡
   */
  OTHER_BANKCARD = "OTHER_BANKCARD",
}
