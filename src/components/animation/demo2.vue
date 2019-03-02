<template>
<div class="">
  <a href="#" :class="boxClass"></a>
  <span class="click-btn" @click="handleAnimation">Click</span>
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
      boxClass: 'box'
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
    handleAnimation() {
      if (this.boxClass.indexOf('round') >= 0) {
        this.boxClass = 'box'
      } else {
        this.boxClass = 'box round'
      }
    }
  }
}
</script>
<style>
/*定义方型转化为圆型的动画round*/
@-webkit-keyframes 'round' {
  from {
    -webkit-transform: rotate(36deg);
    -webkit-border-radius: 2px;
    transform: rotate(36deg);
    border-radius: 2px;
  }

  10% {
    -webkit-transform: rotate(72deg);
    -webkit-border-radius: 4px;
    transform: rotate(72deg);
    border-radius: 4px;
  }

  20% {
    -webkit-transform: rotate(108deg);
    -webkit-border-radius: 6px;
    transform: rotate(108deg);
    border-radius: 6px;
  }

  30% {
    -webkit-transform: rotate(144deg);
    -webkit-border-radius: 9px;
    transform: rotate(144deg);
    border-radius: 9px;
  }

  40% {
    -webkit-transform: rotate(180deg);
    -webkit-border-radius: 12px;
    transform: rotate(180deg);
    border-radius: 12px;
  }

  50% {
    -webkit-transform: rotate(216deg);
    -webkit-border-radius: 14px;
    transform: rotate(216deg);
    border-radius: 14px;
  }

  60% {
    -webkit-transform: rotate(252deg);
    -webkit-border-radius: 16px;
    transform: rotate(252deg);
    border-radius: 16px;
  }

  70% {
    -webkit-transform: rotate(288deg);
    -webkit-border-radius: 19px;
    transform: rotate(288deg);
    border-radius: 19px;
  }

  80% {
    -webkit-transform: rotate(324deg);
    -webkit-border-radius: 22px;
    transform: rotate(324deg);
    border-radius: 22px;
  }

  to {
    -webkit-transform: rotate(360deg);
    -webkit-border-radius: 25px;
    transform: rotate(360deg);
    border-radius: 25px;
  }
}

/*给方型box一个初步样式*/
a.box {
  display: block;
  width: 50px;
  height: 50px;
  background: red;
  margin: 60px;
}

/*圆型box的样式，并在这里应用animation*/
a.round {
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  background: green;
  -webkit-animation-name: 'round';/*动画名称*/
  -webkit-animation-duration: 60s;/*播放一次所持续时间*/
  -webkit-animation-timing-function: ease;/*动画播放频率*/
  -webkit-animation-iteration-count: infinite;/*动画播放次涒为无限次*/
}

/*click button效果*/
.click-btn {
  background: rgba(125, 220, 80, 0.8);
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(10, 255, 120, 0.3);
  -moz-box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(10, 255, 120, 0.3);
  box-shadow: inset 0 0 8px rgba(255, 255, 255, 0.8), 0 0 10px rgba(10, 255, 120, 0.3);
  padding: 5px 10px;
  color: #369;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.5);
  cursor: pointer;
  margin: 60px;
}
</style>
