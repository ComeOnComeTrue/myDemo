import movieServiceHttp from "@/movieServiceHttp"; // 获取电影数据


export default {
    namespaced: true, // 开启命名空间
    state: {
        pageMovies: [], // 每页的视频数据

        current: 1, // 当前页码
        pageSize: 2, // 页容量 每页显示多少条数据
        total: 0, // 数据总量 总共有多少条数据
        panelNumber: 5, // 最多显示的数字页码的数量
        loadingShow: false, // 加载中显示与隐藏
    },
    mutations: {
        setState(state, newState = {}) {  // （state的状态，传过来的参数：默认值是对象）
            for (const prop in newState) {
                state[prop] = newState[prop]; // 重新赋值   
            }
        }
    },
    actions: {
        fetch(context) {
            context.commit('setState', { loadingShow: true });
            // 根据当前的分页设置，获取电影数据
            movieServiceHttp.getMovies(context.state.current, context.state.pageSize).then(resp => {
                // {total: xxx, datas: xxx}
                context.commit('setState', resp); // 得到数据，调用setState重新赋值改状态
                
                context.commit('setState', { loadingShow: false });
            })
        }
    }
}