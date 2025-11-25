import type { Plugin } from "vite";
import gradient from "gradient-string";
import { getPackageSize } from "./utils";
import dayjs, { type Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import boxen, { type Options as BoxenOptions } from "boxen";
import { buildConfig } from "./build-config";
dayjs.extend(duration);

const {
  welcomeTitle = "您好! 欢迎使用 pure-admin 开源项目",
  welcomeMessages = [
    "我们为您精心准备了下面两个贴心的保姆级文档",
    "https://pure-admin.cn",
    "https://pure-admin-utils.netlify.app"
  ],
  welcomeGradientColors = ["cyan", "magenta"],
  completionPrefix = "🎉 恭喜打包完成",
  completionGradientColors = ["cyan", "magenta"],
  showBuildTime = true,
  showBuildSize = true,
  borderColor = "cyan",
  borderStyle = "round"
} = buildConfig;

const createGradient = (colors: string[]) => {
  if (!colors.length) {
    return gradient(["cyan", "magenta"]);
  }
  if (colors.length === 1) {
    return gradient([colors[0], colors[0]]);
  }
  return gradient(colors);
};

const welcomeGradient = createGradient(welcomeGradientColors);
const completionGradient = createGradient(completionGradientColors);

const welcomeMessage = [welcomeTitle, ...welcomeMessages]
  .filter(Boolean)
  .join("\n");

const boxenOptions: BoxenOptions = {
  padding: 0.5,
  borderColor,
  borderStyle
};

const formatCompletionMessage = (size: string, durationLabel: string) => {
  const segments: string[] = [];
  if (showBuildTime) {
    segments.push(`总用时${durationLabel}`);
  }
  if (showBuildSize) {
    segments.push(`打包后的大小为${size}`);
  }
  const suffix = segments.length ? `（${segments.join("，")}）` : "";
  return `${completionPrefix}${suffix}`;
};

export function viteBuildInfo(): Plugin {
  let config: { command: string };
  let startTime: Dayjs;
  let endTime: Dayjs;
  let outDir: string;
  return {
    name: "vite:buildInfo",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
      outDir = resolvedConfig.build?.outDir ?? "dist";
    },
    buildStart() {
      console.log(
        boxen(welcomeGradient.multiline(welcomeMessage), boxenOptions)
      );
      if (config.command === "build") {
        startTime = dayjs(new Date());
      }
    },
    closeBundle() {
      if (config.command === "build") {
        endTime = dayjs(new Date());
        getPackageSize({
          folder: outDir,
          callback: (size: string) => {
            const durationLabel = dayjs
              .duration(endTime.diff(startTime))
              .format("mm分ss秒");
            const completionMessage = formatCompletionMessage(
              size,
              durationLabel
            );
            console.log(
              boxen(
                completionGradient.multiline(completionMessage),
                boxenOptions
              )
            );
          }
        });
      }
    }
  };
}
