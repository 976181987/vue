<template>
  <div id="app" class="route">
    <nav class="navbar navbar-default">
      <ul>
        <li :class="{active:nav == 1}">
          <a href="#/index">列表</a>
        </li>
        <li :class="{active:nav == 2}">
          <a href="#/search">搜索</a>
        </li>
        <li :class="{active:nav == 3}">
          <a href="#/reg">登录</a>
        </li>
      </ul>
    </nav>

    <router-view @father="info"></router-view>

  </div>
</template>

<script>
import { main } from './public/css/main.css';
import { vuex_store } from './vuex.js';
export default {
  store: vuex_store,
  name: 'app',
  components: [main],
  data() {
    return {
      nav: this.$store.getters.list
    }
  },
  methods: {
    info(res) {

      this.nav = res;

    }
  },
  transition: {
    anim: {
      enterClass: 'bounceInLeft',
      leaveClass: 'bounceOutRight'
    }
  }
 
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
}

.clear:before,
.clear:after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  line-height: 0;
  visibility: hidden;
}

.clear {
  zoom: 1;
}

a {
  text-decoration: none;
  color: #000;
}

ul {
  list-style: none;
}

strong {
  font-weight: normal;
}

#app nav a {
  display: block;
}

#app nav ul {
  display: flex;
  justify-content: space-around;
}

#app nav li {
  width: 100%;
  text-align: center;
}

#app nav .active {
  background: #eee;
}

.route {
  width: 100%;
}

.top {
  position: absolute;
  top: 8rem;
  width: 100%;
}

body {
  overflow-x: hidden;
}
</style>