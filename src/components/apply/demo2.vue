<template>
<div class="">
  <a class="text">ZZQ</a>
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

    }
  },
  // 计算属性,只在初始化时执行一次
  computed: {

  },
  // 侦听器
  watch: {

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

  }
}
</script>
<!-- src="../../style/timings_demo.css" -->
<style scoped>
  .text {
    position: relative;
    left: 45%;
    width: 52px;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    transition: color 1s linear;
  }
  .text:hover{
    color: red;
  }
  /* .text:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 26px;
    width: 52px;
    height: 4px;
    background: red;
    transform:translateX(-50%) scaleX(0);
    transition: all 1s cubic-bezier(0, 0, 1, 1);
  }
  .text:hover:after {
    transform:translateX(-50%) scaleX(1);
  } */
  /*left: 26px; translateX(-50%)互消 多余 or */
  .text:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0px;
    width: 52px;
    height: 4px;
    background: red;
    transform: scaleX(0);
    transition: all 1s cubic-bezier(0, 0, 1, 1);
  }
  .text:hover:after {
    transform: scaleX(1);
  }
</style>
