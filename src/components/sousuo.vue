<template>
    <transition class="animated" enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
        <el-row class="top" id="search" transition="bounce">

            <el-col :xs={span:17,offset:3} :sm={span:8,offset:8}>
                <el-form class="demo-ruleForm" action="javascript:;">
                    <p>
                        <strong>
                            sosos
                        </strong>
                    </p>
                    <input type="text" class="el-input__inner" v-model="ser" @keyup="soso()">

                </el-form>
            </el-col>

            <el-col :xs={span:17,offset:3} :sm={span:8,offset:8}>

                <ul>

                        <li v-for="list in search" >
                             {{list}} 
                        </li>

                </ul>

            </el-col>

        </el-row>
    </transition>
</template>

<script>
import { vuex_store } from '../vuex.js'
export default {
    data() {
        return {
            search: [],
            ser: '',
            ulrnow: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su'

        };
    },
    store: vuex_store,
    transitions: {
        bounce: {
            enterClass: 'fadeInLeft',
            leaveClass: 'fadeInRight'
        }
    },
    methods: {

        danji(info) {
            this.ser = info;
            this.soso();
        },
        soso() {
            // console.log(this.ser)
            this.$http.jsonp(this.ulrnow, {
                params: { wd: this.ser },
                jsonp: 'cb'
            }
            ).then(res => {

                this.search = res.body.s;

            }),
                err => {
                    console.error(err)
                }
        },

    },
    mounted() {

        this.$emit('father', 2)
        if (sessionStorage['statue'] != 200) {
            if (confirm('你尚未登录，是否立即登录')) {
                window.location.href = '#/reg';
            }
        }
    }

}
</script>
<style>

#search strong {
    display: block;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: red;
}


</style>
