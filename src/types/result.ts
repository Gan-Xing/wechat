export declare interface DefaultRequestResult {
  errcode: number;
  errmsg: string;
}

/**
 * 用户网页授权access_token返回结果
 *
 * Result of get access_token which is use by user auth.
 *
 */
export declare interface UserAccessTokenResult {
  /**
   * access_token
   */
  access_token: string;
  /**
   * access_token 有效期
   * seconde that access_token will expires in
   */
  expires_in: number;
  /**
   * 刷新token
   *
   * Use to refresh the access_token. Expires in 30 days.
   */
  refresh_token: string;
  /**
   * 用户openid
   *
   * user's openid
   */
  openid: string;
  /**
   * access_token's scope
   */
  scope: string;
  /**
   * 正确返回没有该字段
   * There is no this property when success.
   */
  errcode?: number;
  /**
   * 正确返回没有该字段
   * There is no this property when success.
   */
  errmsg?: string;
}

/**
 * 获取签名票据返回结果
 *
 * Result of get ticket
 */
export declare interface TicketResult {
  /**
   * 返回代码，正确结果是0
   *
   * response code, code = 0 when success
   */
  errcode: number;
  /**
   * 响应消息
   * response message
   */
  errmsg: string;
  /**
   * 票据
   *
   * ticket
   */
  ticket: string;

  /**
   * ticket 有效期
   * seconde that ticket will expires in
   */
  expires_in: number;
}

/**
 * 登录凭证校验
 *
 * Result of auth.code2Session
 */
export declare interface SessionResult {
  /**
   * 用户唯一标识
   */
  openid: string;
  /**
   * 会话密钥
   */
  session_key: string;
  /**
   * 用户在开放平台的唯一标识符，若当前小程序已绑定到微信开放平台帐号下会返回，详见 UnionID 机制说明。
   */
  unionid?: string;
  /**
   * 错误码
   */
  errcode?: number;
  /**
   * 错误信息
   */
  errmsg?: string;
}

// =============================== 第三方开放平台 ===============================

/**
 * 使用授权码获取授权信息授回结果
 */
export declare interface AuthorizationResult {
  /**
   * 授权信息
   */
  authorization_info: {
    /**
     * 授权方 appid
     */
    authorizer_appid: string;
    /**
     * 接口调用令牌（在授权的公众号/小程序具备 API 权限时，才有此返回值）
     */
    authorizer_access_token: string;
    /**
     * authorizer_access_token 的有效期（在授权的公众号/小程序具备API权限时，才有此返回值），单位：秒
     */
    expires_in: number;
    /**
     * 刷新令牌（在授权的公众号具备API权限时，才有此返回值），刷新令牌主要用于第三方平台获取和刷新已授权用户的 authorizer_access_token。一旦丢失，只能让用户重新授权，才能再次拿到新的刷新令牌。用户重新授权后，之前的刷新令牌会失效
     */
    authorizer_refresh_token: string;
    /**
     * 授权给开发者的权限集列表
     */
    func_info: { [key: string]: { id: number } }[];
  };
}

/**
 * 获取授权帐号详情返回结果
 */
export declare interface AuthorizerInfo {
  /**
   * 详见小程序帐号信息
   */
  authorizer_info: {
    /**
     * 昵称
     */
    nick_name: string;
    /**
     * 头像
     */
    head_img: string;
    /**
     * 小程序类型
     */
    service_type_info: {
      id: string;
    };
    /**
     * 小程序认证类型
     */
    verify_type_info: {
      id: string;
    };
    /**
     * 原始 ID
     */
    user_name: string;
    /**
     * 主体名称
     */
    principal_name: string;
    /**
     * 用以了解功能的开通状况（0代表未开通，1代表已开通），详见business_info 说明
     */
    business_info: {
      open_store: number;
      open_scan: number;
      open_pay: number;
      open_card: number;
      open_shake: number;
    };
    /**
     *
     */
    alias: string;
    /**
     * 二维码图片的 URL，开发者最好自行也进行保存
     */
    qrcode_url: string;
    /**
     * 帐号状态，该字段公众号也返回
     */
    account_status: number;
    /**
     * 小程序配置，根据这个字段判断是否为小程序类型授权
     */
    MiniProgramInfo: object;
  };
}

/**
 * 已授权的帐号列表
 */
export declare interface AuthorizerListResult {
  /**
   * 授权的帐号总数
   */
  total_count: number;
  list: {
    /**
     * 已授权的 appid
     */
    authorizer_appid: string;
    /**
     * 刷新令牌authorizer_access_token
     */
    refresh_token: string;
    /**
     * 授权的时间
     */
    auth_time: number;
  }[];
}

/**
 * 获取手机号码返回结果
 */
