<template>
<div class="">
  <p><span :class="textClass">ZZQ</span></p>
  <Button class="btn" type="primary" @click="chengeClass">切换</Button>
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
      textClass: 'text'
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
    chengeClass() {
      if (this.textClass.indexOf('active') >= 0) {
        this.textClass = 'text'
      } else {
        this.textClass = 'text active'
      }
    }
  }
}
</script>
<!-- src="../../style/timings_demo.css" -->
<style scoped>
.text {
  font-size: 25px;
  font-weight: bold;
  transition: color .2s linear;
  position: relative;
  top: 49%;
  left: 45%;
  text-align: center;
  display: inline-block;
}
.btn{
  margin-left: 45%;
  margin-top: 10px;
}

.text:after {
  content: '';
  transition: width .2s linear;
  display: block;
  margin: 0 auto;
  width: 0;
  height: 2px;
  background: red;
}

.text.active {
  color: red;
}
.text:hover{
  color: red;
}
.text:hover:after{
  width: 100%;
}
.text.active:after {
  width: 100%;
}
</style>
