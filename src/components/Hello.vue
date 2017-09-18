<template>
  <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
    <div id="douban" class="douban">
      <select name="" id="selected" @change="chang()" v-model="ulrnow">
        <!-- <option v-for="list in selectUrl"  :value="list.url" >{{list.name}}</option> -->
        <option selected value="https://api.douban.com/v2/movie/in_theaters">正在热映</option>
        <option value="https://api.douban.com/v2/movie/top250">TOP250</option>
        <option value="https://api.douban.com/v2/movie/coming_soon">即将上映</option>
      </select>
      <div class="list">
        <ul>
          <li>
            <strong>名称</strong>
            <span>年份</span>
            <span>类型</span>
            <span>评分</span>
          </li>
          <li v-for="each in list">

            <strong>
              <a :href='each.alt'>
                {{each.title}}
              </a>
            </strong>
            <span>{{ each.year}}</span>
            <span>{{each.genres.join(",")}}</span>
            <span>{{each.rating.average}}</span>
          </li>

        </ul>
      </div>
    </div>

  </transition>
</template>

<script>
import Vue from 'vue'
import resource from 'vue-resource'
import { vuex_store } from '../vuex.js'
Vue.use(resource)
export default {
  components: { resource },
  name: 'hello',
  store: vuex_store,
  data() {
    return {
      list: '',
      selectUrl: [
        {
          url: 'https://api.douban.com/v2/movie/in_theaters',
          name: '正在上映'
        },
        {
          url: 'https://api.douban.com/v2/movie/top250',
          name: 'TOP250'
        },
        {
          url: 'https://api.douban.com/v2/movie/coming_soon',
          name: '即将上映'
        },
      ],
      ulrnow: "https://api.douban.com/v2/movie/in_theaters"
    }
  },
  methods: {
    chang() {
      this.$http.jsonp(this.ulrnow).then(res => {
        // genres 类型
        // title 名字
        //year 年份
        //rating.average 评分
        this.list = res.body.subjects;

      })
    }

  },
  mounted() {

    this.$emit('father', 1)
    if (sessionStorage['statue'] != 200) {
      if (confirm('你尚未登录，是否立即登录')) {
        window.location.href = '#/reg';
      }
    }

    this.$http.jsonp(this.ulrnow).then(res => {

      this.list = res.body.subjects;

    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.douban {
  width: 100%;
}

#selected {
  width: 100%;
  height: 2rem;
  border-radius: 3px;
  border: 1px solid #ccc;
}

#douban .list ul {
  margin-top: 1rem;
}

#douban .list li {

  display: flex;
  justify-content: space-around;
}


#douban .list li:nth-child(2n) {
  background: #1E90FF;
}

#douban .list li:nth-child(n+2):hover {
  background: skyblue;
}

#douban .list span,
#douban .list strong {
  flex: 25%;
  text-align: center;
  margin: 0.5rem 0;
}
</style>
