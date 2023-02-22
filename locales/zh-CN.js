// element-plus国际化
import elementZhLocale from "element-plus/lib/locale/lang/zh-cn";
// zh-CN
export default {
  ...elementZhLocale,
  common: {
    language: "语言",
    setup: "设置",
    theme: "主题",
    closeSidebar: "关闭侧边栏",
    sidebarLogo: "侧边栏logo",
    auto: "自动",
    light: "浅色",
    dark: "深色",
  },
  status: {
    hsLoad: "加载中...",
  },
  login: {
    username: "账号",
    password: "密码",
    verifyCode: "验证码",
    remember: "记住密码",
    sure: "确认密码",
    forget: "忘记密码 ?",
    login: "登录",
    thirdLogin: "第三方登录",
    phoneLogin: "手机登录",
    qRCodeLogin: "二维码登录",
    register: "注册",
    weChatLogin: "微信登录",
    alipayLogin: "支付宝登录",
    qqLogin: "QQ登录",
    weiboLogin: "微博登录",
    phone: "手机号码",
    smsVerifyCode: "短信验证码",
    back: "返回",
    test: "模拟测试",
    tip: '扫码后点击"确认"，即可完成登录',
    definite: "确定",
    loginSuccess: "登录成功",
    registerSuccess: "注册成功",
    tickPrivacy: "请勾选隐私政策",
    readAccept: "我已仔细阅读并接受",
    privacyPolicy: "《隐私政策》",
    getVerifyCode: "获取验证码",
    info: "秒后重新获取",
    usernameReg: "请输入账号",
    passwordReg: "请输入密码",
    verifyCodeReg: "请输入验证码",
    verifyCodeCorrectReg: "请输入正确的验证码",
    verifyCodeSixReg: "请输入6位数字验证码",
    phoneReg: "请输入手机号码",
    phoneCorrectReg: "请输入正确的手机号码格式",
    passwordRuleReg: "密码格式应为8 - 18位数字、字母、符号的任意两种组合",
    passwordSureReg: "请输入确认密码",
    passwordDifferentReg: "两次密码不一致!",
    passwordUpdateReg: "修改密码成功",
  },
};
