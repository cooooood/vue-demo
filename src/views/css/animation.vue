<template>
<div>
  <Menu mode="horizontal" @on-select="handleSelect" theme="light" active-name="demo1">
    <MenuItem v-for="(item,index) in menuItem" :key="index" :name="item.name">
    <Icon :type="menuIconType" />
    {{ item.name }}
    </MenuItem>
  </Menu>
  <component :is="activeDemo"></component>
</div>
</template>
<script>
import demo1 from '../../components/animation/demo1'
import demo2 from '../../components/animation/demo2'
export default {
  // 父组件传参
  props: [],
  // el 和 data还未初始化
  beforeCreate() {

  },
  //导入组件
  components: {
    demo1,
    demo2,
  },
  // 当前实例对象数据
  data() {
    return {
      menuIconType: 'ios-bonfire-outline',
      menuItem: [{
        name: 'demo1',
      },
      {
        name: 'demo2',
      }],
      activeDemo: 'demo1',
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
  // 实例销毁前触发
  beforeDestroy() {

  },
  // 自定义api
  methods: {
    handleSelect(menuName) {
      console.log('menuName---',menuName);
      if (menuName) {
        this.activeDemo = menuName
      }
    }
  }
}
</script>
<style>
</style>
