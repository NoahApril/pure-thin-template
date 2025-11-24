# 🚀 玻璃拟态设计实施指南

## 快速开始

本指南提供了逐步实施玻璃拟态设计的技术细节和代码示例。

---

## 第一部分：基础CSS系统建设

### 1. 在 `src/style/tailwind.css` 中添加基础工具类

```css
/* 文件: src/style/tailwind.css */

@layer theme, base, components, utilities;
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/utilities.css" layer(utilities);

@custom-variant dark (&:is(.dark *));

@theme {
  --color-bg_color: var(--el-bg-color);
  --color-primary: var(--el-color-primary);
  --color-text_color_primary: var(--el-text-color-primary);
  --color-text_color_regular: var(--el-text-color-regular);
}

@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}

/* ===== 新增: 玻璃拟态组件类 ===== */
@layer components {
  /* 基础玻璃拟态容器 */
  .glass-refined {
    @apply bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-soft transition-all duration-300;
  }

  .glass-elevated {
    @apply bg-white/80 backdrop-blur-md border border-slate-300/80 rounded-2xl shadow-elevated transition-all duration-300;
  }

  .glass-floating {
    @apply bg-white/40 backdrop-blur-lg border border-slate-200/40 rounded-2xl shadow-floating transition-all duration-300;
  }

  /* 深色模式 */
  .dark .glass-refined {
    @apply bg-slate-900/60 border-slate-700/60 text-slate-100;
  }

  .dark .glass-elevated {
    @apply bg-slate-900/80 border-slate-600/80 text-slate-100;
  }

  .dark .glass-floating {
    @apply bg-slate-900/40 border-slate-700/40 text-slate-100;
  }

  /* 交互效果组合 */
  .hover-glass-lift {
    @apply hover:bg-white/80 hover:border-slate-300/80 hover:shadow-elevated
           hover:-translate-y-1 hover:cursor-pointer;
  }

  .hover-glass-subtle {
    @apply hover:bg-white/70 hover:scale-105 hover:cursor-pointer;
  }

  /* 聚焦环 */
  .focus-ring {
    @apply focus:outline-none focus:ring-4 focus:ring-blue-500/20;
  }

  /* 禁用状态 */
  .disabled-state {
    @apply opacity-50 cursor-not-allowed;
  }

  /* 渐变文本 */
  .text-gradient-primary {
    @apply bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent;
  }

  .text-gradient-success {
    @apply bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent;
  }

  .text-gradient-warning {
    @apply bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent;
  }

  .text-gradient-error {
    @apply bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent;
  }

  /* 渐变背景 */
  .bg-gradient-glass-primary {
    @apply bg-gradient-to-br from-blue-50/80 via-blue-50/60 to-cyan-50/80;
  }

  .bg-gradient-glass-success {
    @apply bg-gradient-to-br from-green-50/80 via-green-50/60 to-emerald-50/80;
  }

  .bg-gradient-glass-warning {
    @apply bg-gradient-to-br from-yellow-50/80 via-yellow-50/60 to-orange-50/80;
  }
}

@layer utilities {
  /* 阴影分层系统 */
  .shadow-soft {
    box-shadow: 
      0 2px 4px rgba(0, 0, 0, 0.03),
      0 4px 8px rgba(0, 0, 0, 0.04);
  }

  .shadow-elevated {
    box-shadow:
      0 4px 8px rgba(0, 0, 0, 0.06),
      0 8px 16px rgba(0, 0, 0, 0.08),
      0 12px 24px rgba(0, 0, 0, 0.04);
  }

  .shadow-floating {
    box-shadow:
      0 8px 16px rgba(0, 0, 0, 0.08),
      0 16px 32px rgba(0, 0, 0, 0.10),
      0 24px 48px rgba(0, 0, 0, 0.08);
  }

  .shadow-glow {
    box-shadow:
      0 0 20px rgba(59, 130, 246, 0.3),
      0 8px 24px rgba(0, 0, 0, 0.08);
  }

  /* 纯色阴影(可选) */
  .shadow-inset {
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  }

  /* 透明度工具 */
  .bg-white-40 { @apply bg-white/40; }
  .bg-white-60 { @apply bg-white/60; }
  .bg-white-80 { @apply bg-white/80; }

  .bg-black-40 { @apply bg-black/40; }
  .bg-black-60 { @apply bg-black/60; }

  /* 边框颜色透明度 */
  .border-glass-light { @apply border-slate-200/40; }
  .border-glass-medium { @apply border-slate-200/60; }
  .border-glass-dark { @apply border-slate-300/80; }

  /* 毛玻璃强度 */
  .backdrop-blur-xs { @apply [backdrop-filter:blur(4px)]; }
  .backdrop-blur-sm { @apply [backdrop-filter:blur(8px)]; }
  .backdrop-blur-md { @apply [backdrop-filter:blur(12px)]; }
  .backdrop-blur-lg { @apply [backdrop-filter:blur(16px)]; }

  /* 组合过渡 */
  .transition-glass {
    @apply transition-all duration-300 ease-out;
  }

  .transition-glass-fast {
    @apply transition-all duration-200 ease-out;
  }

  .transition-glass-slow {
    @apply transition-all duration-500 ease-out;
  }

  /* 玻璃背景降级方案检测 */
  @supports not (backdrop-filter: blur(1px)) {
    .glass-refined {
      @apply bg-white/95;
    }
    .glass-elevated {
      @apply bg-white/98;
    }
  }
}

/* 现有的自定义实用类保持不变 */
@utility flex-c {
  @apply flex justify-center items-center;
}

@utility flex-ac {
  @apply flex justify-around items-center;
}

@utility flex-bc {
  @apply flex justify-between items-center;
}

@utility navbar-bg-hover {
  @apply dark:text-white dark:hover:bg-[#242424]!;
}
```

