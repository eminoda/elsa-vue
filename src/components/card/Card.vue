<template>
  <div class="card-wrap" :class="bordered ? 'border-box' : ''">
    <div v-if="title" class="title" :class="bordered ? 'border-title' : ''">
      {{ title }}
      <span class="sub-title" v-if="subTitle">{{ subTitle }}</span>
    </div>
    <div class="inner-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { prefix } from '../config';

export default {
  name: `${prefix}-card`,
  props: {
    title: String,
    subTitle: String,
    bordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.border-box {
  border: 1px solid #dcdfe6;
  border-radius: 10px;
}
.card-wrap {
  .border-title {
    border-bottom: 1px solid #dcdfe6;
  }
  .title {
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: left;
  }
  .sub-title {
    font-size: 16px;
    font-weight: normal;
    color: #b4bccc;
    margin-left: 10px;
  }
  .inner-box {
    padding: 20px;
  }
}
</style>
