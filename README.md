# v-header
***
> 移动端 Vue.js header 组件

***
## [Demo](https://alexlees.github.io)


## Install

``` bash
# install dependencies
npm i v-header -s
yarn add v-header
```
***
## Usage
```javascript
// 全局安装
import Vue from 'vue'
import Header from 'v-header'

Vue.use(Header) // 全局安装 默认组件名称 v-header

// 局部安装
import { Header } from 'v-header'

export default {
  name: 'App',
  components: {
    [Header.name]: Header // 局部安装 推荐使用该形式 使用组件默认名称
  }
}
```

```html
<!-- app.vue -->
<template>
  <div id="app">
    <v-header title="这是标题"></v-header> <!-- 将组件放在顶部 -->
    <someThingYourComponents/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

```
***
## tips

* 组件未实现fixed 功能需要你自行实现
* 组件左侧slot在back=true时 显示后退icon 并且附带路由功能(在你安装vue-router的前提下)

> 实现思路

0. 使用flex布局 将组件置于顶部 其余部分flex: 1
2. 使用fixed布局 覆盖组件css

***

## props
| name | desc | type | default | required |
| :--: | :--: | ---: | :-----: | :------: |
| title | 组件标题(可用slot自定义) | String | '' | false |
| back | 点击left是否使用默认操作 | Boolean | true | false |

***

## slot
| name | desc | info |
| :--: | :--: | ---: |
| default | title插槽 | 不传递会使用组件 title |
| left | left插槽 | 当back(props)为true时默认显示后退icon |
| right | right插槽 | null |

***

## Event
| name | desc | param |
| :--: | :--: | ---: |
| click-left | 点击left触发(仅在back为false时触发) | null |
| click-right | 点击right触发 | null |
| click-title | 点击right触发 | null |
***

## TODO

***

## [Github](https://github.com/alexlees)
