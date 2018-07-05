//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var script = {
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
    shuldBack: function shuldBack () {
      if (this.back) {
        var back = this.$router ? this.$router.back : function () {
          console.error('v-header');
          console.error('依赖vue-router');
        };
        back();
      } else {
        this.$emit('click-left');
      }
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("header", { class: _vm.$style.header }, [
    _c(
      "div",
      {
        class: [_vm.$style.slot, _vm.$style.flexCenter, _vm.$style.active],
        on: { click: _vm.shuldBack }
      },
      [
        _vm._t("left", [
          _vm.back ? _c("i", { staticClass: "iconfont icon-back" }) : _vm._e()
        ])
      ],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class: [_vm.$style.title, _vm.$style.flexCenter, _vm.$style.active],
        on: {
          click: function($event) {
            _vm.$emit("click-title");
          }
        }
      },
      [_vm._t("default", [_vm._v(_vm._s(_vm.title))])],
      2
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        class: [_vm.$style.slot, _vm.$style.flexCenter, _vm.$style.active],
        on: {
          click: function($event) {
            _vm.$emit("click-right");
          }
        }
      },
      [_vm._t("right")],
      2
    )
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-4f42155f_0", { source: "\n@import '//at.alicdn.com/t/font_735231_i2z58znomxn.css';\n", map: {"version":3,"sources":["D:\\VUE\\v-header/D:\\VUE\\v-header\\src\\index.vue"],"names":[],"mappings":";AA6CA,wDAAA","file":"index.vue","sourcesContent":["<template>\n  <header :class=\"$style.header\">\n    <div :class=\"[$style.slot, $style.flexCenter, $style.active]\" @click=\"shuldBack\">\n      <slot name=\"left\">\n        <i v-if=\"back\" class=\"iconfont icon-back\"></i>\n      </slot>\n    </div>\n    <div :class=\"[$style.title, $style.flexCenter, $style.active]\" @click=\"$emit('click-title')\">\n      <slot>{{title}}</slot>\n    </div>\n    <div :class=\"[$style.slot, $style.flexCenter, $style.active]\" @click=\"$emit('click-right')\">\n      <slot name=\"right\"></slot>\n    </div>\n  </header>\n</template>\n\n<script>\n\nexport default {\n  name: 'v-header',\n  props: {\n    title: {\n      type: String\n    },\n    back: {\n      type: Boolean,\n      default: true\n    }\n  },\n  methods: {\n    shuldBack () {\n      if (this.back) {\n        const back = this.$router ? this.$router.back : () => {\n          console.error('v-header')\n          console.error('依赖vue-router')\n        }\n        back()\n      } else {\n        this.$emit('click-left')\n      }\n    }\n  }\n}\n</script>\n<style>\n@import '//at.alicdn.com/t/font_735231_i2z58znomxn.css';\n</style>\n\n<style module>\n*{\n  margin: 0;\n  padding: 0;\n}\n.header{\n  width: 100%;\n  height: 46px;\n  background-color: #ffffff;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  box-shadow: 0 0 15px 0 #bbb;\n\n  position: relative;\n  z-index: 1;\n}\n.slot{\n  min-width: 46px;\n}\n.title{\n  flex: 1;\n}\n.flexCenter{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n.active:active{\n  background-color: #eeeeee;\n}\n.active{\n  cursor: pointer;\n}\n</style>\n"]}, media: undefined })
,inject("data-v-4f42155f_1", { source: "\n*{\n  margin: 0;\n  padding: 0;\n}\n.src-header-ztN-{\n  width: 100%;\n  height: 46px;\n  background-color: #ffffff;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  box-shadow: 0 0 15px 0 #bbb;\n\n  position: relative;\n  z-index: 1;\n}\n.src-slot-3zsj{\n  min-width: 46px;\n}\n.src-title-3Yw6{\n  flex: 1;\n}\n.src-flexCenter-3ilh{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n.src-active-3geg:active{\n  background-color: #eeeeee;\n}\n.src-active-3geg{\n  cursor: pointer;\n}\n", map: {"version":3,"sources":["D:\\VUE\\v-header/D:\\VUE\\v-header\\src\\index.vue"],"names":[],"mappings":";AAiDA;EACA,UAAA;EACA,WAAA;CACA;AACA;EACA,YAAA;EACA,aAAA;EACA,0BAAA;;EAEA,cAAA;EACA,oBAAA;EACA,4BAAA;EACA,uBAAA;EACA,qBAAA;EACA,4BAAA;;EAEA,mBAAA;EACA,WAAA;CACA;AACA;EACA,gBAAA;CACA;AACA;EACA,QAAA;CACA;AACA;EACA,cAAA;EACA,wBAAA;EACA,oBAAA;EACA,sBAAA;CACA;AACA;EACA,0BAAA;CACA;AACA;EACA,gBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n  <header :class=\"$style.header\">\n    <div :class=\"[$style.slot, $style.flexCenter, $style.active]\" @click=\"shuldBack\">\n      <slot name=\"left\">\n        <i v-if=\"back\" class=\"iconfont icon-back\"></i>\n      </slot>\n    </div>\n    <div :class=\"[$style.title, $style.flexCenter, $style.active]\" @click=\"$emit('click-title')\">\n      <slot>{{title}}</slot>\n    </div>\n    <div :class=\"[$style.slot, $style.flexCenter, $style.active]\" @click=\"$emit('click-right')\">\n      <slot name=\"right\"></slot>\n    </div>\n  </header>\n</template>\n\n<script>\n\nexport default {\n  name: 'v-header',\n  props: {\n    title: {\n      type: String\n    },\n    back: {\n      type: Boolean,\n      default: true\n    }\n  },\n  methods: {\n    shuldBack () {\n      if (this.back) {\n        const back = this.$router ? this.$router.back : () => {\n          console.error('v-header')\n          console.error('依赖vue-router')\n        }\n        back()\n      } else {\n        this.$emit('click-left')\n      }\n    }\n  }\n}\n</script>\n<style>\n@import '//at.alicdn.com/t/font_735231_i2z58znomxn.css';\n</style>\n\n<style module>\n*{\n  margin: 0;\n  padding: 0;\n}\n.header{\n  width: 100%;\n  height: 46px;\n  background-color: #ffffff;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: stretch;\n  box-shadow: 0 0 15px 0 #bbb;\n\n  position: relative;\n  z-index: 1;\n}\n.slot{\n  min-width: 46px;\n}\n.title{\n  flex: 1;\n}\n.flexCenter{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n.active:active{\n  background-color: #eeeeee;\n}\n.active{\n  cursor: pointer;\n}\n</style>\n"]}, media: undefined });
Object.defineProperty(this, "$style", { value: {"header":"src-header-ztN-","slot":"src-slot-3zsj","title":"src-title-3Yw6","flexCenter":"src-flexCenter-3ilh","active":"src-active-3geg"} });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "D:\\VUE\\v-header\\src\\index.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */
  

  
  var Header = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    __vue_create_injector__,
    undefined
  );

/* eslint-disable */

function install (Vue) {
  if (install.installed) {
    return
  }
  install.installed = true;
  Vue.component(Header.name, Header);
}
var plugin = {
	install: install
};

var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

var index = {
  Header: Header,
  install: install
};

export default index;
