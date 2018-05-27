# v-header
***
> A Vue.js header component.

> 移动端 Vue.js header 组件

***
## Demo


## Install

``` bash
# install dependencies
npm i v-header -s
yarn add v-header
```
***
## Usage
```javascript
// main.js
// global init component
import Vue from 'vue'
import VHeader from 'v-header'

Vue.use(VHeader) // 全局安装 默认组件名称 v-backup

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
// local init component
// app.vue
import { VHeader } from 'v-header'

export default {
  name: 'App',
  components: {
    [VHeader.name]: VHeader // 局部安装 推荐使用该形式 使用组件默认名称
  }
}
```

```html
<!-- app.vue -->
<template>
  <div id="app">
    <v-header title="标题如果很长很长会出现点点点哟" fixed right-icon="close"></v-header> <!-- 将组件放在顶部 -->
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

* 组件默认left插槽为'back' icon 点击触发回到上一页， 需要自定义点击反应请显示传递back为false并监听leftClick
* 组件可选icon如下 back | close leftIcon必须传递以上出现的icon rightIcon可以传递''

***

## props
| name | desc | type | default | required |
| :--: | :--: | ---: | :-----: | :------: |
| title | 组件标题(可用slot自定义) | String | '' | false |
| fixed | 组件是否固定在顶部 | Boolean | false | false |
| back | 点击left是否使用默认操作 | Boolean | false | false |
| leftIcon | leftIcon | String | 'back' | false |
| rightIcon | rightIcon | String | '' | false |

***

## slot
| name | desc | info |
| :--: | :--: | ---: |
| default | title插槽 | 不传递会使用组件 title |
| left | left插槽 | 不传递会使用组件默认leftIcon |
| right | right插槽 | 不传递会使用组件默认rightIcon |

***

## Event
| name | desc | param |
| :--: | :--: | ---: |
| leftClick | 点击left触发(仅在back为false时触发) | null |
| rightClick | 点击right触发 | null |

***

## TODO
- [  ] 更多内置icon

***

## [Github](https://github.com/alexlees)
