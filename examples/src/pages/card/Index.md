## elsa-card 卡片

提供一个带边框盒子，用来包裹待展示内容。

### 基本用法

::: demo 通过 **\<slot>** 定义需要包裹的模板

```html
<template>
  <elsa-card title="标题" subTitle="小标题" bordered>
    <div>我被放在了 card 中</div>
  </elsa-card>
</template>
```

:::

## API

### 属性

| 参数     | 说明         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| title    | 标题         | String  |        |        |
| subTitle | 子标题       | String  |        |        |
| bordered | 是否展示边框 | Boolean |        | true   |