### 2. 更新 `src/style/theme.scss` - 添加玻璃拟态变量

```scss
/* 在文件末尾追加 */

/* ========== 玻璃拟态设计系统变量 ========== */

:root {
  /* 透明度等级 */
  --glass-opacity-low: 0.4;
  --glass-opacity-medium: 0.6;
  --glass-opacity-high: 0.8;

  /* 模糊程度 */
  --glass-blur-xs: 4px;
  --glass-blur-sm: 8px;
  --glass-blur-md: 12px;
  --glass-blur-lg: 16px;

  /* 渐变系统 */
  --gradient-primary: linear-gradient(135deg, #3b82f6 0%, #a855f7 100%);
  --gradient-secondary: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  --gradient-success: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
  --gradient-warning: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
  --gradient-danger: linear-gradient(135deg, #ef4444 0%, #ec4899 100%);

  /* 圆角现代化 */
  --radius-xs: 6px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;

  /* 阴影系统 */
  --shadow-soft: 0 2px 4px rgba(0, 0, 0, 0.03), 0 4px 8px rgba(0, 0, 0, 0.04);
  --shadow-elevated: 0 4px 8px rgba(0, 0, 0, 0.06), 0 8px 16px rgba(0, 0, 0, 0.08), 0 12px 24px rgba(0, 0, 0, 0.04);
  --shadow-floating: 0 8px 16px rgba(0, 0, 0, 0.08), 0 16px 32px rgba(0, 0, 0, 0.10), 0 24px 48px rgba(0, 0, 0, 0.08);
  --shadow-glow: 0 0 20px rgba(59, 130, 246, 0.3), 0 8px 24px rgba(0, 0, 0, 0.08);

  /* 过渡时间 */
  --transition-fast: 200ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;

  /* 缓动函数 */
  --ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 亮白色主题 - 更新以支持玻璃拟态 */
html[data-theme="light"] {
  --pure-theme-sub-menu-active-text: #000000d9;
  --pure-theme-menu-bg: rgba(255, 255, 255, 0.8);
  --pure-theme-menu-hover: rgba(246, 246, 246, 0.8);
  --pure-theme-sub-menu-bg: rgba(255, 255, 255, 0.9);
  --pure-theme-menu-text: rgb(0 0 0 / 60%);
  --pure-theme-sidebar-logo: rgba(255, 255, 255, 0.9);
  --pure-theme-menu-title-hover: #000;
  --pure-theme-menu-active-before: #4091f7;

  /* 新增玻璃拟态变量 */
  --glass-container-bg: rgba(255, 255, 255, 0.6);
  --glass-container-border: rgba(226, 232, 240, 0.6);
  --glass-container-hover: rgba(255, 255, 255, 0.8);
  --glass-container-hover-border: rgba(203, 213, 225, 0.8);
}

/* 其他主题类似更新... */
html[data-theme="default"],
html[data-theme="saucePurple"],
html[data-theme="pink"],
html[data-theme="dusk"],
html[data-theme="volcano"],
html[data-theme="mingQing"],
html[data-theme="auroraGreen"] {
  --glass-container-bg: rgba(255, 255, 255, 0.6);
  --glass-container-border: rgba(226, 232, 240, 0.6);
  --glass-container-hover: rgba(255, 255, 255, 0.8);
  --glass-container-hover-border: rgba(203, 213, 225, 0.8);
}

/* 深色模式适配 */
html.dark {
  --glass-opacity-low: 0.3;
  --glass-opacity-medium: 0.5;
  --glass-opacity-high: 0.7;

  --glass-container-bg: rgba(15, 23, 42, 0.6);
  --glass-container-border: rgba(71, 85, 105, 0.6);
  --glass-container-hover: rgba(30, 41, 59, 0.8);
  --glass-container-hover-border: rgba(100, 116, 139, 0.8);

  --shadow-soft: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.12);
  --shadow-elevated: 0 4px 8px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.12);
}
```

