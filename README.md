# 项目代码规范

## node 和 pnpm 统一版本

- node 16.20.0
- pnpm 7.31.0
- pnpm-lock.yaml 不可删除

## css 规范

- 非必要情况，不使用 !important
- scss 嵌套层级尽量不要超过 4 层
- 不要增加全局样式

## vue 规范

- Component name 大写开头
- 一个 vue 文件的长度尽量不要超过 1 千行
- 请阅读 vue3 风格指南
- 如果 vue 文件中，在 script 标签上设置了 setup, 要加上定义组件名，例如如下：

```html
// 加上 定义组件名
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'HomeIndex',
  });
</script>
// 在script标签上设置了setup的情况
<script lang="ts" setup></script>
```

- vue 文件一般模板顺序建议

```html
<!--script 排第一-->
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'HomeIndex',
  });
</script>
<!--setup -->
<script lang="ts" setup></script>
<!--html-->
<template>
  <div></div>
</template>
<!--style-->
<style></style>
```

## 文件夹和文件命名规范
- 文件夹小写开头
- ts js 文件小写开头
- vue 文件大写开头

## 代码格式化使用 prettire 工具，统一代码风格