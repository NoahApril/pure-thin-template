/**
 * 构建信息配置文件
 * 可以在这里自定义打包时显示的欢迎信息和完成信息
 */

export interface BuildConfig {
  /** 欢迎信息标题 */
  welcomeTitle?: string;
  /** 欢迎信息描述行（多行） */
  welcomeMessages?: string[];
  /** 欢迎信息渐变颜色（gradient-string支持的颜色） */
  welcomeGradientColors?: string[];
  /** 完成信息前缀 */
  completionPrefix?: string;
  /** 是否显示打包时间 */
  showBuildTime?: boolean;
  /** 是否显示打包大小 */
  showBuildSize?: boolean;
  /** 完成信息渐变颜色 */
  completionGradientColors?: string[];
  /** 边框颜色 */
  borderColor?: string;
  /** 边框样式 */
  borderStyle?:
    | "single"
    | "double"
    | "round"
    | "bold"
    | "singleDouble"
    | "doubleSingle"
    | "classic";
}

/**
 * 默认构建配置
 * 修改此配置以自定义打包信息
 */
export const buildConfig: BuildConfig = {
  welcomeTitle: "您好! 欢迎使用 pure-admin 开源项目",
  welcomeMessages: [
    "我们为您精心准备了下面两个贴心的保姆级文档",
    "https://pure-admin.cn",
    "https://pure-admin-utils.netlify.app"
  ],
  // 使用专业的蓝色渐变，避免粉色
  welcomeGradientColors: ["#2563eb", "#0ea5e9"],
  completionPrefix: "🎉 恭喜打包完成",
  showBuildTime: true,
  showBuildSize: true,
  // 使用专业的蓝色渐变
  completionGradientColors: ["#2563eb", "#0ea5e9"],
  borderColor: "cyan",
  borderStyle: "round"
};