### 3. 更新 `src/style/index.scss` - 扩展颜色系统

```scss
/* 在 :root 选择器中添加 */

:root {
  /* 现有变量保持... */

  /* ===== 新增: 玻璃拟态颜色系统 ===== */

  /* 白色系统 - 用于Light主题 */
  --color-white-40: rgb(255 255 255 / 40%);
  --color-white-60: rgb(255 255 255 / 60%);
  --color-white-80: rgb(255 255 255 / 80%);

  /* 灰色系统 - 用于边框和分隔线 */
  --color-slate-200-40: rgb(226 232 240 / 40%);
  --color-slate-200-60: rgb(226 232 240 / 60%);
  --color-slate-300-80: rgb(203 213 225 / 80%);
  --color-slate-400-60: rgb(148 163 184 / 60%);

  /* 文本层次系统 - 6级深度 */
  --color-text-h1: rgb(15 23 42 / 100%);          /* 主标题 */
  --color-text-h2: rgb(30 41 59 / 100%);          /* 页面标题 */
  --color-text-h3: rgb(51 65 85 / 100%);          /* 章节标题 */
  --color-text-body: rgb(71 85 105 / 100%);       /* 正文 */
  --color-text-secondary: rgb(100 116 139 / 80%); /* 次要文本 */
  --color-text-tertiary: rgb(120 113 108 / 60%);  /* 辅助文本 */
  --color-text-hint: rgb(148 163 184 / 100%);     /* 提示文本 */

  /* 状态色 - 浅色背景版本 */
  --color-success-text: rgb(16 185 129 / 100%);
  --color-success-bg: rgb(16 185 129 / 8%);
  --color-success-bg-hover: rgb(16 185 129 / 12%);

  --color-warning-text: rgb(245 158 11 / 100%);
  --color-warning-bg: rgb(245 158 11 / 8%);
  --color-warning-bg-hover: rgb(245 158 11 / 12%);

  --color-error-text: rgb(239 68 68 / 100%);
  --color-error-bg: rgb(239 68 68 / 8%);
  --color-error-bg-hover: rgb(239 68 68 / 12%);

  --color-info-text: rgb(59 130 246 / 100%);
  --color-info-bg: rgb(59 130 246 / 8%);
  --color-info-bg-hover: rgb(59 130 246 / 12%);

  /* 禁用状态 */
  --color-disabled-bg: rgb(0 0 0 / 4%);
  --color-disabled-text: rgb(0 0 0 / 26%);
  --color-disabled-border: rgb(0 0 0 / 12%);
}

/* 深色模式颜色调整 */
.dark {
  --color-text-h1: rgb(248 250 252 / 100%);
  --color-text-h2: rgb(226 232 240 / 100%);
  --color-text-h3: rgb(203 213 225 / 100%);
  --color-text-body: rgb(148 163 184 / 100%);
  --color-text-secondary: rgb(148 163 184 / 80%);
  --color-text-tertiary: rgb(120 113 108 / 60%);

  --color-white-40: rgb(30 41 59 / 40%);
  --color-white-60: rgb(30 41 59 / 60%);
  --color-white-80: rgb(30 41 59 / 80%);

  --color-disabled-bg: rgb(255 255 255 / 4%);
  --color-disabled-text: rgb(255 255 255 / 26%);
}
```

