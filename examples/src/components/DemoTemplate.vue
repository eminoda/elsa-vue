<template>
  <div class="demo-wrap">
    <div class="view-wrap">
      <slot name="source"></slot>
    </div>
    <div class="code-wrap">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-template'
}
</script>

<style lang="less" scoped>
.demo-wrap {
  border: 1px solid #ebebeb;
  margin: 2px;
  border-radius: 3px;
  transition: 0.2s;
  font-size: 0;
}
.view-wrap {
  padding: 24px;
  font-size: 16px;
}
.code-wrap {
  font-size: 14px;
  pre {
    margin: 0;
  }
}
</style>
