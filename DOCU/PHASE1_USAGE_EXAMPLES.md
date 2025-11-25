# 🎨 Phase 1 玻璃拟态工具类使用示例

## 快速开始

Phase 1已成功实施，现在你可以使用以下玻璃拟态工具类来美化你的UI组件。

---

## 📦 基础玻璃拟态容器

### 1. 精致玻璃效果 (.glass-refined)

**特点**: 60%透明度 + 8px模糊 + 柔和阴影

```vue
<template>
  <div class="glass-refined p-6">
    <h3 class="text-lg font-semibold mb-2">精致玻璃容器</h3>
    <p class="text-gray-600">适用于标准卡片、表单容器</p>
  </div>
</template>
```

**适用场景**:

- ✅ 标准数据卡片
- ✅ 表单容器
- ✅ 统计面板
- ✅ 列表项

---

### 2. 提升玻璃效果 (.glass-elevated)

**特点**: 80%透明度 + 12px模糊 + 提升阴影

```vue
<template>
  <div class="glass-elevated p-8">
    <h3 class="text-xl font-bold mb-3">提升玻璃容器</h3>
    <p class="text-gray-700">适用于模态框、重要通知、浮动面板</p>
  </div>
</template>
```

**适用场景**:

- ✅ 模态框/对话框
- ✅ Popover弹出框
- ✅ Dropdown下拉菜单
- ✅ 重要通知卡片

---

### 3. 浮动玻璃效果 (.glass-floating)

**特点**: 40%透明度 + 16px模糊 + 浮动阴影

```vue
<template>
  <div class="glass-floating p-10">
    <h3 class="text-2xl font-bold mb-4">浮动玻璃容器</h3>
    <p class="text-gray-500">适用于背景遮罩、Hero区域</p>
  </div>
</template>
```

**适用场景**:

- ✅ Hero Banner
- ✅ 背景遮罩
- ✅ 全屏引导页
- ✅ 登录/注册框

---

## 🎭 交互效果组合

### 1. 悬浮上移效果 (.hover-glass-lift)

```vue
<template>
  <div class="glass-refined hover-glass-lift p-6">
    <h3 class="text-lg font-semibold">悬停时会上移</h3>
    <p class="text-gray-600">鼠标悬停查看效果</p>
  </div>
</template>
```

**效果**:

- 🔼 上移 4px (`translateY(-4px)`)
- ✨ 透明度提升 60% → 80%
- 🌟 阴影升级 (soft → elevated)
- ⏱️ 300ms 过渡动画

**适用场景**:

- ✅ 可点击卡片
- ✅ 功能模块入口
- ✅ 导航按钮

---

### 2. 缩放动画 (.hover-glass-subtle)

```vue
<template>
  <button class="glass-refined hover-glass-subtle px-6 py-3">
    <span class="text-blue-600 font-medium">缩放按钮</span>
  </button>
</template>
```

**效果**:

- 📐 缩放 1.05倍 (`scale(1.05)`)
- ✨ 透明度提升 60% → 70%
- ⏱️ 默认过渡动画

**适用场景**:

- ✅ CTA按钮
- ✅ Icon按钮
- ✅ 标签Tag

---

## 🌈 渐变系统

### 1. 渐变文本

```vue
<template>
  <div class="space-y-4">
    <h1 class="text-gradient-primary text-4xl font-bold">蓝紫渐变标题</h1>

    <h2 class="text-gradient-success text-3xl font-bold">绿色渐变标题</h2>

    <h3 class="text-gradient-warning text-2xl font-bold">橙黄渐变标题</h3>

    <p class="text-gradient-error text-xl font-semibold">粉红渐变文字</p>
  </div>
</template>
```

**可用类**:

- `.text-gradient-primary` - 蓝色 → 紫色
- `.text-gradient-success` - 绿色 → 青色
- `.text-gradient-warning` - 黄色 → 橙色
- `.text-gradient-error` - 红色 → 粉色

---

### 2. 渐变背景

```vue
<template>
  <div class="space-y-4">
    <div class="bg-gradient-glass-primary p-6 rounded-2xl">
      <p class="text-blue-900">蓝色渐变背景</p>
    </div>

    <div class="bg-gradient-glass-success p-6 rounded-2xl">
      <p class="text-green-900">绿色渐变背景</p>
    </div>

    <div class="bg-gradient-glass-warning p-6 rounded-2xl">
      <p class="text-orange-900">橙色渐变背景</p>
    </div>
  </div>
</template>
```

---

## 🎯 阴影系统

```vue
<template>
  <div class="grid grid-cols-2 gap-4">
    <!-- 柔和阴影 -->
    <div class="shadow-soft bg-white p-6 rounded-xl">
      <p class="text-gray-700">柔和阴影 (2层)</p>
    </div>

    <!-- 提升阴影 -->
    <div class="shadow-elevated bg-white p-6 rounded-xl">
      <p class="text-gray-700">提升阴影 (3层)</p>
    </div>

    <!-- 浮动阴影 -->
    <div class="shadow-floating bg-white p-6 rounded-xl">
      <p class="text-gray-700">浮动阴影 (3层)</p>
    </div>

    <!-- 光晕阴影 -->
    <div class="shadow-glow bg-white p-6 rounded-xl">
      <p class="text-gray-700">光晕阴影 (发光)</p>
    </div>
  </div>
</template>
```

