<template>
  <header :class="$style.header">
    <div :class="[$style.slot, $style.flexCenter, $style.active]" @click="shuldBack">
      <slot name="left">
        <i v-if="back" class="iconfont icon-back"></i>
      </slot>
    </div>
    <div :class="[$style.title, $style.flexCenter, $style.active]" @click="$emit('click-title')">
      <slot>{{title}}</slot>
    </div>
    <div :class="[$style.slot, $style.flexCenter, $style.active]" @click="$emit('click-right')">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>

export default {
  name: 'v-header',
  props: {
    title: {
      type: String
    },
    back: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    shuldBack () {
      if (this.back) {
        const back = this.$router ? this.$router.back : () => {
          console.error('v-header')
          console.error('依赖vue-router')
        }
        back()
      } else {
        this.$emit('click-left')
      }
    }
  }
}
</script>
<style>
@import '//at.alicdn.com/t/font_735231_i2z58znomxn.css';
</style>

<style module>
*{
  margin: 0;
  padding: 0;
}
.header{
  width: 100%;
  height: 46px;
  background-color: #ffffff;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: stretch;
  align-items: stretch;
  box-shadow: 0 0 15px 0 #bbb;

  position: relative;
  z-index: 1;
}
.slot{
  min-width: 46px;
}
.title{
  flex: 1;
}
.flexCenter{
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.active:active{
  background-color: #eeeeee;
}
.active{
  cursor: pointer;
}
</style>