export declare interface PhoneNumberResult extends DefaultRequestResult {
  /**
   * 用户手机号信息
   */
  phone_info: {
    /**
     * 用户绑定的手机号（国外手机号会有区号）
     */
    phoneNumber: string;
    /**
     * 没有区号的手机号
     */
    purePhoneNumber: string;
    /**
     * 区号
     */
    countryCode: number;
    /**
     * 数据水印
     */
    watermark: {
      /**
       * 用户获取手机号操作的时间戳
       */
      timestamp: number;
      /**
       * 小程序appid
       */
      appid: string;
    };
  };
}

/**
 * 生成带参数的二维码
 */
export declare interface AccountCreateQRCodeResult
  extends DefaultRequestResult {
  /** 获取的二维码ticket，凭借此ticket可以在有效时间内换取二维码。 */
  ticket: string;
  /** 该二维码有效时间，以秒为单位。 最大不超过2592000（即30天）。 */
  expire_seconds: number;
  /** 二维码图片解析后的地址，开发者可根据该地址自行生成需要的二维码图片 */
  url: string;
}

/**
 * 获取接口调用凭据参数
 *
 * 错误码
 * + -1	system error 系统繁忙，此时请开发者稍候再试
 * + 40001 invalid credential  access_token isinvalid or not latest	获取 access_token 时 AppSecret 错误，或者 access_token 无效。请开发者认真比对 AppSecret 的正确性，或查看是否正在为恰当的公众号调用接口
 * + 40013 invalid appid	不合法的 AppID ，请开发者检查 AppID 的正确性，避免异常字符，注意大小写
 */
export declare interface AccessTokenResult extends DefaultRequestResult {
  /**
   * 获取到的凭证
   */
  access_token?: string;
  /**
   * 凭证有效时间，单位：秒。目前是7200秒之内的值。
   */
  expires_in?: number;
}

/**
 * rid请求详情
 */
export declare interface RequestInfo {
  /**
   * 发起请求的时间戳
   */
  invoke_time: number;
  /**
   * 请求毫秒级耗时
   */
  cost_in_ms: number;
  /**
   * 请求的 URL 参数
   */
  request_url: string;
  /**
   * post请求的请求参数
   */
  request_body: string;
  /**
   * 接口请求返回参数
   */
  response_body: string;
  /**
   * 接口请求的客户端ip
   */
  client_ip: string;
}

/**
 * 微信接口调用rid查询
 */
export declare interface RidInfo extends DefaultRequestResult {
  /**
   * 该 rid 对应的请求详情
   */
  request: RequestInfo;
}

export declare interface SchemeInfo {
  /**
   * 小程序 appid
   */
  appid: string;
  /**
   * 小程序页面路径
   */
  path: string;
  /**
   * 小程序页面query
   */
  query: string;
  /**
   * 创建时间，为 Unix 时间戳
   */
  create_time: number;
  /**
   * 到期失效时间，为 Unix 时间戳，0 表示永久生效
   */
  expire_time: number;
  /**
   * 要打开的小程序版本。正式版为"release"，体验版为"trial"，开发版为"develop"
   */
  env_version: string;
}

export declare interface SchemeQuota {
  /**
   * 长期有效 scheme 已生成次数
   */
  long_time_used: number;
  /**
   * 长期有效 scheme 生成次数上限
   */
  long_time_limit: number;
}

export declare interface UrlLinkInfo {
  appid: string;
  path: string;
  query: string;
  create_time: number;
  expire_time: number;
  env_version: string;
}

export declare interface UrlLinkQuota {
  /**
   * 长期有效 url_link 已生成次数
   */
  long_time_used: number;
  /**
   * 长期有效 url_link 生成次数上限
   */
  long_time_limit: number;
}

export declare interface UrlLinkResult extends DefaultRequestResult {
  url_link_info: UrlLinkInfo;
  url_link_quota: UrlLinkQuota;
  visit_openid: string;
}

export declare interface ActivityIdResult extends DefaultRequestResult {
  /**
   * 动态消息的 ID
   */
  activity_id: string;
  /**
   * activity_id 的过期时间戳。默认24小时后过期。
   */
  expiration_time: number;
}

export declare interface PubTemplateKeyWords extends DefaultRequestResult {
  /**
   * 模版标题列表总数
   */
  count: number;
  data: {
    /**
     * 关键词 id，选用模板时需要
     */
    kid: number;
    /**
     * 关键词内容
     */
    name: string;
    /**
     * 关键词内容对应的示例
     */
    example: string;
    /**
     * 参数类型
     */
    rule: string;
  }[];
}

