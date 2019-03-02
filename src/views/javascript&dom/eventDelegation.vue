<!-- 事件代理(利用事件冒泡的机制) -->
<template>
<div>
  <!-- DOM2.0模型将事件处理流程分为三个阶段：一、事件捕获阶段，二、事件目标阶段，三、事件起泡阶段 -->
  <!-- 事件捕获：当某个元素触发某个事件（如onclick），顶层对象document就会发出一个事件流，
  随着DOM树的节点向目标元素节点流去，直到到达事件真正发生的目标元素。在这个过程中，事件相应
  的监听函数是不会被触发的。

  事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就
  不执行。

  事件起泡：从目标元素开始，往顶层元素传播。途中如果有节点绑定了相应的事件处理函数，这些函数
  都会被一次触发。如果想阻止事件起泡，可以使用e.stopPropagation()（Firefox）
  或者e.cancelBubble=true（IE）来阻止事件的冒泡传播。 -->
  <!-- 参考翻译https://segmentfault.com/a/1190000002613617 -->
  <ul @click="handleClickAll">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
  </ul>
</div>
</template>
<script>

export default {
  // 父组件传参
  props: [],
  // el 和 data还未初始化
  beforeCreate() {

  },
  //导入组件
  components: {

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
  // 实例销毁前触发
  beforeDestroy() {

  },
  // 自定义api
  methods: {
    handleClickAll(event) {
      // console.log(event);
      console.log(event.target.nodeName.toLocaleUpperCase());
      if (event.target && event.target.nodeName.toLocaleUpperCase() === "LI") {
        console.log('adawd');
        // console.log(event.target.innerText)
        alert(event.target.innerText)
      }
    }
  }
}
</script>
<style>
</style>
