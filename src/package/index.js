import VHeader from './VHeader.vue'

const Header = {
  install (Vue, option) {
    Vue.component(VHeader.name, VHeader)
  }
}

if (window && window.Vue) {
  window.Vue.use(Header)
}

export default Header
export {
  VHeader
}
