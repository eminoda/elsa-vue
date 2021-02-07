<template>
  <div class="demo-wrap">
    <div class="view-wrap">
      <slot name="source"></slot>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'demo-template'
}
</script>

<style>
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
pre {
  margin: 0;
  font-size: 14px;
}
</style>
