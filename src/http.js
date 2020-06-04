import axios from 'axios';

// 全局配置
axios.defaults.baseURL = 'https://developer.duyiedu.com/vue/bz';

// // 响应拦截器 请求成功后，拦截的data数据信息 进行包装处理

axios.interceptors.response.use(response => {

    if(response.config.url === "http://localhost:8080/moviesData/movie.json") { // 获取本地模拟电影数据
        return response.data;
    }

    const { status } = response;
    const { baseURL, url} = response.config;
    if (status === 200) { // 请求成功
        // 通过url判断是video的
        if(baseURL + url === baseURL + '/video' ) { 
            return {
                count: response.data.count,
                data : response.data.data
            }
        }
        return response.data.data; 
    } else {
        // 请求失败
        return '';
    }
})

export default axios;