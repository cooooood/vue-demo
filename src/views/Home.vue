<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
}
.layout .ivu-layout {
  height: 100%;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}

.menu-icon {
  transition: all 0.3s;
}

.rotate-icon {
  transform: rotate(-90deg);
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}

.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <Menu
          active-name="1-2"
          theme="dark"
          width="auto"
          @on-select="handleSelect"
          :class="menuitemClasses"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="logo-css3"/>CSS
            </template>
            <MenuGroup title="动画">
              <MenuItem name="translate">
                <Icon type="md-bulb"/>
                <span>Translate</span>
              </MenuItem>
              <MenuItem name="transition">
                <Icon type="md-bulb"/>
                <span>Transition</span>
              </MenuItem>
              <MenuItem name="animation">
                <Icon type="md-bulb"/>
                <span>Animation@Keyframes</span>
              </MenuItem>
              <MenuItem name="apply">
                <Icon type="md-bulb"/>
                <span>apply</span>
              </MenuItem>
              <MenuItem name="flex">
                <Icon type="md-bulb"/>
                <span>flexBox</span>
              </MenuItem>
              <MenuItem name="linear-gradient">
                <Icon type="md-bulb"/>
                <span>linear-gradient</span>
              </MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="logo-javascript"/>JS
            </template>
            <MenuGroup title="事件">
              <MenuItem name="eventDelegation">
                <Icon type="md-bulb"/>
                <span>事件代理</span>
              </MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon
            @click.native="collapsedSider"
            :class="rotateIcon"
            :style="{margin: '0 20px'}"
            type="md-menu"
            size="24"
          ></Icon>
          <Avatar :class="[avatar.color,avatar.position]">{{ user }}</Avatar>
        </Header>
        <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
          <!-- {{ fullName }} -->
          <router-view/>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import avatar from "../style/avatar.module.css";
export default {
  // 父组件传参
  props: [],
  // el 和 data还未初始化
  beforeCreate() {},
  // 当前实例对象数据
  data() {
    return {
      isCollapsed: false,
      user: "zhujie",
      // color: '#00a2ae',
      avatar,
      firstName: "zhu",
      lastName: "jie",
      // fullName: 'hhahah',
      index: 0,
      interval: ""
    };
  },
  // 计算属性,计算属性是基于它们的依赖进行缓存的,但每当触发重新渲染时,调用方法将总会再次执行函数。
  // 计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter
  computed: {
    rotateIcon() {
      console.log("this.isCollapsed-rotateIcon-", this.isCollapsed);
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      console.log("this.isCollapsed-menuitemClasses-", this.isCollapsed);
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    fullName: {
      // getter
      get: function() {
        console.log("lastName---", this.lastName);
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  // 侦听器
  watch: {},
  //完成了data数据的初始化 el还未初始化
  created() {
    console.log("init");
    console.log(avatar);
  },
  // 完成了el和data初始化
  beforeMount() {},
  // 完成挂载，数据data渲染到el中，el被新创建的le替换
  mounted() {
    // mounted不会承诺所有的子组件也都一起挂载。
    // nextTick会等到所有的视图渲染完成执行
    this.$nextTick(() => {
      this.interval = setInterval(() => {
        this.index += 1;
        this.fullName = "zhu jie" + this.index;
      }, 500000);
    });
  },
  // data里的值被更新时调用，适合处理在更新前访问现有的dom元素，比如手动移除已添加的事件监听器
  beforeUpdate() {},
  // data里的值更新后调用，此处切记更改状态，通常更改状态最好用computed或者watcher
  updated() {
    // nextTick会等到所有的视图渲染完成执行
    this.$nextTick(() => {});
  },

  // 实例销毁前触发
  beforeDestroy() {
    clearInterval(this.interval);
  },
  // 自定义api
  methods: {
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    handleSelect(menuName) {
      console.log("menuName---", menuName);
      if (menuName) {
        console.log("跳转");
        this.$router.push({
          name: menuName
          // params: {
          //   fullName: 'ceshi',
          //   age: 12,
          // }
        });
      }
    }
  }
};
</script>
