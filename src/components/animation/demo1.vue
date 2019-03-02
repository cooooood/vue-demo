<template>
<div class="">
  <button type="button" name="button">发光的button</button>
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
  @-webkit-Keyframes 'buttonLight' {
    from {
      background: rgba(96, 203, 27,0.5);
      -webkit-box-shadow: 0 0 5px rgba(255, 255, 255, 0.3) inset, 0 0 3px rgba(220, 120, 200, 0.5);
      color: red;
    }
    25% {
       background: rgba(196, 203, 27,0.8);
       -webkit-box-shadow: 0 0 10px rgba(255, 155, 255, 0.5) inset, 0 0 8px rgba(120, 120, 200, 0.8);
       color: blue;
    }
    50% {
      background: rgba(196, 203, 127,1);
      -webkit-box-shadow: 0 0 5px rgba(155, 255, 255, 0.3) inset, 0 0 3px rgba(220, 120, 100, 1);
      color: orange;
    }
    75% {
      background: rgba(196, 203, 27,0.8);
      -webkit-box-shadow: 0 0 10px rgba(255, 155, 255, 0.5) inset, 0 0 8px rgba(120, 120, 200, 0.8);
      color: black;
    }
   to {
     background: rgba(96, 203, 27,0.5);
     -webkit-box-shadow: 0 0 5px rgba(255, 255, 255, 0.3) inset, 0 0 3px rgba(220, 120, 200, 0.5);
     color: green;
    }
  }
  button { /*按钮的基本属性*/
    margin: 50px 50px;
    background: #7fdd21;
    font-size: 16px;
    padding: 10px 15px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    text-shadow: 0 -1px 1px rgba(0,0,0,0.3);
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-box-shadow: 0 0 5px rgba(255, 255, 255, 0.6) inset, 0 0 3px rgba(220, 120, 200, 0.8);
    -webkit-box-shadow: 0 0 5px rgba(255, 255, 255, 0.6) inset, 0 0 3px rgba(220, 120, 200, 0.8);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.6) inset, 0 0 3px rgba(220, 120, 200, 0.8); /*调用animation属性，从而让按钮在载入页面时就具有动画效果*/
    -webkit-animation-name: "buttonLight"; /*动画名称，需要跟@keyframes定义的名称一致*/
    -webkit-animation-duration: 5s;/*动画持续的时间长*/
    -webkit-animation-iteration-count: infinite;/*动画循环播放的次数*/
  }
</style>