---

## 第二部分：核心组件开发

### GlassCard 组件

**文件**: `src/components/GlassCard/index.vue`

```vue
<script setup lang="ts">
import { computed } from 'vue';

type ShadowType = 'soft' | 'elevated' | 'floating';

interface Props {
  title?: string;
  subtitle?: string;
  icon?: any;
  hoverable?: boolean;
  gradient?: boolean;
  shadow?: ShadowType;
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  noBorder?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hoverable: true,
  gradient: false,
  shadow: 'soft',
  rounded: 'lg',
  noBorder: false
});

const shadowClass = computed(() => `glass-card--shadow-${props.shadow}`);
const roundedClass = computed(() => `glass-card--rounded-${props.rounded}`);
</script>

<template>
  <div
    :class="[
      'glass-card',
      shadowClass,
      roundedClass,
      { 'glass-card--hoverable': hoverable },
      { 'glass-card--gradient': gradient },
      { 'glass-card--no-border': noBorder }
    ]"
  >
    <!-- 背景光晕效果 -->
    <div v-if="hoverable" class="glass-card__shine" />

    <!-- 卡片头部 -->
    <div v-if="$slots.header || title || icon" class="glass-card__header">
      <slot name="header">
        <div v-if="icon" class="glass-card__icon">
          <component :is="icon" />
        </div>
        <div v-if="title || subtitle" class="glass-card__titles">
          <h3 v-if="title" class="glass-card__title">{{ title }}</h3>
          <p v-if="subtitle" class="glass-card__subtitle">{{ subtitle }}</p>
        </div>
      </slot>
    </div>

    <!-- 卡片内容 -->
    <div class="glass-card__content">
      <slot />
    </div>

    <!-- 卡片底部 -->
    <div v-if="$slots.footer" class="glass-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.glass-card {
  position: relative;
  overflow: hidden;
  background: var(--color-white-60);
  border: 1px solid var(--color-slate-200-60);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 24px;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);

  /* 阴影变量 */
  &--shadow-soft {
    box-shadow: var(--shadow-soft);
  }

  &--shadow-elevated {
    box-shadow: var(--shadow-elevated);
  }

  &--shadow-floating {
    box-shadow: var(--shadow-floating);
  }

  /* 圆角变量 */
  &--rounded-sm {
    border-radius: 8px;
  }

  &--rounded-md {
    border-radius: 12px;
  }

  &--rounded-lg {
    border-radius: 16px;
  }

  &--rounded-xl {
    border-radius: 20px;
  }

  /* 无边框模式 */
  &--no-border {
    border: none;
  }

  /* 交互效果 */
  &--hoverable {
    cursor: pointer;

    &:hover {
      background: var(--color-white-80);
      border-color: var(--color-slate-300-80);
      box-shadow: var(--shadow-elevated);
      transform: translateY(-4px);
    }

    &:active {
      transform: translateY(-2px);
    }
  }

  /* 渐变背景模式 */
  &--gradient {
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.05) 0%,
      rgba(168, 85, 247, 0.05) 100%
    ), var(--color-white-60);
  }

  /* 背景光晕效果(仅在hoverable时) */
  &__shine {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 100%
    );
    pointer-events: none;
    opacity: 0;
    transition: opacity 300ms;
  }

  &--hoverable:hover &__shine {
    opacity: 1;
  }

  /* 卡片头部 */
  &__header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.4);
  }

  &__icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #3b82f6 0%, #a855f7 100%);
    color: white;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &__titles {
    flex: 1;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    color: var(--color-text-h3);
    margin: 0 0 4px 0;
    line-height: 1.3;
  }

  &__subtitle {
    font-size: 13px;
    color: var(--color-text-tertiary);
    margin: 0;
  }

  /* 卡片内容 */
  &__content {
    color: var(--color-text-body);
    line-height: 1.6;
    font-size: 14px;

    /* 内容区域文本层次 */
    :deep(h4) {
      color: var(--color-text-h3);
      font-weight: 600;
      margin: 12px 0 8px;
    }

    :deep(p) {
      margin: 0 0 12px 0;
    }

    :deep(ul),
    :deep(ol) {
      margin: 8px 0 8px 20px;

      li {
        margin-bottom: 6px;
      }
    }
  }

  /* 卡片底部 */
  &__footer {
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(226, 232, 240, 0.4);
  }
}

/* 深色模式适配 */
:deep(.dark) {
  .glass-card {
    background: var(--color-white-60);
    border-color: rgba(71, 85, 105, 0.6);
    color: var(--color-text-body);

    &--hoverable:hover {
      background: var(--color-white-80);
      border-color: rgba(100, 116, 139, 0.8);
    }

    &__title {
      color: var(--color-text-h2);
    }

    &__subtitle,
    &__content {
      color: var(--color-text-secondary);
    }
  }
}

/* 高对比度模式 */
@media (prefers-contrast: more) {
  .glass-card {
    border-width: 2px;
  }
}
</style>
```

