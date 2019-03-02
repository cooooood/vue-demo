<template>
<div style="height: 400px;">
  <div class="gradient-border">
    <div class="content">
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

  },
  //完成了data数据的初始化 el还未初始化
  created() {
    console.log('cececec');
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
<style>
/* 效果1 */
/* .gradient-border {
  margin: 0px auto;
  padding: 5px 5px;
  height: 110px;
  width: 310px;
  background: linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82);
  border-radius: 10px;
}
.content {
  height: 100px;
  width: 300px;
  border-radius: 5px;
  background: #fff;
} */
/* 效果2 */
.content {
  height: 100px;
  width: 300px;
  border-radius: 5px; 
  background: #fff;
}
.gradient-border {
  margin: 0px auto;
  padding: 5px 5px;
  height: 110px;
  width: 310px;
  border-radius: 10px;
  background-image: radial-gradient(circle at 50% 0%, #fff000 50%, #ffcd00 100%),
  linear-gradient(101deg, #ffc46d, #fa0055);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
</style>
