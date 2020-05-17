<template>
  <div class="app">
    <div class="nav-list">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/bilibili">B站</router-link>
      <router-link to="/movie">电影</router-link>

      <div class="login" v-if="loginUser">
        <span>{{ loginUser.name }}</span>
        <button class="loginOut" @click="loginOut">退出登录</button>
      </div>
    </div>

    <router-view></router-view><!-- 视图 -->

  </div>
</template>

<script>
export default {
  computed: {
    loginUser() {
      return this.$store.state.loginUser.data;
    }
  },
  methods: {
    loginOut() {
      this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/login");
    }
  }
}
</script>

<style scoped>
.nav-list{
  display: flex;
  height: 50px;
  line-height: 50px;
  background-color: rgb(29, 27, 27);
}
.nav-list a {
  color: #fff;
  font-weight: bold;
  padding: 0 15PX;
  text-decoration: none;
  margin-left: 60px;
}
.nav-list a:hover {
  background-color: rgba(255, 255, 255, .4);
}

.nav-list a.router-link-active {
  background-color: red;
  font-weight: bold;
}

.nav-list .login{
  position: absolute;
  right: 20px;
}
.nav-list .login .loginOut{
  margin-left: 20px;
}
.nav-list .login span{
  color: #f40;
  font-weight: bold;
}



</style>