### GlassButton 组件

**文件**: `src/components/GlassButton/index.vue`

```vue
<script setup lang="ts">
import { computed } from 'vue';

type ButtonType = 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' | 'warning';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  type?: ButtonType;
  size?: ButtonSize;
  icon?: any;
  disabled?: boolean;
  loading?: boolean;
  round?: boolean;
  plain?: boolean;
  text?: boolean;
  block?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  round: false,
  plain: false,
  text: false,
  block: false
});

const typeClass = computed(() => `glass-button--${props.type}`);
const sizeClass = computed(() => `glass-button--${props.size}`);
</script>

<template>
  <button
    :class="[
      'glass-button',
      typeClass,
      sizeClass,
      { 'glass-button--disabled': disabled || loading },
      { 'glass-button--loading': loading },
      { 'glass-button--round': round },
      { 'glass-button--block': block }
    ]"
    :disabled="disabled || loading"
  >
    <span class="glass-button__content">
      <component v-if="icon" :is="icon" class="glass-button__icon" />
      <span class="glass-button__text">
        <slot />
      </span>
      <span v-if="loading" class="glass-button__loader">
        <svg class="glass-button__spinner" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke-width="3" />
        </svg>
      </span>
    </span>
  </button>
</template>

<style lang="scss" scoped>
.glass-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  white-space: nowrap;

  /* 发光效果 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:not(.glass-button--disabled):hover::before {
    transform: translateX(100%);
  }

  /* 内容层 */
  &__content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    z-index: 1;
  }

  &__icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  &__text {
    flex: 0 1 auto;
  }

  &__loader {
    position: absolute;
    width: 16px;
    height: 16px;
  }

  &__spinner {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    stroke-linecap: round;
    animation: spin 1s linear infinite;
  }

  /* 大小变量 */
  &--xs {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 8px;
  }

  &--sm {
    padding: 8px 16px;
    font-size: 13px;
    border-radius: 10px;
  }

  &--md {
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 12px;
  }

  &--lg {
    padding: 12px 24px;
    font-size: 15px;
    border-radius: 14px;
  }

  &--xl {
    padding: 14px 28px;
    font-size: 16px;
    border-radius: 16px;
  }

  /* 圆形按钮 */
  &--round {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 0;

    &.glass-button--lg {
      width: 48px;
      height: 48px;
    }

    &.glass-button--sm {
      width: 32px;
      height: 32px;
    }
  }

  /* 通栏按钮 */
  &--block {
    display: flex;
    width: 100%;
  }

  /* ===== 按钮类型 ===== */

  /* 主按钮 */
  &--primary {
    background: linear-gradient(135deg, #3b82f6 0%, #a855f7 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

    &:not(.glass-button--disabled):hover {
      box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
      transform: translateY(-2px);
    }

    &:not(.glass-button--disabled):active {
      transform: translateY(0);
    }
  }

  /* 次级按钮 */
  &--secondary {
    background: var(--color-white-60);
    border: 1px solid var(--color-slate-200-60);
    color: var(--color-text-body);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    &:not(.glass-button--disabled):hover {
      background: var(--color-white-80);
      border-color: var(--color-slate-300-80);
      box-shadow: var(--shadow-elevated);
      transform: translateY(-2px);
    }
  }

  /* 幽灵按钮 */
  &--ghost {
    background: transparent;
    border: 1px solid currentColor;
    color: var(--color-text-body);

    &:not(.glass-button--disabled):hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  /* 危险按钮 */
  &--danger {
    background: linear-gradient(135deg, #ef4444 0%, #ec4899 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);

    &:not(.glass-button--disabled):hover {
      box-shadow: 0 8px 24px rgba(239, 68, 68, 0.4);
      transform: translateY(-2px);
    }
  }

  /* 成功按钮 */
  &--success {
    background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);

    &:not(.glass-button--disabled):hover {
      box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
      transform: translateY(-2px);
    }
  }

  /* 警告按钮 */
  &--warning {
    background: linear-gradient(135deg, #f59e0b 0%, #f97316 100%);
    color: white;
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);

    &:not(.glass-button--disabled):hover {
      box-shadow: 0 8px 24px rgba(245, 158, 11, 0.4);
      transform: translateY(-2px);
    }
  }

  /* 禁用状态 */
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  /* 加载状态 */
  &--loading {
    &:not(.glass-button--disabled) {
      opacity: 0.8;
    }

    .glass-button__text {
      opacity: 0;
      margin-right: -8px;
    }
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* 深色模式 */
:deep(.dark) {
  .glass-button--secondary {
    background: rgba(30, 41, 59, 0.6);
    border-color: rgba(71, 85, 105, 0.6);
    color: var(--color-text-secondary);

    &:not(.glass-button--disabled):hover {
      background: rgba(30, 41, 59, 0.8);
      border-color: rgba(100, 116, 139, 0.8);
    }
  }

  .glass-button--ghost {
    color: var(--color-text-h2);

    &:not(.glass-button--disabled):hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
}

/* 高对比度模式 */
@media (prefers-contrast: more) {
  .glass-button {
    border: 2px solid;

    &--secondary {
      border-color: var(--color-slate-300-80);
    }
  }
}

/* 焦点样式(可访问性) */
.glass-button:focus-visible {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>
```

