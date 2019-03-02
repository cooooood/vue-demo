<template>
<div class="">
  <div id="demoSliderContainer">
    <ul id="demoSlider" :class="slideImages">
      <li v-for="(image,index) in imageArr" :key="index" :class="image.imgClass">
        <!-- src引用资源，dom渲染时可以直接将相对路径写入src -->
        <!-- dom加载完再配置src时只能写绝对路径，或者使用require将资源引入作为对象 配置到src -->
        <img :src="image.icon" :alt="image.alt" style="width: 650px; height: 360px;"/>
        <span>{{ image.alt }}</span>
      </li>
    </ul>
    <div class="options">
      <a href="javascript:;" @click="prevPage" class="prevSlide">Prev</a>
      <span class="slide-pager">
        <a href="javascript:;" v-for="(image,imgIndex) in imageArr" @click="selectImg(imgIndex)" :class="image.sliderNum">{{ imgIndex+1 }}</a>
      </span>
      <a href="javascript:;" @click="nextPage" class="nextSlide">Next</a>
    </div>
  </div>
  <div id="options">
    <label for="transitionEffect">Transition effect :</label>
    <select id="transitionEffect" @change="chengeMode">
      <option value="transition-opacity">opacity fade</option>
      <option value="transition-left">left slide</option>
      <option value="transition-right">right slide</option>
      <option value="transition-top">top slide</option>
      <option value="transition-bottom">bottom slide</option>
      <option value="transition-zoom">zoom</option>
      <option value="transition-dezoom">de-zoom</option>
      <option value="transition-cornerzoom">corner zoom</option>
      <option value="transition-rotate">rotate</option>
    </select>
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
      slideImages: 'slide-images transition-opacity',
      currentImgIndex: 0,
      lastChangeImgeTime: Date.now(),
      intervalCount: '',
      imageArr: [{
        icon: require('@/assets/img/one.jpg'),
        alt: 'one',
        imgClass: 'slide-image current',
        sliderNum: 'current'
      },
      {
        icon: require('@/assets/img/two.jpeg'),
        alt: 'two',
        imgClass: 'slide-image',
        sliderNum: ''
      },
      {
        icon: require('@/assets/img/three.jpg'),
        alt: 'three',
        imgClass: 'slide-image',
        sliderNum: ''
      }
    ],
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
      this.intervalCount = setInterval(()=> {
        let now = new Date().getTime();
          if(now - this.lastChangeImgeTime > 5000){
            this.nextPage()
          }
      }, 1000);
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
    clearInterval(this.intervalCount)
  },
  // 自定义api
  methods: {
    chengeMode(event) {
      console.log(event);
      this.slideImages = 'slide-images ' + event.target.value
    },
    prevPage() {
      if (this.currentImgIndex === 0) {
        this.imageArr[this.currentImgIndex].imgClass = 'slide-image'
        this.imageArr[this.currentImgIndex].sliderNum = ''
        this.currentImgIndex = this.imageArr.length - 1
        this.imageArr[this.imageArr.length - 1].imgClass = 'slide-image current'
        this.imageArr[this.imageArr.length - 1].sliderNum = 'current'
      } else {
        this.imageArr[this.currentImgIndex].imgClass = 'slide-image'
        this.imageArr[this.currentImgIndex].sliderNum = ''
        this.imageArr[this.currentImgIndex - 1].imgClass = 'slide-image current'
        this.imageArr[this.currentImgIndex - 1].sliderNum = 'current'
        this.currentImgIndex -= 1
      }
      this.lastChangeImgeTime = new Date().getTime()
    },
    nextPage() {
      if (this.currentImgIndex === this.imageArr.length - 1) {
        this.imageArr[this.currentImgIndex].imgClass = 'slide-image'
        this.imageArr[this.currentImgIndex].sliderNum = ''
        this.currentImgIndex = 0
        this.imageArr[0].imgClass = 'slide-image current'
        this.imageArr[0].sliderNum = 'current'
      } else {
        this.imageArr[this.currentImgIndex].imgClass = 'slide-image'
        this.imageArr[this.currentImgIndex].sliderNum = ''
        this.imageArr[this.currentImgIndex + 1].imgClass = 'slide-image current'
        this.imageArr[this.currentImgIndex + 1].sliderNum = 'current'
        this.currentImgIndex += 1
      }
      this.lastChangeImgeTime = new Date().getTime()
    },
    selectImg(imgIndex) {
      console.log('imgIndex--',imgIndex);
      this.imageArr[this.currentImgIndex].imgClass = 'slide-image'
      this.imageArr[this.currentImgIndex].sliderNum = ''
      this.imageArr[imgIndex].imgClass = 'slide-image current'
      this.imageArr[imgIndex].sliderNum = 'current'
      this.currentImgIndex = imgIndex
      this.lastChangeImgeTime = new Date().getTime()
    },
  }
}
</script>
<!-- src="../../style/timings_demo.css" -->
<style src="../../style/timings_demo2.css">
</style>
