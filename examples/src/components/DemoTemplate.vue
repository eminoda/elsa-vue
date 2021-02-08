<template>
  <div class="demo-wrap">
    <div class="view-wrap">
      <slot name="source"></slot>
    </div>
    <div>
      <div class="code-wrap" v-if="showCode">
        <slot />
      </div>
      <div class="action-wrap" @click="showCode = !showCode">{{ showCode ? '隐藏代码' : '显示代码' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-template',
  data() {
    return {
      showCode: false
    }
  }
}
</script>

<style lang="less" scoped>
.demo-wrap {
  border: 1px solid #ebebeb;
  margin: 2px;
  border-radius: 3px;
  transition: 0.2s;
  font-size: 0;
  &:hover {
    box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%), 0 2px 4px 0 rgb(232 237 250 / 50%);
  }
}
.view-wrap {
  padding: 24px;
  font-size: 16px;
}
.code-wrap {
  font-size: 14px;
  padding: 30px;
  padding-top: 0;
  pre {
    margin: 0;
    border-radius: 10px;
  }
}
.action-wrap {
  font-size: 16px;
  padding: 10px;
  border-top: 1px solid #eaeefb;
  height: 44px;
  box-sizing: border-box;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  color: #d3dce6;
  cursor: pointer;
  position: relative;
  &:hover {
    color: #409eff;
    transition: 2s;
  }
}
</style>
