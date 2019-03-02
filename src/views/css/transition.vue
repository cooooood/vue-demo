<template>
<div>
  <div class="container">
    <div class="img">...</div>
    <!-- 全局自定义指令 -->
    <div>
      <input v-hello>
    </div>
    <div class="content" v-if="isShow" v-hello>内容...</div>
    <!-- 组件自定义指令 -->
    <div>
      <input v-focus>
    </div>
  </div>
  <button type="button" name="button" @click="testDirectives">测试指令</button>
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
      }
    }
  },
  //完成了data数据的初始化 el还未初始化
  created() {

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
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.container .content,
.container .img {
  flex: 1 0 12em;
  /* Change 12em to your breakpoint. */
}
</style>
