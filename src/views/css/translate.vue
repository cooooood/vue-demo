<template>
<div class="">
  <!-- <div class="menu">
    <ul class="clearfix">
      <li class="item translate"><a href="#">Translate</a></li>
      <li class="item translate-x"><a href="#">TranslateX</a></li>
      <li class="item translate-y"><a href="#">TranslateY</a></li>
      <li class="item rotate"><a href="#">Rotate</a></li>
      <li class="item scale"><a href="#">Scale</a></li>
    </ul>
  </div>
  <div class="menu">
    <ul class="clearfix">
      <li class="item scale-x"><a href="#">ScaleX</a></li>
      <li class="item scale-y"><a href="#">ScaleY</a></li>
      <li class="item skew"><a href="#">Skew</a></li>
      <li class="item skew-x"><a href="#">SkewX</a></li>
      <li class="item skew-y"><a href="#">SkewY</a></li>
      <li class="item matrix"><a href="#">Matrix</a></li>
    </ul>
  </div> -->
  <div :class="translate.menu">
    <ul :class="translate.clearfix">
      <li :class="[translate.item,translate.translate]"><a href="#">Translate</a></li>
      <li :class="[translate.item,translate.translateX]"><a href="#">TranslateX</a></li>
      <li :class="[translate.item,translate.translateY]"><a href="#">TranslateY</a></li>
      <li :class="[translate.item,translate.rotate]"><a href="#">Rotate</a></li>
      <li :class="[translate.item,translate.scale]"><a href="#">Scale</a></li>
    </ul>
  </div>
  <div :class="translate.menu">
    <ul :class="translate.clearfix">
      <li :class="[translate.item,translate.scaleX]"><a href="#">ScaleX</a></li>
      <li :class="[translate.item,translate.scaleY]"><a href="#">ScaleY</a></li>
      <li :class="[translate.item,translate.skew]"><a href="#">Skew</a></li>
      <li :class="[translate.item,translate.skewX]"><a href="#">SkewX</a></li>
      <li :class="[translate.item,translate.skewY]"><a href="#">SkewY</a></li>
      <li :class="[translate.item,translate.matrix]"><a href="#">Matrix</a></li>
    </ul>
  </div>
</div>
</template>
<script>
import translate from '../../style/translate.module.css'
export default {
  // 父组件传参
  props: [],
  // el 和 data还未初始化
  beforeCreate() {

  },
  // 当前实例对象数据
  data() {
    return {
      // childrenFullName: '',
      translate
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

  }
}
</script>
<style>

</style>