**可用类**:

- `.shadow-soft` - 最小阴影 (2-8px)
- `.shadow-elevated` - 中等阴影 (4-24px)
- `.shadow-floating` - 大型阴影 (8-48px)
- `.shadow-glow` - 发光效果 (0-24px)
- `.shadow-inset` - 内嵌阴影

---

## 🌓 深色模式适配

所有玻璃拟态类自动支持深色模式：

```vue
<template>
  <div class="glass-refined p-6">
    <!-- 亮色模式: bg-white/60 -->
    <!-- 深色模式: bg-slate-900/60 -->
    <h3>自动适配深色模式</h3>
  </div>
</template>
```

**深色模式变化**:

- 背景色: `white` → `slate-900`
- 边框色: `slate-200` → `slate-700`
- 文本色: 自动变为 `slate-100`
- 阴影: 对比度增强

---

## 🎨 组合使用示例

### 示例1: 统计卡片

```vue
<template>
  <div class="glass-refined hover-glass-lift p-6 space-y-3">
    <div class="flex items-center justify-between">
      <div class="w-12 h-12 bg-gradient-glass-primary rounded-xl flex-c">
        <svg class="w-6 h-6 text-blue-600" fill="currentColor">
          <!-- Icon SVG -->
        </svg>
      </div>
      <span class="text-green-500 text-sm">+12%</span>
    </div>

    <div>
      <p class="text-sm text-gray-500">总销售额</p>
      <h3 class="text-2xl font-bold text-gradient-primary">¥128,456</h3>
    </div>
  </div>
</template>
```

---

### 示例2: 功能模块入口

```vue
<template>
  <div
    class="glass-refined hover-glass-lift cursor-pointer p-8"
    @click="navigateTo('/dashboard')"
  >
    <div class="space-y-4">
      <div class="w-16 h-16 bg-gradient-glass-success rounded-2xl flex-c">
        <svg class="w-8 h-8 text-green-600" />
      </div>

      <div>
        <h3 class="text-xl font-bold text-gray-900">数据分析</h3>
        <p class="text-sm text-gray-500 mt-2">查看实时业务数据和趋势分析</p>
      </div>

      <div class="flex items-center text-blue-600">
        <span class="text-sm font-medium">立即查看</span>
        <svg class="w-4 h-4 ml-1" />
      </div>
    </div>
  </div>
</template>
```

---

### 示例3: 带焦点环的按钮 (可访问性)

```vue
<template>
  <button
    class="glass-elevated hover-glass-subtle focus-ring px-6 py-3 rounded-xl"
  >
    <span class="text-gradient-primary font-semibold"> 提交表单 </span>
  </button>
</template>
```

**可访问性增强**:

- ✅ `.focus-ring` - Tab键聚焦时显示蓝色光环
- ✅ WCAG 2.1 AA 标准
- ✅ 4px ring宽度，20%透明度

---

### 示例4: 复杂组合

```vue
<template>
  <div class="glass-floating p-12 space-y-6">
    <!-- Hero区域 -->
    <div class="text-center space-y-4">
      <h1 class="text-gradient-primary text-5xl font-bold">
        欢迎使用 Pure Admin
      </h1>
      <p class="text-xl text-gray-600">现代化的后台管理系统</p>
    </div>

    <!-- 按钮组 -->
    <div class="flex justify-center space-x-4">
      <button
        class="glass-elevated hover-glass-subtle focus-ring px-8 py-4 rounded-2xl"
      >
        <span class="text-gradient-primary text-lg font-semibold">
          立即开始
        </span>
      </button>

      <button
        class="glass-refined hover-glass-lift focus-ring px-8 py-4 rounded-2xl"
      >
        <span class="text-gray-700 text-lg font-medium"> 了解更多 </span>
      </button>
    </div>
  </div>
</template>
```

---

## 🛠️ 实用工具类

### 透明度背景

```vue
<div class="bg-white-40">40% 透明度白色</div>
<div class="bg-white-60">60% 透明度白色</div>
<div class="bg-white-80">80% 透明度白色</div>

<div class="bg-black-40">40% 透明度黑色</div>
<div class="bg-black-60">60% 透明度黑色</div>
```

---

### 边框透明度

```vue
<div class="border border-glass-light">浅色边框 (40%)</div>
<div class="border border-glass-medium">中等边框 (60%)</div>
<div class="border border-glass-dark">深色边框 (80%)</div>
```

---

### 毛玻璃模糊

```vue
<div class="backdrop-blur-xs">超小模糊 (4px)</div>
<div class="backdrop-blur-sm">小模糊 (8px)</div>
<div class="backdrop-blur-md">中等模糊 (12px)</div>
<div class="backdrop-blur-lg">大模糊 (16px)</div>
```

---

### 过渡动画

