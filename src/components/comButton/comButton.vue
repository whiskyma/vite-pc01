<script setup lang="ts">
  // 泛型类型的赋值默认值
  export interface Props {
    type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'; //按钮类型
    size?: 'sm' | 'md' | 'lg'; //按钮大小
    title?: string; // 按钮文字
    labels?: string[];
    round?: boolean; // 按钮形状(圆形)
    disabled: boolean; //按钮禁用状态
  }

  // 设置props默认值(withDefault)
  const props = withDefaults(defineProps<Props>(), {
    type: 'default',
    size: 'md',
    labels: () => ['登录', '注册'],
    round: false, //默认是直边，不带50%的圆角
    disabled: false
  });
</script>

<template>
  <button
    class="button"
    :class="['button-' + props.type, 'button-' + props.size, props.round ? 'button-round' : '', props.disabled ? 'button-disabled' : '']"
  >
    {{ props.title }}
  </button>
</template>

<style scoped lang="scss">
  .button {
    border: 1px solid #ddd;
    min-width: 100px;
    min-height: 45px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 450;
    padding: 0 14px;
    transition: all 0.3s ease-in-out;
    color: #666;
    background-color: transparent;
    border: 1px solid #ddd;
    &.button-primary {
      color: #fff;
      border: none;
      background-color: #409eff;
      &:hover {
        background-color: #5195dc;
      }
    }
    &.button-success {
      color: #fff;
      border: none;
      background-color: #67c23a;
      &:hover {
        background-color: #4f8e2f;
      }
    }
    // 圆角
    &.button-round {
      border-radius: 25px;
    }
    // 按钮大小
    &.button-sm {
      min-width: 80px;
      min-height: 38px;
      font-size: 15px;
    }
    &.button-md {
      min-width: 200px;
    }
    &.button-lg {
      min-width: 300px;
      min-height: 55px;
      font-size: 18px;
    }
    // 按钮禁用
    &.button-disabled {
      cursor: no-drop;
      background-color: #ddd;
      &:hover {
        background-color: #ddd;
      }
    }
  }
</style>
