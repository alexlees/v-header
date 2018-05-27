<template>
  <div :class="$style.comm">
    <header :class="{[$style.header]: true, [$style.fixed]: fixed, [$style.comm]: true}">
      <div :class="$style.left" @click="click">
        <slot name="left">
          <i :class="[$style.iconfont, $style.color]" v-html="leftIconUnicode"/>
        </slot>
      </div>
      <div :class="$style.title">
        <slot>{{title}}</slot>
      </div>
      <div :class="$style.right" @click="$emit('rightClick')">
        <slot name="right">
          <i :class="[$style.iconfont, $style.color]" v-html="rightIconUnicode"/>
        </slot>
      </div>
    </header>
    <div v-if="fixed" style="height: 46px;"></div>
  </div>
</template>

<script>
const ICON = {
  'back': '&#xe697;',
  'close': '&#xe69a;'
}
export default {
  name: 'v-header',
  props: {
    title: {
      type: String,
      required: false
    },
    fixed: {
      type: Boolean,
      required: false
    },
    back: {
      type: Boolean,
      default: true
    },
    leftIcon: {
      validator (v) {
        return Object.keys(ICON).indexOf(v) !== -1
      },
      default: 'back'
    },
    rightIcon: {
      validator (v) {
        if (v === '') {
          return true
        }
        return Object.keys(ICON).indexOf(v) !== -1
      },
      default: ''
    }
  },
  methods: {
    click (e) {
      if (this.back) {
        if (this.$router) {
          this.$router.go(-1)
        } else {
          window.history.back()
        }
      } else {
        this.$emit('clickLeft')
      }
    }
  },
  computed: {
    leftIconUnicode () {
      return ICON[this.leftIcon]
    },
    rightIconUnicode () {
      return ICON[this.rightIcon]
    }
  }
}
</script>

<style module lang="postcss">
@import url(./font/icon.css);
.comm{
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3c3c3c;
  touch-action: manipulation;
  text-size-adjust: none;
  -webkit-text-size-adjust: none;
  user-select: none;
  box-sizing: border-box;
}
.header{
  position: relative;
  width: 100%;
  height: 46px;
  background-color: #ffffff;

  text-align: center;

  display: flex;
  flex-direction: row;
  line-height: 46px;
}
.header::after{
  display: block;
  content: '';
  position: absolute;
  bottom: 0;
  width: 200%;
  height: 1px;
  background-color: #cccccc;
  transform: scale(0.5, 0.5);
  transform-origin: 0 0;
}
.color{
  color: #3388ff;
  font-size: 24px;
}
.fixed{
  position: fixed;
  top: 0;
}
.title{
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 10px;
}
.left{
  width: 40px;
  height: 100%;
}
.right{
  width: 40px;
  height: 100%;
}
</style>
