<template>
    <div>
        <div class="login">
            <form>
                <label>
                    账号：
                    <input type="text" placeholder="请输入账号" v-model="loginId">
                </label>
            </form>
            <form>
                <label>
                    密码：
                    <input type="password" placeholder="请输入密码" autocomplete="off" v-model="loginPwd">
                </label>
            </form>
            <p>
                <button @click="handleLogin">登录</button>
            </p>

        </div>

        <Loading v-if="isLoading"> 加载中...</Loading>
    </div>

</template>

<script>
import Loading from "../components/MovieLoadingResult"
import { mapState } from "vuex"

export default {
    components: {
        Loading,
    },
    data() {
        return{
            loginId: '', // 暂存数据
            loginPwd: '',

        }
    },
    computed: {
        isLoading() { // 第一种
            return this.$store.state.loginUser.isLoading;
        }
        // ...mapState({ // 第二种
        //     isLoading: state => state.loginUser.isLoading
        // })
    },
    methods: {
        async handleLogin() {
            const result = await this.$store.dispatch('loginUser/login', { // action 分发：（函数名，参数） 调用actions的login函数，从而操作mutations改变状态
                loginId: this.loginId, 
                loginPwd: this.loginPwd
            });
            if (result) { // 登录成功 跳转首页
                this.$router.push('/'); 
            }else {
                alert('账号密码错误');
            }
        }
    }
}
</script>

<style scoped>
    .login{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .login form {
        margin-bottom: 10px;
    }
</style>