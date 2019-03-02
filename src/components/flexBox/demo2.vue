<template>
<div>
  <div id="container">
    <div class="">
      1
    </div>
    <div class="">
      2
    </div>
    <div class="">
      3
    </div>
    <div class="">
      4
    </div>
    <div class="">
      1
    </div>
    <div class="">
      2
    </div>
    <div class="">
      3
    </div>
    <div class="">
      4
    </div>
    <div class="">
      1
    </div>
    <div class="">
      2
    </div>
    <div class="">
      3
    </div>
    <div class="">
      4
    </div>
  </div>
</div>
</template>
<script>
export default {
  // 父组件传参
  props: [],
  // el 和 data还未初始化
  beforeCreate() {

  },
  // 当前实例对象数据
  data() {
    return {
      isShow: true,
      helloMessage: 'helloMessage',
    }
  },
  // 计算属性,只在初始化时执行一次
  computed: {

  },
  // 侦听器
  watch: {

  },
  //组件自定义指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
        console.log('组件自定义指令');
      }
    }
  },
  //完成了data数据的初始化 el还未初始化
  created() {
    console.log('组件中执行全局方法');
  },
  // 完成了el和data初始化
  beforeMount() {

  },
  // 完成挂载，数据data渲染到el中，el被新创建的le替换
  mounted() {
    // mounted不会承诺所有的子组件也都一起挂载。
    // nextTick会等到所有的视图渲染完成执行
    this.$nextTick(() => {

    })
  },
  // data里的值被更新时调用，适合处理在更新前访问现有的dom元素，比如手动移除已添加的事件监听器
  beforeUpdate() {

  },
  // data里的值更新后调用，此处切记更改状态，通常更改状态最好用computed或者watcher
  updated() {
    // nextTick会等到所有的视图渲染完成执行
    this.$nextTick(() => {

    })
  },
  // 实例销毁后触发
  beforeDestroy() {

  },
  // 自定义api
  methods: {
    testDirectives() {
      if (this.isShow) {
        this.isShow = false
      } else {
        this.isShow = true
      }
    }
  }
}
</script>
<!-- src="../../style/timings_demo.css" -->
<style>
#container {
  display: flex;
  justify-content: space-around; /* Can be changed in the live sample */
  align-items: center;
  flex-wrap: wrap;
}

#container > div {
  width: 100px;
  height: 100px;
  background: linear-gradient(-45deg, #788cff, #b4c8ff);
}
</style>