```vue
<div class="transition-glass-fast">快速过渡 (200ms)</div>
<div class="transition-glass">标准过渡 (300ms)</div>
<div class="transition-glass-slow">慢速过渡 (500ms)</div>
```

---

## 📱 响应式示例

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="item in items"
      :key="item.id"
      class="glass-refined hover-glass-lift p-6"
    >
      <h3 class="text-lg font-semibold">{{ item.title }}</h3>
      <p class="text-gray-600 mt-2">{{ item.description }}</p>
    </div>
  </div>
</template>
```

---

## 🎯 最佳实践

### ✅ 推荐

```vue
<!-- 1. 组合使用玻璃容器 + 交互效果 -->
<div class="glass-refined hover-glass-lift">...</div>

<!-- 2. 使用渐变文本提升视觉层次 -->
<h1 class="text-gradient-primary">...</h1>

<!-- 3. 添加焦点环提升可访问性 -->
<button class="focus-ring">...</button>

<!-- 4. 使用过渡动画平滑切换 -->
<div class="transition-glass">...</div>
```

---

### ❌ 避免

```vue
<!-- 1. 不要过度叠加多个玻璃效果 -->
<div class="glass-refined glass-elevated glass-floating">❌</div>

<!-- 2. 不要在玻璃容器内再嵌套玻璃容器 -->
<div class="glass-refined">
  <div class="glass-refined">❌</div>
</div>

<!-- 3. 避免在纯色背景上使用 (无法展现毛玻璃效果) -->
<div class="bg-white">
  <div class="glass-refined">❌ (背景是纯白色，看不出效果)</div>
</div>
```

---

## 🎨 CSS变量使用

你也可以直接使用CSS变量：

```vue
<template>
  <div
    class="p-6 rounded-2xl"
    :style="{
      background: 'var(--glass-container-bg)',
      borderColor: 'var(--glass-container-border)',
      backdropFilter: 'blur(var(--glass-blur-md))',
      boxShadow: 'var(--shadow-elevated)',
      borderRadius: 'var(--radius-lg)',
      transition: 'all var(--transition-normal) var(--ease-out)'
    }"
  >
    使用CSS变量自定义样式
  </div>
</template>
```

---

## 🌟 完整页面示例

```vue
<script setup lang="ts">
import { ref } from "vue";

const stats = ref([
  { label: "总用户", value: "12,456", trend: "+12%", icon: "user" },
  { label: "总订单", value: "8,234", trend: "+8%", icon: "order" },
  { label: "总收入", value: "¥128k", trend: "+15%", icon: "money" },
  { label: "增长率", value: "32%", trend: "+5%", icon: "chart" }
]);
</script>

<template>
  <div class="p-8 space-y-8">
    <!-- 页面标题 -->
    <div class="glass-elevated p-8 space-y-2">
      <h1 class="text-gradient-primary text-4xl font-bold">数据仪表盘</h1>
      <p class="text-lg text-gray-600">实时业务数据概览</p>
    </div>

    <!-- 统计卡片网格 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="glass-refined hover-glass-lift p-6 space-y-3"
      >
        <div class="flex items-center justify-between">
          <div class="w-12 h-12 bg-gradient-glass-primary rounded-xl flex-c">
            <!-- Icon -->
          </div>
          <span class="text-green-500 text-sm font-medium">
            {{ stat.trend }}
          </span>
        </div>

        <div>
          <p class="text-sm text-gray-500">{{ stat.label }}</p>
          <h3 class="text-2xl font-bold text-gray-900">
            {{ stat.value }}
          </h3>
        </div>
      </div>
    </div>

    <!-- 操作按钮 -->
    <div class="flex space-x-4">
      <button
        class="glass-elevated hover-glass-subtle focus-ring px-6 py-3 rounded-xl"
      >
        <span class="text-gradient-primary font-semibold"> 查看详情 </span>
      </button>

      <button
        class="glass-refined hover-glass-lift focus-ring px-6 py-3 rounded-xl"
      >
        <span class="text-gray-700 font-medium"> 导出数据 </span>
      </button>
    </div>
  </div>
</template>
```

---

## 📊 性能优化建议

1. **合理使用模糊效果**
   - `backdrop-blur` 对性能有一定影响
   - 建议在静态容器或少量元素上使用
   - 避免在长列表的每个item上使用

2. **使用CSS变量**
   - 所有玻璃拟态效果都使用CSS变量定义
   - 可以在运行时动态调整
   - 主题切换时自动更新

3. **浏览器兼容性**
   - 已内置降级方案
   - 不支持`backdrop-filter`的浏览器会使用更高透明度
   - 所有现代浏览器(Chrome 76+, Safari 9+, Firefox 103+)都支持

---

## 🎉 总结

Phase 1提供了完整的玻璃拟态工具类体系：

- ✅ 3种基础玻璃容器
- ✅ 2种交互效果
- ✅ 4种渐变文本 + 3种渐变背景
- ✅ 5种阴影系统
- ✅ 完整的可访问性支持
- ✅ 深色模式自动适配

立即开始使用这些工具类，打造现代化的玻璃拟态UI！🚀