---

## 第三部分：集成指南

### 1. 在Vue组件中使用

```vue
<template>
  <!-- 使用GlassCard -->
  <GlassCard title="卡片标题" icon="IconComponent" hoverable gradient>
    <p>这是卡片内容</p>
    <template #footer>
      <GlassButton type="primary">确定</GlassButton>
      <GlassButton type="secondary">取消</GlassButton>
    </template>
  </GlassCard>

  <!-- 使用按钮组合 -->
  <div class="flex gap-3">
    <GlassButton type="primary" size="lg" icon="SaveIcon">保存</GlassButton>
    <GlassButton type="secondary">取消</GlassButton>
    <GlassButton type="danger">删除</GlassButton>
  </div>

  <!-- 使用glass工具类 -->
  <div class="glass-refined hover-glass-lift p-6">
    <h3 class="text-gradient-primary">现代化设计</h3>
    <p>使用Tailwind CSS工具类快速构建</p>
  </div>
</template>

<script setup lang="ts">
import GlassCard from '@/components/GlassCard/index.vue';
import GlassButton from '@/components/GlassButton/index.vue';
import SaveIcon from '~icons/ri/save-line';
</script>
```

### 2. 改造现有Element Plus卡片

```vue
<!-- 原代码 -->
<el-card shadow="never" class="mb-2">
  <template #header>
    <div class="card-header">标题</div>
  </template>
  内容
</el-card>

<!-- 改造后 -->
<el-card shadow="never" class="glass-refined mb-2 hover-glass-lift">
  <template #header>
    <div class="card-header text-gradient-primary">标题</div>
  </template>
  内容
</el-card>
```

