<template>
    <div class="movieDetail-box">
        <movie-single v-if="movieDetail" :movieSingleData="movieDetail" />
        <movie-loading  v-if="isLoading">加载中...</movie-loading>


        <button class="previous" @click="handlePre">返回</button>
    </div>
    
</template>

<script>
import MovieSingle from "../components/MovieSingle"
import movieServiceHttp from "../movieServiceHttp.js"
import MovieLoading from "../components/MovieLoadingResult"

export default {
    components: {
        MovieSingle,
        MovieLoading,
    },
    data() {
        return {
            movieDetail: null, // 单个电影详情信息
            isLoading: false,
        }
    },
    created() {
        const id = this.$route.params.id; // 得到动态路由id

        this.isLoading = true;

        movieServiceHttp.getMoviesDetail(id).then(resp => { // 远程获取单个电影信息
            this.movieDetail = {...resp[0]};
            this.isLoading = false;
        })

    },
    methods: {
        handlePre() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.previous{
    position: fixed;
    right: 300px;
    top: 80px;
    padding: 8px 16px;
    border-radius: 8px;
    font-weight: bold;
}
.previous:hover {
    color: red; 
}
</style>
