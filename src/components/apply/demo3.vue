<template>
<div>
  <i :class="loveClass"></i>
  <Button type="info" @click="pausedLove">暂停</Button>
  <Button type="info" @click="showToast">toast</Button>
  <!-- <div :class="toastClass">提交成功</div> -->
  <!-- <div :class="toastClass">测试十二个字提交成功状态</div> -->
  <div class="toast-container">
    <div :class="toastClass">测试十二个字提交成功状态</div>
  </div>
  <!-- 行内元素水平居中 -->
  <!--
  text-align:center（在父元素中设置）
  只对内联元素或行内块元素有效
  需要放置于父元素中
  -->
  <div class="inline-center">
    <span>水平居中</span>
  </div>
  <!-- 块元素水平居中 -->
  <div style="text-align: center;">
    <div class="block-center">水平居中</div>
  </div>
  <!-- 行内元素垂直居中 -->
  <!-- <div style="text-align: center; height: 100px; background-color: grey; line-height: 100px;">
    <span style="color: red;">垂直居中1</span>
    <span style="color: red;">垂直居中2</span>
    <span style="color: red;">垂直居中3</span>
  </div> -->
  <!-- 行内元素垂直居中 -->
  <!-- <div style="text-align: center; height: 100px; background-color: #63aad2;">
    <span style="color: red; vertical-align: middle;">垂直居中</span>
    <span style="color: red; vertical-align: middle;">垂直居中2</span>
  </div> -->
  <!-- 行内元素垂直居中 -->
  <!-- <div style="text-align: center; height: 100px; background-color: grey; padding: 50px 0px;">
    <span style="color: red;">垂直居中1</span>
    <span style="color: red;">垂直居中2</span>
    <span style="color: red;">垂直居中3</span>
  </div> -->
  <div class="relative">
    <div class="absolute">

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
      loveClass: 'love',
      toastClass: ''
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
    pausedLove() {
      if (this.loveClass.indexOf('stop') >= 0) {
        this.loveClass = 'love'
      } else {
        this.loveClass = 'love stop'
      }
    },
    showToast() {
      if (this.toastClass) {
        this.toastClass = ''
      } else {
        this.toastClass = 'toast'
      }
    }
  }
}
</script>
<!-- src="../../style/timings_demo.css" -->
<style>
@keyframes 'heartBurst' {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 100%;
  }
}

.love {
  display: block;
  width: 100px;
  height: 100px;
  background: url(../../assets/img/web_heart_animation.png) 0 0 no-repeat;
  background-size: 2900%;
  animation: "heartBurst" steps(28) 0.8s infinite both;
}

.stop {
  animation-play-state: paused;
}
/* .toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 13px 16px;
  font-size: 14px;
  color: #ccc;
  background-color: rgba(37, 38, 45, 0.9);
  border-radius: 2px;
} */
/* 设置为 position: fixed的元素不仅位置是相对于屏幕边界定位，如果不指定元素宽高的话，宽高同样也会相对于屏幕边界被截断。 */
/* .toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 13px 16px;
  font-size: 14px;
  color: #ccc;
  background-color: rgba(37, 38, 45, 0.9);
  border-radius: 2px;
  // 新增代码如下
  width: auto;
  max-width: 12em;
} */
/* 解决这个问题 */
/* 兼容性好 */
.toast-container {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 100%;
  top: 100%;
}

.toast {
  position: absolute;
  top: -50%;
  left: -50%;
  transform: translate(-50%, -50%);
  width: auto;
  max-width: 12em;
  padding: 13px 16px;
  font-size: 14px;
  color: #ccc;
  background-color: rgba(37, 38, 45, 0.9);
  border-radius: 2px;
}
.inline-center {
  text-align: center;
  background-color: grey;
  color: red;
}
.block-center {
  width: 100px;
  margin: 0 auto;
  background-color: grey;
  color: red;
}
.relative {
  position: relative;
  background-color: blue;
  width: 300px;
  height: 300px;
}
.absolute {
  /* position: absolute;
  background-color: grey;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%; */
  /*水平居中*/
  /* margin-left: -50px;  */
  /*垂直居中*/
  /* margin-top: -50px;       */
  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);  */


  position: absolute;
  background-color: grey;
  width: 100px;
  height: 100px;
  left: 0;
  right: 0;           /*水平居中*/
  top: 0;
  bottom: 0;          /*垂直居中*/
  margin: auto;
}
</style>