export declare interface PubTemplateTitleListResult
  extends DefaultRequestResult {
  /**
   * 模版标题列表总数
   */
  count: number;
  /**
   * 模板标题列表
   */
  data: {
    /**
     * 模版标题 id
     */
    tid: string;
    /**
     * 模版标题
     */
    title: string;
    /**
     * 模版类型，2 为一次性订阅，3 为长期订阅
     */
    type: string;
    /**
     * 模版所属类目 id
     */
    categoryId: string;
  }[];
}

export declare interface MessageTemplateListResult
  extends DefaultRequestResult {
  data: {
    /**
     * 添加至帐号下的模板 id，发送小程序订阅消息时所需
     */
    priTmplId: string;
    /**
     * 模版标题
     */
    title: string;
    /**
     * 模版内容
     */
    content: string;
    /**
     * 模板内容示例
     */
    example: string;
    /**
     * 模版类型，2 为一次性订阅，3 为长期订阅
     */
    type: number;
    /**
     * 枚举参数值范围
     */
    keywordEnumValueList: {
      /**
       * 枚举参数的 key
       */
      keywordCode: string;
      /**
       * 枚举参数值范围列表
       */
      enumValueList: string[];
    }[];
  }[];
}

export declare interface ExpressLocalResult {
  /**
   * 运力返回的错误码
   */
  resultcode: number;
  /**
   * 运力返回的错误描述
   */
  resultmsg: string;
}

export declare interface ExpressLocalPreAddOrderResult
  extends ExpressLocalResult {
  /**
   * 实际运费(单位：元)，运费减去优惠券费用
   */
  fee: number;
  /**
   * 运费(单位：元)
   */
  deliverfee: number;
  /**
   * 优惠券费用(单位：元)
   */
  couponFee: number;
  /**
   * 小费(单位：元)
   */
  tips: number;
  /**
   * 保价费(单位：元)
   */
  insurancefee: number;
  /**
   * 配送距离(单位：米)预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0
   */
  distance: number;
  /**
   * 配送公司可以返回此字段，当用户下单时候带上这个字段，保证在一段时间内运费不变
   */
  delivery_token: string;
  /**
   * 预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0
   */
  dispatch_duration: number;
}

export declare interface ExpressLocalGetBindAccountResult
  extends ExpressLocalResult {
  /**
   * 绑定的商家签约账号列表
   */
  shop_list: {
    shopid: string;
    delivery_id: string;
    /**
     * 审核状态.0表示审核通过；1表示审核中；2表示审核不通过。
     */
    audit_result: number;
  }[];
}

export declare interface ExpressLocalPreCancelOrderResult
  extends ExpressLocalResult {
  /**
   * 预计扣除的违约金(单位：元)，精确到分
   */
  deduct_fee: number;
  /**
   * 说明
   */
  desc: string;
}

export declare interface ExpressLocalGetLocalOrderResult
  extends ExpressLocalResult {
  /**
   * 配送状态 [详见](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/immediate-delivery/order_status.html)
   */
  order_status: number;
  /**
   * 配送单号
   */
  waybill_id: string;
  /**
   * 骑手姓名
   */
  rider_name: string;
  /**
   * 骑手电话
   */
  rider_phone: string;
  /**
   * 骑手位置经度, 配送中时返回
   */
  rider_lng?: number;
  /**
   * 骑手位置纬度, 配送中时返回
   */
  rider_lat?: number;
  /**
   * 预计还剩多久送达时间, 配送中时返回，单位秒， 已取货配送中需返回，比如5分钟后送达，填300
   */
  reach_time?: number;
}

export declare interface ExpressLocalCancelOrderResult
  extends ExpressLocalResult {
  /**
   * 实际扣除的违约金(单位：元)，精确到分
   */
  deduct_fee: number;
  /**
   * 说明
   */
  desc: string;
}

export declare interface ExpressLocalAddLocalOrderResult
  extends ExpressLocalResult {
  /**
   * 实际运费(单位：元)，运费减去优惠券费用
   */
  fee: number;
  /**
   * 运费(单位：元)
   */
  deliverfee: number;
  /**
   * 优惠券费用(单位：元)
   */
  couponfee: number;
  /**
   * 小费(单位：元)
   */
  tips: number;
  /**
   * 保价费(单位：元)
   */
  insurancefee: number;
  /**
   * 配送距离(整数单位：米)
   */
  distance: number;
  /**
   * 配送单号
   */
  waybill_id: string;
  /**
   * 配送状态 [详见](https://developers.weixin.qq.com/miniprogram/dev/platform-capabilities/industry/immediate-delivery/order_status.html)
   */
  order_status: number;
  /**
   * 收货码
   */
  finish_code: number;
  /**
   * 取货码
   */
  pickup_code: number;
  /**
   * 预计骑手接单时间，单位秒，比如5分钟，就填300, 无法预计填0
   */
  dispatch_duration: number;
}
