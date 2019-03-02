<template>
<div class="">
  <!-- <a id="timings-demo-btn" @click="openAclose">click</a> -->
  <Button type="primary" @click="openAclose" style="margin-top: 15px;">open&close</Button>
  <div id="timings-demo" :class="boxHover" style="margin-top: 10px;">
    <div id="ease" class="demo-box">Ease</div>
    <div id="ease-in" class="demo-box">Ease-in</div>
    <div id="ease-out" class="demo-box">Ease-out</div>
    <div id="ease-in-out" class="demo-box">Ease-in-out</div>
    <div id="linear" class="demo-box">Linear</div>
    <div id="cubic-bezier" class="demo-box">Cubic-bezier</div>
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
      boxHover: '',
    }
  },
  // 计算属性,只在初始化时执行一次
  computed: {
    // childrenFullName() {
    //   console.log(this.$route.params.fullName);
    //   return this.$route.params.fullName
    // }
  },
  // 侦听器
  watch: {

  },
  //完成了data数据的初始化 el还未初始化
  created() {
    console.log(this.$route);
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
    openAclose() {
      if (this.boxHover) {
        this.boxHover = ''
      } else {
        this.boxHover = 'timings-demo-hover'
      }
    }
  }
}
</script>
<!-- src="../../style/timings_demo.css" -->
<style src="../../style/timings_demo1.css">
</style>
