<script setup lang="ts">
import ComButton  from "@/components/comButton/comButton.vue";
const handerClick = () => {
  console.log(1234);
}
</script>

<template>
  <com-button title="登录" size="sm" disabled type="success" @click="handerClick"></com-button>
</template>

<style scoped lang="scss"></style>