### 3. 创建Custom Element Plus主题覆盖

```scss
/* src/style/element-plus.scss 中添加 */

/* 玻璃拟态化El-Card */
.el-card {
  &.glass-refined {
    background: var(--color-white-60);
    border: 1px solid var(--color-slate-200-60);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    &:hover {
      background: var(--color-white-80);
      border-color: var(--color-slate-300-80);
      box-shadow: var(--shadow-elevated);
    }
  }
}

/* 玻璃拟态化按钮 */
.el-button {
  &.glass-primary {
    @apply bg-gradient-to-r from-blue-500 to-purple-500 text-white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);

    &:hover {
      box-shadow: 0 8px 24px rgba(59, 130, 246, 0.4);
      transform: translateY(-2px);
    }
  }
}
```

---

## 测试清单

- [ ] 所有玻璃拟态组件在Chrome中正常显示
- [ ] 所有玻璃拟态组件在Firefox中正常显示
- [ ] 所有玻璃拟态组件在Safari中正常显示
- [ ] 深色模式下颜色对比度达到WCAG AA标准
- [ ] 浅色模式下颜色对比度达到WCAG AA标准
- [ ] 浮动悬浮效果流畅(fps > 50)
- [ ] 键盘导航完整
- [ ] 屏幕阅读器可访问
- [ ] 响应式设计在所有断点正常
- [ ] 不支持backdrop-filter的浏览器降级方案可用

---

## 性能优化建议

1. **CSS合并**：合并所有样式文件，减少HTTP请求
2. **关键CSS内联**：将关键样式内联到HTML head
3. **GPU加速**：使用`will-change`提示浏览器
4. **媒体查询优化**：避免过度嵌套

---

## 常见问题

**Q: 玻璃拟态效果在移动设备上不显示？**
A: 某些移动浏览器不完全支持backdrop-filter。使用@supports检查并提供降级方案。

**Q: 性能问题？**
A: 确保没有过多的blur值，合理使用会降低性能。

**Q: 如何适配旧浏览器？**
A: 使用@supports规则检查特性支持，使用solid背景作为降级方案。

---

**最后更新**: 2024年
**版本**: 1.0

