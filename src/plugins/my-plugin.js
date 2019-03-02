export default {
  install(Vue, options) {
    Vue.$data = {
      firstName: 'zhu',
      lastName: 'jie'
    }
    console.log('oooo---',`${Vue.$data.firstName}_${Vue.$data.lastName}`);
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function(test) {
      // 逻辑...
      console.log('test===',test);
    }

    // 2. 添加全局资源
    Vue.directive('hello', {
      // 只调用一次，指令第一次绑定到元素时调用
      bind: function(el) {
        console.log('触发bind钩子函数！')
        console.log('执行全局方法');
        Vue.myGlobalMethod('myGlobalMethod')
      },
      // 被绑定元素插入父节点时调用
      inserted: function(el) {
        console.log('触发inserted钩子函数！')
      },
      // 所在组件的`VNode`更新时调用，但是可能发生在其子元素的`VNode`更新之前
      update: function(el) {
        console.log('触发update钩子函数！')
      },
      // 所在组件的`VNode`及其子元素的`VNode`全部更新时调用
      componentUpdated: function(el) {
        console.log('触发componentUpdated钩子函数！')
      },
      // 只调用一次，指令与元素解绑时调用
      unbind: function(el) {
        console.log('触发unbind钩子函数！')
      }
    })
    // 注册一个全局自定义指令 `v-focus`
    // Vue.directive('focus', {
    //   // 当被绑定的元素插入到 DOM 中时……
    //   inserted: function(el) {
    //     // 聚焦元素
    //     el.focus()
    //   }
    // })
    // 3. 注入组件
    Vue.mixin({created: function() {
        // 逻辑...
      }})

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function(methodOptions) {
      // 逻辑...
    }
  }
}
